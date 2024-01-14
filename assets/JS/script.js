// script.js

// Function to load HTML content into a specified element
function includeHTML(filename, targetId) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById(targetId).innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", filename, true);
    xhr.send();
}

// Load initial content
includeHTML('site-header.html', 'site-header');
includeHTML('hero.html', 'hero');
includeHTML('site-footer.html', 'site-footer');