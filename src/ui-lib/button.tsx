import { Button as ButtonBluePrint, IButtonProps } from "@blueprintjs/core";

export default function Button({
  active,
  alignText = "center",
  className,
  disabled,
  elementRef,
  fill,
  icon,
  large = false,
  loading,
  minimal = false,
  onClick,
  outlined = false,
  rightIcon,
  small = false,
  text,
  type = "button",
}: IButtonProps) {
  return (
    <ButtonBluePrint
      active={active}
      alignText={alignText}
      className={className}
      disabled={disabled}
      elementRef={elementRef}
      fill={fill}
      icon={icon}
      large={large}
      loading={loading}
      minimal={minimal}
      onClick={onClick}
      outlined={outlined}
      rightIcon={rightIcon}
      small={small}
      text={text}
      type={type}
    />
  );
}
