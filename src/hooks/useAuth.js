import { useReducer } from "react";
import axios from "axios";
import { ROLES } from "../constants/roles";

const AUTH_ACTIONS = {
  AUTHENTICATE: "AUTHENTICATE",
  LOGOUT: "LOGOUT",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  ALERT: "showAuthAlert",
};

const getToken = () => localStorage.getItem("token") || null;

const getRole = () => localStorage.getItem("role") || ROLES.GUEST;

const INIT_STATE = {
  user: null,
  isAuth: false,
  token: getToken(),
  role: getRole(),
  error: null,
  isLoading: false,
  showAuthAlert: false,
};

const authReducer = (state, action) => {
  const checkRole = () => (action.payload.isAdmin ? ROLES.ADMIN : ROLES.USER);
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return { ...state, isLoading: true };
    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case AUTH_ACTIONS.AUTHENTICATE:
      const token = action.payload.token || state.token || getToken(); // Use the getToken function here
      const role = checkRole();
      localStorage.setItem("role", role);
      localStorage.setItem("token", token);

      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: token,
        role: role,
        isLoading: false,
      };
    case AUTH_ACTIONS.ALERT:
      return { ...state, showAuthAlert: true };
    case AUTH_ACTIONS.LOGOUT:
      localStorage.removeItem("role");
      localStorage.removeItem("token");
      return {
        user: null,
        isAuth: false,
        token: null,
        role: getRole(),
        error: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, INIT_STATE);

  const handleAUTHENTICATE = async (apiEndPoint, body) => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING });
      const { data } = await axios.post(apiEndPoint, body);
      dispatch({ type: AUTH_ACTIONS.AUTHENTICATE, payload: data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const logout = () => dispatch({ type: AUTH_ACTIONS.LOGOUT });

  return { ...state, handleAUTHENTICATE, logout };
};

export default useAuth;
