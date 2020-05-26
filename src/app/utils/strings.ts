const uppercase = (string: string): string => {
  if (string === undefined || string === null)
    throw new Error('Invalid string input');
  return string.toUpperCase();
};

export { uppercase };
