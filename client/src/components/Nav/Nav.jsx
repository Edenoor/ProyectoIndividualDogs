import React from "react";
import {useHistory} from 'react-router-dom'
import SearchBar from './SearchBar';
import styles from './Nav.module.css'

const Nav = () => {
const history = useHistory();

    return(
        <div className={styles.nav} >
            <div>
            <i class="fas fa-dog"></i>
            </div>
            <div className>
            <div className={styles.search}>
                <SearchBar/>
            </div>
            <div className={styles.home}>
                <div>
            <button className={styles.btn} onClick={() => history.push('/main')}>Home</button>
                </div>
                <div>
            <button className={styles.btn} onClick={() => history.push('/main/create_dog')}>Create Dog</button>
                </div>
            </div>
        </div>
            </div>
    );
};
export default Nav;