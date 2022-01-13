import { NavLink } from 'react-router-dom';
import styles from  './Navigation.module.scss';

const Navigation = () => (
    <nav className='styles.nav'>
        <NavLink
        exact="true"
        to = "/ " 
        className={styles.link} 
        activeclassname = {styles.active}>
            Home
            </NavLink>
        <NavLink 
        to = "/movies" 
        className={styles.link}>
            Movies
            </NavLink> 
        </nav>
)
export default Navigation;

