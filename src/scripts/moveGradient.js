export class GradientBackground {
    constructor() {
      // 1. ⭐️ REFERENCIA AL CONTENEDOR PADRE (.gradient-bg)
      this.container = document.querySelector(".gradient-bg"); 
      this.interBubble = document.querySelector(".interactive");
      this.curX = 0;
      this.curY = 0;
      this.tgX = 0;
      this.tgY = 0;
      this.isMoving = false;
      this.animationFrameId = null;
      this.resizeTimeout = null;

      this.init();
    }

    init() {
      if (!this.interBubble || !this.container) {
        console.error("Elemento .interactive o .gradient-bg no encontrado");
        return;
      }

      this.interBubble.style.willChange = "transform";
      this.bindEvents();

      this.animate();
    }

    bindEvents() {
        window.addEventListener("mousemove", this.handleMouseMove.bind(this), {
          passive: true,
        });
        
        // ❌ Eliminado el listener para 'scroll' 

        window.addEventListener("resize", this.handleResize.bind(this), {
          passive: true,
        });
    }

    handleMouseMove(event) {
        // 2. ⭐️ CRÍTICO: Cálculo de coordenadas relativas al contenedor
        const containerRect = this.container.getBoundingClientRect();

        // Posición del cursor (absoluta) menos la posición del contenedor (top/left)
        this.tgX = event.clientX - containerRect.left;
        this.tgY = event.clientY - containerRect.top;

        if (!this.isMoving) {
          this.isMoving = true;
        }
    }

    // ❌ Eliminado el método handleScroll() 
    
    handleResize() {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
          // Si necesitas recalcular algo al cambiar de tamaño, hazlo aquí.
        }, 250);
    }

    animate() {
        const dx = this.tgX - this.curX;
        const dy = this.tgY - this.curY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 0.5 && this.isMoving) {
          this.isMoving = false;
        }

        const speed = Math.min(0.15, 20 / (distance + 1));
        this.curX += dx * speed;
        this.curY += dy * speed;

        // El 'transform' ahora usa las coordenadas relativas this.curX/Y
        this.interBubble.style.transform = `translate3d(${Math.round(this.curX)}px, ${Math.round(this.curY)}px, 0)`;

        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    }

    destroy() {
        window.removeEventListener("mousemove", this.handleMouseMove);
        // window.removeEventListener("scroll", this.handleScroll); // Ya no se necesita remover
        window.removeEventListener("resize", this.handleResize);

        if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
        }

        clearTimeout(this.resizeTimeout);
    }
}