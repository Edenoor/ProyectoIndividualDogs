import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { createDog } from '../../redux/actions'
import Styles from './CreateDog.module.css'

export const CreateDog =  ({ dog }) => {
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)

    const [values, setValues] = useState({
        name: '',
        weight: '',
        height: '',
        life_span: '',
        image: '',
        temperaments: []
    })

    const handleOnChange = ({target : {name, value}}) => setValues({
        ...values,
        [name]: value
    })

    const handleOnCharge = ({target : {temperaments, value}}) => setValues({
        ...values,
        [temperaments]: value
    })
    
    const handleOnSubmit = e => {
        e.preventDefault()
        console.log('Values:', values)
        dispatch(createDog(values));
        setValues({
            name: '',
            weight: '',
            height: '',
            life_span: '',
            image: '',
            temperaments: []
        });
        alert('Dog created successfully')
    };

    // const temperamentDispatcher =  async function () {
        
    //    let todos = await dispatch(getAllTemperaments())
    //    todos = todos.payload;
    //    return todos;
    // }
    //temperamentDispatcher()

    return(
        <form className={Styles.cnt} onSubmit={handleOnSubmit}>
            <div className={Styles.card}>

            <label >Name</label>
            <input name='name' onChange={handleOnChange} type="text" value={values.name} placeholder="Waiting Dog Name" />
            <label htmlFor="">Weight</label>
            <input name='weight' onChange={handleOnChange} type="text" value={values.weight} placeholder="1 - 10" />
            <label htmlFor="">Height</label>
            <input name='height' onChange={handleOnChange} type="text" value={values.height} placeholder="20 - 30"/>
            <label htmlFor="">Life_Span</label>
            <input name='life_span' onChange={handleOnChange} type="text" value={values.life_span} placeholder="10 - 12 years" />
            <label htmlFor="">Image</label>
            <input name='image' onChange={handleOnChange} type="text" value={values.image} placeholder="Paste Url" />
            <label for="temperaments">Temperaments</label>
            <select className   type="checkbox" name="temperaments"  id="temperaments" size="1"  onChange={handleOnChange} value={values.temperaments}>
                {
                 temperaments.map(t => (
                        <option type='checkbox' key={t.id} value={t.id}>{t.name}</option>
                        ))
                    }
            </select>
            <button className={Styles.button} id='submit'>Crear</button>
            </div>
        </form>
    );
};

export default CreateDog;