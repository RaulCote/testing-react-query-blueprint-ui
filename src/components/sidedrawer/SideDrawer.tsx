import Drawer from "ui-lib/drawer";
import Icon, { MENU_ICON } from "ui-lib/icon";
import SideDrawerLink from "./SidedrawerLink";
import cursors from "styles/cursors.module.css";
import { useState } from "react";

export default function SideDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onCloseDrawer = () => setDrawerOpen(false);

  return (
    <>
      <Icon
        className={cursors.pointer}
        icon={MENU_ICON}
        onClick={() => setDrawerOpen(true)}
        iconSize={35}
        style={{ margin: "2rem" }}
      />
      <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
        <SideDrawerLink to="/people" onClick={onCloseDrawer}>
          People
        </SideDrawerLink>
      </Drawer>
    </>
  );
}
