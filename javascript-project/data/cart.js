//export the cart variable to make it accessible outside cart.js
export const cart = [];

//ADD TO CART FUNCTION
export function addToCart(productId){ //when we call this function
  //create a variable to save the item.
  //if we find a matching item, it will save it inside this variable.
  let matchingItem;
  
  //  1. to check if the product name is already in the array
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchingItem = cartItem; //this is how we figure out if the product is in the cart.
    }
  });

  //  2. if the product is inside the cart, increase the quantity by 1.
  if(matchingItem){
    matchingItem.quantity ++;
  } else { // if we did not find any matching item then...
    //  3. If the product is not in the cart we will add it to the cart.
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}