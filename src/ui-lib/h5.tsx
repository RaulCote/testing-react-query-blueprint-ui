import { H5 as H5BluePrint } from "@blueprintjs/core";
import { CSSProperties } from "react";

export default function H5({
  children,
  className,
  style,
}: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <H5BluePrint className={className} style={style}>
      {children}
    </H5BluePrint>
  );
}
