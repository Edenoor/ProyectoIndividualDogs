import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from './SearchBar.module.css'


const SearchBar = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    

const handleOnClick = () => {
    setName('');
    history.push(`/main?name=${name}`)
}

    return(
        <div className={styles.buscarcaja} > 
           <input className={styles.buscartxt} onChange={({target: {value}}) => setName(value)} value={name} type="text" placeholder="Search..." />
           <button className={styles.buscarbtn} type='submit' onClick={handleOnClick}><i class="fas fa-search"></i></button>
        </div>
    );
};
export default SearchBar;