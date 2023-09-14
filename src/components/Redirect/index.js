import React from "react";
import { redirect } from "next/navigation";
const Redirect = ({ children }) => redirect(children);
export default Redirect;
