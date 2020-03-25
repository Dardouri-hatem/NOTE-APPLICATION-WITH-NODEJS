const fs = require ('fs');
const notes =[{title:"react",body:"learn-react"}, {title:"medium", body:"read-medium"}]

const List = ()=>{
    let lists = fs.readFileSync("note.json").toString();
    // console.log(lists)
    let notes = JSON.parse(lists);
    // console.log(notes)
    console.log("--- Printing", notes.length, "Note (s) ---\n");
    notes.forEach(note => {
              console.log(" title:", note.title, "\n body:", note.body,"\n");
    });
}
const Read=(title)=>{
if(title){
    let notes = JSON.parse(fs.readFileSync("note.json"));
    let read = notes.filter(note=>  note.title===title &&
               console.log("--- Note Found ---\n","title:",note.title,'\n', "body:", note.body));
        }else help();
}

const Remove =(title)=>{
    if(title){
    let notes = JSON.parse(fs.readFileSync("note.json"));
    let notesFiltrer = notes.filter(note=>note.title!==title);
    fs.writeFileSync("note.json", JSON.stringify(notesFiltrer));
    console.log("Note was Removed")
    }else help();

}
const Add = (title , body)=>{
    if(title&&body){
    let note={title, body }
    let notes = [...JSON.parse(fs.readFileSync("note.json")),note];
    fs.writeFileSync("note.json",JSON.stringify(notes));
    console.log("Note was Created")
    }else help();
}

const help = ()=>{
    console.log('\n\n---------FOR ADDING NEW LIST :\n'+
    'node app.js add  newtiltle newbody\n\n\n'+ 

    '---------FOR LIST ALL NOTE\n'+
    'node app.js list\n\n\n'+

    '---------FOR ROMOVE A NOTE\n'+
    'node app.js remove title\n\n\n'+

    '---------FOR READ A SPECIFIC NOTE\n'+
    'node app.js read title\n'
    )
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
