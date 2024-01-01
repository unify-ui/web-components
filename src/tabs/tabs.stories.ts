import type { StoryObj, Meta } from '@storybook/web-components';
import { html } from 'lit';
import './index.js';

interface Args {
  items: { label: string; value: string; icon?: string }[];
  activeTab: string;
}

const meta = {
  title: 'General/Tabs',
  component: 'u-tabs',
  tags: ['autodocs'],
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<Args>;

export const BasicUsage: Story = {
  args: {
    items: [
      { label: 'Tab1', value: 'tab1' },
      { label: 'Tab2', value: 'tab2' },
      { label: 'Tab3', value: 'tab3' },
      { label: 'Tab4', value: 'tab4' },
      { label: 'Tab5', value: 'tab5' },
      { label: 'Tab6', value: 'tab6' },
    ],
    activeTab: 'tab1',
  },
  render: ({ items, activeTab }) => {
    function handleTabClick(e: CustomEvent) {
      console.log('🚀 ~ file: tabs.stories.ts:33 ~ handleTabClick ~ e:', e);
      activeTab = e.detail;
    }
    return html` <u-tabs .items=${items} .activeTab=${activeTab} @tab-click=${handleTabClick}> </u-tabs> `;
  },
};
