'use client';
import React, { useState } from 'react';

// Custom Component
import Input from '@/components/atoms/Input';
import CustomLink from '@/components/atoms/CustomLink';
import { H1 } from '@/components/atoms/Typography/style';
import Button from '@/components/atoms/Button';

// APIs end pointes
import { END_POINTS } from "@/constants/endPoints";

// Custom Hooks
import { useAuthContext } from '@/contexts/AuthContext';

// validations
import { loginSchema } from "@/validation/validationSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Style
import { StyledRegister } from './style';

const Register = () => {
    const { handleAUTHENTICATE } = useAuthContext();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handlelastName = (e) => {
        setLastName(e.target.value);
    };

    const fullName = `${firstName} ${lastName}`;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        console.log('start');
        data = { ...data, name: fullName };
        await handleAUTHENTICATE(END_POINTS.SIGNUP, data);
        console.log('end');
        console.log(data)
    };

    return (
        <StyledRegister>
            <div className="inputs__container">
                <H1>Register</H1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="name__input__container">
                        <div>
                            <label htmlFor="name">Name</label>
                            <Input type="text" id="name" name="name" placeholder="Type Here"
                                value={firstName}
                                onChange={handleFirstName}
                                width="165px" height="40px" />
                        </div>
                        <div className="surname">
                            <label htmlFor="surname">Surname</label>
                            <Input type="text" id="surname" name="surname" placeholder="Type Here"
                                value={lastName}
                                onChange={handlelastName}
                                width="166px" height="40px" />
                        </div>
                    </div>

                    <label htmlFor="email">Your e-mail</label>
                    <input type="email" id="email" name="email" placeholder="example@mail.com" width="340px" height="40px" {...register("email")} className='text__field' />
                    {errors.email && <p>{errors?.email?.message}</p>}

                    <div className="phone__container">
                        <label htmlFor="phone">Phone</label>
                        <div>
                            <select name="phonePrefix" id="phonePrefix">
                                <option value="UZ +998">UZ +998</option>
                                <option value="UZ +998">UZ +998</option>
                                <option value="UZ +998">UZ +998</option>
                            </select>
                            <Input type="text" id="phone" name="phone" placeholder="00-000-00-00" width="230px" height="40px" />
                        </div>
                    </div>

                    <label htmlFor="Password">Password</label>
                    <div className="password__input">
                        <input type="password" id="Password" name="Password" placeholder="At least 6 characters." width="340px" height="40px" className='text__field'
                            {...register("password")} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 8.74 9.24 6.5 12 6.5C14.76 6.5 17 8.74 17 11.5C17 14.26 14.76 16.5 12 16.5ZM12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5Z" fill="#A9ACB0" />
                            </svg>
                        </svg>
                    </div>
                    {errors.password && <p>{errors?.password?.message}</p>}

                    <label htmlFor="repeatPassword" className="repeat__password__label">Repeat Password</label>
                    <div className="password__input">
                        <Input type="password" id="repeatPassword" name="repeatPassword" placeholder="Type here." width="340px" height="40px" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 8.74 9.24 6.5 12 6.5C14.76 6.5 17 8.74 17 11.5C17 14.26 14.76 16.5 12 16.5ZM12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5Z" fill="#A9ACB0" />
                                </svg>
                            </svg>
                        </svg>
                    </div>

                    <Button type="submit" bgColor="#0D6EFD" color="#FFF" width="340px" height="40px" padding="11px">
                        <p>Register now</p>
                    </Button>

                    <label htmlFor="agreement" className="agreement">
                        <input type="checkbox" name="agreement" id="agreement" />
                        <p>I agree with <CustomLink href="policy" id="policy">Terms and Conditions</CustomLink></p>
                    </label>
                </form>
                <span>Already have an account? <CustomLink href="/signin" id="signin">Login</CustomLink></span>
            </div>
        </StyledRegister>
    );
};


export default Register;
