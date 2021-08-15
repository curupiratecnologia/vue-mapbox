module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00fd":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "03dd":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("eac5"),
    nativeKeys = __webpack_require__("57a5");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "07c7":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "087d":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "08cc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "0a06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var buildURL = __webpack_require__("30b5");
var InterceptorManager = __webpack_require__("f6b4");
var dispatchRequest = __webpack_require__("5270");
var mergeConfig = __webpack_require__("4a7b");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "0b07":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("34ac"),
    getValue = __webpack_require__("3698");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "0d24":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e"),
    stubFalse = __webpack_require__("07c7");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "0df6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "0f5c":
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__("159a");

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),

/***/ "11ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VmPopup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1afa");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VmPopup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VmPopup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VmPopup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "126d":
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__("6da8"),
    hasUnicode = __webpack_require__("aaec"),
    unicodeToArray = __webpack_require__("d094");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "1290":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "1310":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "1368":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("da03");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "159a":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("32b3"),
    castPath = __webpack_require__("e2e4"),
    isIndex = __webpack_require__("c098"),
    isObject = __webpack_require__("1a8c"),
    toKey = __webpack_require__("f4d6");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "1838":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__("c05f"),
    get = __webpack_require__("9b02"),
    hasIn = __webpack_require__("8604"),
    isKey = __webpack_require__("f608"),
    isStrictComparable = __webpack_require__("08cc"),
    matchesStrictComparable = __webpack_require__("20ec"),
    toKey = __webpack_require__("f4d6");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "18d8":
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__("234d");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "1a8c":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "1afa":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7dff");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("04f858a6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1c3c":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    Uint8Array = __webpack_require__("2474"),
    eq = __webpack_require__("9638"),
    equalArrays = __webpack_require__("a2be"),
    mapToArray = __webpack_require__("edfa"),
    setToArray = __webpack_require__("ac41");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "1cec":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "1d2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "1efc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "1fc8":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "20ec":
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "2164":
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__("cae7");

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ "234d":
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__("e380");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "242e":
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__("72af"),
    keys = __webpack_require__("ec69");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "2444":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("c532");
var normalizeHeaderName = __webpack_require__("c8af");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("b50d");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("b50d");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "2474":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "2478":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2524":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "253c":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "26e8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "28c9":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "29f3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "2b03":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "2b10":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "2b3e":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("585a");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "2d7c":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "2d83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("387f");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "2e67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "2fcc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "30b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "30c9":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isLength = __webpack_require__("b218");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "32b3":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("872a"),
    eq = __webpack_require__("9638");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "32f4":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("2d7c"),
    stubArray = __webpack_require__("d327");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "34ac":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isMasked = __webpack_require__("1368"),
    isObject = __webpack_require__("1a8c"),
    toSource = __webpack_require__("dc57");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "3698":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "3729":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    getRawTag = __webpack_require__("00fd"),
    objectToString = __webpack_require__("29f3");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "375a":
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__("b20a");

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

module.exports = kebabCase;


/***/ }),

/***/ "3852":
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__("96f3"),
    hasPath = __webpack_require__("e2c0");

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),

/***/ "387f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "3934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "39ff":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "3b4a":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "3bb4":
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__("08cc"),
    keys = __webpack_require__("ec69");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "4245":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("1290");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "4284":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "42a2":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("b5a7"),
    Map = __webpack_require__("79bc"),
    Promise = __webpack_require__("1cec"),
    Set = __webpack_require__("c869"),
    WeakMap = __webpack_require__("39ff"),
    baseGetTag = __webpack_require__("3729"),
    toSource = __webpack_require__("dc57");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "467f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("2d83");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "48a0":
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__("242e"),
    createBaseEach = __webpack_require__("950a");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "49f4":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "4a7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "4b17":
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__("6428");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "4caa":
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__("a919"),
    toString = __webpack_require__("76dd");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "5052":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a791");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("072d6def", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "50d8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "51f5":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("2b03"),
    baseIteratee = __webpack_require__("badf"),
    toInteger = __webpack_require__("4b17");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var transformData = __webpack_require__("c401");
var isCancel = __webpack_require__("2e67");
var defaults = __webpack_require__("2444");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "55a3":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "57a5":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("91e9");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5e2e":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("28c9"),
    listCacheDelete = __webpack_require__("69d5"),
    listCacheGet = __webpack_require__("b4c0"),
    listCacheHas = __webpack_require__("fba5"),
    listCacheSet = __webpack_require__("67ca");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "6044":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "6428":
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__("b4b0");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "642a":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__("966f"),
    getMatchData = __webpack_require__("3bb4"),
    matchesStrictComparable = __webpack_require__("20ec");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "656b":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("e2e4"),
    toKey = __webpack_require__("f4d6");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "6747":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "67ca":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "69d5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "6a5c":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("7948"),
    baseIteratee = __webpack_require__("badf"),
    baseMap = __webpack_require__("97d3"),
    baseSortBy = __webpack_require__("d4b2"),
    baseUnary = __webpack_require__("b047"),
    compareMultiple = __webpack_require__("2164"),
    identity = __webpack_require__("cd9d");

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ "6ac0":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "6da8":
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "6fcd":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("50d8"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isIndex = __webpack_require__("c098"),
    isTypedArray = __webpack_require__("73ac");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "72af":
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__("99cd");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "73ac":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("743f"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "743f":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isLength = __webpack_require__("b218"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "7559":
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "76dd":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("ce86");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "7948":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "79bc":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "7a48":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "7a77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "7aac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "7b83":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("7c64"),
    mapCacheDelete = __webpack_require__("93ed"),
    mapCacheGet = __webpack_require__("2478"),
    mapCacheHas = __webpack_require__("a524"),
    mapCacheSet = __webpack_require__("1fc8");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "7b97":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    equalArrays = __webpack_require__("a2be"),
    equalByTag = __webpack_require__("1c3c"),
    equalObjects = __webpack_require__("b1e5"),
    getTag = __webpack_require__("42a2"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isTypedArray = __webpack_require__("73ac");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "7c64":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("e24b"),
    ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "7cd6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b635");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["VmImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["VmLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["VmLayerArc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["VmLayerVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["VmMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["VmMarkerDonut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["VmPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["VmSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["VueMapbox"]; });

// Import vue components
 // install function executed by Vue.use()

const install = function installVueMapbox(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(_index_js__WEBPACK_IMPORTED_MODULE_0__).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

if ('false' === Object({"NODE_ENV":"production","VUE_APP_MAPBOX_ACCESS_TOKEN":"pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA","BASE_URL":""}).ES_BUILD) {
  let GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()


/* harmony default export */ __webpack_exports__["l"] = (plugin); // To allow individual component use, export components
// each can be registered via Vue.component()


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "7d1f":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("087d"),
    isArray = __webpack_require__("6747");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "7d7c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueMapbox_vue_vue_type_style_index_0_id_102f8bd8_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5052");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueMapbox_vue_vue_type_style_index_0_id_102f8bd8_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueMapbox_vue_vue_type_style_index_0_id_102f8bd8_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueMapbox_vue_vue_type_style_index_0_id_102f8bd8_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7dff":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mapboxgl-popup-close-button{color:currentColor!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7e64":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    stackClear = __webpack_require__("efb6"),
    stackDelete = __webpack_require__("2fcc"),
    stackGet = __webpack_require__("802a"),
    stackHas = __webpack_require__("55a3"),
    stackSet = __webpack_require__("d02c");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "7e8e":
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "7ed2":
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "802a":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "8103":
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__("d194");

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ "83b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("d925");
var combineURLs = __webpack_require__("e683");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "8604":
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__("26e8"),
    hasPath = __webpack_require__("e2c0");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "872a":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("3b4a");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "8df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a77");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "91e9":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "9380":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("2d7c"),
    baseFilter = __webpack_require__("9f74"),
    baseIteratee = __webpack_require__("badf"),
    isArray = __webpack_require__("6747");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ "93c6":
/***/ (function(module, exports, __webpack_require__) {

var baseOrderBy = __webpack_require__("6a5c"),
    isArray = __webpack_require__("6747");

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

module.exports = orderBy;


/***/ }),

/***/ "93ed":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "9439":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "950a":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("30c9");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "9520":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObject = __webpack_require__("1a8c");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "9638":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "966f":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    baseIsEqual = __webpack_require__("c05f");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "96f3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),

/***/ "97d3":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("48a0"),
    isArrayLike = __webpack_require__("30c9");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "98dc":
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__("76dd");

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),

/***/ "99cd":
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "99d3":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("585a");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "9b02":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("656b");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "9f74":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("48a0");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ "a2be":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("d612"),
    arraySome = __webpack_require__("4284"),
    cacheHas = __webpack_require__("c584");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "a524":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "a791":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loader[data-v-102f8bd8]{position:absolute;top:50%;left:50%;text-align:center}.map-layer[data-v-102f8bd8]{position:absolute!important;left:0;top:0;bottom:0;right:0;width:100%}.map-layer .mapboxgl-canvas[data-v-102f8bd8]{left:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a919":
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__("ddc6");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "a994":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("7d1f"),
    getSymbols = __webpack_require__("32f4"),
    keys = __webpack_require__("ec69");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "aaec":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "ac41":
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "b047":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "b1e5":
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__("a994");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "b20a":
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__("6ac0"),
    deburr = __webpack_require__("4caa"),
    words = __webpack_require__("ea72");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "b218":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "b4b0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "b4c0":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var settle = __webpack_require__("467f");
var cookies = __webpack_require__("7aac");
var buildURL = __webpack_require__("30b5");
var buildFullPath = __webpack_require__("83b9");
var parseHeaders = __webpack_require__("c345");
var isURLSameOrigin = __webpack_require__("3934");
var createError = __webpack_require__("2d83");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    if (
      (utils.isBlob(requestData) || utils.isFile(requestData)) &&
      requestData.type
    ) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = unescape(encodeURIComponent(config.auth.password)) || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "b5a7":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "b635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueMapbox", function() { return /* reexport */ VueMapbox; });
__webpack_require__.d(__webpack_exports__, "VmSource", function() { return /* reexport */ VmSource; });
__webpack_require__.d(__webpack_exports__, "VmMarker", function() { return /* reexport */ VmMarker; });
__webpack_require__.d(__webpack_exports__, "VmPopup", function() { return /* reexport */ VmPopup; });
__webpack_require__.d(__webpack_exports__, "VmLayer", function() { return /* reexport */ VmLayer; });
__webpack_require__.d(__webpack_exports__, "VmLayerArc", function() { return /* reexport */ VmLayerArc; });
__webpack_require__.d(__webpack_exports__, "VmImage", function() { return /* reexport */ VmImage; });
__webpack_require__.d(__webpack_exports__, "VmLayerVector", function() { return /* reexport */ VmLayerVector; });
__webpack_require__.d(__webpack_exports__, "VmMarkerDonut", function() { return /* reexport */ VmMarkerDonut; });
__webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return /* reexport */ LoadingComponent; });
__webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return /* reexport */ ErrorComponent; });

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10463270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueMapbox.vue?vue&type=template&id=102f8bd8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-mapbox",style:({ position:'relative', width: _vm.myWidth, height: _vm.myHeight })},[_c('div',{ref:"mapabaselayer",staticClass:"map-layer mapbox-map-container",staticStyle:{"position":"absolute","left":"0px","top":"0","bottom":"0","right":"0","width":"100%"},attrs:{"id":"mapaBaseLayer"}},[(_vm.mapLoaded)?_c('div',[_vm._t("default")],2):_vm._e(),(_vm.showLoader && !_vm.mapLoaded)?_c('div',{staticClass:"loader"},[_vm._t("loader")],2):_vm._e(),(_vm.devMode)?_c('div',{staticStyle:{"position":"absolute","bottom":"0","font-size":"9px","padding":"0.4em","z-index":"10","background":"#00000066","color":"white"}},[_vm._v(_vm._s(_vm.camera))]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VueMapbox.vue?vue&type=template&id=102f8bd8&scoped=true&

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__("9b02");
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__("3852");
var has_default = /*#__PURE__*/__webpack_require__.n(has);

// CONCATENATED MODULE: ./src/utils/findVNodeChildren.js


/**
 * Find If componente/Vnode has any children of type
*/

/* harmony default export */ var findVNodeChildren = (function (Node, componentNameToFind, depthLevel = 1, slots = [], scopedSlots = []) {
  let foundInstances = []; // const findInstance = (theNodesChildren, currentDepth = 0) => {
  //   if (!theNodesChildren) return
  //   if (Array.isArray(theNodesChildren) === false) {
  //     theNodesChildren = [theNodesChildren]
  //   }
  //   theNodesChildren.forEach(vnode => {
  //     if ((get(vnode, '$options.name', get(vnode, 'componentOptions.Ctor.options.name')) === componentNameToFind)) {
  //       foundInstances.push(vnode)
  //     }
  //     if ((vnode.$slots || vnode.$scopedSlots) && currentDepth <= depthLevel) {
  //       // find in slots
  //       const mySlots = (slots.length === 0) ? Object.keys(vnode.$slots) : slots
  //       mySlots.forEach(slotName => {
  //         if (has(vnode.$slots, slotName)) {
  //           findInstance(vnode.$slots[slotName], currentDepth++)
  //         }
  //       })
  //       // find in scoptSlots
  //       const myScopedSlots = (scopedSlots.length === 0) ? Object.keys(vnode.$scopedSlots) : scopedSlots
  //       myScopedSlots.forEach(slotName => {
  //         if (has(vnode.$myScopedSlots, slotName)) {
  //           const vnodeScopeSlots = vnode.$slots[slotName]()
  //           findInstance(vnodeScopeSlots, currentDepth++)
  //         }
  //       })
  //     }
  //     const children = get(Node, 'children') || get(Node, 'componentOptions.children')
  //     if (Array.isArray(children)) {
  //       children.forEach(node => {
  //         findInstance(node)
  //       })
  //     }
  //   })
  // }
  // const findLayers = (VNode, bag) => {
  //   bag = bag || []
  //   if (Array.isArray(VNode)) {
  //     VNode.forEach(node => {
  //       findLayers(node, bag)
  //     })
  //     return bag
  //   }
  //   if ((get(VNode, '$options.name', get(VNode, 'componentOptions.Ctor.options.name')) === componentNameToFind)) {
  //     bag.push(VNode)
  //     //console.log(VNode.componentOptions.propsData.name)
  //   }
  //   const children = get(VNode, 'children') || get(VNode, 'componentOptions.children')
  //   if (Array.isArray(children)) {
  //     children.forEach(node => {
  //       findLayers(node, bag)
  //     })
  //   }
  //   if (has(VNode, '$slots')) {
  //     const mySlots = Object.keys(VNode.$slots)
  //     mySlots.forEach(slotName => {
  //       findLayers(VNode.$slots[slotName], bag)
  //     })
  //   }
  //   if (has(VNode, '$scopedSlots')) {
  //     const mySlots = Object.keys(VNode.$scopedSlots)
  //     mySlots.forEach(slotName => {
  //       findLayers(VNode.$scopedSlots[slotName](), bag)
  //     })
  //   }
  //   return bag
  // }
  // check for it
  // findInstance(Node)

  const findLayers = (VNode, bag) => {
    bag = bag || [];

    if (Array.isArray(VNode)) {
      VNode.forEach(node => {
        findLayers(node, bag);
      });
      return bag;
    } //   // I will allways get the component instance


    let VNodeInstance;

    if (get_default()(VNode, 'componentInstance')) {
      VNodeInstance = get_default()(VNode, 'componentInstance');
    } else {
      VNodeInstance = VNode;
    }

    if (get_default()(VNodeInstance, '$options.name', get_default()(VNodeInstance, 'componentOptions.Ctor.options.name')) === componentNameToFind) {
      bag.push(VNodeInstance); //console.log( get(VNodeInstance, '$props.name') )
    } // let children = get(VNode, 'children') || get(VNode, 'componentOptions.children')
    // if (!children) children = get(VNode, 'componentInstance.$children')
    // if (!children) 


    const children = get_default()(VNodeInstance, '$children') || get_default()(VNodeInstance, 'children');

    if (Array.isArray(children)) {
      children.forEach(node => {
        findLayers(node, bag);
      });
    }

    if (has_default()(VNodeInstance, '$slots')) {
      const mySlots = Object.keys(VNodeInstance.$slots);
      mySlots.forEach(slotName => {
        findLayers(VNodeInstance.$slots[slotName], bag);
      });
    }

    if (has_default()(VNodeInstance, '$scopedSlots')) {
      const mySlots = Object.keys(VNodeInstance.$scopedSlots);
      mySlots.forEach(slotName => {
        findLayers(VNodeInstance.$scopedSlots[slotName](), bag);
      });
    }

    return bag;
  };

  foundInstances = findLayers(Node);

  if (foundInstances.length === 0) {
    return undefined;
  }

  return foundInstances;
});
// EXTERNAL MODULE: ./node_modules/lodash/orderBy.js
var orderBy = __webpack_require__("93c6");
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy);

// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__("98dc");
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);

