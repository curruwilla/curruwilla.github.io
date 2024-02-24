function filterSelection(botao, categoria) {
    var botoes = document.getElementsByTagName("button");
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove("ativo");
    }
    botao.classList.add("ativo");

    var produtos = document.getElementsByClassName("product-div");
    if (categoria == "all") {
      for (var i = 0; i < produtos.length; i++) {
        produtos[i].style.display = "block";
      }
    } else {
      for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].classList.contains(categoria)) {
          produtos[i].style.display = "block";
        } else {
          produtos[i].style.display = "none";
        }
      }
    }
  }