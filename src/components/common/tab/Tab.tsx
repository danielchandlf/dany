import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';

import styles from './tab.module.scss';

export type TabType =
  | 'primary'
  | 'secondary'
  | 'red'
  | 'yellow'
  | 'blue'
  | 'light-blue'
  | 'green'
  | 'grey'
  | 'light-grey'
  | 'orange'
  | 'purple';

export type TabProps = (NormalTabProps | RouterTabProps) & {
  navLink?: boolean;
};

interface BaseTabProps {
  children?: React.ReactNode;
  className?: string;
  exact?: boolean;
  to?: string;
  activeClassName?: string;
  title?: string;
  type?: TabType;
  isActive?: boolean;
}

export type NormalTabProps = BaseTabProps;

export type RouterTabProps = NormalTabProps & RouteComponentProps;

const NormalTab: React.FC<NormalTabProps> = (props: NormalTabProps) => {
  const {
    children,
    className,
    to = '#',
    activeClassName,
    title,
    type,
    isActive = false,
    ...rest
  } = props;

  return (
    <a
      href={to || '#'}
      title={title}
      className={clsx(styles['tab__link'], className, {
        [styles[`tab__link--${type}`]]: type,
        [styles['active']]: isActive,
        [`${activeClassName}`]: isActive
      })}
      {...rest}
    >
      {children || title}
    </a>
  );
};

const WithRouterTab: React.FC<RouterTabProps> = (props: RouterTabProps) => {
  const {
    children,
    className,
    exact = true,
    to = '#',
    activeClassName,
    title,
    type,
    isActive = false,
    ...rest
  } = props;

  return (
    <NavLink
      exact={exact}
      to={to || '#'}
      title={title}
      activeClassName={clsx(styles['active'], activeClassName)}
      className={clsx(styles['tab__link'], className, {
        [styles[`tab__link--${type}`]]: type,
        [styles['active']]: isActive
      })}
      {...rest}
    >
      {children || title}
    </NavLink>
  );
};

const RouterTab = withRouter(WithRouterTab);

const Tab = (props: TabProps): ReactElement => {
  const { navLink = true, ...rest } = props;

  return navLink ? <RouterTab {...rest} /> : <NormalTab {...rest} />;
};

export default Tab;
