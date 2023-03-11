const dataJson = [
    {
      titulo: "Bolo de chocolate",
      imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Freceitas.globo.com%2Ftipos-de-prato%2Fbolos%2Fbolo-de-cenoura-de-liquidificador-4e80cb6a8811965be7003c43.ghtml&psig=AOvVaw0BmX_Kj6yKdBJoOtwvDnvs&ust=1678623775787000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKD3y4Hv0_0CFQAAAAAdAAAAABAE",
      preparo:
        "junta tudo que vai dar bom !",
      ingredientes: ["Chocolate", "Ovos", "Massa de bolo", "fogo"],
    },
    {
      titulo: "Bolo de chocolate",
      imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Freceitas.globo.com%2Ftipos-de-prato%2Fbolos%2Fbolo-de-cenoura-de-liquidificador-4e80cb6a8811965be7003c43.ghtml&psig=AOvVaw0BmX_Kj6yKdBJoOtwvDnvs&ust=1678623775787000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKD3y4Hv0_0CFQAAAAAdAAAAABAE",
      preparo:
        "junta tudo que vai dar bom !",
      ingredientes: ["Chocolate", "Ovos", "Massa de bolo", "fogo"],
    },
    {
      titulo: "Bolo de chocolate",
      imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Freceitas.globo.com%2Ftipos-de-prato%2Fbolos%2Fbolo-de-cenoura-de-liquidificador-4e80cb6a8811965be7003c43.ghtml&psig=AOvVaw0BmX_Kj6yKdBJoOtwvDnvs&ust=1678623775787000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKD3y4Hv0_0CFQAAAAAdAAAAABAE",
      preparo:
        "junta tudo que vai dar bom !",
      ingredientes: ["Chocolate", "Ovos", "Massa de bolo", "fogo"],
    },
    {
      titulo: "Bolo de chocolate",
      imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Freceitas.globo.com%2Ftipos-de-prato%2Fbolos%2Fbolo-de-cenoura-de-liquidificador-4e80cb6a8811965be7003c43.ghtml&psig=AOvVaw0BmX_Kj6yKdBJoOtwvDnvs&ust=1678623775787000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKD3y4Hv0_0CFQAAAAAdAAAAABAE",
      preparo:
        "junta tudo que vai dar bom !",
      ingredientes: ["Chocolate", "Ovos", "Massa de bolo", "fogo"],
    },
    
    

  ];
  getIngredientes = (ingredientes) => {
    let valor = new String();
    for (item of ingredientes) {
      valor += "<li>" + item + "</li>";
    }
    return  valor;
  };
  getCard = (Card) => {
    let card = document.getElementById("Catalogo");
    card.innerHTML +=
    
      '<div class="card" style="width: 15rem;">' +
      '<img class="card-img-top" src="'+ Card.imagem +'" alt="Bolo">' +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      Card.titulo +
      "</h5>" +
      "<ul>" +
      getIngredientes(Card.ingredientes) +
      "</ul>" +
      '<p class="card-text">' +
      Card.preparo +
      "</p>" +
      "</div>" +
      "</div>";
  };

  Catalogo = () => {
    for (card of dataJson) {
      getCard(card);
    }
  };