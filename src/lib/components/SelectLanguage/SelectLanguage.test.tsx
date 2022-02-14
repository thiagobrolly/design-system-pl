import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectLanguage } from '.';

describe('<SelectLanguage />', () => {
  test('should correctly render the selectLanguage component', () => {
    const { container } = render(<SelectLanguage locale="pt-BR" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('should render en-US flag for the selectLanguage by prop', () => {
    render(<SelectLanguage locale="en-US" />);
    expect(screen.getByTitle('flag eua')).toBeInTheDocument();
  });
  test('should render the default img (pt-br) when empty prop is provided', () => {
    render(<SelectLanguage />);
    expect(screen.getByTitle('flag brazil')).toBeInTheDocument();
  });
  test('should render the en-US flag (after clicking/selecting)', () => {
    render(<SelectLanguage />);
    userEvent.click(screen.getByTitle('flag brazil'));
    userEvent.click(screen.getByTitle('flag eua'));
    expect(screen.getByTitle('flag eua')).toBeInTheDocument();
  });
  test('should render the es-ES flag (after clicking/selecting)', () => {
    render(<SelectLanguage />);
    userEvent.click(screen.getByTitle('flag brazil'));
    userEvent.click(screen.getByTitle('flag spain'));
    expect(screen.getByTitle('flag spain')).toBeInTheDocument();
  });
  test('dispatches the selected value when changed (after clicking/selecting)', () => {
    const dispatchFunction = jest.fn();
    render(<SelectLanguage dispatchSettings={dispatchFunction} />);
    expect(dispatchFunction).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByTitle('flag brazil'));
    userEvent.click(screen.getByTitle('flag spain'));

    expect(dispatchFunction).toHaveBeenCalled();
    expect(dispatchFunction).toHaveBeenCalledTimes(2);
    userEvent.click(screen.getByTitle('flag spain'));

    userEvent.click(screen.getByTitle('flag eua'));
    expect(dispatchFunction).toHaveBeenCalled();
    expect(dispatchFunction).toHaveBeenCalledTimes(3);
  });
});
