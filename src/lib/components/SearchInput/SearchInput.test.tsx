import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from '.';

describe('<SearchInput />', () => {
  test('should correctly render the SearchInput component', () => {
    render(
      <SearchInput label="Buscar algo" name="buscar-usuario" autocomplete />,
    );
    expect(screen.getByLabelText(/buscar algo/i));
  });
  test('renders the SearchInput: outline correct styles', () => {
    render(<SearchInput outline label="Buscar algo" />);
    const inputElement = screen.getByLabelText(/buscar algo/i);
    expect(inputElement).toHaveStyle('background-color: rgb(255,255,255)');
    expect(inputElement).toHaveStyle('color: rgba(0,0,0,0.74)');
  });

  test('Changes its value when typing', async () => {
    const fetchData = jest.fn();
    render(<SearchInput fetchData={fetchData} label="Buscar algo" />);

    const inputElement = screen.getByLabelText(/buscar algo/i);
    const text = 'This is my new text';
    userEvent.type(inputElement, text);

    await waitFor(() => {
      expect(inputElement).toHaveValue(text);
      expect(fetchData).toHaveBeenCalledTimes(text.length - 2);
    });

    expect(fetchData).toHaveBeenCalledWith(text);
  });
  test('Correct handleBlur behavior', () => {
    render(<SearchInput label="buscar algo" />);
    const inputElement = screen.getByLabelText(/buscar algo/i);

    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);
    expect(inputElement).not.toHaveClass('hasContent');

    fireEvent.change(inputElement, { target: { value: 'digitando...' } });
    fireEvent.blur(inputElement);
    expect(inputElement).toHaveClass('hasContent');
  });
  test('Test the fetchData and dropdown being displayed/hidden', async () => {
    const fetchData = jest.fn((value) => {
      if (value === 'This') {
        return true;
      }
      return false;
    });
    render(
      <SearchInput
        fetchData={fetchData}
        label="Buscar algo"
        children={<p>Sucesso</p>}
      />,
    );
    const inputElement = screen.getByLabelText(/buscar algo/i);
    let text = 'This';
    userEvent.type(inputElement, text);
    const dropdownList = screen.getByLabelText('dropdown-list');
    const dropdownChild = screen.getByText('Sucesso');
    // first case: found the data and dropdown is displayed
    expect(dropdownList).toBeInTheDocument();
    expect(dropdownChild).toBeInTheDocument();
    // second case: can't find the data and dropdown isn't displayed
    text = "This won't be found wrong";
    userEvent.type(inputElement, text);
    expect(dropdownList).not.toBeInTheDocument();
    expect(dropdownChild).not.toBeInTheDocument();
  });
});
