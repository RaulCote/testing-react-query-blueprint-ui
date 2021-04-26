import { CSSProperties, MouseEvent } from "react";
import { Card as CardBluePrint, Elevation } from "@blueprintjs/core";

interface ICard {
  children: JSX.Element | JSX.Element[];
  className?: string;
  elevation?: Elevation;
  interactive?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  style?: CSSProperties;
}

export default function Card({
  children,
  className,
  elevation = Elevation.ONE,
  interactive = false,
  onClick,
  style,
}: ICard) {
  return (
    <CardBluePrint
      className={className}
      elevation={elevation}
      interactive={interactive}
      onClick={onClick}
      style={style}
    >
      {children}
    </CardBluePrint>
  );
}
