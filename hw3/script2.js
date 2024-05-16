class Order {
  #orderNumber;
  constructor(orderNumber) {
    this.#orderNumber = orderNumber;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    return this.products.reduce((total, el) => total + el.price, 0);
  }

  getOrderNumber() {
    return this.#orderNumber;
  }
}

class Product {
  #name;
  #price;

  constructor(name, price) {
    this.#name = name;
    this.#price = price;
  }

  getName() {
    return this.#name;
  }

  getPrice() {
    return this.#price;
  }
}

const order = new Order(12345);

const product1 = new Product('Phone', 500);
order.addProduct(product1);

const product2 = new Product('Headphones', 100);
order.addProduct(product2);

console.log(order.getTotalPrice());