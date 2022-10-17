#SKELETON

-Express
-PostgreSQL
-Sequelize ORM
-Atenticación con tokens
-Bcrypt para hashear contraseñas
-Uso de Json web token

---

-Rutas de login y creacion de usuario(resgister)
-Herramienta para publicar imagenes de perfil
-CRUD de usuarios con autenticacion y manejo de permisos
-/users/:id vamos a proteger estas rutas put delete etc
-/users/me con token


Orden 

console
npm init --y
npm install express uuid dotenv sequelize pg pg-hstore
npm install -D nodemon

para encryptar:
npm install bcrypt

1. app.js
2. .env
3. config.js
4. database.js
5. models
6. controllers
7. services
8. routes

autenticacion
https://www.passportjs.org/
jwt

npm install passport passport-jwt jsonwebtoken


