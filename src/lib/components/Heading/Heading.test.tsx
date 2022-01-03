import React from 'react';
import { render } from '@testing-library/react';

import { Heading } from '.';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Heading children="Hello world!" />);
  });
});
