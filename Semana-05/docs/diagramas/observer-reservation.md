
```mermaid
classDiagram
    class BookingService {
        +create()
    }

    class EventBus {
        +on(event, handler)
        +emit(event, data)
    }

    class EmailObserver
    class LogObserver

    BookingService --> EventBus
    EventBus --> EmailObserver
    EventBus --> LogObserver
