import { LitElement, css, html } from 'lit';
import { customElement, property, state, eventOptions } from 'lit/decorators.js';

import './tab.js';

@customElement('u-tabs')
export class UTabs extends LitElement {
  @property({ type: Array })
  items: { label: string; value: string; icon?: string }[] = [];

  @property({ type: String })
  activeTab: string = '';

  @state()
  private _resizeObserver: ResizeObserver | null = null;

  connectedCallback() {
    super.connectedCallback();

    this._resizeObserver = new ResizeObserver(() => {});
  }

  private _handleTabClick(e: CustomEvent<string>) {
    this.dispatchEvent(new CustomEvent('tab-click', { detail: e.detail }));
  }

  @eventOptions({ passive: false })
  private _handleMouseWheel(e: WheelEvent) {
    e.preventDefault();
    const container = this.shadowRoot?.getElementById('tabs');
    if (container) {
      container.scrollBy({ left: e.deltaY });
    }
  }

  render() {
    return html`
      <div
        id="tabs"
        class="tabs"
        @mousewheel=${(e: WheelEvent) => requestAnimationFrame(() => this._handleMouseWheel(e))}
      >
        ${this.items.map(
          (item) =>
            html`<u-tab
              label=${item.label}
              value=${item.value}
              ?isActive=${this.activeTab === item.value}
              @tab-click=${this._handleTabClick}
            ></u-tab>`
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
      overflow: hidden;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'u-tabs': UTabs;
  }
}
