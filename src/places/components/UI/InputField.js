const InputField = (props) => {
  return (
    <div className="flex flex-col gap-[0.18rem]">
      {" "}
      <label
        className={`font-semibold ${
          props.required
            ? "after:content-['*'] after:ml-0.5 after:text-red-500"
            : null
        }`}
      >
        {props.label}
      </label>{" "}
      <input
        name={props.name}
        type="text"
        className="form-control py-[0.18rem] px-2 outline-none border border-gray-300 focus:border-[color:var(--red-color)] active:border-[color:var(--red-color)]"
        required={props.required}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};
export default InputField;
