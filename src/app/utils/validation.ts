import { FormData, FormErrors } from "../types";

export const validateStep = (step: number, formData: FormData): FormErrors => {
  const newErrors: FormErrors = {};

  if (step === 1) {
    if (!formData.age) newErrors.age = "Age is required";
    else if (parseInt(formData.age) < 18 || parseInt(formData.age) > 120) {
      newErrors.age = "Age must be between 18 above";
    }

    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.language) newErrors.language = "Language is required";
  }

  if (step === 2) {
    if (formData.concerns.length === 0 && !formData.otherConcern) {
      newErrors.concerns =
        "Please select at least one concern or specify other";
    }
  }

  if (step === 3) {
    if (!formData.priorHelp) newErrors.priorHelp = "This field is required";
  }

  return newErrors;
};
