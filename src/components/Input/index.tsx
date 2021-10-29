import React, { InputHTMLAttributes, useCallback } from "react";

import { cep } from "./masks";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cep";
  prefix?: string;
}

const Input: React.FC<InputProps> = ({ mask, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "cep") {
        cep(e);
      }      
    },
    [mask]
  );

  return (
    <Container>
      <label>CEP:
        <input {...props} onKeyUp={handleKeyUp} />
      </label>
    </Container>
  );
};

export default Input;