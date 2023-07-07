const knex = require('knex')(require('../knexfile'));


const rowList = (req,res) =>{
    knex('row_list')
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(500).json({message: `Unable to retrive rows: ${err}`})
    })
}

module.exports ={
    rowList
}