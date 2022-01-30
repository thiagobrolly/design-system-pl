import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    render(<Button>Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });
  });

  it('should render the small size', () => {
    render(<Button size="small">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem',
    });
  });

  it('should render the large size', () => {
    render(<Button size="large">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      fontSize: '1.6rem',
    });
  });

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render an version version', () => {
    render(<Button icon>Click</Button>);

    expect(screen.getByText(/Click/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/icon plus/i)).toBeInTheDocument();
  });

  it('should render the primary appearance by default', () => {
    render(<Button>Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: 'transparent',
      color: '#0f194b',
      border: 'none',
    });
  });

  it('should render the secondary appearance', () => {
    render(<Button appearance="secondary">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: '#0f194b',
      color: '#ffffff',
      border: 'none',
    });
  });

  it('should render the outline appearance', () => {
    render(<Button appearance="outline">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: '#ffffff',
      color: '#0f194b',
      border: '2px solid #0f194b',
    });
  });

  it('should render the approve appearance', () => {
    render(<Button appearance="approve">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: '#48c88f',
      color: '#ffffff',
      border: 'none',
    });
  });

  it('should render the cancel appearance', () => {
    render(<Button appearance="cancel">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: '#fe5454',
      color: '#ffffff',
      border: 'none',
    });
  });

  it('should render Button as a link', () => {
    const { debug, container } = render(
      <Button as="a" href="/link">
        Link
      </Button>,
    );

    debug(container);

    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute(
      'href',
      '/link',
    );
  });
});
