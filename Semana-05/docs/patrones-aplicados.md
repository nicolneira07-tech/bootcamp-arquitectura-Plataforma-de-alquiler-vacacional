
# 📘 Patrones de Diseño Aplicados — Plataforma de Alquiler Vacacional

---

## 🧱 Relación con Arquitectura en Capas

Los patrones fueron implementados respetando la arquitectura en capas:

- **Capa de Datos (Models)**
  - Factory Method → creación de propiedades

- **Capa de Negocio (Services)**
  - Strategy → cálculo de precios
  - Observer → manejo de eventos
  - Facade → coordinación de reservas

- **Capa de Integración**
  - Adapter → integración con sistema de pagos

- **Configuración Global**
  - Singleton → configuración de la aplicación

- **Capa de Presentación (Controllers)**
  - Sin patrones, solo delegación

---

# 🏗️ Patrón: Factory Method

## Problema Original

La creación de propiedades estaba distribuida en múltiples partes del código, generando duplicación y dificultad para escalar nuevos tipos.

## Antes (❌)

```js
const property = {
  title,
  location,
  pricePerNight
};
```

## Después (✅)

```js
PropertyFactory.create(type, data);
```

## Principio SOLID Reforzado

**Single Responsibility Principle** - 
La creación de objetos se delega a una clase especializada.

### Diagrama

Ver: `docs/diagramas/factory-property.md`

### Beneficios Obtenidos
- Centralización de la creación
- Escalabilidad para nuevos tipos
- Reducción de duplicación

---

# 🎛️ Patrón: Facade

## Problema Original

El proceso de reservas implicaba múltiples pasos complejos distribuidos en varios servicios.

## Antes (❌)

Múltiples llamadas manuales a servicios.

## Después (✅)
```js
bookingFacade.createBooking(data);
```

## Principio SOLID Reforzado

Single Responsibility Principle

### Diagrama

Ver: `docs/diagramas/facade-booking.md`

### Beneficios Obtenidos
- Simplificación del flujo
- Código más legible
- Punto único de acceso

---

# 🟣 Patrón: Singleton

## Problema Original

La configuración de la aplicación podía duplicarse en diferentes partes del sistema.

## Antes (❌)
```js
const config = { appName: "App" };
```

## Después (✅)
```js
import { config } from "./Config.js";
```

## Principio SOLID Reforzado

Control de instancias- (consistencia global)

### Diagrama

(No requiere diagrama formal)

### Beneficios Obtenidos
- Una única instancia global
- Consistencia en configuración
- Ahorro de memoria

---

# 📊 Comparación Global

## Antes (Semana 04)
 - Código acoplado
 - Lógica mezclada
 - Difícil mantenimiento
 - No escalable
   
## Después (Semana 05)
 - Uso de patrones de diseño
 - Separación por capas
 - Código desacoplado
 - Alta escalabilidad

---

# 🔮 Extensibilidad

El sistema permite agregar nuevas funcionalidades sin modificar código existente.

### Ejemplo

```js
class WeekendStrategy {
  calculate(price) {
    return price * 1.15;
  }
}
```

Esto demuestra cumplimiento del principio Open/Closed.

# 🏁 Conclusión

La implementación de patrones de diseño permitió:

- Mejorar la arquitectura del sistema
- Reducir el acoplamiento
- Aumentar la escalabilidad
- Preparar el sistema para futuras arquitecturas (Clean/Hexagonal)


