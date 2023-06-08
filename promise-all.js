const {funcP} = require('./promises')

const P1 = funcP(false, 4, "Round1")
const P2 = funcP(true, 3, "Round2")
const P3 = funcP(false, 5, "Round3")

Promise.all([P1, P2, P3])
.then(ans => console.log(ans))
.catch(err => console.log(err))

// ans --> [.then of P1, .then of P2, .then of P3]
// err --> any .catch happening in either P1, P2, P3