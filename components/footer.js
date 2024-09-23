class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer-lemos mt-4">

        <div class="py-3 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0" style="color: var(--light-gray);">© 2024 Global Student Friendship</p>
                    <p class="my-0 pt-0"><a class="" href="mailto:gsfodu@gmail.com">gsfodu@gmail.com</a></p>

                </div>


                <div class="col col-md-7 text-right">
                    <p class="mb-0" style="color: var(--light-gray);">Quick Links</p>
                    <p class="my-0 pt-0">
                        <a href=""><i class="mr-3 footer-icons fa-solid fa-house" aria-hidden="true"></i></a>
                        <a href="" target="_blank"><i class="mr-3 fab footer-icons fa-facebook" aria-hidden="true"></i></a>
                        <a href="/pages/events.html" target=""><i class="mr-3 footer-icons fa-solid fa-calendar-days" aria-hidden="true"></i></a>
                        <a href="" target="_blank"><i class="footer-icons fa-solid fa-address-book" aria-hidden="true"></i></a>
                    </p>
                </div>
            </div>
        </div>

    </div>
    `;
  }
}

customElements.define('footer-component', Footer);