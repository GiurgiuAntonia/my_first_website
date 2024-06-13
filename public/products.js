// Definim datele pentru produse
const products = {
    flower1: {
      name: "Daffodil",
      price: "$7.00",
      image1: "images/flower1-1.jpg",
      image2: "images/flower1-2.jpg",
      description: "Daffodil is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    flower2: {
      name: "Daisy",
      price: "$5.00",
      image1: "images/flower2-1.jpg",
      image2: "images/flower2-2.jpg",
      description: "Daisy is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    flower3: {
        name: "Poppy",
        price: "$6.00",
        image1: "images/flower3-1.jpg",
        image2: "images/flower3-2.jpg",
        description: "Poppy is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    flower4: {
        name: "Dianthus",
        price: "$5.00",
        image1: "images/flower4-1.jpg",
        image2: "images/flower4-2.jpg",
        description: "Dianthus is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    flower5: {
        name: "Tulip",
        price: "$4.00",
        image1: "images/flower5-1.jpg",
        image2: "images/flower5-2.jpg",
        description: "Tulip is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    greenerie1: {
        name: "Pointy Leaf",
        price: "$4.00",
        image1: "images/greeneries1-1.jpg", 
        description: "Pointy Leaf is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    filler1: {
        name: "Tiny Decor",
        price: "$3.00",
        image1: "images/filers1-1.jpg",
        image2: "images/fillers1-2.jpg",
        description: "Tiny Decor is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    clothing1: {
      name: "Fairy boots",
      price: "$70.00",
      image1: "images/clothing-1.jpg",
      description: "Hand painted boots with leather paint, size 37. "
  },
   
  };
  
  // Funcție pentru a prelua parametrii din URL
  function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split("&").forEach(param => {
      const [key, value] = param.split("=");
      params[key] = decodeURIComponent(value);
    });
    return params;
  }
  
  // Preluăm ID-ul produsului din URL
  const params = getQueryParams();
  const productId = params.id;
  
  // Dacă produsul există, afișăm datele acestuia
  if (products[productId]) {
    const product = products[productId];
    document.getElementById("product-image").src = product.image1;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;
  } else {
    // Dacă produsul nu există, afișăm un mesaj de eroare
    document.querySelector("main").innerHTML = "<p>Product not found.</p>";
  }
  
  // Adăugăm un eveniment pentru butonul de adăugare în coș
  document.getElementById("add-to-cart").addEventListener("click", function() {
    const quantity = document.getElementById("quantity").value;
    alert(`Added ${quantity} of ${products[productId].name} to cart.`);
  })



