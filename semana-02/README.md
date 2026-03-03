#  🎯Descripción Del Proyecto

Este proyecto corresponde a la segunda iteración del sistema **Plataforma de Alquiler Vacacional**, desarrollado en **JavaScript ES2023**.

El sistema permite gestionar reservas de propiedades turísticas dentro de una ciudad, garantizando una arquitectura limpia mediante la aplicación de los **principios SOLID**.

El objetivo principal es demostrar separación de responsabilidades, bajo acoplamiento y alta cohesión en el diseño del sistema.

---

#  🎯Problema Que Resuelve

Muchas ciudades tienen dificultades para controlar el alquiler turístico porque:

* No todas las propiedades tienen licencia
* Se exceden los días permitidos de alquiler
* No existe seguimiento de incidencias
* Falta trazabilidad de las reservas

Este proyecto implementa una solución modular que permite:

* Crear reservas
* Validar reglas básicas del negocio
* Persistir información en memoria
* Aplicar arquitectura limpia mediante **SOLID**

---

# 🎯Tecnologías Utilizadas

El proyecto está construido con las siguientes tecnologías:

```
* **Node.js**
* **JavaScript ES2023**
* Arquitectura basada en **principios SOLID**
* Persistencia en memoria mediante **Memory Repository**
* Estructura modular por capas
```
---

# 🎯Arquitectura del Proyecto

El sistema está organizado por capas, separando claramente responsabilidades:

1. ### 📂Domain
   ✅Contiene las entidades del negocio y las interfaces.
   ```
   * propiedad.js
   * reserva.js
   * repository.js (abstracción)
   ```

3. ### 📂Services
   ✅Contiene la lógica de negocio.
   ```
   reserva-service.js
   ```

5. ### 📂Repositories
   ✅Se encarga de la persistencia de datos.
   ```
   memory-repository.js
   ```

7. ### 📂Validators
   ✅Se encargan de validar las reglas del sistema.
   ```
   reserva-validator.js
   ```

9. ### 📂index.js
   ✅Punto de entrada de la aplicación.

---

# 🎯Estructura del Proyecto

```
plataforma-alquiler-vacacional/

README.md
SOLID-APLICADO.md
package.json

src/
 ├── domain/
 │    ├── entities/
 │    │     ├── propiedad.js
 │    │     └── reserva.js
 │    └── interfaces/
 │          └── repository.js
 │
 ├── repositories/
 │     └── memory-repository.js
 │
 ├── services/
 │     └── reserva-service.js
 │
 ├── validators/
 │     └── reserva-validator.js
 │
 └── index.js
```

---

# 🎯Instalación del Proyecto

Sigue estos pasos para ejecutar el proyecto en tu computadora.

### 1. Clonar el Repositorio

 ``` git clone URL_DEL_REPOSITORIO ```

### 2. Entrar a la Carpeta del Proyecto

 ``` cd plataforma-alquiler-vacacional ```

### 3. Instalar Dependencias

 ``` pnpm install ```

Si no tienes ``` pnpm ``` instalado puedes instalarlo con:

 ``` npm install -g pnpm ```

---

# 🎯Ejecución del Proyecto

* Para iniciar el sistema ejecuta:

 ``` node src/index.js ```

* El sistema creará una reserva de ejemplo y mostrará el resultado en la consola.

Ejemplo de salida:
```
[
Reserva {
   id: 1,
   propiedadId: 101,
   huesped: "Laura",
   estado: "PENDIENTE"
}
]
```
---

# 🎯Funcionamiento General

El flujo del sistema es el siguiente:

 1. Se reciben los datos de una reserva
 2. Se validan las reglas del negocio (```ReservaValidator```)
 3. Se crea la entidad de ```Reserva```
 4. Se guarda la información en el ```MemoryRepository```
 5. Se devuelve el resultado

Esto se realiza utilizando ``` inyección de dependencias ``` para desacoplar los componentes.

---

# 🎯Principios SOLID Aplicados

### 🟢SRP — Single Responsibility Principle
Cada clase tiene una única responsabilidad:
* ```Reserva``` → Representa datos del dominio
* ```ReservaValidator``` → Valida reglas
* ```MemoryRepository``` → Guarda datos
* ```ReservaService``` → Gestiona la lógica de negocio

---

### 🟢OCP — Open Closed Principle

El sistema puede extender funcionalidades sin modificar el código existente.

Ejemplo: 
Se puede crear una nueva implementación como:

* ```PostgreSQLRepository```
* ```MongoRepository```

Sin modificar ```ReservaService```, ya que este depende de la abstracción ```Repository```.

---

### 🟢LSP — Liskov Substitution Principle

```MemoryRepository``` extiende ```Repository``` y puede sustituirlo sin afectar el funcionamiento del sistema.

Cualquier implementación que respete el contrato de ```Repository``` funcionará correctamente.

---

### 🟢ISP — Interface Segregation Principle

La interfaz ```Repository``` contiene únicamente los métodos necesarios (```save```, ```findAll```), evitando métodos innecesarios o dependencias forzadas.

---

### 🟢DIP — Dependency Inversion Principle

```ReservaService``` no instancia directamente ```MemoryRepository```.

En su lugar, recibe las dependencias por constructor:

```JavaScript
constructor(repository, validator) {
  this.repository = repository;
  this.validator = validator;
}
```
---

# 🎯Documentación Técnica

Para ver la explicación completa de cómo se aplican los principios SOLID en el proyecto, revisar el archivo:

```SOLID-APLICADO.md```

---

# 🎯Posibles Mejoras Futuras

* Implementar base de datos real
* Crear API REST
* Agregar autenticación
* Control de licencias más avanzado
* Implementar microservicios

---
**Proyecto académico desarrollado del Bootcamp de Arquitectura de Software**
*SENA* – Tecnología en Análisis y Desarrollo de Software
