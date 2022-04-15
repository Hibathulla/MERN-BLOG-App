const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: false
    },
    cat: {
        type: String,
        required: false
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'newComment'
        }
    ]
}, {timestamps: true})

module.exports = mongoose.model("Post", PostSchema);