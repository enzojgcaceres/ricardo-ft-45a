let myFavorites = [];

const postFav = (req, res) => {
    const { id, name } = req.body;

    if (id && name) {
        const newFavorite = { id, name };
        myFavorites.push(newFavorite);
        res.status(200).json(myFavorites);
    } else {
        res.status(400).json({ error: 'Invalid data. Both id and name are required.' });
    }
}

const deleteFav = (req, res) => {
    const { id } = req.params;

    const updatedFavorites = myFavorites.filter(favorite => favorite.id !== Number(id));

    if (updatedFavorites.length < myFavorites.length) {
        myFavorites = updatedFavorites;
        res.status(200).json(updatedFavorites);
    } else {
        res.status(404).json({ error: 'Favorite not found.' });
    }
}

module.exports = {
    postFav,
    deleteFav,
};
