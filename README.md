# 🚀 Construir una aplicación móvil (parte B)

## 🎯 Descripción

En esta parte del proyecto, se incorporaron dos componentes clave de **Ionic**: **`ion-card`** y **`ion-modal`**. El objetivo de esta parte fue mejorar la presentación y la funcionalidad de la aplicación móvil mediante la adición de un sistema de tarjetas visualmente atractivas para los horarios de clases, y un modal para permitir a los usuarios agregar, modificar y eliminar horarios de manera eficiente.

- **`ion-modal`**: Usado para proporcionar una interfaz emergente que permite a los usuarios agregar o editar los horarios de clases en un formulario sencillo y accesible.
- **`ion-card`**: Utilizado para mostrar los horarios de clases de manera profesional, con soporte para detalles como el nombre del ramo, el profesor y el horario.

## 💡 Características

Esta parte del proyecto implementa las siguientes funcionalidades:

- **`ion-card`**: 
  - Mejora la presentación de los horarios de clases, permitiendo que cada clase sea representada dentro de una tarjeta visualmente atractiva con un título, subtítulo y detalles adicionales.
  
- **`ion-modal`**:
  - Modal que permite a los usuarios agregar, modificar o eliminar un horario de clase. El formulario del modal incluye campos para el nombre del ramo, el profesor y el horario de la clase.
  
### Páginas principales de la aplicación:

- **Horario de Clases**: Página donde los estudiantes pueden consultar, agregar, modificar y eliminar sus horarios de clases. Esta página utiliza el componente **`ion-card`** para mostrar la lista de horarios y el componente **`ion-modal`** para realizar modificaciones o adiciones.

## 🛠️ Tecnologías

Este proyecto fue desarrollado utilizando las siguientes herramientas:

- **Ionic Framework**: Framework utilizado para desarrollar aplicaciones móviles híbridas utilizando tecnologías web.
- **Node.js**: Instalado para la gestión de dependencias y la ejecución de comandos de Ionic.
- **Ionic CLI**: Herramienta de línea de comandos utilizada para crear, desarrollar y compilar la aplicación.

## 🗂️ Instalación y Ejecución

Para ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. **Clona el repositorio**:
   bash
   git clone https://github.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles
   
2. **Instala las dependencias**:

Asegúrate de tener Node.js y Ionic CLI instalados. Si no lo tienes, puedes descargar Node.js desde aquí y luego instalar Ionic CLI con el siguiente comando:
  bash
  npm install -g @ionic/cli

3. **Ejecutar la aplicación**: Una vez que las dependencias estén instaladas, puedes ejecutar la aplicación en el navegador o en un emulador de Android con:
  bash
  npm install -g @ionic/cli

## 💻 Inicio de Sesión

La aplicación permite a los usuarios gestionar y organizar su tiempo a través de diversas funcionalidades clave. Las principales páginas de la aplicación son:

- **Inicio de sesión**: Página para autenticar a los usuarios. El usuario y la contraseña predeterminados son:
  - **Usuario**: `jdiaz@uniacc.cl`
  - **Contraseña**: `123456`

## 📸 Imágenes de la Aplicación
A continuación, se incluyen algunas capturas de pantalla de las páginas principales de la aplicación:

# - Pantalla de componente ion-card en página de inicio:
  
![Imagen de Componente ion-modal](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/ion-modal.png)

# - Pantalla de componente ion-tabs en página de inicio:
  
![Imagen de Componente ion-card](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/ion-card2.png)

## ⚠️ Desafíos y Soluciones
Durante el desarrollo, algunos de los problemas enfrentados fueron:

1. *Problema con la integración del ion-card y ion-modal: La implementación de ion-card para mostrar la lista de horarios y ion-modal para agregar/editar los horarios requería coordinar correctamente la lógica de los formularios y la visualización dinámica de la lista. Esto fue solucionado al asegurar que cada componente estuviera correctamente enlazado con las propiedades del componente y los datos del modelo.*

2. *Controlar la apertura y cierre del modal: Inicialmente, gestionar el estado de los modales resultó ser un desafío. Sin embargo, utilizando isModalOpen y isEditMode como banderas para manejar los estados de apertura y edición, logramos implementar una experiencia de usuario fluida y sin errores.*

