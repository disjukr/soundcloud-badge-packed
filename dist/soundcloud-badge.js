(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sclBadge"] = factory();
	else
		root["sclBadge"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 72)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = badge;
	
	var _googleFonts = __webpack_require__(/*! google-fonts */ 73);
	
	var _googleFonts2 = _interopRequireDefault(_googleFonts);
	
	var _minstache = __webpack_require__(/*! minstache */ 77);
	
	var _minstache2 = _interopRequireDefault(_minstache);
	
	var _insertCss = __webpack_require__(/*! insert-css */ 78);
	
	var _insertCss2 = _interopRequireDefault(_insertCss);
	
	var _querystring = __webpack_require__(/*! querystring */ 79);
	
	var _querystring2 = _interopRequireDefault(_querystring);
	
	var _rawStyleCss = __webpack_require__(/*! raw!style.css */ 82);
	
	var _rawStyleCss2 = _interopRequireDefault(_rawStyleCss);
	
	var _rawBadgeHtml = __webpack_require__(/*! raw!badge.html */ 83);
	
	var _rawBadgeHtml2 = _interopRequireDefault(_rawBadgeHtml);
	
	var icons = {
	    black: 'https://developers.soundcloud.com/assets/logo_black.png',
	    white: 'https://developers.soundcloud.com/assets/logo_white.png'
	};
	
	var inserted = false;
	var gwfadded = false;
	var template = null;
	
	function badge(_ref) {
	    var _ref$el = _ref.el;
	    var el = _ref$el === undefined ? document.createElement('div') : _ref$el;
	    var _ref$dark = _ref.dark;
	    var dark = _ref$dark === undefined ? true : _ref$dark;
	    var _ref$client_id = _ref.client_id;
	    var client_id = _ref$client_id === undefined ? '' : _ref$client_id;
	    var _ref$song = _ref.song;
	    var song = _ref$song === undefined ? '' : _ref$song;
	    var _ref$getFonts = _ref.getFonts;
	    var getFonts = _ref$getFonts === undefined ? true : _ref$getFonts;
	    var callback = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];
	
	    if (!inserted) (0, _insertCss2['default'])(_rawStyleCss2['default']), inserted = true;
	    if (!template) template = _minstache2['default'].compile(_rawBadgeHtml2['default']);
	    if (!gwfadded && getFonts) _googleFonts2['default'].add({ 'Open Sans': [300, 600] }), gwfadded = true;
	    var icon = dark ? 'black' : 'white';
	    var fetchUrl = 'http://api.soundcloud.com/resolve.json?' + _querystring2['default'].stringify({ client_id: client_id, url: song });
	    fetch(fetchUrl).then(function (response) {
	        return response.json();
	    }).then(function (json) {
	        if (json.kind !== 'track') throw new Error('soundcloud-badge only supports individual tracks at the moment');
	        el.classList[icon === 'black' ? 'remove' : 'add']('npm-scb-white');
	        el.innerHTML = template({
	            artwork: json.artwork_url || json.user.avatar_url,
	            artist: json.user.username,
	            title: json.title,
	            icon: icons[icon],
	            urls: {
	                song: json.permalink_url,
	                artist: json.user.permalink_url
	            }
	        });
	        document.body.appendChild(el);
	        callback(null, json.stream_url + '?client_id=' + client_id, json, el);
	    })['catch'](function (err) {
	        return callback(err);
	    });
	    return el;
	}
	
	;
	
	function noop(err) {
	    if (err) throw err;
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! imports?this=>global!exports?global.fetch!whatwg-fetch */ 1)))

