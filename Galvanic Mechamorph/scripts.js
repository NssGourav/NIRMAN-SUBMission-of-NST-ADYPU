document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = [];
  
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const productName = event.target.parentNode.querySelector('h3').innerText;
        cartItems.push(productName);
        alert(`${productName} has been added to your cart!`);
      });
    });
  });