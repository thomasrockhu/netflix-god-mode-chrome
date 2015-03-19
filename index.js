var godMode = function() {
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
