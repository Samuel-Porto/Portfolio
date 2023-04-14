function mostraHabilidadeDescricao(habilidade) {
    habilidadesDescricao.forEach((descricao) => {
        if (descricao.getAttribute('data-habilidadesDescricao') == habilidade) {
            descricao.classList.remove('hide');
        } else {
            descricao.classList.add('hide');
        }
    })
};

function selecionaHabilidadeIcone(icone) {
    habilidadesIcones.forEach((icone) => {
        icone.classList.remove('habilidade__icone--selecionado');
    })

    icone.classList.add('habilidade__icone--selecionado')
}