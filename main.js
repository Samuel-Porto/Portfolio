const habilidadesIcones = document.querySelectorAll('[data-habilidadesIcones]');
const habilidadesDescricao = document.querySelectorAll('[data-habilidadesDescricao');

habilidadesIcones.forEach((icone) => {
    icone.addEventListener('click', () => {
        const habilidade = icone.getAttribute('data-habilidadesIcones');
        mostraHabilidadeDescricao(habilidade);
        selecionaHabilidadeIcone(icone);
    });
});