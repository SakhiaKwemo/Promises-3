const fs = require('fs')

/* CALLBACKS */
fs.readFile('./Hello.txt', (err, res) => {
    console.log(String(res))
})


/* PROMISES */
const fsPromise = fs.promises

fsPromise.readFile('./Hello.txt')
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})