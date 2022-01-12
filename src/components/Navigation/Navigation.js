import { NavLink } from 'react-router-dom';
import styles from  './Navigation.module.scss';

const Navigation = () => (
    <nav className='styles.nav'>
        <NavLink
        exact to = "/ " 
        className={styles.link} 
        activeClassName = {styles.active}>
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

