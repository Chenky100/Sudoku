
function forgotPass() {
    document.getElementById('userName').value = "abcd";
    document.getElementById('password').value = "1234";
}

function login() {
    if(document.getElementById('userName').value == "abcd" && document.getElementById('password').value == "1234"){
        window.location.replace('index.html');
    }else{
        alert("Username or password are incorrect.")
    }
    
}