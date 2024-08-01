// // const hof = (callback) => {
// //     console.log('Hof');
// //     callback();
// // }

// // const sayHi = () => {
// //     console.log ('Bye');
// // }

// // hof(sayHi);
// // hof(sayBye);

// // const hof = (callback,Message) => {
// //     console.log ('Inside HOF');
// //     callback(Message);
// // }

// // const saySomething = (text) => {
// //     console.log('The text is ${text}');
// // }
// // hof(saySomething,'test string');

// // function processPayment (onSuccessCb, onFailureCb, paymentId) {
// //     const IsSuccess = false;
// //     if (isSuccessCb) {
// //         onSuccessCb(paymentId);
// //     } else {
// //         onFailureCb(paymentId);
// //     }
// // }

// // function OnPaymentSuccess(paymentId) {
// //     console.log ('Payment ${paymentId} is successful');
// // }

// // function OnPaymentFailure(paymentId) {
// //     console.log ('Payment ${}paymentId s failed');
// // }

// // let id = '987654321';
// // processPayment(OnPaymentSuccess, OnPaymentFailure, id);


// const 

// function greet(){
//     console.log('Hi, my name is ${this.name}');
// }

// greet.call(person);
// greet.call(person2);
// greet();

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.printData = function () {

//      console.log(`${this.title} was written by ${this.author} in ${this.year}`)
//     };
// }

// const book1 = new Book ('Harry Potter','Rowling','1992');
// book1.printData();


(function ()) {
    
}