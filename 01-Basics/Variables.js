const accountId = 126262;
let accountEmail = "rudra@example.com"
var accountPassword = "383838"
accountCity = "Varanasi"
let accountState;

// accountId = 2  not allowed

accountEmail = "rp@example.com"
accountPassword = "12345"
accountCity = "Lucknow"


/*
  Prefer not to use var
  because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])