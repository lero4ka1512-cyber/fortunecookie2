const cookie = document.getElementById('cookie');
const cookieLeft = document.getElementById('cookieLeft');
const cookieRight = document.getElementById('cookieRight');
const ribbon = document.getElementById('ribbon');
const predictionEl = document.getElementById('prediction');
const crackSound = document.getElementById('crackSound');

let predictions = [];

// Загружаем предсказания
fetch('predictions.json')
    .then(response => response.json())
    .then(data => predictions = data);

cookie.addEventListener('click', () => {
    // Скрываем цельную печеньку
    cookie.style.opacity = '0';

    // Показываем половинки с анимацией разлома
    cookieLeft.style.opacity = '1';
    cookieRight.style.opacity = '1';
    cookieLeft.style.transform = 'rotate(-30deg) translateX(-20px)';
    cookieRight.style.transform = 'rotate(30deg) translateX(20px)';

    // Вибрация на мобильных
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }

    // Проигрываем звук треска
    crackSound.play();

    // Появление ленточки через небольшую задержку
    setTimeout(() => {
        ribbon.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 500);

    // Появление текста предсказания с эффектом «выдвижения»
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * predictions.length);
        predictionEl.textContent = predictions[randomIndex];
        predictionEl.style.transform = 'translate(-50%, -50%) scaleY(1)';
    }, 900);
});
