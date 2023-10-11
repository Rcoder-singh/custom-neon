
export const Stepper = (props) => {
  const { step, onNext, onPrev, label, totalSteps } = props;

  return (
    <div className="bg-gray-100 flex font-medium">
      <button
        className="h-10 bg-gray-200 text-pink-600 aspect-square"
        onClick={onPrev}
      >
        {step === 0 ? 1 : "⬅️"}
      </button>
      <p className="flex-1 px-3 flex items-center justify-between">
        <span className="text-lg sm:text-xl uppercase text-[#2b2b2b]">
          {label}
        </span>
        <span className="text-[#9a9a9a]">
          STEP {step + 1}/{totalSteps + 1}
        </span>
      </p>
      <button
        className="h-10 bg-gray-200 text-pink-600 aspect-square"
        onClick={onNext}
      >
        {step === totalSteps ? null : "➡️"}
      </button>
    </div>
  );
};
