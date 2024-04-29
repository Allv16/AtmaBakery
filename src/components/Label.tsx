type LabelProps = {
  children: string;
};

export const Label = (props: LabelProps) => {
  return (
    <label className="label p-0">
      <span className="label-text font-cormorant text-gray-700 text-xl">
        {props.children}
      </span>
    </label>
  );
};
