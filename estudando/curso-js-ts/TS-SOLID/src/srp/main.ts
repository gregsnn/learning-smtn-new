import { Order, Product, ShoppingCart } from './entities';
import { Messaging, Persistency } from './services';

const shoppingCart = new ShoppingCart();
const persistency = new Persistency();
const messagin = new Messaging();
const order = new Order(shoppingCart, messagin, persistency);

shoppingCart.addItem(new Product('Donnie Darko Book', 70, 1));
shoppingCart.addItem(new Product('Pixel', 1, 1));
shoppingCart.addItem(new Product('Demon Slayer Mugen Train', 60.29, 5));

shoppingCart.removeItem('Pixel');

console.log(shoppingCart.total());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
