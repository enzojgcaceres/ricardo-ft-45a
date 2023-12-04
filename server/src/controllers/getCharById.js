const axios = require("axios")

const getCharById = (req, res) => {
    const { id } = req.params
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
            const character = {
                id: response.data.id,
                name: response.data.name,
                gender: response.data.gender,
                species: response.data.species,
                origin: response.data.origin, 
                image: response.data.image,
                status: response.data.status,
                location: response.data.location
            }
            return character
        })
        .then((character) => {
            if (character) {
                return res.status(200).json(character)
            } else {
                res.status(404).send("Not Found")
            }
        })
        .catch((error) => {
            res.status(500).json({ message: error })
        })
}


module.exports = {
    getCharById
}



