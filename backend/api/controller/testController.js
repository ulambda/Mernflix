const mongoose = require('mongoose');
const Test = require('../models/testModel');

const getTs = async (request, response) => { //get all
    const tests = await Test.find({}).sort({createT: -1})
    response.status(200).json(tests)
}

const getT = async (request, response) => { //get 1
    const { id } = request.params
    const test = await Test.findOne({ id: id });
    if (!test){ return response.status(404).json({error: "could not find" })}
    response.status(200).json(test)
}

const createT = async(request, response) => { //create
    const { name, rarity, element, weapon, region, baseStates, ascensionStat } = request.body
    try{ //add document to mongodb
        const test = await T.create({ name, rarity, element, weapon, region, baseStates, ascensionStat })
        response.status(200).json(test)
    } catch(error){ response.status(400).json({trycatcherror: error.message}) }
}


const deleteT = async (request, response) => { //delete
    // const { id } = request.params
    // if(mongoose.Types.ObjectId.isValid(id)) return response.status(404).json({error: " not found"})
    // const T = await T.findOneAndDelete({_id:id})
    // if(!T) return response.status(400).json({error: " not found"})
    // response.status(200).json(T)
}


const updateT = async (request, response) => { //update
    // const { id } = request.params
    // if(mongoose.Types.ObjectId.isValid(id)) {
    //     return response.status(404).json({error: " not found"})
    // }
    // const T = await T.findOneAndUpdate({_id:id}, {
    //     ...request.body
    // })
    // if(!T) return response.status(400).json({error: "T not found"})
    // response.status(200).json(T)
}

module.exports = { createT, getTs, getT, deleteT, updateT }