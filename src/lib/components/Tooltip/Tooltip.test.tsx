import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tooltip } from '.';

describe('<Tooltip />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle Tooltip">Click here</h1>;

    render(
      <Tooltip title={title}>
        <span>Content</span>
      </Tooltip>,
    );
  });

  it('should render title', () => {
    expect(screen.getByLabelText(/toogle Tooltip/)).toBeInTheDocument();
  });

  it('should handle open/close Tooltip', () => {
    const content = screen.getByText(/content/i).parentElement!;

    expect(content).toHaveStyle({ opacity: 0 });
    expect(content.getAttribute('aria-hidden')).toBe('true');

    userEvent.click(screen.getByLabelText(/toogle Tooltip/));

    expect(content).toHaveStyle({ opacity: 1 });
    expect(content.getAttribute('aria-hidden')).toBe('false');
  });

  it('should handle open/close Tooltip when clicking on overlay', () => {
    const content = screen.getByText(/content/i).parentElement!;
    const overlay = content.nextElementSibling;

    userEvent.click(screen.getByLabelText(/toogle Tooltip/));

    expect(overlay).toHaveStyle({ opacity: 1 });
    expect(overlay!.getAttribute('aria-hidden')).toBe('false');

    userEvent.click(overlay!);

    expect(overlay).toHaveStyle({ opacity: 0 });
    expect(overlay!.getAttribute('aria-hidden')).toBe('true');
  });
});

describe('<Tooltip position/>', () => {
  it('should position the Tooltip to the right', () => {
    render(
      <Tooltip title="click" position="right">
        <span>Content</span>
      </Tooltip>,
    );
    const content = screen.getByText(/content/i).parentElement!;

    expect(content).toHaveStyle({ right: 0 });
  });
});
