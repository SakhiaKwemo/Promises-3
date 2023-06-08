const {funcTime} = require('./promise-setTimeout')

const P1 = funcTime(true, 4, "Round1")
const P2 = funcTime(false, 3, "Round2")
const P3 = funcTime(false, 1, "Round3")

Promise.race([P1, P2, P3])
.then(ans => console.log(ans))
.catch(err => console.log(err))

// ans --> first .then to finish out of P1, P2, P3
// err --> any .catch happening in either P1, P2, P3