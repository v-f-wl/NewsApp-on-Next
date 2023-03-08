import LeftmMenu from '@/components/LeftMenu';
import Profile from '@/components/UI/Profile';
import Search from '@/components/UI/Search';
import styles from '../styles/Favorite.module.scss'
const Favorite = () => {
    return ( 
        <div class={styles.container}>
            <LeftmMenu/>
            <div className={styles.Favorite}>
                <div className={styles.FavoriteTop}>
                    <Search/>
                    <Profile/>
                </div>
                <h2 className={styles.FavoriteTitle}>
                    Favorite news
                </h2>
                <div className={styles.FavoriteContainer}>
                    <div className={styles.FavoriteNope}>
                        no favorite news
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Favorite;