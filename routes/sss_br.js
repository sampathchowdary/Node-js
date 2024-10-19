const router = require("express").Router();
const users = require('../models/users')
const jwt = require('jsonwebtoken')

router.post('/login', async (request, response) => {
  console.log('request', request.body)
  const { username, password } = request.body;
  if(!username) {
    return response.status(401).json({ error: 'username not exists'});
  }
  if(!password) {
    return response.status(401).json({ error: 'password not exists'});
  }
  // check DB
  const user = await users.findOne({ where : {username, password}});
  if(!user) {
    return response.status(401).json({ error: 'Incorrect user details'});
  }

  // create JWT
  const token = jwt.sign(
    {
      username, timestamp: Date.now()
    },
    process.env.JWT_SECRET
  );

  // update user table
  await user.update({ token });

  response.json({ token });

})

router.post('/validate', async (request, response) => {
  console.log('request validate ', request.body)
  const { token } = request.body;
  // check DB with jwt
  try{
    const tockenVerify = jwt.verify(token, process.env.JWT_SECRET);
      // check DB for token
    const user = await users.findOne({ where : {username: tockenVerify.username }});
    if(!user || user.token !== token) {
      return response.status(401).json({ error: 'Invalid token'});
    }
    response.json({ username : tockenVerify.username });
  } catch(err) {
    response.status(401).json({ error: 'Incorrect user details'});
  }
});




module.exports = router;