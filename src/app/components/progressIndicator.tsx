const steps = [
  "Demographic Information",
  "Wellness Concern Selection",
  "Severity & History",
];

interface ProgressIndicatorProps {
  activeStep: number;
}

export default function ProgressIndicator({
  activeStep,
}: ProgressIndicatorProps) {
  return (
    <div className="w-full">
      <ul className="steps w-full mb-6 bg-[#eeeeee]">
        {steps.map((label, index) => {
          const isCompleted = index < activeStep - 1;
          const isCurrent = index === activeStep - 1;

          return (
            <li
              key={label}
              className={`md:text-[13px] text-[10px] step ${
                isCompleted ? "step-primary" : ""
              } ${isCurrent ? "step-primary" : ""}`}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
