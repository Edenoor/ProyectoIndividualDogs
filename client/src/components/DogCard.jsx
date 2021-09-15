import {NavLink} from 'react-router-dom'
import { getOneDog } from "../redux/actions";
import styles from './DogCard.module.css'
import { useDispatch } from "react-redux";


const DogCard = ({ dog }) => {
    const dispatch = useDispatch()

    return(
<div className={styles.wrapper}>
    <div className={styles.card}>
            <img src={dog.image} alt={dog.name} className={styles.img}/>
        <div className={styles.info}>
            <div className={styles.info1}>
            <h1 className={styles.h1}>Temperament:</h1>
            <p  className={styles.p}> {dog.temperament }</p>
            <h1 className={styles.h1}>Weight:</h1>
            <p className={styles.p}>{dog.weight}</p>
            <NavLink onClick={() => {dispatch(getOneDog(dog.id))}}  className={styles.button} to={`/main/detail/:${dog.id}`}>{dog.name}</NavLink>
        </div>
        </div>
    </div>
</div>
    );
};
export default DogCard;