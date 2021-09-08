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
        const localDogs = await Dog.findAll({
            include: [{
                model: Temperament,
                attributes: ['id', 'name'],
            },],
            attributes: ['id', 'name', 'height', 'weight', 'image', 'life_span']
        })
       return res.status(200).json([...localDogs, ...apiDogs])
    }catch(e){
        next(e)
    }
}

const getDogByName = async function (req, res) {
    const {name} = req.query
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
        const localDogs = await Dog.findAll({
            include: [{
                model: Temperament,
                attributes: ['id', 'name'],
            },],
            attributes: ['id', 'name', 'height', 'weight', 'image', 'life_span']
        })
        const allDogs = [...localDogs, ...apiDogs]
 
            const dogs = await allDogs.filter(e => e.name.includes(name))
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
    try{
    if(id) {
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
            const localDogs = await Dog.findAll({
                include: [{
                    model: Temperament,
                    attributes: ['id', 'name'],
                },],
                attributes: ['id', 'name', 'height', 'weight', 'image', 'life_span']
            })
            const allDogs = [...localDogs, ...apiDogs]
            const allDogsId = await allDogs.find((e) => e.id===parseInt(id))
            console.log(id)
           return res.status(200).json(allDogsId)
        }
    }catch(e){
       next(e)
    }
}

const getTemperaments = async function (req, res, next) {
    try{
        let apiTemperaments = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data

        apiTemperaments = apiTemperaments.map(t => t.temperament).join().split(',')
        apiTemperaments = apiTemperaments.map(e => e.trim())
        apiTemperaments = [...new Set(apiTemperaments)].sort()
        apiTemperaments.shift()
        // apiTemperaments = await apiTemperaments.map(e => ({ name: e}))
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
        console.log(allTemperaments)
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