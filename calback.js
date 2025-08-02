// function savetoDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   console.log(internetSpeed);
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDB(
//   "hey, i am first argument",
//   () => {
//     console.log("Hey, i am second argument, and data saved");
//     savetoDB("ohh noooo callback helll😖", ()=>{
//         console.log("I im inside callback, and your data is saved.")
//     },()=>{
//         console.log("i am also inside callback hell, so i cant save your data, due to internet speed.")
//     })
//   },
//   () => {
//     console.log(
//       "Hey i am third argument, unfortunatly, data can't be saved to the database");
//   }
// );

// function savetoDB(data){
//     return new Promise ((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10 ) + 1;
//         if(internetSpeed > 5){
//             resolve("data saved succeccfully");
//         } else{
//             reject("Data unsaved due to network error");
//         }
//     })
// }

// let h1 = document.querySelector("h1");

// function changeclr(color, delay, changeanotherclr) {
//   setTimeout(() => {
//     h1.style.color = color;
//     changeanotherclr();
//   }, delay);
// }

// changeclr("red", 1000, () => {
//   changeclr("blue", 1000, () => {
//     changeclr("yellow", 1000, () => {
//       changeclr("green", 1000, () => {});
//     });
//   });
// });

function savetoDB(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDB("Tayyab", ()=>{
    console.log("Saved")
    savetoDB("tayyab2")
}, ()=>{
    console.log("Failed")
})
