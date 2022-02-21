/*
  modulos de alto nivel nao devemm depender de modulos de baixo nivel, ambos devem depender de abstracoes
 */
import {
  // FiftyPercentOff,
  // NoDiscount,
  Order,
  Product,
  ShoppingCart,
  TenPercentOff,
  EnterpriseCustomer,
  // IndividualCustomer,
} from './entities';
import { MessagingProtocol } from './entities/interface';
import { Messaging, Persistency } from './services';

// const zeroOff = new NoDiscount();
const tenOff = new TenPercentOff();
// const fiftyOff = new FiftyPercentOff();
const shoppingCart = new ShoppingCart(tenOff);
const persistency = new Persistency();
const messagin = new Messaging();

// const individualCust = new IndividualCustomer(
//   'Joao',
//   'Da Silva',
//   '123.123.123-12',
// );
const enterpriseCust = new EnterpriseCustomer('Empresa', '123.123.123/0001-11');

const order = new Order(shoppingCart, messagin, persistency, enterpriseCust);

shoppingCart.addItem(new Product('Donnie Darko Book', 70, 1));
shoppingCart.addItem(new Product('Pixel', 1, 1));
shoppingCart.addItem(new Product('Demon Slayer Mugen Train', 60.29, 5));

shoppingCart.removeItem('Pixel');

console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
