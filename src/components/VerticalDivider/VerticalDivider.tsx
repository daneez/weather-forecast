import React from 'react';
import { IVerficalDivider } from '../interfaces/verticalDivider.interface';

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