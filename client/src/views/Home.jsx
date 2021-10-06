import React from "react";


import Dogs from '../components/Dogs'
import Filters from '../components/Filters/Filters'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Home = () => {
    return(
        <div >
            <Filters/>
                 {/* <Carousel> */}
                    <Dogs/>
                {/* </Carousel> */}
        </div>
    );
};
export default Home;