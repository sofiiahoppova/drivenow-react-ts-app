import { Suspense, useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { RootState } from "./redux/store";

import Header from "./components/layout/Header/Header";
import LandingPage from "./pages/Landing/LandingPage";
import AutoParkPage from "./pages/AutoPark/AutoParkPage";
import BookingPage from "./pages/Booking/BookingPage";
import PoliciesPage from "./pages/Policies/PoliciesPage";
import SignUpPage from "./pages/SingUp/SignUpPage";
import LogInPage from "./pages/LogIn/LogInPage";
import ResetPasswordPage from "./pages/ResetPassword/ResetPasswordPage";
import AccountPage from "./pages/Account/AccountPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Footer from "./components/layout/Footer/Footer";

import Modal from "./components/shared/Modal/Modal";

import ProtectedRoute from "./components/routing/ProtectedRoute/ProtectedRoute";

import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setToken } from "./redux/auth/authSlice";
import { setInit } from "./redux/user/usersSlice";
import { fetchUserMe } from "./redux/user/operations";
import { modalComponents } from "./constants/modalComponents";

import "./App.css";

interface WrapperProps extends React.PropsWithChildren {}

const Wrapper = ({ children }: WrapperProps) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

const App = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
      dispatch(fetchUserMe());
    } else dispatch(setInit(true));
  }, [token, dispatch]);

  const location = useLocation();
  const showLayoutPaths = [
    "/",
    "/autopark",
    "/policies",
    "/booking/:id",
    "/account",
  ];

  const shouldShowLayout = showLayoutPaths.includes(location.pathname);
  const shouldHideFooter = location.pathname == "/account";

  const { isOpen, component, props } = useAppSelector(
    (state: RootState) => state.modal
  );

  if (!isOpen || !component) return null;

  const Component = modalComponents[component];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  return (
    <>
      {shouldShowLayout && <Header />}

      <Suspense fallback={<p>Loading...</p>}>
        <Wrapper>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/autopark" element={<AutoParkPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/booking/:id" element={<BookingPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Wrapper>
      </Suspense>

      {shouldShowLayout && !shouldHideFooter && <Footer />}

      {isOpen && component && (
        <Modal>
          <Component {...props} />;
        </Modal>
      )}
    </>
  );
};

export default App;
