import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import { ReactElement } from 'react';

import styles from './button.module.scss';

export type ButtonType = 'primary';

interface BaseButtonProps {
  children?: ReactNode;
  type?: ButtonType;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export type ButtonProps = BaseButtonProps;

const Button = (props: ButtonProps): ReactElement => {
  const { children, type, onClick, ...rest } = props;

  return (
    <button
      className={clsx(styles['btn'], { [styles[`btn--${type}`]]: type })}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
