```mermaid
flowchart TD
    A[Database] -->|API Calls| B(Client)
    B --> |Business Logic| C(Service)
    C --> D{Page}
    D --> E[Component]
    D --> F[Component]
    D --> G[Component]
```
