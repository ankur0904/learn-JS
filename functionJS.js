var x = 1;
a();
b();
console.log(x)

function a() {
	var x = 10;
	console.log(x);
}

function b(){
	var x = 100;
	console.log(x);
}

// global execution context
// local execution context
// everything(execution contexts) is stored in *call stack*