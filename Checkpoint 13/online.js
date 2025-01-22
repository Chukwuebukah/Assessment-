class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    toString() {
        return `${this.name} - $${this.price}`;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    totalPrice() {
        return this.product.price * this.quantity;
    }

    toString() {
        return `${this.product.toString()} x ${this.quantity} = $${this.totalPrice()}`;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.totalPrice(), 0);
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    displayCart() {
        console.log("Cart items:");
        this.items.forEach(item => {
            console.log(item.toString());
        });
        console.log(`Total price: $${this.getTotal()}`);
    }

    updateTotalElement() {
        document.querySelector(".total").textContent = `$${this.getTotal()}`;
    }
}

const basket = new Product(1, "Basket", 100);
const socks = new Product(2, "Socks", 20);
const bag = new Product(3, "Bag", 50);

const cart = new ShoppingCart();

cart.addItem(basket, 2);  
cart.addItem(socks, 3);   
cart.addItem(bag, 1);     

cart.displayCart();  

cart.removeItem(basket.id);  

cart.displayCart();  

document.querySelectorAll('.fa-plus-circle').forEach(button => {
  button.addEventListener('click', () => {
    const productElement = button.closest('.card-body');
    const productName = productElement.querySelector('.card-title').textContent;
    const productPrice = parseFloat(productElement.querySelector('.unit-price').textContent.replace(' $', ''));

    const product = new Product(Date.now(), productName, productPrice);  
    cart.addItem(product, 1);  

    cart.updateTotalElement();
  });
});