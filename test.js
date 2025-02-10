let currentIndex = 0; 

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const totalImagens =document.querySelectorAll('.carousel img').length;
    const containerWidth = document.querySelector('.corousel-conteiner').offseWidth;

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = totalImagens - 1;
    } else if (currentIndex >=totalImagens) {
        currentIndex = 0;
    }

    const offset = -currentIndex * conteinerWidth;
    carousel.styler.transform = `translateX (${offset}px)`;
    }