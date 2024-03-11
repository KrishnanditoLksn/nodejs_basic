const fs = require('fs')

const fileReadCallback  = (error,data)=>{
    if (error){
        console.log("Failed read some data")
        return
    }
    console.log(data)
}

fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

//asinkronus

const datas = fs.readFileSync('./notes.txt', 'UTF-8')
console.log(datas)