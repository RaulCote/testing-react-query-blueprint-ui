import { Icon as IconBlueprint, IconName, IIconProps } from "@blueprintjs/core";

interface IIcon extends IIconProps {
  onClick: (e: React.MouseEvent) => void;
}

export default function Icon({
  className,
  icon,
  iconSize = IconBlueprint.SIZE_LARGE,
  onClick,
  tagName = "span",
  title,
  style,
}: IIcon) {
  return (
    <IconBlueprint
      className={className}
      icon={icon}
      iconSize={iconSize}
      onClick={onClick}
      tagName={tagName}
      title={title}
      style={style}
    />
  );
}

export const MENU_ICON = "menu";
