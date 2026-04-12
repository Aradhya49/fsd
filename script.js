document.querySelector("form").addEventListener("submit", function(e){

let name=document.querySelector("[name='name']").value;
let email=document.querySelector("[name='email']").value;
let password=document.querySelector("[name='password']").value;
let phone=document.querySelector("[name='phone']").value;
let gender=document.querySelector("[name='gender']:checked");

if(name=="" || email=="" || password=="" || phone=="" || !gender){
alert("Please fill all fields");
e.preventDefault();
}

});