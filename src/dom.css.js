// Get / set an element's class. If you don't put in any parameter as an input,
// this function will return the name of the class. However, if you do decide
// to put a parameter in when you invoke this function, it'll update the class
// to have that new, sexier class, whatever you decided to make it be.
E.prototype.class = function (newClass) {
    if (newClass !== U) {
        this._E.className = newClass;
    } else {
        return this._E.className;
    }
};

// Exactly like JavaScript's default add class method, except cooler. And makes
// code cleaner of course. And who doesn't love clean code? If you don't put
// a class to add, you'll get an error, obviously. What else?
E.prototype.addClass = function (newClass) {
    if (newClass !== U) {
        this._E.classList.add(newClass);
    } else console.error('Error in score.js/dom.css.js - '
        + 'can\'t add a class which is undefined.');
};

// Very similar (exactly the same, in fact) to JavaScript's default remove
// class method. Once again, this one is simply about 4x cooler than the
// regular one so... are you really complaining? As usual, give the user an
// error message, friendly-ly reminding them they're a complete fucking idiot,
// if they forget to include a class to remove.
E.prototype.removeClass = function (removedClass) {
    if (removedClass !== U) {
        this._E.classList.remove(removedClass);
    } else console.error('Error in score.js/dom.css.js - '
        + 'can\'t remove a class which is undefined.');
};

// An internal function I spent WAY too long working on. This is a generic
// fading function. It finds a target, does some really cool math, finds how
// long it has to fade for and how often the value should be updated, then fade
// in / out until the target value is reached. At the very end, the target
// element's opacity is set to whatever the target number is, so you don't have
// to worry about tiny and annoying decimal places.
E.prototype._fade = function (duration, target, element) {
    if (isNaN(parseFloat(element.style.opacity)))
        element.style.opacity = Math.abs(target - 1).toString();
    const dist = (parseFloat(element.style.opacity) - target) * 4;
    const run = setInterval(function () {
        element.style.opacity = (parseFloat(element.style.opacity) - 
            dist / duration).toString();
    }, dist / duration);
    setTimeout(function () {
        clearInterval(run);
        element.style.opacity = target;
    }, duration);
};

// Fades an element towards 0 opacity. Accepts the argument 'duration,' which,
// as I'm assuming you could tell, tells the function exactly how long (in ms
// of course) the fading should last.
E.prototype.fadeOut = function (duration) {
    this._fade(duration, 0, this._E);
};

// Fades an element all the way in. Accepts the argument 'duration,' which,
// just like our previous function, tells Mr. Computer exactly how long the
// fading should last. Once again, this is in milliseconds, because seriously,
// is there anybody who uses SECONDS instead of milliseconds? Disgusting.
E.prototype.fadeIn = function (duration) {
    this._fade(duration, 1, this._E);
};

// Wrapper for the internal _fade function. It does exactly the same thing, but
// simplifies all of it with some classic score.js magic.
E.prototype.fadeTo = function (duration, target) {
    target = target > 1 ? target / 100 : target;
    this._fade(duration, target, this._E);
};
