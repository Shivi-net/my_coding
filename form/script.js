document.querySelector("button").addEventListener("click", getData)

function getData(){
    let userName = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    document.getElementById("nameDisplay").innerText=userName;
    document.getElementById("emailDisplay").innerText=email;
}