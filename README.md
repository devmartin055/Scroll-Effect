
# Scroll Effect

This library allows the developer to effortlessly add simple fade animation/transition to an element upon entering the viewport of the screen.

## Installation

Install Scroll Effect using CDN

```html
    <script scr="https://cdn.jsdelivr.net/gh/devmartin055/Scroll-Effect/src/mcdgscrolleffect.min.js"></script>
```
    
## Demo

https://codepen.io/devmartin055/pen/wvpYbwP


## Usage/Examples



You only have to specify the element's **selector** to add Scroll Effect Transition. It can be the element's **classname** or **id**. 

**Tip:**
You can use one classname to apply Scroll Effect in multiple elements.
```javascript
mcdg('.classname').scrollEffect();

```

### Customize scrollEffect()


If you want to customize the scroll effect. you can pass an object into the **scrollEffect()** function.

```javascript

mcdg("#classname").scrollEffect({
    duration: 3,
    translateX: '25px',
    // translateX: '25px',
    // translateY: '25px',
    // translateY: '-25px',
});
```

For the time being, the table below shows the available properties that can be customize.

|   Property |  Datatype |  Value | Description |
|   ---      | ---       |  ---   | ---         |
|   translateX | string  |  css units (px, vh, em, etc.) | Allows you to add displacement position in **X axis** where you want your element to come from. |
|   translateY | string  |  css units (px, vh, em, etc.) | Allows you to add displacement position in **Y axis** where you want your element to come from. |
|   duration | int/float/double  |  1/2/3/... | specifies the duration time of the animation to finish. **Measured in seconds.** |




---
**NOTE**: This product is still under development. Come visit whenever you have time.