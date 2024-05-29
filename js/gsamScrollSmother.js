gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

let smootherInstance;

function initializeScrollSmoother() {
    if (window.innerWidth > 900) {
        if (smootherInstance) {
            smootherInstance.kill(); // Уничтожаем предыдущий экземпляр ScrollSmoother
        }
        smootherInstance = ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 1.5,
            effects: true,
        }); 
    } else {
        if (smootherInstance) {
            smootherInstance.kill(); // Уничтожаем экземпляр ScrollSmoother при достижении 900px
        }
    }
}

function updateScrollSmoother() {
    initializeScrollSmoother(); // Повторно создаем экземпляр ScrollSmoother
    ScrollTrigger.refresh(); // Обновляем ScrollTrigger
}

// Вызываем функцию updateScrollSmoother каждый раз, когда изменяется контент
// Например, после загрузки динамического контента или после изменения размеров окна
updateScrollSmoother();
window.addEventListener('resize', updateScrollSmoother);
