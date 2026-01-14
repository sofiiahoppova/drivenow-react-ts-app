import { Navigate, Outlet } from "react-router-dom";

import Loader from "@/components/shared/Loader/Loader";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectIsAuthenticated,
  selectIsInitialized,
} from "@/redux/user/selectors";
import { setOpen } from "@/redux/modal/modalSlice";

const ProtectedRoute = () => {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(selectIsInitialized);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

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
