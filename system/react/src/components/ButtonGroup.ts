import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const classySelector = '.button-group';

const stateBoxShadow = {
  default:
    'inset 0 1px var(--border), ' +
    'inset -1px 0 var(--border), ' +
    'inset 0 -1px var(--border)',
  selected:
    '-1px 0 var(--border-active), ' +
    'inset 0 1px var(--border-active), ' +
    'inset -1px 0 var(--border-active), ' +
    'inset 0 -1px var(--border-active)'
};

export const baseStyles = css`
  position: relative;
  display: flex;
  flex-flow: row wrap;

  & > * {
    position: relative;
    display: grid;
    grid-gap: var(--spacing-l2);
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    font: var(--body-1);
    padding: var(--spacing-l3) var(--spacing-l4);
    text-decoration: none;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
    color: var(--text);
    background: var(--grey-100);
    box-shadow: ${stateBoxShadow.default};

    &:hover,
    &:focus-visible {
      background: var(--surface-hover);
    }

    &:focus-visible {
      outline: none;
      &:after {
        content: '';
        position: absolute;
        z-index: 1;
        top: -4px;
        bottom: -4px;
        left: -5px;
        right: -4px;
        border-radius: var(--border-radius-small);
        border: 2px solid var(--focus, hsla(219, 78.5%, 52.5%, 1));
      }

      &[data-selected='true'] {
        box-shadow: ${stateBoxShadow.selected};
      }
    }

    &:active {
      background: var(--surface-active);
    }

    &[data-selected='true'] {
      background: var(--surface);
      box-shadow: ${stateBoxShadow.selected};
    }

    &:first-child {
      border-top-left-radius: var(--border-radius-small);
      border-bottom-left-radius: var(--border-radius-small);
      box-shadow: inset 0 0 0 1px var(--border);

      &:focus-visible {
        &:after {
          left: -4px;
        }

        &[data-selected='true'] {
          box-shadow: inset 0 0 0 1px var(--border-active);
        }
      }

      &:active {
        background: var(--surface-active);
      }

      &[data-selected='true'] {
        background: var(--surface);
        box-shadow: inset 0 0 0 1px var(--border-active);
      }
    }

    &:last-child {
      border-top-right-radius: var(--border-radius-small);
      border-bottom-right-radius: var(--border-radius-small);
      box-shadow: ${stateBoxShadow.default};

      &:focus-visible {
        &[data-selected='true'] {
          box-shadow: ${stateBoxShadow.selected};
        }
      }

      &:active {
        background: var(--surface-active);
      }

      &[data-selected='true'] {
        background: var(--surface);
        box-shadow: ${stateBoxShadow.selected};
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  ${baseStyles};
`;
