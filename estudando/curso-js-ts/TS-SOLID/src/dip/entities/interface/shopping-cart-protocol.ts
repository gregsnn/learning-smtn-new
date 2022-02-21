import { ShoppingCartItem } from '.';

export interface ShoppingCartProtocol {
  items: Readonly<ShoppingCartItem[]>;
  addItem(item: ShoppingCartItem): void;
  removeItem(item: string): void;
  total(): number;
  totalWithDiscount(): number;
  clear(): void;
  isEmpty(): boolean;
}
