import clsx from 'clsx';
import React, { ReactElement } from 'react';

import styles from './navLink.module.scss';

interface BaseNavLinkProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

export type NavLinkProps = BaseNavLinkProps;

const NavLink = (props: NavLinkProps): ReactElement => {
  const {
    children,
    className,
    href,
    isActive = false,
    isDisabled = false,
    ...rest
  } = props;

  return (
    <div className={clsx(styles['nav__node'])}>
      <a
        href={href}
        className={clsx(
          styles['nav__link'],
          {
            [styles['nav__link--active']]: isActive && !isDisabled,
            [styles['nav__link--disabled']]: isDisabled
          },
          className
        )}
        {...rest}
      >
        {children}
      </a>
    </div>
  );
};

export default NavLink;
