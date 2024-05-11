// const cart = ["shirt", "pant", "Sweater", "Book"]

// const promise = createOrder(cart)

//  promise.then(function(orderId){
//     console.log("orderId", orderId)
//     // proceedToPayment(orderId)
//  })

// function createOrder (cart){
//     pr = new Promise(function(resolve, reject){

//         if(!validation(cart)){
//             err = new Error("Cart is not Valid")
//             reject(err)
//         }
//         orderId = "OD12345";
//         resolve(orderId)

//     });
//     return pr

// }

// function validation(cart){
//     return true;
// }

// const p1 = new Promise(function(resolve, reject){
//     // setTimeout(() => resolve("1st promise"),3000);
//     setTimeout(() => reject("1st promise failed"),3000);
// })
// const p2 = new Promise(function(resolve, reject){
//     // setTimeout(() => resolve("2nd promise"),1000);
//     setTimeout(() => reject("2nd promise failed"),1000);
// })
// const p3 = new Promise(function(resolve, reject){
//     // setTimeout(() => resolve("3rd promise"),2000);
//     setTimeout(() => reject("3rd promise failed"),2000);
// })

// Promise.all
// It returns an array

// Promise.all([p1,p2,p3])
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// Promise.allSettled
//it returns an object with status and msg

// Promise.allSettled([p1,p2,p3])
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// Promise.race

// Promise.race([p1,p2,p3])
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

//Promise.any

// Promise.any([p1,p2,p3])
// .then((res) => console.log(res))
// .catch((err) => {
//     console.log(err);
//     console.log(err.errors) // to Handle aggregateError
//     } 
// )