interface ButtonProps {
  text: string;
  textColor: string;
  bgColor: string;
  handler?: () => void;
}
const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${props.bgColor} ${props.textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
    >
      {props.text}
    </button>
  );
};

export default Button;
