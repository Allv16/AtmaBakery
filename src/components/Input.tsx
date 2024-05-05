type InputProps = {
  type: string;
  placeholder: string;
  className: string;
};

export const InputForm = (props: InputProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      required
    />
  );
};
