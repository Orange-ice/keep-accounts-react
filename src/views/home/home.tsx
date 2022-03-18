import React from 'react';
import styles from './home.module.scss';
import Icon from '../../components/icon';

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>
          <Icon name="caidan" className={styles.menu}/>
          <h3 className={styles.text}>豹富记账</h3>
        </div>

        {/* tabs */}
        <ul className={styles.tabs}>
          <li className={styles.selected}>本月</li>
          <li>上个月</li>
          <li>今年</li>
          <li>自定义起始时间</li>
        </ul>
      </header>

      <div className={styles.total}>
        <div className={`${styles.details} ${styles.income}`}>
          <span>收入</span>
          <span>188</span>
        </div>
        <div className={`${styles.details} ${styles.expend}`}>
          <span>支出</span>
          <span>56</span>
        </div>
        <div className={`${styles.details}`}>
          <span>净收入</span>
          <span>132</span>
        </div>
      </div>
    </div>
  );
};

export default Home;