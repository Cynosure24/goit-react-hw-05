import { NavLink } from "react-router-dom";
import css from "./AdditionalInfo.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AdditionalInfo() {
  return (
    <div className={css.container}>
      <h2 className={css.subtitle}>Additional Information</h2>
      <ul className={css.list}>
        <li>
          <NavLink to="cast" className={buildLinkClass}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
