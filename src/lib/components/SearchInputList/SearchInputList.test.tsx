import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInputList } from '.';

describe('<SearchInputList />', () => {
  const fetchDataMock = jest.fn();
  test('should correctly render the SearchInputList component', () => {
    render(
      <SearchInputList
        label="Buscar algo"
        name="buscar-usuario"
        autocomplete
        fetchData={fetchDataMock}
      >
        <p>Sucesso</p>
      </SearchInputList>,
    );
    expect(screen.getByLabelText(/buscar algo/i));
  });
  test('renders the SearchInputList: outline correct styles', () => {
    render(
      <SearchInputList outline label="Buscar algo" fetchData={fetchDataMock}>
        <p>Sucesso</p>
      </SearchInputList>,
    );
    const inputElement = screen.getByLabelText(/buscar algo/i);
    expect(inputElement).toHaveStyle('background-color: rgb(255,255,255)');
    expect(inputElement).toHaveStyle('color: rgba(0,0,0,0.74)');
  });

  test('Changes its value when typing', async () => {
    const fetchData = jest.fn();
    render(
      <SearchInputList fetchData={fetchData} label="Buscar algo">
        <p>Sucesso</p>
      </SearchInputList>,
    );

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
    render(
      <SearchInputList label="buscar algo" fetchData={fetchDataMock}>
        <p>Sucesso</p>
      </SearchInputList>,
    );
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
      <SearchInputList fetchData={fetchData} label="Buscar algo">
        <p>Sucesso</p>
      </SearchInputList>,
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
