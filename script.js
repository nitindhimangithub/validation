var nameError=document.getElementById("name-error");
var phoneError=document.getElementById("phone-error");

var emailError=document.getElementById("email-error");

var messageError=document.getElementById("message-error");
var subError=document.getElementById("submit-error");

function fun(){
    var num=document.getElementById("contact-name").value;
if(num.length == 0){
    nameError.innerHTML = "Name is required";
    return false;

}
if(!num.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    
nameError.innerHTML = "Write Full Name";
return false;
}
nameError.innerHTML ='<i class="fas fa-check-circle"></i>';
return true;
}
function fun2(){
    var phone=document.getElementById("phn").value;
if(phone.length == 0){
    phoneError.innerHTML = "Phone no. is required";
    return false;

}
if(phone.length !== 10){
    phoneError.innerHTML="phone no. should be 10 digit"
    return false;
}
if(!phone.match(/^[0-9]{10}$/)){
phoneError.innerHTML = "Phone no.is required";
return false;
}
phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
return true;
}
function fun3(){
    var email=document.getElementById("ema").value;
if(email.length == 0){
    emailError.innerHTML = "Email is required";
    return false;

}
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
emailError.innerHTML = "Invalid Email";
return false;
}
emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
return true;
}

function fun4(){
    var mes=document.getElementById("messag").value;
    var required=30;
    var left=required-mes.length;
if(left> 0){
    messageError.innerHTML = left + "More character required";
    return false;

}
messageError.innerHTML ='<i class="fas fa-check-circle"></i>';
return true;
}

function fun5(){
    if(!fun() || !fun2() || !fun3() || !fun4()){
        subError.style.display="block";
        subError.innerHTML="Please fix the error to Submit";
        setTimeout(function(){subError.style.display="none";},3000);
        return false;
    }
    
}