// Select all elements
const cartItems = document.querySelectorAll('.card');
const totalPriceElement = document.querySelector('.total');

// Initialize total price
let totalPrice = 0;

function updateTotalPrice() {
  totalPrice = 0;
  cartItems.forEach(item => {
    const unitPriceElement = item.querySelector('.unit-price');
    const unitPrice = parseFloat(unitPriceElement.textContent.replace('$', ''));
    const quantityElement = item.querySelector('.quantity');
    const quantity = parseInt(quantityElement.textContent);
    totalPrice += unitPrice * quantity;
  });
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to handle quantity change
function handleQuantityChange(event) {
  const quantityElement = event.target.parentNode.querySelector('.quantity');
  const currentQuantity = parseInt(quantityElement.textContent);
  if (event.target.classList.contains('fa-plus-circle')) {
    quantityElement.textContent = currentQuantity + 1;
  } else if (event.target.classList.contains('fa-minus-circle') && currentQuantity > 0) {
    quantityElement.textContent = currentQuantity - 1;
  }
  updateTotalPrice();
}

// Function to handle item deletion
function handleItemDeletion(event) {
  const item = event.target.parentNode.parentNode.parentNode;
  item.remove();
  updateTotalPrice();
}

// Function to handle item liking
function handleItemLiking(event) {
  const likeButton = event.target;
  likeButton.classList.toggle('liked');
}

// Add event listeners
cartItems.forEach(item => {
  item.querySelector('.fa-plus-circle').addEventListener('click', handleQuantityChange);
  item.querySelector('.fa-minus-circle').addEventListener('click', handleQuantityChange);
  item.querySelector('.fa-trash-alt').addEventListener('click', handleItemDeletion);
  item.querySelector('.fa-heart').addEventListener('click', handleItemLiking);
});

// Update total price initially
updateTotalPrice();