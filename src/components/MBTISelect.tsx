import { optionGroups } from "../utils/helper";
import styles from "./MBTISelect.module.css";

import {
  MBTISelectProps,
  MBTIOptionProps,
  MBTIOptionGroupProps,
} from "../types/new";

const MBTIOption: React.FC<MBTIOptionProps> = ({
  selected,
  label,
  value,
  onClick,
}) => {
  const classNames = `${styles.mbtiOption} ${selected ? styles.selected : ""}`;

  return (
    <div className={classNames} onClick={onClick}>
      <span className={styles.char}>{value}</span>
      {label}
    </div>
  );
};

const MBTIOptionGroup: React.FC<MBTIOptionGroupProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className={styles.mbtiOptionGroup}>
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
