import css from "./GoogleAuth.module.css";

interface Props {
  name: string;
}

const GoogleAuth = ({ name }: Props) => {
  return (
    <button className={css.button}>
      {name} with Google
      <svg width={24} height={24}>
        <use href="/sprite.svg#icon-google"></use>
      </svg>
    </button>
  );
};

export default GoogleAuth;
