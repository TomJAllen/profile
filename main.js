class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav>
    <a href="/index.html"><h2>TOM ALLEN</h2></a>
    <ul>
      <li><a href="../html/about_me.html">About Me</a></li>
      <li><a href="../index.html">Projects</a></li>
      <li><a href="../html/cv.html">CV</a></li>
      <li><a href="../html/contact_me.html">Contact Me</a></li>
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
    <ul>
      <li>
        <p>Tom Allen | Web Development
        </p>
      </li>
      <li>
        <a href="https://github.com/TomJAllen" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/thomasallen91/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/thomasallen91/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/" target="_blank">
          <i class="fab fa-dribbble"></i>
        </a>
      </li>
    </ul>
  </div>



      `

  }
}

customElements.define('main-nav', Header);
customElements.define('main-footer', Footer);
