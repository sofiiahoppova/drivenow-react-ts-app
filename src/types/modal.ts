import { modalComponents } from "@/constants/modalComponents";

export type ModalNames = keyof typeof modalComponents;

export type ModalProps = {
  [K in ModalNames]: React.ComponentProps<(typeof modalComponents)[K]>;
};
