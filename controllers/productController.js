const controller = {};
const db = require('../config/dbConfig');

controller.getProducts = (req, res) => {
    const input = req.body;
    console.log('input', input);
    // res.send("Message Received");
    db.query('SELECT * from users', (error,results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
    
}

module.exports = controller;