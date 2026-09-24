const botao = document.querySelector("#botaoMensagem");
const msg = document.querySelector("#mensagem");
const nome = document.querySelector("#nome")

botao.addEventListener("click", funcion() {
    msg.textContent = 'prazer, ${nome.textcontent}!';
   });