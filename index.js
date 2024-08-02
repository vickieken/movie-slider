let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('#carousel');
let lisItemDom = document.querySelector('#carousel .list');
let thumbnailDom = document.querySelector('#carousel .thumbnail');
let navOption = document.querySelector('ul');
var barBtn = document.querySelector('.fa-bars');
let navLink = document.querySelector('.nav-link');

nextDom.addEventListener('click', ()=> {
    showSlider('next');
});

prevDom.addEventListener('click', ()=> {
    showSlider('prev');
});

let timeRunning= 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout (()=> {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('#carousel .list .item');
    let itemthumbnail = document.querySelectorAll('#carousel .thumbnail .item');

    if(type === 'next') {
        lisItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemthumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionItem = itemSlider.length - 1;
        lisItemDom.prepend(itemSlider[positionItem]);
        thumbnailDom.prepend(itemthumbnail[positionItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout (()=> {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout (()=> {
        nextDom.click();
    }, timeAutoNext);
}
     // menu Bar toogle
    barBtn.addEventListener('click', ()=> {
        barBtn.classList.toggle('fa-times');
        navOption.classList.toggle('show-menu');
    });

    navLink.addEventListener('click', ()=> {
        barBtn.classList.remove('fa-times');
        navOption.classList.remove('show-menu');
    });