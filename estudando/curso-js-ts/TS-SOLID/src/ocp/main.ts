/* devem estar abertos para extensao mas fechados para modifcacao */
import {
  FiftyPercentOff,
  NoDiscount,
  Order,
  Product,
  ShoppingCart,
  TenPercentOff,
} from './entities';
import { Messaging, Persistency } from './services';

const zeroOff = new NoDiscount();
const tenOff = new TenPercentOff();
const fiftyOff = new FiftyPercentOff();
const shoppingCart = new ShoppingCart(tenOff);
const persistency = new Persistency();
const messagin = new Messaging();
const order = new Order(shoppingCart, messagin, persistency);

shoppingCart.addItem(new Product('Donnie Darko Book', 70, 1));
shoppingCart.addItem(new Product('Pixel', 1, 1));
shoppingCart.addItem(new Product('Demon Slayer Mugen Train', 60.29, 5));

shoppingCart.removeItem('Pixel');

console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
