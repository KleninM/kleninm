<link href="cards.html"></link>
// Ждем, когда загрузится вся страница
document.addEventListener('DOMContentLoaded', function() {

    // Находим ВСЕ кнопки "Подробнее"
    let detailButtons = document.querySelectorAll('.detail-button'); // Не забудь дать кнопкам этот класс!

    // Перебираем каждую кнопку
    detailButtons.forEach(function(button) {
        // На каждую кнопку вешаем обработчик клика
        button.addEventListener('click', function() {
            // Находим блок с деталями, который находится СЛЕДУЮЩИМ после кнопки
            // (предположим, что он идет сразу после кнопки в HTML)
            let details = this.nextElementSibling;

            // Проверяем, скрыт блок или виден
            if (details.style.display === 'none') {
                details.style.display = 'block'; // Показываем
                this.textContent = 'Скрыть'; // Меняем текст кнопки
            } else {
                details.style.display = 'none'; // Скрываем
                this.textContent = 'Подробнее'; // Меняем текст обратно
            }
        });
    });

    // Добавим возможность менять цвет фона карточки
    let cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            // При клике на карточку добавляем ей красную обводку (или любой другой класс)
            this.classList.toggle('card-selected');
        });
    });

});