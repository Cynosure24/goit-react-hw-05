import css from "./Search.module.css";
export default function Search({ query, onSubmit, onChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <header>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            name="query"
            value={query}
            onChange={(evt) => onChange(evt.target.value)}
            className={css.input}
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
}
