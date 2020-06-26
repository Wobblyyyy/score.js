// Get or set value. This is probably what you're looking for if you're trying
// to get the value (or change the value) of a certain textbox or something.
E.prototype.value = function (newValue) {
    if (newValue !== U) {
        this._E.value = newValue;
    } else {
        return this._E.value;
    }
};

// Get or set inner HTML. Really similar to the 'innerHTML' prototype in some
// other part of score.js' codebase, but this one is shorter, and we all know
// shorter code is better code.
E.prototype.html = function (newValue) {
    if (newValue !== U) {
        this._E.innerHTML = newValue;
    } else {
        return this._E.innerHTML;
    }
};

// Show an element. I'm lazy, so this only sets it's display mode to block. If
// you want to do something that's not setting it to block, you can go find
// some other way to do that. Probably with vanilla JavaScript.
E.prototype.show = function () {
    this._E.style.display = 'block';
};

// Hide an element. Works quicker than fade, of course.
E.prototype.hide = function () {
    this._E.style.display = 'none';
};

// Get or set a specific attribute.
E.prototype.attribute = function (attributeName, newValue) {
    if (attributeName !== U) {
        if (newValue !== U) {
            this._E[attributeName] = newValue;
        } else {
            return this._E[attributeName];
        }
    }
};
