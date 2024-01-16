function submit(){

    let username= document.getElementById("user").value;
    let password= document.getElementById("pwd").value;
    let loggedIn= document.getElementById("LoggedIn");

    loggedIn.innerText="";

    if(username == "admin"){
        if(password == "password"){
            //alert("you are logged in");
            loggedIn.innerText="You are logged in";
            return;
        }
    }
    loggedIn.innerText = "Incorrect Username and Password";
}