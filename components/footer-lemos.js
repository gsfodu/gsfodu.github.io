class Footer_L extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer-lemos-nifme">

        <div class="pt-1 pb-2 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto align-middle">
                    <p class="mb-0 small" style="color: #DBE2EF;">
                        Maintained by <a style="color: #0077b6;" href="https://suhaspanuganti.github.io/" target="_blank">Suhas Panuganti</a>
                        &middot;
                        Developed by <a style="color: #0077b6;" href="https://rochanaro.github.io/" target="_blank">rochanaro<i class="mx-1 fab footer-icons fa-github" aria-hidden="true"></i></a>
                        &middot;
                        ©2026
                    </p>
                </div>
            </div>
        </div>

    </div>
    `;
  }
}

customElements.define('footer-component-lemos', Footer_L);
