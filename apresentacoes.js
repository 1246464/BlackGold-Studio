// Conteúdo fictício para demonstrar possibilidades de cada segmento.
function criarApresentacoes() { return {
  doce: {
    nav: ['Nossa cozinha', 'Encomendas'], colecao: 'Feitos para adoçar o dia',
    resumo: 'História da marca · encomendas · dúvidas frequentes',
    descricoes: ['Creme delicado, frutas da estação e uma finalização feita à mão. Porção individual.', 'Uma receita de forno com massa macia e cobertura cremosa. Ideal para compartilhar.', 'Uma seleção de pequenos doces em embalagem para presentear. Sabores a combinar.'],
    antes: `<section class="experiencia faixa-valores"><span>Feito em pequenos lotes</span><span>Receitas com afeto</span><span>Presentes para celebrar</span></section>`,
    depois: `<section class="experiencia editorial" id="historia"><img src="${fotoUrl('photo-1578985545062-69928b1d9587')}" alt="Bolo artesanal ilustrando a confeitaria" loading="lazy"><div><small>DA NOSSA COZINHA</small><h2>O carinho está nos detalhes.</h2><p>Tem cheiro de bolo saindo do forno, escolha cuidadosa dos ingredientes e uma decoração que faz cada doce ser especial. A Doce Afeto nasceu dessa vontade de transformar uma pausa em uma boa lembrança.</p><p>Para um café entre amigos ou uma data importante, há sempre um sabor que combina com o momento.</p><a class="texto-link" href="#encomendas">Planeje sua comemoração →</a></div></section>
      <section class="experiencia painel" id="encomendas"><small>DO SEU JEITO</small><h2>Uma encomenda, muitas possibilidades.</h2><div class="passos"><article><b>01</b><h3>Conte a ocasião</h3><p>Aniversário, presente ou uma mesa de doces para reunir quem você gosta.</p></article><article><b>02</b><h3>Escolha os sabores</h3><p>Combine recheios, coberturas e uma apresentação que tenha a sua cara.</p></article><article><b>03</b><h3>Combine a retirada</h3><p>Defina a data e os detalhes de entrega diretamente com a confeitaria.</p></article></div><details><summary>Posso personalizar uma caixa de presente?</summary><p>Este modelo pode apresentar tamanhos de caixas, sabores disponíveis e opções de embalagem. Os detalhes são confirmados pela loja.</p></details><details><summary>Como informar restrições alimentares?</summary><p>Uma seção como esta permite orientar o cliente a consultar ingredientes e possibilidades de preparo antes de encomendar.</p></details></section>`,
  },
  verde: {
    nav: ['Nossa proposta', 'Monte seu bowl'], colecao: 'Frescos, coloridos e prontos para a rotina',
    resumo: 'Ingredientes · montagem de bowl · rotina semanal',
    descricoes: ['Folhas, legumes da estação e molho servido à parte para finalizar na hora.', 'Uma combinação de grãos, vegetais e acompanhamentos para uma pausa cheia de sabor.', 'Uma seleção de refeições para organizar seus dias. As combinações podem variar.'],
    antes: `<section class="experiencia painel" id="historia"><small>COMIDA DE VERDADE, TODO DIA</small><h2>Uma rotina mais leve começa na escolha.</h2><div class="passos"><article><b>↗</b><h3>Da estação</h3><p>Ingredientes que trazem variedade de cores e sabores ao prato.</p></article><article><b>◎</b><h3>Seu ritmo</h3><p>Opções individuais ou combinações para planejar a semana.</p></article><article><b>✳</b><h3>Seu gosto</h3><p>Bases, acompanhamentos e molhos para explorar combinações.</p></article></div></section>`,
    depois: `<section class="experiencia editorial" id="bowl"><div><small>EXPERIMENTE UMA COMBINAÇÃO</small><h2>Como seria o seu bowl?</h2><p>Escolha uma base para visualizar uma sugestão de composição.</p><div class="opcoes" role="group" aria-label="Base do bowl"><button type="button" data-bowl="Arroz integral, legumes assados, folhas e molho de ervas." aria-pressed="true">Arroz integral</button><button type="button" data-bowl="Quinoa, abóbora assada, pepino e molho de limão." aria-pressed="false">Quinoa</button><button type="button" data-bowl="Mix de folhas, tomate, cenoura e molho da casa." aria-pressed="false">Mix de folhas</button></div><p class="resultado" id="bowl-resultado" aria-live="polite">Arroz integral, legumes assados, folhas e molho de ervas.</p><small>Combinação ilustrativa. Não realiza pedidos.</small></div><img src="${fotoUrl('photo-1540420773420-3366772f4999')}" alt="Bowl colorido de vegetais" loading="lazy"></section><section class="experiencia faixa-valores"><span>Uma pausa no almoço</span><span>Um jantar prático</span><span>Uma semana com mais variedade</span></section>`,
  },
  cafe: {
    nav: ['Nossa essência', 'Cardápio'], colecao: 'Os favoritos da casa',
    resumo: 'Cardápio por categoria · história · espaço da cafeteria',
    descricoes: ['Uma xícara de café passado na hora, com aroma marcante e finalização suave.', 'Preparo especial para descobrir novas notas e aproveitar o ritual com calma.', 'Grãos para levar um pouco da experiência da cafeteria para a sua casa.'],
    antes: `<section class="experiencia citacao" id="historia"><small>CAFÉ SEM PRESSA</small><h2>Entre uma conversa e outra,<br>uma boa xícara.</h2><p>Um lugar para ler algumas páginas, encontrar alguém ou simplesmente ver o dia passar. No Aurora, a pausa faz parte da experiência.</p></section>`,
    depois: `<section class="experiencia cardapio" id="cardapio"><div><small>ESCOLHA A SUA PAUSA</small><h2>Além do primeiro café.</h2><p>Um exemplo de cardápio que o cliente pode explorar por categoria.</p><div class="opcoes" role="group" aria-label="Categoria do cardápio"><button type="button" data-menu="cafes" aria-pressed="true">Cafés</button><button type="button" data-menu="acompanhamentos" aria-pressed="false">Para acompanhar</button></div></div><div id="menu-itens" aria-live="polite"></div></section><section class="experiencia editorial"><img src="${fotoUrl('photo-1509042239860-f550ce710b93')}" alt="Xícara de café para uma pausa" loading="lazy"><div><small>SEU CANTO NA CIDADE</small><h2>Fique mais um pouquinho.</h2><p>Luz suave, aroma de café e uma mesa esperando por uma boa conversa. Este espaço pode mostrar o ambiente, os horários e como chegar à sua cafeteria.</p><div class="nota-demo">Na versão da sua marca: endereço, mapa, horário de funcionamento e canais de contato.</div></div></section>`,
  },
  moda: {
    nav: ['Editorial', 'Guia de tamanhos'], colecao: 'Encontre seu próximo essencial',
    resumo: 'Editorial de coleção · catálogo · guia de tamanhos',
    descricoes: ['Peças de linhas simples para criar combinações no dia a dia. Cores e disponibilidade sob consulta.', 'Uma seleção para renovar o guarda-roupa com textura, movimento e versatilidade.', 'Detalhes para completar a composição e experimentar novas combinações.'],
    antes: `<section class="experiencia editorial editorial-moda" id="historia"><div><small>EDITORIAL / NOVOS OLHARES</small><h2>Menos regras.<br>Mais você.</h2><p>Uma camisa que acompanha a semana. Uma textura que muda a composição. Peças pensadas para combinar entre si e abrir espaço para o seu jeito de vestir.</p><a class="texto-link" href="#colecao">Descubra a seleção →</a></div><img src="${fotoUrl('photo-1490481651871-ab68de25d43d')}" alt="Composição de peças de moda" loading="lazy"></section>`,
    depois: `<section class="experiencia painel" id="tamanhos"><small>ANTES DE ESCOLHER</small><h2>O caimento faz a diferença.</h2><p>Um guia de medidas ajuda o cliente a comparar as peças com o que já veste.</p><div class="tabela-scroll"><table><caption>Exemplo de medidas da peça em centímetros — tabela ilustrativa</caption><thead><tr><th scope="col">Tamanho</th><th scope="col">Busto</th><th scope="col">Cintura</th><th scope="col">Quadril</th></tr></thead><tbody><tr><th scope="row">P</th><td>88</td><td>70</td><td>96</td></tr><tr><th scope="row">M</th><td>94</td><td>76</td><td>102</td></tr><tr><th scope="row">G</th><td>100</td><td>82</td><td>108</td></tr></tbody></table></div><details><summary>Como conferir as medidas?</summary><p>Compare a tabela específica do produto com uma peça de caimento semelhante. Na loja real, cada modelo terá suas medidas e composição informadas.</p></details><details><summary>Onde entram as informações de troca?</summary><p>Aqui a marca pode apresentar sua política de trocas, canais de atendimento e orientações de conservação.</p></details></section>`,
  },
  casa: {
    nav: ['Inspirações', 'Materiais'], colecao: 'Detalhes que compõem o ambiente',
    resumo: 'Inspiração por ambiente · materiais · dicas de composição',
    descricoes: ['Uma seleção de referências para combinar volumes, cores e texturas. Valor de item ilustrativo, não do ambiente completo.', 'Detalhes para criar uma pausa confortável em casa. Valor ilustrativo de uma peça da composição.', 'Acabamentos e objetos que aproximam o ambiente de uma paleta natural. Valor ilustrativo de um objeto.'],
    antes: `<section class="experiencia ambientes" id="historia"><div><small>UM AMBIENTE, UMA SENSAÇÃO</small><h2>Encontre seu lugar de pausa.</h2><p>Explore ideias para diferentes espaços da casa.</p><div class="opcoes" role="group" aria-label="Escolher ambiente"><button type="button" data-ambiente="sala" aria-pressed="true">Sala de estar</button><button type="button" data-ambiente="leitura" aria-pressed="false">Canto de leitura</button></div><p id="ambiente-texto" aria-live="polite">Tons claros, tecidos macios e objetos com textura para uma sala acolhedora.</p></div><img id="ambiente-foto" src="${fotoUrl('photo-1600210492486-724fe5c67fb0')}" alt="Inspiração para sala de estar" loading="lazy"></section>`,
    depois: `<section class="experiencia" id="materiais"><small>A BELEZA DO NATURAL</small><h2>Texturas que conversam entre si.</h2><div class="materiais"><article><span class="amostra linho"></span><h3>Linho & tecidos</h3><p>Camadas suaves que trazem conforto e leveza à composição.</p></article><article><span class="amostra madeira"></span><h3>Madeira & fibras</h3><p>Tons quentes para equilibrar ambientes de cores neutras.</p></article><article><span class="amostra ceramica"></span><h3>Cerâmica & formas</h3><p>Pequenas peças que acrescentam textura e personalidade.</p></article></div></section><section class="experiencia painel"><small>GUIA DE COMPOSIÇÃO</small><h2>Comece por um detalhe.</h2><p>Escolha uma paleta, misture duas ou três texturas e deixe espaço entre os objetos. Uma composição pode crescer aos poucos, acompanhando a história da casa.</p><a class="texto-link" href="#colecao">Revisitar a seleção →</a></section>`,
  },
  barber: {
    nav: ['A experiência', 'Simular atendimento'], colecao: 'Precisão em cada serviço',
    resumo: 'Ritual de atendimento · serviços · simulação de escolha',
    descricoes: ['Conversa sobre o estilo, corte e finalização. Duração ilustrativa: 40 minutos.', 'Desenho, alinhamento e acabamento da barba. Duração ilustrativa: 30 minutos.', 'Corte e cuidado completo da barba na mesma visita. Duração ilustrativa: 60 minutos.'],
    antes: `<section class="experiencia faixa-valores"><span>Corte com personalidade</span><span>Acabamento cuidadoso</span><span>Um tempo para você</span></section>`,
    depois: `<section class="experiencia ritual" id="historia"><div><small>O RITUAL DISTRITO</small><h2>Mais que sentar<br>na cadeira.</h2><p>Um atendimento começa na conversa e termina no cuidado com o último detalhe.</p></div><div class="ritual-lista"><article><b>01</b><div><h3>Entender o seu estilo</h3><p>Rotina, preferências e referências para definir o corte.</p></div></article><article><b>02</b><div><h3>Cuidar do acabamento</h3><p>Atenção ao desenho, aos contornos e à finalização.</p></div></article><article><b>03</b><div><h3>Levar o cuidado para casa</h3><p>Orientações de estilo e manutenção entre as visitas.</p></div></article></div></section><section class="experiencia painel" id="atendimento"><small>ESCOLHA SEU MOMENTO</small><h2>Como seria seu atendimento?</h2><p>Explore as opções abaixo. Esta simulação não reserva horários.</p><div class="demo-filtros"><label>Serviço<select id="servico-demo"><option value="0">Corte clássico</option><option value="1">Barba completa</option><option value="2">Corte + barba</option></select></label><label>Preferência de período<select id="periodo-demo"><option>Manhã</option><option>Tarde</option></select></label></div><p class="resultado" id="atendimento-resumo" aria-live="polite">Corte clássico · 40 minutos · R$ 45,00 · Manhã. Simulação, sem reserva.</p></section>`,
  },
}; }

