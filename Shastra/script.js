document.addEventListener("DOMContentLoaded", function() {
  // Get all product images and descriptions
  const productImages = document.querySelectorAll('.product-image');
  const productDescriptions = document.querySelectorAll('.product-description');

  // Function to apply fade-in and slide-in effects
  function applyAnimations() {
      productImages.forEach((image, index) => {
          const description = productDescriptions[index];
          // Initially hide the elements
          image.classList.add('fade-out', 'slide-in');
          description.classList.add('fade-out', 'slide-in');

          // Use setTimeout to create a delay for the fade-in effect
          setTimeout(() => {
              image.classList.remove('fade-out');
              description.classList.remove('fade-out');
              image.classList.add('fade-in', 'slide-in-active');
              description.classList.add('fade-in', 'slide-in-active');
          }, 100 + index * 100); // Staggered delay based on index
      });
  }

  // Apply animations on page load
  applyAnimations();

  // Add zoom-in effect on hover using event delegation
  document.addEventListener('mouseover', function(e) {
      if (e.target.classList.contains('product-image')) {
          e.target.classList.add('zoom-in');
      }
  });

  document.addEventListener('mouseout', function(e) {
      if (e.target.classList.contains('product-image')) {
          e.target.classList.remove('zoom-in');
      }
  });
});