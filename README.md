[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [Node.js](http://nodejs.org).


# Descripción:

## Documentación
  - [Configuración inicial + Variables de entorno](https://www.victorvr.com/tutorial/variables-de-entorno-con-nodejs)
  - [Instalación y configuración de Docker en windows](https://docs.docker.com/desktop/install/windows-install/)
  - [Instalación y configuración de Git en windows](https://www.atlassian.com/git/tutorials/install-git#windows)
  - [Comandos básicos de GIT](https://www.youtube.com/watch?v=iT4UOkyI09k)
  - [Buenas practicas de GIT | Git Flow/workflow](https://www.youtube.com/watch?v=eo-Fg40SgMk)

## Configuración de entorno

### Uso de git (Básico)
Para hacer uso del repositorio se necesitan solo cuatro (4) comandos basicos

- Clonar el repositorio: Se usa una sola vez para descargarse el repositorio
  > Copiar la url de la sección Code > Local > HTTPS
  <p align="center">
    <image src="./assets/Gitclone.png" alt="Descripción de la imagen">
  </p>

  > Ejecuta el comando
  ```bash
    $ git clone https://github.com/EduRafael/example_express.git
  ```

- Ver archivos modificados: Se usa para poder identificar que archivos se han modificado, se puede usar las veces 
  que sea necesario, no genera ningún cambio sobre los archivos o repositorio
  > Ejecuta el comando
  ```bash
  $ git status 
  ```

- Agregar cambios: Se usa para elegir cuales son los cambios que requieras guardar dentro del commit
  > Ejecuta el comando
  ```bash
  #agrega todos los archivos modificados
  $ git add .

  #agrega toda los archivos modificados dentro de una carpeta. [ejemplo]: src/index.js src/controllers/index.js src/service/index.js
  $ git add src

  #agrega archivo en especifico dentro de una carpeta. [ejemplo]: src/index.js
  $ git add src/index.js  
  ```

- Generar captura de cambios: Se usa para generar una captura sobre una versión de código dentro de una rama (branchs), 
lo cual permite interactuar con el control de versiones, cada commit genera un id unico y representa una versión de código 
al cual se puede acceder haciendo uso de su propio id (avanzado)
  > Ejecuta el comando
  ```bash
    #Genera commit de una versión de código
    #MENSAJE REPRESENTATIVO:  inicia con un verbo y una descripción breve iniciando con un verbo en infinitivo
    #[ejemplo]: git commit -m "ADD: Agregando documentación en el readme.md"
    $ git commit -m "MENSAJE REPRESENTATIVO"
  ```

- Empujar cambios al repositorio remoto: Se usa para subir la versión capturada con el comando anterior al repositorio,
cabe destacar que sin algún commit previo, no se puede hacer `push`.
  >Consultar documentacion `Buenas practicas de GIT`
  > Ejecuta el comando
  ```bash
    #cuando se quiere subir el commit a una rama especifica
    #[ejemplo]: git push -u origin main
    $ git push -u origin 'nombre branchs'

    #cuando se quiere subir el commit la rama en la que se está posicionado 
    $ git push
  ```




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

  ```js
    USER: admin@admin.com
    PASS: admin
  ```

> Una vez iniciada la sesión puede verificar si existe una conexión a la base de datos llamada `postgres`, de no existir, puede crear la nueva conexión usando los datos de prueba que se brindan a continuación.

  ```js
  HOST: postgres
  PORT: 5432
  DATABASE: postgres
  USER: postgres
  PASS: admin
  ```
