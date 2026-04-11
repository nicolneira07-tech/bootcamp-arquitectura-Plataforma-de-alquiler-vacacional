
```mermaid
sequenceDiagram
    participant Cliente
    participant Routes
    participant Controller
    participant Service

    Cliente->>Routes: POST /incidents/:bookingId
    Routes->>Controller: create(req, res)
    Controller->>Service: createIncident(data)
    Service-->>Controller: incidente creado
    Controller-->>Cliente: JSON response
