var product = [];

module.exports = {
    deleteProduct: (req, res) => {
        console.log(req.params.id, "id")
        product.splice(req.params.index, 1)
        res.status(200).send(product)
    },

    inventory: (req, res) => {
        res.status(200).send(newInventory)
    },
}