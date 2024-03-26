const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");
const img = document.querySelector("#closed");
const button = document.querySelector("button");
const luckyMessages = [
"Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente.",
"Resista àqueles dias que querem esconder tudo de bom que já fizemos até hoje.",
"Não acredite em tudo o que vê. Todo mundo está travando uma batalha interna. Não é fácil para ninguém.",
"Não tome decisões difíceis em dias complicados. Descanse e recupere suas energias!",
"Aceite que seu corpo precisa de descanso para recuperar energias! Não se exija em excesso.",
"Você não é um. Você é formado de vários anos de força, descoberta e dedicação num mesmo corpo.",
"Desconfie do destino e acredite em você.",
"Aqueles que erraram foram aqueles que ao menos tentaram. Errar é um símbolo de coragem.",
"Tenha orgulho da pessoa que você é.", "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."]
const countAllMessages = luckyMessages.length
let selectRandomMessage = Math.round(Math.random()*countAllMessages)


img.addEventListener('click',handleImgClick);
button.addEventListener('click',handleButtonClick)
document.addEventListener('keydown', keyPressedDown)

function handleImgClick(e){
    e.preventDefault()
    toggleScreen()
    showChoosenMessage()
};

function showChoosenMessage(e) {
    let message = message2.querySelector("p").innerText = `${luckyMessages[selectRandomMessage]}` 
    console.log(message)
}

function handleButtonClick(e){
   
   toggleScreen()
   selectRandomMessage = Math.round(Math.random()*countAllMessages)
    
}

function toggleScreen() {
    message1.classList.toggle("hide")
    message2.classList.toggle("hide")
}

function keyPressedDown(e) {
    if (e.key == 'Enter' && message1.classList.contains('hide')) {
        handleButtonClick()
    }
}

