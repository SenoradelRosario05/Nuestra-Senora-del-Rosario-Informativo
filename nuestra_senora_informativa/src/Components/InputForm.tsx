import React from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputForm = React.forwardRef<HTMLInputElement, CustomInputProps>(({ label, error, ...props }, ref) => {
  return (
    <div>
      <label className="block text-[#317591] text-xl sm:text-2xl font-normal font-Poppins mb-2" htmlFor={props.id}>
        {label}
      </label>
      <input
        {...props}
        ref={ref}
        className={`w-full h-[40px] sm:h-[60px] px-4 bg-white shadow border-2 border-[#317591] rounded-md text-base sm:text-lg font-Poppins ${
          error ? 'border-red-500' : ''
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1 font-Poppins">{error}</p>}
    </div>
  );
});

InputForm.displayName = 'InputForm'; // Opcional, pero recomendado para depuración

export default InputForm;
