function onAddition(){
    var mynum1=document.getElementById("num1");
    var mynum2=document.getElementById("num2");
    var res=document.getElementById("result");

    var mydiv1=document.getElementById("div1");

    var temp1=mynum1.value;
    var temp2=mynum2.value;
  
  //  var resTemp=temp1+temp2;
    var resTemp=parseInt(temp1)+parseInt(temp2);
    res.value=resTemp;

    // mydiv1.value=resTemp
    var showtext="<strong>"+"Result is :: "+resTemp+"</strong>"
    // mydiv1.innerText=showtext;

    // mydiv1.innerHTML=resTemp;

    mydiv1.innerHTML=showtext;
    
    if(resTemp<=5){
       mydiv1.style.background='red';
    }else{
        mydiv1.style.background='green';
    }

    mydiv1.style.color='white';

}



function changeEvent(){
    console.log("Change Event Occur...")
    var temp=document.getElementById("mychange");
    temp.style.background='green';
    temp.style.color='white'
}