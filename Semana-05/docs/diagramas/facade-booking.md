
```mermaid
classDiagram
    class BookingFacade {
        +createBooking(data)
    }

    class PropertyModel
    class PaymentAdapter
    class EventBus

    BookingFacade --> PropertyModel
    BookingFacade --> PaymentAdapter
    BookingFacade --> EventBus
