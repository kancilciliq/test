const express = require('express');
const router = express.Router();
const Validator = require('fastest-validator');
const v = new Validator();
const {items} = require('../models');

//GET
router.get('/',async (req,res,next) => {
    const item = await items.findAll()
    return res.json({
        status: 200,
        message: "succses get all data",
        data: item
    });
});

//GET DATA BY ID
router.get('/:id', async (req,res)=>{
    const id = req.params.id
    let item = await items.findByPk(id)
    if (!item) {
        return res.status(404).json({message: "data not found"})
    }else{
        return res.json({
            status:200,
            message: "succses get data by id",
            data: item
        })
    }

});

//POST
router.post('/',async (req,res,next) => {
    //validation
    const schema = {
        name: "string",
        price:"string"
    }
    const validate = v.validate(req.body, schema)
    if(validate.length){
       return res.status(400).json(validate)
    }
    //proses create
    const newItem = await items.create(req.body);
    res.json({
        status: 200,
        message: 'succses',
        data: newItem,
    });
});

//PUT
router.put('/:id', async (req,res)=>{
    const id = req.params.id
    let item = await items.findByPk(id)
    if (!item) {
        return res.status(404).json({message: "data not found"})
    }
    //validation
    const schema = {
        name: "string",
        price:"string"
    }
    const validate = v.validate(req.body, schema)
    if (validate.length) {
        return res.status(400).json(validate)
    }
    //proses update
    item = await item.update(req.body);
    res.json({
        status: 200,
        message: 'succses update data',
        data: item,
    });
});

//DELETE
router.delete('/:id', async (req,res)=>{
    const id = req.params.id
    let item = await items.findByPk(id)
    if (!item) {
        return res.status(404).json({message: "data not found"})
    }

    //proses delete
    await item.destroy();
    res.json({
        status: 200,
        message: 'succses delete data',
        data: item,
    });

});


module.exports = router;