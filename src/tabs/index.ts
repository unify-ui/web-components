import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './tab.js';

@customElement('u-tabs')
export class UTabs extends LitElement {
  @property({ type: Array })
  items: { label: string; value: string; icon?: string }[] = [];

  @property({ type: String })
  activeTab: string = '';

  render() {
    console.log('activeTab', this.activeTab);
    return html`
      <div class="tabs">
        ${this.items.map(
          (item) =>
            html`<u-tab label=${item.label} value=${item.value} ?isActive=${this.activeTab === item.value}></u-tab>`
        )}
        <div class="line"></div>
      </div>
    `;
  }

  static styles = css`
    .tabs {
      position: relative;
      display: flex;
      gap: 32px;
      border-bottom: 1px solid var(--u-gray-200);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'u-tabs': UTabs;
  }
}
