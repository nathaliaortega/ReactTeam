# TopGunLab React
Daniel Preciado Tamayo

## Clase 1 - 27/04/2019

- Protocolo IP
- DNS
- Protocolo TCP/IP

### HTML (HyperText Markup Language)
Determina el contenido de la pagina web pero no su funcionalidad

#### Elementos
- Etiquetas de apertura y cierre
- Contenido
- Atributo

#### Elementos de:
- Bloque: Ocupa todo el ancho de la pantalla
- Linea: El contenido determina el ancho

### DOM - Document Object Model
Es un árbol con los elementos del HTML

### CSS
Modelo de Caja
- Padding
- Border
- Margin

#### Propiedad box-sizing:
- content-box (por defecto)
- border-box

#### Selectores
- Etiqueta
- Class .
- Id #
- Pseudoclases: Es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado :

#### Especificidad
Prioridad en la que se aplican los estilos

Style, ID, Class/Pseudo-class/attribute, elements

Si tienen la misma queda el ultimo elemento

### Git
Control de Versiones

### Nodeschool
https://nodeschool.io/es/

#### Javascripting
https://github.com/timoxley/functional-javascript-workshop

## Clase 2: Javascript - 11/05/2019

Interpretado
Dinámico
Orientado a objetos basado en prototipos
Débilmente tipado

### Falsy values

- false
- null
- ""
- undifined
- 0
- NaN

### ¿Como ejecutar javascript?

####Navegador

Devtools
Archivo html

#### Node.js

- Consola
    - node
- Archivo js
    - node archivo.js

### Tipos de datos

- number
- symbol
- boolean
- object
- null
- undefined

typeof(variable)

#### Strings

- Se puede inicializar con comillas dobles comillas simples
- Importante mantener un estándar

- Funciones
    - repeat(2)
    - lenght
    - trim()
    - indexof(G)
    - charAt()
    - split(" ")
    - concat()
    - '${} something'

#### Number

toFixed(2)
toExponential(3)

- Metodos Globales
```
parseInt(a, 10)
parseFloat(b,10)
```

Math object

### Boolean

- true
- false

== compara valor
=== compara valor y tipo

!=
!==

### Objects

#### Creación de objetos

- Objetos literales
- Constructores

#### Acceder a las propiedades

```
objeto.propiedad
objeto["llave"]
```

Se puenden crear propiedades igualmente

#### Eliminar propiedades

```
delete arreglo.propiedad
```

### Arreglos

var arreglo = []

#### Metodos

- arreglo[1]
- push(); agregar elemento al final
- pop(): elimina el ultimo
- shift(): elimina el primero
- unshift(): agrega elementos al inicio
- slice(): Obtener porcion del arreglo
- splice(): suprimir, insertar o reemplazar elementos segun sus pocisiones

## Variables

Puede contener letras, digitos, $, _
No puede iniciar con un numero
Key sensitive

### Scope

Global
Local: Solo vive dentro de la funcion

### Declaracion

- var: Tienen su scope limitado a las funciones y pueden ser reasignadas
- let: Tienen su scope limitado a los bloques y pueden ser reasignadas.
- const: Deben ser asignadas al momento de definirlas, tienen su scope limitado a los bloques y no pueden ser alteradas

### Hoisting

Mecanismo de JS en donde las variables y las funciones declaradas son movidas hacia el comienzo de su scope (arriba), antes de su ejecución.

Funciona con:
- var: a nivel de bloque
- Indicando solo el nombre de la variable: a nivel global

### Condiciones
- if
- switch

### Ciclos

- for 
- do ... while
- while
- for ... in 
- for ... of : La sentencia for...of crea un bucle iterando sobre objetos iterables (incluyendo Array, Map, Set, argumentos, objetos etc), invocando una iteración personalizada conectando con sentencias para ser ejecutadas por el valor de cada propiedad distinta.

### Palabras reservadas

- break: Use la sentencia break para salir de un bucle, switch, o en conjunto con una sentencia label.
- continue: La sentencia continue puede usarse para reiniciar una sentencia while, do-while, for, o label.

