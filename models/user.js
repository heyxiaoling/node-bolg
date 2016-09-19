var mongoose = require('mongoose');
var usersSchema = require('../schemas/users');

modules.exports = mongoose.model('user',usersSchema);