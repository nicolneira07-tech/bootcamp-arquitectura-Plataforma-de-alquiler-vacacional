# 🏡 Plataforma de Alquiler Vacacional - API

---

## 📌 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una API REST para la gestión de una plataforma de alquiler vacacional.

La API permite administrar:

* 📅 Reservas (**Bookings**)
* 📜 Licencias (**Licenses**)
* ⚠️ Incidentes (**Incidents**)

El sistema fue diseñado aplicando buenas prácticas de arquitectura de software, separación de responsabilidades y modularización del código.

---

## 🎯 Objetivos

* Implementar una API REST funcional
* Aplicar arquitectura en capas
* Separar responsabilidades (Routes, Controllers, Services)
* Simular persistencia de datos sin base de datos
* Preparar el sistema para escalabilidad futura

---

## 🚀 Tecnologías Utilizadas

* **Node.js** → Entorno de ejecución
* **Express.js** → Framework backend
* **Nodemon** → Ejecución en desarrollo
* **JavaScript (ES Modules)** → Lenguaje principal

---

## 🏗️ Arquitectura del Sistema

El proyecto sigue una **arquitectura en capas (Layered Architecture)**:

### 🔹 Capas

1. **Capa de Presentación (Routes)**
   Define los endpoints de la API

2. **Capa de Control (Controllers)**
   Maneja las peticiones HTTP y respuestas

3. **Capa de Negocio (Services)**
   Contiene la lógica del sistema

4. **Capa de Datos (In-Memory)**
   Almacenamiento temporal usando objetos JavaScript

---

## 🔄 Flujo de la Aplicación

```id="flowapp"
Cliente → Routes → Controllers → Services → Respuesta JSON
```

---

## 📂 Estructura del Proyecto

```id="estructura001"
Semana-05/
├── docs/
|   ├── diagramas/ 
|   |   ├── arquitectura-general.md
|   |   ├── flujo-booking.md
│   │   ├── flujo-incidente.md
|   |   ├── flujo-license.md
│   │   └── modularizacion.md
|   |
|   └── patrones-aplicados.md
|
|── node_modules/
|
|── src/
|   ├── adapter/
|   |   └── PaymentAdapter.js
|   |
│   ├── controllers/
│   │   ├── bookingController.js
|   |   ├── incidentController.js
│   │   ├── licenseController.js
│   │   └── propertyController.js
|   |
|   ├── facade
│   │   └──BookingFacade.js
|   |
|   ├── models/
│   │   ├── incident.js
│   │   ├── license.js
│   │   ├── propertyInstance.js
|   |   └── propertyModel.js
|   |
|   ├── observers
│   │   └──logObserver.js  
|   |
|   ├── patterns/
|   |   └── factory/
│   │        ├── bookingStrategy.js
│   │        ├── db.js
│   │        ├── eventBus.js
|   |        └── propertyFactory.js
|   |
|   ├── routes/
│   │   ├── bookingRoutes.js
|   |   ├── incidentRoutes.js
│   │   ├── licenseRoutes.js
│   │   └── propertyRoutes.js
│   │
│   ├── services/
│   │   ├── bookingService.js
|   |   ├── incidentService.js
│   │   ├── licenseService.js
│   │   └── propertyService.js
│   │
│   ├── singlenton/
│   │   └── Config.js
│   |
|   ├── strategy/
│   │   └── PrincingStrategies.js
│   │
|   ├── test/
│   │   └── Property.test.js 
|   |
|   ├── index.js
│   │   
│   └── swagger.js
|
|── package-lock.json   
│
|── package.json
|
|── pnpm-lock.yaml   
│
└── README.md

```                                                                                                               
---

## ⚙️ Instalación y Configuración

### 1️⃣ Clonar el repositorio

```bash id="clone001"
git clone <URL_DEL_REPOSITORIO>
cd Semana-05
```

---

### 2️⃣ Instalar dependencias

```bash id="install001"
npm install
```

---

### 3️⃣ Ejecutar el servidor

```bash id="run001"
npm run dev
```

---

## 🌐 Servidor

La API se ejecuta en:

```id="server001"
http://localhost:3001
```

---

## 🔗 Endpoints de la API

---

### 📅 Bookings (Reservas)

#### ✅ Crear reserva

```id="b1"
POST /bookings
```

**Body:**

```json id="b2"
{
  "propertyId": 1,
  "guestName": "Andrea",
  "nights": 3
}
```

---

#### 📄 Obtener reservas

```id="b3"
GET /bookings
```

---

---

### 📜 Licenses (Licencias)

#### ✅ Crear licencia

```id="l1"
POST /licenses/:propertyId
```

**Body:**

```json id="l2"
{
  "type": "tourism",
  "valid": true
}
```

---

#### 📄 Obtener licencias

```id="l3"
GET /licenses
```

---

---

### ⚠️ Incidents (Incidentes)

#### ✅ Crear incidente

```id="i1"
POST /incidents/:bookingId
```

**Body:**

```json id="i2"
{
  "description": "Daño en la propiedad"
}
```

---

#### 📄 Obtener incidentes

```id="i3"
GET /incidents
```

---

## 🧪 Pruebas de la API

Puedes probar los endpoints con:

* Thunder Client (VS Code)
* Postman

### ✔️ Recomendaciones

* Usar método correcto (GET, POST)
* Enviar JSON válido
* Verificar que el servidor esté activo

---

## ⚠️ Consideraciones Técnicas

* Los datos se almacenan en memoria (no base de datos)
* La información se pierde al reiniciar el servidor
* No se implementa autenticación en esta versión

---

## 📈 Escalabilidad

La arquitectura permite integrar fácilmente:

* Base de datos (MongoDB, PostgreSQL)
* Validaciones con middlewares
* Autenticación (JWT)
* Arquitecturas avanzadas

---

## 🧠 Buenas Prácticas Aplicadas

* Separación de responsabilidades (SRP)
* Arquitectura en capas
* Diseño modular
* Uso de REST

---

## 📊 Estado del Proyecto

| Característica        | Estado |
| --------------------- | ------ |
| API funcional         | ✅      |
| Arquitectura en capas | ✅      |
| Modularización        | ✅      |
| Persistencia real     | ❌      |

---

## 👩‍💻 Autor

Desarrollado como parte del bootcamp de Arquitectura de Software.

---

## 🏁 Conclusión

Este proyecto demuestra la implementación de una API REST organizada, aplicando principios fundamentales de desarrollo backend.

La estructura permite evolucionar el sistema hacia soluciones más robustas y escalables en entornos reales.

---

