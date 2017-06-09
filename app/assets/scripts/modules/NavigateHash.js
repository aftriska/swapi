class NavigateHash {
  constructor(pageRouter, modals, errModul, menus, rootMenu, appBaseUrl) {
    this.bUrl   = appBaseUrl;
    this.router = pageRouter;
    this.modals = modals;
    this.menus  = menus;
    this.rootMenu  = rootMenu;
    this.currPath = location.pathname;
    this.currHash = location.hash;
    this.errHash = errModul;
    this.navigate();
  }

  navigate() {
    this.menus.forEach(m => m.style.display = 'block');

    var rPath = this.router.routes.filter(r => {
      return `${this.bUrl}${r.path}` === this.currPath;
    })[0];

    const rHash = this.router.routes.filter(r => {
      return r.hash === this.currHash;
    })[0];

    if(rPath) {
      if(rHash) {
        if(rHash.name !== "root") {
          this.openPage(rHash.name);
        } else {
          this.hideModuls();
        }
      } else {
        this.openPage(this.errHash);
      }
    } else {
      this.menus.forEach(m => m.style.display = 'none');
      this.rootMenu.style.display = 'block';
      this.openPage(this.errHash);
    }
  }

  openPage(modalHash) {
    this.hideModuls();
    const modal = this.modals.find(m => {
      return m.attributes[0].value === modalHash;
    });

    modal.classList.add('modal--is-visible');
  }

  hideModuls() {
    this.modals.forEach(modal => modal.classList.remove('modal--is-visible'));
  }
}

export default NavigateHash;
