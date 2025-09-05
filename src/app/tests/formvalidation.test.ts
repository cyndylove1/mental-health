import { validateStep } from "@/app/utils/validation";

describe("Form Validation", () => {
  test("validates step 1 demographics correctly", () => {
    // Test empty form data
    const emptyData = {
      age: "",
      gender: "",
      country: "",
      language: "",
      concerns: [],
      otherConcern: "",
      stressLevel: 5,
      priorHelp: "",
    };

    const errors = validateStep(1, emptyData);
    expect(errors).toHaveProperty("age");
    expect(errors).toHaveProperty("gender");
    expect(errors).toHaveProperty("country");
    expect(errors).toHaveProperty("language");

    // Test invalid age
    const invalidAgeData = {
      age: "5",
      gender: "male",
      country: "Nigeria",
      language: "English",
      concerns: [],
      otherConcern: "",
      stressLevel: 5,
      priorHelp: "",
    };

    const ageErrors = validateStep(1, invalidAgeData);
    expect(ageErrors).toHaveProperty("age");

    // Test valid data
    const validData = {
      age: "25",
      gender: "male",
      country: "Nigeria",
      language: "English",
      concerns: [],
      otherConcern: "",
      stressLevel: 5,
      priorHelp: "",
    };

    const validErrors = validateStep(1, validData);
    expect(validErrors).toEqual({});
  });

  test("validates step 2 concerns correctly", () => {
    // Test no concerns selected
    const noConcernsData = {
      age: "25",
      gender: "male",
      country: "Nigeria",
      language: "English",
      concerns: [],
      otherConcern: "",
      stressLevel: 5,
      priorHelp: "",
    };

    const errors = validateStep(2, noConcernsData);
    expect(errors).toHaveProperty("concerns");

    // Test with concerns selected
    const withConcernsData = {
      age: "25",
      gender: "male",
      country: "Nigeria",
      language: "English",
      concerns: ["Anxiety"],
      otherConcern: "",
      stressLevel: 5,
      priorHelp: "",
    };

    const concernsErrors = validateStep(2, withConcernsData);
    expect(concernsErrors).toEqual({});

    // Test with other concern
    const otherConcernData = {
      age: "25",
      gender: "male",
      country: "Nigeria",
      language: "English",
      concerns: [],
      otherConcern: "Sleep issues",
      stressLevel: 5,
      priorHelp: "",
    };

    const otherErrors = validateStep(2, otherConcernData);
    expect(otherErrors).toEqual({});
  });

  test("validates step 3 history correctly", () => {
    // Test no selection
    const noSelectionData = {
      age: "25",
      gender: "male",
      country: "Nigeria",
      language: "English",
      concerns: ["Anxiety"],
      otherConcern: "",
      stressLevel: 5,
      priorHelp: "",
    };

    const errors = validateStep(3, noSelectionData);
    expect(errors).toHaveProperty("priorHelp");

    // Test with selection
    const withSelectionData = {
      age: "25",
      gender: "male",
      country: "Nigeria",
      language: "English",
      concerns: ["Anxiety"],
      otherConcern: "",
      stressLevel: 5,
      priorHelp: "yes",
    };

    const selectionErrors = validateStep(3, withSelectionData);
    expect(selectionErrors).toEqual({});
  });
});
