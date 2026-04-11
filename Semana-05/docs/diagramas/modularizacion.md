
```mermaid
flowchart TD
    App[Aplicación]

    App --> Bookings[Módulo Bookings]
    App --> Licenses[Módulo Licenses]
    App --> Incidents[Módulo Incidents]

    Bookings --> BController[Booking Controller]
    Bookings --> BService[Booking Service]
    Bookings --> BRoutes[Booking Routes]

    Licenses --> LController[License Controller]
    Licenses --> LService[License Service]
    Licenses --> LRoutes[License Routes]

    Incidents --> IController[Incident Controller]
    Incidents --> IService[Incident Service]
    Incidents --> IRoutes[Incident Routes]
