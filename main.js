class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
        <nav id="header">
          <a href="index.html"><h2>TOM ALLEN</h2></a>
          <ul>
            <li><a href="about_me.html">About Me</a></li>
            <li><a href="index.html#projects-overview">Projects</a></li>
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

          <div id="my-links" style="display:none">
            <a href="about_me.html">About Me</a>
            <a href="index.html#projects-overview">Projects</a>
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

// Switching words

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = 'letter out';
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = 'letter in';
  }, 340 + (i * 80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
