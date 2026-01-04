import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";

import InputField from "../../shared/InputField/InputField";

import { resetPassword } from "/src/redux/auth/operations";
import { resetPasswordSchema } from "../validation/resetpassword.shema";

import css from "./ResetPasswordForm.module.css";

const initialValues = {
  password: "",
};

const ResetPasswordForm = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      await dispatch(
        resetPassword({ password: values.password, token })
      ).unwrap();
      navigate("/login");
      toast.success("You have updated password successfully!");
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Reset your password</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={resetPasswordSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <InputField label="Password" id="password" placeholder="********" />
          <div className={css.btnWrapper}>
            <button type="submit" className={css.submitBtn}>
              Log in
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ResetPasswordForm;
