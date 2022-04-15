function cg(selector) {
    const self = {
        element: document.querySelectorAll(selector), //get the element DOM (document object model)
        scrollFadeIn: () => {
            document.addEventListener("scroll", function (e) {
                var pageTop = window.scrollY;
                var pageBottom = pageTop + innerHeight;
                for (var i = 0; i < self.element.length; i++) {
                    if (self.element[i].offsetTop < pageBottom) {
                        self.element[i].style.cssText =
                            "opacity : 1; transform: translate(0, 0vh); transition: all 1s; ";
                    } else {
                        self.element[i].style.cssText =
                            "opacity : 0; transform: translate(0, 10vh); transition: all 1s; ";
                    }
                }
            });
        }
    };
    return self;
}