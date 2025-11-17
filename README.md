---

# 🚀 **Portfolio Personal — Elías Martínez**

## **Desarrollador Web Full-Stack | Performance · Accesibilidad · SEO**

Repositorio oficial de mi **portfolio personal** y sitio web profesional.
Construido con foco en **rendimiento extremo**, **accesibilidad (A11y)** y **SEO avanzado**, aprovechando al máximo las ventajas de **Astro + Arquitectura de Islas**.

---

# ✨ **Características Principales**

Este proyecto no es solo una muestra de mis trabajos:
es una **implementación real de buenas prácticas modernas** en desarrollo web.

### **⚡ Performance / Web Vitals**

* LCP, CLS y INP optimizados con SSR y carga de scripts inteligente.
* JavaScript reducido al mínimo gracias al modelo Zero-JS de Astro.

### **🏝️ Arquitectura de Islas (Islands Architecture)**

Cargas solo lo necesario:

* `client:visible` → hidrata cuando aparece en pantalla
* `client:idle` → hidrata cuando la CPU está libre
* Resultado: **hasta 80% menos JavaScript enviado al cliente.**

### **🎨 Diseño & UI**

* Interfaz desarrollada con **Tailwind CSS**, escalable y altamente personalizable.
* Animaciones optimizadas sin bloquear el render.

### **🔍 SEO Avanzado**

Incluye:

* `JSON-LD` estructurado con:

  * **Person**
  * **ContactPoint**
  * **WebSite**
  * **ItemList**
  * **SoftwareSourceCode** para cada proyecto
* Preload de fuentes, SVG sprites y Cloudinary.

### **♿ Accesibilidad Real (A11Y)**

* Navegación con teclado
* ARIA Labels
* Enlaces semánticos
* Jerarquía correcta de headings

---

# 🛠️ **Tecnologías Utilizadas**

| Categoría           | Tecnologías               | Uso                       |
| ------------------- | ------------------------- | ------------------------- |
| **Framework**       | Astro                     | SSG + SSR + Islands       |
| **Estilos**         | Tailwind CSS              | UI moderna y responsive   |
| **Frontend**        | HTML, CSS, JS, TypeScript | Base del proyecto         |
| **Herramientas**    | Vite, PNPM                | Bundling y performance    |
| **Infraestructura** | Vercel                    | Deploy continuo           |
| **Imágenes**        | Cloudinary                | Optimización automatizada |

---

# 📂 **Estructura del Proyecto**

Organizado para escalabilidad, claridad y mantenibilidad.

### **`src/pages/` — Rutas públicas**

Contiene las páginas visibles del sitio (`index.astro`, `404.astro`).

### **`src/layouts/` — Plantillas**

Incluye:

* Metadatos de SEO globales
* JSON-LD para Person + WebSite
* Preloads optimizados

### **`src/sections/` — Bloques de página**

Secciones completas como:

* Header
* Skills
* Projects
* Contact

### **`src/components/` — Componentes reutilizables**

Botones, tarjetas, chips, tooltips, etc.

### **`src/data/` — Capa de datos**

JSON con proyectos, habilidades y servicios.

### **`public/` — Assets estáticos**

Favicons, sprites, imágenes, manifest y JS sin procesar.

---

# 🧠 **Arquitectura & Decisiones Técnicas**

### **Schemas Anidados**

* Global (`Layout.astro`) define información del autor.
* Cada proyecto añade su propio `SoftwareSourceCode`.

### **Carga Inteligente**

* El 90% de la UI es **HTML + CSS sin JS**.
* Componentes interactivos cargan solo cuando:

  * el usuario los ve (`client:visible`)
  * el navegador está idle (`client:idle`)

### **Accesibilidad Pensada**

* Tooltips accesibles
* Navegación por teclado
* Colores compatibles con WCAG

---

# 📄 **Licencia**

Este proyecto está bajo licencia **MIT**.
Puedes usar el código como referencia o inspiración manteniendo la atribución original.

---

# 📬 **Contacto**

¿Consultas o propuestas laborales?

* **LinkedIn:** [https://www.linkedin.com/in/xliazzz/](https://www.linkedin.com/in/xliazzz/)
* **GitHub:** [https://github.com/XliazZz](https://github.com/XliazZz)
* **Email:** [eliasdev1912@gmail.com](mailto:eliasdev1912@gmail.com)
* **Instagram:** [@xliazzz.dev](https://www.instagram.com/xliazzz.dev)
* **WhatsApp:** [Hablemos por WhatsApp](https://wa.me/5491135726318?text=Hola!%20Quiero%20info%20sobre%20mi%20página%20web)

---