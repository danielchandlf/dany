import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Link } from './index';
import { LinkProps } from './Link';

export default {
  component: Link,
  title: 'Components/Link'
} as Meta;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const NormalLink = Template.bind({});
NormalLink.args = {
  children: 'Click Me',
  href: 'http://example.com/'
};
