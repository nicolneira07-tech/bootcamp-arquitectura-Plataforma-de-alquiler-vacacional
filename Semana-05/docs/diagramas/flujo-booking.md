
```mermaid
sequenceDiagram
    participant Cliente
    participant Routes
    participant Controller
    participant Service

    Cliente->>Routes: POST /bookings
    Routes->>Controller: create(req, res)
    Controller->>Service: createBooking(data)
    Service-->>Controller: booking creado
    Controller-->>Cliente: JSON response