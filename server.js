require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('express').Router();
const rowListRoute = require('./routes/rowList.js')
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

app.use('/', rowListRoute);

app.get('/', (_req,res) =>{
    res.status(200).json("Welcom to Ring Constructor server!")
})

app.listen(PORT, () => {
console.log(`running at http://localhost:${PORT}`);
});

module.exports = router;