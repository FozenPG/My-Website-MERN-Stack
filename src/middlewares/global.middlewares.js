import mongoose from "mongoose"
import userService from "../services/user.service.js"

export const validId = (req, res, next) => {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "invalid Id" })
        }
        next()
    } catch (err) {
        res.status(500).send({ message: "Server internal error" })
        console.log(err)
    }
}

export const validUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await userService.findByIdService(id)
        if (!user) {
            return res.status(400).send({ message: "this users doesn't exists" })
        }
        req.id = id
        req.user = user
        next()
    } catch (err) {
        res.status(500).send({ message: "Server internal error" })
        console.log(err)
    }
}