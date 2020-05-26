import React from 'react';
import { render } from '@testing-library/react';

import Button from '../Button';

describe('Button Component', () => {
  test('is rendered with text input', () => {
    const testContent = 'click me';
    const { debug, getByText } = render(<Button>{testContent}</Button>);
    // shows rendered html in testing console
    // debug();
    const button = getByText(testContent);
    expect(button).toBeInTheDocument();
  });

  test('is not rendered without text input', () => {
    const testContent = '';
    const { queryByRole } = render(<Button>{testContent}</Button>);
    const button = queryByRole('button');
    expect(button).toBeNull();
  });

  test('is disabled after first click', () => {
    const testContent = 'click me';
    const { getByRole } = render(<Button>{testContent}</Button>);
    const button = getByRole('button');
    expect(button).not.toBeDisabled();
    button.click();
    expect(button).toBeDisabled();
  });
});

// test('button snapshot test', () => {
//   const testContent = 'click me';
//   const { getByText } = render(<Button>{testContent}</Button>);
//   // shows rendered html in testing console
//   debug();
//   const button = getByText(testContent);
//   expect(button).toMatchInlineSnapshot(`
//     <button>
//       click me
//     </button>
//   `);
// });
