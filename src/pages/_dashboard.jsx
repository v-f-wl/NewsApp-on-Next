import styles from '../styles/DashBoart.module.scss'
import { useState, useEffect,  } from 'react';

import Search from '@/components/UI/Search';
import Profile from '@/components/UI/Profile';
import axios, { spread } from 'axios';
import Cadr from '@/components/UI/Card';
import Tag from '@/components/UI/Tags';

const Dashboard = () => {
    const [ news, setNews] = useState([])
    const [ tags, SetTag] = useState(['dignissim', 'erat', 'viverra', 'tempus', 'taciti'])
    useEffect(() =>{
        axios.get('https://63e261b53e12b193763ea4e8.mockapi.io/group').then(res => [
            setNews(res.data)
        ])
    },[])
    return ( 
        <div className={styles.rightSide}>
          <div className={styles.rightSideTop}>
            <Search/>
            <Profile/>
          </div>
          <div className={styles.NewsBlock}>
            <div className={styles.NewsMain}>
                <h2 className={styles.NewsMainTitle}>
                    the latest news
                </h2>
                <div className={styles.NewsMainContainer}>
                    {news.map(item =>
                        <Cadr
                            key={item.id}
                            id = {item.id}
                            title = {item.title} 
                            prev = {item.prev} 
                        />
                    )}
                </div>
            </div>
            <div className={styles.NewsTag}>
                <h3 className={styles.NewsTagTitle}>
                    Popular Category
                </h3>
                <div className={styles.NewsTagBody}>
                    {
                        tags
                        .map(item => 
                            <Tag 
                            key ={Math.random()}
                            title={item}
                        />
                    )}
                </div>
            </div>
          </div>
        </div>
     );
}
 
export default Dashboard;