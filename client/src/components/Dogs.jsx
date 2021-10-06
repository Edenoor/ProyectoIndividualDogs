import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useLocation } from "react-router-dom";
import { getAllDogs, unmountAllDogs } from "../redux/actions";
// import styles from './Home.module.css'
import DogCard from './DogCard'
import Pagination from "./Pagination";
import styles from './Dog.module.css'

import { Carousel } from 'react-responsive-carousel';




const Dogs = () => {
    const query = new URLSearchParams(useLocation().search.slice(1));
    const dispatch = useDispatch()
    const { dogs } = useSelector(state => state)
    const name = query.get('name')
    const from = parseInt(query.get('from')) || 0

    useEffect(() => {
        name ? dispatch(getAllDogs(name)) : dispatch(getAllDogs())
        return () => {
            dispatch(unmountAllDogs())
        }
    }, [dispatch, name])

    const dogComponent = () => (
        <div className={styles.cnt}>
            {
            dogs && (
                <div className={styles.cont}>
                    <h4 className={styles.pag}><Pagination dogs={dogs}/></h4>
                    <div className={styles.one}>
           
                            {
                            dogs.slice(from, from + 8).map(dog => <DogCard key={dog.id} dog={dog}/>)
                            }

                    </div>
                    <h4><Pagination dogs={dogs}/></h4>
                </div>
            )
            
             }
        </div>

    )
    return dogs.length ? dogComponent() : <div>Cargando...</div>
};
export default Dogs;