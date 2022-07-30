/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    height: 100vh;\n    /* width: 100vw; */\n}\n\nh1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 10vh;\n}\n\n.tabs{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0px 30%;\n    gap: 10px;\n    height: 10vh;\n}\n\n.tabs > h4{\n    display: flex;\n    border: 1px solid black;\n    font-size: medium;\n    font-family: 'Courier New', Courier, monospace;\n    cursor: pointer;\n    padding: 10px;\n    border-radius: 1px;\n}\n\n.tabs > h4:hover{\n    transform: translateY(-10px);\n    box-shadow: 0px 3px 7px 1px black;\n    transition: 0.3s ease-out;\n}\n\n.dish{\n    display: flex;\n    flex-direction: column;\n    margin: 10px 25%;\n    line-height: 30px;\n    font-size: 1.2em;\n    word-wrap: break-word;\n    border: 1px solid black;\n    padding: 9px;\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,8CAA8C;IAC9C,eAAe;IACf,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;IAC5B,iCAAiC;IACjC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;IACrB,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    height: 100vh;\n    /* width: 100vw; */\n}\n\nh1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 10vh;\n}\n\n.tabs{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0px 30%;\n    gap: 10px;\n    height: 10vh;\n}\n\n.tabs > h4{\n    display: flex;\n    border: 1px solid black;\n    font-size: medium;\n    font-family: 'Courier New', Courier, monospace;\n    cursor: pointer;\n    padding: 10px;\n    border-radius: 1px;\n}\n\n.tabs > h4:hover{\n    transform: translateY(-10px);\n    box-shadow: 0px 3px 7px 1px black;\n    transition: 0.3s ease-out;\n}\n\n.dish{\n    display: flex;\n    flex-direction: column;\n    margin: 10px 25%;\n    line-height: 30px;\n    font-size: 1.2em;\n    word-wrap: break-word;\n    border: 1px solid black;\n    padding: 9px;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dishTexts.js":
/*!**************************!*\
  !*** ./src/dishTexts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aloomatarTabChange": () => (/* binding */ aloomatarTabChange),
/* harmony export */   "biryaniTabChange": () => (/* binding */ biryaniTabChange),
/* harmony export */   "pulaoTabChange": () => (/* binding */ pulaoTabChange)
/* harmony export */ });
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.js */ "./src/tab.js");


function biryaniTabChange() {
    let dishDiv = document.querySelector(".dish");
    dishDiv.innerHTML = "";
    _tab_js__WEBPACK_IMPORTED_MODULE_0__["default"].dishText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed urna eget quam dictum luctus vitae at lorem. Curabitur condimentum euismod neque vestibulum dignissim. Morbi elementum, odio vel cursus sodales, magna quam ullamcorper nulla, sed luctus orci nisl vel magna. Cras vel nunc sed sem fermentum mollis. Sed finibus odio in nibh blandit placerat. Maecenas et facilisis ligula, id egestas elit. Cras consequat, nisl at scelerisque ullamcorper, nisi purus volutpat dolor, nec lobortis ipsum sapien non orci. Nullam mauris magna, fringilla non sapien quis, vehicula condimentum mi. Duis dolor massa, aliquam eget nunc nec, mollis luctus erat. Phasellus nec nisl eget enim ullamcorper tincidunt. Nunc eu elementum nibh, quis pulvinar magna. Quisque id porta eros. Nullam facilisis turpis facilisis massa tincidunt tincidunt.");
    _tab_js__WEBPACK_IMPORTED_MODULE_0__["default"].dishText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed urna eget quam dictum luctus vitae at lorem. Curabitur condimentum euismod neque vestibulum dignissim. Morbi elementum, odio vel cursus sodales, magna quam ullamcorper nulla, sed luctus orci nisl vel magna. Cras vel nunc sed sem fermentum mollis. Sed finibus odio in nibh blandit placerat. Maecenas et facilisis ligula, id egestas elit. Cras consequat, nisl at scelerisque ullamcorper, nisi purus volutpat dolor, nec lobortis ipsum sapien non orci. Nullam mauris magna, fringilla non sapien quis, vehicula condimentum mi. Duis dolor massa, aliquam eget nunc nec, mollis luctus erat. Phasellus nec nisl eget enim ullamcorper tincidunt. Nunc eu elementum nibh, quis pulvinar magna. Quisque id porta eros. Nullam facilisis turpis facilisis massa tincidunt tincidunt.");
    _tab_js__WEBPACK_IMPORTED_MODULE_0__["default"].dishText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed urna eget quam dictum luctus vitae at lorem. Curabitur condimentum euismod neque vestibulum dignissim. Morbi elementum, odio vel cursus sodales, magna quam ullamcorper nulla, sed luctus orci nisl vel magna. Cras vel nunc sed sem fermentum mollis. Sed finibus odio in nibh blandit placerat. Maecenas et facilisis ligula, id egestas elit. Cras consequat, nisl at scelerisque ullamcorper, nisi purus volutpat dolor, nec lobortis ipsum sapien non orci. Nullam mauris magna, fringilla non sapien quis, vehicula condimentum mi. Duis dolor massa, aliquam eget nunc nec, mollis luctus erat. Phasellus nec nisl eget enim ullamcorper tincidunt. Nunc eu elementum nibh, quis pulvinar magna. Quisque id porta eros. Nullam facilisis turpis facilisis massa tincidunt tincidunt.");
}

