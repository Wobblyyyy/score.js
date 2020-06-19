/**
 * Generic handling bind event.
 * @param event the event to bind to.
 * @param callback the function to run on event callback.
 */
E.prototype.on = function (event, callback) {
    this.eventBinderObject.bind(event, this._E, callback);
};

/**
 * Bind to click event
 * @param callback callback function
 */
E.prototype.click = function (callback) {
    this.on('click', callback);
};

/**
 * Bind to the updated event
 * @param callback callback function
 */
E.prototype.updated = function (callback) {
    this.on('change', callback);
};

/**
 * Redirect function
 * @param url the url to redirect to
 */
E.prototype.redirect = function (url) {
    this.on('click', function () {
        window.location.href = '/' + url;
    });
};

/**
 * Load function, binds to load
 * @param callback callback function
 */
E.prototype.onLoad = function (callback) {
    this.on('load', callback);
};

/**
 * Off function, unbind event.
 * @param event event
 */
E.prototype.off = function (event) {
    this.eventBinderObject.unbind(event, this._E);
};

/**
 * Used internally to bind events.
 * @type {{bind: E.eventBinderObject.bind, unbind: E.eventBinderObject.unbind, fetch: (function(*=, *): *), events: []}}
 */
E.prototype.eventBinderObject = {

    /**
     * An array list of all of the events we have to keep track of.
     */
    events: [],

    /**
     * Bind an event.
     * @param event the event name to bind (click, value, etc)
     * @param element the element to bind the event to
     * @param callback the callback function that should be ran
     */
    bind: function (event, element, callback) {
        this.unbind(event, element);
        element.addEventListener(event, callback, false);
        this.events.push({
            'eventType': event,
            'eventCallback': callback,
            'eventElement': element,
        });
    },

    /**
     * Sort through the array of events and find the one matching the
     * requested parameters (event & element)
     * @param event the event to search for
     * @param element the element to search for
     * @returns {*} returns the (hopefully) searched for event information
     */
    fetch: function (event, element) {
        return this.events.filter(function (el) {
            return (event === el.eventType) && (element === el.eventElement);
        }, event)[0];
    },

    /**
     * Checks to see if the event which is going to be unbound is in the list
     * of currently registered events. If it is, unbind it, and if it's not,
     * don't do anything at all.
     * @param event the event to search for
     * @param element the element to unbind from and search for
     */
    unbind: function (event, element) {
        if (this.fetch(event, element) !== U) {
            element.removeEventListener(event, this.fetch(event, element).eventCallback);
        }
    },
};