### Programacion funcional

- map: Crea un nuevo arreglo a partir de la aplicación de las sentencias entregadas sobre cada elemento. (valor, index)
- filter: Encuentra el primer elemento del arreglo que cumpla con la condición entregada, si ninguno cumple, devuelve undefined.
- find: Crea un nuevo arreglo con los elementos del arreglo que cumplan con la condición entregada.
- reduce: Aplica la función entregada a un acumulador y cada elemento para reducirlo a un sólo valor.

### Funciones

Funciones anonimas
Arrow functions
(parametros) => {}

** Ejercicio rama practice

## Clase 3: API ( Application Programming Interface)  - 18/05/2019

- Permite comunicación entre 2 aplicacíones
    - Request
    - Response
- Abstracción del proceso real que esta sucediendo
- Es necesario conocer la interfaz de la API (Documentacion)
- Código reutilizable

### Browser API

- DOM
- Fetch API: 
- Web Audio API
- WebGL

### DOM: Document Object Model
- Creado por el navegador
- Arbol de objetos
- como son objetos, podemos:
    - Crear - **Create**
    - Cambiar - **Change**
    - Obtener - **Get**
    - Eliminar - **Delete**

#### Crear

- document.createElement(elementString)
- document.createTextNode(string)
- node.textContent
- node.innerHTML

#### Insertar

- ParentNode.appendChild(element)
- ParentNode.insertBefore(newNode, nextSibling)
- ParentNode.replaceChild(newNode, oldNode)

#### Cambiar

- element.attribute = newValue
- element.style.property = newStyle
- element.setAttribute(attribute, value)
- element.classList.(add || remove || toggle)

#### Eliminar

- parentNode.removeChild(element)
- element.remove()

#### Obtener

- document.querySelector(selector)
- document.querySelectorAll(selector)
- document.getElementsByClassName(class)
- document.getElementById(id)
- element.getAttribute(attribute)

#### Event handlers

- element.onclick = function() {}
- element.onmouseenter = function() {}
- element.onmouseleave = function() {}

#### Event bubbling & capturing (Importante !!!!)

Cuando un elemento padre tiene un evento y sus hijos tambien tienen eventos propios

Bubbling: El evento se propaga desde el elemento mas interno hasta el mas externo (por defecto)
Capturing: El evento se propaga desde el elemento mas externo hasta el mas interno

Propagación de eventos en el DOM

```javascript
event.stopPropagation() 
```

#### Event listeners

```javascript
element.addEventListener(event, function, useCapture) //useCapture especifica si se usa capturing
```

### Web Api

- A través de HTTP (Hypertext Transfer Protocol)
- Desde cualquier lenguaje de programación
- Cualquier contexto
- Petición HTTP
- Devuelve una representación de información
    - JSON
    - XML

#### Request

```javascript
GET /students/http-basics HTTP/1.1
Host: www.topgun.com
Connection: keep-alive
Cache-Control: no-cache
Pragma: no-cache
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

##### Verbos

- Get
- Post
- Put
- Delete

- Options
-Trace
- Head

##### Response

```javascript
HTTP/1.1 200 OK
Date: Fri, 31 Dec 2003 23:59:59 GMT
Content-Type: application/json
Content-Length: 1221

{ ...JSON }
```

1xx: Infomativo
2xx: Exitoso
3xx: Redirección
4xx: Error del cliente
5xx: Error del servidor

Endpoints: Urls que devuelven la información formateada

##### REST API (Representational state transfer)

- Recursos
- URLs Rule! 💪
- Verbos HTTP

##### SOAP (Simple Object Access Protocol)

- Acciones
- Siempre POST

### Fetch API

#### Peticiones HTTP

Retorna una promesa

```javascript
fetch('http://example.com/movies.json')
  .then(function(response) {
      return response.json();
  })
  .then(function(myJson) {
      console.log(myJson);
  })
  .catch(function(error) {
      console.log('Error:' + error.message);
  });
```

Ejercicio third-party