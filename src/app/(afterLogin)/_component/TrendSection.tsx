'use client';

import React from 'react';
import Trend from './Trend';
import { usePathname } from 'next/navigation';
import styles from './trendSection.module.css';

const TrendSection = () => {
    const pathName = usePathname();
    if (pathName === '/explore') return null;
    return (
        <div className={styles.trendBg}>
            <div>
                <h3 className={styles.trend}>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </div>
    );
};

export default TrendSection;
