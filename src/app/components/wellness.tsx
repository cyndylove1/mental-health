import Checkboxes from "./forms/checkbox";
import Label from "./forms/label";

interface Props {
  formData: any;
  errors: any;
  concerns: string[];
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextareaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Wellness({
  formData,
  errors,
  concerns,
  handleCheckboxChange,
  handleTextareaChange,
}: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-[14px] font-[500] text-gray-800 my-4">
        Wellness Concerns
      </h2>
      <p className="text-sm text-gray-600 mb-4">Select all that apply:</p>

      {concerns.map((concern) => (
        <div key={concern} className="flex items-center mb-2">
          <Checkboxes
            id={concern}
            value={concern}
            checked={formData.concerns.includes(concern)}
            onChange={handleCheckboxChange}
          />
          <Label text={concern} hideIcon={true} className="ml-2" />
        </div>
      ))}

      {/* Other Concern */}
      <div className="mt-4">
        <div className="flex items-center">
          <Checkboxes
            id="other"
            value="Other"
            checked={formData.concerns.includes("Other")}
            onChange={handleCheckboxChange}
          />
          <Label text="Other" hideIcon={true} className="ml-2" />
        </div>

        {formData.concerns.includes("Other") && (
          <textarea
            id="otherConcern"
            value={formData.otherConcern}
            onChange={handleTextareaChange}
            placeholder="Please specify your concern"
            className="mt-2 block w-full text-[16px] border-gray-300 h-[200px] p-6 border border-[1px] rounded-[10px] focus:border-2 focus:border-[var(--main)] focus:outline-none"
            rows={3}
          />
        )}
      </div>

      {errors.concerns && (
        <p className="text-[10px] text-red-600">{errors.concerns}</p>
      )}
    </div>
  );
}
