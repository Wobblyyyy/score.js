E.prototype.class = function (newClass)
{
  if (newClass !== U)
  {
    this._E.className = newClass;
  }
  else
  {
    return this._E.className;
  }
};

E.prototype.setClass = function (newClass)
{
  if (newClass !== U)
  {
    this._E.className = newClass;
  }
  else
  {
    return this._E.className;
  }
};

/**
 * Add a class to an element's class list.
 * @param newClass the new class to add.
 */
E.prototype.addClass = function (newClass)
{
  if (newClass !== U)
  {
    this._E.classList.add(newClass);
  }
  else console.error("Error in score.js/dom.css.js - can't add a class which is undefined.");
};

/**
 * Remove an element's CSS class.
 * @param removedClass the class to remove.
 */
E.prototype.removeClass = function (removedClass)
{
  if (removedClass !== U)
  {
    this._E.classList.remove(removedClass);
  }
  else console.error("Error in score.js/dom.css.js - can't remove a class which is undefined.");
};

/**
 * Generic and internal fade function.
 * Used by prototypes:
 * - fadeOut
 * - fadeIn
 * - fadeTo
 * @param duration how long the fade should take
 * @param target the target opacity
 * @param element the element to target
 * @private
 */
E.prototype._fade = function (duration, target, element)
{
  if (isNaN(parseFloat(element.style.opacity))) element.style.opacity = Math.abs(target - 1).toString();
  const dist = (parseFloat(element.style.opacity) - target) * 4;
  console.log("distance: " + dist);
  const run = setInterval(function ()
  {
    element.style.opacity = (parseFloat(element.style.opacity) - dist / duration).toString();
    console.log(element.style.opacity);
  }, dist / duration);
  setTimeout(function ()
  {
    clearInterval(run);
    element.style.opacity = target;
  }, duration);
}

/**
 * Fade the target element out.
 * @param duration how long the fade should take
 */
E.prototype.fadeOut = function (duration)
{
  this._fade(duration, 0, this._E);
}

/**
 * Fade the target element in
 * @param duration how long the fade should take
 */
E.prototype.fadeIn = function (duration)
{
  this._fade(duration, 1, this._E);
}

/**
 * Fades to a specific opacity.
 * If the target opacity is out of range (greater than 1),
 * scale it down to 1/100 of what it was before.
 * @param duration how long the transition should take
 * @param target the target opacity
 */
E.prototype.fadeTo = function (duration, target)
{
  target = target > 1 ? target / 100 : target;
  this._fade(duration, target, this._E);
}
