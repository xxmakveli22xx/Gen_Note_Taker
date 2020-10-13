const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
const router = require("express").Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"./public/index.html"));
  });

app.get("/notes",(req,res) => {
    res.sendFile(path.join(__dirname,"./public/notes.html"));
  });

app.get("/api/notes",(req,res) => {
   res.sendFile(path.join(_dirname,"./db/db.json"));

});

app.get("/",(req,res) => {
    //call the get note api function here
    api.getnotes().then((notes)=> res.json(notes))
    .catch((err) => res.status(500).json(err))
  
  });
  
  app.post("/api/notes",(req,res) => {
     //call the post note  function here req.body
    
     api.push(req.body);
     fs.writeFileSync("./db/db.json", JSON.stringify(notes));
     res.sendFile(path.join(__dirname,"./db/db.json"));
     console.log("trying to push notes");
    });
  
  app.delete("/notes/:id",(req,res) => {
      //call the delete note function here  
      const del = parseInt(req.params.id);
      console.log("trying to delete notes");  
      for (var i = 0; i < notes.length; i++){
      if (del === notes[i].id)
      notes.splice([i],1)
    }
    return res.json(notes)
  });
  
  
      
  
  
    