const funcTime = (error, delay, round) => {
    return new Promise((resolve, reject) => {
        if(!error) {
            setTimeout(() => {
                resolve("I am finished at round: " + round)
            }, delay*1000)
        }
        else {
            reject("Error")
        }
    })
}

// funcTime(false, 3)
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

module.exports = {funcTime}