// CONCATENATED MODULE: ./src/utils/loadScriptsCss.js
async function loadScripts(scripts) {
  function get(source) {
    return new Promise(function (resolve, reject) {
      var el;

      if (source.match(/js$/g)) {
        el = document.createElement('script'); // TODO - get if script os link is already loaded, and if it is, resolve then - document.querySelector(`script[src='${source}']`) || 

        el.async = false;
        el.src = source;
      } else if (source.match(/css$/g)) {
        el = document.createElement('link'); // document.querySelector(`link[href='${source}']`)

        el.type = 'text/css';
        el.rel = 'stylesheet';
        el.href = source;
      }

      el.onload = function () {
        console.count('resolve -' + source);
        resolve(source);
      };

      el.onerror = function () {
        reject(source);
      };

      document.getElementsByTagName('body')[0].appendChild(el);
    });
  }

  const myPromises = scripts.map(async function (script, index) {
    return await get(script);
  });
  return await Promise.all(myPromises);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueMapbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // TODO - check why not work, and using this.findLayers works




 // inicia os webworks etc antes, para performance de mapax construidos e destruidos
// import { ScatterplotLayer, ArcLayer, HexagonLayer } from '@deck.gl/layers'
// import { MapboxLayer } from '@deck.gl/mapbox'
// import mapBaseStyle from './styles/cgeestyle'

const nativeEventsTypes = ['click', 'dblclick', 'mouseenter', 'mouseleave', 'mouseout', 'mousedown', 'mouseup', 'contextmenu', 'wheel', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'movestart', 'move', 'moveend', 'dragstart', 'drag', 'dragend', 'zoomstart', 'zoom', 'zoomend', 'rotatestart', 'rotate', 'rotateend', 'pitchstart', 'pitch', 'pitchend', 'boxzoomstart', 'boxzoomend', 'boxzoomcancel', 'webglcontextlost', 'webglcontextrestored', 'load', 'render', 'idle', 'error', 'data', 'styledata', 'sourcedata', 'dataloading', 'styledataloading', 'sourcedataloading', 'styleimagemissing'];
/* harmony default export */ var VueMapboxvue_type_script_lang_js_ = ({
  /* eslint-disable camelcase */

  /* eslint-disable eqeqeq */
  name: 'VueMapbox',

  /**
       * Access current mapbox instance using componentInstance.map
    */
  props: {
    /**
       * Mapa Width. In px or percent
    */
    width: {
      type: [Number, String],
      default: '100%'
    },

    /**
       * Mapa Height. In px or percent
    */
    height: {
      type: [Number, String],
      default: '100%'
    },

    /**
       * Show a Loader
    */
    showLoader: {
      type: Boolean,
      default: true
    },

    /**
       * AcceToken for your account for mapbox, if you are uing it for server tiles. Can be blank if you use anothers sources.
       * If you set to the vue client an process.env.VUE_APP_MAPBOX_ACCESS_TOKEN, it will be used too
    */
    accessToken: {
      type: String,
      default: ''
    },

    /**
       * Allow layer name to be rewrite, so layer with same name don't show error, and you can get than with ref in vm-layer
       * But if your application need the exatc name of layer, so yo can get the exatc name, set it to false
    */
    layersCanRaname: {
      type: Boolean,
      default: true
    },

    /**
       * The map's Mapbox style. Can be a URL or the STYLE OBJECT itself . example mapbox://styles/mapbox/streets-v11.  more info at https://mapbox.com/mapbox-gl-style-spec/
    */
    mapStyle: {
      type: [String, Object],
      default: 'mapbox://styles/mapbox/outdoors-v11'
    },

    /**
       * The minimum zoom level of the map (0-24).
    */
    minZoom: {
      type: Number,
      default: 0
    },

    /**
       * The maximun zoom level of the map (0-24).
    */
    maxZoom: {
      type: Number,
      default: 24
    },

    /**
       * Define Zoom level (0-24).
    */
    zoom: {
      type: Number,
      default: 4
    },

    /**
       *  Define center array.
    */
    center: {
      type: Array,
      default: () => [-53.048889, -14.951209500045001]
    },

    /**
       * If true , the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL. For example, http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60 . An additional string may optionally be provided to indicate a parameter-styled hash, e.g. http://path/to/my/page.html#map=2.59/39.26/53.07/-24.1/60&foo=bar , where foo is a custom parameter and bar is an arbitrary hash distinct from the map hash.
    */
    hash: {
      type: [Boolean, String],
      default: false
    },

    /**
       *  The initial bounds of the map. If bounds is specified, it overrides center and zoom constructor options.
    */
    bounds: {
      type: Array,
      default: undefined
    },

    /**
       *  The initial bounds of the map. If bounds is specified, it overrides center and zoom constructor options.
    */
    maxBounds: {
      type: Array,
      default: undefined
    },

    /**
       * camera padding. will be user for all bounds, fly etc
       * @values number or {top,left,right,bottom}
    */
    padding: {
      type: [Object, Number],
      default: 0
    },

    /**
       *  Other options to pass to mapbox. Will be merged here. See https://docs.mapbox.com/mapbox-gl-js/api/#map for all options.
    */
    otherOptions: {
      type: Object,
      default: () => ({})
    },

    /**
       *  Object with images to load in format {'imagename':url,'image2name':url2}
    */
    images: {
      type: Object,
      default: () => ({})
    },
    // {'name':url,'name2':url2}

    /**
       *  show cameras attributes
    */
    devMode: {
      type: Boolean,
      default: false
    },
    // {'name':url,'name2':url2}

    /**
       *  show cameras attributes
    */
    interactive: {
      type: Boolean,
      default: true
    },
    attributionControl: {
      type: Boolean,
      default: true
    } // {'name':url,'name2':url2}

  },
  provide: function () {
    return {
      getMap: () => this.map,
      mapLoaded: this.mapLoaded,
      mapboxgl: () => this.mapboxgl,
      MapboxVueInstance: this
    };
  },

  data() {
    return {
      /**
       *  Set When Map Style is Loaded
      */
      mapLoaded: false,
      map: null,
      sources: null,
      layers: null,
      camera: ''
    };
  },

  beforeCreate() {},

  async created() {
    // ////console.log('created - vueMapbox')
    if (!window.mapboxgl) {
      const sources = ['https://api.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.js', 'https://api.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.css'];

      try {
        await loadScripts(sources);
      } catch (e) {
        // //console.error(e)
        throw new Error('Erro loading mapbox from its CDN. Please, make sure your internet is ok, insert mapbox manually in your html ');
      }
    }

    if (!window.mapboxgl) {
      throw new Error('Erro loading mapbox from its CDN. Please, make sure your internet is ok, insert mapbox manually in your html ');
    }

    this.mapboxgl = window.mapboxgl;
    window.mapboxgl.prewarm();
    this.sources = new Map(); // {id:{type,data,instance}}

    this.layers = new Map(); //

    this.imagesMap = new Map(); //
    // this.images = new Map() //

    this.layersGroups = new Map(); //

    this.eventsOnMap = new Map(); //
    // make sure the html div to use in mapbox is loaded

    this.$nextTick(() => {
      this.createMap();
    });
  },

  computed: {
    myHeight: function () {
      let h = this.height;

      if (typeof h === 'number') {
        h += 'px';
      }

      return h;
    },
    myWidth: function () {
      let w = this.width;

      if (typeof w === 'number') {
        w += 'px';
      }

      return w;
    }
  },
  watch: {
    bounds: function (val) {
      this.map.fitBounds(val, {
        padding: this.padding
      });
    },
    maxBounds: function (val) {
      if (this.map) {
        this.map.setMaxBounds(val);
      }
    }
  },

  beforeUpdated() {// ////console.log('beforeUpdated dom vueMapbox')
  },

  mounted() {
    // ////console.log('Mounted - Mounted dom vueMapbox')
    this.$nextTick(() => {
      this.updateLayerOrder();
    });
  },

  updated() {
    // update mapbox
    console.log('🚀 ~ file: VueMapbox.vue ~ line 329 ~ updated ~ update mapbox'); // this.$nextTick(() => {

    if (this.updateLayerTimeout) clearTimeout(this.updateLayerTimeout);
    this.updateLayerTimeout = setTimeout(this.updateLayerOrder, 400); // })
  },

  beforeDestroy() {
    if (this.map) {
      this.map.remove();
    }
  },

  methods: {
    createMap: function () {
      // ////console.log('createding map - vueMapbox')
      window.mapboxgl.prewarm();

      if (this.accessToken !== '') {
        window.mapboxgl.accessToken = this.accessToken;
      } else if (true) {
        window.mapboxgl.accessToken = "pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA";
      }

      this.map = new window.mapboxgl.Map({ ...this.otherOptions,
        container: this.$refs.mapabaselayer,
        refreshExpiredTiles: false,
        antialias: true,
        style: this.mapStyle,
        center: this.center,
        zoom: this.zoom,
        hash: this.hash,
        bounds: this.bounds,
        maxBounds: this.maxBounds,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        interactive: this.interactive,
        attributionControl: this.attributionControl // maxBounds: [ -48.44732177294034, -16.638275455496753, -47.22472784587998, -14.904304916348181 ]

      });
      this.addPropsImages();
      this.setupEvents(this.$listeners, this.map, nativeEventsTypes); // ////console.log('setting mapa loaded')

      this.map.on('load', () => {
        const _this = this; // ////console.log('mapa loaded fired')


        this.mapLoaded = true;
        /**
         * Load Event - When Maps Load
         *  @property {object} _this the component instance
          * @property {object} map the mapbox instance
         */

        this.$emit('load', _this, this.map);
      }); // if (this.devMode) {
      //   this.map.on('moveend', () => {
      //     this.camera = this.map.getZoom()
      //   })
      // }
    },
    getMap: function () {
      return this.map;
    },

    /**
    * Automatic Setup Events from Mapbox Classes in Vue Instances
    */
    setupEvents: function (listners, MapboxElement, theEventsOfElement, layerId) {
      if (listners) {
        Object.entries(listners).forEach(item => {
          let eventName = item[0];
          const eventFunction = item[1];

          const eventFinal = e => {
            eventFunction(e, this.map, this);
          };

          let once = false;

          if (eventName.indexOf('~') === 0) {
            once = true;
            eventName = eventName.substring(1);
          }

          if (theEventsOfElement.includes(eventName)) {
            if (once) {
              if (layerId) {
                MapboxElement.once(eventName, layerId, eventFinal);
              } else {
                MapboxElement.once(eventName, eventFinal);
              }
            } else {
              if (layerId) {
                MapboxElement.on(eventName, layerId, eventFinal);
              } else {
                MapboxElement.on(eventName, eventFinal);
              }
            }
          }
        });
      }
    },

    /**
    * Create/Update Source
    */
    addSource: function (id, type, options) {
      // debugger
      // if source name exist, create a randow one
      if (this.map.getSource(id) && this.layersCanRaname) {
        id = uniqueId_default()(id + type);
      }

      if (type === 'geojson' && !(options === null || options === void 0 ? void 0 : options.generateId)) {
        options.generateId = true;
      }

      this.map.addSource(id, {
        type,
        ...options
      });
      const sourceObject = this.map.getSource(id);
      this.sources.set(id, {
        id,
        type,
        options,
        instance: sourceObject
      });
      return this.sources.get(id);
    },
    getSource: function (id) {
      // if source name exist, create a randow one
      if (this.sources.has(id)) {
        return this.sources.get(id);
      }

      return false;
    },

    /**
    * Remove Source
    */
    removeSource: function (id) {// if (this.sources.has(id)) {
      //   this.sources.delete(id)
      // }
      // if (this.map && this.map.getSource(id)) {
      //   this.map.removeSource(id)
      // }
    },

    /**
    * Update Source
    */
    updateSource: function (sourceid, type, options) {
      var _this$map$getStyle;

      if (this.sources.has(sourceid)) {
        this.sources.delete(sourceid);
      } // apago todos os layers que tem esse source


      const layers = (_this$map$getStyle = this.map.getStyle()) === null || _this$map$getStyle === void 0 ? void 0 : _this$map$getStyle.layers;
      if (!layers) return;
      layers.forEach(layer => {
        if (layer.source === sourceid) {
          this.map.removeLayer(layer.id);
        }
      }); // apago o source

      this.map.removeSource(sourceid); // adiciono o novo source no com mesmo is

      const source = this.addSource(sourceid, type, options); // adiciono os layer novamente

      layers.forEach((layer, i) => {
        if (layer.source === sourceid) {
          const beforeLayer = layers === null || layers === void 0 ? void 0 : layers[i - 1];

          if (beforeLayer) {
            this.map.addLayer(layer, beforeLayer.id);
          } else {
            this.map.addLayer(layer);
          }
        }
      });
      return source;
    },
    getNewIdForLayer: function (name) {
      let id = name;

      if (this.map.getLayer(name) && this.layersCanRaname) {
        id = uniqueId_default()('autoNamelayer_' + name);
      } // TODO IMPORTANTISSIMO - refazer logica de nome de layer e source, pq layers com source objetos da meio que ruim
      // id = uniqueId('autoNamelayer_' + name)


      return id;
    },

    /**
    * Create/Update Layer
    */
    addLayerTemp: function (options) {
      this.map.addLayer(options);
    },

    /**
    * Create/Update Layer
    */
    addLayer: function (options, zIndex) {
      var _options$source, _options$source$const;

      // // if layer name exist, create a randow one
      let id = options.id;

      if (this.map.getLayer(id)) {
        this.removeLayer(id);
      }

      let beforeId = this.updateLayerOrder(id);
      console.log('beforeId');
      console.log(beforeId);

      if ((options === null || options === void 0 ? void 0 : (_options$source = options.source) === null || _options$source === void 0 ? void 0 : (_options$source$const = _options$source.constructor) === null || _options$source$const === void 0 ? void 0 : _options$source$const.name) === 'Object') {
        var _options$source$id, _options$source2;

        // check if we have a id
        const sourceId = (_options$source$id = options === null || options === void 0 ? void 0 : (_options$source2 = options.source) === null || _options$source2 === void 0 ? void 0 : _options$source2.id) !== null && _options$source$id !== void 0 ? _options$source$id : id;

        if (this.map.getSource(sourceId)) {
          options.id = uniqueId_default()('new' + sourceId);
          id = options.id; // options.source.name = options.source.id
        }
      }

      if (this.map.getLayer(id)) {
        this.removeLayer(id);
      }

      if (!this.map.getLayer(beforeId)) {
        beforeId = undefined;
      }

      this.map.addLayer(options, beforeId); // const sourceObject = this.map.getLayer(options.id)

      this.layers.set(id, {
        id
      }); // if (this.updateLayerTimeout) clearTimeout(this.updateLayerTimeout)
      // this.updateLayerTimeout = setTimeout(this.updateLayerOrder, 200)

      return options.id;
    },
    findLayers: function (VNode, bag) {
      // TODO - put in a utility. See why the current util dont work
      bag = bag || [];

      if (Array.isArray(VNode)) {
        VNode.forEach(node => {
          this.findLayers(node, bag);
        });
        return bag;
      } // I will allways get the component instance


      let VNodeInstance;

      if (get_default()(VNode, 'componentInstance')) {
        VNodeInstance = get_default()(VNode, 'componentInstance');
      } else {
        VNodeInstance = VNode;
      }

      if (get_default()(VNodeInstance, '$options.name', get_default()(VNodeInstance, 'componentOptions.Ctor.options.name')) === 'VmLayer') {
        bag.push(VNodeInstance);
      }

      const children = get_default()(VNodeInstance, '$children', get_default()(VNodeInstance, 'children'));

      if (Array.isArray(children)) {
        children.forEach(node => {
          this.findLayers(node, bag);
        });
      }

      return bag;
    },

    /**
    * Update All Layers Order
    */
    // TODO IPORTANTE - complete refactory layer order
    updateLayerOrder: function (setLayerNameToReturnItBeforeLayerID) {
      var _this$map$getStyle$la, _this$map, _this$map$getStyle2;

      // console.count('===============================updateLayerOrder')
      // console.count(setLayerNameToReturnItBeforeLayerID)
      // console.time('updateLayerOrder')
      const currentLayers = (_this$map$getStyle$la = (_this$map = this.map) === null || _this$map === void 0 ? void 0 : (_this$map$getStyle2 = _this$map.getStyle()) === null || _this$map$getStyle2 === void 0 ? void 0 : _this$map$getStyle2.layers) !== null && _this$map$getStyle$la !== void 0 ? _this$map$getStyle$la : undefined;
      const layerInstances = this.findLayers(this.$slots.default); // console.log('find layer vNode tree')
      // console.timeLog('updateLayerOrder')
      // check if i have layers in map or in vNodTree

      if (!currentLayers || !layerInstances) {
        // console.warn('Map or layer in vNode not exist')
        // console.timeEnd('updateLayerOrder')
        return;
      } // console.log('======= All LAYERS IN MAPBOX')
      // console.table(currentLayers)
      // make layers with order


      let layersId = layerInstances.map((layer, i) => {
        const component = layer.componentInstance || layer;
        const id = get_default()(component, '$data.layerId');

        if (!id) {// debugger
        }

        let zIndex = get_default()(component, '$props.zIndex');
        const index = i;

        if (zIndex) {
          zIndex = Number(zIndex); // + (index / 10)
        }

        return {
          id,
          index,
          zIndex
        };
      });
      layersId = orderBy_default()(layersId, ['index'], ['asc']); // console.log('======= ORDER  INDEX')
      // console.table(layersId)

      for (let to = 0; to < layersId.length; to++) {
        if (!layersId[to].zIndex) {
          layersId[to].zIndex = to;
        }
      }

      layersId = orderBy_default()(layersId, ['zIndex'], ['asc']); // console.log('======= ORDER Z INDEX')
      // console.table(layersId)
      // console.log('order vnode layers')
      // console.timeLog('updateLayerOrder')
      // create a object with current layers id in map and topLayer id

      const currentLayersByID = {};
      currentLayers.forEach((layer, index, array) => {
        var _currentLayers;

        const obj = {
          id: layer.id,
          topLayerId: undefined
        };
        obj.topLayerId = currentLayers === null || currentLayers === void 0 ? void 0 : (_currentLayers = currentLayers[index + 1]) === null || _currentLayers === void 0 ? void 0 : _currentLayers.id;
        currentLayersByID[layer.id] = obj;
      });
      const virtualLayerVNodeByID = {};
      layersId.forEach((layer, index, array) => {
        var _layersId, _layersId2;

        const obj = {
          id: layer.id,
          topLayerId: undefined
        };
        obj.topLayerId = (_layersId = layersId) === null || _layersId === void 0 ? void 0 : (_layersId2 = _layersId[index + 1]) === null || _layersId2 === void 0 ? void 0 : _layersId2.id;
        virtualLayerVNodeByID[layer.id] = obj;
      }); // console.log('======= ORDER IN MAPBOX')
      // console.table(Object.values(currentLayersByID).filter(item => item.id.indexOf('layer-') > -1))
      // console.log('generate all layers topLayerId')
      // console.timeLog('updateLayerOrder')
      // return before layer name

      if (setLayerNameToReturnItBeforeLayerID) {
        var _beforeId;

        // console.timeEnd('updateLayerOrder')
        // console.warn('return before layer name')
        let beforeId = currentLayersByID === null || currentLayersByID === void 0 ? void 0 : currentLayersByID[setLayerNameToReturnItBeforeLayerID];
        if (!beforeId) beforeId = virtualLayerVNodeByID === null || virtualLayerVNodeByID === void 0 ? void 0 : virtualLayerVNodeByID[setLayerNameToReturnItBeforeLayerID];
        return (_beforeId = beforeId) === null || _beforeId === void 0 ? void 0 : _beforeId.topLayerId;
      } // Invert loop layers to set they order


      for (let i = layersId.length; i != -1; i--) {
        var _layersId3, _layersId3$i, _layersId4, _layersId5, _currentLayersByID$cu;

        const topLayer = (_layersId3 = layersId) === null || _layersId3 === void 0 ? void 0 : (_layersId3$i = _layersId3[i]) === null || _layersId3$i === void 0 ? void 0 : _layersId3$i.id;
        const currentLayer = (_layersId4 = layersId) === null || _layersId4 === void 0 ? void 0 : (_layersId5 = _layersId4[i - 1]) === null || _layersId5 === void 0 ? void 0 : _layersId5.id; // if we dont have layer im map, go to next one

        if (!(currentLayersByID === null || currentLayersByID === void 0 ? void 0 : currentLayersByID[currentLayer])) continue; // console.log(`check currentLayer:${currentLayer} topLayer:${topLayer}`)

        if ((currentLayersByID === null || currentLayersByID === void 0 ? void 0 : (_currentLayersByID$cu = currentLayersByID[currentLayer]) === null || _currentLayersByID$cu === void 0 ? void 0 : _currentLayersByID$cu.topLayerId) !== topLayer) {
          console.log(`moving layers ${currentLayer} to before layer ${topLayer}`); // if (topLayer !== undefined) {

          if (this.map.getLayer(currentLayer) && this.map.getLayer(topLayer)) {
            this.map.moveLayer(currentLayer, topLayer);
          } // }

        }
      } // console.log('loop and move layers')
      // console.timeLog('updateLayerOrder')
      // console.timeEnd('updateLayerOrder')

    },

    /**
    * Update Layers Index
    */
    moveLayer: function (id, zIndex) {// // if layer name exist, create a randow one
    },

    /**
    Adde images in map
    * @params {object} images.
    */
    addPropsImages: function (images) {
      if (!this.map) return;
      images = images || this.images;
      Object.entries(images).forEach(item => {
        const key = item[0];
        const value = item[1];
        this.addImage(key, value);
      });
    },

    /**
    Add images in map
    * @params {object} images.
    */
    addImage: async function (key, url, forceUpdate = false) {
      var _this$map2;

      if (!(this === null || this === void 0 ? void 0 : (_this$map2 = this.map) === null || _this$map2 === void 0 ? void 0 : _this$map2.hasImage)) return; // if already have the image on map, and not force update, return

      if (forceUpdate === false && this.imagesMap.has(key)) {
        return;
      } // create empety image to be avaliable to styles before loading the actual image
      // var width = 24 // The image will be 64 pixels square
      // var bytesPerPixel = 4 // Each pixel is represented by 4 bytes: red, green, blue, and alpha.
      // var data = new Uint8Array(width * width * bytesPerPixel)
      // if (!this.map.hasImage(key)) this.map.addImage(key, { width: width, height: width, data: data })
      // set image before it is loading, because if a have another node after


      this.imagesMap.set(key, true); // now load the real image

      let imgElement;

      try {
        imgElement = await this.processImage(url);
      } catch (e) {// //console.error(`image ${key}:${url} loading error`)
        // //console.error(e)
      }

      if (this.map.hasImage(key) && imgElement) {
        // this.map.updateImage(key, imgElement)
        this.map.removeImage(key);
        this.map.addImage(key, imgElement);
        this.map.triggerRepaint();
      } else if (imgElement) {
        this.map.addImage(key, imgElement);
      }
    },

    /**
    Remove an image of map
    * @params {object} images.
    */
    removeImage: async function (key) {
      if (!this.map) return;

      if (this.map.hasImage(key)) {
        this.map.removeImage(key);
        this.imagesMap.delete(key);
      }
    },

    /**
    Creat a html image element from a url or a svg
    * @params {object} images.
    */
    processImage: async function (imgSource) {
      return new Promise((resolve, reject) => {
        var _imgSource, _imgSource$constructo, _imgSource2, _imgSource2$construct, _imgSource3, _imgSource3$construct;

        if (!imgSource) {
          reject(new Error('img empty'));
        } else if (((_imgSource = imgSource) === null || _imgSource === void 0 ? void 0 : (_imgSource$constructo = _imgSource.constructor) === null || _imgSource$constructo === void 0 ? void 0 : _imgSource$constructo.name) === 'HTMLImageElement') {
          resolve(imgSource);
        } else if (((_imgSource2 = imgSource) === null || _imgSource2 === void 0 ? void 0 : (_imgSource2$construct = _imgSource2.constructor) === null || _imgSource2$construct === void 0 ? void 0 : _imgSource2$construct.name) === 'String' || ((_imgSource3 = imgSource) === null || _imgSource3 === void 0 ? void 0 : (_imgSource3$construct = _imgSource3.constructor) === null || _imgSource3$construct === void 0 ? void 0 : _imgSource3$construct.name) === 'SVGSVGElement') {
          var _imgSource4, _imgSource4$construct, _imgSource5, _imgSource5$construct;

          const newimg = new Image();
          newimg.crossOrigin = 'Anonymous';

          newimg.onload = () => {
            resolve(newimg);
          };

          newimg.onerror = e => {
            console.warn('convert/load image error:');
            console.warn(e);
            reject(e);
          }; // check if is a svg as string o html element


          if (((_imgSource4 = imgSource) === null || _imgSource4 === void 0 ? void 0 : (_imgSource4$construct = _imgSource4.constructor) === null || _imgSource4$construct === void 0 ? void 0 : _imgSource4$construct.name) === 'String' && imgSource.match(/<\s*svg/g) || ((_imgSource5 = imgSource) === null || _imgSource5 === void 0 ? void 0 : (_imgSource5$construct = _imgSource5.constructor) === null || _imgSource5$construct === void 0 ? void 0 : _imgSource5$construct.name) === 'SVGSVGElement') {
            var _imgSource$outerHTML, _imgSource6;

            imgSource = this.convertSvgToBase64((_imgSource$outerHTML = (_imgSource6 = imgSource) === null || _imgSource6 === void 0 ? void 0 : _imgSource6.outerHTML) !== null && _imgSource$outerHTML !== void 0 ? _imgSource$outerHTML : imgSource);
          }

          newimg.src = imgSource;
        } else {
          reject(new Error('Not compatibility image. Please set source as an url, a svg string, a svg element or img element'));
        }
      });
    },
    convertSvgToBase64: function (content) {
      // const converted = this.toBinary(content)
      let encoded;

      try {
        encoded = window.btoa(unescape(encodeURIComponent(content)));
      } catch (e) {
        console.error(e);
      } // console.log(encoded)


      return 'data:image/svg+xml;base64,' + encoded;
    },

    /**
    * Remove Layer
    */
    removeLayer: function (id) {
      if (!this.map) return;
      const map = this.getMap();

      if (this.layers.has(id)) {
        this.layers.delete(id);
      } // because when we try to remove a layer the mapbox itself has been destroied


      try {
        if (map && map.getLayer(id)) {
          map.removeLayer(id);
        }
      } catch (e) {/// ///console.warn(e)
      }

      this.$nextTick(() => this.updateLayerOrder());
    },

    /**
    *
    */
    docEvents: function () {
      this.$emit('click');
      this.$emit('dblclick');
      this.$emit('mouseenter');
      this.$emit('mouseleave');
      this.$emit('mouseout');
      this.$emit('contextmenu');
      this.$emit('wheel');
      this.$emit('touchstart');
      this.$emit('touchend');
      this.$emit('touchmove');
      this.$emit('touchcancel');
      this.$emit('movestart');
      this.$emit('move');
      this.$emit('moveend');
      this.$emit('dragstart');
      this.$emit('drag');
      this.$emit('dragend');
      this.$emit('zoomstart');
      this.$emit('zoom');
      this.$emit('zoomend');
      this.$emit('rotatestart');
      this.$emit('rotate');
      this.$emit('rotateend');
      this.$emit('pitchstart');
      this.$emit('pitch');
      this.$emit('pitchend');
      this.$emit('boxzoomstart');
      this.$emit('boxzoomend');
      this.$emit('boxzoomcancel');
      this.$emit('webglcontextlost');
      this.$emit('webglcontextrestored');
      this.$emit('load');
      this.$emit('render');
      this.$emit('idle');
      this.$emit('error');
      this.$emit('data');
      this.$emit('styledata');
      this.$emit('sourcedata');
      this.$emit('dataloading');
      this.$emit('styledataloading');
      this.$emit('sourcedataloading');
      this.$emit('styleimagemissing');
    }
  }
});
// CONCATENATED MODULE: ./src/components/VueMapbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueMapboxvue_type_script_lang_js_ = (VueMapboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VueMapbox.vue?vue&type=style&index=0&id=102f8bd8&lang=stylus&scoped=true&
var VueMapboxvue_type_style_index_0_id_102f8bd8_lang_stylus_scoped_true_ = __webpack_require__("7d7c");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VueMapbox.vue






/* normalize component */

var VueMapbox_component = normalizeComponent(
  components_VueMapboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "102f8bd8",
  null
  
)

/* harmony default export */ var VueMapbox = (VueMapbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10463270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VmSource.vue?vue&type=template&id=eb4bc024&
var VmSourcevue_type_template_id_eb4bc024_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[_vm._t("default")],2)}
var VmSourcevue_type_template_id_eb4bc024_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VmSource.vue?vue&type=template&id=eb4bc024&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VmSource.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var VmSourcevue_type_script_lang_js_ = ({
  name: 'VmSource',
  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],
  provide: function () {
    return {
      getSource: this.getSource
    };
  },
  props: {
    /**
       Id/Name of the Source. If blank or not unique, will auto generate one for you
      */
    name: {
      type: String,
      default: '',
      required: true
    },

    /*
    * If unique, check if a source with that name exist. If exist, we will use it, and not generate a new one
    */
    unique: {
      type: Boolean,
      default: false
    },

    /**
       Type of the Source.
       @values vector, raster, raster-dem, geojson, image, video, canvas
      */
    type: {
      type: String,
      required: true,
      default: 'geojson',
      validator: function (value) {
        return ['vector', 'raster', 'raster-dem', 'geojson', 'image', 'video', 'canvas'].indexOf(value) !== -1;
      }
    },

    /**
       Object contains the options for each type of source
    */
    options: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      source: null // {id, type, options, instance}

    };
  },

  watch: {
    '$props.options': function (val, oldval) {
      if (this.type === 'geojson' && val && val.data) {
        this.getMap().getSource(this.source.id).setData(val.data);
      } else if (JSON.stringify(val) !== JSON.stringify(oldval)) {
        this.source = this.MapboxVueInstance.updateSource(this.source.id, this.type, { ...val
        });
      }
    }
  },
  created: function () {
    const options = { ...this.$props.options
    };

    if (this.unique && this.MapboxVueInstance.getSource(this.name)) {
      this.source = this.MapboxVueInstance.getSource(this.name);
    } else {
      this.source = this.MapboxVueInstance.addSource(this.name, this.type, options);
    }
  },
  methods: {
    getSource: function () {
      return this.source;
    }
  },

  beforeDestroy() {
    if (this.source) {
      // this.MapboxVueInstance.removeSource(this.source.id)
      this.source = null;
    }
  }

});
// CONCATENATED MODULE: ./src/components/VmSource.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VmSourcevue_type_script_lang_js_ = (VmSourcevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VmSource.vue





