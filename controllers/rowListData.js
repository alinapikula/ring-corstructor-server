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


const rowSelected1 = (req, res) =>{
knex ("pos1")
.where({'pos1.id' :req.params.id})
.then((result) =>{
        if (result.length === 0) {
                res.status(404)
                .json(`No item found with id ${req.params.id}`);
            }
            res.status(200).json(result[0]);
})
.catch((err) =>
            res.status(400).send(`Error: ${err}`)
        );
}

const rowSelected2 = (req, res) =>{
knex ("pos2")
.where({'pos2.id' :req.params.id})
.then((result) =>{
        if (result.length === 0) {
                res.status(404)
                .json(`No item found with id ${req.params.id}`);
            }
            res.status(200).json(result[0]);
})
.catch((err) =>
            res.status(400).send(`Error: ${err}`)
        );
}


const rowSelected3 = (req, res) =>{
knex ("pos3")
.where({'pos3.id' :req.params.id})
.then((result) =>{
    if (result.length === 0) {
                res.status(404)
            .json(`No item found with id ${req.params.id}`);
            }
            res.status(200).json(result[0]);
})
.catch((err) =>
            res.status(400).send(`Error: ${err}`)
        );
}

const rowSelected12 = (req, res) =>{
knex ("row_list")
.join('pos1', 'row_list.pos1', '=', 'pos1.img')



// .select("id", "img")
// .join('pos2', 'row_list.pos2', '=', 'pos2.img')
// .select("row_list.id","row_list.pos1","row_list.pos1")
.where({'row_list.row_id' :req.params.id} )
.then((result) =>{
    if (result.length === 0) {
                res.status(404)
            .json(`No item found with id ${req.params.id}`);
            }
            res.status(200).json(result[0]);
})
.catch((err) =>
            res.status(400).send(`Error: ${err}`)
        );
}


module.exports ={
    rowList,
    rowSelected1,
    rowSelected2,
    rowSelected3,
    rowSelected12
}