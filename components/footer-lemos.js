class Footer_L extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer-lemos-nifme">

        <div class="pt-1 pb-2 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0 small" style="color: #DBE2EF;">Developed by <a style="color: #0077b6;" href="https://rochanaro.github.io/" target="_blank">RochanaRO</a> via <a style="color: #0077b6;" href="https://github.com/" target="_blank">GitHub<i class="mx-1 fab footer-icons fa-github" aria-hidden="true"></i></a> ©2024</p> 

                </div>
            </div>
        </div>

    </div>
    `;
  }
}

customElements.define('footer-component-lemos', Footer_L);