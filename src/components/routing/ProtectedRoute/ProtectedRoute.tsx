import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import Loader from "../../shared/Loader/Loader";

import {
  selectIsAuthenticated,
  selectIsInitialized,
} from "../../../redux/user/selectors";
import { setOpen } from "../../../redux/modal/modalSlice";

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
