import IntersectionObserver from 'intersection-observer-polyfill';

new IntersectionObserver((entries, observer) => {}, {
    rootMargin: '100px 0px',
    threshold: [0, 0.1, 0.2, 0.5, 1]
})
