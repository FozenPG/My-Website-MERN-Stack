const userService = require("../services/user.service")

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).json("Submit all fields to proceed!")
    }

    const user = await userService.create(req.body)

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

module.exports = { create }