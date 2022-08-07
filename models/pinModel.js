const mongoose = require('mongoose')

const pinSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please Enter Title'],

    },
    about: {
        type: String,
        required: [true, 'Please Enter About'],

    },
    destination: {
        type: String,



    },
    category: {
        type: String,
        required: [true, 'Please Enter Category'],
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    saves: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },

        }
    ],
    comment: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
        }
    ],

    postedBy: {

        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },


    },

    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Pin', pinSchema)