/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { inputLikeButton } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = inputLikeButton.DefaultedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const InputLikeButton = styled.button<Props>`
  ${inputLikeButton.baseStyles}
`;
InputLikeButton.defaultProps = { role: 'button', type: 'button' };
