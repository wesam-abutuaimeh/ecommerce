'use client';
import React from "react";

// Custom Component
import OrLine from "@/components/atoms/OrLine";
import CustomLink from "@/components/atoms/CustomLink";
import { H1 } from "@/components/atoms/Typography/style";
import Button from "@/components/atoms/Button";
import CustomImage from "@/components/atoms/CustomImage";

// APIs end pointes
import { END_POINTS } from "@/constants/endPoints";

// Custom Hooks
import { useAuthContext } from '@/contexts/AuthContext';

// validations
import { loginSchema } from "@/validation/validationSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Style
import { StyledSignin } from "./style";

const SignIn = () => {
  const { handleAUTHENTICATE } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log('Work');
    await handleAUTHENTICATE(END_POINTS.LOGIN, data);
    console.log('end');
  };

  return (
    <StyledSignin>
      <div className="inputs__container">
        <H1>Sign in</H1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username</label>
          <input type='email' id='username' name='Username' placeholder="Email or phone" className="text__field"
            {...register('email')}
          />
          {errors?.email && <span>{errors?.email?.message}</span>}

          <div className="password__head">
            <label htmlFor="Password">Password</label>
            <CustomLink href="/signup" id="forgetPassword">Forgot Password</CustomLink>
          </div>
          <div className="password__input">
            <input type='Password' id='Password' name='Password' placeholder='Type here' className="text__field"
              {...register('password')}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 8.74 9.24 6.5 12 6.5C14.76 6.5 17 8.74 17 11.5C17 14.26 14.76 16.5 12 16.5ZM12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5Z" fill="#A9ACB0" />
            </svg>
          </div>
          {errors?.password && <span>{errors?.password?.message}</span>}

          <label htmlFor="remember" id="remember__container" className="remember__container">
            <input type="checkbox" name="remember" id="remember" />
            <p>Remember me</p>
          </label>

          <Button
            type="submit"
            className="signin"
            bgColor="#4267B2"
            color="#FFF"
            width="327px"
            height="40px"
            padding="11px"
          >
            Log In
          </Button>

          <OrLine />

          <Button bgColor="#FFF" color="#606060" width="327px" height="40px" padding="11px">
            <CustomImage src="/google__icon.png" alt="Google Icon" width="22" height="22" />
            <p>Continue with Google</p>
          </Button>
          <Button bgColor="#4267B2" color="#FFF" width="327px" height="40px" padding="11px">
            <CustomImage src="/facebook__icon.png" alt="Facebook Icon" width="22" height="22" />
            <p>Continue with Facebook</p>
          </Button>
        </form>
        <span>Don’t have an account? <CustomLink href="register" id="register">Register now</CustomLink></span>
      </div>
    </StyledSignin >
  );
};

export default SignIn;
