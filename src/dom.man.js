// Remove an element from the document.
E.prototype.remove = function () {
    this._E.outerHTML = '';
};

// Change the outer HTML of an element.
E.prototype.outerHTML = function (newOuterHTML) {
    if (newOuterHTML !== U) this._E.outerHTML = newOuterHTML;
    else return this._E.outerHTML;
};

// Change the inner HTML of an element. You'll probably end up using this bit
// quite a lot more than outer HTML - just a fair 'warning.'
E.prototype.innerHTML = function (newInnerHTML) {
    if (newInnerHTML !== U) this._E.innerHTML = newInnerHTML;
    else return this._E.innerHTML;
};

// Append an element to wherever the hell you're trying to append it to. On
// a similar note, check out prepend - it's equally as cool.
E.prototype.append = function (appendValue) {
    if (appendValue !== U) {
        this._E.innerHTML = this._E.innerHTML + appendValue;
    }
};

// Does exactly what it's name would suggest - add an element before other
// elements. Like, you can prepend something, and it'll get added as a child of
// that element, but it's before all the other children of that element. You
// know what I'm saying, or trying to say?
E.prototype.prepend = function (prependValue) {
    if (prependValue !== U) {
        this._E.innerHTML = prependValue + this._E.innerHTML;
    }
};

// Basic functionality for adding an external script to the document. This
// appends a piece of script source to the very end of the document. Note that
// you shouldn't use this for crucial scripts. This code will only be run after
// both score.js AND any user code have loaded, so you should include
// runtime-critical script inside of the document before it's shipped to the
// user.
E.prototype.appendScript = function (scriptSource) {
    if (scriptSource !== U) {
        document.body.innerHTML += `<script src=${scriptSource}"></script>`;
    } else {
        console.error('Error in score.js/dom.man.js: '
            + 'Could not append a nonexistent script.');
    }
};

// An even sexier way of calling append script. I do have to admit - append
// does have a nice ring to it, but it gives off strong vibes of a high school
// English class. I don't know about you, but that's not what I'm trying to go
// back to. At all.
E.prototype.addScript = function (scriptSource) {
    this._E.appendScript(scriptSource);
};

// Adds style. This is really similar to appendScript / addScript - you should
// go see that if you have any questions about it - however, I'm going to
// include the same warning here - don't put runtime-critical script elements
// here, as it'll get appended after the entire document has loaded, or
// something like that, and that's not really what you want, now is it?
E.prototype.appendStyle = function (styleSource) {
    if (styleSource !== U) {
        document.head.innerHTML += 
            `<link rel="stylesheet" href="${styleSource}"`;
    } else {
        console.error('Error in score.js/dom.man.js: '
            + 'Could not append a nonexistent style.');
    }
};

// Even sexier way of calling appendStyle. Once again, go read addScript if
// you're confused about sexiness, and how it applies here.
E.prototype.addStyle = function (styleSource) {
    this._E.appendStyle(styleSource);
};
