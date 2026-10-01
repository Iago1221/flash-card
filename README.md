# Flash Cards

Site estático (HTML, CSS e JavaScript, sem build) para passar flash cards. Tem uma tela inicial com o botão **Iniciar** e, em seguida, um card por vez com o botão **Virar** para ver a descrição.

## Adicionando cards

1. Coloque as imagens na pasta `imagens/`.
2. Edite `cards.js` e adicione um item por card:

```js
{
  titulo: "Opcional",
  imagem: "imagens/minha-foto.jpg",   // opcional
  descricao: "Texto exibido ao virar o card."
}
```

Os cards aparecem na ordem da lista. Atalhos: ← e → navegam, espaço vira o card.

## Testando localmente

Abra o `index.html` direto no navegador.

## Publicando no GitHub Pages

No GitHub: **Settings → Pages → Build and deployment**, escolha **Deploy from a branch**, a branch `main` e a pasta `/ (root)`. O site fica em `https://iago1221.github.io/flash-card/`.