/***/ },
/* 1 */
/*!*************************************************************************************************!*\
  !*** ./~/imports-loader?this=>global!./~/exports-loader?global.fetch!./~/whatwg-fetch/fetch.js ***!
  \*************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	'use strict';
	
	var _Object$getOwnPropertyNames = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-names */ 2)['default'];
	
	var _Promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 16)['default'];
	
	(function () {
	  'use strict';
	
	  if (self.fetch) {
	    return;
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }
	
	  function Headers(headers) {
	    this.map = {};
	
	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      _Object$getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }
	
	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };
	
	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };
	
	  Headers.prototype.get = function (name) {
	    var values = this.map[normalizeName(name)];
	    return values ? values[0] : null;
	  };
	
	  Headers.prototype.getAll = function (name) {
	    return this.map[normalizeName(name)] || [];
	  };
	
	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };
	
	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)];
	  };
	
	  Headers.prototype.forEach = function (callback, thisArg) {
	    _Object$getOwnPropertyNames(this.map).forEach(function (name) {
	      this.map[name].forEach(function (value) {
	        callback.call(thisArg, value, name, this);
	      }, this);
	    }, this);
	  };
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return _Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }
	
	  function fileReaderReady(reader) {
	    return new _Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }
	
	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };
	
	  function Body() {
	    this.bodyUsed = false;
	
	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (!body) {
	        this._bodyText = '';
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	          throw new Error('unsupported BodyInit type');
	        }
	    };
	
	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }
	
	        if (this._bodyBlob) {
	          return _Promise.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return _Promise.resolve(new Blob([this._bodyText]));
	        }
	      };
	
	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };
	
	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return _Promise.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : _Promise.resolve(this._bodyText);
	      };
	    }
	
	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }
	
	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };
	
	    return this;
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }
	
	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = input;
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }
	
	  Request.prototype.clone = function () {
	    return new Request(this);
	  };
	
	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }
	
	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n');
	    pairs.forEach(function (header) {
	      var split = header.trim().split(':');
	      var key = split.shift().trim();
	      var value = split.join(':').trim();
	      head.append(key, value);
	    });
	    return head;
	  }
	
	  Body.call(Request.prototype);
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }
	
	    this._initBody(bodyInit);
	    this.type = 'default';
	    this.status = options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = options.statusText;
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	    this.url = options.url || '';
	  }
	
	  Body.call(Response.prototype);
	
	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };
	
	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };
	
	  var redirectStatuses = [301, 302, 303, 307, 308];
	
	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }
	
	    return new Response(null, { status: status, headers: { location: url } });
	  };
	
	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;
	
	  self.fetch = function (input, init) {
	    return new _Promise(function (resolve, reject) {
	      var request;
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input;
	      } else {
	        request = new Request(input, init);
	      }
	
	      var xhr = new XMLHttpRequest();
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL;
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL');
	        }
	
	        return;
	      }
	
	      xhr.onload = function () {
	        var status = xhr.status === 1223 ? 204 : xhr.status;
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'));
	          return;
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };
	
	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };
	
	      xhr.open(request.method, request.url, true);
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }
	
	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})();
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.fetch
	}.call(global));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-own-property-names.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-names */ 3), __esModule: true };

/***/ },
/* 3 */
/*!*******************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/object/get-own-property-names.js ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(/*! ../../modules/$ */ 4);
	__webpack_require__(/*! ../../modules/es6.object.get-own-property-names */ 5);
	module.exports = function getOwnPropertyNames(it) {
	  return $.getNames(it);
	};

/***/ },
/* 4 */
/*!********************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.js ***!
  \********************************************************/
/***/ function(module, exports) {

	"use strict";
	
	var $Object = Object;
	module.exports = {
	  create: $Object.create,
	  getProto: $Object.getPrototypeOf,
	  isEnum: ({}).propertyIsEnumerable,
	  getDesc: $Object.getOwnPropertyDescriptor,
	  setDesc: $Object.defineProperty,
	  setDescs: $Object.defineProperties,
	  getKeys: $Object.keys,
	  getNames: $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each: [].forEach
	};

/***/ },
/* 5 */
/*!****************************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.object.get-own-property-names.js ***!
  \****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	'use strict';
	
	__webpack_require__(/*! ./$.object-sap */ 6)('getOwnPropertyNames', function () {
	  return __webpack_require__(/*! ./$.get-names */ 11).get;
	});