function pulaoTabChange(){
    let dishDiv = document.querySelector(".dish");
    dishDiv.innerHTML = "";
    _tab_js__WEBPACK_IMPORTED_MODULE_0__["default"].dishText("Cras a erat sed justo imperdiet molestie. Nunc tempus erat sed rutrum ornare. Aenean neque leo, aliquet at velit et, mattis varius magna. Suspendisse dignissim commodo metus, nec sagittis nunc eleifend in. Aenean ac odio eget ante semper placerat sed sit amet ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tempus sit amet dui nec viverra. Proin sit amet sodales ipsum. Aliquam eu elit eu velit egestas ullamcorper non ut arcu. Integer finibus tellus a semper elementum. Duis iaculis id neque sed vulputate. Mauris ut tempor leo. Ut enim risus, molestie eget iaculis id, tincidunt ac purus. In nec massa diam.");
    _tab_js__WEBPACK_IMPORTED_MODULE_0__["default"].dishText("Cras a erat sed justo imperdiet molestie. Nunc tempus erat sed rutrum ornare. Aenean neque leo, aliquet at velit et, mattis varius magna. Suspendisse dignissim commodo metus, nec sagittis nunc eleifend in. Aenean ac odio eget ante semper placerat sed sit amet ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tempus sit amet dui nec viverra. Proin sit amet sodales ipsum. Aliquam eu elit eu velit egestas ullamcorper non ut arcu. Integer finibus tellus a semper elementum. Duis iaculis id neque sed vulputate. Mauris ut tempor leo. Ut enim risus, molestie eget iaculis id, tincidunt ac purus. In nec massa diam.");
    _tab_js__WEBPACK_IMPORTED_MODULE_0__["default"].dishText("Cras a erat sed justo imperdiet molestie. Nunc tempus erat sed rutrum ornare. Aenean neque leo, aliquet at velit et, mattis varius magna. Suspendisse dignissim commodo metus, nec sagittis nunc eleifend in. Aenean ac odio eget ante semper placerat sed sit amet ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tempus sit amet dui nec viverra. Proin sit amet sodales ipsum. Aliquam eu elit eu velit egestas ullamcorper non ut arcu. Integer finibus tellus a semper elementum. Duis iaculis id neque sed vulputate. Mauris ut tempor leo. Ut enim risus, molestie eget iaculis id, tincidunt ac purus. In nec massa diam.");
}

function aloomatarTabChange(){
    let dishDiv = document.querySelector(".dish");
    dishDiv.innerHTML = "";
    _tab_js__WEBPACK_IMPORTED_MODULE_0__["default"].dishText("Fusce rhoncus tellus sit amet purus pellentesque feugiat. Aliquam sed tellus nisi. Duis blandit sem elit. Donec vulputate neque sit amet commodo tincidunt. Maecenas non tristique magna. Etiam nibh lectus, eleifend nec mi non, imperdiet consequat enim. Nulla a lobortis nulla, eget posuere lacus. Morbi ornare auctor vehicula. Donec non molestie lacus. Mauris sem augue, maximus sed placerat ut, rhoncus tristique felis. Nam vulputate convallis metus, in consectetur mauris aliquam at. Phasellus euismod risus vel tempor gravida. Vivamus at luctus turpis, sed rutrum dui. Pellentesque mi risus, molestie vitae venenatis finibus, accumsan ac quam. Donec congue id magna eget dignissim. In hac habitasse platea dictumst.");
    _tab_js__WEBPACK_IMPORTED_MODULE_0__["default"].dishText("Cras a erat sed justo imperdiet molestie. Nunc tempus erat sed rutrum ornare. Aenean neque leo, aliquet at velit et, mattis varius magna. Suspendisse dignissim commodo metus, nec sagittis nunc eleifend in. Aenean ac odio eget ante semper placerat sed sit amet ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tempus sit amet dui nec viverra. Proin sit amet sodales ipsum. Aliquam eu elit eu velit egestas ullamcorper non ut arcu. Integer finibus tellus a semper elementum. Duis iaculis id neque sed vulputate. Mauris ut tempor leo. Ut enim risus, molestie eget iaculis id, tincidunt ac purus. In nec massa diam.");
    _tab_js__WEBPACK_IMPORTED_MODULE_0__["default"].dishText("Cras a erat sed justo imperdiet molestie. Nunc tempus erat sed rutrum ornare. Aenean neque leo, aliquet at velit et, mattis varius magna. Suspendisse dignissim commodo metus, nec sagittis nunc eleifend in. Aenean ac odio eget ante semper placerat sed sit amet ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tempus sit amet dui nec viverra. Proin sit amet sodales ipsum. Aliquam eu elit eu velit egestas ullamcorper non ut arcu. Integer finibus tellus a semper elementum. Duis iaculis id neque sed vulputate. Mauris ut tempor leo. Ut enim risus, molestie eget iaculis id, tincidunt ac purus. In nec massa diam.");
}



