export type TooltipProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  position?: 'right' | 'left';
  className?: string;
};

export interface ContentProps {
  position?: 'right' | 'left';
}

export interface WrapperProps {
  isOpen?: boolean;
}
