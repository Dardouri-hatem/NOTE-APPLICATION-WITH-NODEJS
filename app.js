const fs = require ('fs');
const notes =[{title:"react",body:"learn-react"}, {title:"medium", body:"read-medium"}]

const List = ()=>{
    let lists = fs.readFileSync("note.json").toString();
    // console.log(lists)
    let notes = JSON.parse(lists);
    // console.log(notes)
    console.log("--- Printing", notes.length, "Note (s) ---\n");
    notes.forEach(note => {
              console.log(" title:", note.title, "\n body:", note.body);
    });
}
const Read=(title)=>{
if(title){
    let notes = JSON.parse(fs.readFileSync("note.json"));
    let read = notes.filter(note=>  note.title===title &&
               console.log("--- Note Found ---\n","title:",note.title,'\n', "body:", note.body));
        }else{
            console.log('Options : \n',
            "title of note ")
        }
}

const Remove =(title)=>{
    let notes = JSON.parse(fs.readFileSync("note.json"));
    let notesFiltrer = notes.filter(note=>note.title!==title);
    fs.writeFileSync("note.json", JSON.stringify(notesFiltrer));
    console.log("Note was Removed")

}
const Add = (title , body)=>{
    let note={title, body }
    let notes = [...JSON.parse(fs.readFileSync("note.json")),note];
    fs.writeFileSync("note.json",JSON.stringify(notes));
    console.log("Note was Created")
}

const help = ()=>{
    console.log("\n Options : \n",
    "list : Show list of notes \n",
    "read : Read a specific note \n",
    "remove : remove note")
}


switch(process.argv[2]){
    case 'list':
        return List();
    case 'read' : 
        return Read(process.argv[3]); 
    case 'remove':
        return Remove(process.argv[3]);
    case 'add':
        return Add(process.argv[3],process.argv[4]);    
    default:
        return help();
}
