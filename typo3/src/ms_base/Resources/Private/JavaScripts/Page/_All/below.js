import { addBackToTop } from 'vanilla-back-to-top'
import Cookies from 'js-cookie'
import LazyLoad from 'vanilla-lazyload'
import '../../Helper/jsLoaderController'
import EventController from '../../Helper/eventController'

var myLazyLoad = new LazyLoad({
    elements_selector: '.lazy'
})

addBackToTop({
    diameter: 56,
    boxShadow: '0 -5px 8px rgba(0,0,0,.6)',
    textColor: '#fff',
    innerHTML: ''
})

if (Cookies.get('CookieConsent') !== 'closed') {
    document.querySelector('#cookie-consent').slideDown()
    document.querySelector('#cookie-consent button').addEventListener('click', function () {
        document.querySelector('#cookie-consent').slideUp()
        Cookies.set('CookieConsent', 'closed')
    })
}

SlideoutController()

export default {
    lazyUpdate: function () {
        myLazyLoad.update()
    },

    lazyAll: function () {
        myLazyLoad.loadAll()
    }
}

EventController()
