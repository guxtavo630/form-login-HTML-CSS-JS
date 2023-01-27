function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-messagem");

    if (username == "gustavo" && password == "12345") {
        window.location.href = 'pagina.html';
    } else {
        errorMessage.innerHTML = "Nome de usuário ou senha incorreto!";
    }
    return false;
}