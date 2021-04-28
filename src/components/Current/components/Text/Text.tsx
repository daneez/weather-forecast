import React from 'react';
import classNames from 'classnames/bind';
import styles from './Text.module.css';
import { IBaseComponent } from '../../../interfaces/base.interface';

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