/* normalize component */

var VmSource_component = normalizeComponent(
  components_VmSourcevue_type_script_lang_js_,
  VmSourcevue_type_template_id_eb4bc024_render,
  VmSourcevue_type_template_id_eb4bc024_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VmSource = (VmSource_component.exports);
// CONCATENATED MODULE: ./src/utils/getOnlyMapboxProps.js
// import filter from 'lodash/filter'

/**
Get only props with props with mapbox set to true, and with a value
@param (Vnode) Instance
@returns (Object)
*/
/* harmony default export */ var getOnlyMapboxProps = (function (VNode) {
  const props = VNode.$props;
  const mapboxProps = {};
  Object.entries(props).forEach(item => {
    let key = item[0];
    const value = item[1];

    if (value !== undefined && VNode.$options.props[key].mapbox) {
      key = VNode.$options.props[key].name || key;
      mapboxProps[key] = value;
    }
  });
  return mapboxProps;
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10463270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VmPopup.vue?vue&type=template&id=881869f8&
var VmPopupvue_type_template_id_881869f8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:({ maxHeight:_vm.myMaxHeight, overflow:'auto'})},[_vm._t("default")],2)}
var VmPopupvue_type_template_id_881869f8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VmPopup.vue?vue&type=template&id=881869f8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VmPopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
const VmPopupvue_type_script_lang_js_nativeEventsTypes = ['open', 'close'];
/* harmony default export */ var VmPopupvue_type_script_lang_js_ = ({
  name: 'VmPopup',
  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],
  props: {
    /**
       *A string indicating the part of the Popup that should be positioned closest to the coordinate set via Popup#setLngLat
       *@values 'center' , 'top' , 'bottom' , 'left' , 'right' , 'top-left' , 'top-right' , 'bottom-left' , and 'bottom-right' .
      */
    anchor: {
      type: String,
      default: undefined,
      validator: function (value) {
        return ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].indexOf(value) !== -1;
      }
    },

    /**
      If true , show or open popup. use with .sync Modifier to change parent (Dynamic)
    */
    open: {
      type: Boolean,
      default: false
    },

    /**
     * TODO
      If we use the global popup of the map. if true, any new VmPopup instance will use the same popup, so a new poup will remove any previues.
      If false, will create a new Popup.
      */
    global: {
      type: Boolean,
      default: false
    },

    /**
     Center of Popup (Dynamic)
    */
    center: {
      type: Array,
      default: () => [0, 0]
    },

    /**
      If true , a close button will appear in the top right corner of the popup.
    */
    closeButton: {
      type: Boolean,
      default: true
    },

    /**
       If true , the popup will closed when the map is clicked.
    */
    closeOnClick: {
      type: Boolean,
      default: true
    },

    /**
      If true , the popup will closed when the map moves.
    */
    closeOnMove: {
      type: Boolean,
      default: false
    },

    /**
        pixel offset applied to the popup's location specified as:
    */
    offset: {
      type: [Number, Array],
      default: 20
    },

    /**
        Space-separated CSS class names to add to popup container
    */
    className: {
      type: String,
      default: ''
    },

    /**
       * A string that sets the CSS property of the popup's maximum width, eg '300px' . To ensure the popup resizes to fit its content, set this property to 'none' .
    */
    maxWidth: {
      type: [Number, String],
      default: '240px'
    },

    /**
       * A string that sets the CSS property of the popup's maximum width, eg '300px' . To ensure the popup resizes to fit its content, set this property to 'none' .
    */
    maxHeight: {
      type: [Number, String],
      default: 'auto'
    },

    /**
       * Tracks the popup anchor to the cursor position on screens with a pointer device (it will be hidden on touchscreens). Replaces the setLngLat behavior. For most use cases, set closeOnClick and closeButton to false.
    */
    trackPointer: {
      type: Boolean,
      default: false
    },

    /**
       * The color or background of the popup
    */
    color: {
      type: String,
      default: 'white'
    },

    /**
       * The color of the popup
    */
    textColor: {
      type: String,
      default: 'black'
    },

    /**
       * In cases you want to set  a diferente color for the arrow. if null, will use the color propr
    */
    arrowColor: {
      type: String
    }
  },

  data() {
    return {
      popup: null
    };
  },

  computed: {
    myMaxHeight: function () {
      let h = this.maxHeight;

      if (typeof h === 'number') {
        h += 'px';
      }

      return h;
    },
    myMaxWidth: function () {
      let w = this.maxWidth;

      if (typeof w === 'number') {
        w += 'px';
      }

      return w;
    }
  },

  async mounted() {
    await this.$nextTick();
    this.createPopup();
  },

  watch: {
    center: function (val) {
      this.setupPopup();
    },
    open: function (val) {
      this.setupPopup();
    },
    trackPointer: function (val) {
      this.setupPopup();
    },
    maxWidth: function (val) {
      this.setupPopup();
    },
    color: function (val) {
      this.setupPopup();
    }
  },

  beforeDestroy() {
    if (this.popup) {
      this.popup.remove();
    }
  },

  methods: {
    createPopup: function () {
      //console.log('popup created!')
      const options = {
        closeButton: this.closeButton,
        closeOnMove: this.closeOnMove,
        closeOnClick: this.closeOnClick,
        anchor: this.anchor,
        offset: this.offset,
        className: this.className,
        trackPointer: this.trackPointer,
        maxWidth: this.maxWidth
      };
      const mapboxgl = this.mapboxgl();
      this.popup = new mapboxgl.Popup(options).setLngLat(this.center).setDOMContent(this.$el);
      this.popup.on('open', () => {
        /**
         * Update event. Can use .sync modifier to make 2 way data bind easer for the open props
         *  @property {boolean} open true or false
         */
        this.$emit('update:open', true);
      });
      this.popup.on('close', () => {
        this.$emit('update:open', false);
      });
      this.popup.on('close', () => {//console.log('chamou fechou do popup')
      });
      this.setupPopup();
      this.MapboxVueInstance.setupEvents(this.$listeners, this.popup, VmPopupvue_type_script_lang_js_nativeEventsTypes);
    },
    setupPopup: function () {
      if (!this.popup) return;

      if (this.open) {
        if (this.popup.isOpen() === false) {
          this.popup.addTo(this.getMap());
        }
      } else {
        if (this.popup.isOpen() === true) {
          this.popup.remove();
        }
      }

      this.popup.setLngLat(this.center);

      if (this.trackPointer) {
        this.popup.trackPointer();
      }

      if (this.popup.getMaxWidth() !== this.myMaxWidth) {
        this.popup.setMaxWidth(this.myMaxWidth);
      }

      const popupElement = this.popup.getElement();

      if (popupElement) {
        const content = popupElement.querySelector('.mapboxgl-popup-content');
        const arrow = popupElement.querySelector('.mapboxgl-popup-tip');
        content.style.backgroundColor = this.color;
        content.style.color = this.textColor;
        arrow.style.borderTopColor = this.arrowColor || this.color;
      }
    },
    docEvents: function () {
      this.$emit('open');
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./src/components/VmPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VmPopupvue_type_script_lang_js_ = (VmPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VmPopup.vue?vue&type=style&index=0&lang=stylus&
var VmPopupvue_type_style_index_0_lang_stylus_ = __webpack_require__("11ec");

// CONCATENATED MODULE: ./src/components/VmPopup.vue






/* normalize component */

var VmPopup_component = normalizeComponent(
  components_VmPopupvue_type_script_lang_js_,
  VmPopupvue_type_template_id_881869f8_render,
  VmPopupvue_type_template_id_881869f8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VmPopup = (VmPopup_component.exports);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__("0f5c");
var set_default = /*#__PURE__*/__webpack_require__.n(set);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VmMarker.vue?vue&type=script&lang=js&
//
// TODO - refatorar logica. confuso demais em casos onde adiciono ou removo v-slots/chilcher no marker
// Exemplo
//     <vm-marker :center="[-45,-15]">
//                    <template v-if="show" v-slot:popupClick>
//                        <VmPopup
//                        color="red"
//                        >
//                        <ul>
//                            <li v-for='tema in [1,2,3,4]'>
//                               o tema é o tema - {{tema}}
//                            </li>
//                        </ul>
//                        </VmPopup>
//                    </template>
//              </vm-marker>
//






const VmMarkervue_type_script_lang_js_nativeEventsTypes = ['dragstart', 'drag', 'dragend'];
/* harmony default export */ var VmMarkervue_type_script_lang_js_ = ({
  /**
   * The only true button.
   * @description o Marker do asd fasd fuasd fausdf sdai
   */

  /**
   * The only true button.
   * @event Hover
   */
  name: 'VmMarker',
  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],
  props: {
    /**
      * (Dynamic) Center of Marker
      * @tags mapbox true
      */
    center: {
      type: Array,
      default: () => [0, 0],
      required: true
    },

    /**
      * (Dynamic) Anchor of the marker
      * @values center , top , bottom , left , right , top-left , top-right , bottom-left , and bottom-right
     */
    anchor: {
      type: String,
      default: 'bottom',
      validator: function (value) {
        return ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].indexOf(value) !== -1;
      },
      mapbox: true
    },

    /**
       (Dynamic) Color of the default marker, if default slot is not set (Dynamic)
    */
    color: {
      type: String,
      default: '#3FB1CE',
      mapbox: true
    },

    /**
      (Dynamic) Offset of market in pixels
    */
    offset: {
      type: Array,
      mapbox: true
    },

    /**
      (Dynamic) Offset of market in pixels
    */
    draggable: {
      type: Boolean,
      mapbox: true
    },

    /**
      (Dynamic) The rotation angle of the marker in degrees, relative to its respective rotationAlignment setting. A positive value will rotate the marker clockwise.
    */
    rotation: {
      type: Number,
      mapbox: true
    },

    /**
      (Dynamic) min zoom of map tha will show the marker
    */
    minZoom: {
      type: [String, Number]
    },

    /**
      (Dynamic) min zoom of map tha will show the marker
    */
    maxZoom: {
      type: [String, Number]
    },

    /**
      (Dynamic) map aligns the Marker to the plane of the map. viewport aligns the Marker to the plane of the viewport. auto automatically matches the value of rotationAlignment
      @values map, viewport, auto
    */
    pitchAlignment: {
      type: String,
      validator: function (value) {
        // O valor precisa corresponder a alguma dessas Strings
        return ['map', 'viewport', 'auto'].indexOf(value) !== -1;
      },
      mapbox: true
    },

    /**
      (Dynamic) map aligns the Marker 's rotation relative to the map, maintaining a bearing as the map rotates. viewport aligns the Marker 's rotation relative to the viewport, agnostic to map rotations. auto is equivalent to viewport .
      @values map, viewport, auto
    */
    rotationAlignment: {
      type: String,
      validator: function (value) {
        // O valor precisa corresponder a alguma dessas Strings
        return ['map', 'viewport', 'auto'].indexOf(value) !== -1;
      },
      mapbox: true
    },

    /**
       * (Dynamic) The PopUp Content - If set via slot, this will be ignored
    */
    popUpContent: {
      type: String
    },

    /**
       * Metadata, that can be used in popup scoped slots
    */
    metadata: {
      type: Object
    },

    /**
    * opacidade
    */
    opacity: {
      type: Number,
      default: 0.2
    }
  },

  data() {
    return {
      marker: null,
      popupOpen: null,
      visible: false
    };
  },

  computed: {},
  created: function () {
    //console.count('marker created')
    this.popup = null;
    this.markerElement = null;
    this.eventsFunction = {};
    this.hasPopHover = false;
    this.hasPopClick = false;
    this.closeTimeout = null;

    if (this.minZoom || this.maxZoom) {
      this.getMap().on('zoom', this.markerVisibility);
    }
  },

  mounted() {
    // console.count('marker mounted')
    this.$nextTick(() => this.createMarker());
  },

  async updated() {// //console.log('marker updated')
    // await this.$nextTick()
    // this.setupMarker()
    // this.$nextTick(() => this.setupMarker())
  },

  watch: {
    visible: function (val, oldval) {
      if (val === false && oldval === true && this.popupOpen === 'hover') {
        this.popupOpen = false;
      }
    },
    center: function (val) {
      if (this.marker) {
        this.marker.setLngLat(val);
      }
    },
    draggable: function (val) {
      if (this.marker) {
        this.marker.setDraggable(val);
      }
    },
    color: function (val) {
      if (this.marker) {
        this.setupMarker();
      }
    },
    anchor: function (val) {
      if (this.marker) {
        this.setupMarker();
      }
    },
    offset: function (val) {
      if (this.marker) {
        this.marker.setOffset(val);
      }
    },
    rotation: function (val) {
      if (this.marker) {
        this.marker.setRotation(val);
      }
    },
    rotationAlignment: function (val) {
      if (this.marker) {
        this.marker.setRotationAlignment(val);
      }
    },
    pitchAlignment: function (val) {
      if (this.marker) {
        this.marker.setPitchAlignment(val);
      }
    },
    popUpContent: function (val) {
      if (this.marker) {
        this.updateHtmlContent();
      }
    }
  },

  beforeDestroy() {
    // console.count('remove marker')
    this.getMap().off('zoom', this.markerVisibility);

    if (this.marker) {
      // console.count('really remove marker')
      this.marker.remove();
    } else {// console.count('no marker to remove')
    }
  },

  // updated () {
  //   this.$nextTick(() => this.updateHtmlContent())
  // },
  methods: {
    createMarker: function () {
      //console.log('setupMarker')
      const options = getOnlyMapboxProps(this);
      if (this.marker) this.marker.remove();

      if (this.$slots.marker) {
        options.element = this.$refs.marker;
      }

      const mapboxgl = this.mapboxgl();
      this.marker = new mapboxgl.Marker(options).setLngLat(this.center);
      this.MapboxVueInstance.setupEvents(this.$listeners, this.marker, VmMarkervue_type_script_lang_js_nativeEventsTypes);
      this.setupMarkerEvents();
      this.$nextTick(() => this.setupMarker());
    },
    setupMarker: function () {
      this.markerElement = this.marker.getElement();
      this.markerVisibility();
      this.setupPopupEvents(); // if have a instance of popup, check iff is props is open, so we set

      if (get_default()(this.getPopupClick(), 'componentOptions.propsData.open') === true) {
        this.popupOpen = 'click';
      }
    },
    setupMarkerEvents: function () {
      if (!this.marker) return;
      this.markerElement = this.marker.getElement();
      Object.entries(this.$listeners).forEach(item => {
        let eventName = item[0];
        const func = item[1];
        let once = false;
        let capture = false;
        let passive = false;
        const modifier = eventName.substr(0, 2).replace(/[^a-z]/, '');

        if (modifier === '~') {
          once = true;
        }

        if (modifier === '!') {
          capture = true;
        }

        if (modifier === '&') {
          passive = true;
        }

        if (modifier === '~!') {
          once = true;
          capture = true;
        }

        eventName = eventName.replace(/^[^a-z]/, '');
        const eventFunc = func;
        this.markerElement.addEventListener(eventName, e => eventFunc(e), {
          capture,
          once,
          passive
        });
      });
    },
    setupPopupEvents: function () {
      this.markerElement = this.marker.getElement();

      if (this.hasPopupHover()) {
        this.markerElement.addEventListener('mousemove', this.markerEventHover, {
          capture: true
        });
        this.markerElement.addEventListener('mouseleave', this.markerEventLeave, {
          capture: false
        });
      }

      if (this.hasPopupClick()) {
        this.markerElement.addEventListener('click', this.markerEventClick, {
          capture: true
        });
      }
    },
    markerEventHover: function (e) {
      e.stopPropagation();
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;

      if (!this.popupOpen) {
        this.popupOpen = 'hover';
      }
    },
    markerEventLeave: function (e) {
      if (this.popupOpen === 'hover') {
        this.closeTimeout = setTimeout(() => {
          this.popupOpen = false;
        }, 100);
      }
    },
    markerEventClick: function (e) {
      e.stopPropagation();

      if (this.popupOpen === 'click') {
        this.popupOpen = false;
      } else {
        this.popupOpen = 'click';
      }
    },
    markerVisibility: function () {
      // if (!this.minZoom && !this.maxZoom) return
      const minZoom = this.minZoom ? this.minZoom : 0;
      const maxZoom = this.maxZoom ? this.maxZoom : 24;
      const zoom = this.getMap().getZoom();

      if (zoom >= minZoom && zoom <= maxZoom && this.visible === false) {
        this.marker.addTo(this.getMap());
        this.visible = true;
      } else if (this.visible === true && (zoom < minZoom || zoom > maxZoom)) {
        this.marker.remove();
        this.visible = false;
      }
    },
    getPopupHover: function () {
      if (has_default()(this.$scopedSlots, 'popupHover')) {
        return this.$scopedSlots.popupHover({
          metadata: this.metadata
        }); // [0]
      } else if (has_default()(this.$slots, 'popupHover')) {
        return this.$slots.popupHover;
      }

      return false;
    },
    getPopupClick: function () {
      const popupFind = findVNodeChildren(this.$slots.default, 'VmPopup');

      if (has_default()(this.$scopedSlots, 'popupClick')) {
        return this.$scopedSlots.popupClick({
          metadata: this.metadata
        }); // [0]
      } else if (has_default()(this.$slots, 'popupClick')) {
        return this.$slots.popupClick;
      } else if (popupFind) {
        return popupFind[0];
      } else if (this.popUpContent) {
        return this.popUpContent;
      }

      return false;
    },
    hasPopupHover: function () {
      if (has_default()(this.$scopedSlots, 'popupHover') || has_default()(this.$slots, 'popupHover')) {
        return true;
      }

      return false;
    },
    hasPopupClick: function () {
      const popupFind = findVNodeChildren(this.$slots.default, 'VmPopup');

      if (has_default()(this.$scopedSlots, 'popupClick') || has_default()(this.$slots, 'popupClick') || popupFind) {
        return true;
      }

      return false;
    },
    docEvents: function () {
      /**
      *  @property {object} _this the component instance
      *  @property {object} map the mapbox instance
      */
      this.$emit('dragstart');
      this.$emit('drag');
      this.$emit('dragend');
      this.$emit('click');
      this.$emit('mouseleave');
      this.$emit('mousemove');
      this.$emit('mouseover');
      this.$emit('**alldivmouseevents**');
    }
  },

  render(h) {
    const minZoom = this.minZoom ? this.minZoom : 0;
    const maxZoom = this.maxZoom ? this.maxZoom : 24;
    const zoom = this.getMap().getZoom(); // if (zoom < minZoom || zoom > maxZoom) {
    //     return null
    // }
    //   this.rendered = true

    const childrens = [];
    let popup;
    let popupKey;
    let popupProps = {};
    let popupInstance;

    if (this.marker) {
      if (this.hasPopupClick()) {
        this.marker.getElement().style.cursor = 'pointer';
      } else {
        this.marker.getElement().style.cursor = 'hand';
      }
    }

    if (this.popupOpen === 'click') {
      popupProps = {
        center: this.center,
        trackPointer: false,
        closeOnClick: true,
        closeButton: true,
        open: true
      };
      popup = this.getPopupClick();
      popupKey = 'markerPopupClick';
    } else if (this.popupOpen === 'hover') {
      popupProps = {
        center: this.center,
        trackPointer: false,
        closeButton: false,
        closeOnClick: false,
        open: true
      };
      popup = this.getPopupHover();
      popupKey = 'markerPopupHover';
    }

    if (popup) {
      // check if popup is the content type of popup, if not create one
      const popupFind = findVNodeChildren(popup, 'VmPopup');
      popupInstance = popupFind ? popupFind[0] : h(VmPopup, [popup]); // TODO - verificar pq quando recebe o vnode e quando recebe a instancia.
      // as vezes consigo reutilizar a instancia

      if (popupInstance && popupInstance.$vnode) {
        popupInstance = popupInstance.$vnode;
      }

      popupInstance.key = popupKey; // set default offset of popup

      const markerHeight = this.markerElement.getBoundingClientRect().height;
      let popupYOffset;

      if (this.anchor.indexOf('bottom') > -1) {
        popupYOffset = markerHeight + 15;
      } else if (this.anchor === 'center') {
        popupYOffset = markerHeight / 2;
      } else if (this.anchor.indexOf('top') > -1) {
        popupYOffset = 4;
      }

      popupProps.offset = [0, -popupYOffset];
      popupInstance.componentOptions.propsData = { ...popupProps,
        ...popupInstance.componentOptions.propsData
      }; // if close popup, updade opemn props

      if (this.popupOpen === 'click') {
        const closeFunc = get_default()(popupInstance, 'componentOptions.listeners.close');
        set_default()(popupInstance.componentOptions, 'listeners.close', e => {
          // just call close function if popup is close by user, not by min or max zoom removing it
          if (this.visible === true) {
            this.popupOpen = false;

            if (closeFunc) {
              closeFunc(e);
            }
          }
        });
      }
    }

    if (this.$slots.marker) {
      childrens.push(h('div', {
        slot: 'marker',
        ref: 'marker'
      }, [this.$slots.marker]));
    }

    if (popupInstance && this.visible) {
      childrens.push(popupInstance);
    } // return null


    return h('div', {
      style: {
        display: 'none',
        opacity: Number(this.opacity)
      }
    }, [...childrens]);
    this.markerVisibility(); // just for documentatio

    /**
    @slot use to define a custom marker
    */

    const m = this.$slots.marker;
    /**
    @slot popup to show when hover a marker. Can be used with popupClick too.
      with Scoped slot receives a metadata properties
    */

    const y = this.$slots.popupHover;
    /**
    @slot popup to show when click a marker. Can be used with popupClick too.
      with Scoped slot receives a metadata properties
    */

    const z = this.$slots.popupClick;
  }

});
// CONCATENATED MODULE: ./src/components/VmMarker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VmMarkervue_type_script_lang_js_ = (VmMarkervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VmMarker.vue
var VmMarker_render, VmMarker_staticRenderFns




/* normalize component */

var VmMarker_component = normalizeComponent(
  components_VmMarkervue_type_script_lang_js_,
  VmMarker_render,
  VmMarker_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VmMarker = (VmMarker_component.exports);
// EXTERNAL MODULE: ./node_modules/lodash/filter.js
var filter = __webpack_require__("9380");
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: ./node_modules/lodash/findIndex.js
var findIndex = __webpack_require__("51f5");
var findIndex_default = /*#__PURE__*/__webpack_require__.n(findIndex);

// EXTERNAL MODULE: ./node_modules/lodash/kebabCase.js
var kebabCase = __webpack_require__("375a");
var kebabCase_default = /*#__PURE__*/__webpack_require__.n(kebabCase);

// EXTERNAL MODULE: ./node_modules/lodash/startCase.js
var startCase = __webpack_require__("e740");
var startCase_default = /*#__PURE__*/__webpack_require__.n(startCase);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/components/LayerMapboxProps.js
const LAYER_DEFAULT_PROPS = {
  'background-color': {
    paint: true,
    layerType: 'background'
  },
  'background-opacity': {
    paint: true,
    layerType: 'background'
  },
  'background-pattern': {
    paint: true,
    layerType: 'background'
  },
  'fill-antialias': {
    paint: true,
    layerType: 'fill'
  },
  'fill-color': {
    paint: true,
    layerType: 'fill'
  },
  'fill-opacity': {
    paint: true,
    layerType: 'fill'
  },
  'fill-outline-color': {
    paint: true,
    layerType: 'fill'
  },
  'fill-pattern': {
    paint: true,
    layerType: 'fill'
  },
  'fill-sort-key': {
    layout: true,
    layerType: 'fill'
  },
  'fill-translate': {
    paint: true,
    layerType: 'fill'
  },
  'fill-translate-anchor': {
    paint: true,
    layerType: 'fill'
  },
  'line-blur': {
    paint: true,
    layerType: 'line'
  },
  'line-cap': {
    layout: true,
    layerType: 'line'
  },
  'line-color': {
    paint: true,
    layerType: 'line'
  },
  'line-dasharray': {
    paint: true,
    layerType: 'line'
  },
  'line-gap-width': {
    paint: true,
    layerType: 'line'
  },
  'line-gradient': {
    paint: true,
    layerType: 'line'
  },
  'line-join': {
    layout: true,
    layerType: 'line'
  },
  'line-miter-limit': {
    layout: true,
    layerType: 'line'
  },
  'line-offset': {
    paint: true,
    layerType: 'line'
  },
  'line-opacity': {
    paint: true,
    layerType: 'line'
  },
  'line-pattern': {
    paint: true,
    layerType: 'line'
  },
  'line-round-limit': {
    layout: true,
    layerType: 'line'
  },
  'line-sort-key': {
    layout: true,
    layerType: 'line'
  },
  'line-translate': {
    paint: true,
    layerType: 'line'
  },
  'line-translate-anchor': {
    paint: true,
    layerType: 'line'
  },
  'line-width': {
    paint: true,
    layerType: 'line'
  },
  'icon-allow-overlap': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-anchor': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-color': {
    paint: true,
    layerType: 'symbol'
  },
  'icon-halo-blur': {
    paint: true,
    layerType: 'symbol'
  },
  'icon-halo-color': {
    paint: true,
    layerType: 'symbol'
  },
  'icon-halo-width': {
    paint: true,
    layerType: 'symbol'
  },
  'icon-ignore-placement': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-image': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-keep-upright': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-offset': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-opacity': {
    paint: true,
    layerType: 'symbol'
  },
  'icon-optional': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-padding': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-pitch-alignment': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-rotate': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-rotation-alignment': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-size': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-text-fit': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-text-fit-padding': {
    layout: true,
    layerType: 'symbol'
  },
  'icon-translate': {
    paint: true,
    layerType: 'symbol'
  },
  'icon-translate-anchor': {
    paint: true,
    layerType: 'symbol'
  },
  'symbol-avoid-edges': {
    layout: true,
    layerType: 'symbol'
  },
  'symbol-placement': {
    layout: true,
    layerType: 'symbol'
  },
  'symbol-sort-key': {
    layout: true,
    layerType: 'symbol'
  },
  'symbol-spacing': {
    layout: true,
    layerType: 'symbol'
  },
  'symbol-z-order': {
    layout: true,
    layerType: 'symbol'
  },
  'text-allow-overlap': {
    layout: true,
    layerType: 'symbol'
  },
  'text-anchor': {
    layout: true,
    layerType: 'symbol'
  },
  'text-color': {
    paint: true,
    layerType: 'symbol'
  },
  'text-field': {
    layout: true,
    layerType: 'symbol'
  },
  'text-font': {
    layout: true,
    layerType: 'symbol'
  },
  'text-halo-blur': {
    paint: true,
    layerType: 'symbol'
  },
  'text-halo-color': {
    paint: true,
    layerType: 'symbol'
  },
  'text-halo-width': {
    paint: true,
    layerType: 'symbol'
  },
  'text-ignore-placement': {
    layout: true,
    layerType: 'symbol'
  },
  'text-justify': {
    layout: true,
    layerType: 'symbol'
  },
  'text-keep-upright': {
    layout: true,
    layerType: 'symbol'
  },
  'text-letter-spacing': {
    layout: true,
    layerType: 'symbol'
  },
  'text-line-height': {
    layout: true,
    layerType: 'symbol'
  },
  'text-max-angle': {
    layout: true,
    layerType: 'symbol'
  },
  'text-max-width': {
    layout: true,
    layerType: 'symbol'
  },
  'text-offset': {
    layout: true,
    layerType: 'symbol'
  },
  'text-opacity': {
    paint: true,
    layerType: 'symbol'
  },
  'text-optional': {
    layout: true,
    layerType: 'symbol'
  },
  'text-padding': {
    layout: true,
    layerType: 'symbol'
  },
  'text-pitch-alignment': {
    layout: true,
    layerType: 'symbol'
  },
  'text-radial-offset': {
    layout: true,
    layerType: 'symbol'
  },
  'text-rotate': {
    layout: true,
    layerType: 'symbol'
  },
  'text-rotation-alignment': {
    layout: true,
    layerType: 'symbol'
  },
  'text-size': {
    layout: true,
    layerType: 'symbol'
  },
  'text-transform': {
    layout: true,
    layerType: 'symbol'
  },
  'text-translate': {
    paint: true,
    layerType: 'symbol'
  },
  'text-translate-anchor': {
    paint: true,
    layerType: 'symbol'
  },
  'text-variable-anchor': {
    layout: true,
    layerType: 'symbol'
  },
  'text-writing-mode': {
    layout: true,
    layerType: 'symbol'
  },
  'raster-brightness-max': {
    paint: true,
    layerType: 'raster'
  },
  'raster-brightness-min': {
    paint: true,
    layerType: 'raster'
  },
  'raster-contrast': {
    paint: true,
    layerType: 'raster'
  },
  'raster-fade-duration': {
    paint: true,
    layerType: 'raster'
  },
  'raster-hue-rotate': {
    paint: true,
    layerType: 'raster'
  },
  'raster-opacity': {
    paint: true,
    layerType: 'raster'
  },
  'raster-resampling': {
    paint: true,
    layerType: 'raster'
  },
  'raster-saturation': {
    paint: true,
    layerType: 'raster'
  },
  'circle-blur': {
    paint: true,
    layerType: 'circle'
  },
  'circle-color': {
    paint: true,
    layerType: 'circle'
  },
  'circle-opacity': {
    paint: true,
    layerType: 'circle'
  },
  'circle-pitch-alignment': {
    paint: true,
    layerType: 'circle'
  },
  'circle-pitch-scale': {
    paint: true,
    layerType: 'circle'
  },
  'circle-radius': {
    paint: true,
    layerType: 'circle'
  },
  'circle-sort-key': {
    layout: true,
    layerType: 'circle'
  },
  'circle-stroke-color': {
    paint: true,
    layerType: 'circle'
  },
  'circle-stroke-opacity': {
    paint: true,
    layerType: 'circle'
  },
  'circle-stroke-width': {
    paint: true,
    layerType: 'circle'
  },
  'circle-translate': {
    paint: true,
    layerType: 'circle'
  },
  'circle-translate-anchor': {
    paint: true,
    layerType: 'circle'
  },
  'fill-extrusion-base': {
    paint: true,
    layerType: 'fill-extrusion'
  },
  'fill-extrusion-color': {
    paint: true,
    layerType: 'fill-extrusion'
  },
  'fill-extrusion-height': {
    paint: true,
    layerType: 'fill-extrusion'
  },
  'fill-extrusion-opacity': {
    paint: true,
    layerType: 'fill-extrusion'
  },
  'fill-extrusion-pattern': {
    paint: true,
    layerType: 'fill-extrusion'
  },
  'fill-extrusion-translate': {
    paint: true,
    layerType: 'fill-extrusion'
  },
  'fill-extrusion-translate-anchor': {
    paint: true,
    layerType: 'fill-extrusion'
  },
  'fill-extrusion-vertical-gradient': {
    paint: true,
    layerType: 'fill-extrusion'
  },
  'heatmap-color': {
    paint: true,
    layerType: 'heatmap'
  },
  'heatmap-intensity': {
    paint: true,
    layerType: 'heatmap'
  },
  'heatmap-opacity': {
    paint: true,
    layerType: 'heatmap'
  },
  'heatmap-radius': {
    paint: true,
    layerType: 'heatmap'
  },
  'heatmap-weight': {
    paint: true,
    layerType: 'heatmap'
  },
  'hillshade-accent-color': {
    paint: true,
    layerType: 'hillshade'
  },
  'hillshade-exaggeration': {
    paint: true,
    layerType: 'hillshade'
  },
  'hillshade-highlight-color': {
    paint: true,
    layerType: 'hillshade'
  },
  'hillshade-illumination-anchor': {
    paint: true,
    layerType: 'hillshade'
  },
  'hillshade-illumination-direction': {
    paint: true,
    layerType: 'hillshade'
  },
  'hillshade-shadow-color': {
    paint: true,
    layerType: 'hillshade'
  },
  visibility: {
    layout: true,
    layerType: 'all'
  }
}; // include especial -hover or -click props

const FINAL_PROPS = {};
Object.entries(LAYER_DEFAULT_PROPS).forEach(item => {
  const key = item[0];
  const value = item[1];
  FINAL_PROPS[key] = value;
  FINAL_PROPS[key + '-hover'] = {
    value,
    hover: true
  };
  FINAL_PROPS[key + '-click'] = {
    value,
    click: true
  };
});

/* harmony default export */ var LayerMapboxProps = (FINAL_PROPS);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VmLayer.vue?vue&type=script&lang=js&
//

/**
 * @typedef {Object} layerClasses
 * @property {string | number} value - value to compare
 * @property {{}} property - property name do lookup
 * @property {string} fill-color - fill color of object with this propertie
 */












const VmLayervue_type_script_lang_js_nativeEventsTypes = ['mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'click', 'dblclick', 'contextmenu', 'touchstart', 'touchend', 'touchcancel'];
/* harmony default export */ var VmLayervue_type_script_lang_js_ = ({
  name: 'VmLayer',
  inject: {
    getMap: 'getMap',
    mapboxgl: 'mapboxgl',
    MapboxVueInstance: 'MapboxVueInstance',
    getSource: {
      from: 'getSource',
      default: undefined
    }
  },
  props: {
    /**
       **ID/Name of the Layer.** If blank or not unique, will auto generate one for you
      */
    name: {
      type: String,
      default: ''
    },

    /**
       Type of the Layer.
       @values "fill", "line", "symbol", "circle", "heatmap", "fill-extrusion", "raster", "hillshade", "background".
      */
    type: {
      type: String,
      required: true,
      validator: function (value) {
        return ['fill', 'line', 'symbol', 'circle', 'heatmap', 'fill-extrusion', 'raster', 'hillshade', 'background', 'custom'].indexOf(value) !== -1;
      }
    },

    /**
       The data source for the layer. If blank will find a parent Source component.  Reference a source that has already been defined using the source's unique id. Reference a new source using a source object (as defined in the Mapbox Style Specification ) directly.
      */
    source: {
      type: [String, Object],
      mapbox: true
    },

    /**
       The data source for the layer. If blank will find a parent Source component.  Reference a source that has already been defined using the source's unique id. Reference a new source using a source object (as defined in the Mapbox Style Specification ) directly.
      */
    customLayer: {
      type: Object,
      mapbox: false
    },

    /**
       The name of the source layer within the specified layer.source to use for this style layer. This is only applicable for vector tile sources and is required when layer.source is of the type vector .
    */
    sourceLayer: {
      type: String,
      mapbox: true,
      name: 'source-layer'
    },

    /**
       *  Object with images to load in format {'imagename':url,'image2name':url2}
    */
    images: {
      type: Object,
      default: () => ({})
    },
    // {'name':url,'name2':url2}

    /**
     *  A abstract scale to opacity.
     *  if opacity is 1, it will use the layer opacity definition, if 0.5, it will reduce the current opacity in 50%.
     * it is greate to control all opacity in one time
     */
    opacity: {
      type: Number
    },

    /**
     *  A shorthand to set color, in any type.
     * example, for layer type fill, will set fill-color, in circle, will set
     */
    color: {
      type: String
    },

    /**
     *  A shorthand to set color, in any type.
     * example, for layer type fill, will set fill-color, in circle, will set
     */
    colorHover: {
      type: String
    },

    /**
     *  A shorthand to set color, in any type.
     * example, for layer type fill, will set fill-color, in circle, will set
     */
    colorClick: {
      type: String
    },

    /**
     *  With hideOnOpacity, when opacity is 0, the visibilit of layer will be hidden, else, will be show
     */
    hideOnOpacity: {
      type: Boolean,
      default: true
    },

    /**
       (Dynamic) Size of the tile buffer on each side. A value of 0 produces no buffer. A value of 512 produces a buffer as wide as the tile itself. Larger values produce fewer rendering artifacts near tile edges and slower performance.
      */
    filter: {
      type: Array,
      mapbox: true
    },

    /**
       (Dynamic) Paint properties for the layer. Available paint properties vary by layer.type . A full list of paint properties for each layer type is available in the Mapbox Style Specification . If no paint properties are specified, default values will be used.
      */
    paint: {
      type: Object,
      mapbox: true
    },

    /**
       (Dynamic) Layout properties for the layer. Available layout properties vary by layer.type . A full list of layout properties for each layer type is available in the Mapbox Style Specification . If no layout properties are specified, default values will be used.
      */
    layout: {
      type: Object,
      default: () => ({}),
      mapbox: true
    },

    /**
       (Dynamic)  Max zoom on which to cluster points if clustering is enabled. Defaults to one zoom less than maxzoom (so that last zoom features are not clustered).
    */
    maxzoom: {
      type: Number,
      default: 24,
      mapbox: true
    },

    /**
       (Dynamic) The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden. The value can be any number between 0 and 24 (inclusive). If no minzoom is provided, the layer will be visible at all zoom levels for which there are tiles available.
    */
    minzoom: {
      type: Number,
      default: 0,
      mapbox: true
    },

    /**
      Arbitrary properties useful to track with the layer, but do not influence rendering.
    */
    metadata: {
      type: Object,
      mapbox: true
    },

    /**
       (Dynamic) Paint of the feature in witch the mouse are over
    */
    paintHover: {
      type: Object
    },

    /**
       (Dynamic) Paint of the feature in witch we click
    */
    paintClick: {
      type: Object
    },

    /**
       (Dynamic) Layout of the feature in witch we hover
    */
    layoutHover: {
      type: Object
    },

    /**
       (Dynamic) Layout of the feature in witch we click
    */
    layoutClick: {
      type: Object
    },

    /**
       (Dynamic) If Number, is order of the layer. Can set the Name of the layer to put after
    */
    zIndex: {
      type: [Number, String]
    },

    /**
      * Classes are array that defines paint and layout properties on value.
      * it is a short hand for expresion
      * @values  [{'fill-color':'#fe0000', 'fill-opacity':0.3, value:1, property:"vlr_classe", 'label':"Área Artificial", },
                 {'fill-color':'#ebe628', 'fill-opacity':'0.3',value:2, property:"vlr_classe", 'label':"Área Agrícola",}]
    */
    classes: {
      type: [Array]
    },

    /**
      * How to interpolate the values in classes
    */
    classesValueInterpolation: {
      type: String,
      default: 'match',
      validator: function (value) {
        return ['match', 'step', 'interpolate'].indexOf(value) !== -1;
      }
    },

    /**
      * (Dynamic) Any child popup will be show on feature click or hover
      * @values click, hover
    */

    /**
    * Set with multiple feature selection is possible, if pressing any control keys or automatic with set to true
    *  If click outside the layer, or click over a selected feature, it will desselected
     // TODO Dinamic
    @values 'shift', 'control', 'alt', true, false
    */
    multipleFeatureSelectionOn: {
      type: [String, Boolean],
      default: false,
      validator: function (value) {
        return ['shift', 'control', 'alt', true, false].indexOf(value) !== -1;
      }
    },

    /**
    * array of values to join the features using setState
    * so we can easy use it on expression or show in popup id
    */
    dataJoin: {
      type: [Array, String]
    },

    /**
    If dataJoin is a url, and the items is not in root, here we define the path of the itens, like this "items" os "items.result"
    (lodash get like)
    */
    dataJoinDataPath: {
      type: String
    },
    dataJoinKey: {
      type: String,
      default: 'id'
    },

    /**
    * Set if this layer is ignore when calculating the top most layer to see what we are hover
    */
    ignoreEvents: {
      type: Boolean,
      default: false
    },

    /**
    * Set if this layer is ignore when calculating the top most layer to see what we are hover
    */
    ignoreOthersLayer: {
      type: Boolean,
      default: false
    },
    'background-color': {
      paint: true,
      layerType: 'background'
    },
    'background-opacity': {
      paint: true,
      layerType: 'background'
    },
    'background-pattern': {
      paint: true,
      layerType: 'background'
    },
    'fill-antialias': {
      paint: true,
      layerType: 'fill'
    },
    'fill-color': {
      paint: true,
      layerType: 'fill'
    },
    'fill-opacity': {
      paint: true,
      layerType: 'fill'
    },
    'fill-outline-color': {
      paint: true,
      layerType: 'fill'
    },
    'fill-pattern': {
      paint: true,
      layerType: 'fill'
    },
    'fill-sort-key': {
      layout: true,
      layerType: 'fill'
    },
    'fill-translate': {
      paint: true,
      layerType: 'fill'
    },
    'fill-translate-anchor': {
      paint: true,
      layerType: 'fill'
    },
    'line-blur': {
      paint: true,
      layerType: 'line'
    },
    'line-cap': {
      layout: true,
      layerType: 'line'
    },
    'line-color': {
      paint: true,
      layerType: 'line'
    },
    'line-dasharray': {
      paint: true,
      layerType: 'line'
    },
    'line-gap-width': {
      paint: true,
      layerType: 'line'
    },
    'line-gradient': {
      paint: true,
      layerType: 'line'
    },
    'line-join': {
      layout: true,
      layerType: 'line'
    },
    'line-miter-limit': {
      layout: true,
      layerType: 'line'
    },
    'line-offset': {
      paint: true,
      layerType: 'line'
    },
    'line-opacity': {
      paint: true,
      layerType: 'line'
    },
    'line-pattern': {
      paint: true,
      layerType: 'line'
    },
    'line-round-limit': {
      layout: true,
      layerType: 'line'
    },
    'line-sort-key': {
      layout: true,
      layerType: 'line'
    },
    'line-translate': {
      paint: true,
      layerType: 'line'
    },
    'line-translate-anchor': {
      paint: true,
      layerType: 'line'
    },
    'line-width': {
      paint: true,
      layerType: 'line'
    },
    'icon-allow-overlap': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-anchor': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-color': {
      paint: true,
      layerType: 'symbol'
    },
    'icon-halo-blur': {
      paint: true,
      layerType: 'symbol'
    },
    'icon-halo-color': {
      paint: true,
      layerType: 'symbol'
    },
    'icon-halo-width': {
      paint: true,
      layerType: 'symbol'
    },
    'icon-ignore-placement': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-image': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-keep-upright': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-offset': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-opacity': {
      paint: true,
      layerType: 'symbol'
    },
    'icon-optional': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-padding': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-pitch-alignment': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-rotate': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-rotation-alignment': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-size': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-text-fit': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-text-fit-padding': {
      layout: true,
      layerType: 'symbol'
    },
    'icon-translate': {
      paint: true,
      layerType: 'symbol'
    },
    'icon-translate-anchor': {
      paint: true,
      layerType: 'symbol'
    },
    'symbol-avoid-edges': {
      layout: true,
      layerType: 'symbol'
    },
    'symbol-placement': {
      layout: true,
      layerType: 'symbol'
    },
    'symbol-sort-key': {
      layout: true,
      layerType: 'symbol'
    },
    'symbol-spacing': {
      layout: true,
      layerType: 'symbol'
    },
    'symbol-z-order': {
      layout: true,
      layerType: 'symbol'
    },
    'text-allow-overlap': {
      layout: true,
      layerType: 'symbol'
    },
    'text-anchor': {
      layout: true,
      layerType: 'symbol'
    },
    'text-color': {
      paint: true,
      layerType: 'symbol'
    },
    'text-field': {
      layout: true,
      layerType: 'symbol'
    },
    'text-font': {
      layout: true,
      layerType: 'symbol'
    },
    'text-halo-blur': {
      paint: true,
      layerType: 'symbol'
    },
    'text-halo-color': {
      paint: true,
      layerType: 'symbol'
    },
    'text-halo-width': {
      paint: true,
      layerType: 'symbol'
    },
    'text-ignore-placement': {
      layout: true,
      layerType: 'symbol'
    },
    'text-justify': {
      layout: true,
      layerType: 'symbol'
    },
    'text-keep-upright': {
      layout: true,
      layerType: 'symbol'
    },
    'text-letter-spacing': {
      layout: true,
      layerType: 'symbol'
    },
    'text-line-height': {
      layout: true,
      layerType: 'symbol'
    },
    'text-max-angle': {
      layout: true,
      layerType: 'symbol'
    },
    'text-max-width': {
      layout: true,
      layerType: 'symbol'
    },
    'text-offset': {
      layout: true,
      layerType: 'symbol'
    },
    'text-opacity': {
      paint: true,
      layerType: 'symbol'
    },
    'text-optional': {
      layout: true,
      layerType: 'symbol'
    },
    'text-padding': {
      layout: true,
      layerType: 'symbol'
    },
    'text-pitch-alignment': {
      layout: true,
      layerType: 'symbol'
    },
    'text-radial-offset': {
      layout: true,
      layerType: 'symbol'
    },
    'text-rotate': {
      layout: true,
      layerType: 'symbol'
    },
    'text-rotation-alignment': {
      layout: true,
      layerType: 'symbol'
    },
    'text-size': {
      layout: true,
      layerType: 'symbol'
    },
    'text-transform': {
      layout: true,
      layerType: 'symbol'
    },
    'text-translate': {
      paint: true,
      layerType: 'symbol'
    },
    'text-translate-anchor': {
      paint: true,
      layerType: 'symbol'
    },
    'text-variable-anchor': {
      layout: true,
      layerType: 'symbol'
    },
    'text-writing-mode': {
      layout: true,
      layerType: 'symbol'
    },
    'raster-brightness-max': {
      paint: true,
      layerType: 'raster'
    },
    'raster-brightness-min': {
      paint: true,
      layerType: 'raster'
    },
    'raster-contrast': {
      paint: true,
      layerType: 'raster'
    },
    'raster-fade-duration': {
      paint: true,
      layerType: 'raster'
    },
    'raster-hue-rotate': {
      paint: true,
      layerType: 'raster'
    },
    'raster-opacity': {
      paint: true,
      layerType: 'raster'
    },
    'raster-resampling': {
      paint: true,
      layerType: 'raster'
    },
    'raster-saturation': {
      paint: true,
      layerType: 'raster'
    },
    'circle-blur': {
      paint: true,
      layerType: 'circle'
    },
    'circle-color': {
      paint: true,
      layerType: 'circle'
    },
    'circle-opacity': {
      paint: true,
      layerType: 'circle'
    },
    'circle-pitch-alignment': {
      paint: true,
      layerType: 'circle'
    },
    'circle-pitch-scale': {
      paint: true,
      layerType: 'circle'
    },
    'circle-radius': {
      paint: true,
      layerType: 'circle'
    },
    'circle-sort-key': {
      layout: true,
      layerType: 'circle'
    },
    'circle-stroke-color': {
      paint: true,
      layerType: 'circle'
    },
    'circle-stroke-opacity': {
      paint: true,
      layerType: 'circle'
    },
    'circle-stroke-width': {
      paint: true,
      layerType: 'circle'
    },
    'circle-translate': {
      paint: true,
      layerType: 'circle'
    },
    'circle-translate-anchor': {
      paint: true,
      layerType: 'circle'
    },
    'fill-extrusion-base': {
      paint: true,
      layerType: 'fill-extrusion'
    },
    'fill-extrusion-color': {
      paint: true,
      layerType: 'fill-extrusion'
    },
    'fill-extrusion-height': {
      paint: true,
      layerType: 'fill-extrusion'
    },
    'fill-extrusion-opacity': {
      paint: true,
      layerType: 'fill-extrusion'
    },
    'fill-extrusion-pattern': {
      paint: true,
      layerType: 'fill-extrusion'
    },
    'fill-extrusion-translate': {
      paint: true,
      layerType: 'fill-extrusion'
    },
    'fill-extrusion-translate-anchor': {
      paint: true,
      layerType: 'fill-extrusion'
    },
    'fill-extrusion-vertical-gradient': {
      paint: true,
      layerType: 'fill-extrusion'
    },
    'heatmap-color': {
      paint: true,
      layerType: 'heatmap'
    },
    'heatmap-intensity': {
      paint: true,
      layerType: 'heatmap'
    },
    'heatmap-opacity': {
      paint: true,
      layerType: 'heatmap'
    },
    'heatmap-radius': {
      paint: true,
      layerType: 'heatmap'
    },
    'heatmap-weight': {
      paint: true,
      layerType: 'heatmap'
    },
    'hillshade-accent-color': {
      paint: true,
      layerType: 'hillshade'
    },
    'hillshade-exaggeration': {
      paint: true,
      layerType: 'hillshade'
    },
    'hillshade-highlight-color': {
      paint: true,
      layerType: 'hillshade'
    },
    'hillshade-illumination-anchor': {
      paint: true,
      layerType: 'hillshade'
    },
    'hillshade-illumination-direction': {
      paint: true,
      layerType: 'hillshade'
    },
    'hillshade-shadow-color': {
      paint: true,
      layerType: 'hillshade'
    },
    visibility: {
      layout: true,
      layerType: 'all'
    }
  },

  data() {
    return {
      featureState: {},
      layerId: null,
      sourceId: null,
      selectedFeatures: [],
      hoverFeatures: [],
      hasChildPopup: null,
      lastClick: null,
      lastHover: null,
      hasFeatureHover: false,
      hasFeatureClick: false,
      myData: false,

      /**
      KeysExistInData allow to transform some the expressions from ['get','properties'] to ['feature-state','featurestate']
      */
      keysExistInData: []
    };
  },

  computed: {
    myPaintNormal: function () {
      // hack to check props change to force computed
      return this.getPaintLayoutForState('paint', '');
    },
    myPaintHover: function () {
      return this.getPaintLayoutForState('paint', 'hover');
    },
    myPaintClick: function () {
      return this.getPaintLayoutForState('paint', 'click');
    },
    myLayoutNormal: function () {
      return this.getPaintLayoutForState('layout', '');
    },
    myLayoutHover: function () {
      return this.getPaintLayoutForState('layout', 'hover');
    },
    myLayoutClick: function () {
      return this.getPaintLayoutForState('layout', 'click');
    },
    myPaint: function () {
      let paint = this.myPaintNormal;
      const paintHover = this.myPaintHover;
      const paintClick = this.myPaintClick;

      if (this.hasFeatureHover || this.hasFeatureClick) {
        paint = this.getFinalFeatureStateForPaintOrLayout(paint, paintHover, paintClick);
      }

      return paint;
    },
    myLayout: function () {
      let layout = this.myLayoutNormal;
      const layoutHover = this.myPaintHover;
      const layoutClick = this.myPaintClick;

      if (this.hasFeatureHover || this.hasFeatureClick) {
        layout = this.getFinalFeatureStateForPaintOrLayout(layout, layoutHover, layoutClick);
      } // check hideOnOpacitu


      const opacity = this.opacity;
      if (this.hideOnOpacity === false || opacity === undefined || opacity === null) return layout;

      if (opacity === 0 && this.hideOnOpacity) {
        layout.visibility = 'none';
      } else if (!layout.visibility) {
        // just set visible if i dont have, so respect the input
        layout.visibility = 'visible';
      }

      return layout;
    },
    layerInstance: function () {
      return this.getMap().getLayer(this.id);
    }
  },
  watch: {
    source: function (val, oldval) {
      if (typeof val === 'object') {
        if (JSON.stringify(val) !== JSON.stringify(oldval)) {
          var _this$getMap, _this$getMap$getLayer;

          const source = this === null || this === void 0 ? void 0 : (_this$getMap = this.getMap()) === null || _this$getMap === void 0 ? void 0 : (_this$getMap$getLayer = _this$getMap.getLayer(this.layerId)) === null || _this$getMap$getLayer === void 0 ? void 0 : _this$getMap$getLayer.source;

          if (source) {
            this.MapboxVueInstance.updateSource(source, val.type, { ...val
            });
          }
        }
      }
    },
    minzoom: function (val) {
      if (this.layerExist()) {
        this.getMap().setLayerZoomRange(this.layerId, this.minzoom, this.maxzoom);
      }
    },
    maxzoom: function (val) {
      if (this.layerExist()) {
        this.getMap().setLayerZoomRange(this.layerId, this.minzoom, this.maxzoom);
      }
    },
    zIndex: function (val) {
      // // console.log(val)
      this.$nextTick(() => this.MapboxVueInstance.updateLayerOrder());
    },
    filter: function (val) {
      this.getMap().setFilter(this.layerId, val);
    },
    myPaint: function (newPaint, oldPaint) {
      Object.entries(newPaint).forEach(item => {
        const key = item[0];
        const value = item[1];

        if (JSON.stringify(value) !== JSON.stringify(oldPaint[key])) {
          if (this.layerExist()) {
            this.getMap().setPaintProperty(this.layerId, key, value);
          }
        }
      });
    },
    myLayout: function (newLayout, oldLayout) {
      Object.entries(newLayout).forEach(item => {
        const key = item[0];
        const value = item[1];

        if (JSON.stringify(value) !== JSON.stringify(oldLayout[key])) {
          if (this.layerExist()) {
            this.getMap().setLayoutProperty(this.layerId, key, value);
          }
        }
      });
    },
    selectedFeatures: function (val, oldVal) {
      const map = this.getMap();
      let hasChanges = false;
      oldVal.forEach(feature => {
        if (feature === null || feature === void 0 ? void 0 : feature.id) {
          hasChanges = true;
          map.setFeatureState({
            source: this.sourceId,
            sourceLayer: this.sourceLayer,
            id: feature.id
          }, {
            click: false
          });
        }
      });
      val.forEach(feature => {
        if (feature === null || feature === void 0 ? void 0 : feature.id) {
          map.setFeatureState({
            source: this.sourceId,
            sourceLayer: this.sourceLayer,
            id: feature.id
          }, {
            click: true
          });
        }
      });
      /**
       * Triggers when features selectes clicking on it
       *
       * @property {array} features array with all features selected
       */

      this.$emit('featureselect', val);
      this.$emit('featureclick', val);
    },
    hoverFeatures: function (val, oldVal) {
      let hasChanges = false;
      const map = this.getMap();

      if (oldVal.length > 0) {
        oldVal.forEach(feature => {
          if (feature === null || feature === void 0 ? void 0 : feature.id) {
            hasChanges = true;
            hasChanges = true;
            map.setFeatureState({
              source: this.sourceId,
              sourceLayer: this.sourceLayer,
              id: feature.id
            }, {
              hover: false
            });
          }
        });
      }

      val.forEach(feature => {
        if (feature === null || feature === void 0 ? void 0 : feature.id) {
          hasChanges = true;
          map.setFeatureState({
            source: this.sourceId,
            sourceLayer: this.sourceLayer,
            id: feature.id
          }, {
            hover: true
          });
        }
      });
      /**
       * Triggers when features ar hover
       *
       * @property {array} features array with all features selected
       */

      if (hasChanges) this.$emit('featurehover', val);
    },
    // DATA JOIN WATCHERS
    myData: function (val, oldval) {
      // if (Array.isArray(val) && Array.isArray(oldval)) {
      //   if (JSON.stringify(val) === JSON.stringify(oldval)) {
      //     return
      //   }
      // }
      this.keysExistInData = Object.keys(val === null || val === void 0 ? void 0 : val[0]);

      if (oldval) {
        this.removeDataJoin(oldval);
      }

      this.addDataJoin();
    },
    dataJoin: function (val, oldval) {
      // if (Array.isArray(val) && Array.isArray(oldval)) {
      //   if (JSON.stringify(val) === JSON.stringify(oldval)) {
      //     return
      //   }
      // }
      this.loadData();
    },
    // dataJoinKey: function () {
    //   this.addDataJoin()
    // },
    // dataJoinDataPath: function () {
    //   this.addDataJoin()
    // }
    myPaintClick: function (val) {
      if (val) {
        this.setupLayerFeaturesEvents();
      }
    },
    myPaintHover: function (val) {
      if (val) {
        this.setupLayerFeaturesEvents();
      }
    },
    myLayoutHover: function (val) {
      if (val) {
        this.setupLayerFeaturesEvents();
      }
    },
    myLayoutClick: function (val) {
      if (val) {
        this.setupLayerFeaturesEvents();
      }
    }
  },
  beforeUpdated: function () {// debugger;
    // //// console.log('beforeUpdated dom vueMapbox')
  },
  updated: function () {// debugger
    // update layer
    // // console.log('🚀 ~ file: VmLayer.vue ~ line 509 ~ update layer')
    // this.$nextTick(() => {
    //   // console.log('🚀 ~ file: VmLayer.vue ~ line 509 ~ update layer nextTick')
    //   this.updateLayerOrder()
    // })
  },
  created: function () {
    var _options$source, _options$source$const;

    this.popupOpen = false;
    const options = getOnlyMapboxProps(this);

    if (!options.source) {
      const source = this.getSource && this.getSource();

      if (source && source.id) {
        options.source = source.id;
      }
    } // if source is object, we create create the source apart,
    // because if layers have the source id set for layer, we will use a unique one
    // TODO - verify all source options are equal to make sure of it


    if ((options === null || options === void 0 ? void 0 : (_options$source = options.source) === null || _options$source === void 0 ? void 0 : (_options$source$const = _options$source.constructor) === null || _options$source$const === void 0 ? void 0 : _options$source$const.name) === 'Object') {
      var _options$source2, _options$source3;

      const sourceid = ((_options$source2 = options.source) === null || _options$source2 === void 0 ? void 0 : _options$source2.id) || ((_options$source3 = options.source) === null || _options$source3 === void 0 ? void 0 : _options$source3.name);

      if (sourceid) {
        if (this.MapboxVueInstance.getSource(sourceid) === false) {
          this.MapboxVueInstance.addSource(sourceid, options.source.type, { ...options.source
          });
        } else {
          // update source
          this.MapboxVueInstance.updateSource(sourceid, options.source.type, { ...options.source
          });
        }

        options.source = sourceid;
      } else {//dont exist sourceid, create a source with name
      }
    }

    this.options = options;

    if (this.type === 'custom') {
      this.addLayer();
    } else {
      // check if source exist,
      if (typeof this.options.source === 'string') {
        if (this.getMap().getSource(this.options.source)) {
          this.addLayer();
        } else {
          // add layer when a source with name is added in future
          const func = e => {
            // // console.log(e)
            if (e.dataType === 'source' && e.sourceId === this.options.source) {
              this.addLayer();
              this.getMap().off('sourcedata', func);
            }
          };

          this.getMap().on('sourcedata', func);
        }
      } else {
        // TODO - pretty sure not used, remove in future
        this.addLayer();
      }
    } // if not, wait it to loaded an show it


    if (this.images) {
      this.MapboxVueInstance.addPropsImages(this.images);
    }
  },
  mounted: async function () {
    await this.$nextTick();
    this.setupLayerFeaturesEvents();
  },

  destroyed() {
    if (this.layerId) {
      // // console.log('destroying ' + this.layerId)
      this.MapboxVueInstance.removeLayer(this.layerId); // check if the source of layer is a Object/ownSource,and remove it too
      // TODO - move logic to vueMapabox component

      if (typeof this.source === 'object') {
        // TODO - not removing sourve because others can be using it, but make this logic better
        try {
          this.getMap().removeSource(this.sourceId);
        } catch (error) {
          console.error(error);
        }
      }
    }
  },

  methods: {
    layerExist: function () {
      const layer = this.getMap().getLayer(this.layerId);
      if (!layer) return false;
      return true;
    },
    addLayer: function () {
      try {
        if (this.customLayer) {
          const mylayer = this.MapboxVueInstance.addLayer(this.customLayer);
          this.layerId = mylayer;
        } else {
          const id = this.MapboxVueInstance.getNewIdForLayer(this.name); // set the layerId before create layer, because can be time consumming the addLayer
          // and if we set after the findLayer will get null the $data.layerId

          this.layerId = id;
          const mylayer = this.MapboxVueInstance.addLayer({ ...this.options,
            id: id,
            type: this.type,
            paint: this.myPaint,
            layout: this.myLayout
          }); // get source add after add layer, because of case where the source especification is set in props as option, withou an id

          this.sourceId = this.getMap().getLayer(mylayer).source; // bind listners set in component to mapbox events

          this.MapboxVueInstance.setupEvents(this.$listeners, this.getMap(), VmLayervue_type_script_lang_js_nativeEventsTypes, this.layerId, this.created_at, this.zIndex);
          this.loadData();
        }
      } catch (e) {
        console.error('Error adding Layer:' + this.name);
        console.error(e);
      }
    },
    removeDataJoin: function (vals) {
      if (Array.isArray(vals)) {
        const map = this.getMap();
        vals.forEach(feature => {
          var _feature$constructor;

          // check object and if we have an id
          if ((feature === null || feature === void 0 ? void 0 : (_feature$constructor = feature.constructor) === null || _feature$constructor === void 0 ? void 0 : _feature$constructor.name) !== 'Object') return;
          const id = feature === null || feature === void 0 ? void 0 : feature[this.dataJoinKey];
          if (id === undefined) return; // TODO - important - include feature_state in same source for varius layer

          map.removeFeatureState({
            source: this.sourceId,
            sourceLayer: this.sourceLayer,
            id
          });
        });
      }
    },
    addDataJoin: function () {
      if (Array.isArray(this.myData)) {
        const map = this.getMap();
        this.myData.forEach(feature => {
          var _feature$constructor2;

          // check object and if we have an id
          if ((feature === null || feature === void 0 ? void 0 : (_feature$constructor2 = feature.constructor) === null || _feature$constructor2 === void 0 ? void 0 : _feature$constructor2.name) !== 'Object') return;
          const id = feature === null || feature === void 0 ? void 0 : feature[this.dataJoinKey];
          if (id === undefined) return;
          map.setFeatureState({
            source: this.sourceId,
            sourceLayer: this.sourceLayer,
            id
          }, { ...feature
          });
        });
      }
    },
    loadData: async function () {
      var _this$dataJoin, _this$dataJoin$constr;

      let res = false;

      if (Array.isArray(this.dataJoin)) {
        res = [...this.dataJoin];
      } else if (((_this$dataJoin = this.dataJoin) === null || _this$dataJoin === void 0 ? void 0 : (_this$dataJoin$constr = _this$dataJoin.constructor) === null || _this$dataJoin$constr === void 0 ? void 0 : _this$dataJoin$constr.name) === 'String') {
        try {
          const url = new URL(this.dataJoin);
          const res = await axios_default.a.get(url);
          const path = this.dataJoinDataPath ? 'data' + this.dataJoinDataPath : 'data';
          const data = get_default()(res, path);

          if (Array.isArray(data)) {
            return [...data];
          } else {// console.error('dataJoin url dont return an Array in path:' + path)
          }
        } catch (e) {// console.error(e)
        }
      }

      this.myData = res;
      return res;
    },
    //* * EVENTS SETUP */
    setupLayerFeaturesEvents: function () {
      if (this.$listeners.featurehover || this.myPaintHover || this.myLayoutHover || has_default()(this.$scopedSlots, 'popupHover') || has_default()(this.$slots, 'popupHover')) {
        this.hasFeatureHover = true;
      } else {
        this.hasFeatureHover = false;
      }

      if (this.$listeners.featureclick || this.$listeners.featureselect || this.myPaintClick || this.myLayoutClick || has_default()(this.$scopedSlots, 'popupClick') || has_default()(this.$slots, 'popupClick')) {
        this.hasFeatureClick = true;
      } else {
        this.hasFeatureClick = false;
      }

      const map = this.getMap();

      if (this.hasFeatureHover) {
        map.off('mousemove', this.layerId, this.featureMouseMoveEvent);
        map.off('mouseleave', this.layerId, this.featureMouseLeaveEvent);
        map.on('mousemove', this.layerId, this.featureMouseMoveEvent);
        map.on('mouseleave', this.layerId, this.featureMouseLeaveEvent);
      }

      if (this.hasFeatureClick) {
        map.off('click', this.layerId, this.featureMouseClickEvent);
        map.on('click', this.layerId, this.featureMouseClickEvent); // when click out of layer, deslecet all

        map.off('click', this.layerMouseClickOutEvent);
        map.on('click', this.layerMouseClickOutEvent);
      }

      if (this.$listeners.loading) {
        map.off('render', this.layerId, this.layerLoading);
        map.on('render', this.layerId, this.layerLoading);
      } // CUSTON EVENTS
      // featureHover
      // featureClick
      // featureLeave

    },
    layerLoading: function (e) {
      if (this.loading === undefined) {
        this.loading = true; // console.log('🚀 ~ file: VmLayer.vue ~ line 727 ~ map.on ~ this.loading', this.loading)

        this.$emit('loading', true);
        console.log('emit init', true);
      }

      if (e === null || e === void 0 ? void 0 : e.target) {
        const loading = !e.target.loaded(); // console.log('🚀 ~ file: VmLayer.vue ~ line 732 ~ map.on ~ loading', loading)

        if (this.loading !== loading) {
          this.$emit('loading', loading);
          console.log('emit loading change', loading);
          this.loading = loading;
        }
      }
    },
    featureMouseMoveEvent: function (e) {
      // if click popup is open, i stop hover events
      if (this.popupOpen) return false; // check if im the top most layer
      // TODO - create event in mapbox instance to detect .capture.stop propagations etc, and implement this logic in the events

      const features = this.getMap().queryRenderedFeatures(e.point); // // console.log("🚀 ~ file: VmLayer.vue ~ line 732 ~ features", features)

      if (this.ignoreOthersLayer === false && get_default()(features, '[0].layer.id') !== this.layerId) {
        this.featureMouseLeaveEvent(e);
        return false;
      }

      this.lastHover = e;

      if (e.features.length > 0) {
        var _this$hoverFeatures;

        // if hovering the same feature, just return
        if ((this === null || this === void 0 ? void 0 : (_this$hoverFeatures = this.hoverFeatures) === null || _this$hoverFeatures === void 0 ? void 0 : _this$hoverFeatures.length) > 0 && this.hoverFeatures.map(f => f.id).join('') === e.features.map(f => f.id).join('')) {
          return false;
        }

        if (this.hasFeatureClick) {
          // if have click events, change cursor
          this.getMap().getCanvas().style.cursor = 'pointer';
        }

        if (this.hasFeatureHover) {
          this.hoverFeatures = e.features;
        }
      }
    },
    featureMouseLeaveEvent: function (e) {
      if (this.hasFeatureClick) {
        // if have click events, change cursor
        this.getMap().getCanvas().style.removeProperty('cursor');
      }

      if (this.popupOpen) return false;
      this.hoverFeatures = [];
    },
    featureMouseClickEvent: function (e) {
      const features = this.getMap().queryRenderedFeatures(e.point); // if clicked in another top most layer, is like clicking outside this

      if (get_default()(features, '[0].layer.id') !== this.layerId) {
        this.selectedFeatures = [];
        return;
      }

      this.lastClick = e;
      var featuresSelected = [...this.selectedFeatures];
      let featuresToAdd = []; // [...this.selectedFeatures]

      if (e.features.length > 0) {
        e.features.forEach(feature => {
          const selectedFeatureIndex = findIndex_default()(this.selectedFeatures, {
            id: feature.id
          });

          if (selectedFeatureIndex > -1) {
            // if clicking in a alread selected feature
            featuresSelected.splice(selectedFeatureIndex, 1);
          } else {
            featuresToAdd.push(feature);
          }
        });
      } // check if multiple selection


      let multiple = false;

      if (this.multipleFeatureSelectionOn === true) {
        multiple = true;
      } else if (typeof this.multipleFeatureSelectionOn === 'string') {
        if (e.originalEvent[this.multipleFeatureSelectionOn + 'Key'] === true) {
          multiple = true;
        } // for mac


        if (this.multipleFeatureSelectionOn === 'alt' && e.originalEvent.metaKey === true) {
          multiple = true;
        }
      }

      if (multiple) {
        featuresToAdd = featuresToAdd.concat(featuresSelected);
      }

      this.selectedFeatures = featuresToAdd;
    },
    layerMouseClickOutEvent: function (e) {
      const map = this.getMap();
      if (this.layerId === null) return;
      const features = map.queryRenderedFeatures(e.point, {
        layers: [this.layerId]
      });

      if (features.length === 0) {
        this.selectedFeatures = [];
      }
    },
    //* * PAINT AND LAYOUT SETUPS */
    getFinalFeatureStateForPaintOrLayout: function (normal, hover, click) {
      const result = { ...normal
      };

      if (this.hasFeatureHover || this.hasFeatureClick || this.hasChildPopup) {
        Object.entries(result).forEach(item => {
          var _value$, _value$2;

          const key = item[0];
          const value = item[1];
          let pp = value; // Check if we use zoom level, because it can be used only as tope level
          // treat interpolate and step diferent because the usually use zoom as input, and zoom input only work in toplevel

          if ((value === null || value === void 0 ? void 0 : value[0]) === 'interpolate' && (value === null || value === void 0 ? void 0 : (_value$ = value[2]) === null || _value$ === void 0 ? void 0 : _value$[0]) === 'zoom' || (value === null || value === void 0 ? void 0 : value[0]) === 'step' && (value === null || value === void 0 ? void 0 : (_value$2 = value[1]) === null || _value$2 === void 0 ? void 0 : _value$2[0]) === 'zoom') {
            var _this$opacity;

            const exprType = value === null || value === void 0 ? void 0 : value[0];
            const exprStart = exprType === 'interpolate' ? value.splice(0, 4) : value.splice(0, 2);
            const opacity = (_this$opacity = this.opacity) !== null && _this$opacity !== void 0 ? _this$opacity : 1;

            for (let i = 0; i < value.length; i += 2) {
              value[i] *= opacity;

              if (hover && hover[key]) {
                // console.log('🚀 ~ file: VmLayer.vue ~ line 853 ~ map.on ~ this.$emit', this.$emit)
                value[i] = ['case', ['boolean', ['feature-state', 'hover'], false], hover[key] * opacity, value[i]];
              }

              if (click && click[key]) {
                value[i] = ['case', ['boolean', ['feature-state', 'click'], false], click[key] * opacity, value[i]];
              }
            }

            pp = exprStart.concat(value);
          } else {
            if (hover && hover[key]) {
              pp = ['case', ['boolean', ['feature-state', 'hover'], false], hover[key], value];
            }

            if (click && click[key]) {
              pp = ['case', ['boolean', ['feature-state', 'click'], false], click[key], pp];
            }
          }

          result[key] = pp;
        });
      }

      return result;
    },

    /**
    Return all layout or paint set for this layer type, in a determinate state
    /* @params kind | layout or paint
    /* @params state | '', click or hover
    */
    getPaintLayoutForState: function (kind = 'paint', state = '') {
      const allPaintLayout = this.getAllPaintLayoutForKind(kind);
      const removeStateRegex = new RegExp('-' + state + '$', 'g'); // GET WHAT IS DEFINED VIA NORMAL PROP (paint, layout, paintHove...)

      const paintLayoutObject = get_default()(this.$props, kind + startCase_default()(state), {});
      let paintLayoutFinal = {};
      Object.keys(paintLayoutObject).forEach(k => {
        const kConvert = this.innerPaintPropConvert(k);
        paintLayoutFinal[kConvert] = this.innerExpressionConverter(paintLayoutObject[k]);
      }); // GET WHAT IS DEFINE LOOSELY IN PROPS (fill-color, fill-color-click .....)

      Object.entries(this.$options.propsData).forEach(item => {
        const key = this.innerPaintPropConvert(kebabCase_default()(item[0]));
        const value = item[1];
        var keyNormalName = key.replace(removeStateRegex, '');

        if (state !== '' && key.indexOf('-' + state) > -1 && allPaintLayout.includes(keyNormalName)) {
          paintLayoutFinal[keyNormalName] = this.innerExpressionConverter(value);
        } else if (state === '' && allPaintLayout.includes(keyNormalName)) {
          paintLayoutFinal[keyNormalName] = this.innerExpressionConverter(value);
        }
      }); // GET WHAT IS DEFINE VIA CLASSES ([fill-color: red, property:vl_name, value:'df',...])
      // for each paint/layout props,
      // check if we find it in the classe and mount a expression for it

      allPaintLayout.forEach(plKey => {
        const plKeyState = state !== '' ? plKey + '-' + state : plKey;
        const classesElementsWithPL = filter_default()(this.classes, elm => has_default()(elm, plKeyState));

        if (classesElementsWithPL.length > 0) {
          var _classesElementsWithP;

          let expression = [];
          const featureProperty = (_classesElementsWithP = classesElementsWithPL[0]) === null || _classesElementsWithP === void 0 ? void 0 : _classesElementsWithP.property; // TODO maybe put state here too
          // MATCH VALUES

          if (this.classesValueInterpolation === 'match') {
            const featureId = featureProperty === '_id';
            expression = featureId ? ['match', ['id']] : ['match', ['get', featureProperty]];
            classesElementsWithPL.forEach((classeElm, i) => {
              expression.push(this.innerExpressionConverter(classeElm.value));
              expression.push(get_default()(classeElm, plKeyState));
            });
            expression.push(paintLayoutFinal[plKey] || expression[expression.length - 1]); // STEP VALUES
          } else if (this.classesValueInterpolation === 'step') {
            expression = ['step', ['to-number', ['get', featureProperty]]];
            classesElementsWithPL.forEach((classeElm, i) => {
              // TODO - i think need to test default value when is steped
              expression.push(get_default()(classeElm, plKeyState));
              if (classeElm.value) expression.push(this.innerExpressionConverter(classeElm.value));
            }); // INTERPOLATE VALUES
          } else if (this.classesValueInterpolation === 'interpolate') {
            if (featureProperty.match(/color/g)) {
              // check if is color
              expression = ['interpolate-hcl', ['linear'], ['to-number', ['get', featureProperty]]];
            } else {
              expression = ['interpolate', ['linear'], ['to-number', ['get', featureProperty]]];
            }

            classesElementsWithPL.forEach((classeElm, i) => {
              expression.push(this.innerExpressionConverter(classeElm.value));
              expression.push(get_default()(classeElm, plKeyState));
            });
          }

          paintLayoutFinal[this.innerPaintPropConvert(plKey)] = expression;
        }
      }); // Zoom expression not work in hover or click states
      // it is a limitation of mapbox zoom only work as top level exp,
      // and if we set ir in phover or click, it will be uset in secundary moments

      if (state !== '') {
        Object.entries(paintLayoutFinal).forEach(item => {
          const key = item[0];
          const value = item[1];

          if (this.checkForZoomExp(value)) {
            // console.error('ZOOM expression can not be user in hover or click state due mapbox limitations. Default will be the last value')
            paintLayoutFinal[key] = value[value.length - 1]; // (value?.[0] === 'interpolate') ? value[value.length-1] : value?.[2] // default value if interpolate, or step
          }
        });
      } // OPACITY CHECK STEP


      if (kind === 'paint') {
        paintLayoutFinal = this.processPaintOpacity(paintLayoutFinal);
      }

      return { ...paintLayoutFinal
      };
    },

    /** Treat opacity scale
    * opacity is a especial case, wher we scale all opacity set witth this value
    * opacity not set will be set to so we can fase a layout
    */
    processPaintOpacity: function (paint) {
      const opacity = this.opacity;

      if (opacity === undefined || opacity === null) {
        return paint;
      } // get all the opacity props for the paint/layout
      // properties for this type of layer


      const allPaintProperties = this.getAllPaintLayoutForKind('paint');
      const opacityProps = allPaintProperties.filter(key => key.indexOf('opacity') !== -1);
      opacityProps.forEach(key => {
        var _value$constructor;

        if (!paint[key]) {
          paint[key] = opacity;
          return;
        }

        const value = paint[key];

        if ((value === null || value === void 0 ? void 0 : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name) === 'Number') {
          paint[key] = value * opacity;
        } else if (Array.isArray(value)) {
          // an expression
          //
          if (this.checkForZoomExp(value)) {
            const exprStart = value[0] === 'interpolate' ? value.splice(0, 4) : value.splice(0, 2);

            for (let i = 0; i < value.length; i += 2) {
              value[i] *= opacity;
            }

            paint[key] = exprStart.concat(value);
          } else {
            paint[key] = ['*', [...value], opacity];
          }
        }
      });
      return paint;
    },

    /**
    * Return all layout or paint that exist for this layer type
    /* @params kind | layout or paint
    */
    getAllPaintLayoutForKind: function (kind) {
      const propertiesForKind = ['color']; // user shorhand for color for all layer types

      Object.entries(this.$options.props).forEach(prop => {
        const key = kebabCase_default()(prop[0]);
        const value = prop[1];

        if (get_default()(value, kind) && get_default()(value, 'layerType') === this.type) {
          if (key.indexOf('-hover') === -1 && key.indexOf('-click') === -1) {
            propertiesForKind.push(key); // propertiesForKind.push(key + '-transition') //disable transition for now
          }
        }
      });
      return propertiesForKind;
    },

    /**
    * convert raw properties values with custom express,
    like using ['z',4,6,2,5] -> ['interpolate', ['linear'], ['zoom'], 4,6,2,5]
    */
    innerExpressionConverter: function (value) {
      if (Array.isArray(value)) {
        if ((value === null || value === void 0 ? void 0 : value[0]) === 'z') {
          let valueFinal = [...value];
          valueFinal.shift();
          valueFinal = ['interpolate', ['linear'], ['zoom'], ...valueFinal];
          return valueFinal;
        }
      }
      /**
       Implementes joinData expression converter so we can use allow to transform some the expressions from ['get','properties'] to ['feature-state','featurestate']
      // TODO IMPLEMENT - use the  ['coalesce', [get,property], ['feature-state','color'], '#ff4400'  ]
      // but maybe it is too much of outside word mapbox, maybe not implement it
      */


      return value;
    },

    /**
    * convert generic key layouts props to the layer type,
    like using color:#fffff -> fill-color: #fffff  if type fill
    */
    innerPaintPropConvert: function (prop) {
      if (['color', 'color-hover', 'color-click'].includes(prop)) {
        return this.type + '-' + prop;
      }

      return prop;
    },
    checkForZoomExp: function (exp) {
      var _exp$, _exp$2;

      if ((exp === null || exp === void 0 ? void 0 : (_exp$ = exp[2]) === null || _exp$ === void 0 ? void 0 : _exp$[0]) === 'zoom' || (exp === null || exp === void 0 ? void 0 : (_exp$2 = exp[1]) === null || _exp$2 === void 0 ? void 0 : _exp$2[0]) === 'zoom') {
        return true;
      }

      return false;
    },
    docEvents: function () {
      this.$emit('mousedown');
      this.$emit('mouseup');
      this.$emit('mouseover');
      this.$emit('mouseout');
      this.$emit('mousemove');
      this.$emit('mouseenter');
      this.$emit('mouseleave');
      this.$emit('click');
      this.$emit('dblclick');
      this.$emit('contextmenu');
      this.$emit('touchstart');
      this.$emit('touchend');
      this.$emit('touchcancel');
    }
  },

  render(h) {
    const emptyElm = null; // h('div')

    if (this.hoverFeatures.length === 0 && this.selectedFeatures.length === 0 || !has_default()(this.$scopedSlots, 'popupHover') && !has_default()(this.$scopedSlots, 'popupClick') && !has_default()(this.$slots, 'popupHover') && !has_default()(this.$slots, 'popupClick')) {
      return emptyElm;
    } // create the popupElement


    let popupOver;
    let popupClick;
    let popup;
    let props = {};
    let popupKey; // check for popupHover Slot

    if (has_default()(this.$scopedSlots, 'popupHover')) {
      popupOver = this.$scopedSlots.popupHover({
        features: this.hoverFeatures
      }); // [0]
    } else if (has_default()(this.$slots, 'popupHover')) {
      popupOver = this.$slots.popupHover;
    } // check for popupClick Slot


    if (has_default()(this.$scopedSlots, 'popupClick')) {
      popupClick = this.$scopedSlots.popupClick({
        features: this.selectedFeatures
      }); // [0]
    } else if (has_default()(this.$slots, 'popupClick')) {
      popupClick = this.$slots.popupClick;
    }

    if (!popupOver && !popupClick) {
      return emptyElm;
    }

    if (this.lastClick && this.selectedFeatures.length > 0 && popupClick) {
      popup = popupClick;
      popupKey = 'layerPopupClick';
      props = {
        center: [this.lastClick.lngLat.lng, this.lastClick.lngLat.lat],
        trackPointer: false,
        closeOnClick: true,
        closeButton: true,
        open: true
      };
    } else if (this.hoverFeatures.length > 0 && popupOver) {
      popup = popupOver;
      popupKey = 'layerPopupOver';
      props = {
        center: [this.lastHover.lngLat.lng, this.lastHover.lngLat.lat],
        trackPointer: true,
        closeButton: false,
        closeOnClick: false,
        open: true
      };
    } else {
      return emptyElm;
    }

    let popupInstance; // check if popup is the content type of popup, if not create one

    const popupFind = findVNodeChildren(popup, 'VmPopup');

    if (popupFind) {
      popupInstance = popupFind[0];
    } else {
      popupInstance = h(VmPopup, [popup]);
    } // setup popupinstance data


    popupInstance.componentOptions.propsData = { ...popupInstance.componentOptions.propsData,
      ...props
    };

    if (popupKey === 'layerPopupClick') {
      this.popupOpen = true; // when click in close of popup, deselect any selected layers

      const closeFunc = get_default()(popupInstance, 'componentOptions.listeners.close');
      set_default()(popupInstance.componentOptions, 'listeners.close', e => {
        this.popupOpen = false;
        this.selectedFeatures = [];
        this.hoverFeatures = [];

        if (closeFunc) {
          closeFunc(e);
        }
      });
    }

    popupInstance.key = popupKey + this.layerId;
    return h('div', [popupInstance]);
  }

});
// CONCATENATED MODULE: ./src/components/VmLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VmLayervue_type_script_lang_js_ = (VmLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VmLayer.vue
var VmLayer_render, VmLayer_staticRenderFns




/* normalize component */

var VmLayer_component = normalizeComponent(
  components_VmLayervue_type_script_lang_js_,
  VmLayer_render,
  VmLayer_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VmLayer = (VmLayer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10463270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VmLayerArc.vue?vue&type=template&id=5503dc68&
var VmLayerArcvue_type_template_id_5503dc68_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.layerCreated)?_c('vm-layer',{attrs:{"name":'arc'+this.name,"customLayer":_vm.layer,"zIndex":_vm.zIndex,"type":"custom"}}):_vm._e()],1)}
var VmLayerArcvue_type_template_id_5503dc68_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VmLayerArc.vue?vue&type=template&id=5503dc68&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VmLayerArc.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { ArcLayer } from '@deck.gl/layers'
// import { MapboxLayer } from '@deck.gl/mapbox'
// import { Deck } from '@deck.gl/core'



