export const cart = [];


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