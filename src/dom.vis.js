/**
 * Gets / sets the value.
 * @param newValue the new value
 * @returns {*} the current value
 */
E.prototype.value = function (newValue) {
    if (newValue !== U) {
        this._E.value = newValue;
    } else {
        return this._E.value;
    }
};

/**
 * Gets / sets the HTML.
 * @param newValue the new value
 * @returns {string} the current value
 */
E.prototype.html = function (newValue) {
    if (newValue !== U) {
        this._E.innerHTML = newValue;
    } else {
        return this._E.innerHTML;
    }
};

/**
 * Shows the element
 */
E.prototype.show = function () {
    this._E.style.display = 'block';
};

/**
 * Hides the element
 */
E.prototype.hide = function () {
    this._E.style.display = 'none';
};

/**
 * Get / set a specific attribute
 * @param attributeName string name of attribute
 * @param newValue the value to set it to
 * @returns {*} the current attribute value
 */
E.prototype.attribute = function (attributeName, newValue) {
    if (attributeName !== U) {
        if (newValue !== U) {
            this._E[attributeName] = newValue;
        } else {
            return this._E[attributeName];
        }
    }
};
