import React from "react";
import {useHistory} from 'react-router-dom'
import SearchBar from './SearchBar';

const Nav = () => {
const history = useHistory();

    return(
        <div style={{ diplay: 'flex', justifyContent: 'space-around'}} >
            <div>
                Logo
            </div>
            <button onClick={() => history.push('/main')}>Home</button>
            <button onClick={() => history.push('/main/create_dog')}>Create Dog</button>
            
            <div>
                <SearchBar/>
            </div>
        </div>
    );
};
export default Nav;