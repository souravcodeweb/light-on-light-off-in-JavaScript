let bulbon = document.querySelector('.bulb-on');
let bulbof = document.querySelector('.bulb-off');

bulbon.addEventListener('click', () => {
    let off = document.querySelector(".off");
    off.classList.add('off_active')

    let on = document.querySelector('.on');
    on.classList.add('on_active')
});


bulbof.addEventListener('click', () => {
    let on = document.querySelector(".on");
    on.classList.add('on_next')

    let off = document.querySelector('.off');
    off.classList.add('off_next')
});