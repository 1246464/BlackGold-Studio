const botoes = document.querySelectorAll('.filter-btn');
const produtos = [...document.querySelectorAll('.item-card')];
const busca = document.querySelector('#searchInput');
const normalizar = texto => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
let categoria = 'todos';
function filtrar() {
  let total = 0;
  produtos.forEach(item => {
    item.hidden = (categoria !== 'todos' && item.dataset.category !== categoria) || !normalizar(item.querySelector('.item-title').textContent).includes(normalizar(busca.value));
    if (!item.hidden) total++;
  });
  document.querySelector('#resultado').textContent = `${total} ${total === 1 ? 'produto encontrado' : 'produtos encontrados'}`;
  document.querySelector('#sem-resultados').hidden = total > 0;
  botoes.forEach(btn => {
    const ativo = btn.dataset.category === categoria;
    btn.classList.toggle('active', ativo);
    btn.setAttribute('aria-pressed', String(ativo));
  });
}
botoes.forEach(btn => btn.addEventListener('click', () => {categoria = btn.dataset.category; filtrar();}));
busca.addEventListener('input', filtrar);
document.querySelector('#limpar').addEventListener('click', () => {categoria = 'todos'; busca.value = ''; filtrar(); busca.focus();});
document.querySelector('#ver-kits').addEventListener('click', () => {categoria = 'kits'; busca.value = ''; filtrar();});
produtos.forEach(item => item.querySelector('.detalhes').addEventListener('click', () => {
  const imagem = item.querySelector('img');
  document.querySelector('#detalhe-foto').src = imagem.src;
  document.querySelector('#detalhe-foto').alt = imagem.alt;
  document.querySelector('#detalhe-titulo').textContent = item.querySelector('.item-title').textContent;
  document.querySelector('#detalhe-categoria').textContent = item.querySelector('.item-tag').textContent;
  document.querySelector('#detalhe-descricao').textContent = item.querySelector('.item-desc').textContent;
  document.querySelector('#detalhe-preco').textContent = item.querySelector('.item-price').textContent;
  document.querySelector('dialog').showModal();
}));
filtrar();
