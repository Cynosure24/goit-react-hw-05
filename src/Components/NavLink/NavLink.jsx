import { VscArrowLeft } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import css from './NavLink.module.css'

export const NavLink = ({to, children}) => {
  return (
    <div className={css.container}>
      <Link className={css.link} to={to}>
        <VscArrowLeft size="18" />
        <span className={css.btn}> {children}</span>
      </Link>
    </div>
  );
};