import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { buttonSizeStyle, buttonTypeStyle, buttonDisabledStyle } from './styles/index'

@customElement('uni-button')
export class UniButton extends LitElement {
  @property({ type: String })
  type: 'secondary' | 'primary' | 'soft' = 'soft'

  @property({ type: String })
  size: 'xs' | 's' | 'm' | 'l' | 'xl' = 'm'

  @property({ type: Boolean })
  rounded = false

  @property({ type: Boolean })
  disabled = false

  @property({ type: String })
  htmlType: 'button' | 'submit' | 'reset' = 'button'

  render() {
    const className = {
      button: true,
      [`size-${this.size}`]: true,
      [`type-${this.type}`]: !this.disabled,
      disabled: this.disabled,
      rounded: this.rounded,
    }

    return html`
      <button type="${this.htmlType}" class=${classMap(className)}>
        <slot></slot>
      </button>
    `
  }

  static styles = [
    css`
      :host {
        display: inline-block;
        --primary-color: rgb(79 70 229);
      }

      .button {
        font-weight: 600;

        border: none;
        outline: none;

        background: none;
        cursor: pointer;
      }
    `,
    buttonSizeStyle,
    buttonTypeStyle,
    css`
      .rounded {
        border-radius: 9999px;
      }
    `,
    buttonDisabledStyle,
  ]
}
