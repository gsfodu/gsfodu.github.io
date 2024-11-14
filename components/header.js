class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <h1><a class="navbar-brand" href="/">
        <img src="/assets/img/gsf_logo.png" width="40" height="40" class="d-inline-block mr-2" alt=""> <span class="d-none d-md-inline-block">Global Student Friendship</span><span class="d-inline-block d-md-none">GSF ODU</span></a></h1>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-2">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/pages/about_us.html">About Us</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Our Ministries
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/pages/ministries/core_team.html">Core Team</a>
                  <a class="dropdown-item" href="/pages/ministries/furniture.html">Furniture</a>
                  <a class="dropdown-item" href="/pages/ministries/hospitality.html">Hospitality</a>
                  <a class="dropdown-item" href="/pages/ministries/exchange_students.html">Exchange Students</a>
                  <a class="dropdown-item" href="/pages/ministries/communication.html">Communication</a>
                  <a class="dropdown-item" href="/pages/ministries/outreach.html">Outreach</a>
                  <a class="dropdown-item" href="/pages/ministries/special_events.html">Special Events</a>
                  <a class="dropdown-item" href="/pages/ministries/small_groups.html">Small Groups</a>
                </div>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/pages/events.html">Events</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/pages/gallery.html">Gallery</a>
            </li>
            <!--<li class="nav-item mr-2"><a class="nav-link" href="/pages/gsf_alumni.html">GSF Alumni</a></li>-->
            <li class="nav-item mr-2">
              <a class="nav-link" href="/pages/contact_us.html">Contact Us</a>
            </li> 
          </ul>
        </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);