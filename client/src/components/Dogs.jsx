import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useLocation } from "react-router-dom";
import { getAllDogs, unmountAllDogs } from "../redux/actions";
// import styles from './Home.module.css'
import DogCard from './DogCard'
import Pagination from "./Pagination";


const Dogs = () => {
    const query = new URLSearchParams(useLocation().search.slice(1));
    const dispatch = useDispatch()
    const { dogs } = useSelector(state => state)
    const name = query.get('name')
    const from = parseInt(query.get('from'))

    useEffect(() => {
        name ? dispatch(getAllDogs(name)) : dispatch(getAllDogs())
        return () => {
            dispatch(unmountAllDogs())
        }
    }, [dispatch, name])

    const dogComponent = () => (
        <div >
            {
            dogs && (
                <div>
                    <Pagination dogs={dogs}/>
                    {
                        dogs.slice(from, from + 8).map(dog => <DogCard key={dog.id} dog={dog}/>)
                    }
                    <Pagination dogs={dogs}/>
                </div>
            )
            
             }
        </div>

    )
    return dogs.length ? dogComponent() : <div>Cargando...</div>
};
export default Dogs;