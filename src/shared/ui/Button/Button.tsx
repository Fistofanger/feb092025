type ButtonProps = {
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  title: string;
  disabled?: boolean;
};

const Button = ({ title, ...props }: ButtonProps): JSX.Element => {
  return <button {...props}>{title}</button>;
};

export default Button;
