import { IButton } from "@/types/types";

const Button = ({ name, type, label, onClick, icon, textClassName, title, className }: IButton) => {
  return (
    <button type={type} name={name} aria-label={label} onClick={onClick} className={className}>
      {icon && <span>{icon}</span>}
      <p className={textClassName}>{title}</p>
    </button>
  );
};

export default Button;
