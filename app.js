const express = require('express');
const port = 3000;
const app = express();
const Routers = require('./routes/routes')

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

app.use(express.urlencoded({extended: false}));


app.use("/", Routers)