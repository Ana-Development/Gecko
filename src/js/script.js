import Swiper from 'swiper';
import 'swiper';
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
});