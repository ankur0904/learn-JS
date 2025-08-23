// {
//     var a = 10;
//     let b = 12;
//     const c = 34;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b); // not valid
// console.log(c); // not valid

// Shadowing 
var a = 100;
let b = 200;
const c = 300;
{
    var a = 10;        // this is *shadowing*, reference of 'a' is same ie, global scope
    let b = 12;        // this is *shadowing*, reference of 'b' is *not* same ie, local scope & Script scope(where let & const are hoisted)
    const c = 34;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b); 
console.log(c);
// var - Global scope
// let, const - Script scope
// Block scope
// function also blocked scoped
