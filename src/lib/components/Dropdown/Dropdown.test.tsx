import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from '.';
import { dropdownChildrenMock } from '../../../utils/mocks/dropdownChildrenMock';

describe('<Dropdown />', () => {
  test('should correctly render the dropdown component', () => {
    const { container } = render(<Dropdown title="title test" />);

    expect(screen.getByRole('menu')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByLabelText('dropdown-title')).toHaveTextContent(
      'title test',
    );
  });
  test('should correctly open/close the dropdown menu (after clicking)', () => {
    render(<Dropdown children={dropdownChildrenMock} />);
    const dropdownHeader = screen.getByLabelText('dropdown-header');
    const dropdownOverlay = screen.getByLabelText('dropdown-overlay');
    // open - shows the dropdown list
    userEvent.click(dropdownHeader);
    let dropdownList = screen.getByLabelText('dropdown-list');
    expect(dropdownList).toBeInTheDocument();
    // persist list when clicking on it
    userEvent.click(dropdownList);
    expect(dropdownList).toBeInTheDocument();
    // close - hides the dropdown list
    userEvent.click(dropdownHeader);
    expect(dropdownList).not.toBeInTheDocument();
    // close - hides the dropdown list (when clicking outside - overlay)
    userEvent.click(dropdownHeader);
    dropdownList = screen.getByLabelText('dropdown-list');
    expect(dropdownList).toBeInTheDocument();
    userEvent.click(dropdownOverlay);
    expect(dropdownList).not.toBeInTheDocument();
  });
});
