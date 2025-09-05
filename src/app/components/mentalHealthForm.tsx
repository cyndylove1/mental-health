"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { africanCountries, languages, concerns } from "../data";
import ProgressIndicator from "../components/progressIndicator";
import FormNavigation from "../components/formNavigation";
import { FormData, FormErrors } from "../types";
import DemographicInformation from "./demographicInfo";
import Wellness from "./wellness";
import Severity from "./severity";
import { validateStep } from "@/app/utils/validation";

export default function MentalHealthForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    age: "",
    gender: "",
    country: "",
    language: "",
    concerns: [],
    otherConcern: "",
    stressLevel: 1,
    priorHelp: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // submit logic
  const handleNext = (): void => {
    const newErrors = validateStep(step, formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (step < 3) {
        setStep(step + 1);
      } else {
        console.log("Form submitted:", formData);
        toast.success("Form Submitted");

        // Reset form
        setFormData({
          age: "",
          gender: "",
          country: "",
          language: "",
          concerns: [],
          otherConcern: "",
          stressLevel: 1,
          priorHelp: "",
        });
        setErrors({});
        setStep(1);
      }
    }
  };

  const handlePrevious = (): void => setStep(step - 1);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, checked } = e.target;
    const updatedConcerns = checked
      ? [...formData.concerns, value]
      : formData.concerns.filter((concern) => concern !== value);

    setFormData((prev) => ({ ...prev, concerns: updatedConcerns }));
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({ ...prev, stressLevel: parseInt(e.target.value) }));
  };

  const handleTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData((prev) => ({ ...prev, otherConcern: e.target.value }));
  };

  return (
    <div className="p-6 bg-white max-w-2xl mx-auto rounded-lg shadow-lg overflow-hidden">
      <h1 className="md:text-[30px] text-[20px] leading-[27px] font-[600] jakarta text-[var(--main)] mb-6">
        Mental Health Assessment
      </h1>

      <ProgressIndicator activeStep={step} />

      <form>
        {step === 1 && (
          <DemographicInformation
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
            africanCountries={africanCountries}
            languages={languages}
          />
        )}

        {step === 2 && (
          <Wellness
            formData={formData}
            errors={errors}
            concerns={concerns}
            handleCheckboxChange={handleCheckboxChange}
            handleTextareaChange={handleTextareaChange}
          />
        )}

        {step === 3 && (
          <Severity
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
            handleSliderChange={handleSliderChange}
          />
        )}

        <FormNavigation
          currentStep={step}
          totalSteps={3}
          onPrevious={handlePrevious}
          onNext={handleNext}
          isValid={true}
        />
      </form>
    </div>
  );
}
