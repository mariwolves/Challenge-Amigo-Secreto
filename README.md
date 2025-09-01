# Challenge Amigo Secreto

<img width="1002" height="327" alt="image" src="https://github.com/user-attachments/assets/873c3e2e-fcd3-4d65-b0d9-2c61f687cb98" />

1. Crear un array para almacenar los nombres

Comenzaremos inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.

let amigo = [ ];

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

2. Implementa una función para agregar amigos

Desarrollaremos una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

function agregarAmigos(){}

- Capturar el valor del campo de entrada
- Validar La entrada
- Actualizar el array de amigos
- Limpiar el campo de entrada

<img width="753" height="412" alt="image" src="https://github.com/user-attachments/assets/0122b245-33e3-45fc-b4c3-2ef1d40b7540" />


3. Implementar una función para actualizar la lista de amigos

Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

- Obtener el elemento de la lista
- Limpiar la lista existente
- Iterar sobre el arreglo
- Agregar elementos a la lista

<img width="697" height="647" alt="image" src="https://github.com/user-attachments/assets/7f76b2fc-7a17-4d74-9774-380fb26bc252" />


Creamos una función llamada mostrarAmigos donde dentro del ámbito { } escribiremos todo lo que queremos que ocurra mientras se ejecute la función, en nuestro caso, buscamos en el HTML un elemento que tenga el atributo id=”listaAmigos” y lo guardamos en una variable llamada lista. También agregamos un innerHTML, pero lo  juntamos con la variable lista para limpiar la lista antes de volver a mostrar los amigos. Al no ponerlo existe la probabilidad de que se acumularan los nombres cada vez que se ejecute la función. 

También trabajaremos con for , el cual nos permite repetir un bloque de código varias veces. Creamos una variable llamada i y le asignamos el valor 0, i representara el índice de la posición en el arreglo amigos. 

RECORDAR: Los arreglos (array) siempre inician con el 0 y no del el 1. Ej: Juan (0), Pedro (1), Luis (2)

Dentro de este for, también agregaremos una condición de repetición, por esto ocuparemos el  i < amigos.length Esto significa que mientras i sea menor que amigos.legth, sigue repitiendo.  Para cerrar los paréntesis rosados, agregaremos un i++, esto nos permitirá que en cada vuelta aumentara i en 1 (pasa al siguiente amigo).

Para crear un nuevo elemento de lista (<li>) en memoria, crearemos una variable llamada li y en esta llamaremos a un elemento del html (”li”). En la siguiente línea le asignaremos texto a el amigo que corresponda en la posición i del array amigos. Ejemplo: Si amigos = [ “Juan”, “María”, “Pedro”] Cuando i=0 li.textContent = “Juan”, cuando i=1 li.textContent = “María”. Para finalizar este bloque de código, insertaremos el <li> dentro del elemento lista (que es id=listaAmigos)

4. Implementa una función para sortear los amigos
    - Validar que haya amigos disponibles
    - Generar un índice aleatorio
    - Obtener el nombre sorteado
    - Mostrar el resultado

<img width="971" height="257" alt="image" src="https://github.com/user-attachments/assets/eb3e4203-b3a0-4ba6-9775-0861977c32a1" />


Para sortear el amigo secreto, crearemos una función llamada sortearAmigo, en la cual agregaremos un if para la validación, para esto necesitamos avisar de que si el array amigos está vacío (length===0), se mostrare un mensaje y salimos de la función con return. Esto nos ayuda a evitar sortear cuando no hay nada que sortear.

Para generar un índice aleatorio ocuparemos Math.random() y Math.floor (). Esto lo multiplicamos por amigos.length para que puede hacer la acción de sorteo aleatorio.

Creamos una variable let amigoSorteado donde le pedimos que tome el amigo aleatorio seleccionado y lo guarde. 

Para finalizar esta función, solicitamos al html que muestre en #resultado” el nombre del amigo secreto sorteado en la variable amigoSorteado

---

## Implementaciones personales

Por motivos personales, he querido agregar unos detalles para explorar otras áreas en este proyecto. Uno de ellos es la implementación de una función para dejar completamente limpia la lista de amigo para darle un reinicio y a su vez, la implementación de un botón para darle un reinicio a la aplicación. Para esto intervenimos el html y style.css 

- Función de reinicio

<img width="782" height="163" alt="image" src="https://github.com/user-attachments/assets/722dc66d-15f0-49c6-986c-189a96b92270" />


Se crea una función llamada reiniciarJuego (la cual esta vinculada en el archivo html y la creación de este botón). Nuestra variable amigo la vaciaremos

- Botón para reinicio

<img width="1087" height="120" alt="image" src="https://github.com/user-attachments/assets/d3edcc94-420f-4f0b-89e9-d3d12932a927" />


Implementamos un nuevo botón para que el usuario pueda reiniciar el listado de los amigos, para esto trabajamos en el index.html para la creación de él.

- Visual del botón

<img width="617" height="282" alt="image" src="https://github.com/user-attachments/assets/47dd951d-0241-4d49-8904-a1d6b4722477" />


Trabajamos en el style.css para crear la visual de este botón de reinicio.
