const mongoose = require("mongoose")

const CommentsSchema = new mongoose.Schema({
    text: {
        type: String
    },
    // id: {
    //     type: String,
    //     unique: true
    // }
    
}, {timestamps: true})

module.exports = mongoose.model("newComment", CommentsSchema)