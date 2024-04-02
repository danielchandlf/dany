import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { NavLink } from './index';
import type { NavLinkProps } from './index';

export default {
  component: NavLink,
  title: 'Components/NavLink'
} as Meta;

const Template: StoryFn<NavLinkProps> = (args) => <NavLink {...args} />;

export const DefaultNavLink = Template.bind({});
DefaultNavLink.args = {
  children: 'JUMP',
  href: 'http://google.com',
  navLink: false
};

export const ActiveNavLink = Template.bind({});
ActiveNavLink.args = {
  children: 'About Us',
  href: 'http://google.com',
  navLink: false
};
