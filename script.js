let myArray = ["Jeremy","Adam","Deloris"];


 // for (i = 0; i < myArray.length; i++){
 //    myArray[i]="default";
 //    console.log( myArray[i]);
 // }

let names= ""
for (i =0; i < myArray.length; i++){
    names+= myArray[i]
   if (i<myArray.length-1){
    names+=", "
   }
}
console.log (names)








// if (myArray.length === 0){
//     console.log("array is empty")
// } else {
//     console.log("array is full")
// }


// console.log(myArray.length === 0);




//Given an array `myArray`, display the elements of `myArray` comma delimited.

console.log(myArray);