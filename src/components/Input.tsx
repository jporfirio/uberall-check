import { InputHTMLAttributes } from "react";
import { useSearchParams } from "react-router-dom";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  id?: string;
}
export default function Input({
  label,
  name,
  id = name,
  ...rest
}: InputProps): JSX.Element {
  const [search] = useSearchParams();
  const value = search.get(name) ?? undefined;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input defaultValue={value} {...rest} id={id} name={name} />
    </>
  );
}
