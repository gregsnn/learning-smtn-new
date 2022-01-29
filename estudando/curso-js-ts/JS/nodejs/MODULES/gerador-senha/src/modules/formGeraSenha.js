// @ts-nocheck
import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha_gerada");
const qtdCarac = document.querySelector(".qtd");
const numbers = document.querySelector(".num");
const maisc = document.querySelector(".maius");
const minsc = document.querySelector(".minus");
const simbol = document.querySelector(".simbol");
const gerarSenha = document.querySelector(".gerar_senha");

export default () => {
    gerarSenha.addEventListener("click", () => {
        senhaGerada.innerHTML = gera();
    });
}

function gera() {
    return geraSenha(
        qtdCarac.value,
        maisc.checked,
        minsc.checked,
        numbers.checked,
        simbol.checked
    ) || "Nada Selecionado";
}
