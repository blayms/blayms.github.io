function loadStuff() {

    window.addEventListener('DOMContentLoaded', (event) => {
        Prism.highlightAll();
    });

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
dropdownToggle.children[1].classList.toggle('showed');
    });

    // Get the modal element
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("openModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];


    // Open the modal when the button is clicked
    btn.onclick = function () {
        var csCodeIndex = "C# Hello World Example";
        var codeBlock = document.getElementById('code-block');
        codeBlock.innerHTML = `<p style="color:white;position: fixed;margin-top: -25px;font-weight: bold;">${csCodeIndex}</p>
        <pre><code class="language-csharp">${globalInstance.csharp[csCodeIndex]}</code></pre>`;
        modal.style.display = "block";
        Prism.highlightAll();
    };

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function () {
        modal.style.display = "none";
    };

    // Close the modal when the user clicks anywhere outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

setTimeout(loadStuff, 10)