
import styles from './Post.module.scss'

const Post = () => {
    return (
        <div className={styles.postWrapper}>
            <div className={styles.postHeader}>
                <div className={styles.userInfoWrapper}>
                    <div className={styles.userInfo}>
                        <div className={styles.avatar}></div>
                        <div className={styles.info}>
                            <div>Yarovyi Dmytro</div>
                            <div>10.08.1997</div>
                        </div>
                    </div>
                </div>
                <div className={styles.menu}>
                    
                </div>
            </div>
            <div className={styles.postMain}>
                Boardme Authentication UI Animation designed by Ildiko Gaspar. Connect with them on Dribbble; the global community for designers and creative professionals.
            </div>
            <div className={styles.postFooter}>
                <div>Likes</div>
                <div>Comments</div>
                <div>Share</div>
            </div>
        </div>
    )
}

export default Post