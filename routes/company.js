const express = require('express');
const router = express.Router();
const Validator = require('fastest-validator');
const v = new Validator();
const {company} = require('../models');


router.post('/',async (req,res,next) => {
    //validation
    const schema = {
        name: "string",
        adress:"string",
        id_user: "string"
    }
    const validate = v.validate(req.body, schema)
    if(validate.length){
       return res.status(400).json(validate)
    }
    //proses create
    const companies = await company.create(req.body);
    res.json({
        status: 200,
        message: 'succses',
        data: companies,
    });
});


module.exports = router;
