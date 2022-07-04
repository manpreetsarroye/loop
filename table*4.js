let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
for (let i=1;i<=10;i++) {
       multi=num*i;
       console.log(num + " *" + i + "=" + multi)
   }

//    meraki6
   for (let i=1;i<=100;i++){
    if (i%7==0){
        console.log(i)
    }
}