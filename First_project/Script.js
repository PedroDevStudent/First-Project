function carregar(){
var msg = window.document.querySelector("div#content")
var img = window.document.querySelector("div#foto")
var msg2 = window.document.querySelector("div#msg2")
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Now it's ${hora} hours`
if(hora >= 0 && hora <=12){
    msg2.innerHTML="Good Day!"
    imagem.src="fotodamanha.jpeg"
} else if (hora >=12 && hora <= 18){
    imagem.src="fotodatarde.jpeg"
    msg2.innerHTML= "Good Afternoon!"
} else{
    imagem.src="fotodanoite.jpeg"
    msg2.innerHTML = "Good Evening!"
}
}