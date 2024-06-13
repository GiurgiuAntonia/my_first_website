const clothings = {
    clothing1: {
        name: "Fairy boots",
        price: 70,
        image1: "images/clothing-1.jpg",
        description: "Hand painted boots with leather paint, size 37. "
      },
}
  

const clothingList = document.getElementById('clothing-list');


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
  
        clothingList.appendChild(productDiv);
    }
  }