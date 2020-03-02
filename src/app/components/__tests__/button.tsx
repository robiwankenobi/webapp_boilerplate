import React from 'react';
import { render } from '@testing-library/react';

import Button from '../Button';

test('test default button interaction states', () => {
  const testContent = 'click me';
  const { getByText } = render(<Button>{testContent}</Button>);
  const button = getByText(testContent);
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();
  button.click();
  expect(button).toBeDisabled();
});

test('button snapshot test', () => {
  const testContent = 'click me';
  const { getByText, debug } = render(<Button>{testContent}</Button>);
  // shows rendered html in testing console
  debug();
  const button = getByText(testContent);
  expect(button).toMatchInlineSnapshot(`
    <button>
      click me
    </button>
  `);
});
