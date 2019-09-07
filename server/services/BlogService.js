import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    title: { type: String, max: 60 },
    summary: { type: String, max: 120 },
    img: { type: String, default: 'https//placehold.it/200x200' },
    body: { type: String },
    author: { type: ObjectId, ref: 'User', required: true },
}, { timestamps: true })

export default class BlogService {
    get repository() {
        return mongoose.model('Blog', _model)
    }
}