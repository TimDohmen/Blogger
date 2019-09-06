import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    authorId: { type: ObjectId, ref: 'User', required: true },
    img: { type: String, default: 'https//placehold.it/200x200' },
    body: { type: String }
}, { timestamps: true })

export default class BlogService {
    get repository() {
        return mongoose.model('blog', _model)
    }
}