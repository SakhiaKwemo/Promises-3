//HOF ---> Function that accepts a callback function as a parameter or returns a callback function

//callback --> Is a function that is passed as a parameter inside another function


const array = [1,2,3]

array.forEach(() => {

})

//All async functions are High Order Functions, meaning that they all have callbacks as parameter

addEventListener('click',() => {

})

setTimeout(()=> {

}, 1000)

setInterval(()=> {

}, 1000)


//Except if they return a function that is itself async 

ghostFunction --> async

const normalFunc = () => {
    return Promise()
}

//
const array2 = [1,2,3]

array2.forEach(() => {

})







const callback = () => {
    console.log("hello")
}

const syncFunc = (call) => {
    call()
}

syncFunc(callback)


