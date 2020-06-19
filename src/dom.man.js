/**
 * Entirely remove an element from existence.
 * Just take it out of this plane of reality. Fuck it.
 */
E.prototype.remove = function () {
    this._E.outerHTML = '';
};

/**
 * Modify the outer HTML of an element.
 * @param newOuterHTML the new outer HTML
 */
E.prototype.outerHTML = function (newOuterHTML) {
    if (newOuterHTML !== U) this._E.outerHTML = newOuterHTML;
    else return this._E.outerHTML;
};

/**
 * Modify the inner HTML of an element.
 * This is the same as dom.vis.js's `html` prototype.
 * @param newInnerHTML the new html which should be set
 */
E.prototype.innerHTML = function (newInnerHTML) {
    if (newInnerHTML !== U) this._E.innerHTML = newInnerHTML;
    else return this._E.innerHTML;
};

/**
 * Appends an element.
 * @param appendValue what to append.
 */
E.prototype.append = function (appendValue) {
    if (appendValue !== U) {
        this._E.innerHTML = this._E.innerHTML + appendValue;
    }
};

/**
 * Prepends an element.
 * @param prependValue what to prepend.
 */
E.prototype.prepend = function (prependValue) {
    if (prependValue !== U) {
        this._E.innerHTML = prependValue + this._E.innerHTML;
    }
};

/**
 * Appends a script
 * @param scriptSource the source of the JS
 */
E.prototype.appendScript = function (scriptSource) {
    if (scriptSource !== U) {
        document.body.innerHTML += `<script src=${scriptSource}"></script>`;
    } else {
        console.error('Error in score.js/dom.man.js: Could not append a nonexistent script.');
    }
};

/**
 * Alternate way of calling appendScript
 * @param scriptSource the source of the JS
 */
E.prototype.addScript = function (scriptSource) {
    this._E.appendScript(scriptSource);
};

/**
 * Appends a style
 * @param styleSource the source of the CSS
 */
E.prototype.appendStyle = function (styleSource) {
    if (styleSource !== U) {
        document.head.innerHTML += `<link rel="stylesheet" href="${styleSource}"`;
    } else {
        console.error('Error in score.js/dom.man.js: Could not append a nonexistent style.');
    }
};

/**
 * Alternate method of calling appendStyle
 * @param styleSource the source of the CSS
 */
E.prototype.addStyle = function (styleSource) {
    this._E.appendStyle(styleSource);
};
