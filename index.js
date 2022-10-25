const express = require('express');
const cors = require('cors');

const app = express();
const part = process.env.PORT || 5000;

app.use(cors());

app.get( '/',(req, res) => {
    res.send("running");
});

app.listen(port, () =>{
    console.log(`running on port, ${port}`)
})