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

const CustomInput = (props: Props) => {
  // ...alguma lógica adicional

  return <input {...props} />;
};

type CustomProps = InputHTMLAttributes<HTMLInputElement> & {
  onUpdate: (value: string) => void;
};

const WrongCustomInput = ({ value, onChange }: CustomProps) => {
  // este componente está errado, pois ao desestruturar perde todos os demais atributos
  // ...alguma lógica adicional

  return <input value={value} onChange={onChange} />;
};

const CorrectCustomInput = ({ onUpdate, ...props }: CustomProps) => {
  // desestruturando o que precisa e mantem os demais, e repassa no componente
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    /// ... alguma lógica
    onUpdate(event.target.value);
  };

  return <input {...props} onChange={onChange} />;
};

const BetterCustomInput = ({ onChange, ...props }: Props) => {
  // é comum ter uma função local handleXXX correspondente para cada propriedade onXXX
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    /// ... alguma lógica
    onChange?.(event);
  };

  return <input {...props} onChange={handleChange} />;
};

export { Input, CharCountInput, CustomInput };
