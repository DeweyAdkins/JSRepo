function initializeCart() {
    if (!localStorage.getItem('cart')) {
      const emptyCart = [];
      localStorage.setItem('cart', JSON.stringify(emptyCart));
    }
  }
  
  function additem(item) { 
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function removeItem(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const index = cart.findIndex(item => item.id === itemId);
    if (index !== -1) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
    
    console.log(cart);
  }
  
  initializeCart();
  
  document.getElementById('addItemForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const item = {
      id: Date.now(),
      name: document.getElementById('itemName').value,
      price: document.getElementById('itemPrice').value,
      quantity: 1
    };
    additem(item);
    displayCart();
  });
  
  document.getElementById('displayCartButton').addEventListener('click', displayCart);