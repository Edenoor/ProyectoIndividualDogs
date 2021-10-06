import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDogsByTemperament, filterCreated, orderByName,orderByWeight, getAllTemperaments } from '../../redux/actions'
import { useLocation, useHistory } from 'react-router-dom'
import Styles from './Filters.module.css'


const Filters = () => {
    const query = new URLSearchParams(useLocation().search.slice(1));
    const name = query.get('name') || ''
    const history = useHistory()
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)


    const [values, setValues] = useState({
        temperaments: '',
    })
    
    const [order, setOrder] = useState('')

    const handleFilterTemperament = (e) => {
    dispatch(filterDogsByTemperament(e.target.value))
    }

    const handleFilterCreated = (e) => {
        dispatch(filterCreated(e.target.value))
    }
    const handleSort = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
    }

    const handleWeight = (e) => {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value))
    }
    function refreshPage() {
        window.location.reload(false);
      }
    return(
        <div className={Styles.container}>

                    <label className={Styles.text} htmlFor="">Temperament</label>
                    <select value={values.temperaments} onChange={handleFilterTemperament} name="temperaments" id="temperaments">
                        <option value="">-</option>
                        {
                   temperaments.map(t => (
                                <option key={t.id} value={t.name}>{t.name}</option>
                                ))
                            }
                    </select>
               
              
                    <label className={Styles.text} htmlFor="">Created by</label>
                    <select onChange={handleFilterCreated} name="" id="">
                        <option value="All">All Dogs</option>
                        <option value="created">Created Dogs</option>
                        <option value="api">Api Dogs</option>
                    </select>
            
                    <label className={Styles.text} htmlFor="">ABC</label>
                    <select value={order} onChange={handleSort} name="orderAlf" id="">
                        <option value="">-</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>

                    <label className={Styles.text} htmlFor="">Weight</label>
                    <select value={order} onChange={handleWeight} name="orderAlf" id="">
                        <option value="">-</option>
                        <option value="heavy">Heavy</option>
                        <option value="soft">Soft</option>
                    </select>
                    
                
           
         <button onClick={refreshPage}>Reset filters</button>
        </div>
    );
};
export default Filters