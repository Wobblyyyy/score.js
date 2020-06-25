// As I mention in about 10-15 seconds of you reading these comments, we
// actually want to use the local storage functionality of the web browser
// instead of the cookies functionality. While cookies are great and all, we
// end up running into the issue of storage space - occasionally, you can run
// into cookies which are too long to store in actual cookies, which is why we
// want to use the local storage. We have no way of knowing how long the string
// of the json object used for storing things is going to be, so, for this
// reason, we always want to be sure have enough space for all of our wonderful
// and lovely cookies.
const storage = window.localStorage;

// Although this is titled 'Cookies,' we don't actually use the cookies
// functionality of the browser. Cookies can store up to about 2kb of data.
// While this is great and all, we don't know how much data the user is going
// to be storing, and, so, for this reason, we instead want to use the much
// larger, and much improved, local storage system.
let Cookies = {
    // Default cookies value. Contains information such as the version of
    // score.js which the site is using, what amount of time the expiration
    // date should be checked, and whether expiration dates should be
    // checked or not in the first place.
    d_json: {
        'score.js_version': {
            'value': '1.0.0',
            'parameters': {
                'expiration': -1
            }
        },
        'score.js_cced': {
            'value': 60000,
            'parameters': {
                'expiration': -1
            }
        },
        'score.js_csce': {
            'value': true,
            'parameters': {
                'expiration': -1
            }
        }
    },
    // The actual JSON object which we want to manipulate. Whenever the clear
    // method is invoked to clear all of the 'cookies' in the browser, this
    // gets reset to the d_json, which will then later be saved... yknow what
    // I'm trying to say.
    json: {
        'score.js_version': {
            'value': '1.0.0',
            'parameters': {
                'expiration': -1
            }
        },
        'score.js_cced': {
            'value': 60000,
            'parameters': {
                'expiration': -1
            }
        },
        'score.js_csce': {
            'value': true,
            'parameters': {
                'expiration': -1
            }
        }
    },
    // Sets a key value pair in the cookie json object. The parameter titled
    // 'parameters' is a list of parameters. As of Thursday 25 June, 2020, the
    // only paramater which has any effect on anything at all is 'expiration.'
    set: function (key, value, parameters) {
        this.json[key] = {
            'value': value,
            'parameters': parameters
        }
    },
    // Gets a value based on a key. This does not return the set of parameters,
    // too - it only returns the value which is assigned. You can fetch the
    // parameters with getParams or whatever else is below this.
    get: function (key) {
        return this.json[key].value;
    },
    // Get the parameters based on a certain key. This doesn't return the
    // value, but just the parameters. If you're trying to get nothing but the
    // value, you should check out the wonderful and incredibly method 'get.'
    getParams: function (key) {
        return this.json[key].parameters;
    },
    // Returns the entire JSON object thingy based on the key - this means it
    // returns both the value AND the parameters. If you'd like to get the
    // value from this, you just do getAll(key).value, and, likewise, if you'd
    // like to get the list of parameters, you'd just do
    // getAll(key).parameters.
    getAll: function (key) {
        return this.json[key];
    },
    // Just straight up remove a cookie. Yeah, that's it. How can you call this
    // function and really not feel bad for that poor cookie? Think of what you
    // just did to it - you ended it's life. Don't you think it might feel bad
    // or something?
    remove: function (key) {
        delete this.json[key];
    },
    // Manually set the expiration date. This accepts the parameters key and
    // expiration. Unless you're actually braindead or in a coma, I don't think
    // I need to explain what those mean to you. Let's hope not, at least.
    setExpiration: function (key, expiration) {
        this.json[key].parameters.expiration = expiration;
    },
    // Checks whether or not a given key has 'expired.' If the key's
    // expiration date is not set or is set to -1, the key shouldn't ever
    // expire, and will have to manually be removed. Otherwise, it compares
    // the current time in MS to the expiration in MS and sees whether or
    // not the key should be removed or not.
    checkExpire: function (key) {
        if (this.json['score.js_csce']) {
            if (this.json[key].hasOwnProperty('parameters')
                .hasOwnProperty('expiration')) {
                if (this.json[key].parameters.expiration !== -1) {
                    let expiration =
                        JSON.parse(
                            this.json[key].parameters.expiration
                        );
                    if (Date.now() > expiration) {
                        this.remove(key);
                    }
                }
            }
        }
    },
    // Fetch the expiration date based on a key. Yes, that's really it. No,
    // there's not anything more. I promise, I'm not lying to you, that
    // really is all there is to it.
    getExpiration: function (key) {
        return this.json[key].parameters.expiration;
    },
    // Provide expiration manipulation functionality. Expiration
    // functionality can be enabled or disabled through this. Note that
    // I'm a lazy bastard at this applies to all of the cookies used on
    // whatever site the score.js library is being used with, so it would
    // be fair to say that this could certainly be done a little bit
    // better.
    Expiration: {
        enable: function () {
            this.json['score.js_csce'].value = true;
            this.expirationChecker = setinterval(
                this.expirationCheck,
                this.json['score.js_csce'].value
            );
        },
        disable: function () {
            this.json['score.js_csce'] = false;
            clearInterval(this.expirationChecker);
        }
    },
    expirationCheck: function () {
        // If the should check expire flag is set to false,
        // don't do anything at all and back out of the function.
        // However, if it's set to true...
        // Loop over the entire JSON structure
        // to check if any of the keys have expired yet.
        // If they have, remove them from the JSON object using
        // the checkExpire functionality.
        for (let key in this.json) {
            this.checkExpire(key);
        }
    },
    // This can be disabled with clearInterval() or re-enabled
    // with another setInterval
    expirationChecker: null,
    // Loads all of the 'cookies' from the local storage element of the
    // browser's window. 
    load: function () {
        const s = JSON.parse(storage.getItem('score.js'));
        Cookies.json = s == null ?
            Cookies.d_json :
            s;
    },
    // Save all of the 'cookies' to that same local storage element we were
    // just talking about.
    save: function () {
        storage.setItem('score.js', JSON.stringify(Cookies.json));
    },
    // Erase. Epic.
    clear: function () {
        storage.removeItem('score.js');
    },
    // Automatically save all of the cookies every fifteen seconds. Just in
    // case something goes sour and things aren't saved as we'd like them to
    // be, we can use this wonderful bit of functionality. 
    autosaver: setInterval(function () {
        Cookies.save();
    }, 15000)
}

// As soon as the window is loaded, call this function. All this (should) do is
// load all of the cookies from the browser cookie thingy. Instead of using the
// score.js built-in event setup system, we just use the browser's default one.
// We do this for two reasons - one, we don't need to cancel the event at any
// point and there's no point in taking up extra memory with that, and two
// - we're not sure if the rest of score.js has loaded by the time this code is
// run, so we have to ensure everything works nice and smoothly.
window.addEventListener('load', function (event) {
    Cookies.load();
});

// Right before the page is unloaded, while the user shouldn't be setting any
// cookies anyway, save all of the cookies to the browser's cookie system
// thingy. Rather than using the browser's document.cookie, we end up using the
// localdb system so we can store more data.
window.addEventListener('beforeunload', function (event) {
    Cookies.save();
});

// Default expiration checker. Very cool, I know. This is set after all of the
// cookies are loaded so cool things can happen and whatever else. Look,
// I don't know what else to say here, but long documentation usually makes
// everything look cooler. Are you really complaining about getting to read
// this action-packed cookies.js documentation? I know damn well you're not.
Cookies.expirationChecker = setInterval(
    Cookies.expirationCheck,
    Cookies.json['score.js_csce'].value
);

