import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = (): void => {
    setDisabled(true);
  };

  return (
    <button disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