/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tabs = (() => {
    let heading = () => {
            let contentDiv = document.querySelector("#content");
            let heading = document.createElement("h1");
            heading.textContent = "Resturant Page";
            contentDiv.appendChild(heading);
    };

    let createTab = () => {
        let contentDiv = document.querySelector("#content");
        let tabs = document.createElement("div");
        tabs.classList.add("tabs");
        contentDiv.appendChild(tabs);
    };

    let appendDish = (str) => {
        let tabDiv = document.querySelector(".tabs");
        let heading = document.createElement("h4");
        heading.textContent = str;
        heading.classList.add("dishes");
        tabDiv.appendChild(heading);
    };

    let dishDiv = () =>{
        let contentDiv = document.querySelector("#content");
        let dishDiv = document.createElement("div");
        dishDiv.classList.add("dish");
        contentDiv.appendChild(dishDiv);
    };

    let dishText = (str) =>{
        let dishDiv = document.querySelector(".dish");
        let newPara = document.createElement("p");
        newPara.textContent = str;
        dishDiv.appendChild(newPara);
    }

    return {
        createTab,
        appendDish,
        heading,
        dishDiv,
        dishText
    }
})();

tabs.heading();
tabs.createTab();
tabs.appendDish("Biryani");
tabs.appendDish("Pulao");
tabs.appendDish("Aloo Matar");
tabs.dishDiv();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dishTexts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dishTexts.js */ "./src/dishTexts.js");





