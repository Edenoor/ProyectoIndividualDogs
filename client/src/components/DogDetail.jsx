import React from "react";
import { useSelector } from "react-redux";
import styles from './DogDetail.module.css'


const DogDetail = () => {

    const {dog} = useSelector(state => state)


    return(
<div className={styles.wrapper}>
    <div className={styles.card}>
        <img src={dog.image} alt={dog.name} className={styles.img}/>
            <div className={styles.info}>
                <div className={styles.info1}>
                <h1 className={styles.h1}>Temperament:</h1>
                <p  className={styles.p}> {dog.temperament}</p>
                <h1 className={styles.h1}>Weight:</h1>
                <p className={styles.p}>{dog.weight}</p>
                <h1 className={styles.h1}>Height:</h1>
                <p className={styles.p}>{dog.height}</p>
                <h1 className={styles.h1}>Life Span:</h1>
                <p className={styles.p}>{dog.life_span}</p>
                </div>
            </div>
    </div>
</div>

    );
};

export default DogDetail;