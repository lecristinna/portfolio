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


// ---------- ACESSIBILIDADE ----------
const painel = document.getElementById('acessibilidade-painel');
const html = document.documentElement;
const TAMANHOS = [90, 100, 112.5, 125, 140]; // % do tamanho de texto (o 2º é o padrão)

// Escolhas da pessoa (salvas no navegador para a próxima visita)
let prefs = { fonte: 1, contraste: false, links: false };
try {
  prefs = { ...prefs, ...JSON.parse(localStorage.getItem('acessibilidade')) };
} catch (e) {}

function aplicar() {
  html.style.fontSize = TAMANHOS[prefs.fonte] + '%';
  html.classList.toggle('alto-contraste', prefs.contraste);
  html.classList.toggle('links-destacados', prefs.links);

  // Deixa o botão "aceso" quando a opção está ligada
  document.querySelector('[data-acao="contraste"]').classList.toggle('ativo', prefs.contraste);
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
  if (acao === 'contraste') prefs.contraste = !prefs.contraste;
  if (acao === 'links') prefs.links = !prefs.links;
  if (acao === 'restaurar') prefs = { fonte: 1, contraste: false, links: false };
  aplicar();
});

aplicar();


// ---------- FORMULÁRIO DE CONTATO ----------
// A validação (campos obrigatórios, e-mail válido) é a do próprio navegador.
// Aqui só enviamos sem sair da página e mostramos o resultado.
const form = document.getElementById('form-contato');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const botao = form.querySelector('button');
  botao.disabled = true;
  status.className = 'form-status';
  status.textContent = 'Enviando…';

  try {
    // Versão "ajax" do FormSubmit: mesmo endereço, com /ajax/
    const resposta = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    if (!resposta.ok) throw new Error();

    form.reset();
    status.classList.add('ok');
    status.textContent = 'Mensagem enviada! Respondo assim que puder.';
  } catch (erro) {
    status.classList.add('erro');
    status.textContent = 'Não foi possível enviar agora. Se preferir, escreva para le.cristinna15@gmail.com.';
  } finally {
    botao.disabled = false;
  }
});
