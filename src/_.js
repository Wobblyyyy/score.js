'use strict';

/**
 * Undefined value to shorten code
 * @type {undefined}
 */
const U = undefined;

/**
 * Main function
 * @param selector the selector to search for
 * @returns {E} a return value
 * @private what the fuck do I say here?
 */
const _ = function (selector)
{
  const $E = new E(selector);
  $E.I();
  return $E;
};

/**
 * Internal function with all of the prototypes we use to make score.js
 * function as it does.
 * @param selector the selector which it should use
 * @constructor
 */
const E = function (selector)
{
  this._S = selector || null;
  this._E = null;
};

/**
 * Select different types of elements, including by ID, by class name, by
 * SV, as body, and more.
 * @constructor
 */
E.prototype.I = function ()
{
  const selectorType = this._S.charAt(0);
  switch (selectorType)
  {
    case '.':
      this._E = document.getElementsByClassName(this._S.substr(1));
      break;
    case '#':
      this._E = document.getElementById(this._S.substr(1));
      break;
    case '$':
      this._E = document.querySelector(('[sv="' + this._S.substr(1) + '"]'));
      this._T = 'sv';
      break;
    case '@':
      this._E = document.body;
      break;
    default:
      this._E = document[this._S];
      break;
  }
  if (this._E === U)
    console.error('Error in score.js/_.js: No element(s) could be found matching the query for "' + this._S + '"');
};
