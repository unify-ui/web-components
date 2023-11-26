import { css } from 'lit'

export const buttonDisabledStyle = css`
  :host {
    --disabled-color: #d9d9d9;
  }

  .disabled {
    cursor: not-allowed;
    background-color: rgba(0, 0, 0, 0.04);
    border-color: var(--disabled-color);
    color: var(--disabled-color);
  }
`
