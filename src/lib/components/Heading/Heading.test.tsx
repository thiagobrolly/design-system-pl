import React from 'react';
import { render, screen } from '@testing-library/react';

import { Heading } from '.';

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      color: '#000',
    });
  });

  it('should render a white heading when color is passed', () => {
    render(<Heading color="white">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      color: '#fff',
    });
  });

  it('should render a gray heading when color is passed', () => {
    render(<Heading color="gray">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      color: '#707070',
    });
  });

  it('should render a medium sized title by default', () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '1.6rem',
    });
  });

  it('should render a small title when the size is passed', () => {
    render(<Heading size="small">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '1.4rem',
    });
  });

  it('should render a large title when the size is passed', () => {
    render(<Heading size="large">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '2.0rem',
    });
  });

  it('should render a xlarge title when the size is passed', () => {
    render(<Heading size="xlarge">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '2.4rem',
    });
  });

  it('should render a big title when the size is passed', () => {
    render(<Heading size="big">Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontSize: '3.2rem',
    });
  });

  it('should render a title with normal font by default', () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontWeight: '400',
    });
  });

  it('should render a bold font title when passed', () => {
    render(<Heading bold>Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      fontWeight: '700',
    });
  });

  it('should render a title with uppercase font when passed', () => {
    render(<Heading uppercase>Title</Heading>);
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle({
      textTransform: 'uppercase',
    });
  });
});