document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('dishes')) return;
    if (!e.target.closest('div').classList.contains('tabs')) return;
    let name = e.target.textContent.toLowerCase().replace(/\s+/g, '') + "TabChange";
    let fun = _dishTexts_js__WEBPACK_IMPORTED_MODULE_1__[name];
    if (!fun || fun === undefined) return;
    e.target.addEventListener('click', fun())
})
window.onload = () => {
    _dishTexts_js__WEBPACK_IMPORTED_MODULE_1__.biryaniTabChange();
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUNyRG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tCOzs7O0FBSXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwQ0FBSTtBQUNsQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsSUFBSSwyREFBcUI7QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9kaXNoVGV4dHMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvdGFiLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiB3aWR0aDogMTAwdnc7ICovXFxufVxcblxcbmgxe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4udGFic3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4IDMwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxufVxcblxcbi50YWJzID4gaDR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxufVxcblxcbi50YWJzID4gaDQ6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggN3B4IDFweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuLmRpc2h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMTBweCAyNSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA5cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLDhDQUE4QztJQUM5QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xcbn1cXG5cXG5oMXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTB2aDtcXG59XFxuXFxuLnRhYnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDBweCAzMCU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4udGFicyA+IGg0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xcbn1cXG5cXG4udGFicyA+IGg0OmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDdweCAxcHggYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XFxufVxcblxcbi5kaXNoe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDEwcHggMjUlO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogOXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRhYnMgZnJvbSBcIi4vdGFiLmpzXCI7XG5cbmZ1bmN0aW9uIGJpcnlhbmlUYWJDaGFuZ2UoKSB7XG4gICAgbGV0IGRpc2hEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc2hcIik7XG4gICAgZGlzaERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRhYnMuZGlzaFRleHQoXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWaXZhbXVzIHNlZCB1cm5hIGVnZXQgcXVhbSBkaWN0dW0gbHVjdHVzIHZpdGFlIGF0IGxvcmVtLiBDdXJhYml0dXIgY29uZGltZW50dW0gZXVpc21vZCBuZXF1ZSB2ZXN0aWJ1bHVtIGRpZ25pc3NpbS4gTW9yYmkgZWxlbWVudHVtLCBvZGlvIHZlbCBjdXJzdXMgc29kYWxlcywgbWFnbmEgcXVhbSB1bGxhbWNvcnBlciBudWxsYSwgc2VkIGx1Y3R1cyBvcmNpIG5pc2wgdmVsIG1hZ25hLiBDcmFzIHZlbCBudW5jIHNlZCBzZW0gZmVybWVudHVtIG1vbGxpcy4gU2VkIGZpbmlidXMgb2RpbyBpbiBuaWJoIGJsYW5kaXQgcGxhY2VyYXQuIE1hZWNlbmFzIGV0IGZhY2lsaXNpcyBsaWd1bGEsIGlkIGVnZXN0YXMgZWxpdC4gQ3JhcyBjb25zZXF1YXQsIG5pc2wgYXQgc2NlbGVyaXNxdWUgdWxsYW1jb3JwZXIsIG5pc2kgcHVydXMgdm9sdXRwYXQgZG9sb3IsIG5lYyBsb2JvcnRpcyBpcHN1bSBzYXBpZW4gbm9uIG9yY2kuIE51bGxhbSBtYXVyaXMgbWFnbmEsIGZyaW5naWxsYSBub24gc2FwaWVuIHF1aXMsIHZlaGljdWxhIGNvbmRpbWVudHVtIG1pLiBEdWlzIGRvbG9yIG1hc3NhLCBhbGlxdWFtIGVnZXQgbnVuYyBuZWMsIG1vbGxpcyBsdWN0dXMgZXJhdC4gUGhhc2VsbHVzIG5lYyBuaXNsIGVnZXQgZW5pbSB1bGxhbWNvcnBlciB0aW5jaWR1bnQuIE51bmMgZXUgZWxlbWVudHVtIG5pYmgsIHF1aXMgcHVsdmluYXIgbWFnbmEuIFF1aXNxdWUgaWQgcG9ydGEgZXJvcy4gTnVsbGFtIGZhY2lsaXNpcyB0dXJwaXMgZmFjaWxpc2lzIG1hc3NhIHRpbmNpZHVudCB0aW5jaWR1bnQuXCIpO1xuICAgIHRhYnMuZGlzaFRleHQoXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWaXZhbXVzIHNlZCB1cm5hIGVnZXQgcXVhbSBkaWN0dW0gbHVjdHVzIHZpdGFlIGF0IGxvcmVtLiBDdXJhYml0dXIgY29uZGltZW50dW0gZXVpc21vZCBuZXF1ZSB2ZXN0aWJ1bHVtIGRpZ25pc3NpbS4gTW9yYmkgZWxlbWVudHVtLCBvZGlvIHZlbCBjdXJzdXMgc29kYWxlcywgbWFnbmEgcXVhbSB1bGxhbWNvcnBlciBudWxsYSwgc2VkIGx1Y3R1cyBvcmNpIG5pc2wgdmVsIG1hZ25hLiBDcmFzIHZlbCBudW5jIHNlZCBzZW0gZmVybWVudHVtIG1vbGxpcy4gU2VkIGZpbmlidXMgb2RpbyBpbiBuaWJoIGJsYW5kaXQgcGxhY2VyYXQuIE1hZWNlbmFzIGV0IGZhY2lsaXNpcyBsaWd1bGEsIGlkIGVnZXN0YXMgZWxpdC4gQ3JhcyBjb25zZXF1YXQsIG5pc2wgYXQgc2NlbGVyaXNxdWUgdWxsYW1jb3JwZXIsIG5pc2kgcHVydXMgdm9sdXRwYXQgZG9sb3IsIG5lYyBsb2JvcnRpcyBpcHN1bSBzYXBpZW4gbm9uIG9yY2kuIE51bGxhbSBtYXVyaXMgbWFnbmEsIGZyaW5naWxsYSBub24gc2FwaWVuIHF1aXMsIHZlaGljdWxhIGNvbmRpbWVudHVtIG1pLiBEdWlzIGRvbG9yIG1hc3NhLCBhbGlxdWFtIGVnZXQgbnVuYyBuZWMsIG1vbGxpcyBsdWN0dXMgZXJhdC4gUGhhc2VsbHVzIG5lYyBuaXNsIGVnZXQgZW5pbSB1bGxhbWNvcnBlciB0aW5jaWR1bnQuIE51bmMgZXUgZWxlbWVudHVtIG5pYmgsIHF1aXMgcHVsdmluYXIgbWFnbmEuIFF1aXNxdWUgaWQgcG9ydGEgZXJvcy4gTnVsbGFtIGZhY2lsaXNpcyB0dXJwaXMgZmFjaWxpc2lzIG1hc3NhIHRpbmNpZHVudCB0aW5jaWR1bnQuXCIpO1xuICAgIHRhYnMuZGlzaFRleHQoXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWaXZhbXVzIHNlZCB1cm5hIGVnZXQgcXVhbSBkaWN0dW0gbHVjdHVzIHZpdGFlIGF0IGxvcmVtLiBDdXJhYml0dXIgY29uZGltZW50dW0gZXVpc21vZCBuZXF1ZSB2ZXN0aWJ1bHVtIGRpZ25pc3NpbS4gTW9yYmkgZWxlbWVudHVtLCBvZGlvIHZlbCBjdXJzdXMgc29kYWxlcywgbWFnbmEgcXVhbSB1bGxhbWNvcnBlciBudWxsYSwgc2VkIGx1Y3R1cyBvcmNpIG5pc2wgdmVsIG1hZ25hLiBDcmFzIHZlbCBudW5jIHNlZCBzZW0gZmVybWVudHVtIG1vbGxpcy4gU2VkIGZpbmlidXMgb2RpbyBpbiBuaWJoIGJsYW5kaXQgcGxhY2VyYXQuIE1hZWNlbmFzIGV0IGZhY2lsaXNpcyBsaWd1bGEsIGlkIGVnZXN0YXMgZWxpdC4gQ3JhcyBjb25zZXF1YXQsIG5pc2wgYXQgc2NlbGVyaXNxdWUgdWxsYW1jb3JwZXIsIG5pc2kgcHVydXMgdm9sdXRwYXQgZG9sb3IsIG5lYyBsb2JvcnRpcyBpcHN1bSBzYXBpZW4gbm9uIG9yY2kuIE51bGxhbSBtYXVyaXMgbWFnbmEsIGZyaW5naWxsYSBub24gc2FwaWVuIHF1aXMsIHZlaGljdWxhIGNvbmRpbWVudHVtIG1pLiBEdWlzIGRvbG9yIG1hc3NhLCBhbGlxdWFtIGVnZXQgbnVuYyBuZWMsIG1vbGxpcyBsdWN0dXMgZXJhdC4gUGhhc2VsbHVzIG5lYyBuaXNsIGVnZXQgZW5pbSB1bGxhbWNvcnBlciB0aW5jaWR1bnQuIE51bmMgZXUgZWxlbWVudHVtIG5pYmgsIHF1aXMgcHVsdmluYXIgbWFnbmEuIFF1aXNxdWUgaWQgcG9ydGEgZXJvcy4gTnVsbGFtIGZhY2lsaXNpcyB0dXJwaXMgZmFjaWxpc2lzIG1hc3NhIHRpbmNpZHVudCB0aW5jaWR1bnQuXCIpO1xufVxuXG5mdW5jdGlvbiBwdWxhb1RhYkNoYW5nZSgpe1xuICAgIGxldCBkaXNoRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNoXCIpO1xuICAgIGRpc2hEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0YWJzLmRpc2hUZXh0KFwiQ3JhcyBhIGVyYXQgc2VkIGp1c3RvIGltcGVyZGlldCBtb2xlc3RpZS4gTnVuYyB0ZW1wdXMgZXJhdCBzZWQgcnV0cnVtIG9ybmFyZS4gQWVuZWFuIG5lcXVlIGxlbywgYWxpcXVldCBhdCB2ZWxpdCBldCwgbWF0dGlzIHZhcml1cyBtYWduYS4gU3VzcGVuZGlzc2UgZGlnbmlzc2ltIGNvbW1vZG8gbWV0dXMsIG5lYyBzYWdpdHRpcyBudW5jIGVsZWlmZW5kIGluLiBBZW5lYW4gYWMgb2RpbyBlZ2V0IGFudGUgc2VtcGVyIHBsYWNlcmF0IHNlZCBzaXQgYW1ldCBhbnRlLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIFByb2luIHRlbXB1cyBzaXQgYW1ldCBkdWkgbmVjIHZpdmVycmEuIFByb2luIHNpdCBhbWV0IHNvZGFsZXMgaXBzdW0uIEFsaXF1YW0gZXUgZWxpdCBldSB2ZWxpdCBlZ2VzdGFzIHVsbGFtY29ycGVyIG5vbiB1dCBhcmN1LiBJbnRlZ2VyIGZpbmlidXMgdGVsbHVzIGEgc2VtcGVyIGVsZW1lbnR1bS4gRHVpcyBpYWN1bGlzIGlkIG5lcXVlIHNlZCB2dWxwdXRhdGUuIE1hdXJpcyB1dCB0ZW1wb3IgbGVvLiBVdCBlbmltIHJpc3VzLCBtb2xlc3RpZSBlZ2V0IGlhY3VsaXMgaWQsIHRpbmNpZHVudCBhYyBwdXJ1cy4gSW4gbmVjIG1hc3NhIGRpYW0uXCIpO1xuICAgIHRhYnMuZGlzaFRleHQoXCJDcmFzIGEgZXJhdCBzZWQganVzdG8gaW1wZXJkaWV0IG1vbGVzdGllLiBOdW5jIHRlbXB1cyBlcmF0IHNlZCBydXRydW0gb3JuYXJlLiBBZW5lYW4gbmVxdWUgbGVvLCBhbGlxdWV0IGF0IHZlbGl0IGV0LCBtYXR0aXMgdmFyaXVzIG1hZ25hLiBTdXNwZW5kaXNzZSBkaWduaXNzaW0gY29tbW9kbyBtZXR1cywgbmVjIHNhZ2l0dGlzIG51bmMgZWxlaWZlbmQgaW4uIEFlbmVhbiBhYyBvZGlvIGVnZXQgYW50ZSBzZW1wZXIgcGxhY2VyYXQgc2VkIHNpdCBhbWV0IGFudGUuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gUHJvaW4gdGVtcHVzIHNpdCBhbWV0IGR1aSBuZWMgdml2ZXJyYS4gUHJvaW4gc2l0IGFtZXQgc29kYWxlcyBpcHN1bS4gQWxpcXVhbSBldSBlbGl0IGV1IHZlbGl0IGVnZXN0YXMgdWxsYW1jb3JwZXIgbm9uIHV0IGFyY3UuIEludGVnZXIgZmluaWJ1cyB0ZWxsdXMgYSBzZW1wZXIgZWxlbWVudHVtLiBEdWlzIGlhY3VsaXMgaWQgbmVxdWUgc2VkIHZ1bHB1dGF0ZS4gTWF1cmlzIHV0IHRlbXBvciBsZW8uIFV0IGVuaW0gcmlzdXMsIG1vbGVzdGllIGVnZXQgaWFjdWxpcyBpZCwgdGluY2lkdW50IGFjIHB1cnVzLiBJbiBuZWMgbWFzc2EgZGlhbS5cIik7XG4gICAgdGFicy5kaXNoVGV4dChcIkNyYXMgYSBlcmF0IHNlZCBqdXN0byBpbXBlcmRpZXQgbW9sZXN0aWUuIE51bmMgdGVtcHVzIGVyYXQgc2VkIHJ1dHJ1bSBvcm5hcmUuIEFlbmVhbiBuZXF1ZSBsZW8sIGFsaXF1ZXQgYXQgdmVsaXQgZXQsIG1hdHRpcyB2YXJpdXMgbWFnbmEuIFN1c3BlbmRpc3NlIGRpZ25pc3NpbSBjb21tb2RvIG1ldHVzLCBuZWMgc2FnaXR0aXMgbnVuYyBlbGVpZmVuZCBpbi4gQWVuZWFuIGFjIG9kaW8gZWdldCBhbnRlIHNlbXBlciBwbGFjZXJhdCBzZWQgc2l0IGFtZXQgYW50ZS4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBQcm9pbiB0ZW1wdXMgc2l0IGFtZXQgZHVpIG5lYyB2aXZlcnJhLiBQcm9pbiBzaXQgYW1ldCBzb2RhbGVzIGlwc3VtLiBBbGlxdWFtIGV1IGVsaXQgZXUgdmVsaXQgZWdlc3RhcyB1bGxhbWNvcnBlciBub24gdXQgYXJjdS4gSW50ZWdlciBmaW5pYnVzIHRlbGx1cyBhIHNlbXBlciBlbGVtZW50dW0uIER1aXMgaWFjdWxpcyBpZCBuZXF1ZSBzZWQgdnVscHV0YXRlLiBNYXVyaXMgdXQgdGVtcG9yIGxlby4gVXQgZW5pbSByaXN1cywgbW9sZXN0aWUgZWdldCBpYWN1bGlzIGlkLCB0aW5jaWR1bnQgYWMgcHVydXMuIEluIG5lYyBtYXNzYSBkaWFtLlwiKTtcbn1cblxuZnVuY3Rpb24gYWxvb21hdGFyVGFiQ2hhbmdlKCl7XG4gICAgbGV0IGRpc2hEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc2hcIik7XG4gICAgZGlzaERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRhYnMuZGlzaFRleHQoXCJGdXNjZSByaG9uY3VzIHRlbGx1cyBzaXQgYW1ldCBwdXJ1cyBwZWxsZW50ZXNxdWUgZmV1Z2lhdC4gQWxpcXVhbSBzZWQgdGVsbHVzIG5pc2kuIER1aXMgYmxhbmRpdCBzZW0gZWxpdC4gRG9uZWMgdnVscHV0YXRlIG5lcXVlIHNpdCBhbWV0IGNvbW1vZG8gdGluY2lkdW50LiBNYWVjZW5hcyBub24gdHJpc3RpcXVlIG1hZ25hLiBFdGlhbSBuaWJoIGxlY3R1cywgZWxlaWZlbmQgbmVjIG1pIG5vbiwgaW1wZXJkaWV0IGNvbnNlcXVhdCBlbmltLiBOdWxsYSBhIGxvYm9ydGlzIG51bGxhLCBlZ2V0IHBvc3VlcmUgbGFjdXMuIE1vcmJpIG9ybmFyZSBhdWN0b3IgdmVoaWN1bGEuIERvbmVjIG5vbiBtb2xlc3RpZSBsYWN1cy4gTWF1cmlzIHNlbSBhdWd1ZSwgbWF4aW11cyBzZWQgcGxhY2VyYXQgdXQsIHJob25jdXMgdHJpc3RpcXVlIGZlbGlzLiBOYW0gdnVscHV0YXRlIGNvbnZhbGxpcyBtZXR1cywgaW4gY29uc2VjdGV0dXIgbWF1cmlzIGFsaXF1YW0gYXQuIFBoYXNlbGx1cyBldWlzbW9kIHJpc3VzIHZlbCB0ZW1wb3IgZ3JhdmlkYS4gVml2YW11cyBhdCBsdWN0dXMgdHVycGlzLCBzZWQgcnV0cnVtIGR1aS4gUGVsbGVudGVzcXVlIG1pIHJpc3VzLCBtb2xlc3RpZSB2aXRhZSB2ZW5lbmF0aXMgZmluaWJ1cywgYWNjdW1zYW4gYWMgcXVhbS4gRG9uZWMgY29uZ3VlIGlkIG1hZ25hIGVnZXQgZGlnbmlzc2ltLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIik7XG4gICAgdGFicy5kaXNoVGV4dChcIkNyYXMgYSBlcmF0IHNlZCBqdXN0byBpbXBlcmRpZXQgbW9sZXN0aWUuIE51bmMgdGVtcHVzIGVyYXQgc2VkIHJ1dHJ1bSBvcm5hcmUuIEFlbmVhbiBuZXF1ZSBsZW8sIGFsaXF1ZXQgYXQgdmVsaXQgZXQsIG1hdHRpcyB2YXJpdXMgbWFnbmEuIFN1c3BlbmRpc3NlIGRpZ25pc3NpbSBjb21tb2RvIG1ldHVzLCBuZWMgc2FnaXR0aXMgbnVuYyBlbGVpZmVuZCBpbi4gQWVuZWFuIGFjIG9kaW8gZWdldCBhbnRlIHNlbXBlciBwbGFjZXJhdCBzZWQgc2l0IGFtZXQgYW50ZS4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBQcm9pbiB0ZW1wdXMgc2l0IGFtZXQgZHVpIG5lYyB2aXZlcnJhLiBQcm9pbiBzaXQgYW1ldCBzb2RhbGVzIGlwc3VtLiBBbGlxdWFtIGV1IGVsaXQgZXUgdmVsaXQgZWdlc3RhcyB1bGxhbWNvcnBlciBub24gdXQgYXJjdS4gSW50ZWdlciBmaW5pYnVzIHRlbGx1cyBhIHNlbXBlciBlbGVtZW50dW0uIER1aXMgaWFjdWxpcyBpZCBuZXF1ZSBzZWQgdnVscHV0YXRlLiBNYXVyaXMgdXQgdGVtcG9yIGxlby4gVXQgZW5pbSByaXN1cywgbW9sZXN0aWUgZWdldCBpYWN1bGlzIGlkLCB0aW5jaWR1bnQgYWMgcHVydXMuIEluIG5lYyBtYXNzYSBkaWFtLlwiKTtcbiAgICB0YWJzLmRpc2hUZXh0KFwiQ3JhcyBhIGVyYXQgc2VkIGp1c3RvIGltcGVyZGlldCBtb2xlc3RpZS4gTnVuYyB0ZW1wdXMgZXJhdCBzZWQgcnV0cnVtIG9ybmFyZS4gQWVuZWFuIG5lcXVlIGxlbywgYWxpcXVldCBhdCB2ZWxpdCBldCwgbWF0dGlzIHZhcml1cyBtYWduYS4gU3VzcGVuZGlzc2UgZGlnbmlzc2ltIGNvbW1vZG8gbWV0dXMsIG5lYyBzYWdpdHRpcyBudW5jIGVsZWlmZW5kIGluLiBBZW5lYW4gYWMgb2RpbyBlZ2V0IGFudGUgc2VtcGVyIHBsYWNlcmF0IHNlZCBzaXQgYW1ldCBhbnRlLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIFByb2luIHRlbXB1cyBzaXQgYW1ldCBkdWkgbmVjIHZpdmVycmEuIFByb2luIHNpdCBhbWV0IHNvZGFsZXMgaXBzdW0uIEFsaXF1YW0gZXUgZWxpdCBldSB2ZWxpdCBlZ2VzdGFzIHVsbGFtY29ycGVyIG5vbiB1dCBhcmN1LiBJbnRlZ2VyIGZpbmlidXMgdGVsbHVzIGEgc2VtcGVyIGVsZW1lbnR1bS4gRHVpcyBpYWN1bGlzIGlkIG5lcXVlIHNlZCB2dWxwdXRhdGUuIE1hdXJpcyB1dCB0ZW1wb3IgbGVvLiBVdCBlbmltIHJpc3VzLCBtb2xlc3RpZSBlZ2V0IGlhY3VsaXMgaWQsIHRpbmNpZHVudCBhYyBwdXJ1cy4gSW4gbmVjIG1hc3NhIGRpYW0uXCIpO1xufVxuXG5leHBvcnQge1xuICAgIGJpcnlhbmlUYWJDaGFuZ2UsXG4gICAgcHVsYW9UYWJDaGFuZ2UsXG4gICAgYWxvb21hdGFyVGFiQ2hhbmdlXG59OyIsImNvbnN0IHRhYnMgPSAoKCkgPT4ge1xuICAgIGxldCBoZWFkaW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlJlc3R1cmFudCBQYWdlXCI7XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIH07XG5cbiAgICBsZXQgY3JlYXRlVGFiID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICAgICAgbGV0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YWJzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzXCIpO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhYnMpO1xuICAgIH07XG5cbiAgICBsZXQgYXBwZW5kRGlzaCA9IChzdHIpID0+IHtcbiAgICAgICAgbGV0IHRhYkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic1wiKTtcbiAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBzdHI7XG4gICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImRpc2hlc1wiKTtcbiAgICAgICAgdGFiRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIH07XG5cbiAgICBsZXQgZGlzaERpdiA9ICgpID0+e1xuICAgICAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICAgICAgbGV0IGRpc2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXNoRGl2LmNsYXNzTGlzdC5hZGQoXCJkaXNoXCIpO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRpc2hEaXYpO1xuICAgIH07XG5cbiAgICBsZXQgZGlzaFRleHQgPSAoc3RyKSA9PntcbiAgICAgICAgbGV0IGRpc2hEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc2hcIik7XG4gICAgICAgIGxldCBuZXdQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5ld1BhcmEudGV4dENvbnRlbnQgPSBzdHI7XG4gICAgICAgIGRpc2hEaXYuYXBwZW5kQ2hpbGQobmV3UGFyYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVGFiLFxuICAgICAgICBhcHBlbmREaXNoLFxuICAgICAgICBoZWFkaW5nLFxuICAgICAgICBkaXNoRGl2LFxuICAgICAgICBkaXNoVGV4dFxuICAgIH1cbn0pKCk7XG5cbnRhYnMuaGVhZGluZygpO1xudGFicy5jcmVhdGVUYWIoKTtcbnRhYnMuYXBwZW5kRGlzaChcIkJpcnlhbmlcIik7XG50YWJzLmFwcGVuZERpc2goXCJQdWxhb1wiKTtcbnRhYnMuYXBwZW5kRGlzaChcIkFsb28gTWF0YXJcIik7XG50YWJzLmRpc2hEaXYoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGFiczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgZnVuYyBmcm9tIFwiLi9kaXNoVGV4dHMuanNcIjtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGlzaGVzJykpIHJldHVybjtcbiAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpLmNsYXNzTGlzdC5jb250YWlucygndGFicycpKSByZXR1cm47XG4gICAgbGV0IG5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpICsgXCJUYWJDaGFuZ2VcIjtcbiAgICBsZXQgZnVuID0gZnVuY1tuYW1lXTtcbiAgICBpZiAoIWZ1biB8fCBmdW4gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuKCkpXG59KVxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBmdW5jLmJpcnlhbmlUYWJDaGFuZ2UoKTtcbn1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=