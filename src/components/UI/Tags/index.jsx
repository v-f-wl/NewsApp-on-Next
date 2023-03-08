import styles from './Tags.module.scss'
const Tag = (props) => {
    return ( 
        <div className={styles.Tag}>
            {props.title}
        </div>
     );
}
 
export default Tag;