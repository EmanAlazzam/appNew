confirm("WELLCOME TO BME COMPANY!");

for (var e=0; e<1;e++){
let type=prompt("Are you a seller? [Yes/No]");
console.log("Are you a seller? [Yes/No]");
console.log(type);
document.getElementById("pgh1").innerText+=type;
if (type.toLowerCase()=='yes'){
    alert('this page is for customers only!');
    
e--;}
else if(type.toLowerCase()=='no'){
      let cusType=prompt("what type of disease you search a device for?[covede19 heart-diseases Diabetes]");
    console.log("what type of disease you search a device for?[covede19 heart-diseases Diabetes]");
    console.log(cusType);
    document.getElementById("pgh2").innerText+=cusType;

    if (cusType.toLowerCase()=='covede19'){
     alert('The device you are looking for is the Ventilator');
        let devType=prompt("how many devices do you want?[1-5]");
        console.log("how many devices do you want?[1-5]");
        console.log(devType);
        let ml=devType*5000; 
        document.getElementById("pgh3").innerText+=ml;
        let feedback=prompt("are you satisfied? [yes/no]");
        console.log("are you satisfied? [yes/no]");
        console.log(feedback);
        document.getElementById("pgh4").innerText+=feedback;

    }


    if(cusType.toLowerCase()=='heart-diseases'){
    alert('There are several devices, what avaliable are pacemaker&ECG');
    let devType=prompt("how many devices do you want?[1-5]");
    console.log("how many devices do you want?[1-5]");
    console.log(devType);
    let ml=devType*1000; 
    document.getElementById("pgh3").innerText+=ml;
    let feedback=prompt("are you satisfied? [yes/no]");
    console.log("are you satisfied? [yes/no]");
    console.log(feedback);
    document.getElementById("pgh4").innerText+=feedback;

    }
    if(cusType.toLowerCase()=='diabetes'){
    alert('The device you are looking for is the Glucose Meter.');
    let devType=prompt("how many devices do you want?[1-5]");
    console.log("how many devices do you want?[1-5]");
    console.log(devType);
    let ml=devType*100; 
    document.getElementById("pgh3").innerText+=ml;
    let feedback=prompt("are you satisfied with the service? [yes/no]");
    console.log("are you satisfied with the service? [yes/no]");
    console.log(feedback);
    document.getElementById("pgh4").innerText+=feedback;

 
    }
}

else{
    alert('You ENTERED A WRONGE WORD!!');
e--;
}


}
