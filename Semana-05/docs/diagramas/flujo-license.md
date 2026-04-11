
```mermaid
sequenceDiagram
    participant Cliente
    participant Routes
    participant Controller
    participant Service

    Cliente->>Routes: POST /licenses/:propertyId
    Routes->>Controller: create(req, res)
    Controller->>Service: createLicense(data)
    Service-->>Controller: licencia creada
    Controller-->>Cliente: JSON response

