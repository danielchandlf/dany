import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';

import styles from './link.module.scss';

export type Size = 'body1' | 'body2' | 'small' | 'smaller' | 'tiny';
export type IconPosition = 'left' | 'right';
export type Weight =
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'heavy';

interface BaseLinkProps {
  children?: ReactNode;
  href: string;
  size: Size;
  icon?: React.ElementType;
  iconPosition?: IconPosition;
  iconProps?: Record<string, unknown>;
  weight?: Weight;
}

export type LinkProps = BaseLinkProps;

const Link = (props: LinkProps): ReactElement => {
  const {
    children,
    size,
    icon: Icon,
    iconPosition = 'left',
    weight = 'normal',
    href,
    iconProps,
    ...rest
  } = props;

  if (!Icon) {
    return (
      <a
        href={href}
        className={clsx(styles.link, {
          [styles[`link--${size}`]]: size,
          [styles[`link--${weight}`]]: weight
        })}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={clsx(styles['link'], styles['link__icon-container'], {
        [styles[`link--${size}`]]: size,
        [styles[`link--${weight}`]]: weight
      })}
      {...rest}
    >
      {iconPosition === 'left' && (
        <div className={clsx(styles['link__icon'], styles['link__icon--left'])}>
          <Icon {...iconProps} />
        </div>
      )}

      <span className={styles['link__text']}>{children}</span>

      {iconPosition === 'right' && (
        <div className={clsx(styles['link__icon'], styles['link__icon--left'])}>
          <Icon {...iconProps} />
        </div>
      )}
    </a>
  );
};

export default Link;
