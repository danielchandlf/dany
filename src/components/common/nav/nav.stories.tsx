import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { NavLink } from './index';
import { NavLinkProps } from './NavLink';

export default {
  component: NavLink,
  title: 'Components/NavLink'
} as Meta;

const Template: StoryFn<NavLinkProps> = (args) => <NavLink {...args} />;

export const DefaultNavLink = Template.bind({});
DefaultNavLink.args = {
  children: 'JUMP'
};

export const ActiveNavLink = Template.bind({});
ActiveNavLink.args = {
  children: 'About Us',
  isActive: true
};
