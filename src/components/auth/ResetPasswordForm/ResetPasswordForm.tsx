import { useNavigate, useSearchParams } from "react-router-dom";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";

import InputField from "@/components/shared/InputField/InputField";

import { useAppDispatch } from "@/redux/hooks";
import { resetPassword } from "@/redux/auth/operations";
import { resetPasswordSchema } from "../validation/resetpassword.shema";

import css from "./ResetPasswordForm.module.css";

interface FormValues {
  password: string;
}

const initialValues: FormValues = {
  password: "",
};

const ResetPasswordForm = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: FormValues) => {
    try {
      if (token) {
        await dispatch(
          resetPassword({ password: values.password, token })
        ).unwrap();
        navigate("/login");
        toast.success("You have updated password successfully!");
      } else toast.error("Access denied");
    } catch (e: unknown) {
      if (typeof e === "string") toast.error(e);
      else toast.error("Something went wrong");
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
