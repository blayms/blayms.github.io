function loadStuff() {
    // Create navigation bar for current HTML page
    let navbarElement = document.createElement("nav");
    navbarElement.innerHTML = `
    <a href="index.html"><img src="mea.png" alt="Home"></a>
    <a href="other.html">Test</a>
    `;
    document.querySelector("body").appendChild(navbarElement);

    // Import styles for current HTML page
    let style = document.createElement("link");
    document.querySelector("head").appendChild(style)
    style.outerHTML = `<link rel="stylesheet" href="styles-container.css">`;

    const currentYear = new Date().getFullYear(); // Get the current year
    const yearText = document.getElementsByClassName('yeartext')[0]; // Get the <p> element
    yearText.innerHTML = `© ${currentYear}, Blayms`; // Set the text content to include the current year

    // Dropdowns
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    dropdownToggle.addEventListener('click', function () {
        dropdownToggle.children[1].classList.toggle('showed');
    });
}
setTimeout(loadStuff, 20)