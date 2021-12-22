
function onAlertDialog(){
    console.log("On Click Event Occur...");
    alert("Alert Dialog is Called...");
}


function onPromtDialog(){
    let name=prompt("Enter the Name...");
    console.log("Name is "+name);
}

function onConfirmDialog(){
   let status= confirm("Do you wamt Install that extension..");

    console.log("Status is "+status);
    if(status==true){
        alert("Thank U.....")
    }else{
        alert("Visit Again....");
    }

}