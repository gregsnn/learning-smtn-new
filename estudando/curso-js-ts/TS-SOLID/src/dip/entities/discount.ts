export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * (this.discount / 100);
  }
}

export class FiftyPercentOff extends Discount {
  protected readonly discount = 50;
}

export class TenPercentOff extends Discount {
  protected readonly discount = 10;
}

export class NoDiscount extends Discount {}
