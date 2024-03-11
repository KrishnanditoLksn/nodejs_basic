const {EventEmitter} = require('events')

// TODO 2

const myEventEmitter = new EventEmitter()

// TODO 3
const birthdayEventListener = (name)=>{
    console.log(`Selamat ulang tahun  ${name}`)
}


// TODO 4

myEventEmitter.on('hbd' , birthdayEventListener)
myEventEmitter.emit('hbd' , 'Dito')