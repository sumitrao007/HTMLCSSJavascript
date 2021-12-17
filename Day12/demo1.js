
//operators
// Airthematic +,/,*,-,%
//&,|,~.!.^
// assignment =,+=,-=,
// <=,>=,==,!=, === (Strongly equality  it checks type as well as value is same )
// ternary operator => condition?expression1:expression2

// control statement
// if,if-else ,nested if else
// if(2<4){
//     console.log("Condition is true");
// }else{
//     console.log("Condition is False");
// }
var a=20;
var b="20";

// if(a===b){
//     console.log("Condition is true");
// }else{
//     console.log("Condition is False");
// }

var count=4;
// while(count!=0){
//     console.log("Count value is "+count);
//     count--;
// }

// when we use for loop?

// for(var i=0;i<4;i++){
//     console.log("value of i is "+i);
// }

// console.log("After loop value of i is "+i);
//var has global scope
// let & const

//let has block scope {}
// it is accesible within nearest block 

// for (let i = 0; i < 4; i++) {
//     console.log('Value of i is '+i);
// }
// console.log("After the loop i is "+i);

// const has global as well as block scope
// if variable is const then that value we can't change through the programatically 

const pi=3.14;
// console.log('Pi value is '+pi);
// pi=7;
// console.log('Pi value is '+pi);

const element=78; //Forward declaration & defination 

for (let j = 0; j < 5; j++) {
    const element = j;
    console.log('value of element '+element);  
}

console.log('value of element ===== '+element);  