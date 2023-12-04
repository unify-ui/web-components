import type { StoryObj, Meta } from '@storybook/web-components'
import { html } from 'lit'
import './index'

interface Args {
  type: 'secondary' | 'primary' | 'soft'
  size: 'xs' | 's' | 'm' | 'l' | 'xl'
  rounded: boolean
  htmlType: 'button' | 'submit' | 'reset'
  disabled: boolean
}

const meta = {
  title: 'General/Button',
  component: 'uni-button',
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['soft', 'secondary', 'primary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['xs', 's', 'm', 'l', 'xl', 'm'],
      control: { type: 'radio' },
    },
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' },
    htmlType: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<Args>

export default meta
type Story = StoryObj<Args>

export const BasicUsage: Story = {
  args: {
    type: 'soft',
    size: 'm',
    rounded: false,
    disabled: false,
    htmlType: 'button',
  },
  render: ({ type, size, rounded, disabled, htmlType }) =>
    html`
      <uni-button type=${type} size=${size} ?rounded=${rounded} ?disabled=${disabled} htmlType=${htmlType}>
        Button
      </uni-button>
    `,
}

export const Type: Story = {
  args: {
    type: 'primary',
  },
  render: () => html`
    <uni-button type="soft"> Soft </uni-button>
    <uni-button type="primary"> Primary </uni-button>
    <uni-button type="secondary"> Secondary </uni-button>
  `,
}

export const ButtonSize: Story = {
  args: {
    size: 'm',
  },
  render: () => html`
    <uni-button size="xs">XS</uni-button>
    <uni-button size="s">S</uni-button>
    <uni-button size="m">M</uni-button>
    <uni-button size="l">L</uni-button>
    <uni-button size="xl">XL</uni-button>
  `,
}

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  render: () => html`
    <uni-button type="soft" rounded> Soft </uni-button>
    <uni-button type="primary" rounded> Primary </uni-button>
    <uni-button type="secondary" rounded> Secondary </uni-button>
  `,
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: () => html`
    <uni-button disabled> Disabled</uni-button>
    <uni-button disabled rounded> Disabled</uni-button>
  `,
}
