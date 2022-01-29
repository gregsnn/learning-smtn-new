export class Carro {
  private readonly _motor: Motor = new Motor();

  ligar(): void {
    this._motor.ligar();
  }

  acelelarar(): void {
    this._motor.acelelarar();
  }

  frear(): void {
    this._motor.frear();
  }

  desligar(): void {
    this._motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor ligado');
  }

  acelelarar(): void {
    console.log('Motor acelerando');
  }

  frear(): void {
    console.log('Motor freando');
  }

  desligar(): void {
    console.log('Motor desligado');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelelarar();
carro.frear();
carro.desligar();
