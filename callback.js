const callback2 = (callback) => {
    return callback()
}

const testFunc = (callback) => {
    return 2 + callback(() => {

    })
}

testFunc(callback2)

// Promises are a solution to nested callbacks