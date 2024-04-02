import clsx from 'clsx';
import React, { ReactElement } from 'react';

import styles from './nav.module.scss';

interface BaseNavProps {
  children?: React.ReactNode;
  className?: string;
}

export type NavProps = BaseNavProps;

const Nav = (props: NavProps): ReactElement => {
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(styles['nav'], className)} {...rest}>
      {children}
    </div>
  );
};

export default Nav;
