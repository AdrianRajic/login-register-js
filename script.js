let registerButton = document.getElementById('register-button');
registerButton.addEventListener('click', store);


function store() {

    var inputEmail= document.getElementById("email-address");
    var inputPassword= document.getElementById("password");
    localStorage.setItem("Email", inputEmail.value);
    localStorage.setItem("Password", inputPassword.value);

  
    alert("You are registered");
    
}



