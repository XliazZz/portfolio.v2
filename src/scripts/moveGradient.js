export class GradientBackground {
    constructor() {
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
      if (!this.interBubble) {
        console.error("Elemento .interactive no encontrado");
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
      window.addEventListener("scroll", this.handleScroll.bind(this), {
        passive: true,
      });
      window.addEventListener("resize", this.handleResize.bind(this), {
        passive: true,
      });
    }

    handleMouseMove(event) {
      this.tgX = event.clientX;
      this.tgY = event.clientY;

      if (!this.isMoving) {
        this.isMoving = true;
      }
    }

    handleScroll() {
      this.tgY += window.scrollY;
    }

    handleResize() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
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

      this.interBubble.style.transform = `translate3d(${Math.round(this.curX)}px, ${Math.round(this.curY)}px, 0)`;

      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    }

    destroy() {
      window.removeEventListener("mousemove", this.handleMouseMove);
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("resize", this.handleResize);

      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }

      clearTimeout(this.resizeTimeout);
    }
  }