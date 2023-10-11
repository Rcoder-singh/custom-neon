

export const TextArea = (props) => {
  const { value, onChange } = props;
  return (
    <textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      rows={2}
      className="bg-[#f5f5f5] border outline-none w-full resize-none p-6 rounded-xl text-center placeholder:text-center focus:shadow-custom-shadow-1"
      placeholder={`ENTER TEXT HERE\nPress Enter/Return for a new line`}
    ></textarea>
  );
};
