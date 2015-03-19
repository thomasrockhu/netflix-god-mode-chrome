var godMode = function() {
    if (window.location.href.indexOf('netflix.com') === -1) {
        if (confirm('Please open Netflix and try again. Would you like me to redirect you to netflix.com?')) {
            window.location.href = 'http://netflix.com'
        } else {
            return false;
        }
    }
    _.map(_.toArray(document.getElementsByClassName('slider')), function(e) {
      e.parentNode.replaceChild(e.firstChild, e)
    });
    _.map(_.union(
        _.toArray(document.getElementsByClassName('sliderButton')),
        _.toArray(document.getElementsByClassName('evidence')),
        _.toArray(document.getElementsByClassName('sharing-prompt')),
        _.toArray(document.getElementsByClassName('boxShotDivider'))),function(e) {
            e.parentNode.removeChild(e)
        }
    );
};

godMode();
