import Alpine from "alpinejs";

window.Alpine = Alpine;
Alpine.store("Menu", {
  navIsVisible: false,
  shoppingOptionsIsVisible: false,

  toggleNav() {
    this.navIsVisible = !this.navIsVisible;
  },
  toggleShoppingOptions() {
    this.shoppingOptionsIsVisible = !this.shoppingOptionsIsVisible;
  },
});
Alpine.start();
