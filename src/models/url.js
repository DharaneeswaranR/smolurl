import mongoose from "mongoose"

const urlSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(value)) {
                throw new Error('Invalid url')
            }
        }
    },
    shortUrl: {
        type: String,
        required: true,
        trim: true
    }
})

const Url = mongoose.model('Url', urlSchema)

export default Url