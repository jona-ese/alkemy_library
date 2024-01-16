<h1 align="start"> Alkemy Library </h1>

El proyecto fue desarrollado en equipo como parte del programa de Aceleración de Talento Fueguino basado en las tecnologías SQL+NODE.

Alkemy Library consiste en una API de gestión de datos que permite a sus usuarios realizar operaciones de consulta y modificación de datos.

Duranto todo el transcuro del desarrollo de la api utilizamos la metodología ágil **Scrum** y el software de gestión de proyectos _Jira_ para gestionar los tickets asignados a cada integrante.

<h2> Características principales: </h2>

- Registro y Autenticación:
Los usuarios pueden registrarse y autenticarse en la plataforma de manera segura.

- Préstamos de Libros:
Posibilidad de solicitar préstamos de libros de manera eficiente.

- Chat:
Sistema de chat para intercambiar opiniones y experiencias con otros usuarios.

- Reseñas:
Genera reseñas de libros, coloca puntajes y obtén recomendaciones personalizadas.

- Participación en Eventos:
Únete a eventos relacionados con la biblioteca y recibe notificaciones en tiempo real.

- Administradores:
Los Administradores tienen un control completo sobre los diversos aspectos relacionados con la información almacenada en la aplicación.
Añadir o eliminar libros, autores, géneros y más.


<h2> Características adicionales: </h2>

-  Sistema de backup:
- - Automatizado: El sistema realiza una copia automática de la base de datos y la sube a la nube.
- - Manual: Los administradores pueden correr un comando para forzar la copia de seguridad de la base de datos en el caso de ser necesario.


<h2> Tecnologías Utilizadas: </h2>

- Bcrypt: v5.1.1
- Chai: v4.3.10
- Compression: v1.7.4
- Cookie-parser: v1.4.6
- Cors: v2.8.5
- Csurf: v1.11.0
- Csv-writer: v1.6.0
- Dotenv: v16.3.1
- Dropbox: v10.34.0
- Express: v4.18.2
- Express-handlebars: v7.1.2
- Helmet: v7.1.0
- Jest: v29.7.0
- Joi: v17.11.0
- JsonWebToken: v9.0.2
- Mocha: v10.2.0
- Node.js: v18.16.1
- Node-cron: v3.0.3
- Nodemailer: v6.9.7
- Sequelize: v6.35.1
- Socket.io: v4.7.2
- SwaggerJSDoc: v6.2.8
- SwaggerUiExpress: v5.0.0
- Yamljs: v0.3.0


<h2> Herramientas Adicionales: </h2>

- Herramientas de Prueba: Postman para el manejo de endpoints.
- Herramientas de Documentación: Swagger.


<h2> Instalacion del proyecto: </h2>

<h3> 1) Clonar el repositorio de github: </h3>

- _git clone_ https://github.com/jona-ese/alkemy-library.git 

<h3> 2) Instalar las dependencias necesarias: </h3>
  
- Ejecutar el comando **_npm install_**.

<h3> 3) Configurar las variables de entorno: </h3>

- Crear un archivo _.env_ en la raíz del proyecto.
- Añadir las variables necesarias indicadas en _.env.example_.
  
<h3> 4) Comandos principales: </h3>

- **_npm start_**: Inicializar la aplicación.
- **_npm run backup_**: Ejecutar backup de la base de datos. 
- **_npm run test_**: Ejecutar los tests.

<h2>Estado: </h2>

-  Proyecto finalizado en 3 sprints.


