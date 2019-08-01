const UserModel = require('../models/user');
const appCodes = require('../../utils/appcodes');
const logger = require('../../utils/logger');
const userOperations = {


add(userObject,response){
UserModel.create(userObject,(err,doc)=>{
    if(err){
        logger.error('Error in Record Add',err)
    }
    else{
        logger.debug('document is',doc)
        response.json({doc})
    }
})
},

search(userObject,response){
UserModel.findOne(userObject,(err,doc)=>{
    console.log('userobject',userObject);
    if(err){
        logger.debug('Error in DB During Find Operation',err)
         response.status(500).json({status:'E',message:'Error in DB During Find Operation'});
    }
    else{
        if(doc){
            logger.debug('userid',doc.userid);
             response.json({doc});
             console.log(doc);
        }
        else{
            logger.error('Invalid Userid or Password ',err);
            response.status(appCodes.RESOURCE_NOT_FOUND).json({status:appCodes.FAIL,message:'Invalid Userid or Password '});
        }
    }
})
},
update(){

}
}
module.exports = userOperations;