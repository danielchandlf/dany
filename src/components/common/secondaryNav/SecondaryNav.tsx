import clsx from 'clsx';
import React, { ReactElement } from 'react';

import { Tab, TabProps } from '../tab';

import styles from './secondaryNav.module.scss';

export type SecondaryNavItem = TabProps & {
  hasNotification?: boolean;
  label?: boolean;
};

interface BaseSecondaryNavLinkProps {
  children?: React.ReactNode;
  className?: string;
  navItems: SecondaryNavItem[];
}

export type SecondaryNavLinkProps = BaseSecondaryNavLinkProps;

const SecondaryNavLink = (props: SecondaryNavLinkProps): ReactElement => {
  const { children, navItems, className, ...rest } = props;

  return (
    <div className={clsx(styles['secondary-nav'], className)} {...rest}>
      <div className={clsx('container', 'flex', 'content-between')}>
        {navItems?.length && (
          <ul className={styles['secondary-nav__wrap']}>
            {navItems?.map((navItem, idx) => (
              <li
                className={clsx(styles['secondary-nav__node'], {
                  [styles['secondary-nav__node--notification']]:
                    navItem.hasNotification
                })}
                key={idx}
              >
                <Tab {...navItem}>{navItem.label}</Tab>
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </div>
  );
};

export default SecondaryNavLink;
