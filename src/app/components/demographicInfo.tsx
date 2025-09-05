import Label from "./forms/label";
import Input from "./forms/input";
import SelectTag from "./forms/selectTag";

interface Props {
  formData: any;
  errors: any;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  africanCountries: string[];
  languages: string[];
}

export default function DemographicInformation({
  formData,
  errors,
  handleInputChange,
  africanCountries,
  languages,
}: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-[16px] font-[500] jakarta text-gray-800 my-4">
        Demographic Information
      </h2>

      {/* Age */}
      <div className="w-full">
        <Label text="Age" hideIcon={false} />
        <Input
          type="number"
          inputMode="numeric"
          id="age"
          placeholder="enter your age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          error={!!errors.age}
        />
        {errors.age && (
          <p className="text-[10px] mt-[5px] px-2 text-red-600">{errors.age}</p>
        )}
      </div>

      {/* Gender */}
      <div>
        <Label text="Gender" hideIcon={false} />
        <SelectTag
          id="gender"
          name="gender"
          options={["Male", "Female", "Other"]}
          value={formData.gender}
          onChange={handleInputChange}
          placeholder="select gender"
          error={!!errors.gender}
        />
        {errors.gender && (
          <p className="text-[10px] mt-[5px] px-2 text-red-600">
            {errors.gender}
          </p>
        )}
      </div>

      {/* Country */}
      <div>
        <Label text="Country" hideIcon={false} />
        <SelectTag
          id="country"
          name="country"
          placeholder="select country"
          options={africanCountries}
          value={formData.country}
          onChange={handleInputChange}
          error={!!errors.country}
        />
        {errors.country && (
          <p className="text-[10px] mt-[5px] px-2 text-red-600">
            {errors.country}
          </p>
        )}
      </div>

      {/* Language */}
      <div>
        <Label text="Language" hideIcon={false} />
        <SelectTag
          id="language"
          name="language"
          placeholder="select language"
          options={languages}
          value={formData.language}
          onChange={handleInputChange}
          error={!!errors.language}
        />
        {errors.language && (
          <p className="text-[10px] mt-[5px] px-2 text-red-600">
            {errors.language}
          </p>
        )}
      </div>
    </div>
  );
}
