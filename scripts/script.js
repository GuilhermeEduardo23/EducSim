const cadastrar = document.getElementById(`cadastrar`);

function realizarCadastro() {
    const nome = document.getElementById(`name`).value;
    const tipoUsuario = document.getElementById(`user`).value;
    const email = document.getElementById(`email`).value;
    const senha = document.getElementById(`password`).value;

    const camposPreenchidos = nome !== `` && tipoUsuario !== `` && email !== `` && senha !== ``;

    if(camposPreenchidos)
        window.location.href = `cadastroRealizado.html`;
    else
        alert(`Por favor, preencher todos os campos!!!`);
}

cadastrar.addEventListener(`click`, realizarCadastro);