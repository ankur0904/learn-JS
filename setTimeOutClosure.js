
// function x(){
//     for(let i = 1; i <= 5; i++){  // not use 'var'
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }

//     console.log("Hello World");
// }
// x();

function x(){
    for(var i = 1; i <= 5; i++){  // if use 'var' pass the new copy of variable each time
        function close(x){
            setTimeout(function(){
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }

    console.log("Hello World");
}
x();