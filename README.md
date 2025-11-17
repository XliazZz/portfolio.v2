-----

# 🚀 Portfolio Personal de Elías Martínez

## Desarrollador Web Full-Stack | Performance & Experiencia de Usuario

Este es el repositorio oficial de mi portafolio personal y sitio web. Construido con un enfoque en la **velocidad de carga (Lighthouse)**, **accesibilidad (A11Y)** y **optimización SEO** utilizando las mejores prácticas de la **Arquitectura de Islas de Astro**.

El objetivo principal es mostrar mis habilidades de desarrollo Full-Stack y servir como una plataforma para mis proyectos.

-----

## ✨ Características Destacadas

Este portafolio no solo muestra mi trabajo, sino que es un proyecto de alto rendimiento por sí mismo:

  * **⚡ Web Performance (LCP/FID):** Puntuaciones cercanas al 100% en Lighthouse gracias al SSR (Server-Side Rendering) de Astro.
  * **🏝️ Arquitectura de Islas:** Utiliza la arquitectura de Astro para cargar JavaScript de forma perezosa (`client:visible`, `client:idle`) solo donde es necesario (Formularios, Barras de Navegación).
  * **📐 Diseño y Estilo:** Implementado con **Tailwind CSS** para un desarrollo rápido y escalable.
  * **🔍 SEO Avanzado (Structured Data):** Incluye Schemas anidados **JSON-LD** para `Person`, `ContactPoint`, `ItemList` y `SoftwareSourceCode` para maximizar la visibilidad en resultados de búsqueda (Rich Results).
  * **♿ Accesibilidad (A11Y):** Diseño semántico, uso correcto de etiquetas `aria-label` y jerarquía de encabezados.

-----

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología | Uso Principal |
| :--- | :--- | :--- |
| **Framework/Compilador** | **Astro** | Generación de sitio estático (SSG) y Zero-JS por defecto. |
| **Estilos** | **Tailwind CSS** | Framework CSS *utility-first* para un desarrollo rápido y responsive. |
| **Preprocesamiento** | **Vite** | Compilador y Bundler utilizado por Astro para desarrollo y producción. |
| **Control de Versiones** | **Git** / **GitHub** | Historial de código y *deployment* automatizado. |
| **Lenguajes** | **HTML, CSS, JavaScript, TypeScript** | Fundamentos del desarrollo. |

-----

## 🏗️ Estructura del Proyecto

El portafolio sigue la **convención estándar del Framework Astro**, organizada por la función que cumple cada tipo de archivo en la arquitectura del sitio.

| Directorio | Propósito General | Detalles Clave de Este Proyecto |
| :--- | :--- | :--- |
| **`src/pages/`** | **Rutas y Vistas (Routing)** | Contiene archivos `.astro` que se convierten en las rutas navegables del sitio (ej., `index.astro` para la Home, `404.astro` para el error). Define el contenido base de cada URL. |
| **`src/layouts/`** | **Plantillas Principales (Wrapper)** | Define la estructura HTML base de la página (`<head>`, `<body>`). El archivo `Layout.astro` centraliza los **Metadatos globales** y el **Schema JSON-LD (`Person`, `ContactPoint`)** aplicable a todo el sitio. |
| **`src/sections/`** | **Estructura de Contenido (Bloques)** | Componentes grandes que representan secciones completas de la *landing page* (ej., `HeaderSection`, `ProjectsSection`, `ContactSection`). |
| **`src/components/`** | **Módulos Reutilizables (Islands)** | Componentes más pequeños y modulares que se combinan para construir las secciones (Botones, Tarjetas, Chips de Tecnología). |
| **`src/data/`** | **Fuente de Datos (Data Layer)** | Archivos `.json` o `.ts` que contienen la data principal del proyecto, como la lista de servicios y la información de los proyectos. |
| **`public/`** | **Recursos Estáticos (Assets)** | Archivos que son servidos directamente al navegador **sin ser procesados** por Astro (Imágenes de *featured*, *favicons*, *sprites* SVG y archivos JS para hidratación de cliente). |

### 💡 Arquitectura de Componentes

La interacción clave de este proyecto se encuentra en la anidación y el rendimiento:

* **Esquemas Anidados:** El `Layout.astro` establece la identidad global, mientras que componentes como `CardProject.astro` implementan **Schemas locales (`SoftwareSourceCode`)** para definir la semántica de contenido específica.
* **Lazy Loading:** Componentes con lógica de interacción (ej., `ContactFormWrapper.astro`) usan directivas de cliente de Astro (`client:visible`, `client:idle`) para asegurar que el **JavaScript solo se descargue cuando es visible** o cuando la *main thread* está inactiva, maximizando el rendimiento (LCP).

-----

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Eres libre de usar el código como referencia, pero te pido que respetes el contenido y diseño originales si planeas modificarlo para tu propio uso.

-----

### 📬 Contacto

Si tienes alguna pregunta sobre el código o deseas contactarme para proyectos:

  * **LinkedIn:** [https://www.linkedin.com/in/xliazzz/](https://www.linkedin.com/in/xliazzz/)
  * **Email:** [eliasdev1912@gmail.com](eliasdev1912@gmail.com)