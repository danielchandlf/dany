import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Tab, TabProps } from './index';

export default {
  component: Tab,
  title: 'Components/Tab'
} as Meta;

const Template: Story<TabProps> = (args) => <Tab {...args} />;

export const DefaultTab = Template.bind({});
DefaultTab.args = {
  children: 'JUMP'
};

export const ActiveTab = Template.bind({});
ActiveTab.args = {
  children: 'About Us',
  isActive: true
};
