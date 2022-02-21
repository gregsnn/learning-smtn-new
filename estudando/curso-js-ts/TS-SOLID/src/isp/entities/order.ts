import { CustomerOrder, OrderStatus } from './interface';
import { ShoppingCart } from '.';
import { Persistency, Messaging } from '../services';
export class Order {
  private _orderStatus: OrderStatus = 'OPEN';

  constructor(
    private readonly _shoppingCart: ShoppingCart,
    private readonly messagin: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  checkout(): void {
    if (this._shoppingCart.isEmpty()) {
      throw new Error('Cart is empty');
    }

    this._orderStatus = 'CLOSED';
    this.messagin.sendMessage(
      `Your order, with total of ${this._shoppingCart.totalWithDiscount()}, has been placed`,
    );
    this.persistency.saveOrder();
    this._shoppingCart.clear();
    console.log(
      `Order placed by ${this.customer.getName()} with id ${this.customer.getIDN()}`,
    );
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}
