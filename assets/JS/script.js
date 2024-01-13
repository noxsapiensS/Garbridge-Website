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

// Include header
includeHTML('site-header.html', 'site-header');

// Include hero
includeHTML('hero.html', 'hero');

includeHTML('about.html', 'about');

includeHTML('services.html', 'services');

includeHTML('testimonials.html', 'testimonials');

// Include contact
includeHTML('contact.html', 'contact');

// Include footer
includeHTML('site-footer.html', 'site-footer');