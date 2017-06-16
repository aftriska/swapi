class HomeButton {
  constructor() {
    this.homeBtn = document.querySelector('[name=route]');
    this.baseUrl = "/";
    this.modals  = Array.from(document.querySelectorAll('.modal'));
    this.menus   = Array.from(document.querySelectorAll('.route'));
    this.events();
  }

  events() {
    this.homeBtn.addEventListener('click', this.clearPage.bind(this));
  }

  clearPage() {
    window.history.pushState({}, "name", this.baseUrl);
    this.showMenus();
    this.hideModals();
  }

  showMenus() {
    this.menus.forEach(m => m.style.display = 'block');
  }

  hideModals() {
    this.modals.forEach(modal => modal.classList.remove('modal--is-visible'));
  }
}

export default HomeButton;
