export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
},
{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];


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
       quantity: selectQty
     });
     }
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
}