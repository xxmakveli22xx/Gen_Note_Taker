const api = require("../db/api.js");
const router = require("express").Router();

router.get("/notes",(req,res) => {
  //call the get note api function here
  api.getnotes().then((notes)=> res.json(notes))
  .catch((err) => res.status(500).json(err))

});

router.post("/notes",(req,res) => {
   //call the post note  function here req.body
   db.push(req.body);
    console.log(" very good");
  });

router.delete("/notes/:id",(req,res) => {
    //call the delete note function here req.parms.id
    res.json(Notes.find())
    console.log(" very good");
  });

  module.exports = router;