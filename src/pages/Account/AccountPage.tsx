import AccountSideBar from "@/components/account/AccountSideBar/AccountSideBar";
import UpdateUserFrom from "@/components/account/UpdateUserForm/UpdateUserFrom";
import BookingsList from "@/components/booking/BookingList/BookingsList";

import css from "./AccountPage.module.css";

const AccountPage = () => {
  return (
    <div className={css.container}>
      <AccountSideBar />
      <div className={css.mainWrarpper}>
        <div className={css.wrapper}>
          <div className={css.titleWrapper}>
            <h2 className={css.title}>Update Your Account Details</h2>
            <p className={css.description}>
              Keep your info current for a smoother booking experience
            </p>
          </div>
          <UpdateUserFrom />
        </div>
        <span className={css.divider} />
        <div className={css.wrapper}>
          <div className={css.titleWrapper}>
            <h2 className={css.title}>Manage Your Bookings</h2>
            <p className={css.description}>
              View all your active, upcoming, and completed reservations in one
              place
            </p>
          </div>
          <BookingsList />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
