
```mermaid
flowchart TD
    Cliente[Cliente / Frontend] --> Routes[Routes]
    Routes --> Controllers[Controllers]
    Controllers --> Services[Services]
    Services --> Data[In-Memory Storage]

    Data --> Services
    Services --> Controllers
    Controllers --> Cliente
