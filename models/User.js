const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    password:{
        type: String
    },
    clas:{
        type: String
    },
    schoolName:{
        type: String
    },
    image:{
        type: String
    },
    logo:{
        type: String
    },
    schoolEmail:{
        type: String
    },
    address:{
        type: String
    },
    state:{
        type: String
    },
    lga:{
        type: String
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    ownerEmail:{
        type: String
    },
    number:{
        type: Number
    },
    school_id:{
        type: String
    },
    created:{
        type: Date,
        default: Date.now
    },
    type:{
        type: String
    }
})
const User = mongoose.model('User', UserSchema);
module.exports = User;
