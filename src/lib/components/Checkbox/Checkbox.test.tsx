import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    render(<Checkbox label="checkbox label" labelFor="check" />);

    // input a partir do label/role
    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    // input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    // label a partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('should render without label', () => {
    render(<Checkbox />);

    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument();
  });

  it('should render with color label', () => {
    render(
      <Checkbox label="checkbox label" labelFor="check" labelColor="#0065fc" />,
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#0065fc',
    });
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    render(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    render(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab', async () => {
    render(<Checkbox label="Checkbox" labelFor="Checkbox" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/Checkbox/i)).toHaveFocus();
  });
});
