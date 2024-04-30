type InputProps = {
  type: string;
  placeholder: string;
};

export const InputForm = (props: InputProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="peer h-10 w-full border-b border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600 text-sm md:text-base xl:text-lg"
      required
    />
  );
};
