import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1>Error 404</h1>
      <p>This page does not exist</p>
    </div>
  );
};

export default NotFoundPage;
