# INFO:WARFARE - Podcast & Web

**Autor:** Jan Vizcaíno Boixadós
**Módulo:** 0615-Disseny d'Interficies Web (RA4) - MONLAU Formación Profesional
**Fecha:** 20/03/2026

## 🎯 Objetivo del Proyecto

El objetivo de esta práctica es diseñar y desarrollar un único producto web funcional, accesible y publicado online, construido con React. La finalidad es alojar e integrar de forma coherente un podcast de tres episodios centrado en la guerra de la información, la manipulación algorítmica y los deepfakes. La web unifica tanto el consumo de los episodios (reproductor y transcripciones) como el material promocional (vídeo) en una misma interfaz, sin depender de enlaces externos que rompan la experiencia del usuario.

## 🛠️ Tecnologías y Herramientas Utilizadas

* **Desarrollo Web:** React.
* **Edición de Audio:** Audacity. Se utilizó para la grabación, limpieza de pistas (reducción de ruido), integración musical con efecto "Auto Duck" y exportación optimizada en formato MP3 (128-192 kbps).
* **Edición de Vídeo:** DaVinci Resolve.

## 📂 Estructura de la Web

La aplicación está dividida en dos rutas principales para garantizar una navegación fluida:

* **Página Principal (`/`):** Contiene la presentación conceptual del proyecto y aloja el vídeo promocional incrustado directamente mediante un componente de React.
* **Página de Episodios (`/podcast`):** Directorio interactivo que incluye el reproductor de audio, información detallada y la transcripción completa de los tres episodios:
    * Episodio 01: El Algoritmo Bélico
    * Episodio 02: La Ilusión de la Mayoría
    * Episodio 03: La Muerte de la Evidencia Visual

## ♿ Accesibilidad (WCAG AA)

Para asegurar que la web sea inclusiva y cumpla con los estándares WCAG AA, se han implementado las siguientes medidas:

* **Estructura Semántica:** Uso riguroso de etiquetas HTML5 (`<header>`, `<main>`, `<footer>`, `<article>`, `<nav>`, `<section>`).
* **Navegación por Teclado:** Integración total para navegar con la tecla `Tab` e interactuar con `Enter`/`Espacio`.
* **Visibilidad y Contraste:** Mantenimiento del *outline* de foco nativo y un diseño de alto contraste (texto blanco sobre fondo rojo brutalista `#E63946` que supera el ratio de 4.5:1).
* **Tecnologías de Asistencia:** Atributos `aria-label` descriptivos en controles multimedia y definición del idioma (`lang="es"`) en la raíz del documento.
* **Transcripciones:** Disponibilidad del texto completo con marcas de tiempo para todo el contenido de audio.

## 📄 Licencias y Atribución

* **Vídeos de recurso:** Extraídos de Pixabay y Pexels (licencia libre, sin atribución requerida).
* **Contenido propio:** Distribuido bajo licencia CC BY-NC-SA 4.0 (reconocimiento, no comercial, compartir igual).
* Toda la información sobre derechos de autor está debidamente documentada en el `footer` de la aplicación.
