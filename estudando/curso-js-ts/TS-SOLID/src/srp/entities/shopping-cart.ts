import { ShoppingCartItem } from './interface';

export class ShoppingCart {
  private readonly _items: ShoppingCartItem[] = [];

  addItem(item: ShoppingCartItem): void {
    this._items.push(item);
  }

  removeItem(item: string): void {
    this._items.splice(
      this._items.findIndex((i) => i.name === item),
      1,
    );
  }

  total(): number {
    return +this._items // the '+' converts to number (as Number would)
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  }

  clear(): void {
    console.log('Cart cleared');
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  get items(): Readonly<ShoppingCartItem[]> {
    return this._items;
  }
}
