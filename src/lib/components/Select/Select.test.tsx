import { render, screen } from '@testing-library/react';
import { Select } from '.';
import { selectOptionsMock } from '../../../utils/mocks/selectOptionsMock';

describe('<Select />', () => {
  it('should render the heading', () => {
    render(<Select options={selectOptionsMock} />);

    expect(screen).toBeInTheDocument();
  });
});
