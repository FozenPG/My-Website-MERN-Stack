const userService = require("../services/user.service")
const mongoose = require("mongoose")

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).json("Submit all fields to proceed!")
    }

    const user = await userService.createService(req.body)

    if (!user) {
        return res.status(400).send({Message: "Error creating user"})
    }

    res.status(201).send({
        message: "Usuario criado com sucesso!",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background
        }
    })
}

const findAll = async (req, res) => {

    const users = await userService.findAllService()

    if (users === 0) {
        return res.status(400).send({message: "ther are no users in the system"})
    }

    res.send(users)
}

const findById = async (req, res) => {
    const id = req.params.id
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({message: "invalid Id"})
    }

    const user = await userService.findByIdService(id)

    if (!user) {
        return res.status(400).send({message: "this users doesn't exists"})
    }

    res.send(user)
}
module.exports = { 
    create,
    findAll,
    findById
}