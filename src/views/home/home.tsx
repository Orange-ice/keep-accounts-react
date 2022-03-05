import React from 'react';
import Icon from '../../components/icon';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>
          <Icon name="caidan" className={styles.menu}/>
          <h3 className={styles.text}>豹富记账</h3>
        </div>
      </header>
    </div>
  );
};

export default Home;