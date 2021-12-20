//3 Function without parameter & with return Type
//4 Function with parameter & with return Type

//3 Function without parameter & with return Type

function add1(){
    return (2+3);
}

let res=add1();
// console.log('Value of Addition is '+res);

//4 Function with parameter & with return Type
function add2(a,b){
    return (a+b);
}

// console.log("Value of Addition is "+(add2(5,5)))

//anonymous function

//it does not have any name
let temp1=function (){
    console.log("First type of anonymous function is called");
}

// temp1();

//Fat Arrow Function/Arrow Function
  let temp2= ()=>{
        console.log("Fat Arrow Function is Called...");
    }

// temp2();

  let temp3= (a,b)=>{
        return (a+b);
    }

let res1=temp3(4,6);
console.log("Addition is using fat arrow Function "+res1);



