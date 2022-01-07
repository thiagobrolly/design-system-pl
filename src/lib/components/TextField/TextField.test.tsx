import React from 'react';
import { render } from '@testing-library/react';

import { TextField } from '.';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<TextField type="text" children="Hello world!" />);
  });
});
