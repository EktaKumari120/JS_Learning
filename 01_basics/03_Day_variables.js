const accountId = 235345
let accountEmail = "ekta@google.com"
var accountPassword = "435325"
accountCity = "Jaipur"

accountCity = "Bengaluru"
accountEmail = "ekek@gmail.com"
accountPassword = "242344"

console.log(accountEmail,accountPassword)
// accountId = 3 //not allowed
// console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])

/*
Prefer not to use var
because of issue in bloack scope and functional scope
*/