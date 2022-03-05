import React from 'react';
import cs from 'classnames';
import styles from './icon.module.scss';

type IconProps = {
  name: string
} & React.SVGAttributes<SVGElement>

const Icon: React.FC<IconProps> = (props) => {
  const {name, className, ...rest} = props;
  const classnames = cs(styles.icon, className);
  return (
    <svg className={classnames} {...rest}>
      <use xlinkHref={`#icon-${name}`}/>
    </svg>
  );
};

export default Icon;