const express = require('express');
const userRoute = express.Router();
const logger = require('../utils/logger');
userRoute.post('/register',(request, response)=>{
    const json = request.body;
    logger.debug("register body",request.body);
    const usercrud = require('../db/helpers/usercrud');
    usercrud.add(json,response);
})
userRoute.post('/login',(request, response)=>{
    const json = request.body;
    logger.debug("login body",request.body);
    const usercrud = require('../db/helpers/usercrud');
    usercrud.search(json, response);

})

module.exports = userRoute;