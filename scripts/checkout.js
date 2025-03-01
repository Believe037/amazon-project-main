import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js'

async function loadPage(){
  try{
    await loadProductsFetch();

    await new Promise((resolve)=>{
    loadCart(()=> {
      resolve();
    });
  });

  } catch(error) {
    console.log('unexpected error. Please try again later.')
  }
  
 
  renderOrderSummary();
  renderPaymentSummary();

}

loadPage()

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=> {
      resolve();
    });
  })
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
})
  */

// loadProducts(() =>{
//   renderOrderSummary();
//   renderPaymentSummary();
// });
