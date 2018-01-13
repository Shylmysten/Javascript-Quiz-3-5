/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// Check your balance
if ( !checkBalance ) {
  // false
  console.log( "Thank you. Have a nice day!" );

  //is account active and balance > 0
} else if ( isActive && balance > 0 ) {
  //true
  console.log( "Your balance is $" + balance.toFixed( 2 ) + "." );

  // is account not active
} else if ( isActive == false ) {
  // true
  console.log( "Your account is no longer active." );


  // is balance = 0?
} else if ( balance === 0 ) {
  console.log( "Your account is empty." );
} else {
  console.log( "Your balance is negative.\nPlease contact the bank." );
}