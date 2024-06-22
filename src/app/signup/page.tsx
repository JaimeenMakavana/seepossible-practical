"use client";
import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputFIelds from "@/Components/FormComponents/InputFIelds";
import { SignupSchema, SignInSchema } from "@/ValidationSchema/SignupSchema";
import { GlobalContext } from "@/Context/GlobalContext";
import { useRouter } from "next/navigation";
import Checked from "./Checked";

const Page = () => {
  const {
    setIsSignup,
    setUserData,
    isSignup,
    userData,
    setIsSignin,
    isSignin,
  } = useContext(GlobalContext);

  const router = useRouter();
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          password: "",
        }}
        validationSchema={!isSignin ? SignInSchema : SignupSchema}
        onSubmit={(values, { resetForm }) => {
          if (!isSignup) {
            setIsSignup(true);
            setIsSignin(true);
            setUserData(values);

            resetForm();
            router.push("/address");
          } else {
            if (
              userData.email === values.email &&
              userData.password === values.password
            ) {
              // toast message i will show
              router.push("/address");
              setIsSignin(true);
              resetForm();
            }
          }
        }}
      >
        <Form className=" border my-5 md:max-w-[500px]  mx-auto grid md:grid-cols-2 gap-5 p-5">
          {isSignin && (
            <InputFIelds
              name="firstName"
              label="First Name"
              isMandatory={true}
            />
          )}

          {isSignin && <InputFIelds name="lastName" label="Last Name" />}

          {isSignin && (
            <InputFIelds
              name="phoneNumber"
              label="Phone Name"
              isMandatory={true}
            />
          )}

          {/* ---when user is signuped already, then email & password only I will show--- */}
          <InputFIelds name="email" label="Email" isMandatory={true} />
          <InputFIelds name="password" label="Password" isMandatory={true} />

          <div className=" col-span-full">
            <button
              type="submit"
              className=" bg-black text-white w-full py-[5px]"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Page;
