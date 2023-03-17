/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { toggle } from '@tablecheck/tablekit-core';

export type Props = toggle.DefaultedProps;

export const Toggle = styled.input<Props>`
  ${toggle.baseStyles}
`;
Toggle.defaultProps = { type: 'checkbox' };
