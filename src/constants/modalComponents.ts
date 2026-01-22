import ReviewsList from "@/components/catalog/ReviewsList/ReviewsList";
import SearchBarModal from "@/components/catalog/SearshBar/SearchBarModal";
import LogOutModal from "@/components/account/LogOutModal/LogOutModal";
import AuthModal from "@/components/auth/AuthModal/AuthModal";
import DeleteBookingModal from "@/components/booking/DeleteBookingModal/DeleteBookingModal";

export const modalComponents = {
  ReviewsList,
  SearchBarModal,
  LogOutModal,
  AuthModal,
  DeleteBookingModal,
} as const;
