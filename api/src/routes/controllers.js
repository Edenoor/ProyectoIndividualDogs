const Sequelize = require('sequelize')
const axios = require('axios')
require('dotenv').config();
const { conn } = require('../db')
const {API_KEY} = process.env;
const { Dog, Temperament } = require('../db');
const { v4: uuidv4, v4, version } = require('uuid');
const e = require('express');
const {Op} = require('sequelize')

const getDogs = async function (req, res, next) {
    const {name} = req.query
    try{
        // if(name) {
        //     const dogs = await Dog.findAll({
        //         where: {
        //             name: {
        //                 [Op.iLike]: `%${name}%` // % = si tiene algo en el principio o al final no lo tenga en cuenta. si name esta en cualquier lugar del string te lo trae
        //             }
        //         }
        //     })
        //     let apiDogs = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}${name}`)).data
        //    return res.status(201).json([...dogs, ...apiDogs])
        // let apiDogs = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
        // apiDogs = apiDogs.map(({id, name, height, weight, temperament, image, life_span}) => ({
        //     id,
        //     name,
        //     height: height.metric,
        //     weight: weight.metric, 
        //     temperament, 
        //     image: image.url,
        //     life_span
        // }))
        // const localDogs = await Dog.findAll({
        //     include: [{
        //         model: Temperament,
        //         attributes: ['id', 'name'],
        //     },],
        //     attributes: ['id', 'name', 'height', 'weight', 'image', 'life_span']
        // })
        // const allDogs = [...localDogs, ...apiDogs]
 
        //     const dogs = allDogs.filter(e => e.name.includes(name))
        // if(dogs.length > 0) {
        //     return res.status(200).json(dogs)
        // }
        // }
        let apiDogs = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
        apiDogs = apiDogs.map(({id, name, height, weight, temperament, image, life_span}) => ({
            id,
            name,
            height: height.metric,
            weight: weight.metric, 
            temperament, 
            image: image.url,
            life_span
        }))
        let localDogs = await Dog.findAll({
            include: [{
                model: Temperament,
                attributes: ['name'],
            },],
            attributes: ['id', 'name', 'height', 'weight', 'image', 'life_span']
        })
        localDogs = await  localDogs.map(({id, name, height, weight, temperaments, image, life_span}) => ({
            id,
            name,
            height,
            weight,
            temperament: temperaments.map(e => e.name).join(', '),
            image,
            life_span
        }))
     
       return res.status(200).json([...localDogs, ...apiDogs])
    }catch(e){
        next(e)
    }
}

const getDogByName = async function (req, res, next) {
    const {name} = req.query
    const {temperaments} = req.query
    try{
        let apiDogs = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
      
        apiDogs = apiDogs.map(({id, name, height, weight, temperament, image, life_span}) => ({
            id,
            name,
            height: height.metric,
            weight: weight.metric, 
            temperament, 
            image: image.url,
            life_span
        }))
        let localDogs = await Dog.findAll({
            include: [{
                model: Temperament,
                attributes: ['name'],
            },],
            attributes: ['id', 'name', 'height', 'weight', 'image', 'life_span']
        })
        localDogs = await  localDogs.map(({id, name, height, weight, temperaments, image, life_span}) => ({
            id,
            name,
            height,
            weight,
            temperament: temperaments.map(e => e.name).join(', '),
            image,
            life_span
        }))
        const allDogs = [...localDogs, ...apiDogs]
        let dogs = allDogs
        if(name && temperaments) {
          
            dogs = await dogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()) && e.temperament.toLowerCase().includes(temperaments.toLowerCase()))
            if(dogs.length > 0) {
                return res.status(200).json(dogs)
            }
        }
            if(name) {
                
                dogs = await dogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            }
                if(temperaments) {
                  
                    dogs = await dogs.filter(e => e.temperament.toLowerCase().includes(temperaments.toLowerCase()))   
            }
        if(dogs.length > 0) {
            return res.status(200).json(dogs)
        }
        res.status(400).json({mesagge: 'Not Found'})
    }catch(e){
        next({message: 'Not Found', error: e})
    }
    
}

const createDog = async function (req, res, next) {
    const {name, height, weight, image, life_span, temperaments} = req.body

    try{
        const newDog = await Dog.create({
            id: v4(),
            name,
            height,
            weight,
            image,
            life_span
        });
        await newDog.setTemperaments(temperaments)
       
        
        return res.status(201).json(newDog)
    }catch(e){
        next(e)
    }
}

const getDogById = async function (req, res, next) {
    const {id} = req.params
    const validateId = id.includes('-')
    if(validateId) {
        try{
            let localDogs = await Dog.findAll({
                include: [{
                    model: Temperament,
                    attributes: ['name'],
                },],
                attributes: ['id', 'name', 'height', 'weight', 'image', 'life_span']
            })
            localDogs = await  localDogs.map(({id, name, height, weight, temperaments, image, life_span}) => ({
                id,
                name,
                height,
                weight,
                temperament: temperaments.map(e => e.name).join(', '),
                image,
                life_span
            }))
            let DogDb = await localDogs.find(e => e.id === id)
            res.json(DogDb)
        }catch(e){
            next(e)
         }
     } else {

         try{
             let apiDogs = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
            apiDogs = apiDogs.map(({id, name, height, weight, temperament, image, life_span}) => ({
                id,
                name,
                height: height.metric,
                weight: weight.metric, 
                temperament, 
                image: image.url,
                life_span
            }))
            apiDogs = await apiDogs.find((e) => e.id===parseInt(id))

            res.json(apiDogs)
         } catch(e){
            next(e)
         }
     }

        //     let apiDogs = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
        //     apiDogs = apiDogs.map(({id, name, height, weight, temperament, image, life_span}) => ({
        //         id,
        //         name,
        //         height: height.metric,
        //         weight: weight.metric, 
        //         temperament, 
        //         image: image.url,
        //         life_span
        //     }))
        //     const localDogs = await Dog.findAll({
        //         include: [{
        //             model: Temperament,
        //             attributes: ['id', 'name'],
        //         },],
        //         attributes: ['id', 'name', 'height', 'weight', 'image', 'life_span']
        //     })
        //     const allDogs = [...localDogs, ...apiDogs]
        //     const allDogsId = await allDogs.find((e) => e.id===parseInt(id))
        //   
        //    return res.status(200).json(allDogsId)

}

const getTemperaments = async function (req, res, next) {
    try{
        let apiTemperaments = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
        
        apiTemperaments = await apiTemperaments.map(t => t.temperament).join().split(',')
        apiTemperaments = await apiTemperaments.map(e => e.trim())
        apiTemperaments = await [...new Set(apiTemperaments)].sort()
        apiTemperaments.shift()

        let temperamentos = await apiTemperaments.forEach(e => {
            Temperament.findOrCreate({
            where: {

                id: v4(),
                name: e
            
            }
            })})
        temperamentos1 = await Temperament.findAll()
        res.status(200).json(temperamentos1)
    }catch(e) {
        next(e)
    }
}

const getDbTemperaments = async function (req, res, next) {
    try{

        let allTemperaments = await Temperament.findAll()
        allTemperaments = await allTemperaments.map(({id, name}) => ({id, name}))
        res.status(200).json(allTemperaments)
      
        return allTemperaments
    }catch(e) {
        next(e)
    }
}

module.exports = {
    getDogs,
    createDog,
    getDogByName,
    getTemperaments,
    getDogById,
    getDbTemperaments
}