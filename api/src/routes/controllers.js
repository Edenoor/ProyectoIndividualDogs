const Sequelize = require('sequelize')
const axios = require('axios')
require('dotenv').config();
const { conn } = require('../db')
const {API_KEY} = process.env;
const { Dog, Temperament } = require('../db');
const { v4: uuidv4, v4 } = require('uuid')

const getDogs = async function (req, res, next) {
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
        res.status(200).json([...localDogs, ...apiDogs])
    }catch(e){
        next(e)
    }
}

const createDog = async function (req, res, next) {
    const {name, height, weight, image, life_span} = req.body

    try{
        const newDog = await Dog.create({
            id: v4(),
            name,
            height,
            weight,
            image,
            life_span
        });
        return res.status(201).json(newDog)
    }catch(e){
        next(e)
    }
}

module.exports = {
    getDogs,
    createDog
}