/***/ },
/* 6 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.object-sap.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	'use strict';
	
	var $def = __webpack_require__(/*! ./$.def */ 7),
	    core = __webpack_require__(/*! ./$.core */ 9),
	    fails = __webpack_require__(/*! ./$.fails */ 10);
	module.exports = function (KEY, exec) {
	  var $def = __webpack_require__(/*! ./$.def */ 7),
	      fn = (core.Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * fails(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ },
/* 7 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.def.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./$.global */ 8),
	    core = __webpack_require__(/*! ./$.core */ 9),
	    PROTOTYPE = 'prototype';
	var ctx = function ctx(fn, that) {
	  return function () {
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function $def(type, name, source) {
	  var key,
	      own,
	      out,
	      exp,
	      isGlobal = type & $def.G,
	      isProto = type & $def.P,
	      target = isGlobal ? global : type & $def.S ? global[name] : (global[name] || {})[PROTOTYPE],
	      exports = isGlobal ? core : core[name] || (core[name] = {});
	  if (isGlobal) source = name;
	  for (key in source) {
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if (isGlobal && typeof target[key] != 'function') exp = source[key];
	    // bind timers to global for call from export context
	    else if (type & $def.B && own) exp = ctx(out, global);
	      // wrap global constructors for prevent change them in library
	      else if (type & $def.W && target[key] == out) !(function (C) {
	          exp = function (param) {
	            return this instanceof C ? new C(param) : C(param);
	          };
	          exp[PROTOTYPE] = C[PROTOTYPE];
	        })(out);else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if (isProto) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1; // forced
	$def.G = 2; // global
	$def.S = 4; // static
	$def.P = 8; // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 8 */
/*!***************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.global.js ***!
  \***************************************************************/
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	'use strict';
	
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.core.js ***!
  \*************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '1.2.5' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/*!**************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.fails.js ***!
  \**************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 11 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.get-names.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	'use strict';
	
	var _Object$getOwnPropertyNames = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-names */ 2)['default'];
	
	var toString = ({}).toString,
	    toIObject = __webpack_require__(/*! ./$.to-iobject */ 12),
	    getNames = __webpack_require__(/*! ./$ */ 4).getNames;
	
	var windowNames = typeof window == 'object' && _Object$getOwnPropertyNames ? _Object$getOwnPropertyNames(window) : [];
	
	var getWindowNames = function getWindowNames(it) {
	  try {
	    return getNames(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it) {
	  if (windowNames && toString.call(it) == '[object Window]') return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 12 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.to-iobject.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	'use strict';
	
	var IObject = __webpack_require__(/*! ./$.iobject */ 13),
	    defined = __webpack_require__(/*! ./$.defined */ 15);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 13 */
/*!****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iobject.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	'use strict';
	
	var cof = __webpack_require__(/*! ./$.cof */ 14);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 14 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.cof.js ***!
  \************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	var toString = ({}).toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 15 */
/*!****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.defined.js ***!
  \****************************************************************/
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	"use strict";
	
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 16 */
/*!********************************************!*\
  !*** ./~/babel-runtime/core-js/promise.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ 17), __esModule: true };

/***/ },
/* 17 */
/*!*********************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/promise.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../modules/es6.object.to-string */ 18);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 19);
	__webpack_require__(/*! ../modules/web.dom.iterable */ 35);
	__webpack_require__(/*! ../modules/es6.promise */ 39);
	module.exports = __webpack_require__(/*! ../modules/$.core */ 9).Promise;

/***/ },
/* 18 */
/*!***************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.object.to-string.js ***!
  \***************************************************************************/
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 19 */
/*!**************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.string.iterator.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(/*! ./$.string-at */ 20)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./$.iter-define */ 22)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 20 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.string-at.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(/*! ./$.to-integer */ 21),
	    defined = __webpack_require__(/*! ./$.defined */ 15);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 21 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.to-integer.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	"use strict";
	
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 22 */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iter-define.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(/*! ./$.library */ 23),
	    $def = __webpack_require__(/*! ./$.def */ 7),
	    $redef = __webpack_require__(/*! ./$.redef */ 24),
	    hide = __webpack_require__(/*! ./$.hide */ 25),
	    has = __webpack_require__(/*! ./$.has */ 28),
	    SYMBOL_ITERATOR = __webpack_require__(/*! ./$.wks */ 29)('iterator'),
	    Iterators = __webpack_require__(/*! ./$.iterators */ 32),
	    $iterCreate = __webpack_require__(/*! ./$.iter-create */ 33),
	    setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 34),
	    getProto = __webpack_require__(/*! ./$ */ 4).getProto,
	    BUGGY = !([].keys && 'next' in [].keys()),
	    // Safari has buggy iterators w/o `next`
	FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	var returnThis = function returnThis() {
	  return this;
	};
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      proto = Base.prototype,
	      _native = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      _default = _native || getMethod(DEFAULT),
	      methods,
	      key;
	  // Fix native
	  if (_native) {
	    var IteratorPrototype = getProto(_default.call(new Base()));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCE) && (BUGGY || !(SYMBOL_ITERATOR in proto))) {
	    hide(proto, SYMBOL_ITERATOR, _default);
	  }
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEFAULT == VALUES ? _default : getMethod(VALUES),
	      keys: IS_SET ? _default : getMethod(KEYS),
	      entries: DEFAULT != VALUES ? _default : getMethod('entries')
	    };
	    if (FORCE) for (key in methods) {
	      if (!(key in proto)) $redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 23 */
/*!****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.library.js ***!
  \****************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = true;

/***/ },
/* 24 */
/*!**************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.redef.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! ./$.hide */ 25);

/***/ },
/* 25 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.hide.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(/*! ./$ */ 4),
	    createDesc = __webpack_require__(/*! ./$.property-desc */ 26);
	module.exports = __webpack_require__(/*! ./$.descriptors */ 27) ? function (object, key, value) {
	  return $.setDesc(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 26 */
/*!**********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.property-desc.js ***!
  \**********************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 27 */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.descriptors.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	'use strict';
	
	module.exports = !__webpack_require__(/*! ./$.fails */ 10)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 28 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.has.js ***!
  \************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = ({}).hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 29 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.wks.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(/*! ./$.shared */ 30)('wks'),
	    uid = __webpack_require__(/*! ./$.uid */ 31),
	    Symbol = __webpack_require__(/*! ./$.global */ 8).Symbol;
	module.exports = function (name) {
	  return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 30 */
/*!***************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.shared.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./$.global */ 8),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 31 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.uid.js ***!
  \************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 32 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iterators.js ***!
  \******************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 33 */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iter-create.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(/*! ./$ */ 4),
	    descriptor = __webpack_require__(/*! ./$.property-desc */ 26),
	    setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 34),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./$.hide */ 25)(IteratorPrototype, __webpack_require__(/*! ./$.wks */ 29)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 34 */
/*!**************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.set-to-string-tag.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(/*! ./$ */ 4).setDesc,
	    has = __webpack_require__(/*! ./$.has */ 28),
	    TAG = __webpack_require__(/*! ./$.wks */ 29)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 35 */
