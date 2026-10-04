const modelos = [
  {id:'doce',nome:'Doce Afeto',tipo:'Loja simples',ramo:'Confeitaria',cor:'#a83560',fundo:'#fff2f5',texto:'#442333',foto:'photo-1488477181946-6428a0291777',titulo:'Pequenas doçuras. Grandes momentos.',descricao:'Doces artesanais para deixar o seu dia mais especial.',itens:['Taça de frutas','Doce da casa','Caixa para presentear'],precos:['18,90','24,90','59,90'],categorias:['Doces','Doces','Kits'],fotos:['photo-1488477181946-6428a0291777','photo-1578985545062-69928b1d9587','photo-1481391319762-47dff72954d9']},
  {id:'verde',nome:'Raiz Natural',tipo:'Loja simples',ramo:'Alimentação saudável',cor:'#276044',fundo:'#eff4e9',texto:'#233b2c',foto:'photo-1512621776951-a57141f2eefd',titulo:'Mais cor e frescor à sua mesa.',descricao:'Uma seleção leve, fresca e cheia de sabor para a sua rotina.',itens:['Salada da estação','Bowl especial','Combo da semana'],precos:['25,90','32,90','69,90'],categorias:['Refeições','Refeições','Combos'],fotos:['photo-1512621776951-a57141f2eefd','photo-1540420773420-3366772f4999','photo-1490645935967-10de6ba17061']},
  {id:'cafe',nome:'Café Aurora',tipo:'Loja simples',ramo:'Cafeteria',cor:'#89502f',fundo:'#faf1e6',texto:'#422e24',foto:'photo-1447933601403-0c6688de566e',titulo:'Seu dia merece uma pausa.',descricao:'Café, encontros e os sabores que fazem você se sentir em casa.',itens:['Café da casa','Café especial','Grãos selecionados'],precos:['8,90','14,90','39,90'],categorias:['Cafés','Cafés','Grãos'],fotos:['photo-1509042239860-f550ce710b93','photo-1442512595331-e89e73853f31','photo-1447933601403-0c6688de566e']},
  {id:'moda',nome:'Forma Essencial',tipo:'Catálogo',ramo:'Moda e acessórios',cor:'#5145a0',fundo:'#f1effa',texto:'#302b46',foto:'photo-1445205170230-053b83016050',titulo:'Seu estilo, em cada detalhe.',descricao:'Peças versáteis e acessórios para acompanhar os seus dias.',itens:['Coleção casual','Seleção de temporada','Acessórios essenciais'],precos:['89,90','129,90','49,90'],categorias:['Roupas','Roupas','Acessórios'],fotos:['photo-1445205170230-053b83016050','photo-1483985988355-763728e1935b','photo-1490481651871-ab68de25d43d']},
  {id:'casa',nome:'Casa Serena',tipo:'Catálogo',ramo:'Decoração',cor:'#a4482e',fundo:'#f7eee7',texto:'#46352c',foto:'photo-1600210492486-724fe5c67fb0',titulo:'Um lar com a sua personalidade.',descricao:'Texturas, formas e detalhes que transformam seus espaços.',itens:['Ambiente acolhedor','Canto de leitura','Inspiração natural'],precos:['249,90','189,90','79,90'],categorias:['Ambientes','Ambientes','Decoração'],fotos:['photo-1600210492486-724fe5c67fb0','photo-1616486338812-3dadae4b4ace','photo-1600607687920-4e2a09cf159d']},
  {id:'barber',nome:'Distrito Barber',tipo:'Serviços',ramo:'Barbearia',cor:'#efbb64',fundo:'#202b35',texto:'#f9f1e6',foto:'photo-1503951914875-452162b0f3f1',titulo:'Seu estilo começa aqui.',descricao:'Cuidado, personalidade e atenção em cada acabamento.',itens:['Corte clássico','Barba completa','Corte + barba'],precos:['45,00','35,00','70,00'],categorias:['Cortes','Barba','Combos'],fotos:['photo-1503951914875-452162b0f3f1','photo-1621605815971-fbc98d665033','photo-1599351431202-1e0f0137899a']}
];
const fotoUrl = (id, width=800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
const contatoModelo = nome => `https://wa.me/5511960670791?text=${encodeURIComponent('Olá! Gostaria de um site baseado no modelo '+nome+'.')}`;
const apresentacoes = criarApresentacoes();
const galeria = document.querySelector('#galeria-modelos');
if (galeria) {
  galeria.innerHTML = modelos.map(m => `<article class="modelo-card" data-tipo="${m.tipo}">
    <a class="modelo-preview" href="modelo.html?tema=${m.id}" style="--modelo-cor:${m.cor};--modelo-fundo:${m.fundo};--modelo-texto:${m.texto}" aria-label="Visualizar modelo ${m.nome}">
      <div class="preview-bar"><span>● ● ●</span><span>${m.nome}</span></div>
      <div class="preview-layout"><div><small>${m.ramo}</small><h3>${m.titulo}</h3><span class="preview-button">Conheça a coleção ↗</span></div><img src="${fotoUrl(m.foto,600)}" alt="Inspiração visual para ${m.ramo}" loading="lazy"></div>
    </a><div class="modelo-body"><small>${m.tipo} · ${m.ramo}</small><h3>${m.nome}</h3><p class="modelo-recursos">${apresentacoes[m.id].resumo}</p><div class="modelo-bottom"><span class="paleta" aria-label="Paleta de cores"><i style="background:${m.cor}"></i><i style="background:${m.fundo}"></i><i style="background:${m.texto}"></i></span><a href="modelo.html?tema=${m.id}">Explorar modelo →</a></div></div></article>`).join('');
  document.querySelectorAll('[data-filtro-modelo]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filtro-modelo]').forEach(b => b.setAttribute('aria-pressed',String(b === btn)));
    galeria.querySelectorAll('.modelo-card').forEach(card => card.hidden = btn.dataset.filtroModelo !== 'Todos' && card.dataset.tipo !== btn.dataset.filtroModelo);
  }));
}
const demo = document.querySelector('#demo');
if (demo) {
  const m = modelos.find(item => item.id === new URLSearchParams(location.search).get('tema')) || modelos[0];
  const a = apresentacoes[m.id];
  const destino = {doce:"encomendas",verde:"bowl",cafe:"cardapio",moda:"tamanhos",casa:"materiais",barber:"atendimento"}[m.id];
  document.body.dataset.tema = m.id;
  document.title = `${m.nome} — Modelo demonstrativo | BlackGold Studio`;
  document.body.style.setProperty('--cor',m.cor); document.body.style.setProperty('--fundo',m.fundo); document.body.style.setProperty('--texto',m.texto);
  demo.innerHTML = `<header class="demo-header"><strong>${m.nome}</strong><nav aria-label="Navegação do modelo"><a href="#historia">${a.nav[0]}</a><a href="#colecao">${m.tipo === 'Serviços' ? 'Serviços' : 'Coleção'}</a><a href="#${destino}">${a.nav[1]} ↗</a></nav></header>
    <section class="demo-hero"><div><small>${m.ramo} / Modelo demonstrativo</small><h1>${m.titulo}</h1><p>${m.descricao}</p><a class="demo-btn" href="#colecao">${m.tipo === 'Serviços' ? 'Conhecer serviços' : 'Explorar coleção'} →</a></div><img src="${fotoUrl(m.foto,1200)}" alt="${m.ramo}: imagem ilustrativa do modelo"></section>
    ${a.antes}
    <section class="demo-colecao" id="colecao"><small>UMA SELEÇÃO PARA VOCÊ</small><h2>${a.colecao}</h2>
    ${m.tipo === 'Catálogo' ? '<div class="demo-filtros"><label>Buscar no catálogo <input id="busca" type="search" placeholder="Digite o nome do item"></label><label>Categoria <select id="categoria"><option value="">Todas</option>'+[...new Set(m.categorias)].map(c=>`<option>${c}</option>`).join('')+'</select></label></div>' : ''}
    <div class="demo-grid">${m.itens.map((nome,i)=>`<article data-nome="${nome}" data-categoria="${m.categorias[i]}"><img src="${fotoUrl(m.fotos[i],700)}" alt="Imagem ilustrativa: ${nome}" loading="lazy"><div class="demo-item"><small>${m.categorias[i]}</small><h3>${nome}</h3><p class="item-descricao">${a.descricoes[i]}</p><p>R$ ${m.precos[i]}</p><button type="button" class="demo-detalhes" data-item="${i}">Ver detalhes →</button></div></article>`).join('')}</div><p id="vazio" hidden>Nenhum item encontrado. Tente outro nome ou categoria.</p></section>
    ${a.depois}
    <section class="demo-contato"><h2>Imagine este modelo com a sua marca.</h2><p>Personalizamos cores, textos, imagens e informações para o seu negócio.</p><a class="demo-btn" href="${contatoModelo(m.nome)}">Quero um site assim ↗</a></section>`;
  iniciarApresentacao(m);
  const normalizar = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  function filtrar() { let visiveis=0; document.querySelectorAll('[data-nome]').forEach(card => {card.hidden = !normalizar(card.dataset.nome).includes(normalizar(document.querySelector('#busca').value)) || (document.querySelector('#categoria').value !== '' && card.dataset.categoria !== document.querySelector('#categoria').value); if (!card.hidden) visiveis++;}); document.querySelector('#vazio').hidden=visiveis>0; }
  document.querySelector('#busca')?.addEventListener('input',filtrar); document.querySelector('#categoria')?.addEventListener('change',filtrar);
  document.querySelectorAll('.demo-detalhes').forEach(btn => btn.addEventListener('click', () => {document.querySelector('#detalhe-titulo').textContent=m.itens[btn.dataset.item];document.querySelector('#detalhe-texto').textContent=`${a.descricoes[btn.dataset.item]} Valor ilustrativo: R$ ${m.precos[btn.dataset.item]}. Não há venda ou agendamento nesta demonstração.`;document.querySelector('dialog').showModal();}));
}
