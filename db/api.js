const util = require("util");
const fs = require("fs");
const { parse } = require("path");

//const uuidv1 = require("uuid/v1");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Api {

    read() {
        return readFileAsync("db/db.json", "utf8");
      }
      write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
      }
      getnotes(){
        return this.read().then((notes) => {
         let parsenotes;
         try{
             parsenotes = [].concat(JSON.parse(notes));
            
         } 
         catch(err){
            parsenotes = [];

            
         }
         return parsenotes
           
        });
     };
      addnotes(){
          this.write(note)

      }

      deletenotes(){

        return this.getnotes().then((notes) => notes.filter((note)=> note.id !== id))
         .then((filternotes)=> this.write(filternotes));
      }

}

module.exports = new Api();