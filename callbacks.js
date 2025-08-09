console.log('JS');


setTimeout(function () {
    console.log('JS2');
}, 5000)


console.log('JS3');

// E commerce example

const cart = ["white shoes", "poloride glasses", "analogue watch", "Samsung mobile"];

api.CreateOrder();
api.ProceedToPayment();

// We nee to only proceedPayment after the creating the order

api.CreateOrder(cart, function () {             // <-- responsibility of CreateOrder API to create an order and then call the fucntion back 
    api.ProceedToPayment();
})

// Making things interesting
// show the order summary as well

api.CreateOrder(cart, function () {

    api.ProceedToPayment(function () {          // <-- responsibility of ProceedToPayment API to do payment and then call the fucntion back 

        api.showOrderSummary()

    });
})



// callback hell (or) pyramid of doom: code is growing horizontally not vertically
api.CreateOrder(cart, function () {

    api.ProceedToPayment(function () {

        api.showOrderSummary(function() {

            api.updateWalletBalance();

        })
        
    });
})

// Inversion of control
api.CreateOrder(cart, function () {    // <- we give the control of our code to "createOrder" API, now it's responsibility of "createOrder" API to call our functin back, we are blindly trusting the API

    api.ProceedToPayment();
})
