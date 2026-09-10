// Campo onde a senha aparece
const campoSenha = document.querySelector("#campo-senha");

// Número que mostra o tamanho da senha
const numeroSenha = document.querySelector("#numero-senha");

// Checkboxes
const maiusculo = document.querySelector("#maiusculo");
const minusculo = document.querySelector("#minusculo");
const numero = document.querySelector("#numero");

// Caracteres disponíveis
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";

// Tamanho inicial
let tamanhoSenha = 8;



function geraSenha() {

    let alfabeto = "";

    // Adiciona letras maiúsculas
    if (maiusculo.checked) {
        alfabeto += letrasMaiusculas;
    }

    // Adiciona letras minúsculas
    if (minusculo.checked) {
        alfabeto += letrasMinusculas;
    }

    // Adiciona números
    if (numero.checked) {
        alfabeto += numeros;
    }

    // Nenhuma opção selecionada
    if (alfabeto === "") {
        campoSenha.value = "Selecione uma opção";
        return;
    }

    let senha = "";

    // Garante pelo menos um caractere de cada opção escolhida

    if (maiusculo.checked) {
        senha += letrasMaiusculas[
            Math.floor(Math.random() * letrasMaiusculas.length)
        ];
    }

    if (minusculo.checked) {
        senha += letrasMinusculas[
            Math.floor(Math.random() * letrasMinusculas.length)
        ];
    }

    if (numero.checked) {
        senha += numeros[
            Math.floor(Math.random() * numeros.length)
        ];
    }


    // Completa a senha até chegar ao tamanho escolhido
    while (senha.length < tamanhoSenha) {

        const aleatorio = Math.floor(
            Math.random() * alfabeto.length
        );

        senha += alfabeto[aleatorio];
    }


    // Embaralha os caracteres
    senha = senha
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");


    // Mostra a senha
    campoSenha.value = senha;
}



function diminuiTamanho() {

    if (tamanhoSenha > 8) {
        tamanhoSenha--;
    }

    numeroSenha.textContent = tamanhoSenha;

    geraSenha();
}



function aumentaTamanho() {

    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }

    numeroSenha.textContent = tamanhoSenha;

    geraSenha();
}



geraSenha();