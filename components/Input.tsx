import { TInput } from "@/types/types";

const Input = ({ label, type, placeholder, inputStyle, value, onChange, isActive }: TInput) => {
  return (
    <div className={label ? "flex gap-2 flex-col" : ""}>
      {label ? <label>{label}</label> : ""}
      <input type={type} placeholder={placeholder} className={inputStyle} onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