## Autor
# Jacob Díaz
* Estudiante de 4° año de Ingeniería Informática Multimedia.
Este proyecto fue realizado como parte de un ejercicio académico en el curso de Taller de Dispositivos Móviles.

¡Gracias por revisar el proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.

________________________________________________________________________________________________________________________________
________________________________________________________________________________________________________________________________

# 🚀 Construir una aplicación móvil (parte A)

## 🎯 Descripción

En esta parte del proyecto, se incorporaron dos componentes esenciales de **Ionic**: **`ion-card`** y **`ion-tabs`**. El objetivo fue mejorar la navegación y la presentación de contenido en la aplicación móvil mediante la implementación de una interfaz más atractiva y funcional.

- **`ion-card`**: Utilizado para mostrar información relevante en un formato visualmente atractivo, con soporte para imágenes, títulos, subtítulos y contenido dinámico.
- **`ion-tabs`**: Incorporado en la parte inferior de la aplicación para ofrecer una navegación rápida y accesible entre las diferentes secciones, como **Inicio**, **Eventos**, **Planograma General**.

## 💡 Características

Esta parte del proyecto implementa las siguientes funcionalidades:

- **`ion-card`**: 
  - Mejora la presentación de la información, permitiendo la visualización de contenido enriquecido como imágenes, títulos y botones dentro de un formato de tarjeta profesional.
  
- **`ion-tabs`**:
  - Barra de navegación en la parte inferior, con iconos y etiquetas para facilitar el acceso a las secciones clave de la aplicación.
  
### Páginas principales de la aplicación:

- **Inicio**: Página principal de la aplicación.

## 🛠️ Tecnologías

Este proyecto fue desarrollado utilizando las siguientes herramientas:

- **Ionic Framework**: Framework utilizado para desarrollar aplicaciones móviles híbridas utilizando tecnologías web.
- **Node.js**: Instalado para la gestión de dependencias y la ejecución de comandos de Ionic.
- **Ionic CLI**: Herramienta de línea de comandos utilizada para crear, desarrollar y compilar la aplicación.

## 🗂️ Instalación y Ejecución

Para ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. **Clona el repositorio**:
   bash
   git clone https://github.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles
   
2. **Instala las dependencias**:

Asegúrate de tener Node.js y Ionic CLI instalados. Si no lo tienes, puedes descargar Node.js desde aquí y luego instalar Ionic CLI con el siguiente comando:
  bash
  npm install -g @ionic/cli

3. **Ejecutar la aplicación**: Una vez que las dependencias estén instaladas, puedes ejecutar la aplicación en el navegador o en un emulador de Android con:
  bash
  npm install -g @ionic/cli

## 💻 Inicio de Sesión

La aplicación permite a los usuarios gestionar y organizar su tiempo a través de diversas funcionalidades clave. Las principales páginas de la aplicación son:

- **Inicio de sesión**: Página para autenticar a los usuarios. El usuario y la contraseña predeterminados son:
  - **Usuario**: `jdiaz@uniacc.cl`
  - **Contraseña**: `123456`

## 📸 Imágenes de la Aplicación
A continuación, se incluyen algunas capturas de pantalla de las páginas principales de la aplicación:

# - Pantalla de componente ion-card en página de inicio:
  
![Imagen de Componente ion-card](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/ion-card.png)

# - Pantalla de componente ion-tabs en página de inicio:
  
![Imagen de Componente ion-tabs](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/ion-tabs.png)

## ⚠️ Desafíos y Soluciones
Durante el desarrollo, algunos de los problemas enfrentados fueron:

1. *Problema de adaptación de los componentes: La integración de ion-card y ion-tabs en la estructura de la aplicación fue un desafío, ya que no estaban configurados inicialmente. Sin embargo, después de revisar la documentación de Ionic y realizar pruebas con diferentes configuraciones, fue posible implementar ambos componentes sin problemas.*

2. *Navegación entre las páginas: Configurar correctamente la navegación con los ion-tabs requirió ajustes en las rutas y la correcta implementación del enrutamiento de Ionic. Para esto, se aprovechó el sistema de rutas de Angular y las funcionalidades de Ionic para asegurarse de que cada tab dirija a la página correspondiente.*

## Autor
# Jacob Díaz
* Estudiante de 4° año de Ingeniería Informática Multimedia.
Este proyecto fue realizado como parte de un ejercicio académico en el curso de Taller de Dispositivos Móviles.

