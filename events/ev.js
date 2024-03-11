const {EventEmitter} = require('events')

const myEventEmitter = new EventEmitter()

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

//fungsi kedua
const makebill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat `)
}

//satu fungsi khusus untuk menangani event
const onCoffeeOrderedListener = ({name, price}) => {
    makeCoffee(name)
    makebill(price)
}


// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on('coffee-order', makeCoffee);
//
// myEventEmitter.on('makebill' , makebill)
//
// // Memicu event 'coffee-order' terjadi.
// myEventEmitter.emit('coffee-order', {name: 'Tubruk'});
//
// myEventEmitter.emit('makebill' , {price : 2.1})

myEventEmitter.on('menus', onCoffeeOrderedListener)

myEventEmitter.emit('menus', {name: 'Tubruk', price: 2.1})