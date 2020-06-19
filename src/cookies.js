/**
 * A utility which should (hopefully) make managing Cookies a lot easier.
 * @type {{set: Cookies.set, getExpiration: (function(*): number), checkExpire: Cookies.checkExpire, get: (function(*): *), Expiration: {enable: Cookies.Expiration.enable, disable: Cookies.Expiration.disable}, json: {"score.js_version": {value: string, parameters: {expiration: number}}, "score.js_cookies_should_check_expire": {value: boolean, parameters: {expiration: number}}, "score.js_cookies_check_expire_delay": {value: number, parameters: {expiration: number}}}, remove: Cookies.remove}}
 */
let Cookies = {
    json: {
        'score.js_version': {
            'value': '1.0.0',
            'parameters': {
                'expiration': -1
            }
        },
        'score.js_cookies_check_expire_delay': {
            'value': 60000,
            'parameters': {
                'expiration': -1
            }
        },
        'score.js_cookies_should_check_expire': {
            'value': true,
            'parameters': {
                'expiration': -1
            }
        }
    },
    set: function (key, value, parameters) {
        this.json[key].value = value;
        this.json[key].parameters = parameters;
    },
    get: function (key) {
        return this.json[key].value;
    },
    remove: function (key) {
        delete this.json[key];
    },
    checkExpire: function (key) {
        if (this.json['score.js_cookies_should_check_expire']) {
            if (this.json[key].contains('parameters').contains('expiration')) {
                if (this.json[key].parameters.expiration !== -1) {
                    let expiration = JSON.parse(this.json[key].parameters.expiration);
                    if (Date.now() > expiration) {
                        this.remove(key);
                    }
                }
            } else {
                // no expiration to check
            }
        }
    },
    getExpiration: function (key) {
        return this.json[key].parameters.expiration;
    },
    Expiration: {
        enable: function () {
            this.json['score.js_cookies_should_check_expire'] = true;
        },
        disable: function () {
            this.json['score.js_cookies_should_check_expire'] = false;
        }
    }
}
