import React from 'react';
import styles from './Meta.module.css';
import Text from '../Text';
import { IBaseMeta } from '../../../../types/props';

const Meta: React.FunctionComponent<IBaseMeta> = ({
  title,
  value,
}) => (
  <div className={styles.meta}>
    <Text className={styles.title}>{title}</Text>
    <br />
    <Text className={styles.value}>{value}</Text>
  </div>
);

export default Meta;