const SOURCES = ['https://unpkg.com/@deck.gl/core@8.4.16/dist.min.js', 'https://unpkg.com/@deck.gl/layers@8.4.16/dist.min.js', 'https://unpkg.com/@deck.gl/mapbox@8.4.16/dist.min.js'];
/* harmony default export */ var VmLayerArcvue_type_script_lang_js_ = ({
  name: 'VmLayerArc',
  inject: {
    getMap: 'getMap',
    mapboxgl: 'mapboxgl',
    MapboxVueInstance: 'MapboxVueInstance'
  },
  props: {
    /** Unique Name of the layers */
    name: {
      type: String,
      required: true
    },

    /**
       (Dynamic) If Number, is order of the layer. Can set the Name of the layer to put after
    */
    zIndex: {
      type: [Number, String]
    },

    /** Data Item
     * @values Array of object item that have key for from point and to point, as weel as colors, with
    */
    data: {
      type: Array,
      required: true
    },

    /** With Arcs
     * @values number or function thad will get item from data
    */
    witdh: {
      type: [Number, Function],
      default: 10
    },

    /** color
     * @values color to use. If sourceColor os destinationColor defined, this will be ignore
    */
    color: {
      type: String,
      default: 'blue'
    },

    /** sourceColor
     * @values number or function thad will get item from data
    */
    sourceColor: {
      type: [String, Function]
    },

    /** sourceColor
     * @values number or function thad will get item from data
    */
    targetColor: {
      type: [String, Function]
    },

    /** getSourcePosition
     * @values function or path thad will get item from data
    */
    sourcePosition: {
      type: [String, Function],
      default: 'from'
    },

    /** getSourcePosition
     * @values function or path thad will get item from data
    */
    targetPosition: {
      type: [String, Function],
      default: 'to'
    }
  },

  data() {
    return {
      layerCreated: false,
      id: false
    };
  },

  destroyed() {
    // if (this.getMap()) {
    //   if (this.getMap().getLayer(this.name)) {
    //     //console.log('destroying Arc Layer')
    //     this.MapboxVueInstance.removeLayer(this.name)
    //   }
    // }
    this.layer = null;
  },

  async created() {
    this.layer = null;

    if (!window.deck) {
      try {
        await loadScripts(SOURCES);
      } catch (e) {
        console.error(e);
        throw new Error('Erro loading for arc layer ');
      }
    }

    if (!window.deck) {
      throw new Error('Erro loading for arc layer ');
    }

    this.deck = window.deck;
    this.$nextTick(() => {
      this.addLayer();
    });
  },

  mounted: function () {},
  watch: {
    '$props.data': function (val, oldval) {
      if (this.layer) this.layer.setProps({
        data: this.data
      }); // if (this.decklayer) this.decklayer.setProps({ layers: this.createLayer() })
    },
    '$props.width': function (val, oldval) {
      if (this.layer) this.layer.setProps({
        getWidth: d => this.getWidth(d)
      }); // if (this.decklayer) this.decklayer.setProps({ layers: this.createLayer() })
    }
  },
  methods: {
    addLayer: function () {
      this.id = this.MapboxVueInstance.getNewIdForLayer(this.name); // this.decklayer = new Deck({
      //   gl: this.MapboxVueInstance.getMap().painter.context.gl,
      //   layers: this.createLayer()
      // })

      const {
        MapboxLayer
      } = window.deck;
      this.layer = new MapboxLayer({
        id: this.id,
        type: window.deck.ArcLayer,
        data: this.data,
        autoHighlight: true,
        pickable: true,
        // TODO
        getWidth: d => this.getWidth(d),
        getSourcePosition: d => this.getSourcePositionFunc(d),
        getTargetPosition: d => this.getTargetPositionFunc(d),
        getSourceColor: d => this.getSourceColorFunc(d),
        getTargetColor: d => this.getTargetColorFunc(d)
      });
      this.layerCreated = true; //debugger
      // this.MapboxVueInstance.addLayer(this.layer)
      // this.getMap().addLayer(this.layer)
    },
    getWidth: function (item) {
      if (typeof this.witdh === 'function') {
        return this.witdh(item);
      } else if (isNaN(this.witdh)) {
        // if not number, get a path
        return get_default()(item, this.witdh, 5);
      }

      return this.witdh;
    },
    getSourcePositionFunc: function (item) {
      let pos;

      if (typeof this.sourcePosition === 'function') {
        pos = this.sourcePosition(item);
      } else {
        pos = get_default()(item, this.sourcePosition, [-45, -15]);
      } // //console.log(pos)


      return pos;
    },
    getTargetPositionFunc: function (item) {
      let pos;

      if (typeof this.targetPosition === 'function') {
        pos = this.targetPosition(item);
      } else {
        pos = get_default()(item, this.targetPosition, [-45, -15]);
      } // //console.log(pos)


      return pos;
    },
    getSourceColorFunc: function (item) {
      let color;

      if (!this.sourceColor) {
        color = this.color;
      } else {
        if (typeof this.sourceColor === 'function') {
          color = this.sourceColor(item);
        } else if (has_default()(item, this.sourceColor)) {
          color = get_default()(item, this.sourceColor);
        } else {
          color = this.sourceColor;
        }
      }

      return this.convertToArray(color);
    },
    getTargetColorFunc: function (item) {
      let color;

      if (!this.targetColor) {
        color = this.color;
      } else {
        if (typeof this.targetColor === 'function') {
          color = this.targetColor(item);
        } else if (has_default()(item, this.targetColor)) {
          color = get_default()(item, this.targetColor);
        } else {
          color = this.targetColor;
        }
      }

      return this.convertToArray(color);
    },
    convertToArray: function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
    }
  },
  createLayer: function () {
    return [// new ArcLayer({
    new deck.ArcLayer({
      id: this.id,
      data: this.data,
      autoHighlight: true,
      pickable: true,
      // TODO
      getWidth: d => this.getWidth(d),
      getSourcePosition: d => this.getSourcePositionFunc(d),
      getTargetPosition: d => this.getTargetPositionFunc(d),
      getSourceColor: d => this.getSourceColorFunc(d),
      getTargetColor: d => this.getTargetColorFunc(d)
    })];
  }
});
// CONCATENATED MODULE: ./src/components/VmLayerArc.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VmLayerArcvue_type_script_lang_js_ = (VmLayerArcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VmLayerArc.vue





