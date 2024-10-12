export interface MBTISelectProps {
  value?: string;
  onChange: (value: string) => void;
}

export interface MBTIOptionGroupProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export interface MBTIOptionProps {
  selected: boolean;
  label: string;
  value: string;
  onClick: () => void;
}

export interface OptionGroups {
  value: string;
  label: string;
}
