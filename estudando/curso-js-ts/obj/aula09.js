// polimorfismo

// -> SuperCLass
function Conta (agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.saque = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`Ag/C.: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`);
};


function ContaCorrente (agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.saque = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};


function ContaPoupanca (agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp = new ContaPoupanca(12, 33, 0)
cp.depositar(10)
cp.saque(10)