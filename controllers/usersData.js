const knex = require('knex')(require('../knexfile'));
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');


const users =((req,res)=>{
 knex("users")   
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(500).json({message: `Unable to retrive rows: ${err}`})
    })
})

/**
 * 
 * TO DO:
 * 1. POST /login to login
 * 2. GET /profile for private data
 * 3. POST /signup to register
 * 
 *  */

const login = ((req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json("please enter all fields")
    }

    knex("users")
    .where({email:email})
    .then(data=>{
        if(!data.length){
            return res.status(400).json("no such user")
        }

        if(!bcrypt.compareSync(password, data[0].password)){
            return res.status(400).json("Incorrect password")
        }

        delete data[0].password;

        console.log(data[0]);
        const token = jwt.sign({...data[0]}, 'tOpS3CretKeY?!');
        res.status(200).json(token);
    })
})



module.exports ={
users,
login,
}