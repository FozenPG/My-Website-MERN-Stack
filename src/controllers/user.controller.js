const create = (req, res) => {
    const {Name, UserName, Email, Password, Avatar, Background} = req.body

    if (!Name || !UserName || !Email || !Password || !Avatar || !Background) {
        res.status(400).json("Submit all fields to proceed!")
    }

    res.status(201).send({
        message: "Usuario criado com sucesso!",
        user: {
            Name,
            UserName,
            Email,
            Avatar,
            Background
        }
    })
}

module.exports = { create }