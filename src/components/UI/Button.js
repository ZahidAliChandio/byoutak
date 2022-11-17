const Button = (props) => {
  return (
    <button
      className={`${props.className} px-7 py-3 rounded-lg font-bold`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
