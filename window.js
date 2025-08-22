// global objects attached to window object

var a = 3;
console.log(window.a);
console.log(a);  // <= automatically assumes that we are referring to global space.
console.log(this.a);  // at global level "this" points to window object