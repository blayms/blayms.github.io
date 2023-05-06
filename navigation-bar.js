// Create navigation bar for current HTML page
let navbarElement = document.createElement("nav");
navbarElement.innerHTML = `
<a href="index.html"><img src="mea.png" alt="Home"></img></a>
<a href="other.html">Test</a>
`;
document.querySelector("body").appendChild(navbarElement);

// Import styles for current HTML page

let style = document.createElement("link");
document.querySelector("head").appendChild(style)
style.outerHTML = `<link rel="stylesheet" href="navigation-bar-style.css">`;