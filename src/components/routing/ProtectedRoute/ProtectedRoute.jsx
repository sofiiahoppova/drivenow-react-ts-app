import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import Loader from "../../shared/Loader/Loader";

import { setOpen } from "/src/redux/modal/modalSlice";
import {
  selectIsAuthenticated,
  selectIsInitialized,
} from "/src/redux/user/selectors";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const isInitialized = useSelector(selectIsInitialized);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isInitialized) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    dispatch(setOpen({ component: "AuthModal" }));
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
