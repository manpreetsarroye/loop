
// for (let i=1;i<=100;i++){
//     if (i%2!=0){
//         console.log(i)
//     }
//     else{
//         console.log(-i)
//     }
// }
// Footer


let Navgurukul = ['Pune', 'Bangalore', 'Sarjapur'];

// cmpKey are the property keys
for (let cmpKey in Navgurukul) {
 console.log(cmpKey);
}
console.log("   ")
// cmpValue are the property values
for (let cmpValue of Navgurukul) {
 console.log(cmpValue)
}