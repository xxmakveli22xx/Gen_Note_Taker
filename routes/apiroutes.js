const api = require("../db/api.js");
const router = require("express").Router();

router.get("/notes",(req,res) => {
  //call the get note api function here
  api.getnotes().then((notes)=> res.json(notes))
  .catch((err) => res.status(500).json(err))

});

router.post("/notes",(req,res) => {
   //call the post note  function here req.body
   api.push(req.body);
    console.log("trying to push notes");
  });

router.delete("/notes/:id",(req,res) => {
    //call the delete note function here  
    const del = req.params.id;
    console.log("trying to delete notes");  
    for (var i = 0; i < notes.length; i++){
    if (del === notes[i].id)
    notes.splice([i],1)
  }
  return res.json(notes)
});


    console.log("trying to delete notes");


  module.exports = router;