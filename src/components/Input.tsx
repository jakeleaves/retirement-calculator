// src/components/Input.tsx

import React from 'react';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string; // Allow custom class names for styling
}

const Input: React.FC<InputProps> = ({ label, name, type = 'text', value, onChange, min, max, step, className }) => (
  <div className="mb-2"> {/* Reduced margin */}
    <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-1"> {/* Compact label */}
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`} // Allows custom styling
      required
    />
  </div>
);

export default Input;
