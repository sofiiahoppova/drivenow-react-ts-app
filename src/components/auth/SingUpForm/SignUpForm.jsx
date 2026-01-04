import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import toast from "react-hot-toast";

import InputField from "../../shared/InputField/InputField";
import Divider from "../shared/Divider/Divider";
import GoogleAuth from "../shared/GoogleAuth/GoogleAuth";

import { signUp } from "/src/redux/auth/operations";
import { signUpSchema } from "../validation/signup.schema";

import css from "./SignUpForm.module.css";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      await dispatch(signUp(values)).unwrap();
      navigate("/autopark");
      toast.success("You have Registered successfully!");
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Sign Up a new account</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.inputsWrapper}>
            <InputField
              label="Full name"
              id="fullName"
              placeholder="Jane Smith"
            />
            <InputField
              label="Email address"
              id="email"
              placeholder="jane@example.com"
            />
            <InputField label="Password" id="password" placeholder="********" />
          </div>

          <div className={css.buttonsWrapper}>
            <div className={css.btnWrapper}>
              <button type="submit" className={css.submitBtn}>
                Sign up
              </button>
              <p className={css.linkText}>
                Already have on account?{" "}
                <Link to="/login" className={css.link}>
                  Log in
                </Link>
              </p>
            </div>

            <Divider />
            <GoogleAuth name="Sign Up" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
