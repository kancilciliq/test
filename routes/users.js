const express = require('express');
const router = express.Router();
const Validator = require('fastest-validator');
const v = new Validator();
const {users} = require('../models');

router.post('/register', async(req,res) => {
  const schema = {
    username: 'string',
    email: 'string',
    password: 'string'
  }

  const validate = v.validate(req.body, schema)
  if (validate.length) {
    return res.json({
      status: 404,
      message: 'eror',
      data: validate
    })
  }

  let newUsers = await users.create(req.body)
  res.json({
    status: 200,
    message: 'register succses',
    data: newUsers,
  })
});

module.exports = router;
