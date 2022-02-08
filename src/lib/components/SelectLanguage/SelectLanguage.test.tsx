import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectLanguage } from '.';

describe('<SelectLanguage />', () => {
  it('should correctly render the selectLanguage component', () => {
    const { container } = render(<SelectLanguage locale="pt-BR" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render en-US flag for the selectLanguage by prop', () => {
    render(<SelectLanguage locale="en-US" />);
    expect(
      screen.getByRole('img', {
        name: /selectlanguage country flag_en-us/i,
      }),
    ).toBeInTheDocument();
  });
  it('should render the default img (pt-br) when empty prop is provided', () => {
    render(<SelectLanguage />);
    expect(
      screen.getByRole('img', {
        name: /selectlanguage country flag_pt-br/i,
      }),
    ).toBeInTheDocument();
  });
  it('should render the en-US flag (after clicking/selecting)', () => {
    render(<SelectLanguage />);
    userEvent.click(
      screen.getByRole('img', { name: /selectlanguage country flag_pt-br/i }),
    );
    userEvent.click(
      screen.getByRole('img', { name: /language country flag_en-us/i }),
    );
    expect(
      screen.getByRole('img', {
        name: /selectlanguage country flag_en-us/i,
      }),
    ).toBeInTheDocument();
  });
  it('should render the es-ES flag (after clicking/selecting)', () => {
    render(<SelectLanguage />);
    userEvent.click(
      screen.getByRole('img', { name: /selectlanguage country flag_pt-br/i }),
    );
    userEvent.click(
      screen.getByRole('img', { name: /language country flag_es-es/i }),
    );
    expect(
      screen.getByRole('img', {
        name: /selectlanguage country flag_es-es/i,
      }),
    ).toBeInTheDocument();
  });
});
