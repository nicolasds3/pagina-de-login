function salvarDados() {
    var senha = document.getElementById('senha').value
    var usuario = document.getElementById('usuario').value

    var login ={
        usuario: usuario,
        senha: senha,
    }

    console.log(login);
}