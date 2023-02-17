[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [Node.js](http://nodejs.org).

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]


# Descripción:

## Documentación
  - [Configuración inicial + Variables de entorno](https://www.victorvr.com/tutorial/variables-de-entorno-con-nodejs)
  - [Instalación y configuración de Docker en windows](https://docs.docker.com/desktop/install/windows-install/)
  - [Instalación y configuración de Git en windows](https://www.atlassian.com/git/tutorials/install-git#windows)

## Configuración de entorno




### Ejecución de docker-compose
Con el proposito de facilitar la ejecución de dicha API, se realizó un `Docker Compose` que permitirá de forma rápida crear todos los recursos necesario para su uso. DOC: [Docker Compose](https://levelup.gitconnected.com/creating-and-filling-a-postgres-db-with-docker-compose-e1607f6f882f)

Para poner en marcha el `Docker Compose` de forma correcta, se debe ingresar a la carpeta `./docker` y ejecutar los siguientes comandos:

```bash
#build compose
$ docker-compose build

#run compose
##Permite ver los logs del compose
$ docker-compose up 

##run compose, liberando la terminal
$ $ docker-compose up -d

#down compose
$ docker-compose down
```

### Accesos WEB para la prueba

Una vez haya preparado todo el entorno de desarrollo, utilizando el `Docker Compose` anterior, puede hacer uso de los recurso web fueron configurados con el propisito de facilitar las prueba.

#### PG Admin

> Si desea acceder al [PG Admin](http://localhost:8081/login?next=%2F) para visualizar los datos de la base de datos usada durante el ejercicio puede acceder al servicio local proporcionado, usando los datos de prueba para el inicio de sesión que se brindan a continuación.

```
  USER: admin@admin.com
  PASS: admin
```

> Una vez iniciada la sesión puede verificar si existe una conexión a la base de datos llamada `postgres`, de no existir, puede crear la nueva conexión usando los datos de prueba que se brindan a continuación.

```
HOST: postgres
PORT: 5432
DATABASE: postgres
USER: postgres
PASS: admin
```
