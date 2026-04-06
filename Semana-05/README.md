
# 🚀 Plataforma de Alquiler Vacacional — Semana 05

## 📌 Descripción

Este proyecto corresponde a la **refactorización de la API desarrollada en la semana 04**, aplicando patrones de diseño para mejorar la organización, mantenibilidad y escalabilidad del sistema.

El dominio implementado es una **Plataforma de Alquiler Vacacional**, donde se gestionan propiedades y reservas.

---

## 🧱 Arquitectura en Capas

El sistema está estructurado en arquitectura en capas:

- **Capa de Presentación (Controllers)**  
  Maneja las solicitudes HTTP y delega la lógica.

- **Capa de Negocio (Services)**  
  Contiene la lógica principal del sistema.

- **Capa de Datos (Models)**  
  Gestiona la persistencia y creación de entidades.

- **Capa de Integración**  
  Maneja la comunicación con servicios externos.

---

## 🧠 Patrones de Diseño Implementados

| Tipo | Patrón |
|------|--------|
| Creacional | Factory Method |
| Creacional | Singleton |
| Estructural | Adapter |
| Estructural | Facade |
| Comportamiento | Strategy |
| Comportamiento | Observer |

---

## 🧱 Aplicación de Patrones por Capas

- **Capa de Datos**
  - Factory Method → creación de propiedades

- **Capa de Negocio**
  - Strategy → cálculo de precios
  - Observer → eventos del sistema
  - Facade → coordinación de reservas

- **Capa de Integración**
  - Adapter → integración con sistema de pagos

- **Configuración Global**
  - Singleton → manejo de configuración

- **Capa de Presentación**
  - Sin patrones, solo delegación de responsabilidades

---

## 🔗 Cómo cooperan los patrones

Los patrones trabajan en conjunto para desacoplar el sistema:

- **Factory** crea objetos de propiedades
- **Strategy** define cómo calcular precios
- **Facade** coordina el proceso de reservas
- **Adapter** conecta el sistema con servicios externos
- **Observer** reacciona a eventos del sistema
- **Singleton** gestiona configuración global

Esto permite un sistema flexible, modular y escalable.

---

## ⚙️ Instalación

```bash
pnpm install
```

## ▶️ Ejecución

```bash
pnpm start
```

El servidor se ejecuta en:

`http://localhost:3000`

🧪 Tests

```bash
pnpm test
```

Se utiliza el test runner nativo de Node.js para validar funcionalidades básicas.

## 📡 Endpoints
### 🏠 Propiedades
- Crear propiedad 
`POST /api/v1/properties`

- Listar propiedades
`GET /api/v1/properties`


### 📅 Reservas
- Crear reserva
`POST /api/v1/bookings`

## 📥 Ejemplo de Request
```json
{
  "type": "house",
  "title": "Casa en Cartagena",
  "location": "Cartagena",
  "pricePerNight": 200
}
```
---

# 📊 Diagramas

Los diagramas de los patrones se encuentran en:

`docs/diagramas/`

Incluyen:

- Factory Method
- Strategy
- Observer
- Adapter
- Facade

---
# 📘 Documentación de Patrones

Ver archivo:
`docs/patrones-aplicados.md`

Incluye:

- Problema original
- Antes / Después
- Principios SOLID
- Beneficios
- Diagramas

---

# 📊 Comparación (Semana 04 vs Semana 05)
Antes
- Código acoplado
- Lógica mezclada
- Difícil mantenimiento
- No escalable
  
Después
- Uso de patrones de diseño
- Separación por capas
- Código desacoplado
- Alta escalabilidad

---
# 🔮 Extensibilidad

El sistema permite agregar nuevas funcionalidades sin modificar código existente.

### Ejemplo: nueva estrategia
```js
class WeekendStrategy {
  calculate(price) {
    return price * 1.15;
  }
}
```
Esto cumple con el principio Open/Closed.

# 🏆 Beneficios Obtenidos
- Bajo acoplamiento
- Alta cohesión
- Código limpio
- Escalabilidad
- Preparación para arquitecturas futuras (Clean / Hexagonal)

---
👩‍💻 Autor

Proyecto académico
Bootcamp Arquitectura de Software — SENA




