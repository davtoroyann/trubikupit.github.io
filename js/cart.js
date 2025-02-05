// =========================================================================================================
// cart.html page control
document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || { items: [], totalPrice: 0 };
    const cartItemsContainer = document.querySelector('.body-area');
    const totalPriceElement = document.querySelector('.bottom-area__sum span');

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        cart.totalPrice = 0;

        if (!cart.items || cart.items.length === 0) {
            cartItemsContainer.innerHTML = '<tr><td colspan="5" class="area-cart__empty">Корзина пуста</td></tr>';
            totalPriceElement.textContent = '0';
            return;
        }

        cart.items.forEach(item => {
            const cartItem = document.createElement('tr');
            cartItem.innerHTML = `
                <td class="body-area__product">
                    <div class="body-area__image"><a href="productSingle.html"><img src="${item.image}" alt="Изображение товара" title="${item.name}"></a></div>
                    <div class="body-area__name">${item.name}</div>
                </td>
                <td><span class="body-area__price">${item.price}</span>₽</td>
                <td class="body-area__count count-area">
                    <span class="count-area__minus" data-product-id="${item.id}">−</span>
                    <input type="number" class="count-area__count" value="${item.quantity}" min="1" data-product-id="${item.id}">
                    <span class="count-area__plus" data-product-id="${item.id}">+</span>
                </td>
                <td><span class="body-area__sum">${item.price * item.quantity}</span>₽</td>
                <td><button type="button" class="body-area__delete" data-product-id="${item.id}">Удалить</button></td>
            `;
            cartItemsContainer.appendChild(cartItem);
            cart.totalPrice += item.price * item.quantity;
        });

        totalPriceElement.textContent = cart.totalPrice;
        addEventListenersToCountButtons();
        addEventListenersToDeleteButtons();
    }

    function addEventListenersToCountButtons() {
        document.querySelectorAll('.count-area__plus').forEach(button => {
            button.removeEventListener('click', increaseQuantity);
            button.addEventListener('click', increaseQuantity);
        });

        document.querySelectorAll('.count-area__minus').forEach(button => {
            button.removeEventListener('click', decreaseQuantity);
            button.addEventListener('click', decreaseQuantity);
        });

        document.querySelectorAll('.count-area__count').forEach(input => {
            input.removeEventListener('input', updateQuantity);
            input.addEventListener('input', updateQuantity);
        });
    }

    function addEventListenersToDeleteButtons() {
        document.querySelectorAll('.body-area__delete').forEach(button => {
            button.removeEventListener('click', removeItemFromCart);
            button.addEventListener('click', removeItemFromCart);
        });
    }

    function increaseQuantity(event) {
        const productId = event.target.dataset.productId;
        const item = cart.items.find(item => item.id === productId);
        if (item) {
            item.quantity += 1;
            saveCart();
            updateCart();
            console.log(`Количество увеличено для товара ${productId}. Новое количество: ${item.quantity}`);
        }
    }

    function decreaseQuantity(event) {
        const productId = event.target.dataset.productId;
        const item = cart.items.find(item => item.id === productId);
        if (item && item.quantity > 1) {
            item.quantity -= 1;
            saveCart();
            updateCart();
            console.log(`Количество уменьшено для товара ${productId}. Новое количество: ${item.quantity}`);
        }
    }

    function updateQuantity(event) {
        const productId = event.target.dataset.productId;
        const newQuantity = parseInt(event.target.value);
        const item = cart.items.find(item => item.id === productId);
        if (item && !isNaN(newQuantity) && newQuantity > 0) {
            item.quantity = newQuantity;
            saveCart();
            updateCart();
            console.log(`Количество обновлено для товара ${productId}. Новое количество: ${item.quantity}`);
        }
    }

    function removeItemFromCart(event) {
        const productId = event.target.dataset.productId;
        cart.items = cart.items.filter(item => item.id !== productId);
        saveCart();
        updateCart();
        console.log(`Товар ${productId} удален из корзины.`);
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Корзина сохранена в localStorage.');
    }

    document.querySelector('.cart__remove-all button').addEventListener('click', () => {
        cart.items = [];
        cart.totalPrice = 0;
        saveCart();
        updateCart();
    });

    updateCart();
});
// =========================================================================================================








