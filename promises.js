// cart = ["white shoes", "poloride glasses", "analogue watch", "Samsung mobile"];

// // Callback methods
// createOrder(cart, function(orderId){
//     proceedtoPayment(orderId)
// })

// // Promises methods
// const promise = createOrder(cart);

// promise.then(                                   // .then is availbale on Promise objects
//     function(orderId){
//         proceedtoPayment(orderId)
//     }
// )


const GITHUB_API = 'https://api.github.com/users/ankur0904';

const user = fetch(GITHUB_API);

// console.log(user);

user.then(function (data) {
    console.log(data);
})

// Promise chaining avoid callback hell
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentId) {
        showOrderSummary(paymentId, function () {
            updateWalletBalance()
        })
    })
})


const promise = createOrder(cart)
promise.then()
// equivalent to
createOrder(cart)
.then()

createOrder(cart)
.then(function(orderId){
    proceedToPayment(orderId)
})
.then(function(paymentId){
    showOrderSummary(paymentId)
})
.then(function(){
    updateWalletBalance()
})

// It is piping the data so we need to return so that the data will flow to the downword promises
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentId){
    return showOrderSummary(paymentId)
})
.then(function(){
    return updateWalletBalance()
})