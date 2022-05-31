import Input, { InputProps } from "./Input";

interface SelectProps extends InputProps {
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}
export default function Select({
  name,
  id = name,
  options,
  ...rest
}: SelectProps) {
  return (
    <>
      <Input {...rest} list={`${id}-list`} name={name} />

      <datalist id={`${id}-list`}>
        {options.map(({ id, value, label = value }) => (
          <option key={id} id={id} value={value}>
            {label}
          </option>
        ))}
      </datalist>
    </>
  );
}
