import Slideout from 'slideout'
import 'dom-slider'

export default function () {
    var viewportWidth = document.getElementById('main').offsetWidth
    var slideoutWidth = viewportWidth * .8

    slideoutWidth = (slideoutWidth > 440) ? 440 : slideoutWidth
    slideoutWidth = (slideoutWidth < 140) ? 140 : slideoutWidth

    var slideout = new Slideout({
        'panel': document.getElementById('main'),
        'menu': document.getElementById('menu'),
        'padding': slideoutWidth,
        'tolerance': 70,
        'touch': false,
        'easing': 'cubic-bezier(.32,2,.55,.27)'
    })
    document.querySelector('.icon-menu').addEventListener('click', function () {
        slideout.toggle()
    })

    document.querySelector('.slideout-shield').addEventListener('click', function () {
        slideout.close()
    })


    document.querySelectorAll('a.caret').forEach(function (element) {
        element.addEventListener('click', function (event) {
            var targetElement = event.target || event.srcElement
            targetElement.parentNode.querySelector('ul').slideToggle()
            event.preventDefault()
        })
    })

    document.querySelectorAll('div.frame-type-list.frame-list-powermail_pi1 > header, div.frame-type-list.frame-list-powermail_pi1 .caret, div.accordion-section > .row > header, div.accordion-section > .row .caret').forEach(function (element) {
        element.addEventListener('click', function (event) {
            var slideoutId = this.getAttribute('data-slideout-id')
            document.getElementById(slideoutId).slideToggle()
            var focusMe = document.querySelector('#' + slideoutId + ' input[data-focus="1"]')
            if (focusMe) {
                focusMe.focus()
            }
            event.preventDefault()
        })
    })

    document.querySelector('footer .meta-nav-open').addEventListener('click', function (event) {
        var targetElement = event.target || event.srcElement
        targetElement.parentNode.parentNode.querySelector('nav').slideDown()
    })

    document.querySelector('footer .meta-nav-close').addEventListener('click', function (event) {
        var targetElement = event.target || event.srcElement
        targetElement.parentNode.parentNode.querySelector('nav').slideUp()
    })

    document.querySelectorAll('.close-accordion').forEach(function (element) {
        element.addEventListener('click', function (event) {
            var accordionId = this.getAttribute('data-accordion-id')
            document.querySelectorAll('#' + accordionId + ' > .row > .main-section').forEach(function (element) {
                element.slideUp()
            })
            event.preventDefault()
        })
    })
    // slideout.toggle()
}
