//Array

let a=[2,3,4,5];


// for(let i=0;i<a.length;i++){
//     console.log("Array value is "+a[i]);
// }

// console.log("Array is "+a);
// console.log("Array is "+a.join(' # '));

let a2=[2.5,'Sumit',true,9];

let a1=[];

//u can add data dynamically in two ways
// 1 push & pop Method
//2 Using splice Method

// 1 push & pop Method LIFO=>Last in First Out
a1.push(4);
console.log(a1);
a1.push(22);
console.log(a1);
a1.push(11,45);
console.log(a1);
let temp1=a1.pop()
console.log(a1);
console.log("Poped value is "+temp1);
