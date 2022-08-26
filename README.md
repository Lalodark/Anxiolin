//// #### Anxiolin (｡◕‿◕｡) #### \\\\\\\

Anxiolin es una aplicación móvil desarrollada con Ionic Framework y pensada para ser lanzada para iOS y Android. 

La idea de la aplicación es ayudar a personas con ataques de pánico y ataques de ansiedad. La aplicación ayudará con esto a través de respiraciones guiadas mientras
que le indica diversas actividades y minijuegos al usuario.
Luego de una sesión, el usuario podrá darle feedback sobre que actividad lo ayudo más o si alguna actividad no lo ayudo y así mostrarle esa actividad más o menos veces
según el feedback que haya dado.
Asímismo, podrá desactivar algunas actividades o probarlas manualmente desde un menú de selección.

También, se planea agregar un calendario para que el usuario pueda ver si tuvo alguna sesión en el día, cuantas tuvo, cuanto tiempo estuvo en cada sesión, 
con que actividades jugó, etc.


//// #### Ejecutar proyecto (◕‿◕✿) #### \\\\\\\

Ejecutar esta aplicación no es nada dificil, nada más hay que descargar este repositorio, abrirlo en algún editor de texto (Preferiblemente en VS Code) y ejecutar 
los siguientes comandos:

  - npm install
  - ionic serve
 
¡Y listo! Ya tenemos la aplicación funcionando. Ionic por defecto va a correr una versión gráfica de iOS (Pero no simula a la perfección un dispositivo iOS).
Recomiendo correr el siguiente comando:

  - ionic serve -l

Este comando va a abrir el lab de Ionic y va a mostrar las vistas de iOS y de Android una al lado de la otra.

(Esta parte ya es opcional)

Cómo dije anteriormente, ejecutar este proyecto de esta manera NO va a emular perfectamente un dispositivo iOS o Android. Pero hay una manera de testear localmente 
la aplicación como si lo estuvieramos corriendo en un dispositivo Android/iOS:

  - Este proyecto ya tiene cargada la dependencia (Cordova) la cual permite emular este proyecto en cualquier dispositivo cargado en nuestra PC.
  - Para emular Android (SOLO WINDOWS): Tenemos que descargarnos Android Studio y, dentro del IDE cargar algún dispositivo de los que trae por defecto en nuestra PC
  luego, dentro del VS Code con el proyecto ejecutamos los siguientes comandos:
    - ionic cordova emulate android --list           #Esto nos va a mostrar los dispositivos cargados
    - ionic cordova emulate android --target=Dispositivo
  - Para emular iOS (SOLO MAC): Tenemos que descargarnos Xcode (La cual ya va a venir con los dispositivos cargados) y 
  dentro del VS Code con el proyecto ejecutamos los siguientes comandos:
    - ionic cordova emulate ios --list           #Esto nos va a mostrar los dispositivos cargados
    - ionic cordova emulate ios --target=Dispositivo

//// #### A FUTURO ಠ_ಠ #### \\\\\\\

Ok, haciendo y planificando un par de cosas para esta aplicación se me ocurrió OTRA idea que seguramente la termine mechando con la app principal, y es hacer una
aplicación de salud mental.
La idea es que la este feature le haga seguimiento al usuario en actividades como meditar, practicar la gratitud y escribir a diario, estas actividades también van a
estar disponibles en la aplicación (También que le haga seguimiento al ejercicio, pero ya veré). Que la aplicación te motive a practivar diariamente estos 
hábitos (Y mostrar sus beneficios a largo plazo \ (•◡•) /).
Esto va a ir mechado al calendario que va a tener la aplicación, en el mismo se podrá ver todo lo que fue haciendo el usuario (Cuanto meditó, que escribió, porque 
agradeció ese día, etc.)
Obviamente, voy a hacer esto si me da la nafta (y si no suben el precio de la cafeína (?)).
