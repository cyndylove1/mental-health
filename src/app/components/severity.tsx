import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Label from "./forms/label";

interface Props {
  formData: any;
  errors: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSliderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Severity({
  formData,
  errors,
  handleInputChange,
  handleSliderChange,
}: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-[16px] font-[500] text-gray-800 my-4">
        Severity & History
      </h2>

      {/* Stress Level */}
      <div>
        <Label text=" Current Stress Level (1-10)" hideIcon={true} />
        <input
          type="range"
          id="stressLevel"
          min="1"
          max="10"
          value={formData.stressLevel}
          onChange={handleSliderChange}
          className="w-full accent-[var(--main)] "
        />
        <div className="text-center mt-2 text-lg font-[500] text-[var(--main)]">
          {formData.stressLevel}
        </div>
      </div>

      {/* Prior Help */}
      <FormControl component="fieldset">
        <FormLabel
          component="legend"
          className="!text-sm !font-medium !text-gray-700 mb-2"
        >
          Have you received professional mental health help before? *
        </FormLabel>
        <RadioGroup
          name="priorHelp"
          value={formData.priorHelp}
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="yes"
            control={
              <Radio
                sx={{
                  color: "var(--main)",
                  "&.Mui-checked": {
                    color: "var(--main)",
                  },
                }}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={
              <Radio
                sx={{
                  color: "var(--main)",
                  "&.Mui-checked": {
                    color: "var(--main)",
                  },
                }}
              />
            }
            label="No"
          />
        </RadioGroup>
        {errors.priorHelp && (
          <p className="text-[10px] text-red-600">{errors.priorHelp}</p>
        )}
      </FormControl>
    </div>
  );
}
