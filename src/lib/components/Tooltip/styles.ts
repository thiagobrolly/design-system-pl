import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { TooltipProps } from '.';

type ContentProps = Pick<TooltipProps, 'position'>;

export interface WrapperProps {
  isOpen?: boolean;
}

const positionContent = {
  left: () => css`
    left: 0;

    &::before {
      content: '';
      position: absolute;
      border: 1rem solid transparent;
      border-bottom-color: ${theme.color.white};
      top: -1.9rem;
      left: 2.4rem;
      filter: drop-shadow(0px -4px 5px rgba(0, 0, 0, 0.2));
    }

    &::after {
      content: '';
      position: absolute;
      border: 1rem solid transparent;
      border-bottom-color: ${theme.color.white};
      top: -1.7rem;
      left: 2.4rem;
    }
  `,

  right: () => css`
    right: 0;

    &::before {
      content: '';
      position: absolute;
      border: 1rem solid transparent;
      border-bottom-color: ${theme.color.white};
      top: -1.9rem;
      right: 2.4rem;
      filter: drop-shadow(0px -4px 5px rgba(0, 0, 0, 0.2));
    }

    &::after {
      content: '';
      position: absolute;
      border: 1rem solid transparent;
      border-bottom-color: ${theme.color.white};
      top: -1.7rem;
      right: 2.4rem;
    }
  `,
};

export const Title = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 2.4rem;
`;

export const Content = styled.div<ContentProps>`
  ${({ position }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.color.white};
    color: ${theme.color.black};
    //margin-top: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xxsmall};
    position: absolute;
    z-index: ${theme.layers.alwayOnTop};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    top: 27px;

    ${positionContent[position!]()}
  `}
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${theme.layers.overlay};
  //background: rgba(0, 0, 0, 0.5);
`;

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-1.6rem);
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content}, ${Overlay} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`;
