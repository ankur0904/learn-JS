const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Resolved Successfully')
    }, 10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Resolved Successfully')
    }, 5000)
})

async function getData() {
    return p;
}

// const data = getData();

// data
//     .then(res => console.log(res));

// Async & Await combo

function getData2(){
    // JS Engine will *NOT* wait promise to resolve
    p.then(res => console.log(res));
    console.log('JS');
}

getData2();

async function getData3() {
    // await will only be used inside async functions *ONLY*
    // JS Engine was waiting for promise to resolve
    console.log("hello JS");
    
    const res = await p;
    console.log(res);

    const res1 = await p2;
    console.log(res1);

    console.log('JS');
    
}

// getData3();