function addHeader() {
  var header = document.createElement("div");
  header.id = "header";
  header.innerHTML = '<a href="/">Homepage</a>';
  document.body.insertBefore(header, document.querySelector("#main"));
}

function wrapMain() {
  document.body.innerHTML = '<div id = "main">' + document.body.innerHTML + "</div>";
}

function addFooter() {
  let footer = document.createElement("div");
  footer.id = "footer";
  footer.innerHTML = '<a href="https://github.com/gosoccerboy5/gosoccerboy5.github.io"><img src="/resources/GitHub-Mark-64px.png" title = "Source code on Github" width = "30" height = "30"></a> <a href="https://scratch.mit.edu/users/gosoccerboy5"><img src="https://cdn2.scratch.mit.edu/get_image/user/13633428_60x60.png" width="30" height="30" title = "My Scratch profile"></a>';
  document.body.appendChild(footer);
}

function addStylesheet() {
  let stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "https://gosoccerboy5.github.io/resources/stylesheet.css";
  document.head.appendChild(stylesheet);
}

function addFavicon() {
  let favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href = "https://gosoccerboy5.github.io/resources/favicon.ico";
  document.head.appendChild(favicon);
}

wrapMain();
addFooter();
addStylesheet();
addHeader();
addFavicon();
// Hey. It's cringey code, but it works.
