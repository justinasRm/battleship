/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Gameplay.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Gameplay.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    height: 100vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#player-side{\n    width: 40.5%;\n    height: 72%;\n    background-color: rgb(255, 200, 212);\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n}\n#computer-side{\n    width: 40.5%;\n    height: 72%;\n    background-color: rgb(193, 193, 255);\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n}\n.player-side-box{\n    border: solid 1px black;\n}\n.ship{\n    background-color: crimson;\n}\n.computer-side-box{\n    border: solid 1px black;\n}\n\n.gg-popup{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    transition: all 1s;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 3rem;\n    color: white;\n}\n.gg-popup-text{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: gray;\n    padding: 20px;\n    outline: 2px solid darkgray;\n}\n.play-again-btn{\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:white;\n    font-size: 1.5rem;\n\n    transition: 0.5s all;\n}\n.play-again-btn:hover{\n    transform: scale(1.03);\n}", "",{"version":3,"sources":["webpack://./src/Gameplay.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,aAAa;IACb,8DAA8D;AAClE;AACA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,aAAa;IACb,8DAA8D;AAClE;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,iBAAiB;;IAEjB,oBAAoB;AACxB;AACA;IACI,sBAAsB;AAC1B","sourcesContent":["body{\n    height: 100vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#player-side{\n    width: 40.5%;\n    height: 72%;\n    background-color: rgb(255, 200, 212);\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n}\n#computer-side{\n    width: 40.5%;\n    height: 72%;\n    background-color: rgb(193, 193, 255);\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n}\n.player-side-box{\n    border: solid 1px black;\n}\n.ship{\n    background-color: crimson;\n}\n.computer-side-box{\n    border: solid 1px black;\n}\n\n.gg-popup{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    transition: all 1s;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 3rem;\n    color: white;\n}\n.gg-popup-text{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: gray;\n    padding: 20px;\n    outline: 2px solid darkgray;\n}\n.play-again-btn{\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:white;\n    font-size: 1.5rem;\n\n    transition: 0.5s all;\n}\n.play-again-btn:hover{\n    transform: scale(1.03);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/firstScreenStyle.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/firstScreenStyle.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    height: 100vh;\n    margin: 0;\n}\n.content-first-screen{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n\n}\n.content-first-screen h1{\n    font-weight: bold;\n    font-size: 4rem;\n    color: rgb(0, 0, 0);\n    margin-bottom: 5px;\n}\n#start-game{\n    padding: 10px;\n    font-size: 2rem;\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:rgb(148, 148, 148);\n    box-shadow: 1px 1px 3px 1px gray;\n\n    transition: 0.5s all;\n}\n#start-game:hover{\n    box-shadow: 1px 2px 5px 2px gray;\n    transform: scale(1.03);\n}\n#start-game:focus{\n\n    background-color: rgb(53, 53, 53);\n}\n.explanation-overlay{\n    background-color: rgba(0, 0, 0, 0.4);\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.explanation-overlay-textDiv{\n    width: 500px;\n    height: 400px;\n    background-color: #595959;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.3rem;\n    color: beige;\n    text-align: center;\n}\n.explanation-overlay-button{\n    padding: 10px;\n    font-size: 1.5rem;\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:rgb(148, 148, 148);\n    box-shadow: 1px 1px 1px 1px gray;\n\n    transition: 0.5s all;\n}\n.explanation-overlay-button:hover{\n    box-shadow: 1px 2px 5px 2px gray;\n    transform: scale(1.03);\n}", "",{"version":3,"sources":["webpack://./src/firstScreenStyle.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;AAEb;AACA;IACI,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,eAAe;IACf,qBAAqB;IACrB,uBAAuB;IACvB,mCAAmC;IACnC,gCAAgC;;IAEhC,oBAAoB;AACxB;AACA;IACI,gCAAgC;IAChC,sBAAsB;AAC1B;AACA;;IAEI,iCAAiC;AACrC;AACA;IACI,oCAAoC;IACpC,YAAY;IACZ,aAAa;IACb,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,uBAAuB;IACvB,mCAAmC;IACnC,gCAAgC;;IAEhC,oBAAoB;AACxB;AACA;IACI,gCAAgC;IAChC,sBAAsB;AAC1B","sourcesContent":["body{\n    height: 100vh;\n    margin: 0;\n}\n.content-first-screen{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n\n}\n.content-first-screen h1{\n    font-weight: bold;\n    font-size: 4rem;\n    color: rgb(0, 0, 0);\n    margin-bottom: 5px;\n}\n#start-game{\n    padding: 10px;\n    font-size: 2rem;\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:rgb(148, 148, 148);\n    box-shadow: 1px 1px 3px 1px gray;\n\n    transition: 0.5s all;\n}\n#start-game:hover{\n    box-shadow: 1px 2px 5px 2px gray;\n    transform: scale(1.03);\n}\n#start-game:focus{\n\n    background-color: rgb(53, 53, 53);\n}\n.explanation-overlay{\n    background-color: rgba(0, 0, 0, 0.4);\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.explanation-overlay-textDiv{\n    width: 500px;\n    height: 400px;\n    background-color: #595959;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.3rem;\n    color: beige;\n    text-align: center;\n}\n.explanation-overlay-button{\n    padding: 10px;\n    font-size: 1.5rem;\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:rgb(148, 148, 148);\n    box-shadow: 1px 1px 1px 1px gray;\n\n    transition: 0.5s all;\n}\n.explanation-overlay-button:hover{\n    box-shadow: 1px 2px 5px 2px gray;\n    transform: scale(1.03);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/playerChooseShipsStyle.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/playerChooseShipsStyle.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".content-player-choose-ships{\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n#board{\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n    width: 813px;\n    height: 813px;\n    gap: 0;\n    margin: 0;\n    justify-content: left;\n}\n.box{\n    border: 1px solid black;\n    width: 133.5px;\n    height: 133.5px;\n}\n.left-panel{\n    border: 1px solid black;\n    width: 13%;\n    height: 811px;\n    background-color: gray;\n}\n.ship{\n    background-color: crimson;\n}\n.ship-overlay{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform:translate(-50%,-50%);\n    width: 814px;\n    height: 814px;\n    background-color: rgb(255, 171, 171);\n    opacity: 0;\n    transition: all 0.5s;\n    color: white;\n    font-weight: bold;\n    font-size: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    \n}\n.final-ship-overlay{\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    transition: 0.5s all;\n}\n.final-ship-overlay-text{\n    background-color: gray;\n    width: 300px;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 2rem;\n    color: beige;\n    font-weight: bold;\n    outline: 1px solid darkgray;\n}", "",{"version":3,"sources":["webpack://./src/playerChooseShipsStyle.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;AACA;IACI,aAAa;IACb,8DAA8D;IAC9D,YAAY;IACZ,aAAa;IACb,MAAM;IACN,SAAS;IACT,qBAAqB;AACzB;AACA;IACI,uBAAuB;IACvB,cAAc;IACd,eAAe;AACnB;AACA;IACI,uBAAuB;IACvB,UAAU;IACV,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,UAAU;IACV,oBAAoB;IACpB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;;AAEtB;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,oBAAoB;AACxB;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,2BAA2B;AAC/B","sourcesContent":[".content-player-choose-ships{\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n#board{\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n    width: 813px;\n    height: 813px;\n    gap: 0;\n    margin: 0;\n    justify-content: left;\n}\n.box{\n    border: 1px solid black;\n    width: 133.5px;\n    height: 133.5px;\n}\n.left-panel{\n    border: 1px solid black;\n    width: 13%;\n    height: 811px;\n    background-color: gray;\n}\n.ship{\n    background-color: crimson;\n}\n.ship-overlay{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform:translate(-50%,-50%);\n    width: 814px;\n    height: 814px;\n    background-color: rgb(255, 171, 171);\n    opacity: 0;\n    transition: all 0.5s;\n    color: white;\n    font-weight: bold;\n    font-size: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    \n}\n.final-ship-overlay{\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    transition: 0.5s all;\n}\n.final-ship-overlay-text{\n    background-color: gray;\n    width: 300px;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 2rem;\n    color: beige;\n    font-weight: bold;\n    outline: 1px solid darkgray;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/Gameplay.css":
/*!**************************!*\
  !*** ./src/Gameplay.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Gameplay_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./Gameplay.css */ "./node_modules/css-loader/dist/cjs.js!./src/Gameplay.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Gameplay_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Gameplay_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Gameplay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Gameplay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/firstScreenStyle.css":
/*!**********************************!*\
  !*** ./src/firstScreenStyle.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_firstScreenStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./firstScreenStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/firstScreenStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_firstScreenStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_firstScreenStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_firstScreenStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_firstScreenStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/playerChooseShipsStyle.css":
/*!****************************************!*\
  !*** ./src/playerChooseShipsStyle.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_playerChooseShipsStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./playerChooseShipsStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/playerChooseShipsStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_playerChooseShipsStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_playerChooseShipsStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_playerChooseShipsStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_playerChooseShipsStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/CheckHit.js":
/*!*************************!*\
  !*** ./src/CheckHit.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ComputerAttack = __webpack_require__(/*! ./ComputerAttack */ "./src/ComputerAttack.js");
const shipConstructor = __webpack_require__(/*! ./shipCreation */ "./src/shipCreation.js");
const FinishGame = __webpack_require__(/*! ./FinishGame */ "./src/FinishGame.js");

let hitCoordinates=0;
let isHit=false;

function CheckHit(ClickedTileCoords,BotPlayerBoard,BotGameBoard,gameBoard,playerBoard,body){
    isHit=false;
    for(let x=0;x<BotPlayerBoard.length;x++){ // goes through all 18 PC side tiles
        if(BotPlayerBoard[x][0]==ClickedTileCoords[0] && BotPlayerBoard[x][1]==ClickedTileCoords[1]){
            // finds the tile from BotPlayerBoard that was clicked

            const boxes=document.querySelectorAll(`.computer-side-box`); 
            for(let index=0;index<boxes.length;index++){
                // when the array element is found, go through all the PC side tiles

                if(boxes[index].dataset.coordinates == ClickedTileCoords){
                    // find the passed in clicked tile coordinates from all of the tiles and change the color
                    hitCoordinates++;
                boxes[index].style.background='cornflowerblue';
                isHit=true;

                FindHitShip(ClickedTileCoords,BotGameBoard,body);
                }
            }
        } else if(x==BotPlayerBoard.length-1 && isHit==false){
            document.querySelectorAll(`[data-coordinates="${ClickedTileCoords[0]}${ClickedTileCoords[1]}"]`).forEach(element=>{
                if(element.classList.contains('computer-side-box'))element.style.background='dimgray';
            })
        }
    }
    ComputerAttack(gameBoard,playerBoard,body);
   
}

function FindHitShip(ClickedTileCoords,BotGameBoard,body){
    // finds the ship that was clicked and checks if all of the ship tiles have been clicked(if ship is sunk)

    const array=Object.entries(BotGameBoard); // 7 array elements
    array.forEach((x,index) => { // go through all of the PC ships
        array[index][1].AllCoordinates().forEach(element=>{ // go through each ships all coordinates
            if(element[0]==ClickedTileCoords[0]&&element[1]==ClickedTileCoords[1]){
                // check if the clicked coordinates and any ship coordinates are the same
                BotGameBoard[`${array[index][0]}`].hitPosition.push([element[0],element[1]]); // push in the hit position to that ship
            }
            if(BotGameBoard[`${array[index][0]}`].hitPosition.length==BotGameBoard[`${array[index][0]}`].AllCoordinates().length){
                // if ships hitPosition and AllCoordinates arrays length is the same, ship is sunk
                BotGameBoard[`${array[index][0]}`].AllCoordinates().forEach(element=>{
                    // find the tile ine the game with corresponding data-coordinates attribute
                    document.querySelectorAll(`[data-coordinates="${element[0]}${element[1]}"]`).forEach(tile=>{
                        // 2 tiles with the same attribute - select the one on computer side
                        if(tile.classList.contains('computer-side-box')){
                            tile.style.background='darkblue';
                        }
                    })
                });
            }
        });
        
    });
    
    if(hitCoordinates==18){
        setTimeout(() => {
            FinishGame('player',body);
        }, 200);
        
    }
}
module.exports=CheckHit;

/***/ }),

/***/ "./src/ComputerAttack.js":
/*!*******************************!*\
  !*** ./src/ComputerAttack.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const FinishGame = __webpack_require__(/*! ./FinishGame */ "./src/FinishGame.js");



let attackedTiles=[];
let hitCoordinates=0;

function ComputerAttack(gameBoard,playerBoard,body){

    // basically this is just easy mode - the bot selects tiles randomly, doesnt matter if he hits a ship
    let succesfulAttack=false;

    loop1:
    while(succesfulAttack==false){
    //first i choose a random tile out of the 36 tiles
    let randomTileX=Math.round(Math.random()*5+1);
    let randomTileY=Math.round(Math.random()*5+1);
    let randomCoord=[randomTileX,randomTileY];

    let loopChecker;

    if(attackedTiles.length==0){
        attackedTiles.push(randomCoord);
    }
    else{
        attackedTiles.forEach((element,index)=>{
            if(element[0]==randomCoord[0] && element[1]==randomCoord[1])loopChecker=true;
            else if(index==attackedTiles.length-1 && loopChecker!=true)attackedTiles.push(randomCoord);
        })
    }
    if(loopChecker==true){
        continue loop1;
    }

    const tiles=document.querySelectorAll(`[data-coordinates="${randomCoord[0]}${randomCoord[1]}"`); // 2 tiles of the given coordinates - on player and computer sides
    tiles.forEach(element=>{
        if(element.classList.contains('player-side-box'))element.style.background='dimgray'; // get the one on player side
    })
    playerBoard.forEach(ship=>{
        ship.AllCoordinates().forEach(shipCoord=>{
            if(shipCoord[0]==randomCoord[0] && shipCoord[1]==randomCoord[1]){
                hitCoordinates++;
            }
        })
    })

    if(hitCoordinates==18){
        FinishGame('computer',body);
    }
    succesfulAttack=true;
}

}
module.exports=ComputerAttack; 

/***/ }),

/***/ "./src/ComputerChooseShips.js":
/*!************************************!*\
  !*** ./src/ComputerChooseShips.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const shipConstructor=__webpack_require__(/*! ./shipCreation.js */ "./src/shipCreation.js");
const BotPlayerBoardArrayUpdate=__webpack_require__(/*! ./GameBoardArray */ "./src/GameBoardArray.js");

