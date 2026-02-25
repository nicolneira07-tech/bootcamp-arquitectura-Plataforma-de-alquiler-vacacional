#  🎯Descripción Del Proyecto

Este proyecto de **Plataforma de Alquiler Vacacional** desarrollada en JavaScript que permite gestionar propiedades destinadas al alquiler turístico, controlar reservas y verificar licencias de funcionamiento.El sistema surge como solución a la necesidad de regular y organizar el alquiler de viviendas turísticas dentro de una ciudad.

La plataforma permite:

* Registrar propiedades de alquiler
* Verificar licencias de funcionamiento
* Gestionar reservas de huéspedes
* Controlar límites de días de alquiler
* Registrar incidencias
* Facilitar la supervisión por parte de autoridades

Este tipo de sistemas es utilizado por plataformas internacionales como Airbnb, pero en este proyecto se enfoca principalmente en **la regulación y control de documentación**.

---

#  🎯Problema Que Resuelve

Muchas ciudades tienen dificultades para controlar el alquiler turístico porque:

* No todas las propiedades tienen licencia
* Se exceden los días permitidos de alquiler
* No existe seguimiento de incidencias
* Falta trazabilidad de las reservas

Este sistema permite tener un **control centralizado de la información**, ayudando a turistas, anfitriones, vecinos y autoridades.

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

El sistema está organizado siguiendo una arquitectura simple por capas:

1. ### Domain
   ✅Contiene las entidades del negocio y las interfaces.

2. ### Services
   ✅Contiene la lógica de negocio.

3. ### Repositories
   ✅Se encarga de la persistencia de datos.

4. ### Validators
   ✅Se encargan de validar las reglas del sistema.

5. ### index.js
   ✅Punto de entrada de la aplicación.

---

# 🎯Estructura del Proyecto

```
plataforma-alquiler-vacacional/

README.md
SOLID-APLICADO.md
package.json

src/

domain/
entities/
propiedad.js
reserva.js
licencia.js

interfaces/
repository.js
notification-service.js

repositories/
memory-repository.js

services/
reserva-service.js
licencia-service.js

validators/
reserva-validator.js

index.js
```

---

# 🎯Instalación del Proyecto

Sigue estos pasos para ejecutar el proyecto en tu computadora.

### 1. Clonar el Repositorio

- ``` git clone URL_DEL_REPOSITORIO ```

### 2. Entrar a la Carpeta del Proyecto

- ``` cd plataforma-alquiler-vacacional ```

### 3. Instalar Dependencias

- ``` pnpm install ```

Si no tienes ``` pnpm ``` instalado puedes instalarlo con:

- ``` npm install -g pnpm ```

---

# 🎯Comandos del Proyecto

1. Instalar Dependencias

   * ``` pnpm install ```

2. Ejecutar el Sistema

   * ``` node src/index.js ```

3. Ejecutar Pruebas

   * ``` pnpm test ```

---

# 🎯Ejecución del Proyecto

* Para iniciar el sistema ejecuta:

- ``` node src/index.js ```

* El sistema creará una reserva de ejemplo y mostrará el resultado en la consola.

Ejemplo de salida:
```
[ {
id: 1,
propiedadId: 101,
huesped: "Laura",
estado: "PENDIENTE"
}]
```
---

# 🎯Funcionamiento General

El flujo del sistema es el siguiente:

 1. Se reciben los datos de una reserva
 2. Se validan las reglas del sistema
 3. Se crea la entidad de dominio
 4. Se guarda la información en el repositorio
 5. Se devuelve el resultado

Esto se realiza utilizando ``` **inyección de dependencias** ``` para desacoplar los componentes.

---

# 🎯Principios SOLID Aplicados

El proyecto aplica los cinco principios SOLID para mantener una arquitectura limpia y escalable.

### SRP — Single Responsibility Principle

Cada clase tiene una única responsabilidad.

Ejemplo:

ReservaValidator valida datos
MemoryRepository guarda datos
ReservaService gestiona la lógica de negocio

---

### OCP — Open Closed Principle

El sistema puede extender funcionalidades sin modificar el código existente.

Ejemplo: agregar nuevos tipos de notificación.

---

### LSP — Liskov Substitution Principle

Las clases hijas pueden sustituir a su clase base sin romper el sistema.

---

### ISP — Interface Segregation Principle

Se utilizan interfaces pequeñas y específicas para evitar dependencias innecesarias.

---

### DIP — Dependency Inversion Principle

Los servicios dependen de **abstracciones** y no de implementaciones concretas.

Ejemplo:

ReservaService recibe un repository y un validator mediante el constructor.

---

# Ejemplo de Uso

Crear una reserva dentro del sistema:

```
const reserva = await reservaService.crearReserva({
 id: 1,
 propiedadId: 101,
 huesped: "Laura",
 fechaInicio: "2026-03-01",
 fechaFin: "2026-03-05"
});
```

Luego consultar todas las reservas:

```
const reservas = await reservaService.obtenerReservas();
```

---

# 🎯Documentación Técnica

Para ver la explicación completa de cómo se aplican los principios SOLID en el proyecto, revisar el archivo:

SOLID-APLICADO.md

---

# 🎯Posibles Mejoras Futuras

Implementar base de datos real
Crear API REST
Agregar autenticación
Agregar panel administrativo
Registrar incidencias de vecinos
Implementar microservicios

---

# 🎯Autor

Proyecto académico desarrollado para el Bootcamp de Arquitectura de Software
SENA – Tecnología en Análisis y Desarrollo de Software

