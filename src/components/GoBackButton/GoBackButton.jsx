import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import css from "./GoBackButton.module.css";

export default function GoBackButton({ backLink, location }) {
  return (
    <div className={css.container}>
      <Link to={backLink} state={location}>
        <button className={css.button}>
          {/* <GoArrowLeft className={css.icon} /> */}
          <p>Go back</p>
        </button>
      </Link>
    </div>
  );
}