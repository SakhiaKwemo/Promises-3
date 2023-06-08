const readline = require('readline-promise')
const read = readline.default

const rl = read.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ans = []

rl.questionAsync('What is your name?: ')
.then(name  => {
    ans.push(name)
    return rl.questionAsync('Where are you from: ')
})
.then(city  => {
    ans.push(city)
    return rl.questionAsync("What is your age: ")
})
.then(age  => {
    ans.push(age)
    console.log(`the user's name is ${ans[0]}, he lives in ${ans[1]} and he is ${age} years old`)
})
.catch(err => {
    console.log(err)
})
