import { InputHTMLAttributes } from "react";
import { useSearchParams } from "react-router-dom";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
    <fieldset className="form-field">
      <legend>{label}</legend>
      {/* <label htmlFor={id}>{label}</label> */}
      <input defaultValue={value} {...rest} id={id} name={name} />
    </fieldset>
  );
}
