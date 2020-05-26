import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = (): void => {
    setDisabled(true);
  };

  return children ? (
    <button role="button" disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  ) : null;
};

export default Button;
