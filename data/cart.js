export let cart;

loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));

  if(!cart){
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
  }];
  }
  
}


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}


export function addToCart(productId, selectQty){
  // declare an item undefined outside scope
     let matchingItem;
 
     // loop through cart array to see if productId matches existing product(productId)
     cart.forEach((cartItem) => {
       if(productId === cartItem.productId){
         matchingItem = cartItem;
       }
     });
     
     // increase quantity if matchingItem is true
     if(matchingItem) {
       matchingItem.quantity += 1
     } else {
       // pushing a product object to cart
     cart.push({
       productId: productId,
       quantity: selectQty,
       deliveryOptionId: '1'
     });
     }
     saveToStorage();
 }

//  update cart quantity function
export function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  let cartQty = document.querySelector('.js-cart-quantity')
    cartQty.innerHTML = cartQuantity;
  
}

//  function for removing from cart

export function removeFromCart(productId) {
const newCart = []

cart.forEach((cartItem) => {
  if(cartItem.productId !== productId){
    newCart.push(cartItem)
  }
});

cart = newCart
saveToStorage();
}

// updateQuantity

export function updateQuantity(productId, newQuantity){
  cart.forEach((cartItem) =>{
    if(cartItem.productId === productId){
      cartItem.quantity = newQuantity;
  
    }
   
  })
document.querySelector(`.js-item-quantity-update-${productId}`).innerHTML = newQuantity;
  saveToStorage()
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  // loop through cart array to see if productId matches existing product(productId)
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}
