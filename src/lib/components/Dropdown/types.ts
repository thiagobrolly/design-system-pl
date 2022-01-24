export interface DropdownProps {
  title: React.ReactNode;
  children: React.ReactNode;
  position?: 'right' | 'left';
}

export interface ContentProps {
  position?: 'right' | 'left';
}

export interface WrapperProps {
  isOpen?: boolean;
}
