import LeftmMenu from '@/components/LeftMenu';
import styles from '../../styles/NewsBlock.module.scss'
import ListInfo from '../api/vd2-23se'

const Post = () => {
    const createPost = () =>{
        let DomEl = [] 
        ListInfo.forEach(index => {
            if(index[0] === 'title'){
                DomEl.push(<h2 className={styles.BlockNewsTitle}>{index[1]}</h2>)
            }
            if(index[0] === 'txt'){
                DomEl.push(<p className={styles.BlockNewsTxt}>{index[1]}</p>)
            }
            if(index[0] === 'qu'){
                DomEl.push(<div className={styles.BlockNewsQu}>{index[1]}</div>)
            }
        })
        return DomEl
    }
    return ( 
        <div className={styles.container}>
            <LeftmMenu/>
            <div className={styles.BlockNews}>
                <a href="javascript:history.back()" className={styles.BlockNewsBack}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9999 11H7.82992L12.7099 6.12004C13.0999 5.73004 13.0999 5.09004 12.7099 4.70004C12.6174 4.60733 12.5075 4.53379 12.3865 4.4836C12.2656 4.43342 12.1359 4.40759 12.0049 4.40759C11.874 4.40759 11.7443 4.43342 11.6233 4.4836C11.5023 4.53379 11.3924 4.60733 11.2999 4.70004L4.70992 11.29C4.61722 11.3826 4.54367 11.4924 4.49349 11.6134C4.44331 11.7344 4.41748 11.8641 4.41748 11.995C4.41748 12.126 4.44331 12.2557 4.49349 12.3767C4.54367 12.4976 4.61722 12.6075 4.70992 12.7L11.2999 19.29C11.3925 19.3826 11.5024 19.4561 11.6234 19.5062C11.7443 19.5563 11.874 19.5821 12.0049 19.5821C12.1359 19.5821 12.2655 19.5563 12.3865 19.5062C12.5074 19.4561 12.6173 19.3826 12.7099 19.29C12.8025 19.1975 12.8759 19.0875 12.9261 18.9666C12.9762 18.8456 13.0019 18.716 13.0019 18.585C13.0019 18.4541 12.9762 18.3245 12.9261 18.2035C12.8759 18.0825 12.8025 17.9726 12.7099 17.88L7.82992 13H18.9999C19.5499 13 19.9999 12.55 19.9999 12C19.9999 11.45 19.5499 11 18.9999 11Z" fill="#ED774E"/>
                    </svg>
                </a>
                {createPost()}
            </div>
        </div>
     );
}
 
export default Post;