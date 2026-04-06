
```mermaid
classDiagram
    class Strategy {
        +calculate(price)
    }

    class NormalStrategy
    class DiscountStrategy
    class HighSeasonStrategy

    Strategy <|-- NormalStrategy
    Strategy <|-- DiscountStrategy
    Strategy <|-- HighSeasonStrategy
