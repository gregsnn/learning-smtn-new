export class Calculadora {
  constructor(public number: number) {}

  sum(n: number): this {
    this.number += n;
    return this;
  }
  sub(n: number): this {
    this.number -= n;
    return this;
  }
  mult(n: number): this {
    this.number *= n;
    return this;
  }
  div(n: number): this {
    this.number /= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  sqrt(): this {
    this.number = Math.sqrt(this.number);
    return this;
  }
  pow(n: number): this {
    this.number = Math.pow(this.number, n);
    return this;
  }
}

const calc = new SubCalculadora(10);
calc.sum(5).mult(2).div(3).sub(2).pow(2).sqrt();
console.log(calc);

// builder - GoF
export class RequestBuilder {
  private method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET';
  private url: string | null = null;

  setMethod(method: 'GET' | 'POST'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const req = new RequestBuilder(); // builder
req.setMethod('GET').setUrl('http://www.google.com').send();
