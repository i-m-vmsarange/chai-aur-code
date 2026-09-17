const accountId = 5555;
let accountName = "vmsarange";
var accPassword = 2535;
accountCity = "Pune";
let accountHolder;

/**
 * Prefer not use var because of block scope and function scope issue.
 */

console.table({ accountId, accountName, accPassword, accountCity, accountHolder });