/*!***********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/web.dom.iterable.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./es6.array.iterator */ 36);
	var Iterators = __webpack_require__(/*! ./$.iterators */ 32);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 36 */
/*!*************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.array.iterator.js ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./$.add-to-unscopables */ 37),
	    step = __webpack_require__(/*! ./$.iter-step */ 38),
	    Iterators = __webpack_require__(/*! ./$.iterators */ 32),
	    toIObject = __webpack_require__(/*! ./$.to-iobject */ 12);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./$.iter-define */ 22)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 37 */
/*!***************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.add-to-unscopables.js ***!
  \***************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function () {/* empty */};

/***/ },
/* 38 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iter-step.js ***!
  \******************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 39 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.promise.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(/*! ./$ */ 4),
	    LIBRARY = __webpack_require__(/*! ./$.library */ 23),
	    global = __webpack_require__(/*! ./$.global */ 8),
	    ctx = __webpack_require__(/*! ./$.ctx */ 40),
	    classof = __webpack_require__(/*! ./$.classof */ 42),
	    $def = __webpack_require__(/*! ./$.def */ 7),
	    isObject = __webpack_require__(/*! ./$.is-object */ 43),
	    anObject = __webpack_require__(/*! ./$.an-object */ 44),
	    aFunction = __webpack_require__(/*! ./$.a-function */ 41),
	    strictNew = __webpack_require__(/*! ./$.strict-new */ 45),
	    forOf = __webpack_require__(/*! ./$.for-of */ 46),
	    setProto = __webpack_require__(/*! ./$.set-proto */ 51).set,
	    same = __webpack_require__(/*! ./$.same-value */ 55),
	    SPECIES = __webpack_require__(/*! ./$.wks */ 29)('species'),
	    speciesConstructor = __webpack_require__(/*! ./$.species-constructor */ 59),
	    RECORD = __webpack_require__(/*! ./$.uid */ 31)('record'),
	    asap = __webpack_require__(/*! ./$.microtask */ 60),
	    PROMISE = 'Promise',
	    process = global.process,
	    isNode = classof(process) == 'process',
	    P = global[PROMISE],
	    Wrapper;
	
	var testResolve = function testResolve(sub) {
	  var test = new P(function () {});
	  if (sub) test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var useNative = (function () {
	  var works = false;
	  function P2(x) {
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, { constructor: { value: P2 } });
	    // actual Firefox has broken subclass support, test that
	    if (!(P2.resolve(5).then(function () {}) instanceof P2)) {
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if (works && __webpack_require__(/*! ./$.descriptors */ 27)) {
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function get() {
	          thenableThenGotten = true;
	        }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch (e) {
	    works = false;
	  }
	  return works;
	})();
	
	// helpers
	var isPromise = function isPromise(it) {
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function sameConstructor(a, b) {
	  // library wrapper special case
	  if (LIBRARY && a === P && b === Wrapper) return true;
	  return same(a, b);
	};
	var getConstructor = function getConstructor(C) {
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function notify(record, isReject) {
	  if (record.n) return;
	  record.n = true;
	  var chain = record.c;
	  asap(function () {
	    var value = record.v,
	        ok = record.s == 1,
	        i = 0;
	    var run = function run(react) {
	      var cb = ok ? react.ok : react.fail,
	          ret,
	          then;
	      try {
	        if (cb) {
	          if (!ok) record.h = true;
	          ret = cb === true ? value : cb(value);
	          if (ret === react.P) {
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(ret)) {
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch (err) {
	        react.rej(err);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if (isReject) setTimeout(function () {
	      var promise = record.p,
	          handler,
	          console;
	      if (isUnhandled(promise)) {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      }record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  var record = promise[RECORD],
	      chain = record.a || record.c,
	      i = 0,
	      react;
	  if (record.h) return false;
	  while (chain.length > i) {
	    react = chain[i++];
	    if (react.fail || !isUnhandled(react.P)) return false;
	  }return true;
	};
	var $reject = function $reject(value) {
	  var record = this;
	  if (record.d) return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function $resolve(value) {
	  var record = this,
	      then;
	  if (record.d) return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if (then = isThenable(value)) {
	      asap(function () {
	        var wrapper = { r: record, d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch (e) {
	    $reject.call({ r: record, d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!useNative) {
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor) {
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE), // <- promise
	      c: [], // <- awaiting reactions
	      a: undefined, // <- checked in isUnhandled reactions
	      s: 0, // <- state
	      d: false, // <- done
	      v: undefined, // <- value
	      h: false, // <- handled rejection
	      n: false // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch (err) {
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(/*! ./$.mix */ 65)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var react = {
	        ok: typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function' ? onRejected : false
	      };
	      var promise = react.P = new (speciesConstructor(this, P))(function (res, rej) {
	        react.res = res;
	        react.rej = rej;
	      });
	      aFunction(react.res);
	      aFunction(react.rej);
	      var record = this[RECORD];
	      record.c.push(react);
	      if (record.a) record.a.push(react);
	      if (record.s) notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	// export
	$def($def.G + $def.W + $def.F * !useNative, { Promise: P });
	__webpack_require__(/*! ./$.set-to-string-tag */ 34)(P, PROMISE);
	__webpack_require__(/*! ./$.set-species */ 66)(PROMISE);
	Wrapper = __webpack_require__(/*! ./$.core */ 9)[PROMISE];
	
	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    return new this(function (res, rej) {
	      rej(r);
	    });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return isPromise(x) && sameConstructor(x.constructor, this) ? x : new this(function (res) {
	      res(x);
	    });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(/*! ./$.iter-detect */ 67)(function (iter) {
	  P.all(iter)['catch'](function () {});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = getConstructor(this),
	        values = [];
	    return new C(function (res, rej) {
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length,
	          results = Array(remaining);
	      if (remaining) $.each.call(values, function (promise, index) {
	        C.resolve(promise).then(function (value) {
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = getConstructor(this);
	    return new C(function (res, rej) {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 40 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.ctx.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	'use strict';
	
	var aFunction = __webpack_require__(/*! ./$.a-function */ 41);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 41 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.a-function.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 42 */
/*!****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.classof.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	'use strict';
	
	var cof = __webpack_require__(/*! ./$.cof */ 14),
	    TAG = __webpack_require__(/*! ./$.wks */ 29)('toStringTag'),
	
	// ES3 wrong here
	ARG = cof((function () {
	  return arguments;
	})()) == 'Arguments';
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 43 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.is-object.js ***!
  \******************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 44 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.an-object.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(/*! ./$.is-object */ 43);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 45 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.strict-new.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 46 */
/*!***************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.for-of.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(/*! ./$.ctx */ 40),
	    call = __webpack_require__(/*! ./$.iter-call */ 47),
	    isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 48),
	    anObject = __webpack_require__(/*! ./$.an-object */ 44),
	    toLength = __webpack_require__(/*! ./$.to-length */ 49),
	    getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 50);
	module.exports = function (iterable, entries, fn, that) {
	  var iterFn = getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 47 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iter-call.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	'use strict';
	
	var anObject = __webpack_require__(/*! ./$.an-object */ 44);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 48 */
/*!**********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.is-array-iter.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	'use strict';
	
	var Iterators = __webpack_require__(/*! ./$.iterators */ 32),
	    ITERATOR = __webpack_require__(/*! ./$.wks */ 29)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return (Iterators.Array || ArrayProto[ITERATOR]) === it;
	};

/***/ },
/* 49 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.to-length.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	'use strict';
	
	var toInteger = __webpack_require__(/*! ./$.to-integer */ 21),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 50 */
/*!*******************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/core.get-iterator-method.js ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(/*! ./$.classof */ 42),
	    ITERATOR = __webpack_require__(/*! ./$.wks */ 29)('iterator'),
	    Iterators = __webpack_require__(/*! ./$.iterators */ 32);
	module.exports = __webpack_require__(/*! ./$.core */ 9).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 51 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.set-proto.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	'use strict';
	
	var _Object$setPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/set-prototype-of */ 52)['default'];
	
	var getDesc = __webpack_require__(/*! ./$ */ 4).getDesc,
	    isObject = __webpack_require__(/*! ./$.is-object */ 43),
	    anObject = __webpack_require__(/*! ./$.an-object */ 44);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: _Object$setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  (function (test, buggy, set) {
	    try {
	      set = __webpack_require__(/*! ./$.ctx */ 40)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  })({}, false) : undefined),
	  check: check
	};

/***/ },
/* 52 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 53), __esModule: true };

/***/ },
/* 53 */
/*!*************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/object/set-prototype-of.js ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 54);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 9).Object.setPrototypeOf;

/***/ },
/* 54 */
/*!**********************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \**********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	'use strict';
	
	var $def = __webpack_require__(/*! ./$.def */ 7);
	$def($def.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./$.set-proto */ 51).set });

/***/ },
/* 55 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.same-value.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.2.9 SameValue(x, y)
	"use strict";
	
	var _Object$is = __webpack_require__(/*! babel-runtime/core-js/object/is */ 56)["default"];
	
	module.exports = _Object$is || function is(x, y) {
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 56 */
/*!**********************************************!*\
  !*** ./~/babel-runtime/core-js/object/is.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/is */ 57), __esModule: true };

/***/ },
/* 57 */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/object/is.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../../modules/es6.object.is */ 58);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 9).Object.is;

/***/ },
/* 58 */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.object.is.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	'use strict';
	
	var $def = __webpack_require__(/*! ./$.def */ 7);
	$def($def.S, 'Object', { is: __webpack_require__(/*! ./$.same-value */ 55) });

/***/ },
/* 59 */
/*!****************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.species-constructor.js ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	'use strict';
	
	var anObject = __webpack_require__(/*! ./$.an-object */ 44),
	    aFunction = __webpack_require__(/*! ./$.a-function */ 41),
	    SPECIES = __webpack_require__(/*! ./$.wks */ 29)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 60 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.microtask.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./$.global */ 8),
	    macrotask = __webpack_require__(/*! ./$.task */ 61).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    isNode = __webpack_require__(/*! ./$.cof */ 14)(process) == 'process',
	    head,
	    last,
	    notify;
	
	var flush = function flush() {
	  var parent, domain;
	  if (isNode && (parent = process.domain)) {
	    process.domain = null;
	    parent.exit();
	  }
	  while (head) {
	    domain = head.domain;
	    if (domain) domain.enter();
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    if (domain) domain.exit();
	    head = head.next;
	  }last = undefined;
	  if (parent) parent.enter();
	};
	
	// Node.js
	if (isNode) {
	  notify = function () {
	    process.nextTick(flush);
	  };
	  // browsers with MutationObserver
	} else if (Observer) {
	    var toggle = 1,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = -toggle;
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	      notify = function () {
	        // strange IE + webpack dev server bug - use .call(global)
	        macrotask.call(global, flush);
	      };
	    }
	
	module.exports = function asap(fn) {
	  var task = { fn: fn, next: undefined, domain: isNode && process.domain };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify();
	  }last = task;
	};

/***/ },
/* 61 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.task.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(/*! ./$.ctx */ 40),
	    invoke = __webpack_require__(/*! ./$.invoke */ 62),
	    html = __webpack_require__(/*! ./$.html */ 63),
	    cel = __webpack_require__(/*! ./$.dom-create */ 64),
	    global = __webpack_require__(/*! ./$.global */ 8),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function listner(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(/*! ./$.cof */ 14)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	      channel = new MessageChannel();
	      port = channel.port2;
	      channel.port1.onmessage = listner;
	      defer = ctx(port.postMessage, port, 1);
	      // Browsers with postMessage, skip WebWorkers
	      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	        defer = function (id) {
	          global.postMessage(id + '', '*');
	        };
	        global.addEventListener('message', listner, false);
	        // IE8-
	      } else if (ONREADYSTATECHANGE in cel('script')) {
	          defer = function (id) {
	            html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	              html.removeChild(this);
	              run.call(id);
	            };
	          };
	          // Rest old browsers
	        } else {
	            defer = function (id) {
	              setTimeout(ctx(run, id, 1), 0);
	            };
	          }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 62 */
/*!***************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.invoke.js ***!
  \***************************************************************/
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	"use strict";
	
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 63 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.html.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! ./$.global */ 8).document && document.documentElement;

/***/ },
/* 64 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.dom-create.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(/*! ./$.is-object */ 43),
	    document = __webpack_require__(/*! ./$.global */ 8).document,
	
	// in old IE typeof document.createElement is 'object'
	is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 65 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.mix.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $redef = __webpack_require__(/*! ./$.redef */ 24);
	module.exports = function (target, src) {
	  for (var key in src) $redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 66 */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.set-species.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core = __webpack_require__(/*! ./$.core */ 9),
	    $ = __webpack_require__(/*! ./$ */ 4),
	    DESCRIPTORS = __webpack_require__(/*! ./$.descriptors */ 27),
	    SPECIES = __webpack_require__(/*! ./$.wks */ 29)('species');
	
	module.exports = function (KEY) {
	  var C = core[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 67 */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iter-detect.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Array$from = __webpack_require__(/*! babel-runtime/core-js/array/from */ 68)['default'];
	
	var ITERATOR = __webpack_require__(/*! ./$.wks */ 29)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  _Array$from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      safe = true;
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 68 */
/*!***********************************************!*\
  !*** ./~/babel-runtime/core-js/array/from.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ 69), __esModule: true };

/***/ },
/* 69 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/array/from.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../../modules/es6.string.iterator */ 19);
	__webpack_require__(/*! ../../modules/es6.array.from */ 70);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 9).Array.from;

