import userService from "../services/user.service.js"

const create = async (req, res) => {
    try {

        const { name, username, email, password, avatar, background } = req.body
        if (!name || !username || !email || !password || !avatar || !background) {
            res.status(400).json("Submit all fields to proceed!")
        }
        const user = await userService.createService(req.body)
        if (!user) {
            return res.status(400).send({ Message: "Error creating user" })
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
    } catch (err) {
        res.status(500).send({ message: "Server internal error" })
        console.log(err)
    }
}

const findAll = async (req, res) => {

    try {
        const users = await userService.findAllService()
        if (users === 0) {
            return res.status(400).send({ message: "ther are no users in the system" })
        }
        res.send(users)
    } catch (err) {
        res.status(500).send({ message: "Server internal error" })
        console.log(err)
    }
}

const findById = async (req, res) => {

    try {
        const user = req.user
        res.send(user)
    } catch (err) {
        res.status(500).send({ message: "Server internal error" })
        console.log(err)
    }

}

const update = async (req, res) => {

    try {
        const { name, username, email, password, avatar, background } = req.body
        if (!name && !username && !email && !password && !avatar && !background) {
            res.status(400).json("Submit at least on field for update")
        }
        const { id, user } = req
        await userService.updateService(
            id,
            name,
            username,
            email,
            avatar,
            background
        )
        res.send({ message: "User successfully update!" })
    } catch (err) {
        res.status(500).send({ message: "Server internal error" })
        console.log(err)
    }
}

export default {
    create,
    findAll,
    findById,
    update
}