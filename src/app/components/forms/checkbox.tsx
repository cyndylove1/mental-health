import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

interface CheckboxesProps {
  id: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkboxes({
  id,
  value,
  checked,
  onChange,
}: CheckboxesProps) {
  return (
    <Checkbox
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
      inputProps={{ "aria-label": value }}
      sx={{
        color: "var(--main)",
        "&.Mui-checked": { color: "var(--main)" },
      }}
    />
  );
}
