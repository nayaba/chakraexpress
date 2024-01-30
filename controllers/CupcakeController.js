const getCupcakes = (req, res) => {
  res.send({
    message: "Getting Cupcakes"
  })
}

module.exports = {
  getCupcakes
}