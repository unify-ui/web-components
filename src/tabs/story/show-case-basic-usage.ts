import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../index.js';

@customElement('show-case-basic-usage')
export class UTag extends LitElement {
  @state()
  items = new Array(20).fill(0).map((_, index) => ({ label: `Tab${index}`, value: `tab${index}` }));

  @state()
  activeTab = 'tab1';

  private _handleTabClick(e: CustomEvent<string>) {
    this.activeTab = e.detail;
  }

  render() {
    return html`
      <u-tabs .items=${this.items} .activeTab=${this.activeTab} @tab-click=${this._handleTabClick}> </u-tabs>
    `;
  }
}