function ComputerChooseShips(BotPlayerBoard){

function RandomShipPosition(a,BotPlayerBoard){
    let shipCreated=false;
    loop1:
    while(shipCreated==false){
    

        let endCords;
        //first i choose a random tile out of the 36 tiles
        let randomTileX=Math.round(Math.random()*5+1);
        let randomTileY=Math.round(Math.random()*5+1);

        startCords=[randomTileX,randomTileY];

        
        for(let tile = 0; tile < BotPlayerBoard.length; tile++){
            if((BotPlayerBoard[tile][0]==startCords[0] && BotPlayerBoard[tile][1]==startCords[1])){
                continue loop1;
            }
        }


        //then i check if in any direction there are enough tiles(the (a) variable given to the function is the length). first check going down, then left, then up, then right(this isn't really random - you are more likely to find a ship at the bottom portion of the board, but it will do)
        // IF NOT: GO BACK TO THE WHILE LOOP
        function findEndCords(a,startCords,BotPlayerBoard){

            function Down(){

                if((1<=startCords[1]+(a-1) && startCords[1]+(a-1)<=6)){// check if the board doesn't end where i want to place my endCords DOWN
                    // then check if the tiles between start and end cords are free and the end cords tile is free

                    if(BotPlayerBoard.length<1){

                        return [startCords[0],startCords[1]+(a-1)];
                        
                    }

                    for(let tile = 0; tile < BotPlayerBoard.length; tile++){
                        if(goingDown(tile,a)){

                            if(tile==BotPlayerBoard.length-1) return goingDown(tile,a);

                        } else {

                            return Left();
                        }
                    }

                } else {
                    return Left();
                }
            } 
            function Left(){
                if(1<=startCords[0]-(a-1) && startCords[0]-(a-1)<=6){ // Checking other endCords - going left

                    if(BotPlayerBoard.length<1){
                        return [startCords[0]-(a-1),startCords[1]];
                    }

                    for(let tile = 0; tile < BotPlayerBoard.length; tile++){
                        if(goingLeft(tile,a)){
                            if(tile==BotPlayerBoard.length-1) return goingLeft(tile,a);
                        } else {
                            return Up();
                        }
                    }
                } else {
                    return Up();
                }
            }
            function Up(){
                if(1<=startCords[1]-(a-1) && startCords[1]-(a-1)<=6){ // Checking other endCords - going up

                    if(BotPlayerBoard.length<1){
                        return [startCords[0],startCords[1]-(a-1)];
                    }
                    
                    for(let tile = 0; tile < BotPlayerBoard.length; tile++){
                        if(goingUp(tile,a)){
                            if(tile==BotPlayerBoard.length-1) return goingUp(tile,a);
                        } else {
                            return Right();
                        }
                    }
                } else {
                    return Right();
                }
            }
            function Right(){
                if(1<=startCords[0]+(a-1) && startCords[0]+(a-1)<=6){ // Checking other endCords - going right
                    
                    if(BotPlayerBoard.length<1){
                        return [startCords[0]+(a-1),startCords[1]];
                    }

                    for(let tile = 0; tile < BotPlayerBoard.length; tile++){
                        if(goingRight(tile,a)){
                            if(tile==BotPlayerBoard.length-1) return goingRight(tile,a);
                        } else {
                            return Occupied();
                        }
                    }
                } else {
                    return Occupied();
                }
            }
            function Occupied(){
                return;
            }

            return Down();

        }

        function goingDown(tile,a){ // checking if end coords are occupied and if any tiles between start and end coords are occupied

            if(((startCords[1]+(a-1)==BotPlayerBoard[tile][1]) && (startCords[0]==BotPlayerBoard[tile][0]))|| // TIKRAI GERAI
               (BotPlayerBoard[tile][1]>=startCords[1] && BotPlayerBoard[tile][1]<=startCords[1]+(a-1) && startCords[0]==BotPlayerBoard[tile][0]))
            {
                return;
            } else {
                return endCords=[startCords[0],startCords[1]+(a-1)];
            }
            
        }
        function goingLeft(tile,a){ // after going down and it not beeing viable, checking if going left is ok

            if(1<=startCords[0]-(a-1) && startCords[0]-(a-1)<=6){

                if(((startCords[0]-(a-1)==BotPlayerBoard[tile][0]) && (startCords[1]==BotPlayerBoard[tile][1]))||
                (startCords[0]>=BotPlayerBoard[tile][0] && BotPlayerBoard[tile][0]>=startCords[0]-(a-1) && startCords[1]==BotPlayerBoard[tile][1]))
                {
                    return;
                } else return endCords=[startCords[0]-(a-1),startCords[1]]; // if this if statement is true, it means that either the end coords are occupied or any coordinate inbetween start and end coords is occupied. Try to go up.
    
            }

        }

        function goingUp(tile,a){ // Try going up
            if(1<=startCords[1]-(a-1) && startCords[1]-(a-1)<=6){

                if(((startCords[1]-(a-1)==BotPlayerBoard[tile][1]) && (startCords[0]==BotPlayerBoard[tile][0]))||
                (startCords[1]>=BotPlayerBoard[tile][1] && BotPlayerBoard[tile][1]>=startCords[1]-(a-1)  && startCords[0]==BotPlayerBoard[tile][0]))
                {
                    return;
                } else return endCords=[startCords[0],startCords[1]-(a-1)];
                    
                
            }
          
        }
        function goingRight(tile,a){
            if(1<=startCords[0]+(a-1) && startCords[0]+(a-1)<=6){

                if(((startCords[0]+(a-1)==BotPlayerBoard[tile][0]) && (startCords[1]==BotPlayerBoard[tile][1]))||
                (startCords[0]<=BotPlayerBoard[tile][0] && BotPlayerBoard[tile][0]<=startCords[0]+(a-1) && startCords[1]==BotPlayerBoard[tile][1]))
                {
                    return;
                } else return endCords=[startCords[0]+(a-1),startCords[1]];
            }

        }
        
        if(!findEndCords(a,startCords,BotPlayerBoard)) continue loop1;
        else endCords = findEndCords(a,startCords,BotPlayerBoard);
        

        
        //then i assign the ship with its length to the tile - start tile will be the logic in the first comment of this function, end tile - third comment(also assign inbetween tiles to the BotPlayerBoard).
        BotPlayerBoardArrayUpdate(BotPlayerBoard,startCords,endCords);

        shipCreated=true;
        return {startCords,endCords};
    };
    
};

    const length5ship=new shipConstructor(RandomShipPosition(5,BotPlayerBoard),[],false);
    const length4ship=new shipConstructor(RandomShipPosition(4,BotPlayerBoard),[],false);
    const length3ship=new shipConstructor(RandomShipPosition(3,BotPlayerBoard),[],false);
    const length2ship=new shipConstructor(RandomShipPosition(2,BotPlayerBoard),[],false);
    const anotherLength2ship=new shipConstructor(RandomShipPosition(2,BotPlayerBoard),[],false);
    const length1ship=new shipConstructor(RandomShipPosition(1,BotPlayerBoard),[],false);
    const anotherLength1ship=new shipConstructor(RandomShipPosition(1,BotPlayerBoard),[],false);
    return {length5ship,length4ship,length3ship,length2ship,anotherLength2ship,length1ship,anotherLength1ship};
};
module.exports=ComputerChooseShips;

/***/ }),

/***/ "./src/FinishGame.js":
/*!***************************!*\
  !*** ./src/FinishGame.js ***!
  \***************************/
/***/ ((module) => {


function FinishGame(winner,body){
    if(document.querySelector('.gg-popup'))return;
    const popup=document.createElement('div');
    popup.classList.add('gg-popup');
    
    const popupText=document.createElement('div');
    popupText.classList.add('gg-popup-text');

    popupText.innerText='the '+winner+' has won this game!';

    const playAgain=document.createElement('button');
    playAgain.classList.add('play-again-btn');

    playAgain.innerText='Another round?';
    playAgain.addEventListener('click',function(){
        window.location.reload();
    })
    popupText.append(playAgain);
    popup.append(popupText);
    body.append(popup);
    setTimeout(() => {
        popup.style.opacity='1';
    }, 10);


}

module.exports=FinishGame;

/***/ }),

/***/ "./src/GameBoardArray.js":
/*!*******************************!*\
  !*** ./src/GameBoardArray.js ***!
  \*******************************/
/***/ ((module) => {

function GameBoardArrayUpdate(GameBoardArray,startCords,endCords){
    let direction='';
    let howManyTiles=0;
    if(startCords[0]-endCords[0]==0 && startCords[1]-endCords[1]==0){ // start and end coordinates are the same
        GameBoardArray.push([startCords[0],startCords[1]]);
        return GameBoardArray;
    }
    else if(startCords[0]-endCords[0]==0){


        //the ship moves vertically
        howManyTiles = Math.abs(startCords[1]-endCords[1])+1;
        if(startCords[1]-endCords[1]<0){
            direction='down';
        }
        else if(startCords[1]-endCords[1]>0){

            direction='up';
        } else {
            return 'smth with direction is bad';
        }
    }
    else if(startCords[1]-endCords[1]==0){

        //the ship moves horizontally
        howManyTiles = Math.abs(startCords[0]-endCords[0])+1;
        if(startCords[0]-endCords[0]<0){
            direction='right';

        }
        else if(startCords[0]-endCords[0]>0){

            direction='left';
        } else {
            return 'smth with direction is bad';
        }
    }
    else {
        return 'smth is bad';
    }



    for(let i=0;i<howManyTiles;i++){
        if(direction=='down'){
            GameBoardArray.push([startCords[0],startCords[1]+i]);
        } else if(direction=='up'){
            GameBoardArray.push([startCords[0],startCords[1]-i]);
        } else if(direction=='right'){
            GameBoardArray.push([startCords[0]+i,startCords[1]]);
        } else if(direction=='left'){
            GameBoardArray.push([startCords[0]-i,startCords[1]]);
        } else {
            return 'smth with pushing into gameboardarray is bad';
        }

    }
    return GameBoardArray;
}
module.exports=GameBoardArrayUpdate;

/***/ }),

/***/ "./src/Overlay.js":
/*!************************!*\
  !*** ./src/Overlay.js ***!
  \************************/
/***/ ((module) => {

// these two variables help determine when to shop the explanation overlay.
let newShip=true;
let endTile=false;
let overlayTime=2000;
let overlayStartTime = 200;

function overlay(playerBoard,body){
    const overlay=document.createElement('div');
    overlay.classList.add('ship-overlay');

    if(playerBoard.length==0){
    // Starting overlay loads when the player ship choosing window loads
        return setTimeout(() => { 
            overlay.innerText='Place 2 ships of length 1';
            body.append(overlay);
            setTimeout(() => {
                overlay.style.opacity='1';
            }, 10);
            setTimeout(() => {
                overlay.style.opacity='0';
            }, overlayTime);
            setTimeout(() => {
                overlay.remove();
            }, overlayTime+500);
        }, overlayStartTime);
    } else if(playerBoard.length==2){
        // Loads when first 2 ships of length 1 are placed - indicates that next 2 ships should be of length 2
        if(newShip!=false){

        newShip=false;
        // console.log(newShip);
        return setTimeout(() => {
            overlay.innerText='Place 2 ships of length 2';
            body.append(overlay);
            setTimeout(() => {
                overlay.style.opacity='1';
            }, 10);
            setTimeout(() => {
                overlay.style.opacity='0';
            }, overlayTime);
            setTimeout(() => {
                overlay.remove();
            }, overlayTime+500);
        }, overlayStartTime);
    }
    } else if(playerBoard.length==3){
        // Prepares for the next overlay(1 ship of length 3)
        newShip=true;
    } else if(playerBoard.length==4){
    // Loads when 2 ships of length 2 are placed - indicates that next 1 ship should be of length 3

        if(newShip!=false){
            newShip=false;
            return setTimeout(() => {
                overlay.innerText='Place 1 ship of length 3';
                body.append(overlay);
                setTimeout(() => {
                    overlay.style.opacity='1';
                }, 10);
                setTimeout(() => {
                    overlay.style.opacity='0';
                }, overlayTime);
                setTimeout(() => {
                    overlay.remove();
                }, overlayTime+500);
            }, overlayStartTime);
        }

    } else if(playerBoard.length==5){
        // Loads when ship of length 3 is placed - indicates that next ship should be of length 4
        newShip=true;
        if(endTile==true){ // additional step for figuring out if the click of a button(when this function gets called) is on the start of the coords or the end.
            endTile=false;
            return;
        }
        if(newShip!=false){
            newShip=false;
            endTile=true;
            return setTimeout(() => {
                overlay.innerText='Place 1 ship of length 4';
                body.append(overlay);
                setTimeout(() => {
                    overlay.style.opacity='1';
                }, 10);
                setTimeout(() => {
                    overlay.style.opacity='0';
                }, overlayTime);
                setTimeout(() => {
                    overlay.remove();
                }, overlayTime+500);
            }, overlayStartTime);
        }
    } else if(playerBoard.length==6){
        // Loads when ship of length 4 is placed - indicates that next ship should be of length 5
        newShip=true;
        if(endTile==true){ // additional step for figuring out if the click of a button(when this function gets called) is on the start of the coords or the end.
            return;
        }
        if(newShip!=false){
            newShip=false;
            endTile=true;
            return setTimeout(() => {
                overlay.innerText='Place 1 ship of length 5';
                body.append(overlay);
                setTimeout(() => {
                    overlay.style.opacity='1';
                }, 10);
                setTimeout(() => {
                    overlay.style.opacity='0';
                }, overlayTime);
                setTimeout(() => {
                    overlay.remove();
                }, overlayTime+500);
            }, overlayStartTime);
        }
    }
}
module.exports=overlay;

/***/ }),

/***/ "./src/PlayerChooseShips.js":
/*!**********************************!*\
  !*** ./src/PlayerChooseShips.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const shipConstructor=__webpack_require__(/*! ./shipCreation.js */ "./src/shipCreation.js");
const GameBoardArrayUpdate=__webpack_require__(/*! ./GameBoardArray.js */ "./src/GameBoardArray.js");
const UIplayerChooseShipsResponse=__webpack_require__(/*! ./UIplayerChooseShipsResponse.js */ "./src/UIplayerChooseShipsResponse.js");



let tile=0; // 0 - startCoords, 1 - endCoords
let startCords;
function playerChooseShips(coordinates,GameBoard,playerBoard){

    if(playerBoard.length<7){ // max ships that can be occupied by the player

        // current clicked boxes coords
        let X = parseInt(coordinates[0]);
        let Y = parseInt(coordinates[1]);
        let coords=[X,Y];

        if(playerBoard.length==0 || playerBoard.length==1){ // works if first or second ship is beeing created(both are 1 length)
            startCords=coords;
            endCords=coords;
            playerBoard.push(new shipConstructor({startCords,endCords},[],false));
            GameBoardArrayUpdate(GameBoard,coords,coords);
            UIplayerChooseShipsResponse(playerBoard);
            return;
        }
        if(playerBoard.length==2 || playerBoard.length==3){ // works if third or fourth ship is beeing created(both are 2 length)
            if(tile==0){ // check if it is the startCoords of the ship

                startCords=coords;
                tile++;
               
                return;

            } else if(tile==1){ // check if it is the endCoords of the ship

                tile=0;
                let endCords=coords;
                playerBoard.push(new shipConstructor({startCords,endCords},[],false));
                GameBoardArrayUpdate(GameBoard,startCords,endCords);
                UIplayerChooseShipsResponse(playerBoard);
                return;
            }
        }
        if(playerBoard.length==4){ // fifth ship(length 3)
            if(tile==0){
                startCords=coords;
                tile++;

                return;

            } else if(tile==1){

                tile=0;
                let endCords=coords;

                playerBoard.push(new shipConstructor({startCords,endCords},[],false));
                GameBoardArrayUpdate(GameBoard,startCords,endCords);
                UIplayerChooseShipsResponse(playerBoard);
                return;

            }
        }
        if(playerBoard.length==5){ // sixth ship(length 4)
            if(tile==0){
                startCords=coords;
                tile++;
                return;

            } else if(tile==1){
                tile=0;
                let endCords=coords;

                playerBoard.push(new shipConstructor({startCords,endCords},[],false));
                GameBoardArrayUpdate(GameBoard,startCords,endCords);
                UIplayerChooseShipsResponse(playerBoard);
                return;
            }
        }
        if(playerBoard.length==6){ // seventh ship(length 5)
            if(tile==0){
                startCords=coords;
                tile++;
                return;

            } else if(tile==1){
                tile=0;
                let endCords=coords;

                playerBoard.push(new shipConstructor({startCords,endCords},[],false));
                GameBoardArrayUpdate(GameBoard,startCords,endCords);
                UIplayerChooseShipsResponse(playerBoard);
                return;

            }
        }
    
        

 
    }

    if(playerBoard.length==7){
        return console.log('FULL BOARD');
        // do something with the UI when max ships have been placed
    }

    return playerBoard;
    }


module.exports=playerChooseShips;




/***/ }),

/***/ "./src/UIplayerChooseShipsResponse.js":
/*!********************************************!*\
  !*** ./src/UIplayerChooseShipsResponse.js ***!
  \********************************************/
/***/ ((module) => {


function UIplayerChooseShipsResponse(playerBoard){

    let smallerCoord;

playerBoard.forEach(ship => {
    if((ship.Coordinates.endCords[0] == ship.Coordinates.startCords[0])&&(ship.Coordinates.endCords[1] == ship.Coordinates.startCords[1])){ // if ship is only 1 tile
        let tile=document.querySelector(`[data-coordinates="${ship.Coordinates.startCords[0]}${ship.Coordinates.startCords[1]}"]`); // get that tile
        tile.classList.add('ship');

    } else if(ship.Coordinates.endCords[0] == ship.Coordinates.startCords[0]){ // Xs are equal - ship is going vertically

        let tileQuantity = Math.abs(ship.Coordinates.endCords[1]-ship.Coordinates.startCords[1])+1;
        if(ship.Coordinates.endCords[1]<ship.Coordinates.startCords[1]) { // get the smallest value of the 2 that are different(Ys in this case)
            smallerCoord=ship.Coordinates.endCords[1];
        } else smallerCoord=ship.Coordinates.startCords[1];

        for(let i=0; i<tileQuantity; i++){ // go through all of the tiles that a ship class needs to be added
             let tile=document.querySelector(`[data-coordinates="${ship.Coordinates.startCords[0]}${smallerCoord+i}"]`);
             tile.classList.add('ship');

        }
    } else if(ship.Coordinates.endCords[1] == ship.Coordinates.startCords[1]){ // Ys are equal - ship is going horizontally

        let tileQuantity = Math.abs(ship.Coordinates.endCords[0]-ship.Coordinates.startCords[0])+1;
        if(ship.Coordinates.endCords[0]<ship.Coordinates.startCords[0]) {
            smallerCoord=ship.Coordinates.endCords[0];
        } else smallerCoord=ship.Coordinates.startCords[0];

        for(let i=0; i<tileQuantity; i++){
             let tile=document.querySelector(`[data-coordinates="${smallerCoord+i}${ship.Coordinates.startCords[1]}"]`);
             tile.classList.add('ship');
        }
    }
});

}

module.exports=UIplayerChooseShipsResponse;

/***/ }),

/***/ "./src/checkTheShip.js":
/*!*****************************!*\
  !*** ./src/checkTheShip.js ***!
  \*****************************/
