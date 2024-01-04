const controller = {};

controller.getProducts = (req, res) => {
    const input = req.body;
    console.log('input', input);
    res.send("Message Received");
}

module.exports = controller;