/***/ },
/* 70 */
/*!*********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.array.from.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Array$from = __webpack_require__(/*! babel-runtime/core-js/array/from */ 68)['default'];
	
	var ctx = __webpack_require__(/*! ./$.ctx */ 40),
	    $def = __webpack_require__(/*! ./$.def */ 7),
	    toObject = __webpack_require__(/*! ./$.to-object */ 71),
	    call = __webpack_require__(/*! ./$.iter-call */ 47),
	    isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 48),
	    toLength = __webpack_require__(/*! ./$.to-length */ 49),
	    getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 50);
	$def($def.S + $def.F * !__webpack_require__(/*! ./$.iter-detect */ 67)(function (iter) {
	  _Array$from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        $$ = arguments,
	        $$len = $$.length,
	        mapfn = $$len > 1 ? $$[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 71 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.to-object.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	'use strict';
	
	var defined = __webpack_require__(/*! ./$.defined */ 15);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 72 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/helpers/interop-require-default.js ***!
  \************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 73 */
/*!*********************************!*\
  !*** ./~/google-fonts/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 74)['default'];
	
	module.exports = asString;
	module.exports.add = append;
	
	function asString(fonts) {
	  var href = getHref(fonts);
	  return '<link href="' + href + '" rel="stylesheet" type="text/css">';
	}
	
	function asElement(fonts) {
	  var href = getHref(fonts);
	  var link = document.createElement('link');
	  link.setAttribute('href', href);
	  link.setAttribute('rel', 'stylesheet');
	  link.setAttribute('type', 'text/css');
	  return link;
	}
	
	function getHref(fonts) {
	  var family = _Object$keys(fonts).map(function (name) {
	    var details = fonts[name];
	    name = name.replace(/\s+/, '+');
	    return typeof details === 'boolean' ? name : name + ':' + makeArray(details).join(',');
	  }).join('|');
	
	  return 'http://fonts.googleapis.com/css?family=' + family;
	}
	
	function append(fonts) {
	  var link = asElement(fonts);
	  document.head.appendChild(link);
	  return link;
	}
	
	function makeArray(arr) {
	  return Array.isArray(arr) ? arr : [arr];
	}

/***/ },
/* 74 */
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/object/keys.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 75), __esModule: true };

/***/ },
/* 75 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/object/keys.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../../modules/es6.object.keys */ 76);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 9).Object.keys;

