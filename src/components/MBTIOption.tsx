import React from "react";
import { MBTIOptionProps } from "../types/new";

const MBTIOption: React.FC<MBTIOptionProps> = ({
  selected,
  label,
  value,
  onClick,
}) => {
  const style = { fontWeight: selected ? "bold" : "normal" };
  return (
    <span style={style} onClick={onClick}>
      {label} {value}
    </span>
  );
};

export default MBTIOption;
