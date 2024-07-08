import React from 'react';
import SearchForm from '../_component/SearchForm';
import styles from './explore.module.css';
import Trend from '../_component/Trend';
const Explore = () => {
    return (
        <main className={styles.main}>
            <div className={styles.formZone}>
                <SearchForm />
            </div>
            <div className={styles.trend}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </main>
    );
};

export default Explore;
