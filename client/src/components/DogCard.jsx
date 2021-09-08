import React from "react";
import {Link} from 'react-router-dom'

const DogCard = ({ dog }) => {
    return(
        <div >
            <img src={dog.image} alt={dog.name} style={{width: '200px', height: '200px'}}/>
            <Link to={`/main/detail/:${dog.id}`}><h4>{dog.name}</h4></Link>
        </div>
    );
};
export default DogCard;