/***/ ((module) => {



function checkTheShip(playerBoard,isShipGood,GameBoard){
    
// Should check if the ships are going the way they should - check if they are the length that they are supposed to be and check if they aren't going both horizontally and vertically

// Could have done this with a loop - note to self.

if(playerBoard.length==3){
    if(
        ( (playerBoard[2].Coordinates.startCords[0]==playerBoard[2].Coordinates.endCords[0]) &&
        ((Math.abs(playerBoard[2].Coordinates.startCords[1]-playerBoard[2].Coordinates.endCords[1]))+1 == 2 ) ) ||
        ( (playerBoard[2].Coordinates.startCords[1]==playerBoard[2].Coordinates.endCords[1]) &&
        ((Math.abs(playerBoard[2].Coordinates.startCords[0]-playerBoard[2].Coordinates.endCords[0]))+1 == 2 ) ) ){
            isShipGood=true;
    } else {
        isShipGood=false;
    }
}
if(playerBoard.length==4){
    if(
        ( (playerBoard[3].Coordinates.startCords[0]==playerBoard[3].Coordinates.endCords[0]) &&
        ((Math.abs(playerBoard[3].Coordinates.startCords[1]-playerBoard[3].Coordinates.endCords[1]))+1 == 2 ) ) ||
        ( (playerBoard[3].Coordinates.startCords[1]==playerBoard[3].Coordinates.endCords[1]) &&
        ((Math.abs(playerBoard[3].Coordinates.startCords[0]-playerBoard[3].Coordinates.endCords[0]))+1 == 2 ) ) ){
            isShipGood=true;
    } else {
        isShipGood=false;
    }
}
if(playerBoard.length==5){
    if(
        ( (playerBoard[4].Coordinates.startCords[0]==playerBoard[4].Coordinates.endCords[0]) &&
        ((Math.abs(playerBoard[4].Coordinates.startCords[1]-playerBoard[4].Coordinates.endCords[1]))+1 == 3 ) ) ||
        ( (playerBoard[4].Coordinates.startCords[1]==playerBoard[4].Coordinates.endCords[1]) &&
        ((Math.abs(playerBoard[4].Coordinates.startCords[0]-playerBoard[4].Coordinates.endCords[0]))+1 == 3 ) ) ){
            isShipGood=true;
    } else {
        isShipGood=false;
    }
}
if(playerBoard.length==6){
    if(
        ( (playerBoard[5].Coordinates.startCords[0]==playerBoard[5].Coordinates.endCords[0]) &&
        ((Math.abs(playerBoard[5].Coordinates.startCords[1]-playerBoard[5].Coordinates.endCords[1]))+1 == 4 ) ) ||
        ( (playerBoard[5].Coordinates.startCords[1]==playerBoard[5].Coordinates.endCords[1]) &&
        ((Math.abs(playerBoard[5].Coordinates.startCords[0]-playerBoard[5].Coordinates.endCords[0]))+1 == 4 ) ) ){
            isShipGood=true;
    } else {
        isShipGood=false;
    }
}
if(playerBoard.length==7){
    if(
        ( (playerBoard[6].Coordinates.startCords[0]==playerBoard[6].Coordinates.endCords[0]) &&
        ((Math.abs(playerBoard[6].Coordinates.startCords[1]-playerBoard[6].Coordinates.endCords[1]))+1 == 5 ) ) ||
        ( (playerBoard[6].Coordinates.startCords[1]==playerBoard[6].Coordinates.endCords[1]) &&
        ((Math.abs(playerBoard[6].Coordinates.startCords[0]-playerBoard[6].Coordinates.endCords[0]))+1 == 5 ) ) ){
            isShipGood=true;
    } else {
        isShipGood=false;
    }
}


// check if there are any 2 exact tiles in GameBoard array - it means ships are overlapping
for(let i=0;i<GameBoard.length;i++){
    for(let j=0;j<GameBoard.length;j++){
        if(GameBoard[i][0]==GameBoard[j][0] && GameBoard[i][1]==GameBoard[j][1] && i!=j){
            return isShipGood=false;
        }
    }
}



return isShipGood;

}

module.exports=checkTheShip;

/***/ }),

/***/ "./src/shipCreation.js":
/*!*****************************!*\
  !*** ./src/shipCreation.js ***!
  \*****************************/
/***/ ((module) => {


function shipConstructor(Coordinates,hitPosition,sunk){
    this.Coordinates=Coordinates;
    this.hitPosition=hitPosition;
    this.sunk=sunk;
};
shipConstructor.prototype.AllCoordinates=function(){ // gets all the coordinates between start and end positions
    const allCoordinates=[];

    if(Math.abs(this.Coordinates.endCords[0]-this.Coordinates.startCords[0])==0){
        // vertical ship
        const length=Math.abs(this.Coordinates.endCords[1]-this.Coordinates.startCords[1])+1;
        let longerCoordinate=0;
        if(this.Coordinates.endCords[1]>this.Coordinates.startCords[1]){longerCoordinate=this.Coordinates.endCords[1];}
        else{longerCoordinate=this.Coordinates.startCords[1]};
        for(let i=0;i<length;i++){
            allCoordinates.push([this.Coordinates.endCords[0],longerCoordinate-i]);
        }
    } else {
        // horizontal ship

        const length=Math.abs(this.Coordinates.endCords[0]-this.Coordinates.startCords[0])+1;
        let longerCoordinate=0;
        if(this.Coordinates.endCords[0]>this.Coordinates.startCords[0]){longerCoordinate=this.Coordinates.endCords[0];}
        else{longerCoordinate=this.Coordinates.startCords[0]};
        for(let i=0;i<length;i++){
            allCoordinates.push([longerCoordinate-i,this.Coordinates.endCords[1]]);
        }
    }
    return allCoordinates;
}



module.exports=shipConstructor;

/***/ }),

/***/ "./src/startGame.js":
/*!**************************!*\
  !*** ./src/startGame.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startGame)
/* harmony export */ });
const ComputerChooseShips = __webpack_require__(/*! ./ComputerChooseShips */ "./src/ComputerChooseShips.js");
const CheckHit = __webpack_require__(/*! ./CheckHit */ "./src/CheckHit.js");


function startGame(BotGameBoard,BotPlayerBoard,body,GameBoard,playerBoard){
    BotGameBoard = ComputerChooseShips(BotPlayerBoard);
    body.innerHTML='';
    const playerSide=document.createElement('div');
    playerSide.setAttribute('id','player-side');
    const computerSide=document.createElement('div');
    computerSide.setAttribute('id','computer-side');
    body.append(playerSide,computerSide);
    for(let i=1;i<=6;i++){
        for(let j=1;j<=6;j++){
            const playerBox=document.createElement('div');// player side boxes
            playerBox.setAttribute('data-coordinates',`${j}${i}`);
            GameBoard.forEach(element => {
                if(element[0]==j && element[1]==i){
                    playerBox.classList.add('ship'); // this means there is a part of a ship on that tile
                }
            });
            playerBox.classList.add('player-side-box');

            const computerBox=document.createElement('div'); // PC side boxes
            computerBox.setAttribute('data-coordinates',`${j}${i}`);
            const ClickedTileCoords=computerBox.dataset.coordinates;
            computerBox.classList.add('computer-side-box');
            function Check(){
                CheckHit(ClickedTileCoords,BotPlayerBoard,BotGameBoard,GameBoard,playerBoard,body); // checks players hit ...
                computerBox.removeEventListener('click',Check);
            }
            computerBox.addEventListener('click',Check)
            
            computerSide.append(computerBox);
            playerSide.append(playerBox);
        }
    };

    const explanationOverlay = document.createElement('div');
    explanationOverlay.classList.add('explanation-overlay');

    const EOtextDiv = document.createElement('div');
    EOtextDiv.classList.add('explanation-overlay-textDiv');
    // EO - explanation overlay
    const EOheader = document.createElement('p');
    EOheader.innerText=`It's fight time!`;
    const EOfirstText = document.createElement('p');
    EOfirstText.innerText = 'Your board is on the left, your enemies is on the right.';
    const EOsecondText = document.createElement('p');
    EOsecondText.innerText = 'On your board all hit tiles are gray. On your enemies board, missed hits are gray, accurate hits are light blue and destroyed ships are dark blue.';
    const EObutton = document.createElement('button');
    EObutton.innerText='Fight!';
    EObutton.classList.add('explanation-overlay-button');

    EOtextDiv.append(EOheader,EOfirstText,EOsecondText,EObutton);
    explanationOverlay.append(EOtextDiv);
    body.append(explanationOverlay);
    EObutton.addEventListener('click',function(){
        explanationOverlay.remove();
    })


    // const overlay=document.createElement('div');
    // overlay.classList.add('final-ship-overlay');

    // const overlayText=document.createElement('div');
    // overlayText.classList.add('final-ship-overlay-text');
    // overlayText.innerText='Start the game!';
    // overlay.append(overlayText);
    // setTimeout(() => {
    //     body.append(overlay);
    //     setTimeout(() => {
    //         overlay.style.opacity='0';
    //     }, 1500);
    //     setTimeout(() => {
    //         overlay.remove();
    //     }, 2000);
    // }, 0);

return BotGameBoard;
}

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_firstScreenStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/firstScreenStyle.css */ "./src/firstScreenStyle.css");
/* harmony import */ var _src_playerChooseShipsStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/playerChooseShipsStyle.css */ "./src/playerChooseShipsStyle.css");
/* harmony import */ var _src_Gameplay_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Gameplay.css */ "./src/Gameplay.css");
/* harmony import */ var _PlayerChooseShips_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerChooseShips.js */ "./src/PlayerChooseShips.js");
/* harmony import */ var _PlayerChooseShips_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PlayerChooseShips_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Overlay.js */ "./src/Overlay.js");
/* harmony import */ var _Overlay_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Overlay_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./startGame.js */ "./src/startGame.js");
/* harmony import */ var _checkTheShip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkTheShip.js */ "./src/checkTheShip.js");
/* harmony import */ var _checkTheShip_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_checkTheShip_js__WEBPACK_IMPORTED_MODULE_6__);








let GameBoard=[]; // this array will store players board
let playerBoard=[]; // this array will store players ships

let BotGameBoard=[]; // this array will store computers ships
let BotPlayerBoard=[]; // this array will store computers board
let isShipGood=true; // boolean will be set to false when a ship isn't the length its supposed to be or goes both vertically and horizontally

const body=document.querySelector('body'); // main body that will be manipulated when i need to load different screens

// starting screen elements
const firstScreen=document.querySelector('.content-first-screen');
const startBtn=document.querySelector('#start-game');
const contentPlayerChooseShips=document.createElement('div');

const board=document.createElement('div');
board.setAttribute('id','board');

for(let i=1;i<=6;i++){

    for(let j=1;j<=6;j++){

        const box=document.createElement('div');
        box.setAttribute('data-coordinates',`${j}${i}`);
        box.classList.add('box');
        box.addEventListener('click',function(){
            _PlayerChooseShips_js__WEBPACK_IMPORTED_MODULE_3___default()(this.dataset.coordinates,GameBoard,playerBoard); // updates playerBoard, GameBoard arrays and the UI inside
            isShipGood=_checkTheShip_js__WEBPACK_IMPORTED_MODULE_6___default()(playerBoard,isShipGood,GameBoard); // checks if ship placed by the player is placed by the rules
            if(isShipGood==false){ // throws an error if it isn't, restarts the window
                const error=document.createElement('div');
                error.classList.add('ship-overlay');
                error.style.opacity='1';
                error.style.backgroundColor='rgb(222, 96, 96)';
                error.innerText=`Follow the rules of ship creation - your ships can't go both horizontally and vertically, they must be the length specified and they can't overlap!`;
                body.append(error);
                setTimeout(() => {
                    window.location.reload();
                }, 6000);

                return;
                // Starts whole code all over again
            }
            _Overlay_js__WEBPACK_IMPORTED_MODULE_4___default()(playerBoard,body);
            if(playerBoard.length==7){
                BotGameBoard = (0,_startGame_js__WEBPACK_IMPORTED_MODULE_5__["default"])(BotGameBoard,BotPlayerBoard,body,GameBoard,playerBoard);
            }
        });
        
        board.append(box);
    }
}




contentPlayerChooseShips.classList.add('content-player-choose-ships');
contentPlayerChooseShips.append(board);


