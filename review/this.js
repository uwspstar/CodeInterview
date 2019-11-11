var b = {
  name: 'jay',
  say() {console.log(this)} // b.say() // b object
}

var c = {
  name: 'jay',
  say() {return function() {console.log(this)}}  // c.say()() // window object
}

var d = {
  name: 'jay',
  say() {return () => console.log(this)} // d object
}