function iniciarApresentacao(m) {
  document.querySelectorAll('[data-bowl]').forEach(btn => btn.addEventListener('click', () => {
    selecionarOpcao('[data-bowl]', btn);
    document.querySelector('#bowl-resultado').textContent = btn.dataset.bowl;
  }));
  const cardapio = {
    cafes: [['Espresso', 'Intenso, curto e aromático.', '7,00'], ['Cappuccino', 'Café e leite cremoso em equilíbrio.', '14,90'], ['Café coado', 'Um preparo para apreciar com calma.', '8,90']],
    acompanhamentos: [['Fatia de bolo', 'Receita da casa para acompanhar a xícara.', '12,00'], ['Pão na chapa', 'Dourado por fora, macio por dentro.', '9,00'], ['Cookie artesanal', 'Uma pausa doce e crocante.', '8,00']],
  };
  function mostrarMenu(tipo) {
    document.querySelector('#menu-itens').innerHTML = cardapio[tipo].map(([nome, descricao, preco]) => `<article class="menu-linha"><div><h3>${nome}</h3><p>${descricao}</p></div><strong>R$ ${preco}</strong></article>`).join('') + '<small>Itens e preços demonstrativos.</small>';
  }
  if (m.id === 'cafe') mostrarMenu('cafes');
  document.querySelectorAll('[data-menu]').forEach(btn => btn.addEventListener('click', () => {
    selecionarOpcao('[data-menu]', btn); mostrarMenu(btn.dataset.menu);
  }));
  const ambientes = {
    sala: ['photo-1600210492486-724fe5c67fb0', 'Inspiração para sala de estar', 'Tons claros, tecidos macios e objetos com textura para uma sala acolhedora.'],
    leitura: ['photo-1616486338812-3dadae4b4ace', 'Inspiração para um canto de leitura', 'Uma poltrona, luz acolhedora e poucos objetos para criar seu canto de leitura.'],
  };
  document.querySelectorAll('[data-ambiente]').forEach(btn => btn.addEventListener('click', () => {
    selecionarOpcao('[data-ambiente]', btn);
    const [foto, alt, texto] = ambientes[btn.dataset.ambiente];
    const img = document.querySelector('#ambiente-foto'); img.src = fotoUrl(foto); img.alt = alt;
    document.querySelector('#ambiente-texto').textContent = texto;
  }));
  function atualizarAtendimento() {
    const i = Number(document.querySelector('#servico-demo').value);
    document.querySelector('#atendimento-resumo').textContent = `${m.itens[i]} · ${[40,30,60][i]} minutos · R$ ${m.precos[i]} · ${document.querySelector('#periodo-demo').value}. Simulação, sem reserva.`;
  }
  document.querySelector('#servico-demo')?.addEventListener('change', atualizarAtendimento);
  document.querySelector('#periodo-demo')?.addEventListener('change', atualizarAtendimento);
}

function selecionarOpcao(seletor, selecionado) {
  document.querySelectorAll(seletor).forEach(btn => btn.setAttribute('aria-pressed', String(btn === selecionado)));
}
