"use strict";

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
}

const E = function (selector)
{
  this._S = selector || null;
  this._E = null;
  this._T = null;
}

E.prototype.I = function ()
{
  const selectorType = this._S.charAt(0);
  switch (selectorType)
  {
    case ".":
      this._E = document.getElementsByClassName(this._S.substr(1));
      this._T = "class";
      break;
    case "#":
      this._E = document.getElementById(this._S.substr(1));
      this._T = "id";
      break;
    case "$":
      this._E = document.querySelector(('[sv="' + this._S.substr(1) + '"]'));
      this._T = "sv";
      break;
    case "@":
      this._E = document.body;
      this._T = "body";
      break;
    default:
      this._E = document[this._S];
      break;
  }
}
