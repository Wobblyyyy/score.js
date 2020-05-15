/**
 * Generic handling bind event.
 * @param event the event to bind to.
 * @param callback the function to run on event callback.
 */
E.prototype.on = function (event, callback)
{
  this.H.bind(event, callback, this._E);
};

/**
 * Bind to click event
 * @param callback callback function
 */
E.prototype.click = function (callback)
{
  this.H.bind('click', callback, this._E);
};

/**
 * Bind to the updated event
 * @param callback callback function
 */
E.prototype.updated = function (callback)
{
  this.H.bind('change', callback, this._E);
};

/**
 * Redirect function
 * @param url the url to redirect to
 */
E.prototype.redirect = function (url)
{
  this.H.bind('click', function ()
  {
    window.location.href = '/' + url;
  });
};

/**
 * Load function, binds to load
 * @param callback callback function
 */
E.prototype.onLoad = function (callback)
{
  this.H.bind('load', callback, this._E);
};

/**
 * Off function, unbind event.
 * @param event event
 * @param callback callback function
 */
E.prototype.off = function (event, callback)
{
  this.H.unbind(event, callback, this._E);
};

/**
 * Internally used to bind events.
 * @type {{Ev: [], bind: E.H.bind, unbind: E.H.unbind, f: (function(*=): *)}}
 */
E.prototype.H = {
  Ev: [],
  bind: function (event, callback, targetElement)
  {
    this.unbind(event, targetElement);
    targetElement.addEventListener(event, callback, false);
    this.Ev.push({
      type: event,
      event: callback,
      target: targetElement,
    });
  },
  f: function (event)
  {
    return this.Ev.filter(function (evt)
    {
      return (evt.type === event);
    }, event)[0];
  },
  unbind: function (event, targetElement)
  {
    const foundEvent = this.f(event);
    if (foundEvent !== U)
    {
      targetElement.removeEventListener(event, foundEvent.event, false);
    }
    this.Ev = this.Ev.filter(function (evt)
    {
      return (evt.type !== event);
    }, event);
  },
};
