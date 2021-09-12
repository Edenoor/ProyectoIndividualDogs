import React from "react";


import Dogs from '../components/Dogs'
import Filters from '../components/Filters/Filters'

const Home = () => {
    return(
        <div >
            <Filters/>
            <Dogs/>
        </div>
    );
};
export default Home;