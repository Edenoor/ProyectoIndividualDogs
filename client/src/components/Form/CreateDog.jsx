import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { createDog } from '../../redux/actions'
import Styles from './CreateDog.module.css'

export const CreateDog =  ({ dog }) => {
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)

    const [values, setValues] = useState({
        name: null,
        weight: null,
        height: null,
        life_span: null,
        image: null,
        temperaments: []
    })

     const [input, setInput] = useState({
         temperament: []
     }) 

    const handleOnChange = ({target : {name, value}}) => setValues({
        ...values,
        [name]: value
    })

    function handleSelect(e) {
        setValues({
          ...values,
          temperaments: [...values.temperaments, e.target.value],
        });
        console.log(e.target.value)
      }
    
    const handleOnSubmit = e => {
        e.preventDefault()
        console.log('Values:', values)
        dispatch(createDog(values));
        setValues({
            name: null,
            weight: null,
            height: null,
            life_span: null,
            image: null,
            temperaments: []
        });
        alert('Dog created successfully')
    };


    return(
        <form className={Styles.cnt} onSubmit={handleOnSubmit}>
            <div className={Styles.card}>

            <label >Name</label>
            <input name='name' onChange={handleOnChange} type="text" value={values.name} placeholder="Waiting Dog Name" required/>
            <label htmlFor="">Weight</label>
            <input name='weight' onChange={handleOnChange} type="text" value={values.weight} placeholder="1 - 10" required/>
            <label htmlFor="">Height</label>
            <input name='height' onChange={handleOnChange} type="text" value={values.height} placeholder="20 - 30"required/>
            <label htmlFor="">Life_Span</label>
            <input name='life_span' onChange={handleOnChange} type="text" value={values.life_span} placeholder="10 - 12 years" required/>
            <label htmlFor="">Image</label>
            <input name='image' onChange={handleOnChange} type="text" value={values.image} placeholder="Paste Url" required/>
            <div>

            <div>
            <select onChange={(e) => handleSelect(e)} value={input.temperament[input.temperament.length - 1]} className required>
              <option value="">Temperaments:</option>
              {temperaments.map((e) => (<option key={e.id} value={e.id}> {e.name} </option>
              ))}
            </select>
            <div>
              {[
                values.temperaments.map(
                  (i) => temperaments.find((ob) => ob.id === i)?.name + ", "
                ),
              ]}
            </div>
          </div>
                    </div>
            <button className={Styles.button} id='submit'>Crear</button>
            </div>
        </form>
    );
};

export default CreateDog;