startBtn.addEventListener('click',function(){
    firstScreen.remove();

    const explanationOverlay = document.createElement('div');
    explanationOverlay.classList.add('explanation-overlay');

    const EOtextDiv = document.createElement('div');
    EOtextDiv.classList.add('explanation-overlay-textDiv');
    // EO - explanation overlay
    const EOheader = document.createElement('p');
    EOheader.innerText='Welcome to Battleships!';
    const EOfirstText = document.createElement('p');
    EOfirstText.innerText = 'This is a typical game of battleships - you try to shoot your enemies ships, your enemy tries to shoot yours.';
    const EOsecondText = document.createElement('p');
    EOsecondText.innerText = 'First of all, choose your board ships positions by following the overlays that popup.';
    const EObutton = document.createElement('button');
    EObutton.innerText='Continue';
    EObutton.classList.add('explanation-overlay-button');

    EOtextDiv.append(EOheader,EOfirstText,EOsecondText,EObutton);

    EObutton.addEventListener('click',function(){
        explanationOverlay.remove();
        _Overlay_js__WEBPACK_IMPORTED_MODULE_4___default()(playerBoard,body);
    })

    explanationOverlay.append(EOtextDiv);
    body.append(explanationOverlay);
    body.append(contentPlayerChooseShips);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBOzs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtB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O0FBRUE7QUFDQTtBQUNBLFFBQVEsa0RBQU87QUFDZixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVwbGF5LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZpcnN0U2NyZWVuU3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyQ2hvb3NlU2hpcHNTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZXBsYXkuY3NzPzUzNDQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9maXJzdFNjcmVlblN0eWxlLmNzcz9mOTE4Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyQ2hvb3NlU2hpcHNTdHlsZS5jc3M/ZjVmNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQ2hlY2tIaXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Db21wdXRlckF0dGFjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0NvbXB1dGVyQ2hvb3NlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9GaW5pc2hHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZUJvYXJkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9PdmVybGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyQ2hvb3NlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSXBsYXllckNob29zZVNoaXBzUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jaGVja1RoZVNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLXNpZGV7XFxuICAgIHdpZHRoOiA0MC41JTtcXG4gICAgaGVpZ2h0OiA3MiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMCwgMjEyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIvMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxufVxcbiNjb21wdXRlci1zaWRle1xcbiAgICB3aWR0aDogNDAuNSU7XFxuICAgIGhlaWdodDogNzIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCAxOTMsIDI1NSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyLzFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbn1cXG4ucGxheWVyLXNpZGUtYm94e1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuLnNoaXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcbi5jb21wdXRlci1zaWRlLWJveHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcbi5nZy1wb3B1cHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZ2ctcG9wdXAtdGV4dHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBkYXJrZ3JheTtcXG59XFxuLnBsYXktYWdhaW4tYnRue1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG5cXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XFxufVxcbi5wbGF5LWFnYWluLWJ0bjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0dhbWVwbGF5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsOERBQThEO0FBQ2xFO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsOERBQThEO0FBQ2xFO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUJBQWlCOztJQUVqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllci1zaWRle1xcbiAgICB3aWR0aDogNDAuNSU7XFxuICAgIGhlaWdodDogNzIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDAsIDIxMik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyLzFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbn1cXG4jY29tcHV0ZXItc2lkZXtcXG4gICAgd2lkdGg6IDQwLjUlO1xcbiAgICBoZWlnaHQ6IDcyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMTkzLCAyNTUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmci8xZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG59XFxuLnBsYXllci1zaWRlLWJveHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcbi5zaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbn1cXG4uY29tcHV0ZXItc2lkZS1ib3h7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4uZ2ctcG9wdXB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmdnLXBvcHVwLXRleHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgZGFya2dyYXk7XFxufVxcbi5wbGF5LWFnYWluLWJ0bntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbn1cXG4ucGxheS1hZ2Fpbi1idG46aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmNvbnRlbnQtZmlyc3Qtc2NyZWVue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcbi5jb250ZW50LWZpcnN0LXNjcmVlbiBoMXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4jc3RhcnQtZ2FtZXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDgsIDE0OCwgMTQ4KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IGdyYXk7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbn1cXG4jc3RhcnQtZ2FtZTpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMnB4IGdyYXk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcbiNzdGFydC1nYW1lOmZvY3Vze1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDUzLCA1Myk7XFxufVxcbi5leHBsYW5hdGlvbi1vdmVybGF5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGxhbmF0aW9uLW92ZXJsYXktdGV4dERpdntcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiBiZWlnZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZXhwbGFuYXRpb24tb3ZlcmxheS1idXR0b257XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDgsIDE0OCwgMTQ4KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IGdyYXk7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbn1cXG4uZXhwbGFuYXRpb24tb3ZlcmxheS1idXR0b246aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IDJweCBncmF5O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZmlyc3RTY3JlZW5TdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7O0FBRWI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxnQ0FBZ0M7O0lBRWhDLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxnQ0FBZ0M7O0lBRWhDLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5jb250ZW50LWZpcnN0LXNjcmVlbntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG4uY29udGVudC1maXJzdC1zY3JlZW4gaDF7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuI3N0YXJ0LWdhbWV7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ4LCAxNDgsIDE0OCk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCBncmF5O1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG59XFxuI3N0YXJ0LWdhbWU6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IDJweCBncmF5O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG4jc3RhcnQtZ2FtZTpmb2N1c3tcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCA1MywgNTMpO1xcbn1cXG4uZXhwbGFuYXRpb24tb3ZlcmxheXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5leHBsYW5hdGlvbi1vdmVybGF5LXRleHREaXZ7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTk1OTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogYmVpZ2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmV4cGxhbmF0aW9uLW92ZXJsYXktYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ4LCAxNDgsIDE0OCk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBncmF5O1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG59XFxuLmV4cGxhbmF0aW9uLW92ZXJsYXktYnV0dG9uOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAycHggZ3JheTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRlbnQtcGxheWVyLWNob29zZS1zaGlwc3tcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcbiNib2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIvMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIHdpZHRoOiA4MTNweDtcXG4gICAgaGVpZ2h0OiA4MTNweDtcXG4gICAgZ2FwOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG59XFxuLmJveHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMzMuNXB4O1xcbiAgICBoZWlnaHQ6IDEzMy41cHg7XFxufVxcbi5sZWZ0LXBhbmVse1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEzJTtcXG4gICAgaGVpZ2h0OiA4MTFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLnNoaXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcbi5zaGlwLW92ZXJsYXl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICB3aWR0aDogODE0cHg7XFxuICAgIGhlaWdodDogODE0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE3MSwgMTcxKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxufVxcbi5maW5hbC1zaGlwLW92ZXJsYXl7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbn1cXG4uZmluYWwtc2hpcC1vdmVybGF5LXRleHR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IGJlaWdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGRhcmtncmF5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGxheWVyQ2hvb3NlU2hpcHNTdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOERBQThEO0lBQzlELFlBQVk7SUFDWixhQUFhO0lBQ2IsTUFBTTtJQUNOLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50LXBsYXllci1jaG9vc2Utc2hpcHN7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG4jYm9hcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyLzFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICB3aWR0aDogODEzcHg7XFxuICAgIGhlaWdodDogODEzcHg7XFxuICAgIGdhcDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxufVxcbi5ib3h7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTMzLjVweDtcXG4gICAgaGVpZ2h0OiAxMzMuNXB4O1xcbn1cXG4ubGVmdC1wYW5lbHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMyU7XFxuICAgIGhlaWdodDogODExcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcbi5zaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbn1cXG4uc2hpcC1vdmVybGF5e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gICAgd2lkdGg6IDgxNHB4O1xcbiAgICBoZWlnaHQ6IDgxNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNzEsIDE3MSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4uZmluYWwtc2hpcC1vdmVybGF5e1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG59XFxuLmZpbmFsLXNoaXAtb3ZlcmxheS10ZXh0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiBiZWlnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBkYXJrZ3JheTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lcGxheS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVwbGF5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9maXJzdFNjcmVlblN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmlyc3RTY3JlZW5TdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxheWVyQ2hvb3NlU2hpcHNTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BsYXllckNob29zZVNoaXBzU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IENvbXB1dGVyQXR0YWNrID0gcmVxdWlyZSgnLi9Db21wdXRlckF0dGFjaycpO1xuY29uc3Qgc2hpcENvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9zaGlwQ3JlYXRpb24nKTtcbmNvbnN0IEZpbmlzaEdhbWUgPSByZXF1aXJlKFwiLi9GaW5pc2hHYW1lXCIpO1xuXG5sZXQgaGl0Q29vcmRpbmF0ZXM9MDtcbmxldCBpc0hpdD1mYWxzZTtcblxuZnVuY3Rpb24gQ2hlY2tIaXQoQ2xpY2tlZFRpbGVDb29yZHMsQm90UGxheWVyQm9hcmQsQm90R2FtZUJvYXJkLGdhbWVCb2FyZCxwbGF5ZXJCb2FyZCxib2R5KXtcbiAgICBpc0hpdD1mYWxzZTtcbiAgICBmb3IobGV0IHg9MDt4PEJvdFBsYXllckJvYXJkLmxlbmd0aDt4KyspeyAvLyBnb2VzIHRocm91Z2ggYWxsIDE4IFBDIHNpZGUgdGlsZXNcbiAgICAgICAgaWYoQm90UGxheWVyQm9hcmRbeF1bMF09PUNsaWNrZWRUaWxlQ29vcmRzWzBdICYmIEJvdFBsYXllckJvYXJkW3hdWzFdPT1DbGlja2VkVGlsZUNvb3Jkc1sxXSl7XG4gICAgICAgICAgICAvLyBmaW5kcyB0aGUgdGlsZSBmcm9tIEJvdFBsYXllckJvYXJkIHRoYXQgd2FzIGNsaWNrZWRcblxuICAgICAgICAgICAgY29uc3QgYm94ZXM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNvbXB1dGVyLXNpZGUtYm94YCk7IFxuICAgICAgICAgICAgZm9yKGxldCBpbmRleD0wO2luZGV4PGJveGVzLmxlbmd0aDtpbmRleCsrKXtcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBhcnJheSBlbGVtZW50IGlzIGZvdW5kLCBnbyB0aHJvdWdoIGFsbCB0aGUgUEMgc2lkZSB0aWxlc1xuXG4gICAgICAgICAgICAgICAgaWYoYm94ZXNbaW5kZXhdLmRhdGFzZXQuY29vcmRpbmF0ZXMgPT0gQ2xpY2tlZFRpbGVDb29yZHMpe1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBwYXNzZWQgaW4gY2xpY2tlZCB0aWxlIGNvb3JkaW5hdGVzIGZyb20gYWxsIG9mIHRoZSB0aWxlcyBhbmQgY2hhbmdlIHRoZSBjb2xvclxuICAgICAgICAgICAgICAgICAgICBoaXRDb29yZGluYXRlcysrO1xuICAgICAgICAgICAgICAgIGJveGVzW2luZGV4XS5zdHlsZS5iYWNrZ3JvdW5kPSdjb3JuZmxvd2VyYmx1ZSc7XG4gICAgICAgICAgICAgICAgaXNIaXQ9dHJ1ZTtcblxuICAgICAgICAgICAgICAgIEZpbmRIaXRTaGlwKENsaWNrZWRUaWxlQ29vcmRzLEJvdEdhbWVCb2FyZCxib2R5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZih4PT1Cb3RQbGF5ZXJCb2FyZC5sZW5ndGgtMSAmJiBpc0hpdD09ZmFsc2Upe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY29vcmRpbmF0ZXM9XCIke0NsaWNrZWRUaWxlQ29vcmRzWzBdfSR7Q2xpY2tlZFRpbGVDb29yZHNbMV19XCJdYCkuZm9yRWFjaChlbGVtZW50PT57XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNpZGUtYm94JykpZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kPSdkaW1ncmF5JztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29tcHV0ZXJBdHRhY2soZ2FtZUJvYXJkLHBsYXllckJvYXJkLGJvZHkpO1xuICAgXG59XG5cbmZ1bmN0aW9uIEZpbmRIaXRTaGlwKENsaWNrZWRUaWxlQ29vcmRzLEJvdEdhbWVCb2FyZCxib2R5KXtcbiAgICAvLyBmaW5kcyB0aGUgc2hpcCB0aGF0IHdhcyBjbGlja2VkIGFuZCBjaGVja3MgaWYgYWxsIG9mIHRoZSBzaGlwIHRpbGVzIGhhdmUgYmVlbiBjbGlja2VkKGlmIHNoaXAgaXMgc3VuaylcblxuICAgIGNvbnN0IGFycmF5PU9iamVjdC5lbnRyaWVzKEJvdEdhbWVCb2FyZCk7IC8vIDcgYXJyYXkgZWxlbWVudHNcbiAgICBhcnJheS5mb3JFYWNoKCh4LGluZGV4KSA9PiB7IC8vIGdvIHRocm91Z2ggYWxsIG9mIHRoZSBQQyBzaGlwc1xuICAgICAgICBhcnJheVtpbmRleF1bMV0uQWxsQ29vcmRpbmF0ZXMoKS5mb3JFYWNoKGVsZW1lbnQ9PnsgLy8gZ28gdGhyb3VnaCBlYWNoIHNoaXBzIGFsbCBjb29yZGluYXRlc1xuICAgICAgICAgICAgaWYoZWxlbWVudFswXT09Q2xpY2tlZFRpbGVDb29yZHNbMF0mJmVsZW1lbnRbMV09PUNsaWNrZWRUaWxlQ29vcmRzWzFdKXtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgY2xpY2tlZCBjb29yZGluYXRlcyBhbmQgYW55IHNoaXAgY29vcmRpbmF0ZXMgYXJlIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgQm90R2FtZUJvYXJkW2Ake2FycmF5W2luZGV4XVswXX1gXS5oaXRQb3NpdGlvbi5wdXNoKFtlbGVtZW50WzBdLGVsZW1lbnRbMV1dKTsgLy8gcHVzaCBpbiB0aGUgaGl0IHBvc2l0aW9uIHRvIHRoYXQgc2hpcFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoQm90R2FtZUJvYXJkW2Ake2FycmF5W2luZGV4XVswXX1gXS5oaXRQb3NpdGlvbi5sZW5ndGg9PUJvdEdhbWVCb2FyZFtgJHthcnJheVtpbmRleF1bMF19YF0uQWxsQ29vcmRpbmF0ZXMoKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIC8vIGlmIHNoaXBzIGhpdFBvc2l0aW9uIGFuZCBBbGxDb29yZGluYXRlcyBhcnJheXMgbGVuZ3RoIGlzIHRoZSBzYW1lLCBzaGlwIGlzIHN1bmtcbiAgICAgICAgICAgICAgICBCb3RHYW1lQm9hcmRbYCR7YXJyYXlbaW5kZXhdWzBdfWBdLkFsbENvb3JkaW5hdGVzKCkuZm9yRWFjaChlbGVtZW50PT57XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIHRpbGUgaW5lIHRoZSBnYW1lIHdpdGggY29ycmVzcG9uZGluZyBkYXRhLWNvb3JkaW5hdGVzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jb29yZGluYXRlcz1cIiR7ZWxlbWVudFswXX0ke2VsZW1lbnRbMV19XCJdYCkuZm9yRWFjaCh0aWxlPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAyIHRpbGVzIHdpdGggdGhlIHNhbWUgYXR0cmlidXRlIC0gc2VsZWN0IHRoZSBvbmUgb24gY29tcHV0ZXIgc2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNpZGUtYm94Jykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuc3R5bGUuYmFja2dyb3VuZD0nZGFya2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfSk7XG4gICAgXG4gICAgaWYoaGl0Q29vcmRpbmF0ZXM9PTE4KXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBGaW5pc2hHYW1lKCdwbGF5ZXInLGJvZHkpO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgICBcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cz1DaGVja0hpdDsiLCJjb25zdCBGaW5pc2hHYW1lID0gcmVxdWlyZShcIi4vRmluaXNoR2FtZVwiKTtcblxuXG5cbmxldCBhdHRhY2tlZFRpbGVzPVtdO1xubGV0IGhpdENvb3JkaW5hdGVzPTA7XG5cbmZ1bmN0aW9uIENvbXB1dGVyQXR0YWNrKGdhbWVCb2FyZCxwbGF5ZXJCb2FyZCxib2R5KXtcblxuICAgIC8vIGJhc2ljYWxseSB0aGlzIGlzIGp1c3QgZWFzeSBtb2RlIC0gdGhlIGJvdCBzZWxlY3RzIHRpbGVzIHJhbmRvbWx5LCBkb2VzbnQgbWF0dGVyIGlmIGhlIGhpdHMgYSBzaGlwXG4gICAgbGV0IHN1Y2Nlc2Z1bEF0dGFjaz1mYWxzZTtcblxuICAgIGxvb3AxOlxuICAgIHdoaWxlKHN1Y2Nlc2Z1bEF0dGFjaz09ZmFsc2Upe1xuICAgIC8vZmlyc3QgaSBjaG9vc2UgYSByYW5kb20gdGlsZSBvdXQgb2YgdGhlIDM2IHRpbGVzXG4gICAgbGV0IHJhbmRvbVRpbGVYPU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo1KzEpO1xuICAgIGxldCByYW5kb21UaWxlWT1NYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqNSsxKTtcbiAgICBsZXQgcmFuZG9tQ29vcmQ9W3JhbmRvbVRpbGVYLHJhbmRvbVRpbGVZXTtcblxuICAgIGxldCBsb29wQ2hlY2tlcjtcblxuICAgIGlmKGF0dGFja2VkVGlsZXMubGVuZ3RoPT0wKXtcbiAgICAgICAgYXR0YWNrZWRUaWxlcy5wdXNoKHJhbmRvbUNvb3JkKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYXR0YWNrZWRUaWxlcy5mb3JFYWNoKChlbGVtZW50LGluZGV4KT0+e1xuICAgICAgICAgICAgaWYoZWxlbWVudFswXT09cmFuZG9tQ29vcmRbMF0gJiYgZWxlbWVudFsxXT09cmFuZG9tQ29vcmRbMV0pbG9vcENoZWNrZXI9dHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgaWYoaW5kZXg9PWF0dGFja2VkVGlsZXMubGVuZ3RoLTEgJiYgbG9vcENoZWNrZXIhPXRydWUpYXR0YWNrZWRUaWxlcy5wdXNoKHJhbmRvbUNvb3JkKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaWYobG9vcENoZWNrZXI9PXRydWUpe1xuICAgICAgICBjb250aW51ZSBsb29wMTtcbiAgICB9XG5cbiAgICBjb25zdCB0aWxlcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jb29yZGluYXRlcz1cIiR7cmFuZG9tQ29vcmRbMF19JHtyYW5kb21Db29yZFsxXX1cImApOyAvLyAyIHRpbGVzIG9mIHRoZSBnaXZlbiBjb29yZGluYXRlcyAtIG9uIHBsYXllciBhbmQgY29tcHV0ZXIgc2lkZXNcbiAgICB0aWxlcy5mb3JFYWNoKGVsZW1lbnQ9PntcbiAgICAgICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci1zaWRlLWJveCcpKWVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZD0nZGltZ3JheSc7IC8vIGdldCB0aGUgb25lIG9uIHBsYXllciBzaWRlXG4gICAgfSlcbiAgICBwbGF5ZXJCb2FyZC5mb3JFYWNoKHNoaXA9PntcbiAgICAgICAgc2hpcC5BbGxDb29yZGluYXRlcygpLmZvckVhY2goc2hpcENvb3JkPT57XG4gICAgICAgICAgICBpZihzaGlwQ29vcmRbMF09PXJhbmRvbUNvb3JkWzBdICYmIHNoaXBDb29yZFsxXT09cmFuZG9tQ29vcmRbMV0pe1xuICAgICAgICAgICAgICAgIGhpdENvb3JkaW5hdGVzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmKGhpdENvb3JkaW5hdGVzPT0xOCl7XG4gICAgICAgIEZpbmlzaEdhbWUoJ2NvbXB1dGVyJyxib2R5KTtcbiAgICB9XG4gICAgc3VjY2VzZnVsQXR0YWNrPXRydWU7XG59XG5cbn1cbm1vZHVsZS5leHBvcnRzPUNvbXB1dGVyQXR0YWNrOyAiLCJjb25zdCBzaGlwQ29uc3RydWN0b3I9cmVxdWlyZSgnLi9zaGlwQ3JlYXRpb24uanMnKTtcbmNvbnN0IEJvdFBsYXllckJvYXJkQXJyYXlVcGRhdGU9cmVxdWlyZSgnLi9HYW1lQm9hcmRBcnJheScpO1xuXG5mdW5jdGlvbiBDb21wdXRlckNob29zZVNoaXBzKEJvdFBsYXllckJvYXJkKXtcblxuZnVuY3Rpb24gUmFuZG9tU2hpcFBvc2l0aW9uKGEsQm90UGxheWVyQm9hcmQpe1xuICAgIGxldCBzaGlwQ3JlYXRlZD1mYWxzZTtcbiAgICBsb29wMTpcbiAgICB3aGlsZShzaGlwQ3JlYXRlZD09ZmFsc2Upe1xuICAgIFxuXG4gICAgICAgIGxldCBlbmRDb3JkcztcbiAgICAgICAgLy9maXJzdCBpIGNob29zZSBhIHJhbmRvbSB0aWxlIG91dCBvZiB0aGUgMzYgdGlsZXNcbiAgICAgICAgbGV0IHJhbmRvbVRpbGVYPU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo1KzEpO1xuICAgICAgICBsZXQgcmFuZG9tVGlsZVk9TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjUrMSk7XG5cbiAgICAgICAgc3RhcnRDb3Jkcz1bcmFuZG9tVGlsZVgscmFuZG9tVGlsZVldO1xuXG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IHRpbGUgPSAwOyB0aWxlIDwgQm90UGxheWVyQm9hcmQubGVuZ3RoOyB0aWxlKyspe1xuICAgICAgICAgICAgaWYoKEJvdFBsYXllckJvYXJkW3RpbGVdWzBdPT1zdGFydENvcmRzWzBdICYmIEJvdFBsYXllckJvYXJkW3RpbGVdWzFdPT1zdGFydENvcmRzWzFdKSl7XG4gICAgICAgICAgICAgICAgY29udGludWUgbG9vcDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vdGhlbiBpIGNoZWNrIGlmIGluIGFueSBkaXJlY3Rpb24gdGhlcmUgYXJlIGVub3VnaCB0aWxlcyh0aGUgKGEpIHZhcmlhYmxlIGdpdmVuIHRvIHRoZSBmdW5jdGlvbiBpcyB0aGUgbGVuZ3RoKS4gZmlyc3QgY2hlY2sgZ29pbmcgZG93biwgdGhlbiBsZWZ0LCB0aGVuIHVwLCB0aGVuIHJpZ2h0KHRoaXMgaXNuJ3QgcmVhbGx5IHJhbmRvbSAtIHlvdSBhcmUgbW9yZSBsaWtlbHkgdG8gZmluZCBhIHNoaXAgYXQgdGhlIGJvdHRvbSBwb3J0aW9uIG9mIHRoZSBib2FyZCwgYnV0IGl0IHdpbGwgZG8pXG4gICAgICAgIC8vIElGIE5PVDogR08gQkFDSyBUTyBUSEUgV0hJTEUgTE9PUFxuICAgICAgICBmdW5jdGlvbiBmaW5kRW5kQ29yZHMoYSxzdGFydENvcmRzLEJvdFBsYXllckJvYXJkKXtcblxuICAgICAgICAgICAgZnVuY3Rpb24gRG93bigpe1xuXG4gICAgICAgICAgICAgICAgaWYoKDE8PXN0YXJ0Q29yZHNbMV0rKGEtMSkgJiYgc3RhcnRDb3Jkc1sxXSsoYS0xKTw9Nikpey8vIGNoZWNrIGlmIHRoZSBib2FyZCBkb2Vzbid0IGVuZCB3aGVyZSBpIHdhbnQgdG8gcGxhY2UgbXkgZW5kQ29yZHMgRE9XTlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVuIGNoZWNrIGlmIHRoZSB0aWxlcyBiZXR3ZWVuIHN0YXJ0IGFuZCBlbmQgY29yZHMgYXJlIGZyZWUgYW5kIHRoZSBlbmQgY29yZHMgdGlsZSBpcyBmcmVlXG5cbiAgICAgICAgICAgICAgICAgICAgaWYoQm90UGxheWVyQm9hcmQubGVuZ3RoPDEpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3N0YXJ0Q29yZHNbMF0sc3RhcnRDb3Jkc1sxXSsoYS0xKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgdGlsZSA9IDA7IHRpbGUgPCBCb3RQbGF5ZXJCb2FyZC5sZW5ndGg7IHRpbGUrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihnb2luZ0Rvd24odGlsZSxhKSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aWxlPT1Cb3RQbGF5ZXJCb2FyZC5sZW5ndGgtMSkgcmV0dXJuIGdvaW5nRG93bih0aWxlLGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExlZnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZnVuY3Rpb24gTGVmdCgpe1xuICAgICAgICAgICAgICAgIGlmKDE8PXN0YXJ0Q29yZHNbMF0tKGEtMSkgJiYgc3RhcnRDb3Jkc1swXS0oYS0xKTw9Nil7IC8vIENoZWNraW5nIG90aGVyIGVuZENvcmRzIC0gZ29pbmcgbGVmdFxuXG4gICAgICAgICAgICAgICAgICAgIGlmKEJvdFBsYXllckJvYXJkLmxlbmd0aDwxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbc3RhcnRDb3Jkc1swXS0oYS0xKSxzdGFydENvcmRzWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgdGlsZSA9IDA7IHRpbGUgPCBCb3RQbGF5ZXJCb2FyZC5sZW5ndGg7IHRpbGUrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihnb2luZ0xlZnQodGlsZSxhKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGlsZT09Qm90UGxheWVyQm9hcmQubGVuZ3RoLTEpIHJldHVybiBnb2luZ0xlZnQodGlsZSxhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBVcCgpe1xuICAgICAgICAgICAgICAgIGlmKDE8PXN0YXJ0Q29yZHNbMV0tKGEtMSkgJiYgc3RhcnRDb3Jkc1sxXS0oYS0xKTw9Nil7IC8vIENoZWNraW5nIG90aGVyIGVuZENvcmRzIC0gZ29pbmcgdXBcblxuICAgICAgICAgICAgICAgICAgICBpZihCb3RQbGF5ZXJCb2FyZC5sZW5ndGg8MSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3N0YXJ0Q29yZHNbMF0sc3RhcnRDb3Jkc1sxXS0oYS0xKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgdGlsZSA9IDA7IHRpbGUgPCBCb3RQbGF5ZXJCb2FyZC5sZW5ndGg7IHRpbGUrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihnb2luZ1VwKHRpbGUsYSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRpbGU9PUJvdFBsYXllckJvYXJkLmxlbmd0aC0xKSByZXR1cm4gZ29pbmdVcCh0aWxlLGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIFJpZ2h0KCl7XG4gICAgICAgICAgICAgICAgaWYoMTw9c3RhcnRDb3Jkc1swXSsoYS0xKSAmJiBzdGFydENvcmRzWzBdKyhhLTEpPD02KXsgLy8gQ2hlY2tpbmcgb3RoZXIgZW5kQ29yZHMgLSBnb2luZyByaWdodFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoQm90UGxheWVyQm9hcmQubGVuZ3RoPDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtzdGFydENvcmRzWzBdKyhhLTEpLHN0YXJ0Q29yZHNbMV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB0aWxlID0gMDsgdGlsZSA8IEJvdFBsYXllckJvYXJkLmxlbmd0aDsgdGlsZSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdvaW5nUmlnaHQodGlsZSxhKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGlsZT09Qm90UGxheWVyQm9hcmQubGVuZ3RoLTEpIHJldHVybiBnb2luZ1JpZ2h0KHRpbGUsYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPY2N1cGllZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9jY3VwaWVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gT2NjdXBpZWQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBEb3duKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdvaW5nRG93bih0aWxlLGEpeyAvLyBjaGVja2luZyBpZiBlbmQgY29vcmRzIGFyZSBvY2N1cGllZCBhbmQgaWYgYW55IHRpbGVzIGJldHdlZW4gc3RhcnQgYW5kIGVuZCBjb29yZHMgYXJlIG9jY3VwaWVkXG5cbiAgICAgICAgICAgIGlmKCgoc3RhcnRDb3Jkc1sxXSsoYS0xKT09Qm90UGxheWVyQm9hcmRbdGlsZV1bMV0pICYmIChzdGFydENvcmRzWzBdPT1Cb3RQbGF5ZXJCb2FyZFt0aWxlXVswXSkpfHwgLy8gVElLUkFJIEdFUkFJXG4gICAgICAgICAgICAgICAoQm90UGxheWVyQm9hcmRbdGlsZV1bMV0+PXN0YXJ0Q29yZHNbMV0gJiYgQm90UGxheWVyQm9hcmRbdGlsZV1bMV08PXN0YXJ0Q29yZHNbMV0rKGEtMSkgJiYgc3RhcnRDb3Jkc1swXT09Qm90UGxheWVyQm9hcmRbdGlsZV1bMF0pKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZENvcmRzPVtzdGFydENvcmRzWzBdLHN0YXJ0Q29yZHNbMV0rKGEtMSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ29pbmdMZWZ0KHRpbGUsYSl7IC8vIGFmdGVyIGdvaW5nIGRvd24gYW5kIGl0IG5vdCBiZWVpbmcgdmlhYmxlLCBjaGVja2luZyBpZiBnb2luZyBsZWZ0IGlzIG9rXG5cbiAgICAgICAgICAgIGlmKDE8PXN0YXJ0Q29yZHNbMF0tKGEtMSkgJiYgc3RhcnRDb3Jkc1swXS0oYS0xKTw9Nil7XG5cbiAgICAgICAgICAgICAgICBpZigoKHN0YXJ0Q29yZHNbMF0tKGEtMSk9PUJvdFBsYXllckJvYXJkW3RpbGVdWzBdKSAmJiAoc3RhcnRDb3Jkc1sxXT09Qm90UGxheWVyQm9hcmRbdGlsZV1bMV0pKXx8XG4gICAgICAgICAgICAgICAgKHN0YXJ0Q29yZHNbMF0+PUJvdFBsYXllckJvYXJkW3RpbGVdWzBdICYmIEJvdFBsYXllckJvYXJkW3RpbGVdWzBdPj1zdGFydENvcmRzWzBdLShhLTEpICYmIHN0YXJ0Q29yZHNbMV09PUJvdFBsYXllckJvYXJkW3RpbGVdWzFdKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIGVuZENvcmRzPVtzdGFydENvcmRzWzBdLShhLTEpLHN0YXJ0Q29yZHNbMV1dOyAvLyBpZiB0aGlzIGlmIHN0YXRlbWVudCBpcyB0cnVlLCBpdCBtZWFucyB0aGF0IGVpdGhlciB0aGUgZW5kIGNvb3JkcyBhcmUgb2NjdXBpZWQgb3IgYW55IGNvb3JkaW5hdGUgaW5iZXR3ZWVuIHN0YXJ0IGFuZCBlbmQgY29vcmRzIGlzIG9jY3VwaWVkLiBUcnkgdG8gZ28gdXAuXG4gICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdvaW5nVXAodGlsZSxhKXsgLy8gVHJ5IGdvaW5nIHVwXG4gICAgICAgICAgICBpZigxPD1zdGFydENvcmRzWzFdLShhLTEpICYmIHN0YXJ0Q29yZHNbMV0tKGEtMSk8PTYpe1xuXG4gICAgICAgICAgICAgICAgaWYoKChzdGFydENvcmRzWzFdLShhLTEpPT1Cb3RQbGF5ZXJCb2FyZFt0aWxlXVsxXSkgJiYgKHN0YXJ0Q29yZHNbMF09PUJvdFBsYXllckJvYXJkW3RpbGVdWzBdKSl8fFxuICAgICAgICAgICAgICAgIChzdGFydENvcmRzWzFdPj1Cb3RQbGF5ZXJCb2FyZFt0aWxlXVsxXSAmJiBCb3RQbGF5ZXJCb2FyZFt0aWxlXVsxXT49c3RhcnRDb3Jkc1sxXS0oYS0xKSAgJiYgc3RhcnRDb3Jkc1swXT09Qm90UGxheWVyQm9hcmRbdGlsZV1bMF0pKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gZW5kQ29yZHM9W3N0YXJ0Q29yZHNbMF0sc3RhcnRDb3Jkc1sxXS0oYS0xKV07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdvaW5nUmlnaHQodGlsZSxhKXtcbiAgICAgICAgICAgIGlmKDE8PXN0YXJ0Q29yZHNbMF0rKGEtMSkgJiYgc3RhcnRDb3Jkc1swXSsoYS0xKTw9Nil7XG5cbiAgICAgICAgICAgICAgICBpZigoKHN0YXJ0Q29yZHNbMF0rKGEtMSk9PUJvdFBsYXllckJvYXJkW3RpbGVdWzBdKSAmJiAoc3RhcnRDb3Jkc1sxXT09Qm90UGxheWVyQm9hcmRbdGlsZV1bMV0pKXx8XG4gICAgICAgICAgICAgICAgKHN0YXJ0Q29yZHNbMF08PUJvdFBsYXllckJvYXJkW3RpbGVdWzBdICYmIEJvdFBsYXllckJvYXJkW3RpbGVdWzBdPD1zdGFydENvcmRzWzBdKyhhLTEpICYmIHN0YXJ0Q29yZHNbMV09PUJvdFBsYXllckJvYXJkW3RpbGVdWzFdKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIGVuZENvcmRzPVtzdGFydENvcmRzWzBdKyhhLTEpLHN0YXJ0Q29yZHNbMV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKCFmaW5kRW5kQ29yZHMoYSxzdGFydENvcmRzLEJvdFBsYXllckJvYXJkKSkgY29udGludWUgbG9vcDE7XG4gICAgICAgIGVsc2UgZW5kQ29yZHMgPSBmaW5kRW5kQ29yZHMoYSxzdGFydENvcmRzLEJvdFBsYXllckJvYXJkKTtcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIC8vdGhlbiBpIGFzc2lnbiB0aGUgc2hpcCB3aXRoIGl0cyBsZW5ndGggdG8gdGhlIHRpbGUgLSBzdGFydCB0aWxlIHdpbGwgYmUgdGhlIGxvZ2ljIGluIHRoZSBmaXJzdCBjb21tZW50IG9mIHRoaXMgZnVuY3Rpb24sIGVuZCB0aWxlIC0gdGhpcmQgY29tbWVudChhbHNvIGFzc2lnbiBpbmJldHdlZW4gdGlsZXMgdG8gdGhlIEJvdFBsYXllckJvYXJkKS5cbiAgICAgICAgQm90UGxheWVyQm9hcmRBcnJheVVwZGF0ZShCb3RQbGF5ZXJCb2FyZCxzdGFydENvcmRzLGVuZENvcmRzKTtcblxuICAgICAgICBzaGlwQ3JlYXRlZD10cnVlO1xuICAgICAgICByZXR1cm4ge3N0YXJ0Q29yZHMsZW5kQ29yZHN9O1xuICAgIH07XG4gICAgXG59O1xuXG4gICAgY29uc3QgbGVuZ3RoNXNoaXA9bmV3IHNoaXBDb25zdHJ1Y3RvcihSYW5kb21TaGlwUG9zaXRpb24oNSxCb3RQbGF5ZXJCb2FyZCksW10sZmFsc2UpO1xuICAgIGNvbnN0IGxlbmd0aDRzaGlwPW5ldyBzaGlwQ29uc3RydWN0b3IoUmFuZG9tU2hpcFBvc2l0aW9uKDQsQm90UGxheWVyQm9hcmQpLFtdLGZhbHNlKTtcbiAgICBjb25zdCBsZW5ndGgzc2hpcD1uZXcgc2hpcENvbnN0cnVjdG9yKFJhbmRvbVNoaXBQb3NpdGlvbigzLEJvdFBsYXllckJvYXJkKSxbXSxmYWxzZSk7XG4gICAgY29uc3QgbGVuZ3RoMnNoaXA9bmV3IHNoaXBDb25zdHJ1Y3RvcihSYW5kb21TaGlwUG9zaXRpb24oMixCb3RQbGF5ZXJCb2FyZCksW10sZmFsc2UpO1xuICAgIGNvbnN0IGFub3RoZXJMZW5ndGgyc2hpcD1uZXcgc2hpcENvbnN0cnVjdG9yKFJhbmRvbVNoaXBQb3NpdGlvbigyLEJvdFBsYXllckJvYXJkKSxbXSxmYWxzZSk7XG4gICAgY29uc3QgbGVuZ3RoMXNoaXA9bmV3IHNoaXBDb25zdHJ1Y3RvcihSYW5kb21TaGlwUG9zaXRpb24oMSxCb3RQbGF5ZXJCb2FyZCksW10sZmFsc2UpO1xuICAgIGNvbnN0IGFub3RoZXJMZW5ndGgxc2hpcD1uZXcgc2hpcENvbnN0cnVjdG9yKFJhbmRvbVNoaXBQb3NpdGlvbigxLEJvdFBsYXllckJvYXJkKSxbXSxmYWxzZSk7XG4gICAgcmV0dXJuIHtsZW5ndGg1c2hpcCxsZW5ndGg0c2hpcCxsZW5ndGgzc2hpcCxsZW5ndGgyc2hpcCxhbm90aGVyTGVuZ3RoMnNoaXAsbGVuZ3RoMXNoaXAsYW5vdGhlckxlbmd0aDFzaGlwfTtcbn07XG5tb2R1bGUuZXhwb3J0cz1Db21wdXRlckNob29zZVNoaXBzOyIsIlxuZnVuY3Rpb24gRmluaXNoR2FtZSh3aW5uZXIsYm9keSl7XG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdnLXBvcHVwJykpcmV0dXJuO1xuICAgIGNvbnN0IHBvcHVwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2dnLXBvcHVwJyk7XG4gICAgXG4gICAgY29uc3QgcG9wdXBUZXh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwVGV4dC5jbGFzc0xpc3QuYWRkKCdnZy1wb3B1cC10ZXh0Jyk7XG5cbiAgICBwb3B1cFRleHQuaW5uZXJUZXh0PSd0aGUgJyt3aW5uZXIrJyBoYXMgd29uIHRoaXMgZ2FtZSEnO1xuXG4gICAgY29uc3QgcGxheUFnYWluPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHBsYXlBZ2Fpbi5jbGFzc0xpc3QuYWRkKCdwbGF5LWFnYWluLWJ0bicpO1xuXG4gICAgcGxheUFnYWluLmlubmVyVGV4dD0nQW5vdGhlciByb3VuZD8nO1xuICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pXG4gICAgcG9wdXBUZXh0LmFwcGVuZChwbGF5QWdhaW4pO1xuICAgIHBvcHVwLmFwcGVuZChwb3B1cFRleHQpO1xuICAgIGJvZHkuYXBwZW5kKHBvcHVwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcG9wdXAuc3R5bGUub3BhY2l0eT0nMSc7XG4gICAgfSwgMTApO1xuXG5cbn1cblxubW9kdWxlLmV4cG9ydHM9RmluaXNoR2FtZTsiLCJmdW5jdGlvbiBHYW1lQm9hcmRBcnJheVVwZGF0ZShHYW1lQm9hcmRBcnJheSxzdGFydENvcmRzLGVuZENvcmRzKXtcbiAgICBsZXQgZGlyZWN0aW9uPScnO1xuICAgIGxldCBob3dNYW55VGlsZXM9MDtcbiAgICBpZihzdGFydENvcmRzWzBdLWVuZENvcmRzWzBdPT0wICYmIHN0YXJ0Q29yZHNbMV0tZW5kQ29yZHNbMV09PTApeyAvLyBzdGFydCBhbmQgZW5kIGNvb3JkaW5hdGVzIGFyZSB0aGUgc2FtZVxuICAgICAgICBHYW1lQm9hcmRBcnJheS5wdXNoKFtzdGFydENvcmRzWzBdLHN0YXJ0Q29yZHNbMV1dKTtcbiAgICAgICAgcmV0dXJuIEdhbWVCb2FyZEFycmF5O1xuICAgIH1cbiAgICBlbHNlIGlmKHN0YXJ0Q29yZHNbMF0tZW5kQ29yZHNbMF09PTApe1xuXG5cbiAgICAgICAgLy90aGUgc2hpcCBtb3ZlcyB2ZXJ0aWNhbGx5XG4gICAgICAgIGhvd01hbnlUaWxlcyA9IE1hdGguYWJzKHN0YXJ0Q29yZHNbMV0tZW5kQ29yZHNbMV0pKzE7XG4gICAgICAgIGlmKHN0YXJ0Q29yZHNbMV0tZW5kQ29yZHNbMV08MCl7XG4gICAgICAgICAgICBkaXJlY3Rpb249J2Rvd24nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc3RhcnRDb3Jkc1sxXS1lbmRDb3Jkc1sxXT4wKXtcblxuICAgICAgICAgICAgZGlyZWN0aW9uPSd1cCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3NtdGggd2l0aCBkaXJlY3Rpb24gaXMgYmFkJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKHN0YXJ0Q29yZHNbMV0tZW5kQ29yZHNbMV09PTApe1xuXG4gICAgICAgIC8vdGhlIHNoaXAgbW92ZXMgaG9yaXpvbnRhbGx5XG4gICAgICAgIGhvd01hbnlUaWxlcyA9IE1hdGguYWJzKHN0YXJ0Q29yZHNbMF0tZW5kQ29yZHNbMF0pKzE7XG4gICAgICAgIGlmKHN0YXJ0Q29yZHNbMF0tZW5kQ29yZHNbMF08MCl7XG4gICAgICAgICAgICBkaXJlY3Rpb249J3JpZ2h0JztcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc3RhcnRDb3Jkc1swXS1lbmRDb3Jkc1swXT4wKXtcblxuICAgICAgICAgICAgZGlyZWN0aW9uPSdsZWZ0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnc210aCB3aXRoIGRpcmVjdGlvbiBpcyBiYWQnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJ3NtdGggaXMgYmFkJztcbiAgICB9XG5cblxuXG4gICAgZm9yKGxldCBpPTA7aTxob3dNYW55VGlsZXM7aSsrKXtcbiAgICAgICAgaWYoZGlyZWN0aW9uPT0nZG93bicpe1xuICAgICAgICAgICAgR2FtZUJvYXJkQXJyYXkucHVzaChbc3RhcnRDb3Jkc1swXSxzdGFydENvcmRzWzFdK2ldKTtcbiAgICAgICAgfSBlbHNlIGlmKGRpcmVjdGlvbj09J3VwJyl7XG4gICAgICAgICAgICBHYW1lQm9hcmRBcnJheS5wdXNoKFtzdGFydENvcmRzWzBdLHN0YXJ0Q29yZHNbMV0taV0pO1xuICAgICAgICB9IGVsc2UgaWYoZGlyZWN0aW9uPT0ncmlnaHQnKXtcbiAgICAgICAgICAgIEdhbWVCb2FyZEFycmF5LnB1c2goW3N0YXJ0Q29yZHNbMF0raSxzdGFydENvcmRzWzFdXSk7XG4gICAgICAgIH0gZWxzZSBpZihkaXJlY3Rpb249PSdsZWZ0Jyl7XG4gICAgICAgICAgICBHYW1lQm9hcmRBcnJheS5wdXNoKFtzdGFydENvcmRzWzBdLWksc3RhcnRDb3Jkc1sxXV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdzbXRoIHdpdGggcHVzaGluZyBpbnRvIGdhbWVib2FyZGFycmF5IGlzIGJhZCc7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gR2FtZUJvYXJkQXJyYXk7XG59XG5tb2R1bGUuZXhwb3J0cz1HYW1lQm9hcmRBcnJheVVwZGF0ZTsiLCIvLyB0aGVzZSB0d28gdmFyaWFibGVzIGhlbHAgZGV0ZXJtaW5lIHdoZW4gdG8gc2hvcCB0aGUgZXhwbGFuYXRpb24gb3ZlcmxheS5cbmxldCBuZXdTaGlwPXRydWU7XG5sZXQgZW5kVGlsZT1mYWxzZTtcbmxldCBvdmVybGF5VGltZT0yMDAwO1xubGV0IG92ZXJsYXlTdGFydFRpbWUgPSAyMDA7XG5cbmZ1bmN0aW9uIG92ZXJsYXkocGxheWVyQm9hcmQsYm9keSl7XG4gICAgY29uc3Qgb3ZlcmxheT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3NoaXAtb3ZlcmxheScpO1xuXG4gICAgaWYocGxheWVyQm9hcmQubGVuZ3RoPT0wKXtcbiAgICAvLyBTdGFydGluZyBvdmVybGF5IGxvYWRzIHdoZW4gdGhlIHBsYXllciBzaGlwIGNob29zaW5nIHdpbmRvdyBsb2Fkc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgICAgICAgb3ZlcmxheS5pbm5lclRleHQ9J1BsYWNlIDIgc2hpcHMgb2YgbGVuZ3RoIDEnO1xuICAgICAgICAgICAgYm9keS5hcHBlbmQob3ZlcmxheSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLm9wYWNpdHk9JzEnO1xuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5vcGFjaXR5PScwJztcbiAgICAgICAgICAgIH0sIG92ZXJsYXlUaW1lKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICB9LCBvdmVybGF5VGltZSs1MDApO1xuICAgICAgICB9LCBvdmVybGF5U3RhcnRUaW1lKTtcbiAgICB9IGVsc2UgaWYocGxheWVyQm9hcmQubGVuZ3RoPT0yKXtcbiAgICAgICAgLy8gTG9hZHMgd2hlbiBmaXJzdCAyIHNoaXBzIG9mIGxlbmd0aCAxIGFyZSBwbGFjZWQgLSBpbmRpY2F0ZXMgdGhhdCBuZXh0IDIgc2hpcHMgc2hvdWxkIGJlIG9mIGxlbmd0aCAyXG4gICAgICAgIGlmKG5ld1NoaXAhPWZhbHNlKXtcblxuICAgICAgICBuZXdTaGlwPWZhbHNlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdTaGlwKTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgb3ZlcmxheS5pbm5lclRleHQ9J1BsYWNlIDIgc2hpcHMgb2YgbGVuZ3RoIDInO1xuICAgICAgICAgICAgYm9keS5hcHBlbmQob3ZlcmxheSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLm9wYWNpdHk9JzEnO1xuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5vcGFjaXR5PScwJztcbiAgICAgICAgICAgIH0sIG92ZXJsYXlUaW1lKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICB9LCBvdmVybGF5VGltZSs1MDApO1xuICAgICAgICB9LCBvdmVybGF5U3RhcnRUaW1lKTtcbiAgICB9XG4gICAgfSBlbHNlIGlmKHBsYXllckJvYXJkLmxlbmd0aD09Myl7XG4gICAgICAgIC8vIFByZXBhcmVzIGZvciB0aGUgbmV4dCBvdmVybGF5KDEgc2hpcCBvZiBsZW5ndGggMylcbiAgICAgICAgbmV3U2hpcD10cnVlO1xuICAgIH0gZWxzZSBpZihwbGF5ZXJCb2FyZC5sZW5ndGg9PTQpe1xuICAgIC8vIExvYWRzIHdoZW4gMiBzaGlwcyBvZiBsZW5ndGggMiBhcmUgcGxhY2VkIC0gaW5kaWNhdGVzIHRoYXQgbmV4dCAxIHNoaXAgc2hvdWxkIGJlIG9mIGxlbmd0aCAzXG5cbiAgICAgICAgaWYobmV3U2hpcCE9ZmFsc2Upe1xuICAgICAgICAgICAgbmV3U2hpcD1mYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LmlubmVyVGV4dD0nUGxhY2UgMSBzaGlwIG9mIGxlbmd0aCAzJztcbiAgICAgICAgICAgICAgICBib2R5LmFwcGVuZChvdmVybGF5KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5vcGFjaXR5PScxJztcbiAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUub3BhY2l0eT0nMCc7XG4gICAgICAgICAgICAgICAgfSwgb3ZlcmxheVRpbWUpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0sIG92ZXJsYXlUaW1lKzUwMCk7XG4gICAgICAgICAgICB9LCBvdmVybGF5U3RhcnRUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmKHBsYXllckJvYXJkLmxlbmd0aD09NSl7XG4gICAgICAgIC8vIExvYWRzIHdoZW4gc2hpcCBvZiBsZW5ndGggMyBpcyBwbGFjZWQgLSBpbmRpY2F0ZXMgdGhhdCBuZXh0IHNoaXAgc2hvdWxkIGJlIG9mIGxlbmd0aCA0XG4gICAgICAgIG5ld1NoaXA9dHJ1ZTtcbiAgICAgICAgaWYoZW5kVGlsZT09dHJ1ZSl7IC8vIGFkZGl0aW9uYWwgc3RlcCBmb3IgZmlndXJpbmcgb3V0IGlmIHRoZSBjbGljayBvZiBhIGJ1dHRvbih3aGVuIHRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQpIGlzIG9uIHRoZSBzdGFydCBvZiB0aGUgY29vcmRzIG9yIHRoZSBlbmQuXG4gICAgICAgICAgICBlbmRUaWxlPWZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKG5ld1NoaXAhPWZhbHNlKXtcbiAgICAgICAgICAgIG5ld1NoaXA9ZmFsc2U7XG4gICAgICAgICAgICBlbmRUaWxlPXRydWU7XG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5pbm5lclRleHQ9J1BsYWNlIDEgc2hpcCBvZiBsZW5ndGggNCc7XG4gICAgICAgICAgICAgICAgYm9keS5hcHBlbmQob3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUub3BhY2l0eT0nMSc7XG4gICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLm9wYWNpdHk9JzAnO1xuICAgICAgICAgICAgICAgIH0sIG92ZXJsYXlUaW1lKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBvdmVybGF5VGltZSs1MDApO1xuICAgICAgICAgICAgfSwgb3ZlcmxheVN0YXJ0VGltZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYocGxheWVyQm9hcmQubGVuZ3RoPT02KXtcbiAgICAgICAgLy8gTG9hZHMgd2hlbiBzaGlwIG9mIGxlbmd0aCA0IGlzIHBsYWNlZCAtIGluZGljYXRlcyB0aGF0IG5leHQgc2hpcCBzaG91bGQgYmUgb2YgbGVuZ3RoIDVcbiAgICAgICAgbmV3U2hpcD10cnVlO1xuICAgICAgICBpZihlbmRUaWxlPT10cnVlKXsgLy8gYWRkaXRpb25hbCBzdGVwIGZvciBmaWd1cmluZyBvdXQgaWYgdGhlIGNsaWNrIG9mIGEgYnV0dG9uKHdoZW4gdGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCkgaXMgb24gdGhlIHN0YXJ0IG9mIHRoZSBjb29yZHMgb3IgdGhlIGVuZC5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZihuZXdTaGlwIT1mYWxzZSl7XG4gICAgICAgICAgICBuZXdTaGlwPWZhbHNlO1xuICAgICAgICAgICAgZW5kVGlsZT10cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuaW5uZXJUZXh0PSdQbGFjZSAxIHNoaXAgb2YgbGVuZ3RoIDUnO1xuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kKG92ZXJsYXkpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLm9wYWNpdHk9JzEnO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5vcGFjaXR5PScwJztcbiAgICAgICAgICAgICAgICB9LCBvdmVybGF5VGltZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSwgb3ZlcmxheVRpbWUrNTAwKTtcbiAgICAgICAgICAgIH0sIG92ZXJsYXlTdGFydFRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHM9b3ZlcmxheTsiLCJjb25zdCBzaGlwQ29uc3RydWN0b3I9cmVxdWlyZSgnLi9zaGlwQ3JlYXRpb24uanMnKTtcbmNvbnN0IEdhbWVCb2FyZEFycmF5VXBkYXRlPXJlcXVpcmUoJy4vR2FtZUJvYXJkQXJyYXkuanMnKTtcbmNvbnN0IFVJcGxheWVyQ2hvb3NlU2hpcHNSZXNwb25zZT1yZXF1aXJlKCcuL1VJcGxheWVyQ2hvb3NlU2hpcHNSZXNwb25zZS5qcycpO1xuXG5cblxubGV0IHRpbGU9MDsgLy8gMCAtIHN0YXJ0Q29vcmRzLCAxIC0gZW5kQ29vcmRzXG5sZXQgc3RhcnRDb3JkcztcbmZ1bmN0aW9uIHBsYXllckNob29zZVNoaXBzKGNvb3JkaW5hdGVzLEdhbWVCb2FyZCxwbGF5ZXJCb2FyZCl7XG5cbiAgICBpZihwbGF5ZXJCb2FyZC5sZW5ndGg8Nyl7IC8vIG1heCBzaGlwcyB0aGF0IGNhbiBiZSBvY2N1cGllZCBieSB0aGUgcGxheWVyXG5cbiAgICAgICAgLy8gY3VycmVudCBjbGlja2VkIGJveGVzIGNvb3Jkc1xuICAgICAgICBsZXQgWCA9IHBhcnNlSW50KGNvb3JkaW5hdGVzWzBdKTtcbiAgICAgICAgbGV0IFkgPSBwYXJzZUludChjb29yZGluYXRlc1sxXSk7XG4gICAgICAgIGxldCBjb29yZHM9W1gsWV07XG5cbiAgICAgICAgaWYocGxheWVyQm9hcmQubGVuZ3RoPT0wIHx8IHBsYXllckJvYXJkLmxlbmd0aD09MSl7IC8vIHdvcmtzIGlmIGZpcnN0IG9yIHNlY29uZCBzaGlwIGlzIGJlZWluZyBjcmVhdGVkKGJvdGggYXJlIDEgbGVuZ3RoKVxuICAgICAgICAgICAgc3RhcnRDb3Jkcz1jb29yZHM7XG4gICAgICAgICAgICBlbmRDb3Jkcz1jb29yZHM7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5wdXNoKG5ldyBzaGlwQ29uc3RydWN0b3Ioe3N0YXJ0Q29yZHMsZW5kQ29yZHN9LFtdLGZhbHNlKSk7XG4gICAgICAgICAgICBHYW1lQm9hcmRBcnJheVVwZGF0ZShHYW1lQm9hcmQsY29vcmRzLGNvb3Jkcyk7XG4gICAgICAgICAgICBVSXBsYXllckNob29zZVNoaXBzUmVzcG9uc2UocGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHBsYXllckJvYXJkLmxlbmd0aD09MiB8fCBwbGF5ZXJCb2FyZC5sZW5ndGg9PTMpeyAvLyB3b3JrcyBpZiB0aGlyZCBvciBmb3VydGggc2hpcCBpcyBiZWVpbmcgY3JlYXRlZChib3RoIGFyZSAyIGxlbmd0aClcbiAgICAgICAgICAgIGlmKHRpbGU9PTApeyAvLyBjaGVjayBpZiBpdCBpcyB0aGUgc3RhcnRDb29yZHMgb2YgdGhlIHNoaXBcblxuICAgICAgICAgICAgICAgIHN0YXJ0Q29yZHM9Y29vcmRzO1xuICAgICAgICAgICAgICAgIHRpbGUrKztcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfSBlbHNlIGlmKHRpbGU9PTEpeyAvLyBjaGVjayBpZiBpdCBpcyB0aGUgZW5kQ29vcmRzIG9mIHRoZSBzaGlwXG5cbiAgICAgICAgICAgICAgICB0aWxlPTA7XG4gICAgICAgICAgICAgICAgbGV0IGVuZENvcmRzPWNvb3JkcztcbiAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5wdXNoKG5ldyBzaGlwQ29uc3RydWN0b3Ioe3N0YXJ0Q29yZHMsZW5kQ29yZHN9LFtdLGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgR2FtZUJvYXJkQXJyYXlVcGRhdGUoR2FtZUJvYXJkLHN0YXJ0Q29yZHMsZW5kQ29yZHMpO1xuICAgICAgICAgICAgICAgIFVJcGxheWVyQ2hvb3NlU2hpcHNSZXNwb25zZShwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHBsYXllckJvYXJkLmxlbmd0aD09NCl7IC8vIGZpZnRoIHNoaXAobGVuZ3RoIDMpXG4gICAgICAgICAgICBpZih0aWxlPT0wKXtcbiAgICAgICAgICAgICAgICBzdGFydENvcmRzPWNvb3JkcztcbiAgICAgICAgICAgICAgICB0aWxlKys7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZih0aWxlPT0xKXtcblxuICAgICAgICAgICAgICAgIHRpbGU9MDtcbiAgICAgICAgICAgICAgICBsZXQgZW5kQ29yZHM9Y29vcmRzO1xuXG4gICAgICAgICAgICAgICAgcGxheWVyQm9hcmQucHVzaChuZXcgc2hpcENvbnN0cnVjdG9yKHtzdGFydENvcmRzLGVuZENvcmRzfSxbXSxmYWxzZSkpO1xuICAgICAgICAgICAgICAgIEdhbWVCb2FyZEFycmF5VXBkYXRlKEdhbWVCb2FyZCxzdGFydENvcmRzLGVuZENvcmRzKTtcbiAgICAgICAgICAgICAgICBVSXBsYXllckNob29zZVNoaXBzUmVzcG9uc2UocGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHBsYXllckJvYXJkLmxlbmd0aD09NSl7IC8vIHNpeHRoIHNoaXAobGVuZ3RoIDQpXG4gICAgICAgICAgICBpZih0aWxlPT0wKXtcbiAgICAgICAgICAgICAgICBzdGFydENvcmRzPWNvb3JkcztcbiAgICAgICAgICAgICAgICB0aWxlKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYodGlsZT09MSl7XG4gICAgICAgICAgICAgICAgdGlsZT0wO1xuICAgICAgICAgICAgICAgIGxldCBlbmRDb3Jkcz1jb29yZHM7XG5cbiAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5wdXNoKG5ldyBzaGlwQ29uc3RydWN0b3Ioe3N0YXJ0Q29yZHMsZW5kQ29yZHN9LFtdLGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgR2FtZUJvYXJkQXJyYXlVcGRhdGUoR2FtZUJvYXJkLHN0YXJ0Q29yZHMsZW5kQ29yZHMpO1xuICAgICAgICAgICAgICAgIFVJcGxheWVyQ2hvb3NlU2hpcHNSZXNwb25zZShwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHBsYXllckJvYXJkLmxlbmd0aD09Nil7IC8vIHNldmVudGggc2hpcChsZW5ndGggNSlcbiAgICAgICAgICAgIGlmKHRpbGU9PTApe1xuICAgICAgICAgICAgICAgIHN0YXJ0Q29yZHM9Y29vcmRzO1xuICAgICAgICAgICAgICAgIHRpbGUrKztcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZih0aWxlPT0xKXtcbiAgICAgICAgICAgICAgICB0aWxlPTA7XG4gICAgICAgICAgICAgICAgbGV0IGVuZENvcmRzPWNvb3JkcztcblxuICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLnB1c2gobmV3IHNoaXBDb25zdHJ1Y3Rvcih7c3RhcnRDb3JkcyxlbmRDb3Jkc30sW10sZmFsc2UpKTtcbiAgICAgICAgICAgICAgICBHYW1lQm9hcmRBcnJheVVwZGF0ZShHYW1lQm9hcmQsc3RhcnRDb3JkcyxlbmRDb3Jkcyk7XG4gICAgICAgICAgICAgICAgVUlwbGF5ZXJDaG9vc2VTaGlwc1Jlc3BvbnNlKHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBcblxuIFxuICAgIH1cblxuICAgIGlmKHBsYXllckJvYXJkLmxlbmd0aD09Nyl7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnRlVMTCBCT0FSRCcpO1xuICAgICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgVUkgd2hlbiBtYXggc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBwbGF5ZXJCb2FyZDtcbiAgICB9XG5cblxubW9kdWxlLmV4cG9ydHM9cGxheWVyQ2hvb3NlU2hpcHM7XG5cblxuIiwiXG5mdW5jdGlvbiBVSXBsYXllckNob29zZVNoaXBzUmVzcG9uc2UocGxheWVyQm9hcmQpe1xuXG4gICAgbGV0IHNtYWxsZXJDb29yZDtcblxucGxheWVyQm9hcmQuZm9yRWFjaChzaGlwID0+IHtcbiAgICBpZigoc2hpcC5Db29yZGluYXRlcy5lbmRDb3Jkc1swXSA9PSBzaGlwLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF0pJiYoc2hpcC5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXSA9PSBzaGlwLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV0pKXsgLy8gaWYgc2hpcCBpcyBvbmx5IDEgdGlsZVxuICAgICAgICBsZXQgdGlsZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlcz1cIiR7c2hpcC5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdfSR7c2hpcC5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdfVwiXWApOyAvLyBnZXQgdGhhdCB0aWxlXG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuXG4gICAgfSBlbHNlIGlmKHNoaXAuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0gPT0gc2hpcC5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdKXsgLy8gWHMgYXJlIGVxdWFsIC0gc2hpcCBpcyBnb2luZyB2ZXJ0aWNhbGx5XG5cbiAgICAgICAgbGV0IHRpbGVRdWFudGl0eSA9IE1hdGguYWJzKHNoaXAuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV0tc2hpcC5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdKSsxO1xuICAgICAgICBpZihzaGlwLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdPHNoaXAuQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXSkgeyAvLyBnZXQgdGhlIHNtYWxsZXN0IHZhbHVlIG9mIHRoZSAyIHRoYXQgYXJlIGRpZmZlcmVudChZcyBpbiB0aGlzIGNhc2UpXG4gICAgICAgICAgICBzbWFsbGVyQ29vcmQ9c2hpcC5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXTtcbiAgICAgICAgfSBlbHNlIHNtYWxsZXJDb29yZD1zaGlwLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV07XG5cbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGlsZVF1YW50aXR5OyBpKyspeyAvLyBnbyB0aHJvdWdoIGFsbCBvZiB0aGUgdGlsZXMgdGhhdCBhIHNoaXAgY2xhc3MgbmVlZHMgdG8gYmUgYWRkZWRcbiAgICAgICAgICAgICBsZXQgdGlsZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlcz1cIiR7c2hpcC5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdfSR7c21hbGxlckNvb3JkK2l9XCJdYCk7XG4gICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG5cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZihzaGlwLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdID09IHNoaXAuQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXSl7IC8vIFlzIGFyZSBlcXVhbCAtIHNoaXAgaXMgZ29pbmcgaG9yaXpvbnRhbGx5XG5cbiAgICAgICAgbGV0IHRpbGVRdWFudGl0eSA9IE1hdGguYWJzKHNoaXAuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0tc2hpcC5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdKSsxO1xuICAgICAgICBpZihzaGlwLkNvb3JkaW5hdGVzLmVuZENvcmRzWzBdPHNoaXAuQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXSkge1xuICAgICAgICAgICAgc21hbGxlckNvb3JkPXNoaXAuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF07XG4gICAgICAgIH0gZWxzZSBzbWFsbGVyQ29vcmQ9c2hpcC5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdO1xuXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRpbGVRdWFudGl0eTsgaSsrKXtcbiAgICAgICAgICAgICBsZXQgdGlsZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlcz1cIiR7c21hbGxlckNvb3JkK2l9JHtzaGlwLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV19XCJdYCk7XG4gICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cz1VSXBsYXllckNob29zZVNoaXBzUmVzcG9uc2U7IiwiXG5cbmZ1bmN0aW9uIGNoZWNrVGhlU2hpcChwbGF5ZXJCb2FyZCxpc1NoaXBHb29kLEdhbWVCb2FyZCl7XG4gICAgXG4vLyBTaG91bGQgY2hlY2sgaWYgdGhlIHNoaXBzIGFyZSBnb2luZyB0aGUgd2F5IHRoZXkgc2hvdWxkIC0gY2hlY2sgaWYgdGhleSBhcmUgdGhlIGxlbmd0aCB0aGF0IHRoZXkgYXJlIHN1cHBvc2VkIHRvIGJlIGFuZCBjaGVjayBpZiB0aGV5IGFyZW4ndCBnb2luZyBib3RoIGhvcml6b250YWxseSBhbmQgdmVydGljYWxseVxuXG4vLyBDb3VsZCBoYXZlIGRvbmUgdGhpcyB3aXRoIGEgbG9vcCAtIG5vdGUgdG8gc2VsZi5cblxuaWYocGxheWVyQm9hcmQubGVuZ3RoPT0zKXtcbiAgICBpZihcbiAgICAgICAgKCAocGxheWVyQm9hcmRbMl0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXT09cGxheWVyQm9hcmRbMl0uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0pICYmXG4gICAgICAgICgoTWF0aC5hYnMocGxheWVyQm9hcmRbMl0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXS1wbGF5ZXJCb2FyZFsyXS5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXSkpKzEgPT0gMiApICkgfHxcbiAgICAgICAgKCAocGxheWVyQm9hcmRbMl0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXT09cGxheWVyQm9hcmRbMl0uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV0pICYmXG4gICAgICAgICgoTWF0aC5hYnMocGxheWVyQm9hcmRbMl0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXS1wbGF5ZXJCb2FyZFsyXS5Db29yZGluYXRlcy5lbmRDb3Jkc1swXSkpKzEgPT0gMiApICkgKXtcbiAgICAgICAgICAgIGlzU2hpcEdvb2Q9dHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpc1NoaXBHb29kPWZhbHNlO1xuICAgIH1cbn1cbmlmKHBsYXllckJvYXJkLmxlbmd0aD09NCl7XG4gICAgaWYoXG4gICAgICAgICggKHBsYXllckJvYXJkWzNdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF09PXBsYXllckJvYXJkWzNdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzBdKSAmJlxuICAgICAgICAoKE1hdGguYWJzKHBsYXllckJvYXJkWzNdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV0tcGxheWVyQm9hcmRbM10uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV0pKSsxID09IDIgKSApIHx8XG4gICAgICAgICggKHBsYXllckJvYXJkWzNdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV09PXBsYXllckJvYXJkWzNdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdKSAmJlxuICAgICAgICAoKE1hdGguYWJzKHBsYXllckJvYXJkWzNdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF0tcGxheWVyQm9hcmRbM10uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0pKSsxID09IDIgKSApICl7XG4gICAgICAgICAgICBpc1NoaXBHb29kPXRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaXNTaGlwR29vZD1mYWxzZTtcbiAgICB9XG59XG5pZihwbGF5ZXJCb2FyZC5sZW5ndGg9PTUpe1xuICAgIGlmKFxuICAgICAgICAoIChwbGF5ZXJCb2FyZFs0XS5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdPT1wbGF5ZXJCb2FyZFs0XS5Db29yZGluYXRlcy5lbmRDb3Jkc1swXSkgJiZcbiAgICAgICAgKChNYXRoLmFicyhwbGF5ZXJCb2FyZFs0XS5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdLXBsYXllckJvYXJkWzRdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdKSkrMSA9PSAzICkgKSB8fFxuICAgICAgICAoIChwbGF5ZXJCb2FyZFs0XS5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdPT1wbGF5ZXJCb2FyZFs0XS5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXSkgJiZcbiAgICAgICAgKChNYXRoLmFicyhwbGF5ZXJCb2FyZFs0XS5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdLXBsYXllckJvYXJkWzRdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzBdKSkrMSA9PSAzICkgKSApe1xuICAgICAgICAgICAgaXNTaGlwR29vZD10cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlzU2hpcEdvb2Q9ZmFsc2U7XG4gICAgfVxufVxuaWYocGxheWVyQm9hcmQubGVuZ3RoPT02KXtcbiAgICBpZihcbiAgICAgICAgKCAocGxheWVyQm9hcmRbNV0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXT09cGxheWVyQm9hcmRbNV0uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0pICYmXG4gICAgICAgICgoTWF0aC5hYnMocGxheWVyQm9hcmRbNV0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXS1wbGF5ZXJCb2FyZFs1XS5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXSkpKzEgPT0gNCApICkgfHxcbiAgICAgICAgKCAocGxheWVyQm9hcmRbNV0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXT09cGxheWVyQm9hcmRbNV0uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV0pICYmXG4gICAgICAgICgoTWF0aC5hYnMocGxheWVyQm9hcmRbNV0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXS1wbGF5ZXJCb2FyZFs1XS5Db29yZGluYXRlcy5lbmRDb3Jkc1swXSkpKzEgPT0gNCApICkgKXtcbiAgICAgICAgICAgIGlzU2hpcEdvb2Q9dHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpc1NoaXBHb29kPWZhbHNlO1xuICAgIH1cbn1cbmlmKHBsYXllckJvYXJkLmxlbmd0aD09Nyl7XG4gICAgaWYoXG4gICAgICAgICggKHBsYXllckJvYXJkWzZdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF09PXBsYXllckJvYXJkWzZdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzBdKSAmJlxuICAgICAgICAoKE1hdGguYWJzKHBsYXllckJvYXJkWzZdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV0tcGxheWVyQm9hcmRbNl0uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV0pKSsxID09IDUgKSApIHx8XG4gICAgICAgICggKHBsYXllckJvYXJkWzZdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV09PXBsYXllckJvYXJkWzZdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdKSAmJlxuICAgICAgICAoKE1hdGguYWJzKHBsYXllckJvYXJkWzZdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF0tcGxheWVyQm9hcmRbNl0uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0pKSsxID09IDUgKSApICl7XG4gICAgICAgICAgICBpc1NoaXBHb29kPXRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaXNTaGlwR29vZD1mYWxzZTtcbiAgICB9XG59XG5cblxuLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSAyIGV4YWN0IHRpbGVzIGluIEdhbWVCb2FyZCBhcnJheSAtIGl0IG1lYW5zIHNoaXBzIGFyZSBvdmVybGFwcGluZ1xuZm9yKGxldCBpPTA7aTxHYW1lQm9hcmQubGVuZ3RoO2krKyl7XG4gICAgZm9yKGxldCBqPTA7ajxHYW1lQm9hcmQubGVuZ3RoO2orKyl7XG4gICAgICAgIGlmKEdhbWVCb2FyZFtpXVswXT09R2FtZUJvYXJkW2pdWzBdICYmIEdhbWVCb2FyZFtpXVsxXT09R2FtZUJvYXJkW2pdWzFdICYmIGkhPWope1xuICAgICAgICAgICAgcmV0dXJuIGlzU2hpcEdvb2Q9ZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5yZXR1cm4gaXNTaGlwR29vZDtcblxufVxuXG5tb2R1bGUuZXhwb3J0cz1jaGVja1RoZVNoaXA7IiwiXG5mdW5jdGlvbiBzaGlwQ29uc3RydWN0b3IoQ29vcmRpbmF0ZXMsaGl0UG9zaXRpb24sc3Vuayl7XG4gICAgdGhpcy5Db29yZGluYXRlcz1Db29yZGluYXRlcztcbiAgICB0aGlzLmhpdFBvc2l0aW9uPWhpdFBvc2l0aW9uO1xuICAgIHRoaXMuc3Vuaz1zdW5rO1xufTtcbnNoaXBDb25zdHJ1Y3Rvci5wcm90b3R5cGUuQWxsQ29vcmRpbmF0ZXM9ZnVuY3Rpb24oKXsgLy8gZ2V0cyBhbGwgdGhlIGNvb3JkaW5hdGVzIGJldHdlZW4gc3RhcnQgYW5kIGVuZCBwb3NpdGlvbnNcbiAgICBjb25zdCBhbGxDb29yZGluYXRlcz1bXTtcblxuICAgIGlmKE1hdGguYWJzKHRoaXMuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0tdGhpcy5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdKT09MCl7XG4gICAgICAgIC8vIHZlcnRpY2FsIHNoaXBcbiAgICAgICAgY29uc3QgbGVuZ3RoPU1hdGguYWJzKHRoaXMuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV0tdGhpcy5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdKSsxO1xuICAgICAgICBsZXQgbG9uZ2VyQ29vcmRpbmF0ZT0wO1xuICAgICAgICBpZih0aGlzLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdPnRoaXMuQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXSl7bG9uZ2VyQ29vcmRpbmF0ZT10aGlzLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdO31cbiAgICAgICAgZWxzZXtsb25nZXJDb29yZGluYXRlPXRoaXMuQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXX07XG4gICAgICAgIGZvcihsZXQgaT0wO2k8bGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBhbGxDb29yZGluYXRlcy5wdXNoKFt0aGlzLkNvb3JkaW5hdGVzLmVuZENvcmRzWzBdLGxvbmdlckNvb3JkaW5hdGUtaV0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaG9yaXpvbnRhbCBzaGlwXG5cbiAgICAgICAgY29uc3QgbGVuZ3RoPU1hdGguYWJzKHRoaXMuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0tdGhpcy5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdKSsxO1xuICAgICAgICBsZXQgbG9uZ2VyQ29vcmRpbmF0ZT0wO1xuICAgICAgICBpZih0aGlzLkNvb3JkaW5hdGVzLmVuZENvcmRzWzBdPnRoaXMuQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXSl7bG9uZ2VyQ29vcmRpbmF0ZT10aGlzLkNvb3JkaW5hdGVzLmVuZENvcmRzWzBdO31cbiAgICAgICAgZWxzZXtsb25nZXJDb29yZGluYXRlPXRoaXMuQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXX07XG4gICAgICAgIGZvcihsZXQgaT0wO2k8bGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBhbGxDb29yZGluYXRlcy5wdXNoKFtsb25nZXJDb29yZGluYXRlLWksdGhpcy5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbGxDb29yZGluYXRlcztcbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzPXNoaXBDb25zdHJ1Y3RvcjsiLCJjb25zdCBDb21wdXRlckNob29zZVNoaXBzID0gcmVxdWlyZSgnLi9Db21wdXRlckNob29zZVNoaXBzJyk7XG5jb25zdCBDaGVja0hpdCA9IHJlcXVpcmUoJy4vQ2hlY2tIaXQnKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydEdhbWUoQm90R2FtZUJvYXJkLEJvdFBsYXllckJvYXJkLGJvZHksR2FtZUJvYXJkLHBsYXllckJvYXJkKXtcbiAgICBCb3RHYW1lQm9hcmQgPSBDb21wdXRlckNob29zZVNoaXBzKEJvdFBsYXllckJvYXJkKTtcbiAgICBib2R5LmlubmVySFRNTD0nJztcbiAgICBjb25zdCBwbGF5ZXJTaWRlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllclNpZGUuc2V0QXR0cmlidXRlKCdpZCcsJ3BsYXllci1zaWRlJyk7XG4gICAgY29uc3QgY29tcHV0ZXJTaWRlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbXB1dGVyU2lkZS5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcHV0ZXItc2lkZScpO1xuICAgIGJvZHkuYXBwZW5kKHBsYXllclNpZGUsY29tcHV0ZXJTaWRlKTtcbiAgICBmb3IobGV0IGk9MTtpPD02O2krKyl7XG4gICAgICAgIGZvcihsZXQgaj0xO2o8PTY7aisrKXtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllckJveD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvLyBwbGF5ZXIgc2lkZSBib3hlc1xuICAgICAgICAgICAgcGxheWVyQm94LnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlcycsYCR7an0ke2l9YCk7XG4gICAgICAgICAgICBHYW1lQm9hcmQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50WzBdPT1qICYmIGVsZW1lbnRbMV09PWkpe1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb3guY2xhc3NMaXN0LmFkZCgnc2hpcCcpOyAvLyB0aGlzIG1lYW5zIHRoZXJlIGlzIGEgcGFydCBvZiBhIHNoaXAgb24gdGhhdCB0aWxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwbGF5ZXJCb3guY2xhc3NMaXN0LmFkZCgncGxheWVyLXNpZGUtYm94Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQm94PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBQQyBzaWRlIGJveGVzXG4gICAgICAgICAgICBjb21wdXRlckJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZXMnLGAke2p9JHtpfWApO1xuICAgICAgICAgICAgY29uc3QgQ2xpY2tlZFRpbGVDb29yZHM9Y29tcHV0ZXJCb3guZGF0YXNldC5jb29yZGluYXRlcztcbiAgICAgICAgICAgIGNvbXB1dGVyQm94LmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNpZGUtYm94Jyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBDaGVjaygpe1xuICAgICAgICAgICAgICAgIENoZWNrSGl0KENsaWNrZWRUaWxlQ29vcmRzLEJvdFBsYXllckJvYXJkLEJvdEdhbWVCb2FyZCxHYW1lQm9hcmQscGxheWVyQm9hcmQsYm9keSk7IC8vIGNoZWNrcyBwbGF5ZXJzIGhpdCAuLi5cbiAgICAgICAgICAgICAgICBjb21wdXRlckJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsQ2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcHV0ZXJCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLENoZWNrKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wdXRlclNpZGUuYXBwZW5kKGNvbXB1dGVyQm94KTtcbiAgICAgICAgICAgIHBsYXllclNpZGUuYXBwZW5kKHBsYXllckJveCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZXhwbGFuYXRpb25PdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXhwbGFuYXRpb25PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2V4cGxhbmF0aW9uLW92ZXJsYXknKTtcblxuICAgIGNvbnN0IEVPdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEVPdGV4dERpdi5jbGFzc0xpc3QuYWRkKCdleHBsYW5hdGlvbi1vdmVybGF5LXRleHREaXYnKTtcbiAgICAvLyBFTyAtIGV4cGxhbmF0aW9uIG92ZXJsYXlcbiAgICBjb25zdCBFT2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBFT2hlYWRlci5pbm5lclRleHQ9YEl0J3MgZmlnaHQgdGltZSFgO1xuICAgIGNvbnN0IEVPZmlyc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIEVPZmlyc3RUZXh0LmlubmVyVGV4dCA9ICdZb3VyIGJvYXJkIGlzIG9uIHRoZSBsZWZ0LCB5b3VyIGVuZW1pZXMgaXMgb24gdGhlIHJpZ2h0Lic7XG4gICAgY29uc3QgRU9zZWNvbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIEVPc2Vjb25kVGV4dC5pbm5lclRleHQgPSAnT24geW91ciBib2FyZCBhbGwgaGl0IHRpbGVzIGFyZSBncmF5LiBPbiB5b3VyIGVuZW1pZXMgYm9hcmQsIG1pc3NlZCBoaXRzIGFyZSBncmF5LCBhY2N1cmF0ZSBoaXRzIGFyZSBsaWdodCBibHVlIGFuZCBkZXN0cm95ZWQgc2hpcHMgYXJlIGRhcmsgYmx1ZS4nO1xuICAgIGNvbnN0IEVPYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgRU9idXR0b24uaW5uZXJUZXh0PSdGaWdodCEnO1xuICAgIEVPYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2V4cGxhbmF0aW9uLW92ZXJsYXktYnV0dG9uJyk7XG5cbiAgICBFT3RleHREaXYuYXBwZW5kKEVPaGVhZGVyLEVPZmlyc3RUZXh0LEVPc2Vjb25kVGV4dCxFT2J1dHRvbik7XG4gICAgZXhwbGFuYXRpb25PdmVybGF5LmFwcGVuZChFT3RleHREaXYpO1xuICAgIGJvZHkuYXBwZW5kKGV4cGxhbmF0aW9uT3ZlcmxheSk7XG4gICAgRU9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIGV4cGxhbmF0aW9uT3ZlcmxheS5yZW1vdmUoKTtcbiAgICB9KVxuXG5cbiAgICAvLyBjb25zdCBvdmVybGF5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZmluYWwtc2hpcC1vdmVybGF5Jyk7XG5cbiAgICAvLyBjb25zdCBvdmVybGF5VGV4dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBvdmVybGF5VGV4dC5jbGFzc0xpc3QuYWRkKCdmaW5hbC1zaGlwLW92ZXJsYXktdGV4dCcpO1xuICAgIC8vIG92ZXJsYXlUZXh0LmlubmVyVGV4dD0nU3RhcnQgdGhlIGdhbWUhJztcbiAgICAvLyBvdmVybGF5LmFwcGVuZChvdmVybGF5VGV4dCk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIGJvZHkuYXBwZW5kKG92ZXJsYXkpO1xuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgICAgIG92ZXJsYXkuc3R5bGUub3BhY2l0eT0nMCc7XG4gICAgLy8gICAgIH0sIDE1MDApO1xuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgLy8gICAgIH0sIDIwMDApO1xuICAgIC8vIH0sIDApO1xuXG5yZXR1cm4gQm90R2FtZUJvYXJkO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3NyYy9maXJzdFNjcmVlblN0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3JjL3BsYXllckNob29zZVNoaXBzU3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvR2FtZXBsYXkuY3NzXCI7XG5pbXBvcnQgcGxheWVyQ2hvb3NlU2hpcHMgZnJvbSAnLi9QbGF5ZXJDaG9vc2VTaGlwcy5qcyc7XG5pbXBvcnQgb3ZlcmxheSBmcm9tICcuL092ZXJsYXkuanMnO1xuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tICcuL3N0YXJ0R2FtZS5qcydcbmltcG9ydCBjaGVja1RoZVNoaXAgZnJvbSAnLi9jaGVja1RoZVNoaXAuanMnXG5cbmxldCBHYW1lQm9hcmQ9W107IC8vIHRoaXMgYXJyYXkgd2lsbCBzdG9yZSBwbGF5ZXJzIGJvYXJkXG5sZXQgcGxheWVyQm9hcmQ9W107IC8vIHRoaXMgYXJyYXkgd2lsbCBzdG9yZSBwbGF5ZXJzIHNoaXBzXG5cbmxldCBCb3RHYW1lQm9hcmQ9W107IC8vIHRoaXMgYXJyYXkgd2lsbCBzdG9yZSBjb21wdXRlcnMgc2hpcHNcbmxldCBCb3RQbGF5ZXJCb2FyZD1bXTsgLy8gdGhpcyBhcnJheSB3aWxsIHN0b3JlIGNvbXB1dGVycyBib2FyZFxubGV0IGlzU2hpcEdvb2Q9dHJ1ZTsgLy8gYm9vbGVhbiB3aWxsIGJlIHNldCB0byBmYWxzZSB3aGVuIGEgc2hpcCBpc24ndCB0aGUgbGVuZ3RoIGl0cyBzdXBwb3NlZCB0byBiZSBvciBnb2VzIGJvdGggdmVydGljYWxseSBhbmQgaG9yaXpvbnRhbGx5XG5cbmNvbnN0IGJvZHk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpOyAvLyBtYWluIGJvZHkgdGhhdCB3aWxsIGJlIG1hbmlwdWxhdGVkIHdoZW4gaSBuZWVkIHRvIGxvYWQgZGlmZmVyZW50IHNjcmVlbnNcblxuLy8gc3RhcnRpbmcgc2NyZWVuIGVsZW1lbnRzXG5jb25zdCBmaXJzdFNjcmVlbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1maXJzdC1zY3JlZW4nKTtcbmNvbnN0IHN0YXJ0QnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1nYW1lJyk7XG5jb25zdCBjb250ZW50UGxheWVyQ2hvb3NlU2hpcHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IGJvYXJkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsJ2JvYXJkJyk7XG5cbmZvcihsZXQgaT0xO2k8PTY7aSsrKXtcblxuICAgIGZvcihsZXQgaj0xO2o8PTY7aisrKXtcblxuICAgICAgICBjb25zdCBib3g9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZXMnLGAke2p9JHtpfWApO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG4gICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHBsYXllckNob29zZVNoaXBzKHRoaXMuZGF0YXNldC5jb29yZGluYXRlcyxHYW1lQm9hcmQscGxheWVyQm9hcmQpOyAvLyB1cGRhdGVzIHBsYXllckJvYXJkLCBHYW1lQm9hcmQgYXJyYXlzIGFuZCB0aGUgVUkgaW5zaWRlXG4gICAgICAgICAgICBpc1NoaXBHb29kPWNoZWNrVGhlU2hpcChwbGF5ZXJCb2FyZCxpc1NoaXBHb29kLEdhbWVCb2FyZCk7IC8vIGNoZWNrcyBpZiBzaGlwIHBsYWNlZCBieSB0aGUgcGxheWVyIGlzIHBsYWNlZCBieSB0aGUgcnVsZXNcbiAgICAgICAgICAgIGlmKGlzU2hpcEdvb2Q9PWZhbHNlKXsgLy8gdGhyb3dzIGFuIGVycm9yIGlmIGl0IGlzbid0LCByZXN0YXJ0cyB0aGUgd2luZG93XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3I9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnc2hpcC1vdmVybGF5Jyk7XG4gICAgICAgICAgICAgICAgZXJyb3Iuc3R5bGUub3BhY2l0eT0nMSc7XG4gICAgICAgICAgICAgICAgZXJyb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdyZ2IoMjIyLCA5NiwgOTYpJztcbiAgICAgICAgICAgICAgICBlcnJvci5pbm5lclRleHQ9YEZvbGxvdyB0aGUgcnVsZXMgb2Ygc2hpcCBjcmVhdGlvbiAtIHlvdXIgc2hpcHMgY2FuJ3QgZ28gYm90aCBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHksIHRoZXkgbXVzdCBiZSB0aGUgbGVuZ3RoIHNwZWNpZmllZCBhbmQgdGhleSBjYW4ndCBvdmVybGFwIWA7XG4gICAgICAgICAgICAgICAgYm9keS5hcHBlbmQoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSwgNjAwMCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gU3RhcnRzIHdob2xlIGNvZGUgYWxsIG92ZXIgYWdhaW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG92ZXJsYXkocGxheWVyQm9hcmQsYm9keSk7XG4gICAgICAgICAgICBpZihwbGF5ZXJCb2FyZC5sZW5ndGg9PTcpe1xuICAgICAgICAgICAgICAgIEJvdEdhbWVCb2FyZCA9IHN0YXJ0R2FtZShCb3RHYW1lQm9hcmQsQm90UGxheWVyQm9hcmQsYm9keSxHYW1lQm9hcmQscGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGJvYXJkLmFwcGVuZChib3gpO1xuICAgIH1cbn1cblxuXG5cblxuY29udGVudFBsYXllckNob29zZVNoaXBzLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtcGxheWVyLWNob29zZS1zaGlwcycpO1xuY29udGVudFBsYXllckNob29zZVNoaXBzLmFwcGVuZChib2FyZCk7XG5cblxuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgZmlyc3RTY3JlZW4ucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBleHBsYW5hdGlvbk92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBleHBsYW5hdGlvbk92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZXhwbGFuYXRpb24tb3ZlcmxheScpO1xuXG4gICAgY29uc3QgRU90ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgRU90ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGxhbmF0aW9uLW92ZXJsYXktdGV4dERpdicpO1xuICAgIC8vIEVPIC0gZXhwbGFuYXRpb24gb3ZlcmxheVxuICAgIGNvbnN0IEVPaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIEVPaGVhZGVyLmlubmVyVGV4dD0nV2VsY29tZSB0byBCYXR0bGVzaGlwcyEnO1xuICAgIGNvbnN0IEVPZmlyc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIEVPZmlyc3RUZXh0LmlubmVyVGV4dCA9ICdUaGlzIGlzIGEgdHlwaWNhbCBnYW1lIG9mIGJhdHRsZXNoaXBzIC0geW91IHRyeSB0byBzaG9vdCB5b3VyIGVuZW1pZXMgc2hpcHMsIHlvdXIgZW5lbXkgdHJpZXMgdG8gc2hvb3QgeW91cnMuJztcbiAgICBjb25zdCBFT3NlY29uZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgRU9zZWNvbmRUZXh0LmlubmVyVGV4dCA9ICdGaXJzdCBvZiBhbGwsIGNob29zZSB5b3VyIGJvYXJkIHNoaXBzIHBvc2l0aW9ucyBieSBmb2xsb3dpbmcgdGhlIG92ZXJsYXlzIHRoYXQgcG9wdXAuJztcbiAgICBjb25zdCBFT2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIEVPYnV0dG9uLmlubmVyVGV4dD0nQ29udGludWUnO1xuICAgIEVPYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2V4cGxhbmF0aW9uLW92ZXJsYXktYnV0dG9uJyk7XG5cbiAgICBFT3RleHREaXYuYXBwZW5kKEVPaGVhZGVyLEVPZmlyc3RUZXh0LEVPc2Vjb25kVGV4dCxFT2J1dHRvbik7XG5cbiAgICBFT2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgZXhwbGFuYXRpb25PdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICBvdmVybGF5KHBsYXllckJvYXJkLGJvZHkpO1xuICAgIH0pXG5cbiAgICBleHBsYW5hdGlvbk92ZXJsYXkuYXBwZW5kKEVPdGV4dERpdik7XG4gICAgYm9keS5hcHBlbmQoZXhwbGFuYXRpb25PdmVybGF5KTtcbiAgICBib2R5LmFwcGVuZChjb250ZW50UGxheWVyQ2hvb3NlU2hpcHMpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=