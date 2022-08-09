import styled from '@emotion/styled';

import { Spacing } from '../utils/constants';

import { baseStyles, Props } from './Input';

export const baseSelector = 'button.input';

export const InputLikeButton = styled.button<Props>`
  ${baseStyles};
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${Spacing.L2};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background: var(--surface-hover);
  }
  &:active() {
    background: var(--surface-active);
  }
`;
