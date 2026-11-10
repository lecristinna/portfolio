// ---------- MENU (celular) ----------
const menuBotao = document.getElementById('menu-botao');
const menu = document.getElementById('menu');

// Abre/fecha ao tocar no botão
menuBotao.addEventListener('click', () => {
  menu.classList.toggle('aberto');
});

// Fecha depois de escolher uma seção
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('aberto'));
});


// ---------- ACESSIBILIDADE E TEMA ----------
const painel = document.getElementById('acessibilidade-painel');
const btnTema = document.getElementById('btn-tema');
const html = document.documentElement;
const TAMANHOS = [90, 100, 112.5, 125, 140]; // % do tamanho de texto (o 2º é o padrão)

// Escolhas da pessoa (salvas no navegador para a próxima visita)
let prefs = { fonte: 1, escuro: false, links: false };
try {
  prefs = { ...prefs, ...JSON.parse(localStorage.getItem('acessibilidade')) };
} catch (e) {}

function aplicar() {
  html.style.fontSize = TAMANHOS[prefs.fonte] + '%';
  html.classList.toggle('tema-escuro', prefs.escuro);
  html.classList.toggle('links-destacados', prefs.links);

  // O botão de tema mostra para qual tema ele vai trocar
  btnTema.textContent = prefs.escuro ? 'Tema claro' : 'Tema escuro';
  // Deixa o botão "aceso" quando a opção está ligada
  document.querySelector('[data-acao="links"]').classList.toggle('ativo', prefs.links);

  try {
    localStorage.setItem('acessibilidade', JSON.stringify(prefs));
  } catch (e) {}
}

// Abre/fecha o painel
document.getElementById('acessibilidade-botao').addEventListener('click', () => {
  painel.hidden = !painel.hidden;
});

// Cada botão do painel tem um data-acao dizendo o que faz
painel.addEventListener('click', (e) => {
  const acao = e.target.dataset.acao;
  if (acao === 'fonte-mais') prefs.fonte = Math.min(prefs.fonte + 1, TAMANHOS.length - 1);
  if (acao === 'fonte-menos') prefs.fonte = Math.max(prefs.fonte - 1, 0);
  if (acao === 'tema') prefs.escuro = !prefs.escuro;
  if (acao === 'links') prefs.links = !prefs.links;
  if (acao === 'restaurar') prefs = { fonte: 1, escuro: false, links: false };
  aplicar();
});

aplicar();


// ---------- FORMULÁRIO DE CONTATO ----------
// Simulação: não envia nada, só confere os campos e mostra um alert
function enviarFormulario() {
  // Pega o que foi digitado em cada campo (.trim() tira espaços sobrando)
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Se algum campo estiver vazio, pede para preencher; senão, confirma o envio
  if (nome === '' || email === '' || telefone === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos.');
  } else {
    alert('Mensagem enviada com sucesso!');
    document.getElementById('form-contato').reset(); // limpa os campos
  }
}

// Executa a função ao clicar no botão Enviar
document.getElementById('btn-enviar').addEventListener('click', enviarFormulario);
