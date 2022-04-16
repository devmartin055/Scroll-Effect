function mcdg(selector) {
    const self = {
        element: document.querySelectorAll(selector), //get the element DOM (document object model)
        scrollFadeIn: (settings = {}) => {
            self.element[0].parentElement.style.overflowX = "hidden";
            settings.translateY = typeof settings.translateY === 'undefined' ? 0 : settings.translateY;
            settings.translateX = typeof settings.translateX === 'undefined' ? 0 : settings.translateX;
            settings.duration = typeof settings.duration === 'undefined' ? 1 : settings.duration;
            settings.play = typeof settings.play === 'undefined' ? "once" : settings.play;

            const css = {
                active: function (element) {
                    return "opacity : 1; transform: translate(0, 0); transition: all " + settings.duration + "s;";
                },
                inactive: function (element) {
                    return "opacity : 0; transform: translate(" + settings.translateX + ", " + settings.translateY + "); transition: all " + settings.duration + "s;";
                }
            }
            document.addEventListener("scroll", function (e) {
                var pageTop = window.scrollY;
                var pageBottom = pageTop + innerHeight;
                for (var i = 0; i < self.element.length; i++) {
                    self.element[i].style.cssText = self.element[i].offsetTop < pageBottom ? css.active() : css.inactive();

                }
            });
        },
    };
    return self;
}