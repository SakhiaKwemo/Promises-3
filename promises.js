//** FUNCTIONS */

//How To Create A Function
const func = () => {
    console.log("hello")
}

// How to Use A Function
// func()



//** PROMISES */

//How To Create A Promise (How to create a function that returns a promise)
const funcP = (error, number, round) => {
    return new Promise((resolve, reject) => {
        if(!error) {
            resolve(number + 2)
        }
        else {
            reject("There was an error at: " + round)
        }
    })
}


//How To Use A Promise (How to use a function that returns a promise)
// funcP(false, 2, "round1")
// .then(res  => {
//     console.log(res)
//     return funcP(false, res, "round2")
// })
// .then(res  => {
//     console.log(res)
//     return funcP(false, res, "round3")
// })
// .then(res  => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

module.exports = {funcP}
