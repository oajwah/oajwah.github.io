window.addEventListener('load', function () {
    alert('Hello! My name is Omar');
});

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a');
    links.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'grey';
        });
        link.addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'white';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('button');
    btn.addEventListener('click', function () {
        var currentWidth = btn.offsetWidth;
        var currentHeight = btn.offsetHeight;
        btn.style.width = (currentWidth * 2) + 'px';
        btn.style.height = (currentHeight * 2) + 'px';
    });
});