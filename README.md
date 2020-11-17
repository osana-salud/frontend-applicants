# Prueba Técnica - Programador Front-end

El presente documento define un ejercicio práctico y las condiciones de evaluación para los postulantes a **_programador Front-end_** de **Osana Salud**.

## Introducción

Ésta guía contiene una serie de requerimientos de un Caso Práctico, que busca evaluar las capacidades técnicas del candidato con respecto a las principales funciones y responsabilidades que se requieren dentro del área de Desarrollo de Tecnología de **_Osana Salud_**.

## Modo de evaluación

El desafío está pensado para resolverse en un máximo de **3 (tres) horas** por lo que recomendamos emplear como máximo ese tiempo y enviar todo lo que pueda para su evaluación.

Una vez realizada la entrega, coordinaremos un llamado para analizar algunos aspectos sobre la metodología de trabajo, entre otros.

Haremos especial hincapié en lo siguiente:

  * Creatividad para resolver los requerimientos
  * Metodología de trabajo
  * Calidad del código (estructura y buenas prácticas)
  * Familiaridad con Frameworks y plataformas de desarrollo.

## Notas

* Antes de comenzar a programar

    - Realizar un `fork` de este repositorio.
    - Crear un `branch` en su `fork` (a partir de la rama `master` de este repositorio) utilizando su nombre de usuario.

* Al finalizar

    - Crear un `pull-request` a la rama `master` de este repositorio, desde el `branch` con su nombre de usuario.

## Ejercicio práctico

### Objetivo

Crear una aplicación utilizando la tecnología web de **_su elección_** que ayude a obtener una lista de usuarios y muestre la información de sus perfiles, explotando las APIs ReST públicas de GitHub y GitLab.

> NOTA: Se privilegiarán a los candidatos que utilicen el ecosistema **[Vue.js](https://vuejs.org)**.

### Requerimientos generales

1. La aplicación debe cumplir con los siguientes **requisitos funcionales:**

    - Incluír un campo de entrada texto, un selector y un botón, para que se pueda capturar el usuario y recuperar la información utilizando las APIs anteriormente indicadas.

    - Incluir un validador que verifique que el texto de búsqueda de usuarios sea de un mínimo de 4 caracteres, y otro que NO permita realizar la búsqueda de la palabra **"osana-salud"** (sin las comillas).

    - Mostrar los primeros 5 usuarios del resultado de la búsqueda (de cada servicio), incluyendo su id, nombre de usuario y el servicio al que corresponde.

    - Convertir cada elemento de la lista anterior en un enlace, para que al hacer clic en cada registro, navegue a una ruta que incluya el nombre del servicio y el nombre de usuario.

    - Crear un componente independiente en el que se proporcione el nombre del servicio, el nombre de usuario y, a continuación, obtenga los datos de dicho usuario mediante el API correspondiente.

    - Incluir la imagen del usuario (`'avatar_url'`) y alguna otra información (a su elección) en el componente.

    - Integrar cualquier librería que la parezca conveniente, de ser necesario, y crear un gráfico de barras simple (o el que prefiera) para mostrar el número de seguidores del usuario en caso de que el API proporcione esta posibilidad.

2. Es deseable, pero no necesario, que la aplicación cumpla con lo siquiente:

    - Interfaz y diseño intuitivo y amigable
    - Experiencia de usuario (mensajes de error, etc)
    - Diseño responsivo
    - Despliegue de la misma en un servicio público
    - Que sea una aplicación auto-instalable (PWA)

> NOTA: Cualquier extra que considere, en base a los requisitos funcionales, serán tomados muy en cuenta.