/***/ },
/* 76 */
/*!**********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.object.keys.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	'use strict';
	
	var toObject = __webpack_require__(/*! ./$.to-object */ 71);
	
	__webpack_require__(/*! ./$.object-sap */ 6)('keys', function ($keys) {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 77 */
/*!******************************!*\
  !*** ./~/minstache/index.js ***!
  \******************************/
/***/ function(module, exports) {

	
	/**
	 * Expose `render()`.`
	 */
	
	'use strict';
	
	exports = module.exports = render;
	
	/**
	 * Expose `compile()`.
	 */
	
	exports.compile = compile;
	
	/**
	 * Render the given mustache `str` with `obj`.
	 *
	 * @param {String} str
	 * @param {Object} obj
	 * @return {String}
	 * @api public
	 */
	
	function render(str, obj) {
	  obj = obj || {};
	  var fn = compile(str);
	  return fn(obj);
	}
	
	/**
	 * Compile the given `str` to a `Function`.
	 *
	 * @param {String} str
	 * @return {Function}
	 * @api public
	 */
	
	function compile(str) {
	  var js = [];
	  var toks = parse(str);
	  var tok;
	
	  for (var i = 0; i < toks.length; ++i) {
	    tok = toks[i];
	    if (i % 2 == 0) {
	      js.push('"' + tok.replace(/"/g, '\\"') + '"');
	    } else {
	      switch (tok[0]) {
	        case '/':
	          tok = tok.slice(1);
	          js.push(') + ');
	          break;
	        case '^':
	          tok = tok.slice(1);
	          assertProperty(tok);
	          js.push(' + section(obj, "' + tok + '", true, ');
	          break;
	        case '#':
	          tok = tok.slice(1);
	          assertProperty(tok);
	          js.push(' + section(obj, "' + tok + '", false, ');
	          break;
	        case '!':
	          tok = tok.slice(1);
	          assertProperty(tok);
	          js.push(' + obj.' + tok + ' + ');
	          break;
	        default:
	          assertProperty(tok);
	          js.push(' + escape(obj.' + tok + ') + ');
	      }
	    }
	  }
	
	  js = '\n' + indent(escape.toString()) + ';\n\n' + indent(section.toString()) + ';\n\n' + '  return ' + js.join('').replace(/\n/g, '\\n');
	
	  return new Function('obj', js);
	}
	
	/**
	 * Assert that `prop` is a valid property.
	 *
	 * @param {String} prop
	 * @api private
	 */
	
	function assertProperty(prop) {
	  if (!prop.match(/^[\w.]+$/)) throw new Error('invalid property "' + prop + '"');
	}
	
	/**
	 * Parse `str`.
	 *
	 * @param {String} str
	 * @return {Array}
	 * @api private
	 */
	
	function parse(str) {
	  return str.split(/\{\{|\}\}/);
	}
	
	/**
	 * Indent `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	function indent(str) {
	  return str.replace(/^/gm, '  ');
	}
	
	/**
	 * Section handler.
	 *
	 * @param {Object} context obj
	 * @param {String} prop
	 * @param {String} str
	 * @param {Boolean} negate
	 * @api private
	 */
	
	function section(obj, prop, negate, str) {
	  var val = obj[prop];
	  if ('function' == typeof val) return val.call(obj, str);
	  if (negate) val = !val;
	  if (val) return str;
	  return '';
	}
	
	/**
	 * Escape the given `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */
	
	function escape(html) {
	  return String(html).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

/***/ },
/* 78 */
/*!*******************************!*\
  !*** ./~/insert-css/index.js ***!
  \*******************************/
/***/ function(module, exports) {

	'use strict';
	
	var inserted = [];
	
	module.exports = function (css) {
	    if (inserted.indexOf(css) >= 0) return;
	    inserted.push(css);
	
	    var elem = document.createElement('style');
	    var text = document.createTextNode(css);
	    elem.appendChild(text);
	
	    if (document.head.childNodes.length) {
	        document.head.insertBefore(elem, document.head.childNodes[0]);
	    } else {
	        document.head.appendChild(elem);
	    }
	};

/***/ },
/* 79 */
/*!********************************!*\
  !*** ./~/querystring/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(/*! ./decode */ 80);
	exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ 81);

/***/ },
/* 80 */
/*!*********************************!*\
  !*** ./~/querystring/decode.js ***!
  \*********************************/
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function (qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr,
	        vstr,
	        k,
	        v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};

/***/ },
/* 81 */
/*!*********************************!*\
  !*** ./~/querystring/encode.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var _Object$keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 74)['default'];
	
	var stringifyPrimitive = function stringifyPrimitive(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function (obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return _Object$keys(obj).map(function (k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function (v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
	};

/***/ },
/* 82 */
/*!**********************************!*\
  !*** ./~/raw-loader!./style.css ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = ".npm-scb-wrap {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\n.npm-scb-wrap a {\n  text-decoration: none;\n  color: #000;\n}\n.npm-scb-white\n.npm-scb-wrap a {\n  color: #fff;\n}\n\n.npm-scb-inner {\n  position: absolute;\n  top: -120px; left: 0;\n  padding: 8px;\n  width: 100%;\n  height: 150px;\n  z-index: 2;\n  -webkit-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n     -moz-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n      -ms-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n       -o-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n          transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n}\n.npm-scb-wrap:hover\n.npm-scb-inner {\n  top: 0;\n}\n\n.npm-scb-artwork {\n  position: absolute;\n  top: 16px; left: 16px;\n  width: 104px; height: 104px;\n  box-shadow: 0 0 8px -3px #000;\n  outline: 1px solid rgba(0,0,0,0.1);\n  z-index: 2;\n}\n.npm-scb-white\n.npm-scb-artwork {\n  outline: 1px solid rgba(255,255,255,0.1);\n  box-shadow: 0 0 10px -2px rgba(255,255,255,0.9);\n}\n\n.npm-scb-info {\n  position: absolute;\n  top: 16px;\n  left: 120px;\n  width: 300px;\n  z-index: 1;\n}\n\n.npm-scb-info > a {\n  display: block;\n}\n\n.npm-scb-now-playing {\n  font-size: 12px;\n  line-height: 12px;\n  position: absolute;\n  width: 500px;\n  z-index: 1;\n  padding: 15px 0;\n  top: 0; left: 138px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s;\n     -moz-transition: opacity 0.25s;\n      -ms-transition: opacity 0.25s;\n       -o-transition: opacity 0.25s;\n          transition: opacity 0.25s;\n}\n\n.npm-scb-wrap:hover\n.npm-scb-now-playing {\n  opacity: 0;\n}\n\n.npm-scb-white\n.npm-scb-now-playing {\n  color: #fff;\n}\n.npm-scb-now-playing > a {\n  font-weight: bold;\n}\n\n.npm-scb-info > a > p {\n  margin: 0;\n  padding-bottom: 0.25em;\n  line-height: 1.35em;\n  margin-left: 1em;\n  font-size: 1em;\n}\n\n.npm-scb-title {\n  font-weight: bold;\n}\n\n.npm-scb-icon {\n  position: absolute;\n  top: 120px;\n  padding-top: 0.75em;\n  left: 16px;\n}\n"

/***/ },
/* 83 */
/*!***********************************!*\
  !*** ./~/raw-loader!./badge.html ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"npm-scb-wrap\">\n  <div class=\"npm-scb-inner\">\n    <a target=\"_blank\" href=\"{{!urls.song}}\">\n      <img class=\"npm-scb-icon\" src=\"{{!icon}}\">\n      <img class=\"npm-scb-artwork\" src=\"{{!artwork}}\">\n    </a>\n    <div class=\"npm-scb-info\">\n      <a target=\"_blank\" href=\"{{!urls.song}}\">\n        <p class=\"npm-scb-title\">{{!title}}</p>\n      </a>\n      <a target=\"_blank\" href=\"{{!urls.artist}}\">\n        <p class=\"npm-scb-artist\">{{!artist}}</p>\n      </a>\n    </div>\n  </div>\n  <div class=\"npm-scb-now-playing\">\n    Now Playing:\n    <a href=\"{{!urls.song}}\">{{!title}}</a>\n    by\n    <a href=\"{{!urls.artist}}\">{{!artist}}</a>\n  </div>\n</div>"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=soundcloud-badge.js.map