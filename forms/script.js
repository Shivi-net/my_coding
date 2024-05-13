document.querySelector("form").addEventListener("submit", getData);

function getData(){
    event.preventDefault();
    let userName = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    document.getElementById("nameDisplay").innerText=userName;
    document.getElementById("emailDisplay").innerText=email;
}