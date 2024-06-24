const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    issueId: {
        type: Schema.Types.ObjectId,
        ref: "Issue"
    }
})


module.exports = mongoose.model('Comment', commentSchema)