import { Button } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  background: "#000",
  label: "Klik",
};

export const Secondary = Template.bind({});
Secondary.args = {
  background: "#2233",
  label: "Continue",
};

export const Fancy = Template.bind({});
Fancy.args = {
  background: "#da2",
  label: "Submit",
};
