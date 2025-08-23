// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);       
//     }
//     return y;
// }

// var z = x();
// console.log(z);

// z();

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);       
//     }
//     a = 100;
//     return y;
// }

// var z = x(); // z contain 'a' reference when it returned
// console.log(z);

// z();

function z() {
    var b = 3000;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();