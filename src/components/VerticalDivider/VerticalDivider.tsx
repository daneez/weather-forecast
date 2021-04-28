import React from 'react';
import { IVerficalDivider } from '../../types/props';

const VerticalDivider: React.FunctionComponent<IVerficalDivider> = ({
  color,
  width,
  className,
}) => (
  <div 
    className={className}
    style={{
      width,
      backgroundColor: color,
    }} 
  />
);

export default VerticalDivider;