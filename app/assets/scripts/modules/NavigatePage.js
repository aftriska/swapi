class NavigatePage {
  constructor(pageRouter) {
    this.router = pageRouter;
    this.baseUrl   = "";
    this.modals = Array.from(document.querySelectorAll('.modal'));
    this.menus  = Array.from(document.querySelectorAll('.route'));
    this.currentPath = location.pathname;
    this.currentHash = location.hash;
    this.errorHash = 'error404';
    this.events();
  }

  events() {
    this.showMenus();

    const validPath = this.router.routes.filter(r => {
      return `${this.baseUrl}${r.path}` === this.currentPath;
    })[0];

    const validHash = this.router.routes.filter(r => {
      return r.hash === this.currentHash;
    })[0];

    if(validPath) {
      if(validHash) {
        if(validHash.name !== "root") {
          this.openPage(validHash.name);
        } else {
          this.hideAllModuls();
        }
      } else {
        this.openPage(this.errorHash);
      }
    } else {
      this.hideMenus();
      this.openPage(this.errorHash);
    }
  }

  openPage(modalHash) {
    this.hideAllModuls();

    const validModal = this.modals.find(m => {
      return m.attributes[0].value === modalHash;
    });

    validModal.classList.add('modal--is-visible');
  }

  hideAllModuls() {
    this.modals.forEach(modal => modal.classList.remove('modal--is-visible'));
  }

  showMenus() {
    this.menus.forEach(m => m.style.display = 'block');
  }

  hideMenus() {
    this.menus.forEach(m => m.style.display = 'none');
  }
}

export default NavigatePage;
