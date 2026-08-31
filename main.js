// Localiza o campo onde a senha será exibida
const campoSenha = document.querySelector("#campo-senha");

// Localiza o número que mostra o tamanho da senha
const numeroSenha = document.querySelector("#numero-senha");

// Localiza os checkboxes
const maiusculo = document.querySelector("#maiusculo");
const minusculo = document.querySelector("#minusculo");
const numero = document.querySelector("#numero");

// Letras que poderão ser utilizadas
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";

const numeros = "0123456789";

// Tamanho inicial da senha
let tamanhoSenha = 8;

// Gera a primeira senha quando a página abrir
geraSenha();


// Função responsável por gerar a senha
function geraSenha() {

    // Começamos com um conjunto de caracteres vazio
    let alfabeto = "";

    // Verifica se maiúsculas foram selecionadas
    if (maiusculo.checked) {
        alfabeto += letrasMaiusculas;
    }

    // Verifica se minúsculas foram selecionadas
    if (minusculo.checked) {
        alfabeto += letrasMinusculas;
    }

    // Verifica se números foram selecionados
    if (numero.checked) {
        alfabeto += numeros;
    }

    // Se nenhum tipo de caractere estiver selecionado
    if (alfabeto === "") {
        campoSenha.value = "Selecione uma opção";
        return;
    }

    // Senha começa vazia
    let senha = "";

    // Repete o processo conforme o tamanho escolhido
    for (let i = 0; i < tamanhoSenha; i++) {

        // Gera um número aleatório
        let numeroAleatorio = Math.random() * alfabeto.length;

        // Remove a parte decimal
        numeroAleatorio = Math.floor(numeroAleatorio);

        // Escolhe um caractere aleatório
        senha += alfabeto[numeroAleatorio];
    }

    // Exibe a senha no campo
   campoSenha.value = gerarSenhaSegura();
}


// Diminui o tamanho da senha
function diminuiTamanho() {

    // Impede que a senha fique menor que 8 caracteres
    if (tamanhoSenha > 8) {
        tamanhoSenha--;
    }

    numeroSenha.textContent = tamanhoSenha;

    geraSenha();
}


// Aumenta o tamanho da senha
function aumentaTamanho() {

    // Limite máximo de 20 caracteres
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }

    numeroSenha.textContent = tamanhoSenha;

    geraSenha();
}
// Testa se a senha é forte
function testarSenha(senha) {

    // Deve ter pelo menos uma maiúscula
    if (!/[A-Z]/.test(senha)) {
        return false;
    }

    // Deve ter pelo menos uma minúscula
    if (!/[a-z]/.test(senha)) {
        return false;
    }

    // Deve ter pelo menos um número
    if (!/[0-9]/.test(senha)) {
        return false;
    }

    // Não pode ter sequências simples
    if (
        senha.includes("12345") ||
        senha.includes("abcdef") ||
        senha.includes("ABCDEF")
    ) {
        return false;
    }

    return true;
}

// Gera senhas até encontrar uma forte
function gerarSenhaSegura() {

    let senha;

    do {
        senha = "";

        let alfabeto = "";

        if (maiusculo.checked) alfabeto += letrasMaiusculas;
        if (minusculo.checked) alfabeto += letrasMinusculas;
        if (numero.checked) alfabeto += numeros;

        if (alfabeto === "") {
            return "Selecione uma opção";
        }

        for (let i = 0; i < tamanhoSenha; i++) {
            let aleatorio = Math.floor(Math.random() * alfabeto.length);
            senha += alfabeto[aleatorio];
        }

    } while (testarSenha(senha) === false);

    return senha;
}