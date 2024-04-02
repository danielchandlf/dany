import clsx from 'clsx';
import React, { ReactElement } from 'react';

import styles from './navLogo.module.scss';

interface BaseNavLogoProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  logo?: any;
  alt?: string;
  title?: string;
}

export type NavLogoProps = BaseNavLogoProps;

const NavLogo = (props: NavLogoProps): ReactElement => {
  const { className, logo, href = '/', title, alt = 'Logo', ...rest } = props;

  return (
    <div className={clsx(styles['navbar__logo'], className)} {...rest}>
      <a href={href} title={title}>
        <img src={logo} alt={alt} />
      </a>
    </div>
  );
};

export default NavLogo;
