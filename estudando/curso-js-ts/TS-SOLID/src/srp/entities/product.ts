import { ShoppingCartItem } from '../entities/interface';

export class Product implements ShoppingCartItem {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
  ) {}
}
