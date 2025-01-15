import css from "./Button.module.css";

function Button({ onLoadMore }) {
  return (
    <button className={css.LoadMoreBtn} onClick={onLoadMore}>
      Load more
    </button>
  );
}

export { Button };
