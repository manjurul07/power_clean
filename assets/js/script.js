// Js for qna animation

document.addEventListener('DOMContentLoaded', function () {
    const qnaItems = document.querySelectorAll('.qna-item');

    qnaItems.forEach(item => {
        const question = item.querySelector('.question');

        question.addEventListener('click', function () {
            qnaItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
});

// Js For page animation

AOS.init();


// Js for Testimonials Animation

document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.querySelector('.slider-nav');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    let currentIndex = 0;

    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dot');

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 20;
        track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

        cards.forEach((card, index) => {
            card.classList.toggle('testimonial-card-active', index === currentIndex);
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function nextSlide() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1;
        }
        updateSlider();
    }

    setInterval(nextSlide, 5000);

    updateSlider();

    window.addEventListener('resize', function () {
        updateSlider();
    });
});
