import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss'
import Post from 'components/Post/Post';

const mock = [1,2,3,4,5,6,7,8,9,10,11,12,13]

const HomePage = () => {

    const renderPosts = () => {
        return mock.map((item, index) => {
            return <Post />
        })
    }
    return (
        <main className={styles.homepage}>
            <div className={styles.navigateWrapper}>
                <div className={styles.navigate}>
                    <Link to={'/'} className={styles.navItem}>Юзер дата</Link>
                    <Link to={'/'} className={styles.navItem}>Головна</Link>
                    <Link to={'/'} className={styles.navItem}>Групи</Link>
                    <Link to={'/'} className={styles.navItem}>Налаштування</Link>
                    <Link to={'/'} className={styles.navItem}>Збережені</Link>
                    
                </div>
                <button className={styles.createButton}>Create a post</button>
            </div>
            <div className={styles.content}>{renderPosts()}</div>
            <div className={styles.suggestion}>suggestion group</div>
        </main>
    )
}

export default HomePage;