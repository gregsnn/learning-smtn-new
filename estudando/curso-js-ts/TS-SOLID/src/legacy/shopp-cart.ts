type ShoppingCartItem = { name: string; price: number; quantity: number };
type OrderStatus = 'OPEN' | 'CLOSED';

export class ShoppingCartLegacy {
  private readonly _items: ShoppingCartItem[] = [];
  private _orderStatus: OrderStatus = 'OPEN';

  addItem(item: ShoppingCartItem): void {
    this._items.push(item);
  }

  removeItem(item: string): void {
    if (this._items.length > 0) {
      this._items.splice(
        this._items.findIndex((i) => i.name === item),
        1,
      );
    }
  }

  total(): number {
    return +this._items // the '+' converts to number (as Number would)
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      throw new Error('Cart is empty');
    }

    this._orderStatus = 'CLOSED';
    this.sendMessage(
      `Your order, with total of ${this.total()}, has been placed`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log(`Message: ${message}`);
  }

  saveOrder(): void {
    console.log('Order saved');
  }

  clear(): void {
    console.log('Cart cleared');
    this._items.length = 0;
  }

  get items(): Readonly<ShoppingCartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Apple', price: 1.99, quantity: 2 });
shoppingCart.addItem({ name: 'Orange', price: 2.59, quantity: 3 });
shoppingCart.addItem({ name: 'Banana', price: 0.99, quantity: 1 });

shoppingCart.removeItem('Apple');
console.log(shoppingCart.orderStatus);

shoppingCart.checkout();

console.log(shoppingCart.orderStatus);
