import express from 'express'
import Url from '../models/url.js'
import generateRandomUrl from '../utils/generateRandomUrl.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const url = new Url({
        url: req.body.url,
        shortUrl: generateRandomUrl(6)
    })

    try {
        await url.save()
        res.status(201).send(url)
    } catch (error) {
        res.status(400).send()
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const { url } = await Url.findOne({ shortUrl: id })
        res.redirect(url)
    } catch (error) {
        res.status(404).send("Invalid link")
    }
})

export default router