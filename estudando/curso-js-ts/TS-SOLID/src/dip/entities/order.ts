import {
  CustomerOrder,
  MessagingProtocol,
  OrderStatus,
  PersistencyProtocol,
  ShoppingCartProtocol,
} from './interface';
export class Order {
  private _orderStatus: OrderStatus = 'OPEN';

  constructor(
    private readonly _shoppingCart: ShoppingCartProtocol,
    private readonly messagin: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
