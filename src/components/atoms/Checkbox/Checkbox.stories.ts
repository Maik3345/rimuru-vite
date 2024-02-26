import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    checked: { defaultValue: true, control: { type: "boolean" } },
    variant: {
      options: ["primary", "secondary", "bordered", "disabled"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Secondary: Story = {
  args: {
    secondary: true,
  },
};

export const BorderedUsingVariant: Story = {
  args: {
    variant: "bordered",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
