const tabheader__items = document.querySelectorAll('.tabheader__item');
const tabcontents = document.querySelectorAll('.tabcontent');

tabheader__items.forEach((tabheader__item, index) => {
    tabheader__item.onclick = () => {
        tabheader__items.forEach((tab) => tab.classList.remove('tabheader__item_active'));

        tabheader__item.classList.add('tabheader__item_active');

        showSlide(index);
    }
});

function showSlide(index) {
    tabcontents.forEach((tabcontent) => tabcontent.classList.add('hide'));
    tabcontents[index].classList.remove('hide');
}

showSlide(0);

const slides = document.querySelectorAll('.offer__slide'); // Все слайды
console.log(slides);

const left = document.querySelector('.offer__slider-prev'); // Кнопка "назад"
console.log(left);

const right = document.querySelector('.offer__slider-next'); // Кнопка "вперед"
console.log(right);

const curr = document.getElementById('current')
const next = document.getElementById('total')
console.log(curr);
console.log(next);


let currentIndex = 0;
let countIndex = 0
function showSlise() {
    slides.forEach(slide => slide.classList.add('hide'));
    slides[currentIndex].classList.remove('hide');
    curr.textContent = String(currentIndex + 1).padStart(2, '0');
}


left.addEventListener('click', () => {

    countIndex = (countIndex - 1 + slides.length) % slides.length

    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlise();

});

right.addEventListener('click', () => {

    currentIndex = (currentIndex + 1) % slides.length;
    showSlise();

});


showSlise();










function startCountdown(targetDate) {
    const target = new Date(targetDate);

    const timerId = setInterval(() => {
        const now = new Date();
        const timeLeft = target - now; 

        if (timeLeft <= 0) {

            clearInterval(timerId); 
            return;
        }

       
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days
        document.getElementById('seconds').textContent = seconds
        document.getElementById('hours').textContent = hours
        document.getElementById('minutes').textContent = minutes


    }, 1000);
}

// Использование
startCountdown("2025-02-02T00:00:00"); // Таймер до 25 января 2025 года
