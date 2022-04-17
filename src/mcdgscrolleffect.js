function mcdg(selector) {
    const self = {
        element: document.querySelectorAll(selector), //get the element DOM (document object model)
        scrollEffect: (settings = {}) => {
            self.element[0].parentElement.style.overflowX = "hidden";   //add overflowx hidden to the parent of the element
            settings.translateY = typeof settings.translateY === 'undefined' ? 0 : settings.translateY; //check if there is a custom falue passed and at the same time declare defaults
            settings.translateX = typeof settings.translateX === 'undefined' ? 0 : settings.translateX;
            settings.duration = typeof settings.duration === 'undefined' ? 1 : settings.duration;
            settings.play = typeof settings.play === 'undefined' ? "once" : settings.play;
            const css = {
                //active method: meaning the element is currently showing
                active: function () {
                    return "opacity : 1; transform: translate(0, 0); transition: all " + settings.duration + "s;";
                },
                //inactive method: meaning the elemt is hidden
                inactive: function () {
                    return "opacity : 0; transform: translate(" + settings.translateX + ", " + settings.translateY + "); transition: all " + settings.duration + "s;";
                }
            }
            //add scroll listener
            document.addEventListener("scroll", function (e) {

                var pageTop = window.scrollY; //get the scroll position
                var pageBottom = pageTop + innerHeight; //innerheight gets the height of the viewport
                for (var i = 0; i < self.element.length; i++) {
                    //add inline css
                    self.element[i].style.cssText = self.element[i].offsetTop < pageBottom ? css.active() : css.inactive();

                }
            });
        },
    };
    return self;
}