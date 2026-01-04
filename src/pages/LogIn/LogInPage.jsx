import React from "react";

import AuthLayout from "../../components/layout/AuthLayout/AuthLayout";
import LogInForm from "../../components/auth/LogInForm/LogInForm";

const LogInPage = () => {
  return (
    <AuthLayout>
      <LogInForm />
    </AuthLayout>
  );
};

export default LogInPage;
