import '../../../Scss/Home/below.scss'
import all from '../_All/below'
// Install modules
// import Swiper from 'swiper'
import { Autoplay, Navigation, Swiper, Virtual } from 'swiper/js/swiper.esm.js'

Swiper.use([Navigation, Autoplay, Virtual])


if (document.querySelectorAll('.slider .slide').length > 0) {
    var mySwiper = new Swiper('.swiper-container', {
        init: true,
        speed: 1500,
        autoplay: {
            delay: 10000
        },
        slidesPerView: 1,
        loop: true,
        initialSlide: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        updateOnImagesReady: true,
        on: {
            imagesReady: function () {
                all.lazyUpdate()
            }
        }
    })

    document.querySelectorAll('.swiper-container').forEach(function (element) {
        element.classList.add('after-build')
    })
    document.querySelectorAll('img.loading').forEach(function (element) {
        element.classList.remove('loading')
        element.classList.add('loaded')
    })
}
