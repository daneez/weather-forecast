import React from 'react';
import { IBaseComponent } from '../interfaces/base.interface';

const Temperature : React.FunctionComponent<IBaseComponent> = ({
  children,
  className,
}) => (
  <span className={className}>
    {children}
    <span>&nbsp;</span>
    <span>&#176;</span>
  </span>
);

export default Temperature
