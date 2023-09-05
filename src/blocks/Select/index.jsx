
export const Select = ({
  options,
  onChange,
  value,
  containerClassName,
  optionClassName,
  iconClassName,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex items-center w-32 cursor-pointer ${containerClassName} custom-select sources`}
    >
      <select
        className={`px-2 outline-none border-0 transition-all cursor-pointer ${className}`} 
        {...props}
      >
        {options?.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className={`bg-custom-darkblue p-2 ${optionClassName}`}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
