## Respuesta

### Tecnologías Utilizadas

- **Backend y Microservicios:** Se implementará una arquitectura de microservicios para dividir la funcionalidad en componentes independientes y escalables.

- **GraphQL (en la capa de consumo):** GraphQL se utilizará para consumir datos de los microservicios y las DDBB, desde las aplicaciones de usuario y conductor.

- **Sequelize:** Sequelize se utilizará como un ORM para interactuar con la base de datos relacional.

- **Redis:** Se utilizará Redis como una capa de caché para almacenar información temporal, como la disponibilidad de conductores en tiempo real y el estado de las peticiones.

- **Docker y Kubernetes:** Docker y Kubernetes se utilizarán para gestionar y escalar los contenedores de cada microservicio de forma independiente.

### Evitar Doble Asignación

Para evitar la doble asignación de un servicio a múltiples conductores, se implementará un sistema de bloqueo temporal con un sismtea de colas en cada microservicio de conductores y usuarios utilizando Redis. Esto garantizará que un servicio solo pueda ser atendido por un conductor a la vez.

### Mostrar Estado de conductores 

Se consultará el microservicio de conductores a través de GraphQL para obtener información sobre la ubicación en tiempo real y el estado de los conductores. Para mostrar el estado inactivo, se utilizará el mecanismo de temporización en Redis. Si un conductor deja de emitir coordenadas después de 1 minuto, se considerará inactivo y se mostrará el estado correspondiente en el mapa.

Esta arquitectura proporciona modularidad, escalabilidad y flexibilidad para manejar la alta concurrencia y mostrar el estado inactivo de los conductores en el tercer módulo web.
