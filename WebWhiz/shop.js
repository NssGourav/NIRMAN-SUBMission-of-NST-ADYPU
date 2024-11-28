let cartCount = 0;

// Function to update the cart count
function addToCart() {
    cartCount++;
    document.getElementById("cart-link").innerText = `CART (${cartCount})`;
}

// Function to open the product modal
function openModal(title, imgUrl, description, price) {
    document.getElementById("modal-product-title").innerText = title;
    document.getElementById("modal-product-image").src = imgUrl;
    document.getElementById("modal-product-description").innerText = description;
    document.getElementById("modal-product-price").innerText = `$${price}`;
    document.getElementById("product-modal").style.display = 'flex';
}

// Function to close the product modal
function closeModal() {
    document.getElementById("product-modal").style.display = 'none';
}

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70, // Offset to account for navbar height
            behavior: 'smooth' // Smooth scroll
        });
    });
});

// Optionally, you can add other JS functionalities like sorting and filtering products
// For example, if you want to sort products by price:

// Filter and Sort Products (optional if needed)
document.getElementById('category-filter')?.addEventListener('change', filterProducts);
document.getElementById('price-sort')?.addEventListener('change', sortProducts);

// Function to filter products by category
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Function to sort products by price (ascending or descending)
function sortProducts() {
    const sortOption = document.getElementById('price-sort').value;
    const products = Array.from(document.querySelectorAll('.product-card'));
    let sortedProducts;

    if (sortOption === 'low-to-high') {
        sortedProducts = products.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
    } else if (sortOption === 'high-to-low') {
        sortedProducts = products.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
    } else {
        return; // Default sorting, no action
    }

    const productContainer = document.querySelector('.product-cards');
    productContainer.innerHTML = '';
    sortedProducts.forEach(product => productContainer.appendChild(product));
}
