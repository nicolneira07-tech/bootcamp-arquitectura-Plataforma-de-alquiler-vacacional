
# 🚀ADR-003: Selección de Patrón Arquitectónico - Plataforma de Alquiler Vacacional

### Estado
Aceptado

### Fecha
10/03/2026

---

## 🎯Contexto

### Descripción del Dominio

El sistema permite gestionar propiedades disponibles para alquiler temporal donde los usuarios pueden registrarse, publicar propiedades, realizar reservas y dejar reseñas.

---

## 🎯Requisitos Identificados

### ✔️ Funcionales

  - Registrar usuarios
  - Publicar propiedades
  - Buscar alojamientos
  - Crear reservas
  - Realizar pagos
  - Calificar propiedades

### ❌ No Funcionales

  - Alta mantenibilidad
  - Escalabilidad
  - Seguridad
  - Buen rendimiento

---

## 🎯Restricciones

- Equipo: 1 desarrollador  
- Tiempo: Proyecto académico  
- Tecnología: JavaScript ES2023  
- Presupuesto: Limitado

---

## 🎯Opciones Evaluadas

### Arquitectura en Capas

Descripción:

Divide el sistema en capas independientes como presentación, negocio y datos.

- Pros

  - Fácil mantenimiento
  - Separación clara de responsabilidades
  - Muy usada en APIs

- Contras

  - Puede crecer mucho el número de archivos

---

### MVC

Descripción

Divide el sistema en Modelo, Vista y Controlador.

- Pros

  - Organización clara
  - Fácil para aplicaciones web

- Contras

  - Menos flexible para APIs grandes

---

### 🎯Microservicios

Descripción

Divide el sistema en servicios independientes.

- Pros

  - Alta escalabilidad
  - Independencia entre servicios

- Contras

  - Alta complejidad
  - Infraestructura más difícil

---

## 🎯Decisión

Se selecciona **Arquitectura en Capas**.

---

## 🎯Justificación

Permite organizar claramente la API del sistema de alquiler vacacional, separando la lógica de negocio, controladores y acceso a datos. También facilita el mantenimiento y futuras mejoras.

---

## 🎯Resultado de la Matriz

| Patrón | Score |
|---|---|
| Arquitectura en Capas | 430 |
| MVC | 355 |
| Microservicios | 375 |

Ganador: **Arquitectura en Capas**

---

## 🎯Consecuencias

### Positivas

- Código organizado
- Fácil mantenimiento
- Mejor escalabilidad futura

### Negativas

- Mayor número de archivos
- Puede requerir más planificación

---

## 🎯Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Mala separación de capas | Media | Alto | Definir responsabilidades claras |
