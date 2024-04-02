import clsx from 'clsx';
import { UiAngleDown } from 'vyaguta-icons/ui';
import React, { useState, useCallback, ReactElement } from 'react';

import styles from './avatar.module.scss';

export interface AvatarMenu {
  link: string;
  label: string;
}

interface BaseAvatarProps {
  children?: React.ReactNode;
  className?: string;
  image?: any;
  name: string;
  menus?: AvatarMenu[];
}

export type AvatarProps = BaseAvatarProps;

const Avatar = (props: AvatarProps): ReactElement => {
  const { className, image, name, menus, ...rest } = props;

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(
    () => setShowMenu((currentValue) => !currentValue),
    []
  );

  return (
    <div
      className={clsx(styles['avatar'], className)}
      {...rest}
      onClick={toggleMenu}
    >
      <div
        className={clsx(
          styles['avatar__image'],
          styles['avatar__image--round'],
          styles['avatar__image--sm']
        )}
      >
        <img src={image} alt={name} />
      </div>
      <div
        className={clsx(
          styles['avatar__content'],
          styles['avatar__content--small-spaced']
        )}
      >
        <h4
          className={clsx(
            styles['avatar__title'],
            styles['avatar__title--sm-font'],
            'font-weight--normal'
          )}
        >
          {name}
        </h4>
      </div>

      {menus?.length && (
        <>
          <UiAngleDown
            size={24}
            className={clsx(styles['avatar__drop-icon'])}
          />
          <div
            className={clsx(styles['dropmenu'], { [styles['show']]: showMenu })}
          >
            {menus?.map(({ link, label }, index) => (
              <div className={clsx(styles['dropmenu__node'])} key={index}>
                <a
                  href={link}
                  title={label}
                  className={clsx(styles['dropmenu__link'])}
                >
                  {label}
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Avatar;
