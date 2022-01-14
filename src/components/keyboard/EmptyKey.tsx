import { ReactNode } from "react";
import classnames from "classnames";
import { KeyValue } from "../../lib/keyboard";
import { CharStatus } from "../../lib/statuses";

type Props = {
  children?: ReactNode;
  width?: number;
};

export const EmptyKey = ({
  children,
  width = 40,
}: Props) => {
  const classes = classnames(
    "flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer"
  );

  return (
    <div
      style={{ width: `${width}px`, height: "58px" }}
      className={classes}
    >
      {children}
    </div>
  );
};
