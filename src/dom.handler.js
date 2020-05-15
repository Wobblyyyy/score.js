/**
 * Generic handling bind event.
 * @param event the event to bind to.
 * @param callback the function to run on event callback.
 */
E.prototype.on = function (event, callback)
{
  this.eventBinderObject.bind(event, this._E, callback);
};

/**
 * Bind to click event
 * @param callback callback function
 */
E.prototype.click = function (callback)
{
  this.on('click', callback);
};

/**
 * Bind to the updated event
 * @param callback callback function
 */
E.prototype.updated = function (callback)
{
  this.on('change', callback);
};

/**
 * Redirect function
 * @param url the url to redirect to
 */
E.prototype.redirect = function (url)
{
  this.on('click', function ()
  {
    window.location.href = "/" + url;
  });
};

/**
 * Load function, binds to load
 * @param callback callback function
 */
E.prototype.onLoad = function (callback)
{
  this.on('load', callback);
};

/**
 * Off function, unbind event.
 * @param event event
 */
E.prototype.off = function (event)
{
  this.eventBinderObject.unbind(event, this._E);
};

/**
 * Used internally to bind events.
 * @type {{bind: E.eventBinderObject.bind, unbind: E.eventBinderObject.unbind, fetch: (function(*=, *): *), events: []}}
 */
E.prototype.eventBinderObject = {
  events: [],
  bind: function (event, element, callback)
  {
    this.unbind(event, element);
    element.addEventListener(event, callback, false);
    this.events.push({
      'eventType': event,
      'eventCallback': callback,
      'eventElement': element
    });
  },
  fetch: function (event, element)
  {
    return this.events.filter(function (event, element)
    {
      return (event.eventType === event) && (event.eventElement === element);
    }, event)[0];
  },
  unbind: function (event, element)
  {
    if (this.fetch(event, element) !== U)
    {
      element.removeEventListener(event, this.fetch(event, element).eventType);
    }
  }
}
