// The most generic binding function. That's it. That's really all it does. How
// interesting, I know. How incredibly interesting.
// Hey! If you're confused, and wanna see a full list of all the events
// JavaScript has support for in a browser context, check out this page!
// https://w3schools.com/jsref/dom_obj_event.asp
E.prototype.on = function (event, callback) {
    this.eventBinderObject.bind(event, this._E, callback);
};

// Because click is one of the most common events I end up binding to, I just
// created this function to get rid of some of those ugly string literals.
E.prototype.click = function (callback) {
    this.on('click', callback);
};

// I always forget what change is and I always think it's updated, so I put
// this here so I can't do that anymore. Wonderful, right!?
E.prototype.updated = function (callback) {
    this.on('change', callback);
};

// This one doesn't really have much of a place within the single-page
// application world we're living in today, but still, I find myself
// consistently having to add more code than I'd like to do add redirects. This
// is quite literally just a wrapper for the click binding event. Once the
// element is clicked, redirect the user to whatever URL they're supposed to be
// going to.
E.prototype.redirect = function (url) {
    this.on('click', function () {
        window.location.href = '/' + url;
    });
};

// On load functionality. That's really all I can say about it.
E.prototype.onLoad = function (callback) {
    this.on('load', callback);
};

// Another name for onLoad. I don't wanna break any code if I end up updating
// score.js somewhere, so instead of just deleting the now-antiquidated onLoad,
// I'm adding this one. So what it's a little bit more code - suck it up,
// buttercup.
E.prototype.load = function (callback) {
    this.on('load', callback);
}

// Unbinds an event.
E.prototype.off = function (event) {
    this.eventBinderObject.unbind(event, this._E);
};

// Another internal thing I spent waaaaayy too much time on. The original
// release of score.js included some pretty awful event binding functionality
// that would occassionally overwrite all events of the same time. In order to
// get around this issue, I entirely re-did the event binding functionality,
// and this time, made it up to 4x sexier (maybe even 5x!). Everything in here
// works just about how you'd expect it to, and, to be entirely honest, you'll
// almost never (hopefully, that is) have to touch anything at all related to
// this.
E.prototype.eventBinderObject = {
    // An array containing all of our events.
    events: [],
    // Bind an event.
    // @param event the event name to bind (click, value, etc)
    // @param element the element to bind the event to
    // @param callback the callback function that should be ran
    bind: function (event, element, callback) {
        this.unbind(event, element);
        element.addEventListener(event, callback, false);
        this.events.push({
            'eventType': event,
            'eventCallback': callback,
            'eventElement': element,
        });
    },
    // Sort through the array of events and find the one matching the
    // requested parameters (event & element)
    // @param event the event to search for
    // @param element the element to search for
    // @returns {*} returns the (hopefully) searched for event information
    fetch: function (event, element) {
        return this.events.filter(function (el) {
            return (event === el.eventType) && (element === el.eventElement);
        }, event)[0];
    },
    // Checks to see if the event which is going to be unbound is in the list
    // of currently registered events. If it is, unbind it, and if it's not,
    // don't do anything at all.
    // @param event the event to search for
    // @param element the element to unbind from and search for
    unbind: function (event, element) {
        if (this.fetch(event, element) !== U) {
            element.removeEventListener(
                event, 
                this.fetch(event, element).eventCallback
            );
        }
    },
};
