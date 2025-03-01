class Cart{
  cartItems;
  #localStorageKey;

  constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
  
    if(!this.cartItems){
    this.cartItems = [{
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

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems))
  }

  addToCart(productId, selectQty){
    // declare an item undefined outside scope
       let matchingItem;
   
       // loop through cart array to see if productId matches existing product(productId)
       this.cartItems.forEach((cartItem) => {
         if(productId === cartItem.productId){
           matchingItem = cartItem;
         }
       });
       
       // increase quantity if matchingItem is true
       if(matchingItem) {
         matchingItem.quantity += 1
       } else {
         // pushing a product object to cart
       this.cartItems.push({
         productId: productId,
         quantity: selectQty,
         deliveryOptionId: '1'
       });
       }
       this.saveToStorage();
   }

   //  update cart quantity function
  updateCartQuantity(){
        let cartQuantity = 0;
        this.cartItems.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
        });
      
        let cartQty = document.querySelector('.js-cart-quantity')
          cartQty.innerHTML = cartQuantity;
        
      }

  removeFromCart(productId) {
        const newCart = []
        
        this.cartItems.forEach((cartItem) => {
          if(cartItem.productId !== productId){
            newCart.push(cartItem)
          }
        });
        
        this.cartItems = newCart
        this.saveToStorage();
        }

  updateQuantity(productId, newQuantity){
          this.cartItems.forEach((cartItem) =>{
            if(cartItem.productId === productId){
              cartItem.quantity = newQuantity;
          
            }
           
          })
        document.querySelector(`.js-item-quantity-update-${productId}`).innerHTML = newQuantity;
          this.saveToStorage()
        }

  updateDeliveryOption(productId, deliveryOptionId) {
          let matchingItem;
          // loop through cart array to see if productId matches existing product(productId)
          this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){
              matchingItem = cartItem;
            }
          });
        
          matchingItem.deliveryOptionId = deliveryOptionId;
          this.saveToStorage();
        }
}



const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart)
console.log(businessCart instanceof Cart)



