let screenWidth = window.innerWidth;
if (screenWidth > 0) {
    let pageSlider = new Swiper('.page', {
        // Свои классы
        wrapperClass: 'page__wrapper',
        slideClass: 'page__screen',
    
        // Вертикальный слайдер
        direction: 'vertical',
    
        // Количество слайдов для показа 
        slidePerView: 'auto',
    
        // Включая параллакс
        parallax: true,
    
        // Управление клавиатурой
        keyboard: {
            // включить/выключить
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
    
        // Управление колесом мыши
        mousewheel: {
            // Чувствительность колеса мыши
            sensitivity: 1,
        },
         
        watchOverflow: true,
        speed: 800,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
    
    
        pagination: {
            el: '.page__pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'page__bullet',
            bulletActiveClass: 'page__bullet_active',
        },
    
        scrollbar: {
            el: '.page__scroll',
            dragClass: 'page__drag-scroll',
            draggable: true,
        },
    
    });    
}


// Мой скрипт



// Скрипт калькулятора цены
check = document.getElementById('cardCheckbox');
let totalSumm = 0;
if(check.checked) {
    totalSumm = 500;
} else {
    totalSumm = 0;
}
document.getElementById('totalSumm').innerHTML = totalSumm;
function calculatorPrice(item) {
    if (item.checked) {
        totalSumm += parseInt(item.value);
    } else {
        totalSumm -= parseInt(item.value);
    }
    document.getElementById('totalSumm').innerHTML = totalSumm;
}
