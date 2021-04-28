import {
  Drawer as DrawerBlueprint,
  IDrawerProps,
  Position,
} from "@blueprintjs/core";

import drawer from "./drawer.module.css";
import backdrops from "styles/backdrops.module.css";

interface IDrawer extends IDrawerProps {
  children: JSX.Element;
  isOpen: boolean;
}

export default function Drawer({
  backdropClassName = backdrops.lightOpacity,
  canOutsideClickClose = true,
  children,
  className = drawer.container,
  hasBackdrop = true,
  isOpen = true,
  onClose,
  position = Position.LEFT,
  size = DrawerBlueprint.SIZE_SMALL,
}: IDrawer) {
  return (
    <DrawerBlueprint
      backdropClassName={backdropClassName}
      canOutsideClickClose={canOutsideClickClose}
      className={className}
      hasBackdrop={hasBackdrop}
      isOpen={isOpen}
      position={position}
      onClose={onClose}
      size={size}
    >
      {children}
    </DrawerBlueprint>
  );
}
