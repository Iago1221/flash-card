const telaInicio = document.getElementById("tela-inicio");
const telaCards = document.getElementById("tela-cards");
const card = document.getElementById("card");
const titulo = document.getElementById("card-titulo");
const imagem = document.getElementById("card-imagem");
const descricao = document.getElementById("card-descricao");
const contador = document.getElementById("contador");
const btnAnterior = document.getElementById("btn-anterior");
const btnProximo = document.getElementById("btn-proximo");

let atual = 0;

document.getElementById("info-total").textContent =
  CARDS.length === 1 ? "1 card" : `${CARDS.length} cards`;

function mostrar(indice) {
  atual = indice;
  const c = CARDS[atual];
  card.classList.remove("virado");

  titulo.textContent = c.titulo || "";
  titulo.hidden = !c.titulo;

  if (c.imagem) {
    imagem.src = c.imagem;
    imagem.alt = c.titulo || "";
    imagem.hidden = false;
  } else {
    imagem.removeAttribute("src");
    imagem.hidden = true;
  }

  descricao.textContent = c.descricao || "";
  contador.textContent = `${atual + 1} / ${CARDS.length}`;
  btnAnterior.disabled = atual === 0;
  btnProximo.disabled = atual === CARDS.length - 1;
}

function virar() {
  card.classList.toggle("virado");
}

document.getElementById("btn-iniciar").addEventListener("click", () => {
  if (CARDS.length === 0) return;
  telaInicio.hidden = true;
  telaCards.hidden = false;
  mostrar(0);
});

document.getElementById("btn-voltar").addEventListener("click", () => {
  telaCards.hidden = true;
  telaInicio.hidden = false;
});

document.getElementById("btn-virar").addEventListener("click", virar);
card.addEventListener("click", virar);
btnAnterior.addEventListener("click", () => atual > 0 && mostrar(atual - 1));
btnProximo.addEventListener("click", () => atual < CARDS.length - 1 && mostrar(atual + 1));

document.addEventListener("keydown", (e) => {
  if (telaCards.hidden) return;
  if (e.key === "ArrowLeft" && atual > 0) mostrar(atual - 1);
  else if (e.key === "ArrowRight" && atual < CARDS.length - 1) mostrar(atual + 1);
  else if (e.key === " ") { e.preventDefault(); virar(); }
});
