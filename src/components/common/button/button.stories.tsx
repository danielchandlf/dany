import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Button } from './index';
import { ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Components/Button'
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: 'Default Button'
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: 'Primary Button',
  type: 'primary'
};
