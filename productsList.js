
const products = {
    flower1: {
      name: "Daffodil",
      price: 7,
      image1: "images/flower1-1.jpg",
  
      description: "Daffodil is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    flower2: {
      name: "Daisy",
      price: 5,
      image1: "images/flower2-1.jpg",
  
      description: "Daisy is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    flower3: {
        name: "Poppy",
        price: 6,
        image1: "images/flower3-1.jpg",
  
        description: "Poppy is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    flower4: {
        name: "Dianthus",
        price: 5,
        image1: "images/flower4-1.jpg",
  
        description: "Dianthus is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    flower5: {
        name: "Tulip",
        price: 4,
        image1: "images/flower5-1.jpg",
  
        description: "Tulip is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },


  };
  
  
const greeneries = {


    greenerie1: {
        name: "Pointy Leaf",
        price: 4,
        image1: "images/greeneries1-1.jpg", 
        description: "Pointy Leaf is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
    

  };

  const fillers = {
    filler1: {
        name: "Tiny Decor",
        price: 3,
        image1: "images/filers1-1.jpg",
    
        description: "Tiny Decor is a single item with 3D design, about 25 cm tall, made with black anodized aluminium wire, weight: 0.2 oz."
    },
  }

const clothings = {
    clothing1: {
        name: "Fairy boots",
        price: 70,
        image1: "images/clothing-1.jpg",
        description: "Hand painted boots with leather paint, size 37. "
      },
}
  
  let cartProductsAdded = []
  
  
  const productList = document.getElementById('product-list');
  const greeneriesList = document.getElementById('greeneries-list');
  const fillersList = document.getElementById('fillers-list');
  const clothingList = document.getElementById('clothing-list');
  console.log(clothingList);
  const cartContent = document.getElementById("cart-content")
  const totalPrice = document.getElementById("totalPrice")
  
  let totalSum = 0
  totalPrice.innerHTML = totalSum
  
  for (const key in products) {
    if (products.hasOwnProperty(key)) {
        const product = products[key];
  
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
  
        const productName = document.createElement('h2');
        productName.textContent = product.name;
  
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: ${product.price}`;
  
        const productDescription = document.createElement('p');
        // productDescription.textContent = product.description;
  
        const productImage1 = document.createElement('img');
        productImage1.src = product.image1;
        productImage1.alt = `${product.name} image 1`;
        productImage1.classList.add('product-image');
  
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener('click', () => {
          cartContent.innerHTML = '';
            console.log(`Added to cart`, product);
            totalSum = 0
            cartProductsAdded.push(product)
            for (const key in cartProductsAdded) {
              const product = cartProductsAdded[key];
              console.log(totalSum);
          
              totalSum =totalSum + product.price
              totalPrice.innerHTML = totalSum
  
                console.log(product);
  
              const productDiv = document.createElement('div');
              productDiv.classList.add('product-card-cart');
        
              const productName = document.createElement('h2');
              productName.textContent = product.name;
        
              const productPrice = document.createElement('p');
              productPrice.textContent = `Price: ${product.price}`;
        
              const productDescription = document.createElement('p');
              // productDescription.textContent = product.description;
        
              const productImage1 = document.createElement('img');
              productImage1.src = product.image1;
              productImage1.alt = `${product.name} image 1`;
              productImage1.classList.add('product-image')
        
              // const addToCartButton = document.createElement('button');
              // addToCartButton.textContent = "Add to Cart";
              // addToCartButton.addEventListener('click', () => {
              //     console.log(`Added to cart`, product);
              //     cartProductsAdded.push(product)
              // });
        
              productDiv.appendChild(productName);
              productDiv.appendChild(productPrice);
              productDiv.appendChild(productImage1);
        
              // productDiv.appendChild(productDescription);
              // productDiv.appendChild(addToCartButton);
        
              cartContent.appendChild(productDiv);
          
        }
        });
  
        productDiv.appendChild(productImage1);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        if (product.image2) {
            const productImage2 = document.createElement('img');
            productImage2.src = product.image2;
            productImage2.alt = `${product.name} image 2`;
            productDiv.appendChild(productImage2);
        }
        productDiv.appendChild(productDescription);
        productDiv.appendChild(addToCartButton);
  
        productList.appendChild(productDiv);
    }
  }

  for (const key in clothings) {
    if (clothings.hasOwnProperty(key)) {
        const product = clothings[key];

        console.log(product);
  
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
  
        const productName = document.createElement('h2');
        productName.textContent = product.name;
  
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: ${product.price}`;
  
        const productDescription = document.createElement('p');
        // productDescription.textContent = product.description;
  
        const productImage1 = document.createElement('img');
        productImage1.src = product.image1;
        productImage1.alt = `${product.name} image 1`;
        productImage1.classList.add('product-image');
  
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener('click', () => {
          cartContent.innerHTML = '';
            console.log(`Added to cart`, product);
            totalSum = 0
            cartProductsAdded.push(product)
            for (const key in cartProductsAdded) {
              const product = cartProductsAdded[key];
              console.log(totalSum);
          
              totalSum =totalSum + product.price
              totalPrice.innerHTML = totalSum
  
                console.log(product);
  
              const productDiv = document.createElement('div');
              productDiv.classList.add('product-card-cart');
        
              const productName = document.createElement('h2');
              productName.textContent = product.name;
        
              const productPrice = document.createElement('p');
              productPrice.textContent = `Price: ${product.price}`;
        
              const productDescription = document.createElement('p');
              // productDescription.textContent = product.description;
        
              const productImage1 = document.createElement('img');
              productImage1.src = product.image1;
              productImage1.alt = `${product.name} image 1`;
              productImage1.classList.add('product-image')
        
              // const addToCartButton = document.createElement('button');
              // addToCartButton.textContent = "Add to Cart";
              // addToCartButton.addEventListener('click', () => {
              //     console.log(`Added to cart`, product);
              //     cartProductsAdded.push(product)
              // });
        
              productDiv.appendChild(productName);
              productDiv.appendChild(productPrice);
              productDiv.appendChild(productImage1);
        
              // productDiv.appendChild(productDescription);
              // productDiv.appendChild(addToCartButton);
        
              cartContent.appendChild(productDiv);
          
        }
        });
  
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productImage1);
        if (product.image2) {
            const productImage2 = document.createElement('img');
            productImage2.src = product.image2;
            productImage2.alt = `${product.name} image 2`;
            productDiv.appendChild(productImage2);
        }
        productDiv.appendChild(productDescription);
        productDiv.appendChild(addToCartButton);
  
        clothingList.appendChild(productDiv);
    }
  }
  
  for (const key in fillers) {
    if (fillers.hasOwnProperty(key)) {
        const product = fillers[key];
  
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
  
        const productName = document.createElement('h2');
        productName.textContent = product.name;
  
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: ${product.price}`;
  
        const productDescription = document.createElement('p');
        // productDescription.textContent = product.description;
  
        const productImage1 = document.createElement('img');
        productImage1.src = product.image1;
        productImage1.alt = `${product.name} image 1`;
        productImage1.classList.add('product-image');
  
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener('click', () => {
          cartContent.innerHTML = '';
            console.log(`Added to cart`, product);
            totalSum = 0
            cartProductsAdded.push(product)
            for (const key in cartProductsAdded) {
              const product = cartProductsAdded[key];
              console.log(totalSum);
          
              totalSum =totalSum + product.price
              totalPrice.innerHTML = totalSum
  
                console.log(product);
  
              const productDiv = document.createElement('div');
              productDiv.classList.add('product-card-cart');
        
              const productName = document.createElement('h2');
              productName.textContent = product.name;
        
              const productPrice = document.createElement('p');
              productPrice.textContent = `Price: ${product.price}`;
        
              const productDescription = document.createElement('p');
              // productDescription.textContent = product.description;
        
              const productImage1 = document.createElement('img');
              productImage1.src = product.image1;
              productImage1.alt = `${product.name} image 1`;
              productImage1.classList.add('product-image')
        
              // const addToCartButton = document.createElement('button');
              // addToCartButton.textContent = "Add to Cart";
              // addToCartButton.addEventListener('click', () => {
              //     console.log(`Added to cart`, product);
              //     cartProductsAdded.push(product)
              // });
        
              productDiv.appendChild(productName);
              productDiv.appendChild(productPrice);
              productDiv.appendChild(productImage1);
        
              // productDiv.appendChild(productDescription);
              // productDiv.appendChild(addToCartButton);
        
              cartContent.appendChild(productDiv);
          
        }
        });
  
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productImage1);
        if (product.image2) {
            const productImage2 = document.createElement('img');
            productImage2.src = product.image2;
            productImage2.alt = `${product.name} image 2`;
            productDiv.appendChild(productImage2);
        }
        productDiv.appendChild(productDescription);
        productDiv.appendChild(addToCartButton);
  
        fillersList.appendChild(productDiv);
    }
  }

  for (const key in greeneries) {
    if (greeneries.hasOwnProperty(key)) {
        const product = greeneries[key];

        console.log(product);
  
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
  
        const productName = document.createElement('h2');
        productName.textContent = product.name;
  
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: ${product.price}`;
  
        const productDescription = document.createElement('p');
        // productDescription.textContent = product.description;
  
        const productImage1 = document.createElement('img');
        productImage1.src = product.image1;
        productImage1.alt = `${product.name} image 1`;
        productImage1.classList.add('product-image')

  
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.classList.add([''])
        addToCartButton.addEventListener('click', () => {
          cartContent.innerHTML = '';
            console.log(`Added to cart`, product);
            totalSum = 0
            cartProductsAdded.push(product)
            for (const key in cartProductsAdded) {
              const product = cartProductsAdded[key];
              console.log(totalSum);
          
              totalSum =totalSum + product.price
              totalPrice.innerHTML = totalSum
  
                console.log(product);
  
              const productDiv = document.createElement('div');
              productDiv.classList.add('product-card-cart');
        
              const productName = document.createElement('h2');
              productName.textContent = product.name;
        
              const productPrice = document.createElement('p');
              productPrice.textContent = `Price: ${product.price}`;
        
              const productDescription = document.createElement('p');
              // productDescription.textContent = product.description;
        
              const productImage1 = document.createElement('img');
              productImage1.src = product.image1;
              productImage1.alt = `${product.name} image 1`;
              productImage1.classList.add('product-image')
        
              // const addToCartButton = document.createElement('button');
              // addToCartButton.textContent = "Add to Cart";
              // addToCartButton.addEventListener('click', () => {
              //     console.log(`Added to cart`, product);
              //     cartProductsAdded.push(product)
              // });
        
              productDiv.appendChild(productImage1);
              productDiv.appendChild(productName);
              productDiv.appendChild(productPrice);
        
              // productDiv.appendChild(productDescription);
              // productDiv.appendChild(addToCartButton);
        
              cartContent.appendChild(productDiv);
          
        }
        });
  
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productImage1);
        if (product.image2) {
            const productImage2 = document.createElement('img');
            productImage2.src = product.image2;
            productImage2.alt = `${product.name} image 2`;
            productDiv.appendChild(productImage2);
        }
        productDiv.appendChild(productDescription);
        productDiv.appendChild(addToCartButton);
  
        greeneriesList.appendChild(productDiv);
    }
  }
  
  
  const testingBtn = document.getElementById('testingBtn')
  testingBtn.addEventListener('click', () => {
    console.log(cartProductsAdded);
  })
  
  
  
  
  for (const product in cartProductsAdded) {
   
  
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
  
        const productName = document.createElement('h2');
        productName.textContent = product.name;
  
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: ${product.price}`;
  
        const productDescription = document.createElement('p');
        // productDescription.textContent = product.description;
  
        // const productImage1 = document.createElement('img');
        // productImage1.src = product.image1;
        // productImage1.alt = `${product.name} image 1`;
        // productImage1.classList.add('product-image')
  
        // const addToCartButton = document.createElement('button');
        // addToCartButton.textContent = "Add to Cart";
        // addToCartButton.addEventListener('click', () => {
        //     console.log(`Added to cart`, product);
        //     cartProductsAdded.push(product)
        // });
  
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        // productDiv.appendChild(productImage1);
  
        // productDiv.appendChild(productDescription);
        // productDiv.appendChild(addToCartButton);
  
        cartContent.appendChild(productDiv);
    
  }

  