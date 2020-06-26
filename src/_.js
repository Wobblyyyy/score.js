// TODO in this file
//  Try to fix the class selector. As an idea for how to do this, make every
//  query return an array of elements, and, from there, perform actions on each
//  and every single one of them. This would, although being a little bit
//  slower, make the code behid this all much more simple, and more
//  importantly, much more regular and easy to read.

'use strict';

// U is for undefined, or, if you're SpongeBob, U is for U and Me. 
const U = undefined;

// Main 'function' of score.js. This functions just about exactly like the $ in
// jQuery, which, in case you couldn't tell, score.js is heavily inspired by.
// Anyway, you use this in the exact same way. You query an element (or a set
// of elements), and, from there, perform some kind of action.
const _ = function (selector) {
    const $E = new E(selector);
    $E.I();
    return $E;
};

// Internal function-y thingy which serves the purpose of interfacing with the
// prototype's of score.js and the user's _ function.
const E = function (selector) {
    this._S = selector || null;
    this._E = null;
};

// The main selector function. This is where elements are queried. We have
// a couple different methods of selecting things, as we very obviously should
// - including ID, CLASS, and, of course, our beloved SV, which is score.js'
// own variant of ID, intended to make it easier to seperate regular HTML / JS
// and score.js HTML and JS, which is, of course, so very vastly different.
// TODO try to get the class selector up and working - as of now, the class
// selector isn't working, largely because you can't query multiple elements at
// once.
E.prototype.I = function () {
    const selectorType = this._S.charAt(0);
    switch (selectorType) {
        case '.':
            // The default class selector within just about all of web
            // development. I'm really not trying to make this hard on people
            // to use, so I decided to stick with the classic, everyone's
            // favorite, period as a class selector.
            this._E = 
                document.getElementsByClassName(this._S.substr(1));
            break;
        case '#':
            // Once again, the default selector, but this time, for ID. This
            // functions exactly how you would expect it to. Note that
            // (hopefully) in the future you can query all elements with
            // a certain ID and do stuff with it - similar to a class selector,
            // but not quite.
            this._E = 
                document.getElementById(this._S.substr(1));
            break;
        case '$':
            // Here's score.js' unique selector. SV (I don't rememeber what it
            // stands for, I wrote the initial prototype of this while I was
            // a freshman in highschool and I can't remember all the way back
            // then) is pretty much exactly like ID, but it's cooler, and has
            // a V in it - we all know that V is a cooler letter than both
            // I and D combined. I don't make the rules, sorry :)
            this._E = 
                document.querySelector(('[sv="' + this._S.substr(1) + '"]'));
            break;
        case '@':
            // If the symbol is just an AT sign, select the document's body.
            this._E = 
                document.body;
            break;
        default:
            // If nothing it matched, query something based on the document
            // itself. I'm not sure how exactly you'd get here, or why, but I'm
            // leaving it in anyway. What's the harm? Exactly my point.
            this._E = 
                document[this._S];
            break;
    }
    // If the element is still undefined, give the user a friendly alert saying
    // they're fucking stupid. Or the element couldn't be queried. By default,
    // JavaScript should throw an error itself, but, in the event it doesn't,
    // score.js provides a wonderful (and quite lovely) alternative.
    if (this._E === U)
        console.error('Error in score.js/_.js: ' +
            'No element(s) could be found matching the query for "' + 
            this._S + '"');
};
