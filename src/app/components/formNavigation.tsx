import { FormNavigationProps } from "../types";
import Button from "./forms/button";

export default function FormNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  isValid = true,
}: FormNavigationProps) {
  return (
    <div className="mt-8 flex justify-between items-center gap-[20px]">
      <Button
        type="button"
        onClick={onPrevious}
        text="Previous"
        disabled={currentStep === 1}
        className="py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none"
      />
      <Button
        type="button"
        text={currentStep === totalSteps ? "Submit" : "Next"}
        onClick={onNext}
        disabled={!isValid}
        className="py-2 bg-[var(--main)] hover:bg-[#503ae0] text-white"
      />
    </div>
  );
}
