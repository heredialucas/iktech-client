# IKTECH TECNICA

## Repositorios en GitHub

- [Repositorio del Cliente en GitHub](https://github.com/heredialucas/iktech-client.git)
- [Repositorio del Servidor en GitHub](https://github.com/heredialucas/iktech-server.git)

## Vista previa en Vercel

Puedes ver una vista previa en línea del cliente en [IKTECH CLIENT en Vercel](https://iktech-client.vercel.app).

## Prueba el Back-end en Apollo Studio

Puedes probar directamente el servidor GraphQL en Apollo Studio utilizando el siguiente enlace:

[Explorador Apollo Studio](https://studio.apollographql.com/sandbox/explorer)

Utilizando el siguiente endpoint para las peticiones https://iktech-server-m2mn-dev.fl0.io/

Simplemente sigue el enlace y tendrás acceso a una herramienta interactiva que te permitirá ejecutar consultas y explorar la API del servidor de IKTECH TECNICA.

La aplicación en Vercel consume datos desde el servidor GraphQL, que se encuentra en el siguiente endpoint:

- [Endpoint GraphQL del Servidor](https://iktech-server-m2mn-dev.fl0.io/)

## Configuración

A continuación, se describen los pasos para configurar y ejecutar tanto el cliente como el servidor:

1. **Cliente**

   - Clona el repositorio del cliente desde GitHub:

     ```bash
     git clone https://github.com/heredialucas/iktech-client.git
     ```

   - Navega al directorio del cliente:

     ```bash
     cd iktech-client
     ```

   - Instala las dependencias:

     ```bash
     npm install
     ```

     ```bash
     pnpm install
     ```

     ```bash
     yarn install
     ```

   - Inicia la aplicación:

     ```bash
     npm run dev
     ```

     ```bash
     pnpm run dev
     ```

     ```bash
     yarn run dev
     ```

     El servidor estará en funcionamiento en el puerto especificado en la configuración.

2. **Servidor**

   - Clona el repositorio del servidor desde GitHub:

     ```bash
     git clone https://github.com/heredialucas/iktech-server.git
     ```

   - Navega al directorio del servidor:

     ```bash
     cd iktech-server
     ```

   - Instala las dependencias:

     ```bash
     npm install
     ```

   - Inicia el servidor:

     ```bash
     npm start
     ```

   El servidor estará en funcionamiento en el puerto especificado en la configuración.

## Tecnologías

En la construcción de IKTECH TECNICA se utilizaron las siguientes tecnologías:

- **GraphQL**: La tecnología GraphQL se empleó para gestionar las consultas y manipulación de datos de manera eficiente.

- **TypeScript**: TypeScript se incorporó para agregar tipos estáticos a JavaScript y mejorar la robustez y legibilidad del código.

- **React con Vite**: React se utilizó como la biblioteca principal para crear la interfaz de usuario de la aplicación.

- **ESLint**: Se utilizó ESLint para garantizar la consistencia y calidad del código JavaScript en el proyecto.

- **Prettier**: Prettier se implementó para formatear automáticamente el código y mantener un estilo uniforme en todo el proyecto.

- **Husky**: Husky se configuró para ejecutar comprobaciones y acciones automatizadas en los commits de Git.

- **Commitlint**: Se implementó Commitlint para asegurar que los mensajes de commit sigan un formato y convención específicos.

## Metodología de Trabajo

Desarrollé este proyecto tratando de simular, lo mas similar posible, un proyecto en producción real, utilizando las tecnologías mencionadas anteriormente para simular un entorno de desarrollo con las mejores prácticas y la mayor escalabilidad posible. Sin embargo, he decidido omitir ciertos detalles para el objetivo de esta prueba técnica , como:

- **Armado de las rutas:** En este proyecto, las rutas no han sido configuradas en detalle, ya que el objetivo principal es demostrar mi habilidad en tecnologías específicas y no enfocarse en la configuración de rutas complejas.

- **Archivo .env:** Para simplificar el proceso de revisión de la prueba técnica, no he incluido un archivo .env para la gestión de variables de entorno. En un entorno de producción real, esto sería esencial para la seguridad y configuración.

- **Responsive:** La adaptación del proyecto a diferentes dispositivos y tamaños de pantalla (responsive design) no ha sido una prioridad en esta etapa de la prueba. En un proyecto real, se dedicaría tiempo y esfuerzo significativos para garantizar una experiencia óptima en diferentes dispositivos.

Este enfoque pragmático me permite destacar mis habilidades y conocimientos en las tecnologías específicas que se requieren para esta prueba técnica. Si fuera necesario, estaría encantado de expandir y mejorar estos aspectos en un entorno de desarrollo real.

## By

- Nombre: Heredia Lucas
- Correo electrónico: heredialucasfac22@gmail.com

Gracias por la oportunidad de demostrar mi capacidad técnica y mi enfoque en el desarrollo de software.
