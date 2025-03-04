# React + Vite

// Fecha de entrega - Domingo 2 de Marzo a las 14hs aproximadamente.

Para correr este proyecto debe:

1- Verificar el nombre del último commit realizado, pueden considerar el commit de nombre "Build" el de la finalización del proyecto,
los commits siguientes son algunos cambios y extras añadidos que considero oportuno hacer y no se mencionaban cosas al respecto en el
documento sobre requisitos para completar el challenge -tal vez no estén enviados cuando lean esto-.

2- En caso de querer ver el la resolución del challenge con los extras añadidos, simplemente descargue o clone el repositorio desde su ruta raiz directamente.

3- Realizar 'pnpm install' en la carpeta raíz del proyecto.
3.1- Si no posee pnpm puede instalarlo fácilmente siguiendo las siguientes instrucciones https://pnpm.io/es/installation

4- Ejecutar 'pnpm dev'

5- Abrir http://localhost:5173


*---------------------------------------------------*
En caso de querer ahorrar tiempo, también pueden probarlo desde https://vita-wallet-challenge.netlify.app/ 
*---------------------------------------------------*

A continuación les detallo mi análisis del proyecto, a quien desee leerlo, también puedo explicarlo en persona:

Primero decidií darme unas horas en ver toda la documentación provista, requerimientos y probar el json.
Con ello me puse a evaluar las opciones que tenía para desarrollarlo y si usar "x" o "y" solución, a lo cuál
opté por una mezcla entre ambas, me explico.

El challenge en su figma posee cierta cantidad de componentes, algunos importantes y otros no tanto, una opción era dar uso
de alguna librería de componentes, pero para un proyecto así de "simple" en térmios de UI y baja interacción (o sea, poca actualización de estados), decidí que 
no era necesario y haría más pesado el proyecto.

Por otro lado, consideraba si usar axios o fecth, opté por escribir menos código y delegar eso en axios.

No seguí el figma al 100% ya que las medidas al estar en píxeles, veo que fueron hechas en una pantalla más grande que las mías
(monitor de 19 pulgadas y notebook de 14 pulgadas), por lo cual al tomarlas exactamente igual, en mi pantalla se producía un desplazamiento (scroll horizontal).

Dicho esto, procedí primero con la UI, luego con los estados globales y solicitudes al backend, y por último implementando las transacciones.

Se muestra en el figma una UI para un Registro, pero luego no se incluye en el flujo de trabajo ni en el JSON para probar en postam, así que dí por hecho que no era
necesario maquetarlo.

Para el login el documento no detallaba sobre validaciones, así que solo validé que el email contenga @ y un punto (.), y para la contraseña que la longitud sea mayor
a 3 caracteres. Al haber error muestro el que retorna la API, pero nada más.

Para la navegación en general, y el sidebar en particular, usé react-router, que trae un componente llamado Outlet el cual ayuda a matchear las rutas con un renderizado
que se esté realizando. En este caso, el Sidebar se renderizará gracias a ello en cada ruta, y cambiará lo que haya en su interior (véase, el contenido).

En el Dashboard consideré usar react-pro-sidebar, pero también me pareció simple así que opté por hacerlo desde 0, salió rápido y se ve bonito, aunque el figma no incluye
la imágen de fondo donde se ven los signos dólar. 

Persistencia de datos: si bien el documento habla sobre el uso de Context en react, sumé almacenar en Cookies los headers para que así la sesión permanezca activa, además
de armar un estado global con useContext + useReducer.

Por cierto, van a ver un archivo de constantes con los estilos en un objeto, aparte de las url, esto es porque para maquetar hago uso rápido de la etiqueta style= y luego lo paso a css modules,
para ser más ordenado.

En el historial de intercambios, las transacciones desde la API vienen datos casi iguales, contrario al que se muestra en el JSON, y son el 100% de tipo category: "exchange"
y category_translate: "Cambios", por lo cual les asigné el nombre de "Intercambiaste". Al no saber el nombre de las otras propiedades a excepción de "deposit" y "depósito" 
(que tampoco sé si se refiere a "Recibiste", "Recargaste" o ambas, en el figma... No asigné otros nombres ni colores. 

Para el intercambio de divisas puse una validación para que se deban completar 3 campos antes de calcularlo, divisa y Monto a intercambiar, y divisa a recibir, con ell funciona.
Además, resto el fee correspondiente (aunque no conozco la fórmula financiera exacta, así que lo hice algo simple). 

Ví que también hay un mínimo de envío de BTC a usar como validación, o eso creo, así que por las dudas no lo implementé pero seguro lo haga
en un siguiente commit.

La API para crear una transacción no me funcionó, siempre da error 429 too many requests, aunque la probé con un botón y nunca hice múltiples llamados. Aún así, para finalizar decidí mostrar igual el Modal.

No estoy seguro si olvido algo más, pero fue muy divertido de realizar, más aún el manejo de objetos para las transacciones, es realmente interesante.

Que anden bien!

Abrazo.
