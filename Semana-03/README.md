# Plataforma de Alquiler Vacacional - Arquitectura

## 🎯Patrón Seleccionado

  ➡️**Arquitectura en Capas**

## 🎯Justificación en una línea

Se selecciona la arquitectura en capas porque permite separar la presentación, la lógica de negocio y el acceso a datos, facilitando el mantenimiento, la escalabilidad y la organización del sistema de alquiler vacacional.

## 🎯Diagrama de Alto Nivel

El siguiente diagrama muestra la organización del sistema en capas, desde la interacción del usuario hasta la base de datos.

flowchart TD

A [Usuario / Cliente]

B [Capa de Presentación API REST - Controladores]

C [Capa de Lógica de Negocio Servicios]

D [Capa de Acceso a Datos Repositorios]

E [Base de Datos]

- A --> B
- B --> C
- C --> D
- D --> E

## 🎯Documentos

- (PATRON-SELECCIONADO.md) - Decisión arquitectónica completa
