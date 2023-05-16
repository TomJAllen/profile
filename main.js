class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
        <nav id="header">
          <a href="index.html"><h2>TOM ALLEN</h2></a>
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

class MobileHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
        <div id="mobile-nav">

          <a href="index.html"><h2>TOM ALLEN</h2></a>

          <div id="my-links">
            <a href="about_me.html">About Me</a>
            <a href="index.html">Projects</a>
            <a href="cv.html">CV</a>
            <a href="contact_me.html">Contact Me</a>
          </div>

          <a href="javascript:void(0);" class="icon" onclick="changeNav()">
            <i class="fa fa-bars"></i>
          </a>

      </div>
      `
  }
}

//Footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
        <div id=footer>
          <a id="footer-name" href="contact_me.html"><strong>Tom Allen |</strong> Product Management & Web Development
          </a>
        </div>
      `
  }
}

customElements.define('main-nav', Header);
customElements.define('mobile-nav', MobileHeader);
customElements.define('main-footer', Footer);

function changeNav() {
  var x = document.getElementById("my-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
