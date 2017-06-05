class RevealOnClick {
  constructor(id) {
    this.btnId = id;
    // if used button with route
    // this.clickedBtn  = document.querySelector(`[route="/${id}"]`);

    this.clickedBtn  = document.querySelector(`a#${id}`);
    this.pageToReveal = document.querySelector(`.modal#${id}`);
    this.openPages = document.querySelectorAll('.modal');
    this.events();
  }

  events() {
    this.clickedBtn.addEventListener('click', this.openPage.bind(this));
  }

  openPage() {
    this.pageToReveal.classList.add('modal--is-visible');
    this.closeOtherPages();
  }

  closeOtherPages() {
    this.openPages.forEach(page => {
      if(page.id != this.btnId) {
        page.classList.remove('modal--is-visible');
      }
    });
  }
}

export default RevealOnClick;
