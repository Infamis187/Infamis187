// Shopify Store JavaScript
document.addEventListener('DOMContentLoaded', function() {
  console.log('Shopify store loaded!');

  // Add to cart functionality
  const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');

  addToCartForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        alert('Product added to cart!');
        updateCartCount();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error adding the product to cart');
      });
    });
  });

  // Update cart count
  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        console.log('Cart items:', cart.item_count);
      });
  }
});
