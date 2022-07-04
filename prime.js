// var a=require("readline-sync")
// num=a.question("enetr any number:")

// var count=0;
// var i=0;
// while (i<=num){
//     if (num%i==0){
//         count=count+1
//     }
//     i++
// }

// if (count==2){
//     console.log(num,"prime no.")
// }
// else{
//     console.log(num,"not a prime no.")
// }

// enter name: kumar and tell us the what is the output will come
const n=require("readline-sync");
var name=n.question("enter name: ")
const store=name;
var string=""
for (let i=name.length-1;i>=0;i--) {
   string=string+name[i]
}
if (store===string) {
   console.log("its palindrome string")
}
else {
   console.log("it's not a palindrome string")
}
