import Alpine from "alpinejs";

window.Alpine = Alpine;
Alpine.store("Menu", {
  navIsVisible: false,
  shoppingOptionsIsVisible: false,

  toggleNav() {
    this.isVisible = !this.isVisible;
  },
  toggleShoppingOptions() {
    this.shoppingOptionsIsVisible = !this.shoppingOptionsIsVisible;
  },
});
Alpine.start();
