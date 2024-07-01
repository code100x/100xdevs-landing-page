import ButtonSvg from "./assets/svg/ButtonSvg";

interface Props {
  className?: string;
  onClick?: () => void;
  href?: string;
  px?: string;
  white?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  type,
}: Props) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-blue-700 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button type={type} className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg({ white })}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg({ white })}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
