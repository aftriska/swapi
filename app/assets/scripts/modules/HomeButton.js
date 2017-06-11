class HomeButton {
  constructor() {
    this.btn = document.querySelector('[name=route]');
    this.bUrl = "/";
    this.modals = Array.from(document.querySelectorAll('.modal'));
    this.menus  = Array.from(document.querySelectorAll('.route'));
    this.events();
  }

  events() {
    this.btn.addEventListener('click', this.clearPage.bind(this));
  }

  clearPage() {
    window.history.pushState({}, "name", this.bUrl);
    this.menus.forEach(m => m.style.display = 'block');
    this.modals.forEach(modal => modal.classList.remove('modal--is-visible'));
  }
}

export default HomeButton;
