const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ans = []

rl.question('What is your name: ', (name) => {
    console.log("the user typed in: " + name)
    ans.push(name)
    rl.question('Where are you from: ', (city) => {
        console.log("the user is from: " + city)
        ans.push(city)
        rl.question("What is your age: ", (age) => {
            console.log(`the user's name is ${ans[0]}, he lives in ${ans[1]} and he is ${age} years old`)
            rl.question('What is your name: ', (name) => {
                console.log("the user typed in: " + name)
                ans.push(name)
                rl.question('Where are you from: ', (city) => {
                    console.log("the user is from: " + city)
                    ans.push(city)
                    rl.question("What is your age: ", (age) => {
                        console.log(`the user's name is ${ans[0]}, he lives in ${ans[1]} and he is ${age} years old`)
                        rl.question('What is your name: ', (name) => {
                            console.log("the user typed in: " + name)
                            ans.push(name)
                            rl.question('Where are you from: ', (city) => {
                                console.log("the user is from: " + city)
                                ans.push(city)
                                rl.question("What is your age: ", (age) => {
                                    console.log(`the user's name is ${ans[0]}, he lives in ${ans[1]} and he is ${age} years old`)
                                    rl.question('What is your name: ', (name) => {
                                        console.log("the user typed in: " + name)
                                        ans.push(name)
                                        rl.question('Where are you from: ', (city) => {
                                            console.log("the user is from: " + city)
                                            ans.push(city)
                                            rl.question("What is your age: ", (age) => {
                                                console.log(`the user's name is ${ans[0]}, he lives in ${ans[1]} and he is ${age} years old`)
                                                rl.question('What is your name: ', (name) => {
                                                    console.log("the user typed in: " + name)
                                                    ans.push(name)
                                                    rl.question('Where are you from: ', (city) => {
                                                        console.log("the user is from: " + city)
                                                        ans.push(city)
                                                        rl.question("What is your age: ", (age) => {
                                                            console.log(`the user's name is ${ans[0]}, he lives in ${ans[1]} and he is ${age} years old`)
                                                            rl.close()
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})