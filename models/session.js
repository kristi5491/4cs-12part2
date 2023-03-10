const { Schema, model } = require('mongoose');

const schema = new Schema({
_id: {type: Types.ObjectId},
user_id: {type:String},
jwt: {type:String}
});

const Sesssion = new model('session', schema);

module.exports = { Sesssion };