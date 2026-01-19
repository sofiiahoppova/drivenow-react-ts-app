import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";

import InputField from "@/components/shared/InputField/InputField";
import Divider from "../shared/Divider/Divider";
import GoogleAuth from "../shared/GoogleAuth/GoogleAuth";

import { useAppDispatch } from "@/redux/hooks";
import { forgotPassword, logIn } from "@/redux/auth/operations";
import { logInSchema } from "../validation/login.schema";

import css from "./LogInForm.module.css";

export interface LogInFormValues {
  email: string;
  password: string;
}

const initialValues: LogInFormValues = {
  email: "",
  password: "",
};

const LogInForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: LogInFormValues) => {
    try {
      await dispatch(logIn(values)).unwrap();
      navigate("/autopark");
      toast.success("You have Logged In successfully!");
    } catch (e: unknown) {
      if (typeof e === "string") toast.error(e);
      else toast.error("Something went wrong");
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Log In to your account</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={logInSchema}
        onSubmit={handleSubmit}
      >
        {(values) => (
          <Form className={css.form}>
            <div className={css.inputsWrapper}>
              <InputField
                label="Email address"
                id="email"
                placeholder="jane@example.com"
              />
              <div className={css.passwordWrapper}>
                <InputField
                  label="Password"
                  id="password"
                  placeholder="********"
                />
                <button
                  onClick={async () => {
                    try {
                      await dispatch(
                        forgotPassword(values.values.email)
                      ).unwrap();
                      toast.success("Check your email to reset password");
                    } catch (e: unknown) {
                      if (typeof e === "string") toast.error(e);
                      else toast.error("Something went wrong");
                    }
                  }}
                  className={css.passwordLink}
                >
                  Foggot password?
                </button>
              </div>
            </div>

            <div className={css.buttonsWrapper}>
              <div className={css.btnWrapper}>
                <button type="submit" className={css.submitBtn}>
                  Log in
                </button>
                <p className={css.linkText}>
                  Don't have an account?{" "}
                  <Link to="/signup" className={css.link}>
                    Sign up
                  </Link>
                </p>
              </div>

              <Divider />
              <GoogleAuth name="Log in" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LogInForm;
