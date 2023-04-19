import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

const meta = {
  title: "UI/MyLabel",
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    label: {
        control: {
            type: 'text',
        },
    },
    size: {
        control: {
            type: 'select'
        },
    },
    color: {
        control: {
            type: 'select'
        },
    },
    allCaps: {
        control: {
            type: 'boolean',
        },
    },
    fontColor: {
        control: {
            type: 'color',
        },
    },
}

} as Meta<typeof MyLabel>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Basic: Story = {
  args: {
    label: "Basic",
    size: "h3",
  },
};

export const AllCaps: Story = {
    args: {
      label: "AllCaps",
      size: "h1",
      allCaps: true,
    },
  };

  export const Secondary: Story = {
    args: {
      label: "Secondary",
      size: "h1",
      color: "secondary",
    },
  };

  export const Tertiary: Story = {
    args: {
      label: "Tertiary",
      size: "h1",
      color: "tertiary",
    },
  };

  export const CustomFontColor: Story = {
    args: {
      label: "CustomFontColor",
      size: "h1",
      color: "tertiary",
    },
  };