import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectMe } from "@/redux/user/selectors";
import { setOpen } from "@/redux/modal/modalSlice";

import css from "./AccountSideBar.module.css";

const AccountSideBar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectMe);

  return (
    <aside className={css.sidebar}>
      <div className={css.userInfo}>
        <img
          src="/images/default-avatar.webp"
          alt="user avatar"
          className={css.avatar}
        />
        <div className={css.infoWrapper}>
          <span className={css.infoTitle}>Your Name</span>
          <p className={css.infoText}>{user?.fullName}</p>
        </div>
        <div className={css.infoWrapper}>
          <span className={css.infoTitle}>Your Email</span>
          <p className={css.infoText}>{user?.email}</p>
        </div>
      </div>
      <button
        onClick={() =>
          dispatch(
            setOpen({
              component: "LogOutModal",
            })
          )
        }
        className={css.logoutBtn}
      >
        Log Out
      </button>
    </aside>
  );
};

export default AccountSideBar;
