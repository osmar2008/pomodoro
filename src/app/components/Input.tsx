import React from "react";

interface InputProps {
  textLabel: string;
  typeInput: string;
  textInput: string;
}

const Input: React.FC<InputProps> = ({ textLabel, textInput, typeInput }) => {
  return (
    <div>
      <label className="text-white">{textLabel}</label>
      <input
        className="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
"
        type={typeInput}
        placeholder={textInput}
      />
    </div>
  );
};
export default Input;
