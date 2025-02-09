// backgroundabout

window.addEventListener('scroll', function() {
    const backgroundabout = document.querySelector('.backgroundabout');
    let scrollPosition = window.scrollY;
    
    // Настройка движения фона с другой скоростью
    backgroundabout.style.backgroundPosition = 'center ' + (scrollPosition * -0.2) + 'px'; /* Фон движется медленно */
});




const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  index = (i + slide.length) % slide.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => {
  showSlide(index - 1);
});

next.addEventListener('click', () => {
  showSlide(index + 1);
});

// Автопрокрутка
setInterval(() => {
  showSlide(index + 1);
}, 55000);





// light & dark Theme


var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");

themeButton.onclick = function() {
page.classList.toggle("lightTheme");
page.classList.toggle("darkTheme");
};
