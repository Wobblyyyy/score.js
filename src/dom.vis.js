/**
 * Gets / sets the value.
 * @param newValue the new value
 * @returns {*} the current value
 */
E.prototype.value = function (newValue)
{
  if (newValue !== U)
  {
    this._E.value = newValue;
  }
  else
  {
    return this._E.value;
  }
}

/**
 * Gets / sets the HTML.
 * @param newValue the new value
 * @returns {string} the current value
 */
E.prototype.html = function (newValue)
{
  if (newValue !== U)
  {
    this._E.innerHTML = newValue;
  }
  else
  {
    return this._E.innerHTML;
  }
};

/**
 * Appends an element.
 * @param appendValue what to append.
 */
E.prototype.append = function (appendValue)
{
  if (appendValue !== U)
  {
    this._E.innerHTML = this._E.innerHTML + appendValue;
  }
};

/**
 * Appends a scriot
 * @param scriptSource the script's source.
 */
E.prototype.appendScript = function (scriptSource)
{
  if (scriptSource !== U)
  {
    this._E.innerHTML = this._E.innerHTML + '<script src="' + scriptSource + '"></script>';
  }
};

/**
 * Prepends an element.
 * @param scriptSource what to prepend.
 */
E.prototype.prepend = function (prependValue)
{
  if (prependValue !== U)
  {
    this._E.innerHTML = prependValue + this._E.innerHTML;
  }
};

/**
 * Shows the element
 * @param item ?
 */
E.prototype.show = function (item)
{
  this._E.style.display = "block";
};

/**
 * Hides the element
 * @param item ?
 */
E.prototype.hide = function (item)
{
  this._E.style.display = "none";
};

/**
 * Get / set a specific attribute
 * @param attributeName string name of attribute
 * @param newValue the value to set it to
 * @returns {*} the current attribute value
 */
E.prototype.attribute = function (attributeName, newValue)
{
  if (attributeName !== U)
  {
    if (newValue !== U)
    {
      this._E[attributeName] = newValue;
    }
    else
    {
      return this._E[attributeName];
    }
  }
};
