const name1 = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitbtn = document.getElementById("form-submit");
const database = firebase.database();

submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    database.ref('/name1/'+ name1.value).set({
        name1: name1.value,
        message: message.value,
        email: email.value
    });
    alert("Successfully submitted!");
    name1.value = "";
    message.value = "";
    email.value = "";
    
});