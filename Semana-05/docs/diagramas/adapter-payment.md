
```mermaid
classDiagram
    class PaymentAdapter {
        +pay(amount)
    }

    class ExternalPayment {
        +makePayment(amount)
    }

    PaymentAdapter --> ExternalPayment
