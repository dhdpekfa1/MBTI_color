import React from "react";
import MBTIOption from "./MBTIOption";
import { MBTIOptionGroupProps } from "../types/new";

const MBTIOptionGroup: React.FC<MBTIOptionGroupProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div>
      {options.map((option) => (
        <MBTIOption
          key={option.value}
          selected={option.value === value}
          label={option.label}
          value={option.value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
};

export default MBTIOptionGroup;
