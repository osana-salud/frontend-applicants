# Prueba Técnica - Programador Front-end

El presente documento define un ejercicio práctico y las condiciones de evaluación para los postulantes a **_programador Front-end_** de **Osana Salud**.

## Introducción

Ésta guía contiene una serie de requerimientos de un Caso Práctico, que busca evaluar las capacidades técnicas del candidato con respecto a las principales funciones y responsabilidades que se requieren dentro del área de Desarrollo de Tecnología de **_Osana Salud_**.

## Modo de evaluación

El desafío está pensado para resolverse en un máximo de **4 (cuatro) horas** y el postulante dispondrá de **3 (tres) días**, desde el momento de su notificación, para poder enviar su resolución.

Una vez realizada la entrega, coordinaremos un llamado para analizar algunos aspectos sobre la metodología de trabajo, entre otros.

Haremos especial hincapié en lo siguiente:

  * Creatividad para resolver los requerimientos
  * Metodología de trabajo
  * Calidad del código (estructura y buenas prácticas)
  * Tiempo de resolución

## Notas

No es necesario que finalice todo el proyecto para realizar el envío. Evaluaremos todo lo que haya podido realizar en el tiempo que indicamos que pensamos puede ser resuelto.

* Antes de comenzar a programar

    - Realizar un `fork` de este repositorio.
    - Crear un `branch` en su `fork` (a partir de la rama master de éste repositorio) utilizando su nombre de usuario.

* Al finalizar

    - Crear un `pull-request` a la rama `master` de éste repositorio, desde el `branch` con su nombre de usuario.

## Ejercicio práctico

### Objetivo

Crear una aplicación utilizando la tecnología web de **_su elección_** que ayude a obtener una lista de usuarios y muestre la información de sus perfiles, explotando el API Rest pública de GitHub https://api.github.com/search/users.

> NOTA: Se privilegiarán a los candidatos que utilicen el ecosistema **[Vue.js](https://vuejs.org)**.

### Requerimientos generales

1. La aplicación debe cumplir con los siguientes **requisitos funcionales:**

    - Incluír un campo de entrada texto y un botón, para que se pueda capturar el usuario y recuperar la información utilizando el API anteriormente indicada.

    - Mostrar los primeros 10 usuarios del resultado de la búsqueda, incluyendo su nombre de usuario (`'user.login'`) y el id (`'user.id'`) de cada registro.

    - Convertir cada perfil de usuario en un enlace, para que al hacer clic en cada registro, navegue a una ruta que incluya la propiedad `'user.login'` como parámetro.

    - Crear un componente independiente en el que se lea el parámetro de la URL y, a continuación, obtenga los datos de dicho usuario mediante la siguiente API: https://api.github.com/users/<USER_NAME>

    - Incluir la imagen del usuario (`'avatar_url'`) y alguna otra información (a su elección) en el componente.

    - Incluir un validador que verifique que el texto de búsqueda de usuarios sea de un mínimo de 4 caracteres, y otro que NO permita realizar la búsqueda de la palabra **"osana-salud"**.

    - Integrar cualquier librería que la parezca conveniente, de ser necesario, y crear un gráfico de barras simple (o el que prefiera) para mostrar el número de seguidores de los 10 primeros usuarios.

2. Es deseable, pero no necesario, que la aplicación cumpla con lo siquiente:

    - Interfaz y diseño intuitivo y amigable
    - Experiencia de usuario (mensajes de error, etc)
    - Diseño responsivo
    - Despliegue de la misma en un servicio público
    - Que sea una aplicación auto-instalable (PWA)

> NOTA: Cualquier extra que considere, en base a los requisitos funcionales, serán tomados muy en cuenta.

