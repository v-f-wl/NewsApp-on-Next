import styles from './Profile.module.scss'
import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
    return ( 
        <Link href='/person'>
            <div className={styles.Profile}>
                <Image src="/ava.jpg" 
                width={30} 
                height={30}
                className={styles.ProfileImg}
                alt="Photo" />
                <span className={styles.ProfileName}>Tristan Preston</span>
                <span className={styles.ProfileMore}>
                    <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 14C2.53043 14 3.03914 14.2107 3.41421 14.5858C3.78929 14.9609 4 15.4696 4 16C4 16.5304 3.78929 17.0391 3.41421 17.4142C3.03914 17.7893 2.53043 18 2 18C1.46957 18 0.96086 17.7893 0.585787 17.4142C0.210714 17.0391 0 16.5304 0 16C0 15.4696 0.210714 14.9609 0.585787 14.5858C0.96086 14.2107 1.46957 14 2 14ZM2 7C2.53043 7 3.03914 7.21071 3.41421 7.58579C3.78929 7.96086 4 8.46957 4 9C4 9.53043 3.78929 10.0391 3.41421 10.4142C3.03914 10.7893 2.53043 11 2 11C1.46957 11 0.96086 10.7893 0.585787 10.4142C0.210714 10.0391 0 9.53043 0 9C0 8.46957 0.210714 7.96086 0.585787 7.58579C0.96086 7.21071 1.46957 7 2 7ZM2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.96086 3.78929 0.585787 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.960859 0.585787 0.585786C0.96086 0.210714 1.46957 0 2 0Z" fill="#ED774E"/>
                    </svg>
                </span>
            </div>
        </Link>
    );
}
export default Profile;
