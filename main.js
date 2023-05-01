class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav>
    <a href="/index.html"><h2>TOM ALLEN</h2></a>
    <ul>
      <li><a href="about_me.html">About Me</a></li>
      <li><a href="index.html">Projects</a></li>
      <li><a href="cv.html">CV</a></li>
      <li><a href="contact_me.html">Contact Me</a></li>
    </ul>
  </nav>
        `
  }
}

//Footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
        <div id=footer>
          <a id="footer-name" href="../index.html"><strong>Tom Allen |</strong> Product Management & Web Development
          </a>
        </div>
      `
  }
}
customElements.define('main-nav', Header);
customElements.define('main-footer', Footer);
