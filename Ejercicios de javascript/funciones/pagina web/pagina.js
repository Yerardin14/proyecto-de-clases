
        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Search bar toggle
        document.getElementById('search-btn').addEventListener('click', function() {
            document.getElementById('search-bar').classList.toggle('hidden');
        });

        // Cart functionality
        let cartCount = 0;
        const cartIcon = document.getElementById('cart-icon');
        const cartCountElement = document.querySelector('.cart-count');
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartOverlay = document.getElementById('cart-overlay');
        const closeCartBtn = document.getElementById('close-cart');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartSubtotal = document.getElementById('cart-subtotal');

        // Add to cart buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                cartCount++;
                cartCountElement.textContent = cartCount;
                cartCountElement.classList.remove('hidden');
                
                // In a real app, you would add the actual product to the cart
                // Here we're just simulating it with a sample item
                if (cartCount === 1) {
                    cartItemsContainer.innerHTML = `
                        <div class="flex items-center py-4 border-b">
                            <div class="w-20 h-20 bg-gray-100 rounded overflow-hidden mr-4">
                                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80" alt="Product" class="w-full h-full object-cover">
                            </div>
                            <div class="flex-grow">
                                <h4 class="font-medium">Bolso Elegance</h4>
                                <p class="text-gray-500 text-sm">Color negro</p>
                                <div class="flex justify-between items-center mt-1">
                                    <span class="font-medium">$239.99</span>
                                    <div class="flex items-center">
                                        <button class="text-gray-500 hover:text-purple-600 px-2">
                                            <i class="fas fa-minus text-xs"></i>
                                        </button>
                                        <span class="mx-2">1</span>
                                        <button class="text-gray-500 hover:text-purple-600 px-2">
                                            <i class="fas fa-plus text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button class="text-gray-400 hover:text-red-500 ml-4">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `;
                    cartSubtotal.textContent = '$239.99';
                }
            });
        });

        // Open cart
        cartIcon.addEventListener('click', function() {
            cartSidebar.classList.remove('translate-x-full');
            cartSidebar.classList.add('translate-x-0');
            cartOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });

        // Close cart
        closeCartBtn.addEventListener('click', function() {
            cartSidebar.classList.remove('translate-x-0');
            cartSidebar.classList.add('translate-x-full');
            cartOverlay.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        // Close cart when clicking overlay
        cartOverlay.addEventListener('click', function() {
            cartSidebar.classList.remove('translate-x-0');
            cartSidebar.classList.add('translate-x-full');
            cartOverlay.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
