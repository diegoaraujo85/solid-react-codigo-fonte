import React, { InputHTMLAttributes } from "react";
import { Input as PureInput } from "../ui/input";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
  return <PureInput {...props} />;
};

const CharCountInput = (props: Props) => {
  return (
    <>
      <Input {...props} />
      <span>Char count: {props.value?.length ?? 0}</span>
    </>
  );
};

export { Input, CharCountInput };
