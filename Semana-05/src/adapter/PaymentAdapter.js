
class ExternalPayment {
  makePayment(amount) {
    return `Pago externo: ${amount}`;
  }
}

export class PaymentAdapter {
  constructor() {
    this.external = new ExternalPayment();
  }

  pay(amount) {
    return this.external.makePayment(amount);
  }
}
