import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllDogs, unmountAllDogs } from "../redux/actions";
// import styles from './Home.module.css'
import DogCard from './DogCard'


const Dogs = () => {
    const dispatch = useDispatch()
    const { dogs } = useSelector(state => state)

    useEffect(() => {
        dispatch(getAllDogs())
        return () => {
            dispatch(unmountAllDogs())
        }
    }, [dispatch])

    const dogComponent = () => (
        <div >
            {
            dogs &&
            dogs.map(dog => <DogCard key={dog.id} dog={dog}/>)
             }
        </div>

    )
    return dogs.length ? dogComponent() : <div>Cargando...</div>
};
export default Dogs;