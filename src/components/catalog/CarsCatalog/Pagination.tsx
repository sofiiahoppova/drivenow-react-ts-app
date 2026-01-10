import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { setPage } from "@/redux/filters/filtersSlice";
import { selectPage } from "@/redux/filters/selectors";

import css from "./Pagination.module.css";

interface Props {
  pages: number;
}

const Pagination = ({ pages }: Props) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const goTo = (page: number) => dispatch(setPage(page));

  const renderPage = (currentPage: number) => (
    <li
      key={currentPage}
      className={clsx(currentPage == page && css.current, css.btnWrapper)}
      onClick={() => goTo(currentPage)}
    >
      <button className={clsx(currentPage == page && css.currentBtn, css.btn)}>
        {currentPage}
      </button>
    </li>
  );

  const dots = (key: "left" | "right") => (
    <span key={key} className={css.dots}>
      …
    </span>
  );

  const pagesToShow = [];

  pagesToShow.push(renderPage(1));
  if (page > 3) pagesToShow.push(dots("left"));

  for (let p = page - 1; p <= page + 1; p++) {
    if (p > 1 && p < pages) {
      pagesToShow.push(renderPage(p));
    }
  }

  if (page < pages - 2) pagesToShow.push(dots("right"));

  if (pages > 1) pagesToShow.push(renderPage(pages));

  return (
    <div className={css.container}>
      <button
        onClick={() => goTo(page - 1)}
        className={css.chevron}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        <svg className={css.icon} width={10} height={16}>
          <use href="/sprite.svg#icon-chevron-left"></use>
        </svg>
      </button>
      <ul className={css.wrapper}>{pagesToShow}</ul>
      <button
        onClick={() => goTo(page + 1)}
        className={css.chevron}
        disabled={page >= pages}
        aria-label="Next page"
      >
        <svg className={css.icon} width={10} height={16}>
          <use href="/sprite.svg#icon-chevron-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