¡Gracias por revisar el proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.

________________________________________________________________________________________________________________________________
________________________________________________________________________________________________________________________________

# 👋 Gestión Eficaz del Tiempo para Estudiantes

## 🎓 Descripción

La **gestión eficaz del tiempo** es un desafío común para los estudiantes, quienes deben equilibrar actividades como clases, estudio, tareas y vida personal. La falta de una herramienta adecuada para organizar y priorizar estas actividades puede resultar en la pérdida de fechas importantes, estrés y una disminución del rendimiento académico. 

Este proyecto tiene como objetivo proporcionar una solución mediante una **aplicación móvil intuitiva** para que los estudiantes puedan planificar sus actividades de manera eficiente y optimizar su tiempo.

## 💻 Inicio de sesión

La aplicación permite a los usuarios gestionar y organizar su tiempo a través de diversas funcionalidades clave. Las principales páginas de la aplicación son:

- **Inicio de sesión**: Página para autenticar a los usuarios. El usuario y la contraseña predeterminados son:
  - **Usuario**: `jdiaz@uniacc.cl`
  - **Contraseña**: `123456`

### Páginas principales de la aplicación:

- **Inicio**: Página principal que sirve como resumen de la aplicación.

## 🛠️ Tecnologías

Esta aplicación fue desarrollada utilizando las siguientes tecnologías:

- **Ionic Framework**: Para crear la aplicación híbrida y permitir el desarrollo de apps móviles con tecnologías web.
- **Android Studio**: IDE utilizado para el desarrollo de la aplicación.
- **Node.js**: Instalado para la gestión de dependencias y la ejecución de comandos de Ionic.
- **CLI de Ionic**: Herramienta de línea de comandos utilizada para crear, desarrollar y compilar la aplicación.

## 🗂️ Instalación y Ejecución

Para ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. **Clona el repositorio**:
   bash
   git clone https://github.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles.git
   
2. **Instala las dependencias**:

Asegúrate de tener Node.js y Ionic CLI instalados. Si no lo tienes, puedes descargar Node.js desde aquí y luego instalar Ionic CLI con el siguiente comando:
  bash
  npm install -g @ionic/cli

3. **Ejecutar la aplicación**: Una vez que las dependencias estén instaladas, puedes ejecutar la aplicación en el navegador o en un emulador de Android con:
  bash
  npm install -g @ionic/cli

## 📚 Desafíos y Lecciones Aprendidas
Una de las principales dificultades de este proyecto fue la falta de experiencia con Ionic y su lenguaje de componentes. Aprender a manejar las herramientas del framework y entender la estructura de las vistas y navegación entre páginas fue un desafío significativo. Sin embargo, a pesar de estas dificultades, logré crear la máscara de la aplicación y pude implementar la navegación entre las distintas páginas sin problemas.

## 📸 Imágenes de la Aplicación
A continuación, se incluyen algunas capturas de pantalla de las páginas principales de la aplicación:

# - Pantalla de Inicio de Sesión:
  
![Imagen de Inicio de Sesión](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/inicio%20de%20sesi%C3%B3n.png)

# - Pantalla Principal (Inicio):
  
![Imagen de Inicio](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/inicio.png)

# - Pantalla de Horario de Clases:

![Imagen de Horario de Clases](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/horario%20de%20clases.png)

# - Pantalla de Eventos:

![Imagen de Eventos](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/eventos.png)

# - Pantalla de Calificaciones:

![Imagen de Calificaciones](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/calificaciones.png)

# - Pantalla de Ramos:

![Imagen de Ramos](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/ramos.png)

# - Pantalla de Planograma General:
![Imagen de Planograma General](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/inicio.png)

# - Menú Lateral:
![Imagen de Menú Lateral](https://raw.githubusercontent.com/JacobDiazN/TrabajoUnidad3B_Taller_de_dispositivos_moviles/refs/heads/main/src/assets/image/image/imgApp/men%C3%BA.png)


## Autor
# Jacob Díaz
* Estudiante de 4° año de Ingeniería Informática Multimedia.
Este proyecto fue realizado como parte de un ejercicio académico en el curso de Taller de Dispositivos Móviles.

¡Gracias por revisar el proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.

