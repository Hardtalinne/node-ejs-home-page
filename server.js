const express = require("express");

const app = express();

app.set("view engine", "ejs");

//criando as rotas e o que ela vai chamar
app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações/serviços de forma fácil",
    },
    {
      title: "E",
      message: "JS usa JavaScript para renderizar HTML",
    },
    {
      title: "M",
      message: "uito Fácil de usar",
    },
    {
      title: "A",
      message: "ltamente produtivo",
    },
    {
      title: "I",
      message: "nstall EJS ",
    },
    {
      title: "S",
      message: "intexe simples",
    },
  ];
  const subtitle =
    "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript";

  //resposta
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

//ouvindo uma porta para execução.
app.listen(8080);

console.log("rodando");
