// backgroundabout
window.addEventListener('scroll', function() {
    const backgroundabout = document.querySelector('.backgroundabout');
    let scrollPosition = window.scrollY;
    
    // Настройка движения фона с другой скоростью
    backgroundabout.style.backgroundPosition = 'center ' + (scrollPosition * -0.2) + 'px'; /* Фон движется медленно */
});



// light & dark Theme


var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");

themeButton.onclick = function() {
page.classList.toggle("lightTheme");
page.classList.toggle("darkTheme");
};