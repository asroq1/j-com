import React from 'react';
import Post from '../_component/Post';
import PostForm from './_components/PostForm';
import Tab from './_components/Tab';
import TabProvider from './_components/TabProvider';
import styles from './home.module.css';
const Home = () => {
    return (
        <main className={styles.main}>
            <TabProvider>
                <Tab />
                <PostForm />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </TabProvider>
        </main>
    );
};

export default Home;
