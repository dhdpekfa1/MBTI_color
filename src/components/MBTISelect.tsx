import React from "react";
import MBTIOptionGroup from "./MBTIOptionGroup";
import { optionGroups } from "../utils/helper";
import { MBTISelectProps } from "../types/new";

const MBTISelect: React.FC<MBTISelectProps> = ({
  value = "ESTJ",
  onChange,
}) => {
  const handleChangeAt = (val: string, position: number) => {
    const nextValue =
      value.slice(0, position) + val + value.slice(position + 1);
    onChange(nextValue);
  };
  return (
    <div>
      {optionGroups.map((options, index) => (
        <MBTIOptionGroup
          key={`${options[0].value}-${options[1].value}`}
          value={value[index]}
          options={options}
          onChange={(val) => handleChangeAt(val, index)}
        />
      ))}
    </div>
  );
};

export default MBTISelect;
