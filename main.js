import Alpine from "alpinejs";

window.Alpine = Alpine;
Alpine.store("Menu", {
  isVisible: false,

  toggle() {
    this.isVisible = !this.isVisible;
  },
});
Alpine.start();
