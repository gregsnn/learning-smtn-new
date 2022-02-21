import { OrderStatus } from './interface';
import { ShoppingCart } from '../entities';
import { Persistency, Messaging } from '../services';
export class Order {
  private _orderStatus: OrderStatus = 'OPEN';

  constructor(
    private readonly _shoppingCart: ShoppingCart,
    private readonly messagin: Messaging,
    private readonly persistency: Persistency,
  ) {}

  checkout(): void {
    if (this._shoppingCart.isEmpty()) {
      throw new Error('Cart is empty');
    }

    this._orderStatus = 'CLOSED';
    this.messagin.sendMessage(
      `Your order, with total of ${this._shoppingCart.total()}, has been placed`,
    );
    this.persistency.saveOrder();
    this._shoppingCart.clear();
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}
