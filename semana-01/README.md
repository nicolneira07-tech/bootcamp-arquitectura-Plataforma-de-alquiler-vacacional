# Plataforma de Alquiler Vacacional - Proyecto Bootcamp

##  1. ¿Qué Problema Resuelve?

Este sistema ayuda a las plataformas de alquiler vacacional a gestionar de manera eficaz la verificación de las licencias, los límites de días de alquiler, registrar incidencias y facilitar la fiscalización, beneficiando a turistas, anfitriones, vecinos y autoridades. Es importante porque esto permite tener mayor control sobre la regulación y la documentación.

---

## 2. Usuarios Principales 

1. **ANFITRIÓN**: Crear y gestionar los anuncios y avisos; aceptar o rechazar solicitudes de huéspedes; garantizar que el alojamiento sea seguro y legal.

2. **HUÉSPEDES**: Registrarse y crear perfil; buscar y reservar el alojamiento; dejar reseñas y calificaciones del lugar; cumplir con las normas.

3. **ADMINISTRADORES DE PLATAFORMA**: Gestionar los usuarios; controlar las publicaciones; supervisión de lo normativo; monitoreo y seguridad.

---
## 3. Funcionalidades Principales 

- [ ] Registro de usuarios
- [ ] Publicación de alojamientos
- [ ] Búsqueda y filtros
- [ ] Reservas y pagos
- [ ] Reseñas y calificaciones
- [ ] Mensajeria interna
- [ ] Seguridad y soporte

---
## 4. Desiciones Iniciales 

### Metodología de Desarrollo

**Elegi**: [Scrum / Kanban / Cascada]

**¿Por qué?** : Porque permite estructurar primero los requisitos legales y la documentación (Cascada), desarrollar el sistema por módulos de forma flexible e incremental (Scrum) y gestionar posteriormente incidencias y mejoras continuas de manera visual y priorizada (Kanban).

### Arquitectura Inicial

**Elegí**: [Monolito / N-Capas]

**¿Por qué?**: Porque al inicio el sistema será más fácil de desarrollar, mantener y desplegar. Separar el sistema en capas (presentación, lógica de negocio y base de datos) permite organizar funcionalidades como validación de licencias, registro de incidencias y control de regulación sin complicar demasiado el proyecto.

### Tecnologías

- **Backend**: Node.js (Porque permite crear APIs rápidas para validar licencias, registrar alquileres y manejar incidencias).
- **Base de datos**: PostgreSQL (Porque es robusta, gratuita y permite manejar grandes cantidades de datos como registros de propiedades, anfitriones, turistas y reportes).
- **Frontend**: React (Porque facilita crear interfaces claras para autoridades, anfitriones y administradores del sistema).

---

**Autor**: Nicol Dayana Neira Lopez 
**Fecha**: Febrero 2026
**Bootcamp**: Arquitectura de Software - SENA

