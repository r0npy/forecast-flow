# Info contextual

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Instalar dependencias

Una vez descargado el repositorio, es necesitario instalar las paqueterias con el siguiente comando (estar posicionado con el terminal en el mismo path del proyecto)

### `npm install`

## Instalar dependencias

Una vez que finalice la instalación de estas dependencias, para levantar el servidor de desarrollo ejecutar el siguiente comando:

### `npm start`

## Montar la WebApp

Esto creará el servidor de desarrollo y para visualizar la webapp debe abrir el siguiente enlace en su navegador [http://localhost:3000](http://localhost:3000)

## Generar el compilado para producción

Para crear los archivos finales para un ambiente de producción, basta con ejecutar el siguiente comando. Esta creará los archivos en el ruta build, y esos luego los puede copiar a la carpeta del servidor web que desee utilizar.

### `npm run build`

## Funcionamiento General

Una vez montada la webapp, al inicio de la misma le aparece un listado de ciudades predefinidas y cada vez que cambie la ciudad, esta realizará la consulta al API y desplegará la nueva información en pantalla.

Obs: es obligatorio tener acceso sin restricciones a Internet para que puedan descargarse los recursos de los CDN y/o acceder a la API para consumir la información de la misma.