import React from 'react';

interface Option {
  value: string | number;
  label: string;
}

interface CustomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: Option[];
}

const CustomSelect = React.forwardRef<HTMLSelectElement, CustomSelectProps>(({ label, error, options, ...props }, ref) => {
  return (
    <div>
      <label className="block text-[#317591] text-xl sm:text-2xl font-normal font-Poppins mb-2" htmlFor={props.id}>
        {label}
      </label>
      <select
        {...props}
        ref={ref}
        className={`w-full h-[40px] sm:h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-base sm:text-lg font-Poppins ${
          error ? 'border-red-500' : ''
        }`}
      >
        <option value="">Selecciona una opción</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1 font-Poppins">{error}</p>}
    </div>
  );
});

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
