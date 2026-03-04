# 🎯 Aplicación de Principios SOLID

En esta iteración del proyecto se aplicaron los cinco **principios SOLID**
con el objetivo de lograr una arquitectura limpia, desacoplada y
escalable.

El sistema fue diseñado para gestionar reservas de propiedades
turísticas utilizando separación clara de responsabilidades y
dependencias basadas en abstracciones.

---

# 🟢 1. SRP - Single Responsibility Principle

(Principio de Responsabilidad Única)

Cada clase del sistema tiene una única responsabilidad y una única razón
de cambio.

## 📌 Aplicación en el proyecto


| Responsabilidad                   | Clase                 | Razón de Cambio                     |
| --------------------------------  | --------------------- | ----------------------------------- |
| Representa datos de reserva       | `reserva.js`          | Cambio en la estructura del modelo  |
| Representar datos de propiedad    | `propiedad.js`        | Cambios en atributos del dominio    |
| Validar reglas de negocio         | `reserva-validator.js`| Nuevas reglas o restricciones       |
| Persistencia de datos             | `memory-repository.js`| Cambio de motor de base de datos    |
| Coordinación del flujo de negocio | `reserva-service.js`  | Cambios en el proceso de creación   |
|                                   |                       |                                     |
                               
---

## 📌 Ejemplo Aplicado

* ```Reserva``` solo representa datos.
* ```ReservaValidator``` solo valida.
* ```MemoryRepository``` solo guarda.
* ```ReservaService``` coordina el proceso.

Esto evita clases con múltiples responsabilidades (God Classes) y facilita el mantenimiento.


# 🟢 2. OCP - Open Closed Principle

(Abierto para extensión, cerrado para modificación)

El sistema permite agregar nuevas funcionalidades sin modificar el código existente.

Se creó una abstracción `Repository` en:

```Javascript
src/domain/interfaces/repository.js
```

Y una implementación concreta:

```JavaScript
MemoryRepository
```

Si en el futuro se requiere usar:

-   ```PostgreSQLRepository```
-   ```MongoRepository```

Solo se crea una nueva clase que extienda `Repository`, sin modificar
`ReservaService`.

---

# 🟢 3. LSP - Liskov Substitution Principle

(Principio de Sustitución de Liskov)

Las clases derivadas pueden sustituir a su clase base sin alterar el comportamiento del sistema.

## 📌 Aplicación en el proyecto
MemoryRepository extiende Repository y respeta su contrato:

```javascript
-   save()
-   findAll()
```

`ReservaService` trabaja con la abstracción `Repository`, por lo que
cualquier implementación que cumpla ese contrato puede sustituirse sin
afectar el funcionamiento.

---

# 🟢 4. ISP - Interface Segregation Principle

(Principio de Segregación de Interfaces)

La interfaz `Repository` contiene únicamente los métodos necesarios:

```javascript
-   save()
-   findAll()
```
* No se creó una interfaz con múltiples métodos innecesarios.
* Cada componente implementa solo lo que realmente necesita.
* Esto reduce dependencias innecesarias y mejora claridad estructural.

---

# 🟢 5. DIP --- Dependency Inversion Principle

(Principio de Inversión de Dependencias)
Los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones.

## 📌 Aplicación en el proyecto
`ReservaService` no instancia directamente `MemoryRepository`.

Recibe sus dependencias mediante el constructor:
```javascript
constructor(repository, validator) { this.repository = repository;
this.validator = validator; }
```

El servicio depende de abstracciones y no de implementaciones concretas.
Esto significa que:
* El servicio depende de la abstracción Repository
* No depende de una implementación concreta

Si se cambia la base de datos, no es necesario modificar el servicio.
Esto reduce el acoplamiento y mejora la flexibilidad del sistema.

---
# 📊 Tabla de Cumplimiento SOLID

| Principio |          ¿Dónde se aplica en mi dominio?                               | Clase/Archivo                                                            |  ✔ |
|-----------|------------------------------------------------------------------------|--------------------------------------------------------------------------|-----|
| **SRP**   |Cada clase tiene una única responsabilidad:entidad, validación, etc...  |`reserva.js, propiedad.js, reserva-validator.js, memory-repository.js,etc`| ✅ |
| **OCP**   |Se puede cambiar el tipo de repositorio (ej: base de datos real)        |`repository.js, memory-repository.js`                                     | ✅    
| **LSP**   |MemoryRepository puede sustituir a Repository sin afectar funcionamiento|`repository.js, memory-repository.js`                                     |      |                            |             
|     **ISP**     |                                                                        |                                                   |    
|     **DIP**     |                               
| OCP | Se puede cambiar el tipo de repositorio (ej: base de datos real) sin modificar el servicio | repository.js, memory-repository.js | ✅ |
| LSP | MemoryRepository puede sustituir a Repository sin afectar el funcionamiento del sistema | repository.js, memory-repository.js | ✅ |
| ISP | La interfaz Repository solo define los métodos necesarios (save, findAll) | repository.js | ✅ |
| DIP | ReservaService depende de la abstracción Repository y no de una implementación concreta | reserva-service.js | ✅ |




---

# 🎯 Beneficios Arquitectónicos

-   ✅Alta cohesión
-   ✅Bajo acoplamiento
-   ✅Código modular
-   ✅Escalabilidad futura
-   ✅Facilidad de mantenimiento
-   ✅Posibilidad de migrar a microservicios

---

# 🎯 Conclusión

La aplicación de los principios SOLID permitió estructurar la Plataforma
de Alquiler Vacacional de manera profesional, organizada y escalable.

El sistema es:

* Extensible
* Mantenible
* Flexible ante cambios.

Esta implementación demuestra comprensión práctica de diseño orientado a objetos y buenas prácticas de arquitectura de software.
