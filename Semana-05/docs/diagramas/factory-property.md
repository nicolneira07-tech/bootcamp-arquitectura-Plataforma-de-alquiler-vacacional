
```mermaid
classDiagram
    class PropertyFactory {
        +create(type, data)
    }

    class Property {
        +id
        +title
        +location
        +pricePerNight
        +type
    }

    PropertyFactory --> Property
