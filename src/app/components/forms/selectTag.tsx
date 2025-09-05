import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SingleSelectProps {
  id?: string;
  name?: string;
  options: string[];
  placeholder?: string;
  value: string;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ITEM_HEIGHT = 44;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, selectedValue: string, theme: Theme) {
  return {
    fontWeight:
      selectedValue === name
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    fontSize: "14px",
    "& em": {
      fontStyle: "normal",
      color: "gray",
    },
  };
}

export default function SelectTag({
  options,
  placeholder,
  onChange,
  value,
  name,
  id,
}: SingleSelectProps) {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<string>) => {
    if (onChange) onChange(event as any);
  };
  return (
    <FormControl sx={{ width: "100%", mt: "5px" }}>
      <Select
        value={value || ""}
        name={name}
        id={id}
        onChange={handleChange}
        displayEmpty
        input={
          <OutlinedInput
            sx={{
              height: "3rem",
              borderRadius: "10px",
              fontSize: "14px",
              backgroundColor: "white",
              padding: "10px",
              "& em": {
                fontStyle: "normal",
                color: "gray",
                fontWeight: 500,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D1D5DB",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D1D5DB",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#422ad5",
                borderWidth: "2px",
              },
            }}
          />
        }
        renderValue={(selectedValue) => {
          if (!selectedValue) {
            return <em style={{ fontWeight: 300 }}>{placeholder}</em>;
          }
          return selectedValue;
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem
          disabled
          value=""
          sx={{
            fontSize: "14px",
            color: "#1E1E1E",
            fontWeight: 300,
          }}
        >
          <em style={{ fontStyle: "normal" }}>{placeholder}</em>
        </MenuItem>
        {options.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, value, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
