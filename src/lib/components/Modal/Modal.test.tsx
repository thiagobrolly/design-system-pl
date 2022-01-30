import { render, screen } from '@testing-library/react';

import { Modal } from '.';

describe('<Modal />', () => {
  it('should render the modal', () => {
    const { container } = render(
      <Modal shouldCloseOnOverlayClick isOpen onRequestClose={() => {}}>
        Modal
      </Modal>,
    );

    expect(screen.getByRole('modal', { name: /Modal/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
