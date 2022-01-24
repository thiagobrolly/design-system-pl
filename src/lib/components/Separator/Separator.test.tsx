import { render, screen } from '@testing-library/react';

import { Separator } from '.';

describe('<Separator />', () => {
  it('should render the heading', () => {
    const { container } = render(<Separator />);

    expect(
      screen.getByRole('heading', { name: /Separator/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