/* normalize component */

var VmLayerArc_component = normalizeComponent(
  components_VmLayerArcvue_type_script_lang_js_,
  VmLayerArcvue_type_template_id_5503dc68_render,
  VmLayerArcvue_type_template_id_5503dc68_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VmLayerArc = (VmLayerArc_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VmImage.vue?vue&type=script&lang=js&
/* harmony default export */ var VmImagevue_type_script_lang_js_ = ({
  name: 'VmImage',
  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],
  props: {
    /**
     * URL of the image
     * cam be url or a svg string
     */
    url: {
      type: String,
      required: false
    },

    /**
     * Name of image
     */
    name: {
      type: String,
      required: true
    },

    /**
     * When the url or content change, will change the image
     */
    updateOnChange: {
      type: Boolean,
      required: false,
      default: true
    },
    witdh: {
      type: [Number, String],
      required: false
    },
    height: {
      type: [Number, String],
      required: false
    }
  },
  created: function () {
    var _this$$slots, _this$$slots$default;

    if (!((_this$$slots = this.$slots) === null || _this$$slots === void 0 ? void 0 : (_this$$slots$default = _this$$slots.default) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default[0]) && !this.url) {
      throw new Error('VmImage - need to define a URL, or a img or svg content');
    }
  },
  mounted: function () {
    this.observer = new MutationObserver(() => {
      console.log('🚀 ~ file: vm-image.vue ~ filho mudou)');
      this.addImage();
    }); // Options for the observer (which mutations to observe)

    var config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    };
    this.$nextTick(() => {
      // Start observing the target node for configured mutations
      this.observer.observe(this.$el, config);
      this.addImage();
    });
  },
  updated: function (v, ov) {
    this.addImage();
  },
  render: function (h) {
    var _this$$slots2, _this$$slots2$default;

    //debugger;
    if ((_this$$slots2 = this.$slots) === null || _this$$slots2 === void 0 ? void 0 : (_this$$slots2$default = _this$$slots2.default) === null || _this$$slots2$default === void 0 ? void 0 : _this$$slots2$default[0]) {
      var _this$$slots3;

      return h('div', {
        style: 'display:none'
      }, [(_this$$slots3 = this.$slots) === null || _this$$slots3 === void 0 ? void 0 : _this$$slots3.default[0]]);
    }

    return null;
  },

  beforeDestroy() {
    var _this$observer;

    this === null || this === void 0 ? void 0 : (_this$observer = this.observer) === null || _this$observer === void 0 ? void 0 : _this$observer.disconnect();
  },

  destroyed: function () {
    this.MapboxVueInstance.removeImage(this.name);
  },
  methods: {
    addImage: function () {
      this.$nextTick(() => {
        var _tagElm, _tagElm$constructor, _tagElm2, _tagElm2$constructor, _tagElm3, _tagElm3$constructor;

        if (!(this === null || this === void 0 ? void 0 : this.MapboxVueInstance)) return;
        let tagElm = this === null || this === void 0 ? void 0 : this.$el; // if not root, find children

        if (((_tagElm = tagElm) === null || _tagElm === void 0 ? void 0 : (_tagElm$constructor = _tagElm.constructor) === null || _tagElm$constructor === void 0 ? void 0 : _tagElm$constructor.name) === 'HTMLDivElement') {
          tagElm = this.$el.querySelector('svg') || this.$el.querySelector('img');
        }

        if (((_tagElm2 = tagElm) === null || _tagElm2 === void 0 ? void 0 : (_tagElm2$constructor = _tagElm2.constructor) === null || _tagElm2$constructor === void 0 ? void 0 : _tagElm2$constructor.name) === 'SVGSVGElement' || ((_tagElm3 = tagElm) === null || _tagElm3 === void 0 ? void 0 : (_tagElm3$constructor = _tagElm3.constructor) === null || _tagElm3$constructor === void 0 ? void 0 : _tagElm3$constructor.name) === 'HTMLImageElement') {
          this.MapboxVueInstance.addImage(this.name, tagElm, this.updateOnChange);
        } else {
          this.MapboxVueInstance.addImage(this.name, this.url, this.updateOnChange);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/VmImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VmImagevue_type_script_lang_js_ = (VmImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VmImage.vue
var VmImage_render, VmImage_staticRenderFns




/* normalize component */

var VmImage_component = normalizeComponent(
  components_VmImagevue_type_script_lang_js_,
  VmImage_render,
  VmImage_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VmImage = (VmImage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Layers/VmLayerVector.vue?vue&type=script&lang=js&
//
// import getOnlyMapboxProps from '../../utils/getOnlyMapboxProps'
// import findVNodeChildren from '../../utils/findVNodeChildren'
// import findIndex from 'lodash/findIndex'
// import VmLayer from '../VmLayer'
// import has from 'lodash/has'
// import get from 'lodash/get'
// import set from 'lodash/set'
/* harmony default export */ var VmLayerVectorvue_type_script_lang_js_ = ({
  name: 'VmLayerVector',
  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance', 'getSource'],
  props: {},
  created: function () {// get props not set, we eill use it to pass for VmLayer Base component
    // const props = this.$attrs
  },

  data() {
    return {
      layerId: null,
      sourceId: null,
      selectedFeatures: [],
      hoverFeatures: [],
      hasChildPopup: null,
      lastClick: null
    };
  },

  render(h) {
    return null;
  }

});
// CONCATENATED MODULE: ./src/components/Layers/VmLayerVector.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layers_VmLayerVectorvue_type_script_lang_js_ = (VmLayerVectorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Layers/VmLayerVector.vue
var VmLayerVector_render, VmLayerVector_staticRenderFns




/* normalize component */

var VmLayerVector_component = normalizeComponent(
  Layers_VmLayerVectorvue_type_script_lang_js_,
  VmLayerVector_render,
  VmLayerVector_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VmLayerVector = (VmLayerVector_component.exports);
// CONCATENATED MODULE: ./src/utils/getValueFromZoomArray.js
/**
Function that calculate the current value from a zoom,value array
@params {array} - zoomScale - format like [zoom, value, zoom2, value]
@params {number} - current zoom level
@returns {number}
*/
/* harmony default export */ var getValueFromZoomArray = (function (zoomScale, zoom) {
  let zoomStart;
  let zoomEnd;
  let valueStart;
  let valueEnd;
  let currentScale = 1;

  if (zoomScale.length == 2) {
    currentScale = zoomScale[1];
  } else {
    for (let i = 0; i < zoomScale.length - 2; i += 2) {
      zoomStart = zoomScale[i];
      zoomEnd = zoomScale[i + 2];
      valueStart = zoomScale[i + 1];
      valueEnd = zoomScale[i + 3];

      if (zoom >= zoomStart && zoom <= zoomEnd) {
        currentScale = (zoom - zoomEnd) / (zoomStart - zoomEnd) * (valueStart - valueEnd) + valueEnd;
        break;
      } else if (zoom <= zoomStart) {
        currentScale = valueStart;
        break;
      } else {
        currentScale = valueEnd;
      }
    }
  }

  return currentScale;
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Markers/VmMarkerDonut.vue?vue&type=script&lang=js&
//



/*
    @description Create a Donet chart marker, with total inside, and bars set for each properties
*/

/* harmony default export */ var VmMarkerDonutvue_type_script_lang_js_ = ({
  name: 'VmMarkerDonut',
  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],
  props: {
    /**
    Radius in pixel. leave blank for automatic
    */
    radius: {
      type: [Number, String]
    },

    /**
    The width of the chart in pixel, or %
    */
    chartWidth: {
      type: [Number, String],
      default: '25%'
    },

    /**
    font size of total number in center of donut chart in pixel. leave blank for automatic
    */
    fontSize: {
      type: [Number, String]
    },

    /**
    Array contains the data of the chart.
    */
    dataSet: {
      type: Array,
      default: () => [4, 7, 40]
    },

    /**
    Array contains the colors bars of the chart in data. Must be equal of size of dataSet.
    */
    dataColor: {
      type: Array,
      default: () => ['red', 'green', 'blue']
    },

    /**
    Array contains the zoom of map, an then the scale of element (from 0 to 1).
     Example, [24, 0.2, 14, 0.7, 4, 1] will set at zoom 24 the scale to 0.2, in zoom 14 the scale to 0.7, and so on
    */
    zoomScale: {
      type: Array // default: () => [0, 10, 4, 10, 24, 1]

    },
    anchor: {
      default: 'center'
    },
    opacity: {
      default: 1
    },

    /**
    (Dynamic) min zoom of map tha will show the marker
    */
    minZoom: {
      type: [String, Number]
    },

    /**
      (Dynamic) min zoom of map tha will show the marker
    */
    maxZoom: {
      type: [String, Number]
    }
  },

  data() {
    return {
      currentZoom: null
    };
  },

  computed: {
    myradius: function () {
      return Number(this.radius);
    }
  },
  created: function () {
    if (this.zoomScale && this.getMap()) {
      this.getMap().on('zoom', this.scaleMarker);
    }
  },

  mounted() {
    this.$nextTick(() => this.scaleMarker());
  },

  beforeDestroy() {
    if (this.zoomScale && this.getMap()) {
      this.getMap().off('zoom', this.scaleMarker);
    }
  },

  methods: {
    scaleMarker: function (e) {
      if (!this.zoomScale) return;
      const zoom = this.getMap().getZoom();
      const currentScale = getValueFromZoomArray(this.zoomScale, zoom);
      this.$refs.marker.style.transform = `scale(${currentScale})`;
      this.$refs.marker.style.transformOrigin = 'center';
    },
    createDonutChart: function (dataSet, dataColor, raio, chartWidth, fontSize) {
      var offsets = [];
      var counts = dataSet;
      var total = 0;

      for (var i = 0; i < counts.length; i++) {
        offsets.push(total);
        total += counts[i];
      }

      fontSize = fontSize || (total >= 1000 ? 20 : total >= 100 ? 18 : total >= 10 ? 16 : 14);
      var r = raio || (total >= 1000 ? 50 : total >= 100 ? 32 : total >= 10 ? 24 : 18);
      var r0;

      if (typeof chartWidth === 'string' && chartWidth.indexOf('%') > 0) {
        r0 = Math.round(r * (1 - parseInt(chartWidth) / 100)); // var r0 = Math.round(r * 0.8)
      } else {
        r0 = parseInt(chartWidth);
      }

      var w = r * 2;
      var html = '<div><svg width="' + w + '" height="' + w + '" viewbox="0 0 ' + w + ' ' + w + '" text-anchor="middle" style="font: ' + fontSize + 'px sans-serif">';

      for (i = 0; i < counts.length; i++) {
        html += this.donutSegment(offsets[i] / total, (offsets[i] + counts[i]) / total, r, r0, dataColor[i]);
      }

      html += '<circle cx="' + r + '" cy="' + r + '" r="' + r0 + '" fill="white" /><text dominant-baseline="central" transform="translate(' + r + ', ' + r + ')">' + total.toLocaleString() + '</text></svg></div>';
      return html;
    },
    donutSegment: function (start, end, r, r0, color) {
      if (end - start === 1) end -= 0.00001;
      var a0 = 2 * Math.PI * (start - 0.25);
      var a1 = 2 * Math.PI * (end - 0.25);
      var x0 = Math.cos(a0);
      var y0 = Math.sin(a0);
      var x1 = Math.cos(a1);
      var y1 = Math.sin(a1);
      var largeArc = end - start > 0.5 ? 1 : 0;
      return ['<path d="M', r + r0 * x0, r + r0 * y0, 'L', r + r * x0, r + r * y0, 'A', r, r, 0, largeArc, 1, r + r * x1, r + r * y1, 'L', r + r0 * x1, r + r0 * y1, 'A', r0, r0, 0, largeArc, 0, r + r0 * x0, r + r0 * y0, '" fill="' + color + '" />'].join(' ');
    }
  },

  render(h) {
    const svg = this.createDonutChart(this.dataSet, this.dataColor, this.myradius, this.chartWidth, parseInt(this.fontSize));
    const children = [];
    const markerDonut = h('div', {
      style: {
        position: 'relative',
        textAlign: 'center'
      },
      slot: 'marker',
      ref: 'marker'
    }, [h('div', {
      domProps: {
        innerHTML: svg
      }
    }), this.$slots.marker]);
    children.push(markerDonut);
    Object.entries(this.$slots).forEach(item => {
      const key = item[0];
      const value = item[1];
      if (key === 'marker') return; // set(value,'data.slot',key)

      children.push(h('div', {
        slot: key,
        ref: key
      }, value));
    }); // get all slots all slots and scoped slots

    return h(VmMarker, {
      key: this.key + "marker",
      props: { ...this.$attrs,
        ...this.$props,
        opacity: this.opacity,
        anchor: this.anchor
      },
      on: { ...this.$listeners
      }
    }, [...children, this.$slots.default]);
  }

});
// CONCATENATED MODULE: ./src/components/Markers/VmMarkerDonut.vue?vue&type=script&lang=js&
 /* harmony default export */ var Markers_VmMarkerDonutvue_type_script_lang_js_ = (VmMarkerDonutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Markers/VmMarkerDonut.vue?vue&type=custom&index=0&blockType=docs
var VmMarkerDonutvue_type_custom_index_0_blockType_docs = __webpack_require__("9439");
var VmMarkerDonutvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(VmMarkerDonutvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/components/Markers/VmMarkerDonut.vue
var VmMarkerDonut_render, VmMarkerDonut_staticRenderFns




/* normalize component */

var VmMarkerDonut_component = normalizeComponent(
  Markers_VmMarkerDonutvue_type_script_lang_js_,
  VmMarkerDonut_render,
  VmMarkerDonut_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof VmMarkerDonutvue_type_custom_index_0_blockType_docs_default.a === 'function') VmMarkerDonutvue_type_custom_index_0_blockType_docs_default()(VmMarkerDonut_component)

/* harmony default export */ var VmMarkerDonut = (VmMarkerDonut_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10463270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingComponent.vue?vue&type=template&id=1911e249&
var LoadingComponentvue_type_template_id_1911e249_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('center',[_vm._v(" Carregando... ")])}
var LoadingComponentvue_type_template_id_1911e249_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoadingComponent.vue?vue&type=template&id=1911e249&

// CONCATENATED MODULE: ./src/components/LoadingComponent.vue

var script = {}


/* normalize component */

var LoadingComponent_component = normalizeComponent(
  script,
  LoadingComponentvue_type_template_id_1911e249_render,
  LoadingComponentvue_type_template_id_1911e249_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoadingComponent = (LoadingComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10463270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ErrorComponent.vue?vue&type=template&id=1cd642d2&
var ErrorComponentvue_type_template_id_1cd642d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('center',{staticClass:"alert alert-danger"},[_c('b',[_vm._v("ERROR")])])}
var ErrorComponentvue_type_template_id_1cd642d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ErrorComponent.vue?vue&type=template&id=1cd642d2&

// CONCATENATED MODULE: ./src/components/ErrorComponent.vue

var ErrorComponent_script = {}


/* normalize component */

var ErrorComponent_component = normalizeComponent(
  ErrorComponent_script,
  ErrorComponentvue_type_template_id_1cd642d2_render,
  ErrorComponentvue_type_template_id_1cd642d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ErrorComponent = (ErrorComponent_component.exports);
// CONCATENATED MODULE: ./src/index.js
// export { default as VueMapbox } from './components/VmMapboxSmall.vue'










 // export VueMapbox as VueMapbox
// export default {
//   VueMapbox,
//   // VueMapbox: () => ({
//   //   // O componente a carregar (deve ser uma Promise)
//   //   component: import(/* webpackChunkName: "the-vue-mapbox" */ './components/VueMapbox.vue'),
//   //   // Um componente para usar enquanto o assíncrono é carregado
//   //   loading: LoadingComponent,
//   //   // Um componente para usar se o carregamento falhar
//   //   error: ErrorComponent,
//   //   // Espera antes de exibir o componente de loading. Padrão: 200ms
//   //   delay: 200,
//   //   // O componente de erro será exibido se um timemout for
//   //   // fornecido e excedido. Padrão: Infinity
//   //   timeout: 3000
//   // }),
//   VmMarker,
//   VmPopup,
//   VmLayer,
//   VmLayerArc,
//   // VmLayerArc: () => ({
//   //   // O componente a carregar (deve ser uma Promise)
//   //   component: import(
//   //     /* webpackChunkName: "the-decker" */
//   //     /* webpackPrefetch: false */
//   //     /* webpackPreload: false */
//   //     './components/VmLayerArc.vue'),
//   //   // Um componente para usar enquanto o assíncrono é carregado
//   //   loading: LoadingComponent,
//   //   // Um componente para usar se o carregamento falhar
//   //   error: ErrorComponent,
//   //   // Espera antes de exibir o componente de loading. Padrão: 200ms
//   //   delay: 200,
//   //   // O componente de erro será exibido se um timemout for
//   //   // fornecido e excedido. Padrão: Infinity
//   //   timeout: 3000
//   // }),
//   VmSource,
//   VmLayerVector,
//   VmMarkerDonut,
//   VmImage,
//   install (Vue) {
//     Vue.component('VueMapbox', VueMapbox)
//     Vue.component('VmLayerArc', VmLayerArc)
//     Vue.component('VmMarker', VmMarker)
//     Vue.component('VmPopup', VmPopup)
//     Vue.component('VmLayer', VmLayer)
//     Vue.component('VmSource', VmSource)
//     Vue.component('VmImage', VmImage)
//     Vue.component('VmVectorLayersSource', VmLayerVector)
//     Vue.component('VmMarkerDonut', VmMarkerDonut)
//   }
// }

/***/ }),

/***/ "badf":
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__("642a"),
    baseMatchesProperty = __webpack_require__("1838"),
    identity = __webpack_require__("cd9d"),
    isArray = __webpack_require__("6747"),
    property = __webpack_require__("f9ce");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "bbc0":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "bc3a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cee4");

/***/ }),

/***/ "c05f":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__("7b97"),
    isObjectLike = __webpack_require__("1310");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "c098":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "c32f":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("2b10");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "c401":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "c532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1d2b");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "c584":
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "c869":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "c8af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "cae7":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("ffd6");

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ "cb5a":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("9638");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "cd9d":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "ce86":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    arrayMap = __webpack_require__("7948"),
    isArray = __webpack_require__("6747"),
    isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "cee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var bind = __webpack_require__("1d2b");
var Axios = __webpack_require__("0a06");
var mergeConfig = __webpack_require__("4a7b");
var defaults = __webpack_require__("2444");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("7a77");
axios.CancelToken = __webpack_require__("8df4");
axios.isCancel = __webpack_require__("2e67");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("0df6");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "d02c":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc"),
    MapCache = __webpack_require__("7b83");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "d094":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "d194":
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__("c32f"),
    hasUnicode = __webpack_require__("aaec"),
    stringToArray = __webpack_require__("126d"),
    toString = __webpack_require__("76dd");

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ "d327":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "d370":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("253c"),
    isObjectLike = __webpack_require__("1310");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "d4b2":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ "d612":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("7b83"),
    setCacheAdd = __webpack_require__("7ed2"),
    setCacheHas = __webpack_require__("dc0f");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "d925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "da03":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "dc0f":
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "dc57":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "ddc6":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

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

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e24b":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("49f4"),
    hashDelete = __webpack_require__("1efc"),
    hashGet = __webpack_require__("bbc0"),
    hashHas = __webpack_require__("7a48"),
    hashSet = __webpack_require__("2524");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "e2c0":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("e2e4"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isIndex = __webpack_require__("c098"),
    isLength = __webpack_require__("b218"),
    toKey = __webpack_require__("f4d6");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "e2e4":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("6747"),
    isKey = __webpack_require__("f608"),
    stringToPath = __webpack_require__("18d8"),
    toString = __webpack_require__("76dd");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "e380":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("7b83");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "e3f8":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("656b");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "e683":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "e740":
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__("b20a"),
    upperFirst = __webpack_require__("8103");

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

module.exports = startCase;


/***/ }),

/***/ "ea72":
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__("7559"),
    hasUnicodeWord = __webpack_require__("7e8e"),
    toString = __webpack_require__("76dd"),
    unicodeWords = __webpack_require__("f4d9");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ "eac5":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "ec69":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("6fcd"),
    baseKeys = __webpack_require__("03dd"),
    isArrayLike = __webpack_require__("30c9");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "edfa":
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "ef5d":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "efb6":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "f4d6":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "f4d9":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "f608":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("6747"),
    isSymbol = __webpack_require__("ffd6");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "f6b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "f9ce":
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__("ef5d"),
    basePropertyDeep = __webpack_require__("e3f8"),
    isKey = __webpack_require__("f608"),
    toKey = __webpack_require__("f4d6");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueMapbox", function() { return /* reexport */ entry["k" /* VueMapbox */]; });
__webpack_require__.d(__webpack_exports__, "VmSource", function() { return /* reexport */ entry["j" /* VmSource */]; });
__webpack_require__.d(__webpack_exports__, "VmMarker", function() { return /* reexport */ entry["g" /* VmMarker */]; });
__webpack_require__.d(__webpack_exports__, "VmPopup", function() { return /* reexport */ entry["i" /* VmPopup */]; });
__webpack_require__.d(__webpack_exports__, "VmLayer", function() { return /* reexport */ entry["d" /* VmLayer */]; });
__webpack_require__.d(__webpack_exports__, "VmLayerArc", function() { return /* reexport */ entry["e" /* VmLayerArc */]; });
__webpack_require__.d(__webpack_exports__, "VmImage", function() { return /* reexport */ entry["c" /* VmImage */]; });
__webpack_require__.d(__webpack_exports__, "VmLayerVector", function() { return /* reexport */ entry["f" /* VmLayerVector */]; });
__webpack_require__.d(__webpack_exports__, "VmMarkerDonut", function() { return /* reexport */ entry["h" /* VmMarkerDonut */]; });
__webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return /* reexport */ entry["b" /* LoadingComponent */]; });
__webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return /* reexport */ entry["a" /* ErrorComponent */]; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/entry.js
var entry = __webpack_require__("7cd6");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (entry["l" /* default */]);



/***/ }),

/***/ "fba5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "ffd6":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ })

/******/ });