export default function () {
    function resize () {
        var maxHeight = 0
        if (typeof window.getComputedStyle === 'function') {
            var testElement = document.querySelector('.tile30image') || document.querySelector('.tile50image')
            if (testElement) {
                if (window.getComputedStyle(testElement).maxWidth !== '100%') {
                    document.querySelectorAll('.tile30image .content').forEach(function (element) {
                        var height = element.offsetHeight
                        maxHeight = (height > maxHeight) ? height : maxHeight
                    })
                    document.querySelectorAll('.tile30image .content').forEach(function (element) {
                        element.style.height = maxHeight + 'px'
                    })

                    maxHeight = 0
                    document.querySelectorAll('.tile50image .content').forEach(function (element) {
                        var height = element.offsetHeight
                        maxHeight = (height > maxHeight) ? height : maxHeight
                    })
                    document.querySelectorAll('.tile50image .content').forEach(function (element) {
                        element.style.height = maxHeight + 'px'
                    })
                }
            }

        }

    }

    window.addEventListener('resize', resize)
    resize()
}
