import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from 'react-responsive-carousel';
import {dogComponent}

 Carousel = () => {
     
    const {dog} = useSelector(state => state)
    return(
        <div>
            {dog.img}
        </div>
    )
}

export default Carousel