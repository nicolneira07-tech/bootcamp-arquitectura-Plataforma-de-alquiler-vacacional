
# 📘 Patrones de Diseño Aplicados — Plataforma de Alquiler Vacacional



## 📌 Introducción

En el desarrollo de la API de alquiler vacacional se aplicaron principios de diseño y patrones arquitectónicos con el objetivo de construir un sistema:

* Escalable
* Mantenible
* Modular
* Fácil de extender

Aunque se trata de una API sin base de datos (in-memory), la estructura permite evolucionar hacia arquitecturas más complejas como **Clean Architecture** o **Arquitectura Hexagonal**.

---

## 🧱 1. Arquitectura en Capas (Layered Architecture)

### 📖 Descripción

El sistema está organizado en capas, donde cada una tiene una responsabilidad específica:

* **Capa de Presentación (Routes)**
* **Capa de Control (Controllers)**
* **Capa de Negocio (Services)**
* **Capa de Datos (In-Memory Storage)**

### 🔄 Flujo de ejecución

```id="flow123"
Cliente → Routes → Controllers → Services → Respuesta
```

### 🎯 Problema que resuelve

Evita tener lógica mezclada en un solo archivo, lo que dificulta el mantenimiento y la escalabilidad.

### ✅ Beneficios

* Separación clara de responsabilidades
* Bajo acoplamiento
* Mayor facilidad para pruebas
* Escalabilidad del sistema

---

## 🧠 2. Principio de Responsabilidad Única (SRP)

### 📖 Descripción

Cada módulo o archivo tiene una única responsabilidad:

* **Routes** → Definir endpoints
* **Controllers** → Manejar requests y responses
* **Services** → Contener la lógica de negocio

### 💻 Ejemplo

```js id="srp001"
// Controller
export const create = (req, res) => {
  const booking = createBooking(req.body);
  res.status(201).json(booking);
};
```

### 🎯 Problema que resuelve

Evita código difícil de mantener cuando una sola función hace múltiples tareas.

### ✅ Beneficios

* Código más limpio
* Fácil de entender
* Mejora el mantenimiento
* Reduce errores

---

## 🌐 3. Arquitectura REST

### 📖 Descripción

La API sigue los principios REST para la comunicación cliente-servidor:

* Uso de métodos HTTP:

  * GET → Obtener información
  * POST → Crear recursos
  * PATCH → Actualizar recursos
* Uso de JSON como formato de intercambio
* Identificación de recursos mediante URLs

### 💻 Ejemplos

```id="rest001"
GET /bookings
POST /licenses/1
PATCH /bookings/1/123/cancel
```

### 🎯 Problema que resuelve

Define un estándar claro para la comunicación entre frontend y backend.

### ✅ Beneficios

* Interoperabilidad
* Escalabilidad
* Fácil integración con otras aplicaciones

---

## 🧠 4. Patrón In-Memory Storage

### 📖 Descripción

Se utiliza almacenamiento en memoria mediante objetos de JavaScript:

```js id="memory001"
let bookings = {};
let licenses = {};
let incidents = {};
```

### 🎯 Problema que resuelve

Permite desarrollar y probar la lógica del sistema sin necesidad de configurar una base de datos.

### ✅ Beneficios

* Implementación rápida
* Ideal para prototipos
* Menor complejidad inicial

### ⚠️ Limitaciones

* Los datos se pierden al reiniciar el servidor
* No es adecuado para producción

---

## 🧩 5. Modularización

### 📖 Descripción

El sistema está dividido en módulos independientes por funcionalidad:

* 📅 Bookings
* 📜 Licenses
* ⚠️ Incidents

Cada módulo contiene:

* Controller
* Service
* Routes

### 🎯 Problema que resuelve

Evita tener todo el código en un solo archivo.

### ✅ Beneficios

* Código organizado
* Fácil mantenimiento
* Escalabilidad funcional
* Reutilización de código

---

## 🔄 6. Flujo de Datos en la Aplicación

### 📖 Descripción

El flujo de datos sigue una estructura clara:

1. El cliente envía una petición HTTP
2. La ruta la recibe
3. El controlador procesa la solicitud
4. El servicio ejecuta la lógica
5. Se retorna una respuesta en JSON

### 💻 Ejemplo

```js id="flow002"
// Route
router.post("/bookings", create);

// Controller
export const create = (req, res) => {
  const data = bookingService.create(req.body);
  res.json(data);
};

// Service
export const create = (data) => {
  const id = Date.now();
  bookings[id] = data;
  return { id, ...data };
};
```

### ✅ Beneficios

* Claridad en el flujo
* Separación de responsabilidades
* Fácil depuración

---

## 📊 7. Comparación: Semana 04 vs Semana 05

### 🟥 Semana 04

* Código más simple
* Lógica menos estructurada
* Menor separación de responsabilidades
* Difícil escalabilidad

### 🟩 Semana 05

* Arquitectura en capas
* Uso de módulos
* Separación clara (Routes, Controllers, Services)
* Mayor mantenibilidad
* Preparación para crecimiento del sistema

---

## 🔮 8. Escalabilidad y Evolución

La arquitectura actual permite evolucionar fácilmente hacia:

* Integración con bases de datos (MongoDB, PostgreSQL)
* Implementación de autenticación (JWT)
* Validación de datos (middlewares)
* Arquitecturas más avanzadas:

  * Clean Architecture
  * Arquitectura Hexagonal

---

## 🏁 Conclusión

La implementación de estos patrones y principios permitió:

* ✔️ Organizar el código de forma clara
* ✔️ Reducir el acoplamiento
* ✔️ Mejorar la mantenibilidad
* ✔️ Preparar el sistema para escalabilidad

Aunque el almacenamiento es en memoria, la estructura del proyecto está diseñada siguiendo buenas prácticas profesionales, lo que facilita su evolución a entornos reales.


