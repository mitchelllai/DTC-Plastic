const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    ecoScore:{
        type: Number,
        required: true
    },

    bio: {
        type: String,
    }

});

module.exports = Profile = mongoose.model('profile', ProfileSchema)