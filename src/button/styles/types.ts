import { css } from 'lit'

export const buttonTypeStyle = css`
  .type-primary {
    color: white;
    background-color: rgb(79 70 229);
    border: 1px solid rgb(79 70 229);
  }

  .type-primary:hover,
  .type-primary:active {
    background-color: rgb(99 102 241);
    border-color: rgb(99 102 241);
  }

  .type-secondary {
    color: rgb(17 24 39);
    background-color: rgb(255 255 255);
    border: 1px solid #e5e7eb;
  }

  .type-secondary:hover,
  .type-secondary:active {
    background-color: rgb(249 250 251);
    border-color: #e5e7eb;
  }

  .type-soft {
    color: rgb(79 70 229);
    background-color: rgb(238 242 255);
    border: 1px solid rgb(238 242 255);
  }

  .type-soft:hover,
  .type-soft:active {
    background-color: rgb(224 231 255);
    border-color: rgb(224 231 255);
  }
`
