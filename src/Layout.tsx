import { MouseEventHandler, useState } from "react";
import Drawer from "ui-lib/drawer";
import Icon, { MENU_ICON } from "ui-lib/icon";
import cursors from "./styles/cursors.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Layout({ children }: { children: JSX.Element }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onCloseDrawer = () => setDrawerOpen(false);

  return (
    <>
      <Icon
        className={cursors.pointer}
        icon={MENU_ICON}
        onClick={() => setDrawerOpen((prevState) => !prevState)}
        iconSize={35}
        style={{ margin: "2rem" }}
      />
      <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
        <SideDrawerLink to="/people" onClick={onCloseDrawer}>
          People
        </SideDrawerLink>
      </Drawer>
      {children}
    </>
  );
}

function SideDrawerLink({
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
      <NavLink activeClassName={activeClassName} exact to={to}>
        {children}
      </NavLink>
    </span>
  );
}
