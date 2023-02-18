import React from "react";
import Component from "./index.jsx";

export default {
  component: Component,
  title: "Input",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  defaultValue: "",
  onEditComplete: (value) => {
    console.log(value);
  },
};
