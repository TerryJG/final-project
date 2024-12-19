var preloader = document.getElementById('preloader');
var body = document.getElementById('body');
var delay = 500;

    window.addEventListener('load', function () {
        preloader.classList.add("fade");
        document.body.style.overflowY = 'auto';
    });