import { NavLink } from "react-router-dom";
import { MouseEventHandler } from "react";
import styles from "./sidedrawer.module.css";

export default function SideDrawerLink({
  activeClassName,
  children,
  onClick,
  to,
}: {
  activeClassName?: string;
  children: JSX.Element | string;
  onClick: MouseEventHandler<HTMLSpanElement>;
  to: string;
}) {
  return (
    <span onClick={onClick}>
      <NavLink
        className={styles.sideDrawerLink}
        activeClassName={activeClassName}
        exact
        to={to}
      >
        {children}
      </NavLink>
    </span>
  );
}
