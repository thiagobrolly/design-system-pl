import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from '.';
import { Button } from '../..';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    shouldCloseOnOverlayClick: false,
    shouldCloseOnEscClick: true,
    children: 'Modal',
    viewCloseButton: false,
  },
} as Meta;

export const StartsOpen: Story<ModalProps> = (args) => <Modal {...args} />;

export const StartsClosed: Story<ModalProps> = (args) => {
  const [isOpen, setOpen] = useState(args.isOpen);

  return (
    <>
      <Button appearance="secondary" onClick={() => setOpen(true)}>
        Abrir Modal
      </Button>

      <Modal {...args} onRequestClose={() => setOpen(!isOpen)} isOpen={isOpen}>
        {args.children}
      </Modal>
    </>
  );
};

StartsOpen.args = {
  isOpen: true,
};

StartsClosed.args = {
  isOpen: false,
  viewCloseButton: true,
};
