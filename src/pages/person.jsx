import LeftmMenu from '@/components/LeftMenu';
import ProfileCard from '@/components/UI/ProfileCard';
import Search from '@/components/UI/Search';
import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/PersonSide.module.scss'


const Person = () => {
    return ( 
        <div>
            <Head>
                <title>AirPlay - DashBoard</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={styles.container}>
                <LeftmMenu/>
                <div className={styles.personSide}>
                    <div className={styles.personSideTop}>
                        <div className={styles.PefronProfile}>
                            <Image
                                src="/ava.jpg" 
                                width={100}
                                height={100}
                            />
                            <span className={styles.PefronProfileName}>Tristan Preston</span>
                        </div>
                        <Search/>
                    </div>
                    <h2 className={styles.personSideTitle}>
                        Your Posts
                    </h2>
                    <div className={styles.personNews}>
                        <ProfileCard/>
                        <ProfileCard/>
                        <ProfileCard/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Person;