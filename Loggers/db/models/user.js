// schema

const connection = require('../connection');
const Schema = connection.Schema;
const userSchema = new Schema({
    'userid':{type:String, required:true},
    'password':{type:Number, required:true}
 
});
const UserModel = connection.model('users',userSchema);
module.exports = UserModel;
