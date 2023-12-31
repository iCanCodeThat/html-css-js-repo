//import the cart from cart.js
import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

//Combine all the strings together

let productHTML = '';

//Loop Through the Array
products.forEach((product) => {
  productHTML += `
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
          src="images/ratings/rating-${product.rating.stars * 10
          //  multiply to 10 to have an exact file name of image.
          //  The image was -45 and we have 4.5 in the object above.
          //  using multiplication by 10, it will convert 4.5 to 45 
          //  or a Whole Number.
          }.png"> 
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${formatCurrency(product.priceCents)
        //  dividing a whole number to 100 will give a floating value.
        //  100 cents = 1 dollar
        //  Using toFixed() will display the actual price implemented.
        }
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

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id = "${product.id}">
        Add to Cart
      </button>
    </div>
  `;
      
});


//UPDATE CART QUANTITY FUNCTION
function updateCartQuantity(){
  //  After we update the cart, we will calculate the Total Quantity
  //  Use ForEach() to Loop Through an Array

  //  variable to store the total quantity
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

   //Put the quantity to the page after calculating its Total
   document.querySelector('.js-cart-quantity')
   .innerHTML = cartQuantity;

}



document.querySelector('.js-product-grid')
  .innerHTML = productHTML;

//querySelectorALL - Gives all the list of add to cart buttons on the page.
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      //dataset - property that gives all the data attributes that is attached to the button Add to Cart.
      const productId= button.dataset.productId;

      //we run the function here for add to cart
      addToCart(productId); // we will pass the parameter productId here.

      //we run the function update the cart quantity here.
      updateCartQuantity();
    });
  });


