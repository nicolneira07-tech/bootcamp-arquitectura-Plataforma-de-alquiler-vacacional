# 🚀 Plataforma de Alquiler Vacacional API

## ✨ Dominio
Sistema para gestión de alojamientos con validación de licencias, control de días de alquiler e incidencias.

## 🔍 Cómo ejecutar
1. npm install
2. npm run dev
3. http://localhost:3000/api-docs

## 📊 Endpoints

| Método | Endpoint | Descripción |
|--------|--------|------------|
| GET | /api/v1/properties | Listar propiedades |
| GET | /api/v1/properties/:id | Obtener una propiedad |
| POST | /api/v1/properties | Crear propiedad |
| POST | /api/v1/properties/:id/license | Crear licencia |
| POST | /api/v1/properties/:id/bookings | Crear reserva |
| POST | /api/v1/properties/:id/incidents | Registrar incidencia |
| PUT |	/api/v1/properties/:id | Actualizar completamente una propiedad |
| PATCH |	/api/v1/properties/:id | Actualizar parcialmente una propiedad |
| DELETE | /api/v1/properties/:id | Eliminar propiedad |


## 🧠 Decisiones de diseño
- Arquitectura en capas
- Validación de licencias
- Control de días de alquiler
