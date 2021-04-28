import React from 'react';
import classNames from 'classnames/bind';
import styles from './Text.module.css';
import { IBaseComponent } from '../../../../types/props';

const cx = classNames.bind(styles);

const Text: React.FunctionComponent<IBaseComponent> = ({
  children,
  className,
}) => (
  <span className={cx('text', className)}>
    {children}
  </span>
);

export default Text