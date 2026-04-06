

## Observer
```mermaid
classDiagram
BookingService --> EventBus
EventBus --> EmailObserver
EventBus --> LogObserver
