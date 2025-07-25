!function( arg ) {
	// arg == 'arguments'
}( 'arguments' )
/* Usage
!function( arg ) {
  function invisible() { return arg }
  console.log(invisible())
  console.log('from inside: '+ typeof invisible )
}( 'Hello World' )
console.log('from outside: '+ typeof invisible)
// result
// ------
//Hello World
//from inside: function
//from outside: undefined
*/