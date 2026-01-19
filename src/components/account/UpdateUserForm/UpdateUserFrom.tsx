import { Formik, Form } from "formik";
import toast from "react-hot-toast";

import InputField from "@/components/shared/InputField/InputField";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectMe } from "@/redux/user/selectors";
import { updateUserMe } from "@/redux/user/operations";
import { updateUserSchema } from "../validation/updateuser.schema";

import css from "./UpdateUserForm.module.css";

interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
}

const UpdateUserFrom = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectMe);

  const handleSubmit = async (values: FormValues) => {
    let data = {};
    for (const [key, value] of Object.entries(values)) {
      if (value) {
        data = { ...data, [key]: value };
      }
    }
    try {
      await dispatch(updateUserMe(data)).unwrap();
      toast.success("You have updated data successfully!");
    } catch (e: unknown) {
      if (typeof e === "string") toast.error(e);
      else toast.error("Something went wrong");
    }
  };

  const initialValues: FormValues = {
    fullName: user?.fullName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    dateOfBirth: user?.dateOfBirth ? user.dateOfBirth.split("T")[0] : "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={updateUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.wrapper}>
        <div className={css.form}>
          <InputField
            label={"Full name"}
            id={"fullName"}
            placeholder={"Jane Doh"}
          />
          <InputField
            label={"Email address"}
            id={"email"}
            placeholder={"email@example.com"}
          />
          <InputField
            label={"Phone number"}
            id={"phoneNumber"}
            placeholder={"+380999999999"}
          />
          <InputField
            label={"Date of birth"}
            id={"dateOfBirth"}
            placeholder={"YYYY.MM.DD"}
          />
        </div>
        <button type="submit" className={css.basicBtn}>
          Save
        </button>
      </Form>
    </Formik>
  );
};

export default UpdateUserFrom;
