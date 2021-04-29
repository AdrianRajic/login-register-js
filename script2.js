let loginButton = document.getElementById('log-in');
loginButton.addEventListener('click', store);

function store() {

    var inputEmail= document.getElementById("email-address").value;
    var inputPassword= document.getElementById("password").value;
    let email = localStorage.getItem("Email");
    let password = localStorage.getItem("Password");

    if( inputEmail === email && inputPassword === password )
    {
        alert("You are logged in"); 
    }
   else
   {
       alert("Email and password doesn't match");
   }

   
    
}