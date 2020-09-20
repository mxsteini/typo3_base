function getScript (source, callback) {
    var script = document.createElement('script')
    var prior = document.getElementsByTagName('script')[0]
    script.async = 1

    script.onload = script.onreadystatechange = function (_, isAbort) {
        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null
            script = undefined

            if (!isAbort && callback) setTimeout(callback, 0)
        }
    }

    script.src = source
    prior.parentNode.insertBefore(script, prior)
}

if (document.querySelector('div.tx-powermail')) {

    getScript('/typo3conf/ext/cyz_bain/Resources/Public/JavaScripts/jquery.js', function ()  {
        if (!IE) {
            getScript('/typo3conf/ext/powermail/Resources/Public/JavaScript/Libraries/jquery.datetimepicker.min.js')
        }
        getScript('/typo3conf/ext/powermail/Resources/Public/JavaScript/Libraries/parsley.min.js', function() {
            getScript('/typo3conf/ext/cyz_bain/Resources/Public/JavaScripts/eMailCollection.js')
        })
        getScript('/typo3conf/ext/powermail/Resources/Public/JavaScript/Powermail/Tabs.min.js')
        getScript('/typo3conf/ext/powermail/Resources/Public/JavaScript/Powermail/Form.min.js')
    })
}
