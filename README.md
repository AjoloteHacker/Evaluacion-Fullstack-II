# Portafolio Web - Evaluación Fullstack II

Repositorio correspondiente a la evaluación práctica de la asignatura Fullstack II en Duoc UC. El proyecto consiste en un portafolio web personal, responsivo y dinámico, orientado a la presentación de proyectos académicos y personales, competencias técnicas y canales de comunicación.

---

## Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Características y Funcionalidades](#características-y-funcionalidades)
5. [Instrucciones de Uso](#instrucciones-de-uso)
6. [Detalles de Implementación](#detalles-de-implementación)
7. [Información Institucional y del Autor](#información-institucional-y-del-autor)

---

## Descripción General

Este sitio web fue desarrollado como parte de las evaluaciones prácticas del módulo Fullstack II. Su propósito es consolidar y demostrar el dominio de estándares modernos de desarrollo web del lado del cliente (frontend), abordando:

- Maquetación semántica y accesible mediante HTML5.
- Diseño visual avanzado, estructuración en cuadrículas y adaptabilidad multidispositivo mediante CSS3 (Flexbox y CSS Grid).
- Programación modular en JavaScript (ES6+), manipulación del DOM, control de eventos del navegador y validación de formularios.

---

## Tecnologías Utilizadas

- **HTML5**: Estructuración semántica del documento (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`), soporte de accesibilidad y metadatos técnicos.
- **CSS3**:
  - Variables CSS (Custom Properties) para centralización de paleta cromática y temas visuales.
  - CSS Grid y Flexbox para diagramación espacial responsiva.
  - Media Queries para adaptación a dispositivos móviles, tabletas y escritorio.
  - Animaciones basadas en fotogramas clave (`@keyframes`) y transiciones de aceleración por hardware.
- **JavaScript (ES6+)**:
  - Modo estricto (`"use strict"`).
  - Manipulación directa del Document Object Model (DOM).
  - Manejo y delegación de eventos del navegador (`DOMContentLoaded`, `click`, `scroll`, `submit`).
  - Validación lógica de formularios en el cliente.
  - Integración asíncrona mediante Fetch API.
  - Control de desplazamiento y cálculo de métricas del viewport.
- **Recursos Externos e Iconografía**:
  - Google Fonts: Cinzel, Cinzel Decorative e Inter.
  - Font Awesome 6.5.1: Iconografía de interfaz y navegación.
  - Devicon: Iconografía de lenguajes de programación y herramientas de desarrollo.

---

## Estructura del Proyecto

```text
Evaluacion-Fullstack-II/
├── assets/
│   ├── Avatar.jpg          # Imagen de perfil del autor
│   └── Bloodborne.jpeg     # Imagen de fondo para el entorno visual
├── Evaluacion.html         # Documento HTML principal
├── styles.css              # Hoja de estilos global y diseño responsivo
├── script.js               # Lógica de interacción, filtros y validaciones
└── README.md               # Documentación técnica del proyecto
```

---

## Características y Funcionalidades

### 1. Navegación e Interfaz de Usuario
- **Encabezado Fijo (Sticky Header)**: Barra superior persistente con desenfoque de fondo (`backdrop-filter`) que facilita el acceso a cualquier sección en todo momento.
- **Seguimiento de Sección (Scrollspy)**: Actualización automática de la clase activa en el menú de navegación conforme el usuario se desplaza por las distintas secciones.
- **Barra de Progreso de Lectura**: Indicador superior dinámico que refleja el porcentaje de desplazamiento vertical acumulado en la página.
- **Botón de Retorno al Inicio**: Control flotante que se hace visible tras superar un umbral de desplazamiento, permitiendo volver a la cabecera mediante desplazamiento suave (`smooth scroll`).

### 2. Galería de Proyectos con Filtro Dinámico
- Distribución de tarjetas en cuadrícula adaptativa (CSS Grid).
- Filtrado dinámico por categorías técnicas (`HTML & CSS`, `JavaScript`, `Software & Tools`) mediante atributos de datos (`data-filtro` y `data-categoria`).
- Transición visual de ocultamiento y reaparición escalonada de elementos visibles.
- Enlaces externos a repositorios en GitHub con atributos de seguridad (`target="_blank"` y `rel="noopener noreferrer"`).

### 3. Formulario de Contacto y Validación en Cliente
- Entradas para nombre completo, dirección de correo electrónico y contenido del mensaje.
- Validación de datos controlada por script (`novalidate` activo en HTML):
  - Verificación de longitud mínima en campos de texto.
  - Señalización visual de estados inválidos mediante clases CSS dedicadas.
  - Limpieza de errores en tiempo de ejecución.
  - Retroalimentación interactiva del estado de envío en pantalla.

---

## Instrucciones de Uso

### Requisitos
El proyecto no requiere dependencias externas, compiladores ni gestores de paquetes. Es compatible con cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Despliegue Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/AjoloteHacker/Evaluacion-Fullstack-II.git
   ```

2. Entrar al directorio del proyecto:
   ```bash
   cd Evaluacion-Fullstack-II
   ```

3. Abrir la aplicación:
   - **Opción A (Directa)**: Abrir el archivo `Evaluacion.html` con un navegador web.
   - **Opción B (Servidor Local)**: Ejecutar un servidor de desarrollo HTTP (por ejemplo, con Live Server en VS Code o mediante Python):
     ```bash
     python -m http.server 8000
     ```
     Posteriormente, ingresar a `http://localhost:8000/Evaluacion.html` en el navegador.

---

## Información Institucional y del Autor

- **Autor**: Joaquín Oyarzún
- **Institución**: Duoc UC
- **Asignatura**: Fullstack II
- **Año Académico**: 2026
- **Repositorio en GitHub**: [AjoloteHacker/Evaluacion-Fullstack-II](https://github.com/AjoloteHacker/Evaluacion-Fullstack-II)
