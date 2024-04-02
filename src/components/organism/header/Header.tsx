import clsx from 'clsx';
import React, { ReactElement } from 'react';

import styles from './header.module.scss';
import { Avatar } from '../../common/avatar';
import { Nav, NavLink, NavLogo } from '../../common';
import type { AvatarMenu } from '../../common/avatar';

import logo from '../../../assets/images/logo_leapfrog.svg';

export interface User {
  name: string;
  image: string;
}

export type ElementPosition = 'left' | 'right';

export interface HeaderNav {
  isDisabled?: boolean;
  isActive?: boolean;
  link?: string;
  label: string;
  user: User;
}

interface BaseHeaderProps {
  className?: string;
  headerNavs: HeaderNav[];
  user: User;
  avatarMenus: AvatarMenu[];
  element: React.ElementType;
  elementPosition: ElementPosition;
  children: React.ReactElement;
}

export type HeaderProps = BaseHeaderProps;

const getChildren = (children: Array<React.ReactElement>, type: React.FC) => {
  const element = children.find((child) => child && child.type === type);

  return element ? element.props.children : null;
};

interface Header {
  Left: React.FC<any>;
  Right: React.FC<any>;
}

const Header: Header & React.FC<HeaderProps> = (
  props: HeaderProps
): ReactElement => {
  const { className, user, headerNavs, avatarMenus, ...rest } = props;

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  return (
    <nav
      className={clsx(
        styles['navbar'],
        styles['navbar--bordered-bottom'],
        className
      )}
      {...rest}
    >
      <div className={clsx('container')}>
        <div
          className={clsx(
            styles['navbar__wrap'],
            styles['navbar__wrap--content-spread']
          )}
        >
          <div className={clsx(styles['navbar__left'])}>
            <NavLogo logo={logo} />

            <Nav>
              {headerNavs?.map(
                (
                  { isActive = false, isDisabled = false, link = '#', label },
                  index
                ) => (
                  <NavLink
                    isDisabled={isDisabled}
                    isActive={isActive}
                    href={link}
                    key={index}
                  >
                    {label}
                  </NavLink>
                )
              )}
            </Nav>

            {getChildren(children, Header.Left)}
          </div>

          <div className={clsx('flex', styles['navbar__right'])}>
            {getChildren(children, Header.Right)}

            <Avatar name={user.name} image={user.image} menus={avatarMenus} />
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.Left = (props: any) => props.children;

Header.Right = (props: any) => props.children;

export default Header;
