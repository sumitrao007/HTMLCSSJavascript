
// 2 using splice

// var a=[22,34,56,77,88,11,45];
// console.log(a);
// a.splice(2,0,99);
// console.log(a);

// a.splice(3,1);
// console.log(a)

// a.splice(2,1,100);
// console.log(a);
// a.splice(3,0,2,3,4);
// console.log(a)
// a.splice(2,3)
// console.log(a);

//slice
//it copies a section of data

let a1=[22,34,56,77,88,11,45];

// let temp=a1.slice(1,5);
// console.log("original array "+a1);
// console.log("Copied array "+temp);
// let temp2=a1.slice(1);
// console.log("Copied array "+temp2);

//map function

let a2=[2,3,4,5];

let res=a2.map((myvalue,i)=>{
    return (myvalue*myvalue)
});
console.log("Original array "+a2);
console.log("Result is "+res);


let res1=a2.map((myvalue,i)=>{
    if(i==2){
        return (myvalue*myvalue)
    }
});
console.log("Result is "+res1);