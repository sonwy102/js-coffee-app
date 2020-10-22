"use strict";

// Add itemName into the cart-items table
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

// Reset cart total to 0 and remove all items in cart
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

// Update cart total when user adds new item to cart
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

// Update total number of coffees sold
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

// Set order progress and order status message
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


// Event handlers

// When user clicks add-to-cart button, add item to cart and update cart total
$('.add-to-order').on('click', () => {
  const itemName = $("#menu .item-name").html();
  const price = Number($("#menu .item-price").html());
  addItemToCart(itemName);
  incrementCartTotal(price);
})

// When user clicks place-order button, update # coffees sold and reset cart
$('#place-order').on('click', () => {
  const numItems = $("#cart-items").children().length;
  incrementCoffeeSold(numItems);
  resetCart();
})
