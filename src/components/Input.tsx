type InputProps = {
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

export const InputForm = (props: InputProps) => {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className="peer h-10 w-full border-b border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600 text-sm md:text-base xl:text-lg"
      required
    />
  );
};
