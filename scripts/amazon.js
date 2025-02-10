
// the data(products) is coming from data/product.js


// to combine all the html and render

let productsHTML = ''

// loop through the array to generate the html

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
  `;

})

// console.log(productsHTML)

// render on DOM

document.querySelector('.js-products-grid').innerHTML = productsHTML

// select all and get all the add to cart button

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    // declare an item undefined outside scope
    let matchingItem;

    // loop through cart array to see if productId matches existing product(productId)
    cart.forEach((item) => {
      if(productId === item.productId){
        matchingItem = item;
      }
    });
    
    // increase quantity if matchingItem is true
    if(matchingItem) {
      matchingItem.quantity += 1
    } else {
      // pushing a product object to cart
    cart.push({
      productId: productId,
      quantity: 1
    });
    }

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    let cartQty = document.querySelector('.js-cart-quantity')
    cartQty.innerHTML = cartQuantity
  });
})