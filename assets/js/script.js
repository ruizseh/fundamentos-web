

/*

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName
por Seletor: querySelector()

*/

let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')
let comentario = document.querySelector('#comentario')
let nomeOk = false
let emailOk = false
let comentarioOk = false
let mapa = document.querySelector("#mapa")


nome.style.width = '98%'
email.style.width = '98%'
comentario.style.width = '98%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    }else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaComentario(){
    let txtComentario = document.querySelector("#txtComentario")

    if(comentario.value.length > 200){
        txtComentario.innerHTML = "Texto excedido, digite no máximo 200 caractéres"
        txtComentario.style.color = "red"
        txtComentario.style.display = "block"
    }else{
        txtComentario.style.display = "none"
        comentarioOk = true
    }
}  

function enviar(){
    if(nomeOk == true && emailOk == true && comentarioOk == true){
    alert("Comentario enviado com sucesso")
}else {
    alert("Preencha os dados corretamente")
}
}

function mapaZoomMenos(){
    mapa.style.width = "400px"
    mapa.style.height = "200px"
}

function mapaNormal(){
    mapa.style.width = "680px"
    mapa.style.height = "400px"
}