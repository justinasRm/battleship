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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody > h3{\n    grid-column: 1/3;\n    text-align: center;\n    font-size: 3rem;\n}\n\n#player-side{\n    background-color: rgb(255, 200, 212);\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n    width: 90%;\n    height: 100%;\n    margin: 30px;\n}\n#computer-side{\n    width: 90%;\n    height: 100%;\n    background-color: rgb(193, 193, 255);\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n    margin: 30px;\n}\n.player-side-box{\n    border: solid 1px black;\n}\n.ship{\n    background-color: crimson;\n}\n.computer-side-box{\n    border: solid 1px black;\n}\n\n.gg-popup{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    transition: all 1s;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 3rem;\n    color: white;\n}\n.gg-popup-text{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: gray;\n    padding: 20px;\n    outline: 2px solid darkgray;\n}\n.play-again-btn{\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:white;\n    font-size: 1.5rem;\n\n    transition: 0.5s all;\n}\n.play-again-btn:hover{\n    transform: scale(1.03);\n}", "",{"version":3,"sources":["webpack://./src/Gameplay.css"],"names":[],"mappings":";AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,8DAA8D;IAC9D,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;AACA;IACI,UAAU;IACV,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,8DAA8D;IAC9D,YAAY;AAChB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,iBAAiB;;IAEjB,oBAAoB;AACxB;AACA;IACI,sBAAsB;AAC1B","sourcesContent":["\nbody > h3{\n    grid-column: 1/3;\n    text-align: center;\n    font-size: 3rem;\n}\n\n#player-side{\n    background-color: rgb(255, 200, 212);\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n    width: 90%;\n    height: 100%;\n    margin: 30px;\n}\n#computer-side{\n    width: 90%;\n    height: 100%;\n    background-color: rgb(193, 193, 255);\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n    margin: 30px;\n}\n.player-side-box{\n    border: solid 1px black;\n}\n.ship{\n    background-color: crimson;\n}\n.computer-side-box{\n    border: solid 1px black;\n}\n\n.gg-popup{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    transition: all 1s;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 3rem;\n    color: white;\n}\n.gg-popup-text{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: gray;\n    padding: 20px;\n    outline: 2px solid darkgray;\n}\n.play-again-btn{\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:white;\n    font-size: 1.5rem;\n\n    transition: 0.5s all;\n}\n.play-again-btn:hover{\n    transform: scale(1.03);\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    height: 100vh;\n    margin: 0;\n}\n.content-first-screen{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n\n}\n.content-first-screen h1{\n    font-weight: bold;\n    font-size: 4rem;\n    color: rgb(0, 0, 0);\n    margin-bottom: 5px;\n}\n#start-game{\n    padding: 10px;\n    font-size: 2rem;\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:rgb(148, 148, 148);\n    box-shadow: 1px 1px 3px 1px gray;\n\n    transition: 0.5s all;\n}\n#start-game:hover{\n    box-shadow: 1px 2px 5px 2px gray;\n    transform: scale(1.03);\n}\n#start-game:focus{\n\n    background-color: rgb(53, 53, 53);\n}\n.explanation-overlay{\n    background-color: rgba(0, 0, 0, 0.4);\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.explanation-overlay-textDiv{\n    width: 500px;\n    height: 400px;\n    background-color: #595959;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.3rem;\n    color: beige;\n    text-align: center;\n    outline: 2px solid rgb(0, 0, 0);\n}\n.explanation-overlay-button{\n    padding: 10px;\n    font-size: 1.5rem;\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:rgb(148, 148, 148);\n    box-shadow: 1px 1px 1px 1px gray;\n\n    transition: 0.5s all;\n}\n.explanation-overlay-button:hover{\n    box-shadow: 1px 2px 5px 2px gray;\n    transform: scale(1.03);\n}", "",{"version":3,"sources":["webpack://./src/firstScreenStyle.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;AAEb;AACA;IACI,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,eAAe;IACf,qBAAqB;IACrB,uBAAuB;IACvB,mCAAmC;IACnC,gCAAgC;;IAEhC,oBAAoB;AACxB;AACA;IACI,gCAAgC;IAChC,sBAAsB;AAC1B;AACA;;IAEI,iCAAiC;AACrC;AACA;IACI,oCAAoC;IACpC,YAAY;IACZ,aAAa;IACb,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,uBAAuB;IACvB,mCAAmC;IACnC,gCAAgC;;IAEhC,oBAAoB;AACxB;AACA;IACI,gCAAgC;IAChC,sBAAsB;AAC1B","sourcesContent":["body{\n    height: 100vh;\n    margin: 0;\n}\n.content-first-screen{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n\n}\n.content-first-screen h1{\n    font-weight: bold;\n    font-size: 4rem;\n    color: rgb(0, 0, 0);\n    margin-bottom: 5px;\n}\n#start-game{\n    padding: 10px;\n    font-size: 2rem;\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:rgb(148, 148, 148);\n    box-shadow: 1px 1px 3px 1px gray;\n\n    transition: 0.5s all;\n}\n#start-game:hover{\n    box-shadow: 1px 2px 5px 2px gray;\n    transform: scale(1.03);\n}\n#start-game:focus{\n\n    background-color: rgb(53, 53, 53);\n}\n.explanation-overlay{\n    background-color: rgba(0, 0, 0, 0.4);\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.explanation-overlay-textDiv{\n    width: 500px;\n    height: 400px;\n    background-color: #595959;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.3rem;\n    color: beige;\n    text-align: center;\n    outline: 2px solid rgb(0, 0, 0);\n}\n.explanation-overlay-button{\n    padding: 10px;\n    font-size: 1.5rem;\n    text-decoration: none;\n    border: 1px solid black;\n    background-color:rgb(148, 148, 148);\n    box-shadow: 1px 1px 1px 1px gray;\n\n    transition: 0.5s all;\n}\n.explanation-overlay-button:hover{\n    box-shadow: 1px 2px 5px 2px gray;\n    transform: scale(1.03);\n}"],"sourceRoot":""}]);
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
    const projectNameH3 = document.createElement('h3');
    projectNameH3.innerText='Battleships';
    const modifiedBody = document.querySelector('body');
    modifiedBody.style.display='grid';
    modifiedBody.style.gridTemplateRows='1fr 4fr 1fr';
    modifiedBody.style.gridTemplateColumns='1fr 1fr';

    // body{
    //     height: 100vh;
    //     display: grid;
    //     grid-template-rows: 1fr 1fr;
    //     grid-template-columns: 1fr 1fr 1fr;
    // }
    body.append(projectNameH3, playerSide,computerSide);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esc0RBQXNELHVCQUF1Qix5QkFBeUIsc0JBQXNCLEdBQUcsaUJBQWlCLDJDQUEyQyxvQkFBb0IscUVBQXFFLGlCQUFpQixtQkFBbUIsbUJBQW1CLEdBQUcsaUJBQWlCLGlCQUFpQixtQkFBbUIsMkNBQTJDLG9CQUFvQixxRUFBcUUsbUJBQW1CLEdBQUcsbUJBQW1CLDhCQUE4QixHQUFHLFFBQVEsZ0NBQWdDLEdBQUcscUJBQXFCLDhCQUE4QixHQUFHLGNBQWMseUJBQXlCLGtCQUFrQixtQkFBbUIsMkNBQTJDLHlCQUF5QixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsc0JBQXNCLG1CQUFtQixHQUFHLGlCQUFpQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsNkJBQTZCLG9CQUFvQixrQ0FBa0MsR0FBRyxrQkFBa0IsNEJBQTRCLDhCQUE4Qiw2QkFBNkIsd0JBQXdCLDZCQUE2QixHQUFHLHdCQUF3Qiw2QkFBNkIsR0FBRyxPQUFPLCtFQUErRSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLE1BQU0sS0FBSyxZQUFZLHNDQUFzQyx1QkFBdUIseUJBQXlCLHNCQUFzQixHQUFHLGlCQUFpQiwyQ0FBMkMsb0JBQW9CLHFFQUFxRSxpQkFBaUIsbUJBQW1CLG1CQUFtQixHQUFHLGlCQUFpQixpQkFBaUIsbUJBQW1CLDJDQUEyQyxvQkFBb0IscUVBQXFFLG1CQUFtQixHQUFHLG1CQUFtQiw4QkFBOEIsR0FBRyxRQUFRLGdDQUFnQyxHQUFHLHFCQUFxQiw4QkFBOEIsR0FBRyxjQUFjLHlCQUF5QixrQkFBa0IsbUJBQW1CLDJDQUEyQyx5QkFBeUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLHNCQUFzQixtQkFBbUIsR0FBRyxpQkFBaUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLDZCQUE2QixvQkFBb0Isa0NBQWtDLEdBQUcsa0JBQWtCLDRCQUE0Qiw4QkFBOEIsNkJBQTZCLHdCQUF3Qiw2QkFBNkIsR0FBRyx3QkFBd0IsNkJBQTZCLEdBQUcsbUJBQW1CO0FBQ2g3RztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsK0NBQStDLG9CQUFvQixnQkFBZ0IsR0FBRyx3QkFBd0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsS0FBSywyQkFBMkIsd0JBQXdCLHNCQUFzQiwwQkFBMEIseUJBQXlCLEdBQUcsY0FBYyxvQkFBb0Isc0JBQXNCLDRCQUE0Qiw4QkFBOEIsMENBQTBDLHVDQUF1Qyw2QkFBNkIsR0FBRyxvQkFBb0IsdUNBQXVDLDZCQUE2QixHQUFHLG9CQUFvQiwwQ0FBMEMsR0FBRyx1QkFBdUIsMkNBQTJDLG1CQUFtQixvQkFBb0Isc0JBQXNCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLGlDQUFpQyxtQkFBbUIsb0JBQW9CLGdDQUFnQyxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsd0JBQXdCLG1CQUFtQix5QkFBeUIsc0NBQXNDLEdBQUcsOEJBQThCLG9CQUFvQix3QkFBd0IsNEJBQTRCLDhCQUE4QiwwQ0FBMEMsdUNBQXVDLDZCQUE2QixHQUFHLG9DQUFvQyx1Q0FBdUMsNkJBQTZCLEdBQUcsT0FBTywyRkFBMkYsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLCtCQUErQixvQkFBb0IsZ0JBQWdCLEdBQUcsd0JBQXdCLG1CQUFtQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEtBQUssMkJBQTJCLHdCQUF3QixzQkFBc0IsMEJBQTBCLHlCQUF5QixHQUFHLGNBQWMsb0JBQW9CLHNCQUFzQiw0QkFBNEIsOEJBQThCLDBDQUEwQyx1Q0FBdUMsNkJBQTZCLEdBQUcsb0JBQW9CLHVDQUF1Qyw2QkFBNkIsR0FBRyxvQkFBb0IsMENBQTBDLEdBQUcsdUJBQXVCLDJDQUEyQyxtQkFBbUIsb0JBQW9CLHNCQUFzQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsR0FBRyxpQ0FBaUMsbUJBQW1CLG9CQUFvQixnQ0FBZ0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLHdCQUF3QixtQkFBbUIseUJBQXlCLHNDQUFzQyxHQUFHLDhCQUE4QixvQkFBb0Isd0JBQXdCLDRCQUE0Qiw4QkFBOEIsMENBQTBDLHVDQUF1Qyw2QkFBNkIsR0FBRyxvQ0FBb0MsdUNBQXVDLDZCQUE2QixHQUFHLG1CQUFtQjtBQUN0aUk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHVFQUF1RSxvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyxTQUFTLG9CQUFvQixxRUFBcUUsbUJBQW1CLG9CQUFvQixhQUFhLGdCQUFnQiw0QkFBNEIsR0FBRyxPQUFPLDhCQUE4QixxQkFBcUIsc0JBQXNCLEdBQUcsY0FBYyw4QkFBOEIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsR0FBRyxRQUFRLGdDQUFnQyxHQUFHLGdCQUFnQix5QkFBeUIsZ0JBQWdCLGVBQWUscUNBQXFDLG1CQUFtQixvQkFBb0IsMkNBQTJDLGlCQUFpQiwyQkFBMkIsbUJBQW1CLHdCQUF3QixzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIseUJBQXlCLFNBQVMsc0JBQXNCLHNCQUFzQixhQUFhLGNBQWMsbUJBQW1CLG9CQUFvQiwyQ0FBMkMsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLDZCQUE2QixHQUFHLDJCQUEyQiw2QkFBNkIsbUJBQW1CLG9CQUFvQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsc0JBQXNCLG1CQUFtQix3QkFBd0Isa0NBQWtDLEdBQUcsT0FBTyxpR0FBaUcsVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLHVEQUF1RCxvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyxTQUFTLG9CQUFvQixxRUFBcUUsbUJBQW1CLG9CQUFvQixhQUFhLGdCQUFnQiw0QkFBNEIsR0FBRyxPQUFPLDhCQUE4QixxQkFBcUIsc0JBQXNCLEdBQUcsY0FBYyw4QkFBOEIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsR0FBRyxRQUFRLGdDQUFnQyxHQUFHLGdCQUFnQix5QkFBeUIsZ0JBQWdCLGVBQWUscUNBQXFDLG1CQUFtQixvQkFBb0IsMkNBQTJDLGlCQUFpQiwyQkFBMkIsbUJBQW1CLHdCQUF3QixzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIseUJBQXlCLFNBQVMsc0JBQXNCLHNCQUFzQixhQUFhLGNBQWMsbUJBQW1CLG9CQUFvQiwyQ0FBMkMsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLDZCQUE2QixHQUFHLDJCQUEyQiw2QkFBNkIsbUJBQW1CLG9CQUFvQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsc0JBQXNCLG1CQUFtQix3QkFBd0Isa0NBQWtDLEdBQUcsbUJBQW1CO0FBQ245SDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMseUZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSx5RkFBTyxJQUFJLGdHQUFjLEdBQUcsZ0dBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQThHO0FBQzlHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsaUdBQU87Ozs7QUFJd0Q7QUFDaEYsT0FBTyxpRUFBZSxpR0FBTyxJQUFJLHdHQUFjLEdBQUcsd0dBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9IO0FBQ3BIO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUdBQU87Ozs7QUFJOEQ7QUFDdEYsT0FBTyxpRUFBZSx1R0FBTyxJQUFJLDhHQUFjLEdBQUcsOEdBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDZkEsdUJBQXVCLG1CQUFPLENBQUMsaURBQWtCO0FBQ2pELHdCQUF3QixtQkFBTyxDQUFDLDZDQUFnQjtBQUNoRCxtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYzs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHdCQUF3QixNQUFNO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDREQUE0RCxxQkFBcUIsRUFBRSxxQkFBcUI7QUFDeEc7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QztBQUM5QyxpQ0FBaUM7QUFDakMsNERBQTREO0FBQzVEO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCLDhDQUE4QztBQUM5RjtBQUNBLCtCQUErQixnQkFBZ0IsdUNBQXVDLGdCQUFnQjtBQUN0RztBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQSxvRUFBb0UsV0FBVyxFQUFFLFdBQVc7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDckVBLG1CQUFtQixtQkFBTyxDQUFDLHlDQUFjOzs7O0FBSXpDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFLGVBQWUsRUFBRSxlQUFlLEtBQUs7QUFDckc7QUFDQSw2RkFBNkY7QUFDN0YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyREEsc0JBQXNCLG1CQUFPLENBQUMsZ0RBQW1CO0FBQ2pELGdDQUFnQyxtQkFBTyxDQUFDLGlEQUFrQjs7QUFFMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQiw4QkFBOEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1RUFBdUU7QUFDdkU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyw4QkFBOEI7QUFDcEU7O0FBRUE7O0FBRUEsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLDhCQUE4QjtBQUNwRTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsOEJBQThCO0FBQ3BFO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyw4QkFBOEI7QUFDcEU7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBEQUEwRDtBQUM1RTtBQUNBOztBQUVBOztBQUVBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBOzs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNB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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGtEQUFPO0FBQ2YsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lcGxheS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9maXJzdFNjcmVlblN0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllckNob29zZVNoaXBzU3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVwbGF5LmNzcz81MzQ0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmlyc3RTY3JlZW5TdHlsZS5jc3M/ZjkxOCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllckNob29zZVNoaXBzU3R5bGUuY3NzP2Y1ZjQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0NoZWNrSGl0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQ29tcHV0ZXJBdHRhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Db21wdXRlckNob29zZVNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRmluaXNoR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVCb2FyZEFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvT3ZlcmxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllckNob29zZVNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUlwbGF5ZXJDaG9vc2VTaGlwc1Jlc3BvbnNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2hlY2tUaGVTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcENyZWF0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3RhcnRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ib2R5ID4gaDN7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jcGxheWVyLXNpZGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMCwgMjEyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIvMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAzMHB4O1xcbn1cXG4jY29tcHV0ZXItc2lkZXtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCAxOTMsIDI1NSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyLzFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBtYXJnaW46IDMwcHg7XFxufVxcbi5wbGF5ZXItc2lkZS1ib3h7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG4uc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG59XFxuLmNvbXB1dGVyLXNpZGUtYm94e1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmdnLXBvcHVwe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5nZy1wb3B1cC10ZXh0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGRhcmtncmF5O1xcbn1cXG4ucGxheS1hZ2Fpbi1idG57XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG59XFxuLnBsYXktYWdhaW4tYnRuOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvR2FtZXBsYXkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsOERBQThEO0lBQzlELFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDhEQUE4RDtJQUM5RCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUJBQWlCOztJQUVqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5ID4gaDN7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jcGxheWVyLXNpZGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMCwgMjEyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIvMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAzMHB4O1xcbn1cXG4jY29tcHV0ZXItc2lkZXtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCAxOTMsIDI1NSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyLzFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBtYXJnaW46IDMwcHg7XFxufVxcbi5wbGF5ZXItc2lkZS1ib3h7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG4uc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG59XFxuLmNvbXB1dGVyLXNpZGUtYm94e1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmdnLXBvcHVwe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5nZy1wb3B1cC10ZXh0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGRhcmtncmF5O1xcbn1cXG4ucGxheS1hZ2Fpbi1idG57XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG59XFxuLnBsYXktYWdhaW4tYnRuOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5jb250ZW50LWZpcnN0LXNjcmVlbntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG4uY29udGVudC1maXJzdC1zY3JlZW4gaDF7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuI3N0YXJ0LWdhbWV7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ4LCAxNDgsIDE0OCk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCBncmF5O1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG59XFxuI3N0YXJ0LWdhbWU6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IDJweCBncmF5O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG4jc3RhcnQtZ2FtZTpmb2N1c3tcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCA1MywgNTMpO1xcbn1cXG4uZXhwbGFuYXRpb24tb3ZlcmxheXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5leHBsYW5hdGlvbi1vdmVybGF5LXRleHREaXZ7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTk1OTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogYmVpZ2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuLmV4cGxhbmF0aW9uLW92ZXJsYXktYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ4LCAxNDgsIDE0OCk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBncmF5O1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG59XFxuLmV4cGxhbmF0aW9uLW92ZXJsYXktYnV0dG9uOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAycHggZ3JheTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZpcnN0U2NyZWVuU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTOztBQUViO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsZ0NBQWdDOztJQUVoQyxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLGdDQUFnQzs7SUFFaEMsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmNvbnRlbnQtZmlyc3Qtc2NyZWVue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcbi5jb250ZW50LWZpcnN0LXNjcmVlbiBoMXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4jc3RhcnQtZ2FtZXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDgsIDE0OCwgMTQ4KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IGdyYXk7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbn1cXG4jc3RhcnQtZ2FtZTpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMnB4IGdyYXk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcbiNzdGFydC1nYW1lOmZvY3Vze1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDUzLCA1Myk7XFxufVxcbi5leHBsYW5hdGlvbi1vdmVybGF5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGxhbmF0aW9uLW92ZXJsYXktdGV4dERpdntcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiBiZWlnZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xcbn1cXG4uZXhwbGFuYXRpb24tb3ZlcmxheS1idXR0b257XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDgsIDE0OCwgMTQ4KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IGdyYXk7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbn1cXG4uZXhwbGFuYXRpb24tb3ZlcmxheS1idXR0b246aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IDJweCBncmF5O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudC1wbGF5ZXItY2hvb3NlLXNoaXBze1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuI2JvYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmci8xZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgd2lkdGg6IDgxM3B4O1xcbiAgICBoZWlnaHQ6IDgxM3B4O1xcbiAgICBnYXA6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbn1cXG4uYm94e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEzMy41cHg7XFxuICAgIGhlaWdodDogMTMzLjVweDtcXG59XFxuLmxlZnQtcGFuZWx7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTMlO1xcbiAgICBoZWlnaHQ6IDgxMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG59XFxuLnNoaXAtb3ZlcmxheXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIHdpZHRoOiA4MTRweDtcXG4gICAgaGVpZ2h0OiA4MTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTcxLCAxNzEpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG59XFxuLmZpbmFsLXNoaXAtb3ZlcmxheXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XFxufVxcbi5maW5hbC1zaGlwLW92ZXJsYXktdGV4dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogYmVpZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZGFya2dyYXk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wbGF5ZXJDaG9vc2VTaGlwc1N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsWUFBWTtJQUNaLGFBQWE7SUFDYixNQUFNO0lBQ04sU0FBUztJQUNULHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnQtcGxheWVyLWNob29zZS1zaGlwc3tcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcbiNib2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIvMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIHdpZHRoOiA4MTNweDtcXG4gICAgaGVpZ2h0OiA4MTNweDtcXG4gICAgZ2FwOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG59XFxuLmJveHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMzMuNXB4O1xcbiAgICBoZWlnaHQ6IDEzMy41cHg7XFxufVxcbi5sZWZ0LXBhbmVse1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEzJTtcXG4gICAgaGVpZ2h0OiA4MTFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLnNoaXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcbi5zaGlwLW92ZXJsYXl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICB3aWR0aDogODE0cHg7XFxuICAgIGhlaWdodDogODE0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE3MSwgMTcxKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxufVxcbi5maW5hbC1zaGlwLW92ZXJsYXl7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbn1cXG4uZmluYWwtc2hpcC1vdmVybGF5LXRleHR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IGJlaWdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGRhcmtncmF5O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVwbGF5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZXBsYXkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZpcnN0U2NyZWVuU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9maXJzdFNjcmVlblN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGF5ZXJDaG9vc2VTaGlwc1N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxheWVyQ2hvb3NlU2hpcHNTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgQ29tcHV0ZXJBdHRhY2sgPSByZXF1aXJlKCcuL0NvbXB1dGVyQXR0YWNrJyk7XG5jb25zdCBzaGlwQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL3NoaXBDcmVhdGlvbicpO1xuY29uc3QgRmluaXNoR2FtZSA9IHJlcXVpcmUoXCIuL0ZpbmlzaEdhbWVcIik7XG5cbmxldCBoaXRDb29yZGluYXRlcz0wO1xubGV0IGlzSGl0PWZhbHNlO1xuXG5mdW5jdGlvbiBDaGVja0hpdChDbGlja2VkVGlsZUNvb3JkcyxCb3RQbGF5ZXJCb2FyZCxCb3RHYW1lQm9hcmQsZ2FtZUJvYXJkLHBsYXllckJvYXJkLGJvZHkpe1xuICAgIGlzSGl0PWZhbHNlO1xuICAgIGZvcihsZXQgeD0wO3g8Qm90UGxheWVyQm9hcmQubGVuZ3RoO3grKyl7IC8vIGdvZXMgdGhyb3VnaCBhbGwgMTggUEMgc2lkZSB0aWxlc1xuICAgICAgICBpZihCb3RQbGF5ZXJCb2FyZFt4XVswXT09Q2xpY2tlZFRpbGVDb29yZHNbMF0gJiYgQm90UGxheWVyQm9hcmRbeF1bMV09PUNsaWNrZWRUaWxlQ29vcmRzWzFdKXtcbiAgICAgICAgICAgIC8vIGZpbmRzIHRoZSB0aWxlIGZyb20gQm90UGxheWVyQm9hcmQgdGhhdCB3YXMgY2xpY2tlZFxuXG4gICAgICAgICAgICBjb25zdCBib3hlcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuY29tcHV0ZXItc2lkZS1ib3hgKTsgXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4PTA7aW5kZXg8Ym94ZXMubGVuZ3RoO2luZGV4Kyspe1xuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGFycmF5IGVsZW1lbnQgaXMgZm91bmQsIGdvIHRocm91Z2ggYWxsIHRoZSBQQyBzaWRlIHRpbGVzXG5cbiAgICAgICAgICAgICAgICBpZihib3hlc1tpbmRleF0uZGF0YXNldC5jb29yZGluYXRlcyA9PSBDbGlja2VkVGlsZUNvb3Jkcyl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIHBhc3NlZCBpbiBjbGlja2VkIHRpbGUgY29vcmRpbmF0ZXMgZnJvbSBhbGwgb2YgdGhlIHRpbGVzIGFuZCBjaGFuZ2UgdGhlIGNvbG9yXG4gICAgICAgICAgICAgICAgICAgIGhpdENvb3JkaW5hdGVzKys7XG4gICAgICAgICAgICAgICAgYm94ZXNbaW5kZXhdLnN0eWxlLmJhY2tncm91bmQ9J2Nvcm5mbG93ZXJibHVlJztcbiAgICAgICAgICAgICAgICBpc0hpdD10cnVlO1xuXG4gICAgICAgICAgICAgICAgRmluZEhpdFNoaXAoQ2xpY2tlZFRpbGVDb29yZHMsQm90R2FtZUJvYXJkLGJvZHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmKHg9PUJvdFBsYXllckJvYXJkLmxlbmd0aC0xICYmIGlzSGl0PT1mYWxzZSl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jb29yZGluYXRlcz1cIiR7Q2xpY2tlZFRpbGVDb29yZHNbMF19JHtDbGlja2VkVGlsZUNvb3Jkc1sxXX1cIl1gKS5mb3JFYWNoKGVsZW1lbnQ9PntcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2lkZS1ib3gnKSllbGVtZW50LnN0eWxlLmJhY2tncm91bmQ9J2RpbWdyYXknO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb21wdXRlckF0dGFjayhnYW1lQm9hcmQscGxheWVyQm9hcmQsYm9keSk7XG4gICBcbn1cblxuZnVuY3Rpb24gRmluZEhpdFNoaXAoQ2xpY2tlZFRpbGVDb29yZHMsQm90R2FtZUJvYXJkLGJvZHkpe1xuICAgIC8vIGZpbmRzIHRoZSBzaGlwIHRoYXQgd2FzIGNsaWNrZWQgYW5kIGNoZWNrcyBpZiBhbGwgb2YgdGhlIHNoaXAgdGlsZXMgaGF2ZSBiZWVuIGNsaWNrZWQoaWYgc2hpcCBpcyBzdW5rKVxuXG4gICAgY29uc3QgYXJyYXk9T2JqZWN0LmVudHJpZXMoQm90R2FtZUJvYXJkKTsgLy8gNyBhcnJheSBlbGVtZW50c1xuICAgIGFycmF5LmZvckVhY2goKHgsaW5kZXgpID0+IHsgLy8gZ28gdGhyb3VnaCBhbGwgb2YgdGhlIFBDIHNoaXBzXG4gICAgICAgIGFycmF5W2luZGV4XVsxXS5BbGxDb29yZGluYXRlcygpLmZvckVhY2goZWxlbWVudD0+eyAvLyBnbyB0aHJvdWdoIGVhY2ggc2hpcHMgYWxsIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBpZihlbGVtZW50WzBdPT1DbGlja2VkVGlsZUNvb3Jkc1swXSYmZWxlbWVudFsxXT09Q2xpY2tlZFRpbGVDb29yZHNbMV0pe1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBjbGlja2VkIGNvb3JkaW5hdGVzIGFuZCBhbnkgc2hpcCBjb29yZGluYXRlcyBhcmUgdGhlIHNhbWVcbiAgICAgICAgICAgICAgICBCb3RHYW1lQm9hcmRbYCR7YXJyYXlbaW5kZXhdWzBdfWBdLmhpdFBvc2l0aW9uLnB1c2goW2VsZW1lbnRbMF0sZWxlbWVudFsxXV0pOyAvLyBwdXNoIGluIHRoZSBoaXQgcG9zaXRpb24gdG8gdGhhdCBzaGlwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihCb3RHYW1lQm9hcmRbYCR7YXJyYXlbaW5kZXhdWzBdfWBdLmhpdFBvc2l0aW9uLmxlbmd0aD09Qm90R2FtZUJvYXJkW2Ake2FycmF5W2luZGV4XVswXX1gXS5BbGxDb29yZGluYXRlcygpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgLy8gaWYgc2hpcHMgaGl0UG9zaXRpb24gYW5kIEFsbENvb3JkaW5hdGVzIGFycmF5cyBsZW5ndGggaXMgdGhlIHNhbWUsIHNoaXAgaXMgc3Vua1xuICAgICAgICAgICAgICAgIEJvdEdhbWVCb2FyZFtgJHthcnJheVtpbmRleF1bMF19YF0uQWxsQ29vcmRpbmF0ZXMoKS5mb3JFYWNoKGVsZW1lbnQ9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgdGlsZSBpbmUgdGhlIGdhbWUgd2l0aCBjb3JyZXNwb25kaW5nIGRhdGEtY29vcmRpbmF0ZXMgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNvb3JkaW5hdGVzPVwiJHtlbGVtZW50WzBdfSR7ZWxlbWVudFsxXX1cIl1gKS5mb3JFYWNoKHRpbGU9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIgdGlsZXMgd2l0aCB0aGUgc2FtZSBhdHRyaWJ1dGUgLSBzZWxlY3QgdGhlIG9uZSBvbiBjb21wdXRlciBzaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2lkZS1ib3gnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5zdHlsZS5iYWNrZ3JvdW5kPSdkYXJrYmx1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9KTtcbiAgICBcbiAgICBpZihoaXRDb29yZGluYXRlcz09MTgpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIEZpbmlzaEdhbWUoJ3BsYXllcicsYm9keSk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICAgIFxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzPUNoZWNrSGl0OyIsImNvbnN0IEZpbmlzaEdhbWUgPSByZXF1aXJlKFwiLi9GaW5pc2hHYW1lXCIpO1xuXG5cblxubGV0IGF0dGFja2VkVGlsZXM9W107XG5sZXQgaGl0Q29vcmRpbmF0ZXM9MDtcblxuZnVuY3Rpb24gQ29tcHV0ZXJBdHRhY2soZ2FtZUJvYXJkLHBsYXllckJvYXJkLGJvZHkpe1xuXG4gICAgLy8gYmFzaWNhbGx5IHRoaXMgaXMganVzdCBlYXN5IG1vZGUgLSB0aGUgYm90IHNlbGVjdHMgdGlsZXMgcmFuZG9tbHksIGRvZXNudCBtYXR0ZXIgaWYgaGUgaGl0cyBhIHNoaXBcbiAgICBsZXQgc3VjY2VzZnVsQXR0YWNrPWZhbHNlO1xuXG4gICAgbG9vcDE6XG4gICAgd2hpbGUoc3VjY2VzZnVsQXR0YWNrPT1mYWxzZSl7XG4gICAgLy9maXJzdCBpIGNob29zZSBhIHJhbmRvbSB0aWxlIG91dCBvZiB0aGUgMzYgdGlsZXNcbiAgICBsZXQgcmFuZG9tVGlsZVg9TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjUrMSk7XG4gICAgbGV0IHJhbmRvbVRpbGVZPU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo1KzEpO1xuICAgIGxldCByYW5kb21Db29yZD1bcmFuZG9tVGlsZVgscmFuZG9tVGlsZVldO1xuXG4gICAgbGV0IGxvb3BDaGVja2VyO1xuXG4gICAgaWYoYXR0YWNrZWRUaWxlcy5sZW5ndGg9PTApe1xuICAgICAgICBhdHRhY2tlZFRpbGVzLnB1c2gocmFuZG9tQ29vcmQpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBhdHRhY2tlZFRpbGVzLmZvckVhY2goKGVsZW1lbnQsaW5kZXgpPT57XG4gICAgICAgICAgICBpZihlbGVtZW50WzBdPT1yYW5kb21Db29yZFswXSAmJiBlbGVtZW50WzFdPT1yYW5kb21Db29yZFsxXSlsb29wQ2hlY2tlcj10cnVlO1xuICAgICAgICAgICAgZWxzZSBpZihpbmRleD09YXR0YWNrZWRUaWxlcy5sZW5ndGgtMSAmJiBsb29wQ2hlY2tlciE9dHJ1ZSlhdHRhY2tlZFRpbGVzLnB1c2gocmFuZG9tQ29vcmQpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBpZihsb29wQ2hlY2tlcj09dHJ1ZSl7XG4gICAgICAgIGNvbnRpbnVlIGxvb3AxO1xuICAgIH1cblxuICAgIGNvbnN0IHRpbGVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNvb3JkaW5hdGVzPVwiJHtyYW5kb21Db29yZFswXX0ke3JhbmRvbUNvb3JkWzFdfVwiYCk7IC8vIDIgdGlsZXMgb2YgdGhlIGdpdmVuIGNvb3JkaW5hdGVzIC0gb24gcGxheWVyIGFuZCBjb21wdXRlciBzaWRlc1xuICAgIHRpbGVzLmZvckVhY2goZWxlbWVudD0+e1xuICAgICAgICBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLXNpZGUtYm94JykpZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kPSdkaW1ncmF5JzsgLy8gZ2V0IHRoZSBvbmUgb24gcGxheWVyIHNpZGVcbiAgICB9KVxuICAgIHBsYXllckJvYXJkLmZvckVhY2goc2hpcD0+e1xuICAgICAgICBzaGlwLkFsbENvb3JkaW5hdGVzKCkuZm9yRWFjaChzaGlwQ29vcmQ9PntcbiAgICAgICAgICAgIGlmKHNoaXBDb29yZFswXT09cmFuZG9tQ29vcmRbMF0gJiYgc2hpcENvb3JkWzFdPT1yYW5kb21Db29yZFsxXSl7XG4gICAgICAgICAgICAgICAgaGl0Q29vcmRpbmF0ZXMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgaWYoaGl0Q29vcmRpbmF0ZXM9PTE4KXtcbiAgICAgICAgRmluaXNoR2FtZSgnY29tcHV0ZXInLGJvZHkpO1xuICAgIH1cbiAgICBzdWNjZXNmdWxBdHRhY2s9dHJ1ZTtcbn1cblxufVxubW9kdWxlLmV4cG9ydHM9Q29tcHV0ZXJBdHRhY2s7ICIsImNvbnN0IHNoaXBDb25zdHJ1Y3Rvcj1yZXF1aXJlKCcuL3NoaXBDcmVhdGlvbi5qcycpO1xuY29uc3QgQm90UGxheWVyQm9hcmRBcnJheVVwZGF0ZT1yZXF1aXJlKCcuL0dhbWVCb2FyZEFycmF5Jyk7XG5cbmZ1bmN0aW9uIENvbXB1dGVyQ2hvb3NlU2hpcHMoQm90UGxheWVyQm9hcmQpe1xuXG5mdW5jdGlvbiBSYW5kb21TaGlwUG9zaXRpb24oYSxCb3RQbGF5ZXJCb2FyZCl7XG4gICAgbGV0IHNoaXBDcmVhdGVkPWZhbHNlO1xuICAgIGxvb3AxOlxuICAgIHdoaWxlKHNoaXBDcmVhdGVkPT1mYWxzZSl7XG4gICAgXG5cbiAgICAgICAgbGV0IGVuZENvcmRzO1xuICAgICAgICAvL2ZpcnN0IGkgY2hvb3NlIGEgcmFuZG9tIHRpbGUgb3V0IG9mIHRoZSAzNiB0aWxlc1xuICAgICAgICBsZXQgcmFuZG9tVGlsZVg9TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjUrMSk7XG4gICAgICAgIGxldCByYW5kb21UaWxlWT1NYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqNSsxKTtcblxuICAgICAgICBzdGFydENvcmRzPVtyYW5kb21UaWxlWCxyYW5kb21UaWxlWV07XG5cbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgdGlsZSA9IDA7IHRpbGUgPCBCb3RQbGF5ZXJCb2FyZC5sZW5ndGg7IHRpbGUrKyl7XG4gICAgICAgICAgICBpZigoQm90UGxheWVyQm9hcmRbdGlsZV1bMF09PXN0YXJ0Q29yZHNbMF0gJiYgQm90UGxheWVyQm9hcmRbdGlsZV1bMV09PXN0YXJ0Q29yZHNbMV0pKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZSBsb29wMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy90aGVuIGkgY2hlY2sgaWYgaW4gYW55IGRpcmVjdGlvbiB0aGVyZSBhcmUgZW5vdWdoIHRpbGVzKHRoZSAoYSkgdmFyaWFibGUgZ2l2ZW4gdG8gdGhlIGZ1bmN0aW9uIGlzIHRoZSBsZW5ndGgpLiBmaXJzdCBjaGVjayBnb2luZyBkb3duLCB0aGVuIGxlZnQsIHRoZW4gdXAsIHRoZW4gcmlnaHQodGhpcyBpc24ndCByZWFsbHkgcmFuZG9tIC0geW91IGFyZSBtb3JlIGxpa2VseSB0byBmaW5kIGEgc2hpcCBhdCB0aGUgYm90dG9tIHBvcnRpb24gb2YgdGhlIGJvYXJkLCBidXQgaXQgd2lsbCBkbylcbiAgICAgICAgLy8gSUYgTk9UOiBHTyBCQUNLIFRPIFRIRSBXSElMRSBMT09QXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRFbmRDb3JkcyhhLHN0YXJ0Q29yZHMsQm90UGxheWVyQm9hcmQpe1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBEb3duKCl7XG5cbiAgICAgICAgICAgICAgICBpZigoMTw9c3RhcnRDb3Jkc1sxXSsoYS0xKSAmJiBzdGFydENvcmRzWzFdKyhhLTEpPD02KSl7Ly8gY2hlY2sgaWYgdGhlIGJvYXJkIGRvZXNuJ3QgZW5kIHdoZXJlIGkgd2FudCB0byBwbGFjZSBteSBlbmRDb3JkcyBET1dOXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZW4gY2hlY2sgaWYgdGhlIHRpbGVzIGJldHdlZW4gc3RhcnQgYW5kIGVuZCBjb3JkcyBhcmUgZnJlZSBhbmQgdGhlIGVuZCBjb3JkcyB0aWxlIGlzIGZyZWVcblxuICAgICAgICAgICAgICAgICAgICBpZihCb3RQbGF5ZXJCb2FyZC5sZW5ndGg8MSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbc3RhcnRDb3Jkc1swXSxzdGFydENvcmRzWzFdKyhhLTEpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB0aWxlID0gMDsgdGlsZSA8IEJvdFBsYXllckJvYXJkLmxlbmd0aDsgdGlsZSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdvaW5nRG93bih0aWxlLGEpKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRpbGU9PUJvdFBsYXllckJvYXJkLmxlbmd0aC0xKSByZXR1cm4gZ29pbmdEb3duKHRpbGUsYSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTGVmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBmdW5jdGlvbiBMZWZ0KCl7XG4gICAgICAgICAgICAgICAgaWYoMTw9c3RhcnRDb3Jkc1swXS0oYS0xKSAmJiBzdGFydENvcmRzWzBdLShhLTEpPD02KXsgLy8gQ2hlY2tpbmcgb3RoZXIgZW5kQ29yZHMgLSBnb2luZyBsZWZ0XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoQm90UGxheWVyQm9hcmQubGVuZ3RoPDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtzdGFydENvcmRzWzBdLShhLTEpLHN0YXJ0Q29yZHNbMV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB0aWxlID0gMDsgdGlsZSA8IEJvdFBsYXllckJvYXJkLmxlbmd0aDsgdGlsZSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdvaW5nTGVmdCh0aWxlLGEpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aWxlPT1Cb3RQbGF5ZXJCb2FyZC5sZW5ndGgtMSkgcmV0dXJuIGdvaW5nTGVmdCh0aWxlLGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIFVwKCl7XG4gICAgICAgICAgICAgICAgaWYoMTw9c3RhcnRDb3Jkc1sxXS0oYS0xKSAmJiBzdGFydENvcmRzWzFdLShhLTEpPD02KXsgLy8gQ2hlY2tpbmcgb3RoZXIgZW5kQ29yZHMgLSBnb2luZyB1cFxuXG4gICAgICAgICAgICAgICAgICAgIGlmKEJvdFBsYXllckJvYXJkLmxlbmd0aDwxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbc3RhcnRDb3Jkc1swXSxzdGFydENvcmRzWzFdLShhLTEpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB0aWxlID0gMDsgdGlsZSA8IEJvdFBsYXllckJvYXJkLmxlbmd0aDsgdGlsZSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdvaW5nVXAodGlsZSxhKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGlsZT09Qm90UGxheWVyQm9hcmQubGVuZ3RoLTEpIHJldHVybiBnb2luZ1VwKHRpbGUsYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gUmlnaHQoKXtcbiAgICAgICAgICAgICAgICBpZigxPD1zdGFydENvcmRzWzBdKyhhLTEpICYmIHN0YXJ0Q29yZHNbMF0rKGEtMSk8PTYpeyAvLyBDaGVja2luZyBvdGhlciBlbmRDb3JkcyAtIGdvaW5nIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihCb3RQbGF5ZXJCb2FyZC5sZW5ndGg8MSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3N0YXJ0Q29yZHNbMF0rKGEtMSksc3RhcnRDb3Jkc1sxXV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHRpbGUgPSAwOyB0aWxlIDwgQm90UGxheWVyQm9hcmQubGVuZ3RoOyB0aWxlKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ29pbmdSaWdodCh0aWxlLGEpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aWxlPT1Cb3RQbGF5ZXJCb2FyZC5sZW5ndGgtMSkgcmV0dXJuIGdvaW5nUmlnaHQodGlsZSxhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9jY3VwaWVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2NjdXBpZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBPY2N1cGllZCgpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIERvd24oKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ29pbmdEb3duKHRpbGUsYSl7IC8vIGNoZWNraW5nIGlmIGVuZCBjb29yZHMgYXJlIG9jY3VwaWVkIGFuZCBpZiBhbnkgdGlsZXMgYmV0d2VlbiBzdGFydCBhbmQgZW5kIGNvb3JkcyBhcmUgb2NjdXBpZWRcblxuICAgICAgICAgICAgaWYoKChzdGFydENvcmRzWzFdKyhhLTEpPT1Cb3RQbGF5ZXJCb2FyZFt0aWxlXVsxXSkgJiYgKHN0YXJ0Q29yZHNbMF09PUJvdFBsYXllckJvYXJkW3RpbGVdWzBdKSl8fCAvLyBUSUtSQUkgR0VSQUlcbiAgICAgICAgICAgICAgIChCb3RQbGF5ZXJCb2FyZFt0aWxlXVsxXT49c3RhcnRDb3Jkc1sxXSAmJiBCb3RQbGF5ZXJCb2FyZFt0aWxlXVsxXTw9c3RhcnRDb3Jkc1sxXSsoYS0xKSAmJiBzdGFydENvcmRzWzBdPT1Cb3RQbGF5ZXJCb2FyZFt0aWxlXVswXSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kQ29yZHM9W3N0YXJ0Q29yZHNbMF0sc3RhcnRDb3Jkc1sxXSsoYS0xKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnb2luZ0xlZnQodGlsZSxhKXsgLy8gYWZ0ZXIgZ29pbmcgZG93biBhbmQgaXQgbm90IGJlZWluZyB2aWFibGUsIGNoZWNraW5nIGlmIGdvaW5nIGxlZnQgaXMgb2tcblxuICAgICAgICAgICAgaWYoMTw9c3RhcnRDb3Jkc1swXS0oYS0xKSAmJiBzdGFydENvcmRzWzBdLShhLTEpPD02KXtcblxuICAgICAgICAgICAgICAgIGlmKCgoc3RhcnRDb3Jkc1swXS0oYS0xKT09Qm90UGxheWVyQm9hcmRbdGlsZV1bMF0pICYmIChzdGFydENvcmRzWzFdPT1Cb3RQbGF5ZXJCb2FyZFt0aWxlXVsxXSkpfHxcbiAgICAgICAgICAgICAgICAoc3RhcnRDb3Jkc1swXT49Qm90UGxheWVyQm9hcmRbdGlsZV1bMF0gJiYgQm90UGxheWVyQm9hcmRbdGlsZV1bMF0+PXN0YXJ0Q29yZHNbMF0tKGEtMSkgJiYgc3RhcnRDb3Jkc1sxXT09Qm90UGxheWVyQm9hcmRbdGlsZV1bMV0pKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gZW5kQ29yZHM9W3N0YXJ0Q29yZHNbMF0tKGEtMSksc3RhcnRDb3Jkc1sxXV07IC8vIGlmIHRoaXMgaWYgc3RhdGVtZW50IGlzIHRydWUsIGl0IG1lYW5zIHRoYXQgZWl0aGVyIHRoZSBlbmQgY29vcmRzIGFyZSBvY2N1cGllZCBvciBhbnkgY29vcmRpbmF0ZSBpbmJldHdlZW4gc3RhcnQgYW5kIGVuZCBjb29yZHMgaXMgb2NjdXBpZWQuIFRyeSB0byBnbyB1cC5cbiAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ29pbmdVcCh0aWxlLGEpeyAvLyBUcnkgZ29pbmcgdXBcbiAgICAgICAgICAgIGlmKDE8PXN0YXJ0Q29yZHNbMV0tKGEtMSkgJiYgc3RhcnRDb3Jkc1sxXS0oYS0xKTw9Nil7XG5cbiAgICAgICAgICAgICAgICBpZigoKHN0YXJ0Q29yZHNbMV0tKGEtMSk9PUJvdFBsYXllckJvYXJkW3RpbGVdWzFdKSAmJiAoc3RhcnRDb3Jkc1swXT09Qm90UGxheWVyQm9hcmRbdGlsZV1bMF0pKXx8XG4gICAgICAgICAgICAgICAgKHN0YXJ0Q29yZHNbMV0+PUJvdFBsYXllckJvYXJkW3RpbGVdWzFdICYmIEJvdFBsYXllckJvYXJkW3RpbGVdWzFdPj1zdGFydENvcmRzWzFdLShhLTEpICAmJiBzdGFydENvcmRzWzBdPT1Cb3RQbGF5ZXJCb2FyZFt0aWxlXVswXSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBlbmRDb3Jkcz1bc3RhcnRDb3Jkc1swXSxzdGFydENvcmRzWzFdLShhLTEpXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ29pbmdSaWdodCh0aWxlLGEpe1xuICAgICAgICAgICAgaWYoMTw9c3RhcnRDb3Jkc1swXSsoYS0xKSAmJiBzdGFydENvcmRzWzBdKyhhLTEpPD02KXtcblxuICAgICAgICAgICAgICAgIGlmKCgoc3RhcnRDb3Jkc1swXSsoYS0xKT09Qm90UGxheWVyQm9hcmRbdGlsZV1bMF0pICYmIChzdGFydENvcmRzWzFdPT1Cb3RQbGF5ZXJCb2FyZFt0aWxlXVsxXSkpfHxcbiAgICAgICAgICAgICAgICAoc3RhcnRDb3Jkc1swXTw9Qm90UGxheWVyQm9hcmRbdGlsZV1bMF0gJiYgQm90UGxheWVyQm9hcmRbdGlsZV1bMF08PXN0YXJ0Q29yZHNbMF0rKGEtMSkgJiYgc3RhcnRDb3Jkc1sxXT09Qm90UGxheWVyQm9hcmRbdGlsZV1bMV0pKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gZW5kQ29yZHM9W3N0YXJ0Q29yZHNbMF0rKGEtMSksc3RhcnRDb3Jkc1sxXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIWZpbmRFbmRDb3JkcyhhLHN0YXJ0Q29yZHMsQm90UGxheWVyQm9hcmQpKSBjb250aW51ZSBsb29wMTtcbiAgICAgICAgZWxzZSBlbmRDb3JkcyA9IGZpbmRFbmRDb3JkcyhhLHN0YXJ0Q29yZHMsQm90UGxheWVyQm9hcmQpO1xuICAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgLy90aGVuIGkgYXNzaWduIHRoZSBzaGlwIHdpdGggaXRzIGxlbmd0aCB0byB0aGUgdGlsZSAtIHN0YXJ0IHRpbGUgd2lsbCBiZSB0aGUgbG9naWMgaW4gdGhlIGZpcnN0IGNvbW1lbnQgb2YgdGhpcyBmdW5jdGlvbiwgZW5kIHRpbGUgLSB0aGlyZCBjb21tZW50KGFsc28gYXNzaWduIGluYmV0d2VlbiB0aWxlcyB0byB0aGUgQm90UGxheWVyQm9hcmQpLlxuICAgICAgICBCb3RQbGF5ZXJCb2FyZEFycmF5VXBkYXRlKEJvdFBsYXllckJvYXJkLHN0YXJ0Q29yZHMsZW5kQ29yZHMpO1xuXG4gICAgICAgIHNoaXBDcmVhdGVkPXRydWU7XG4gICAgICAgIHJldHVybiB7c3RhcnRDb3JkcyxlbmRDb3Jkc307XG4gICAgfTtcbiAgICBcbn07XG5cbiAgICBjb25zdCBsZW5ndGg1c2hpcD1uZXcgc2hpcENvbnN0cnVjdG9yKFJhbmRvbVNoaXBQb3NpdGlvbig1LEJvdFBsYXllckJvYXJkKSxbXSxmYWxzZSk7XG4gICAgY29uc3QgbGVuZ3RoNHNoaXA9bmV3IHNoaXBDb25zdHJ1Y3RvcihSYW5kb21TaGlwUG9zaXRpb24oNCxCb3RQbGF5ZXJCb2FyZCksW10sZmFsc2UpO1xuICAgIGNvbnN0IGxlbmd0aDNzaGlwPW5ldyBzaGlwQ29uc3RydWN0b3IoUmFuZG9tU2hpcFBvc2l0aW9uKDMsQm90UGxheWVyQm9hcmQpLFtdLGZhbHNlKTtcbiAgICBjb25zdCBsZW5ndGgyc2hpcD1uZXcgc2hpcENvbnN0cnVjdG9yKFJhbmRvbVNoaXBQb3NpdGlvbigyLEJvdFBsYXllckJvYXJkKSxbXSxmYWxzZSk7XG4gICAgY29uc3QgYW5vdGhlckxlbmd0aDJzaGlwPW5ldyBzaGlwQ29uc3RydWN0b3IoUmFuZG9tU2hpcFBvc2l0aW9uKDIsQm90UGxheWVyQm9hcmQpLFtdLGZhbHNlKTtcbiAgICBjb25zdCBsZW5ndGgxc2hpcD1uZXcgc2hpcENvbnN0cnVjdG9yKFJhbmRvbVNoaXBQb3NpdGlvbigxLEJvdFBsYXllckJvYXJkKSxbXSxmYWxzZSk7XG4gICAgY29uc3QgYW5vdGhlckxlbmd0aDFzaGlwPW5ldyBzaGlwQ29uc3RydWN0b3IoUmFuZG9tU2hpcFBvc2l0aW9uKDEsQm90UGxheWVyQm9hcmQpLFtdLGZhbHNlKTtcbiAgICByZXR1cm4ge2xlbmd0aDVzaGlwLGxlbmd0aDRzaGlwLGxlbmd0aDNzaGlwLGxlbmd0aDJzaGlwLGFub3RoZXJMZW5ndGgyc2hpcCxsZW5ndGgxc2hpcCxhbm90aGVyTGVuZ3RoMXNoaXB9O1xufTtcbm1vZHVsZS5leHBvcnRzPUNvbXB1dGVyQ2hvb3NlU2hpcHM7IiwiXG5mdW5jdGlvbiBGaW5pc2hHYW1lKHdpbm5lcixib2R5KXtcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2ctcG9wdXAnKSlyZXR1cm47XG4gICAgY29uc3QgcG9wdXA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnZ2ctcG9wdXAnKTtcbiAgICBcbiAgICBjb25zdCBwb3B1cFRleHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBUZXh0LmNsYXNzTGlzdC5hZGQoJ2dnLXBvcHVwLXRleHQnKTtcblxuICAgIHBvcHVwVGV4dC5pbm5lclRleHQ9J3RoZSAnK3dpbm5lcisnIGhhcyB3b24gdGhpcyBnYW1lISc7XG5cbiAgICBjb25zdCBwbGF5QWdhaW49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcGxheUFnYWluLmNsYXNzTGlzdC5hZGQoJ3BsYXktYWdhaW4tYnRuJyk7XG5cbiAgICBwbGF5QWdhaW4uaW5uZXJUZXh0PSdBbm90aGVyIHJvdW5kPyc7XG4gICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSlcbiAgICBwb3B1cFRleHQuYXBwZW5kKHBsYXlBZ2Fpbik7XG4gICAgcG9wdXAuYXBwZW5kKHBvcHVwVGV4dCk7XG4gICAgYm9keS5hcHBlbmQocG9wdXApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwb3B1cC5zdHlsZS5vcGFjaXR5PScxJztcbiAgICB9LCAxMCk7XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cz1GaW5pc2hHYW1lOyIsImZ1bmN0aW9uIEdhbWVCb2FyZEFycmF5VXBkYXRlKEdhbWVCb2FyZEFycmF5LHN0YXJ0Q29yZHMsZW5kQ29yZHMpe1xuICAgIGxldCBkaXJlY3Rpb249Jyc7XG4gICAgbGV0IGhvd01hbnlUaWxlcz0wO1xuICAgIGlmKHN0YXJ0Q29yZHNbMF0tZW5kQ29yZHNbMF09PTAgJiYgc3RhcnRDb3Jkc1sxXS1lbmRDb3Jkc1sxXT09MCl7IC8vIHN0YXJ0IGFuZCBlbmQgY29vcmRpbmF0ZXMgYXJlIHRoZSBzYW1lXG4gICAgICAgIEdhbWVCb2FyZEFycmF5LnB1c2goW3N0YXJ0Q29yZHNbMF0sc3RhcnRDb3Jkc1sxXV0pO1xuICAgICAgICByZXR1cm4gR2FtZUJvYXJkQXJyYXk7XG4gICAgfVxuICAgIGVsc2UgaWYoc3RhcnRDb3Jkc1swXS1lbmRDb3Jkc1swXT09MCl7XG5cblxuICAgICAgICAvL3RoZSBzaGlwIG1vdmVzIHZlcnRpY2FsbHlcbiAgICAgICAgaG93TWFueVRpbGVzID0gTWF0aC5hYnMoc3RhcnRDb3Jkc1sxXS1lbmRDb3Jkc1sxXSkrMTtcbiAgICAgICAgaWYoc3RhcnRDb3Jkc1sxXS1lbmRDb3Jkc1sxXTwwKXtcbiAgICAgICAgICAgIGRpcmVjdGlvbj0nZG93bic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzdGFydENvcmRzWzFdLWVuZENvcmRzWzFdPjApe1xuXG4gICAgICAgICAgICBkaXJlY3Rpb249J3VwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnc210aCB3aXRoIGRpcmVjdGlvbiBpcyBiYWQnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoc3RhcnRDb3Jkc1sxXS1lbmRDb3Jkc1sxXT09MCl7XG5cbiAgICAgICAgLy90aGUgc2hpcCBtb3ZlcyBob3Jpem9udGFsbHlcbiAgICAgICAgaG93TWFueVRpbGVzID0gTWF0aC5hYnMoc3RhcnRDb3Jkc1swXS1lbmRDb3Jkc1swXSkrMTtcbiAgICAgICAgaWYoc3RhcnRDb3Jkc1swXS1lbmRDb3Jkc1swXTwwKXtcbiAgICAgICAgICAgIGRpcmVjdGlvbj0ncmlnaHQnO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzdGFydENvcmRzWzBdLWVuZENvcmRzWzBdPjApe1xuXG4gICAgICAgICAgICBkaXJlY3Rpb249J2xlZnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdzbXRoIHdpdGggZGlyZWN0aW9uIGlzIGJhZCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnc210aCBpcyBiYWQnO1xuICAgIH1cblxuXG5cbiAgICBmb3IobGV0IGk9MDtpPGhvd01hbnlUaWxlcztpKyspe1xuICAgICAgICBpZihkaXJlY3Rpb249PSdkb3duJyl7XG4gICAgICAgICAgICBHYW1lQm9hcmRBcnJheS5wdXNoKFtzdGFydENvcmRzWzBdLHN0YXJ0Q29yZHNbMV0raV0pO1xuICAgICAgICB9IGVsc2UgaWYoZGlyZWN0aW9uPT0ndXAnKXtcbiAgICAgICAgICAgIEdhbWVCb2FyZEFycmF5LnB1c2goW3N0YXJ0Q29yZHNbMF0sc3RhcnRDb3Jkc1sxXS1pXSk7XG4gICAgICAgIH0gZWxzZSBpZihkaXJlY3Rpb249PSdyaWdodCcpe1xuICAgICAgICAgICAgR2FtZUJvYXJkQXJyYXkucHVzaChbc3RhcnRDb3Jkc1swXStpLHN0YXJ0Q29yZHNbMV1dKTtcbiAgICAgICAgfSBlbHNlIGlmKGRpcmVjdGlvbj09J2xlZnQnKXtcbiAgICAgICAgICAgIEdhbWVCb2FyZEFycmF5LnB1c2goW3N0YXJ0Q29yZHNbMF0taSxzdGFydENvcmRzWzFdXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3NtdGggd2l0aCBwdXNoaW5nIGludG8gZ2FtZWJvYXJkYXJyYXkgaXMgYmFkJztcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiBHYW1lQm9hcmRBcnJheTtcbn1cbm1vZHVsZS5leHBvcnRzPUdhbWVCb2FyZEFycmF5VXBkYXRlOyIsIi8vIHRoZXNlIHR3byB2YXJpYWJsZXMgaGVscCBkZXRlcm1pbmUgd2hlbiB0byBzaG9wIHRoZSBleHBsYW5hdGlvbiBvdmVybGF5LlxubGV0IG5ld1NoaXA9dHJ1ZTtcbmxldCBlbmRUaWxlPWZhbHNlO1xubGV0IG92ZXJsYXlUaW1lPTIwMDA7XG5sZXQgb3ZlcmxheVN0YXJ0VGltZSA9IDIwMDtcblxuZnVuY3Rpb24gb3ZlcmxheShwbGF5ZXJCb2FyZCxib2R5KXtcbiAgICBjb25zdCBvdmVybGF5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnc2hpcC1vdmVybGF5Jyk7XG5cbiAgICBpZihwbGF5ZXJCb2FyZC5sZW5ndGg9PTApe1xuICAgIC8vIFN0YXJ0aW5nIG92ZXJsYXkgbG9hZHMgd2hlbiB0aGUgcGxheWVyIHNoaXAgY2hvb3Npbmcgd2luZG93IGxvYWRzXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgICAgICBvdmVybGF5LmlubmVyVGV4dD0nUGxhY2UgMiBzaGlwcyBvZiBsZW5ndGggMSc7XG4gICAgICAgICAgICBib2R5LmFwcGVuZChvdmVybGF5KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUub3BhY2l0eT0nMSc7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLm9wYWNpdHk9JzAnO1xuICAgICAgICAgICAgfSwgb3ZlcmxheVRpbWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0sIG92ZXJsYXlUaW1lKzUwMCk7XG4gICAgICAgIH0sIG92ZXJsYXlTdGFydFRpbWUpO1xuICAgIH0gZWxzZSBpZihwbGF5ZXJCb2FyZC5sZW5ndGg9PTIpe1xuICAgICAgICAvLyBMb2FkcyB3aGVuIGZpcnN0IDIgc2hpcHMgb2YgbGVuZ3RoIDEgYXJlIHBsYWNlZCAtIGluZGljYXRlcyB0aGF0IG5leHQgMiBzaGlwcyBzaG91bGQgYmUgb2YgbGVuZ3RoIDJcbiAgICAgICAgaWYobmV3U2hpcCE9ZmFsc2Upe1xuXG4gICAgICAgIG5ld1NoaXA9ZmFsc2U7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1NoaXApO1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBvdmVybGF5LmlubmVyVGV4dD0nUGxhY2UgMiBzaGlwcyBvZiBsZW5ndGggMic7XG4gICAgICAgICAgICBib2R5LmFwcGVuZChvdmVybGF5KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUub3BhY2l0eT0nMSc7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLm9wYWNpdHk9JzAnO1xuICAgICAgICAgICAgfSwgb3ZlcmxheVRpbWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0sIG92ZXJsYXlUaW1lKzUwMCk7XG4gICAgICAgIH0sIG92ZXJsYXlTdGFydFRpbWUpO1xuICAgIH1cbiAgICB9IGVsc2UgaWYocGxheWVyQm9hcmQubGVuZ3RoPT0zKXtcbiAgICAgICAgLy8gUHJlcGFyZXMgZm9yIHRoZSBuZXh0IG92ZXJsYXkoMSBzaGlwIG9mIGxlbmd0aCAzKVxuICAgICAgICBuZXdTaGlwPXRydWU7XG4gICAgfSBlbHNlIGlmKHBsYXllckJvYXJkLmxlbmd0aD09NCl7XG4gICAgLy8gTG9hZHMgd2hlbiAyIHNoaXBzIG9mIGxlbmd0aCAyIGFyZSBwbGFjZWQgLSBpbmRpY2F0ZXMgdGhhdCBuZXh0IDEgc2hpcCBzaG91bGQgYmUgb2YgbGVuZ3RoIDNcblxuICAgICAgICBpZihuZXdTaGlwIT1mYWxzZSl7XG4gICAgICAgICAgICBuZXdTaGlwPWZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuaW5uZXJUZXh0PSdQbGFjZSAxIHNoaXAgb2YgbGVuZ3RoIDMnO1xuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kKG92ZXJsYXkpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLm9wYWNpdHk9JzEnO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5vcGFjaXR5PScwJztcbiAgICAgICAgICAgICAgICB9LCBvdmVybGF5VGltZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSwgb3ZlcmxheVRpbWUrNTAwKTtcbiAgICAgICAgICAgIH0sIG92ZXJsYXlTdGFydFRpbWUpO1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYocGxheWVyQm9hcmQubGVuZ3RoPT01KXtcbiAgICAgICAgLy8gTG9hZHMgd2hlbiBzaGlwIG9mIGxlbmd0aCAzIGlzIHBsYWNlZCAtIGluZGljYXRlcyB0aGF0IG5leHQgc2hpcCBzaG91bGQgYmUgb2YgbGVuZ3RoIDRcbiAgICAgICAgbmV3U2hpcD10cnVlO1xuICAgICAgICBpZihlbmRUaWxlPT10cnVlKXsgLy8gYWRkaXRpb25hbCBzdGVwIGZvciBmaWd1cmluZyBvdXQgaWYgdGhlIGNsaWNrIG9mIGEgYnV0dG9uKHdoZW4gdGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCkgaXMgb24gdGhlIHN0YXJ0IG9mIHRoZSBjb29yZHMgb3IgdGhlIGVuZC5cbiAgICAgICAgICAgIGVuZFRpbGU9ZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYobmV3U2hpcCE9ZmFsc2Upe1xuICAgICAgICAgICAgbmV3U2hpcD1mYWxzZTtcbiAgICAgICAgICAgIGVuZFRpbGU9dHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LmlubmVyVGV4dD0nUGxhY2UgMSBzaGlwIG9mIGxlbmd0aCA0JztcbiAgICAgICAgICAgICAgICBib2R5LmFwcGVuZChvdmVybGF5KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5vcGFjaXR5PScxJztcbiAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUub3BhY2l0eT0nMCc7XG4gICAgICAgICAgICAgICAgfSwgb3ZlcmxheVRpbWUpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0sIG92ZXJsYXlUaW1lKzUwMCk7XG4gICAgICAgICAgICB9LCBvdmVybGF5U3RhcnRUaW1lKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZihwbGF5ZXJCb2FyZC5sZW5ndGg9PTYpe1xuICAgICAgICAvLyBMb2FkcyB3aGVuIHNoaXAgb2YgbGVuZ3RoIDQgaXMgcGxhY2VkIC0gaW5kaWNhdGVzIHRoYXQgbmV4dCBzaGlwIHNob3VsZCBiZSBvZiBsZW5ndGggNVxuICAgICAgICBuZXdTaGlwPXRydWU7XG4gICAgICAgIGlmKGVuZFRpbGU9PXRydWUpeyAvLyBhZGRpdGlvbmFsIHN0ZXAgZm9yIGZpZ3VyaW5nIG91dCBpZiB0aGUgY2xpY2sgb2YgYSBidXR0b24od2hlbiB0aGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkKSBpcyBvbiB0aGUgc3RhcnQgb2YgdGhlIGNvb3JkcyBvciB0aGUgZW5kLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKG5ld1NoaXAhPWZhbHNlKXtcbiAgICAgICAgICAgIG5ld1NoaXA9ZmFsc2U7XG4gICAgICAgICAgICBlbmRUaWxlPXRydWU7XG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5pbm5lclRleHQ9J1BsYWNlIDEgc2hpcCBvZiBsZW5ndGggNSc7XG4gICAgICAgICAgICAgICAgYm9keS5hcHBlbmQob3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUub3BhY2l0eT0nMSc7XG4gICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLm9wYWNpdHk9JzAnO1xuICAgICAgICAgICAgICAgIH0sIG92ZXJsYXlUaW1lKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBvdmVybGF5VGltZSs1MDApO1xuICAgICAgICAgICAgfSwgb3ZlcmxheVN0YXJ0VGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cz1vdmVybGF5OyIsImNvbnN0IHNoaXBDb25zdHJ1Y3Rvcj1yZXF1aXJlKCcuL3NoaXBDcmVhdGlvbi5qcycpO1xuY29uc3QgR2FtZUJvYXJkQXJyYXlVcGRhdGU9cmVxdWlyZSgnLi9HYW1lQm9hcmRBcnJheS5qcycpO1xuY29uc3QgVUlwbGF5ZXJDaG9vc2VTaGlwc1Jlc3BvbnNlPXJlcXVpcmUoJy4vVUlwbGF5ZXJDaG9vc2VTaGlwc1Jlc3BvbnNlLmpzJyk7XG5cblxuXG5sZXQgdGlsZT0wOyAvLyAwIC0gc3RhcnRDb29yZHMsIDEgLSBlbmRDb29yZHNcbmxldCBzdGFydENvcmRzO1xuZnVuY3Rpb24gcGxheWVyQ2hvb3NlU2hpcHMoY29vcmRpbmF0ZXMsR2FtZUJvYXJkLHBsYXllckJvYXJkKXtcblxuICAgIGlmKHBsYXllckJvYXJkLmxlbmd0aDw3KXsgLy8gbWF4IHNoaXBzIHRoYXQgY2FuIGJlIG9jY3VwaWVkIGJ5IHRoZSBwbGF5ZXJcblxuICAgICAgICAvLyBjdXJyZW50IGNsaWNrZWQgYm94ZXMgY29vcmRzXG4gICAgICAgIGxldCBYID0gcGFyc2VJbnQoY29vcmRpbmF0ZXNbMF0pO1xuICAgICAgICBsZXQgWSA9IHBhcnNlSW50KGNvb3JkaW5hdGVzWzFdKTtcbiAgICAgICAgbGV0IGNvb3Jkcz1bWCxZXTtcblxuICAgICAgICBpZihwbGF5ZXJCb2FyZC5sZW5ndGg9PTAgfHwgcGxheWVyQm9hcmQubGVuZ3RoPT0xKXsgLy8gd29ya3MgaWYgZmlyc3Qgb3Igc2Vjb25kIHNoaXAgaXMgYmVlaW5nIGNyZWF0ZWQoYm90aCBhcmUgMSBsZW5ndGgpXG4gICAgICAgICAgICBzdGFydENvcmRzPWNvb3JkcztcbiAgICAgICAgICAgIGVuZENvcmRzPWNvb3JkcztcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnB1c2gobmV3IHNoaXBDb25zdHJ1Y3Rvcih7c3RhcnRDb3JkcyxlbmRDb3Jkc30sW10sZmFsc2UpKTtcbiAgICAgICAgICAgIEdhbWVCb2FyZEFycmF5VXBkYXRlKEdhbWVCb2FyZCxjb29yZHMsY29vcmRzKTtcbiAgICAgICAgICAgIFVJcGxheWVyQ2hvb3NlU2hpcHNSZXNwb25zZShwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYocGxheWVyQm9hcmQubGVuZ3RoPT0yIHx8IHBsYXllckJvYXJkLmxlbmd0aD09Myl7IC8vIHdvcmtzIGlmIHRoaXJkIG9yIGZvdXJ0aCBzaGlwIGlzIGJlZWluZyBjcmVhdGVkKGJvdGggYXJlIDIgbGVuZ3RoKVxuICAgICAgICAgICAgaWYodGlsZT09MCl7IC8vIGNoZWNrIGlmIGl0IGlzIHRoZSBzdGFydENvb3JkcyBvZiB0aGUgc2hpcFxuXG4gICAgICAgICAgICAgICAgc3RhcnRDb3Jkcz1jb29yZHM7XG4gICAgICAgICAgICAgICAgdGlsZSsrO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYodGlsZT09MSl7IC8vIGNoZWNrIGlmIGl0IGlzIHRoZSBlbmRDb29yZHMgb2YgdGhlIHNoaXBcblxuICAgICAgICAgICAgICAgIHRpbGU9MDtcbiAgICAgICAgICAgICAgICBsZXQgZW5kQ29yZHM9Y29vcmRzO1xuICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLnB1c2gobmV3IHNoaXBDb25zdHJ1Y3Rvcih7c3RhcnRDb3JkcyxlbmRDb3Jkc30sW10sZmFsc2UpKTtcbiAgICAgICAgICAgICAgICBHYW1lQm9hcmRBcnJheVVwZGF0ZShHYW1lQm9hcmQsc3RhcnRDb3JkcyxlbmRDb3Jkcyk7XG4gICAgICAgICAgICAgICAgVUlwbGF5ZXJDaG9vc2VTaGlwc1Jlc3BvbnNlKHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYocGxheWVyQm9hcmQubGVuZ3RoPT00KXsgLy8gZmlmdGggc2hpcChsZW5ndGggMylcbiAgICAgICAgICAgIGlmKHRpbGU9PTApe1xuICAgICAgICAgICAgICAgIHN0YXJ0Q29yZHM9Y29vcmRzO1xuICAgICAgICAgICAgICAgIHRpbGUrKztcblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfSBlbHNlIGlmKHRpbGU9PTEpe1xuXG4gICAgICAgICAgICAgICAgdGlsZT0wO1xuICAgICAgICAgICAgICAgIGxldCBlbmRDb3Jkcz1jb29yZHM7XG5cbiAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5wdXNoKG5ldyBzaGlwQ29uc3RydWN0b3Ioe3N0YXJ0Q29yZHMsZW5kQ29yZHN9LFtdLGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgR2FtZUJvYXJkQXJyYXlVcGRhdGUoR2FtZUJvYXJkLHN0YXJ0Q29yZHMsZW5kQ29yZHMpO1xuICAgICAgICAgICAgICAgIFVJcGxheWVyQ2hvb3NlU2hpcHNSZXNwb25zZShwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYocGxheWVyQm9hcmQubGVuZ3RoPT01KXsgLy8gc2l4dGggc2hpcChsZW5ndGggNClcbiAgICAgICAgICAgIGlmKHRpbGU9PTApe1xuICAgICAgICAgICAgICAgIHN0YXJ0Q29yZHM9Y29vcmRzO1xuICAgICAgICAgICAgICAgIHRpbGUrKztcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZih0aWxlPT0xKXtcbiAgICAgICAgICAgICAgICB0aWxlPTA7XG4gICAgICAgICAgICAgICAgbGV0IGVuZENvcmRzPWNvb3JkcztcblxuICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLnB1c2gobmV3IHNoaXBDb25zdHJ1Y3Rvcih7c3RhcnRDb3JkcyxlbmRDb3Jkc30sW10sZmFsc2UpKTtcbiAgICAgICAgICAgICAgICBHYW1lQm9hcmRBcnJheVVwZGF0ZShHYW1lQm9hcmQsc3RhcnRDb3JkcyxlbmRDb3Jkcyk7XG4gICAgICAgICAgICAgICAgVUlwbGF5ZXJDaG9vc2VTaGlwc1Jlc3BvbnNlKHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYocGxheWVyQm9hcmQubGVuZ3RoPT02KXsgLy8gc2V2ZW50aCBzaGlwKGxlbmd0aCA1KVxuICAgICAgICAgICAgaWYodGlsZT09MCl7XG4gICAgICAgICAgICAgICAgc3RhcnRDb3Jkcz1jb29yZHM7XG4gICAgICAgICAgICAgICAgdGlsZSsrO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfSBlbHNlIGlmKHRpbGU9PTEpe1xuICAgICAgICAgICAgICAgIHRpbGU9MDtcbiAgICAgICAgICAgICAgICBsZXQgZW5kQ29yZHM9Y29vcmRzO1xuXG4gICAgICAgICAgICAgICAgcGxheWVyQm9hcmQucHVzaChuZXcgc2hpcENvbnN0cnVjdG9yKHtzdGFydENvcmRzLGVuZENvcmRzfSxbXSxmYWxzZSkpO1xuICAgICAgICAgICAgICAgIEdhbWVCb2FyZEFycmF5VXBkYXRlKEdhbWVCb2FyZCxzdGFydENvcmRzLGVuZENvcmRzKTtcbiAgICAgICAgICAgICAgICBVSXBsYXllckNob29zZVNoaXBzUmVzcG9uc2UocGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIFxuXG4gXG4gICAgfVxuXG4gICAgaWYocGxheWVyQm9hcmQubGVuZ3RoPT03KXtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdGVUxMIEJPQVJEJyk7XG4gICAgICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBVSSB3aGVuIG1heCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYXllckJvYXJkO1xuICAgIH1cblxuXG5tb2R1bGUuZXhwb3J0cz1wbGF5ZXJDaG9vc2VTaGlwcztcblxuXG4iLCJcbmZ1bmN0aW9uIFVJcGxheWVyQ2hvb3NlU2hpcHNSZXNwb25zZShwbGF5ZXJCb2FyZCl7XG5cbiAgICBsZXQgc21hbGxlckNvb3JkO1xuXG5wbGF5ZXJCb2FyZC5mb3JFYWNoKHNoaXAgPT4ge1xuICAgIGlmKChzaGlwLkNvb3JkaW5hdGVzLmVuZENvcmRzWzBdID09IHNoaXAuQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXSkmJihzaGlwLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdID09IHNoaXAuQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXSkpeyAvLyBpZiBzaGlwIGlzIG9ubHkgMSB0aWxlXG4gICAgICAgIGxldCB0aWxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvb3JkaW5hdGVzPVwiJHtzaGlwLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF19JHtzaGlwLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV19XCJdYCk7IC8vIGdldCB0aGF0IHRpbGVcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG5cbiAgICB9IGVsc2UgaWYoc2hpcC5Db29yZGluYXRlcy5lbmRDb3Jkc1swXSA9PSBzaGlwLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF0peyAvLyBYcyBhcmUgZXF1YWwgLSBzaGlwIGlzIGdvaW5nIHZlcnRpY2FsbHlcblxuICAgICAgICBsZXQgdGlsZVF1YW50aXR5ID0gTWF0aC5hYnMoc2hpcC5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXS1zaGlwLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV0pKzE7XG4gICAgICAgIGlmKHNoaXAuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV08c2hpcC5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdKSB7IC8vIGdldCB0aGUgc21hbGxlc3QgdmFsdWUgb2YgdGhlIDIgdGhhdCBhcmUgZGlmZmVyZW50KFlzIGluIHRoaXMgY2FzZSlcbiAgICAgICAgICAgIHNtYWxsZXJDb29yZD1zaGlwLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdO1xuICAgICAgICB9IGVsc2Ugc21hbGxlckNvb3JkPXNoaXAuQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXTtcblxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aWxlUXVhbnRpdHk7IGkrKyl7IC8vIGdvIHRocm91Z2ggYWxsIG9mIHRoZSB0aWxlcyB0aGF0IGEgc2hpcCBjbGFzcyBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgICAgICAgIGxldCB0aWxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvb3JkaW5hdGVzPVwiJHtzaGlwLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF19JHtzbWFsbGVyQ29vcmQraX1cIl1gKTtcbiAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcblxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKHNoaXAuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV0gPT0gc2hpcC5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdKXsgLy8gWXMgYXJlIGVxdWFsIC0gc2hpcCBpcyBnb2luZyBob3Jpem9udGFsbHlcblxuICAgICAgICBsZXQgdGlsZVF1YW50aXR5ID0gTWF0aC5hYnMoc2hpcC5Db29yZGluYXRlcy5lbmRDb3Jkc1swXS1zaGlwLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF0pKzE7XG4gICAgICAgIGlmKHNoaXAuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF08c2hpcC5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdKSB7XG4gICAgICAgICAgICBzbWFsbGVyQ29vcmQ9c2hpcC5Db29yZGluYXRlcy5lbmRDb3Jkc1swXTtcbiAgICAgICAgfSBlbHNlIHNtYWxsZXJDb29yZD1zaGlwLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF07XG5cbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGlsZVF1YW50aXR5OyBpKyspe1xuICAgICAgICAgICAgIGxldCB0aWxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvb3JkaW5hdGVzPVwiJHtzbWFsbGVyQ29vcmQraX0ke3NoaXAuQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXX1cIl1gKTtcbiAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzPVVJcGxheWVyQ2hvb3NlU2hpcHNSZXNwb25zZTsiLCJcblxuZnVuY3Rpb24gY2hlY2tUaGVTaGlwKHBsYXllckJvYXJkLGlzU2hpcEdvb2QsR2FtZUJvYXJkKXtcbiAgICBcbi8vIFNob3VsZCBjaGVjayBpZiB0aGUgc2hpcHMgYXJlIGdvaW5nIHRoZSB3YXkgdGhleSBzaG91bGQgLSBjaGVjayBpZiB0aGV5IGFyZSB0aGUgbGVuZ3RoIHRoYXQgdGhleSBhcmUgc3VwcG9zZWQgdG8gYmUgYW5kIGNoZWNrIGlmIHRoZXkgYXJlbid0IGdvaW5nIGJvdGggaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5XG5cbi8vIENvdWxkIGhhdmUgZG9uZSB0aGlzIHdpdGggYSBsb29wIC0gbm90ZSB0byBzZWxmLlxuXG5pZihwbGF5ZXJCb2FyZC5sZW5ndGg9PTMpe1xuICAgIGlmKFxuICAgICAgICAoIChwbGF5ZXJCb2FyZFsyXS5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdPT1wbGF5ZXJCb2FyZFsyXS5Db29yZGluYXRlcy5lbmRDb3Jkc1swXSkgJiZcbiAgICAgICAgKChNYXRoLmFicyhwbGF5ZXJCb2FyZFsyXS5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdLXBsYXllckJvYXJkWzJdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdKSkrMSA9PSAyICkgKSB8fFxuICAgICAgICAoIChwbGF5ZXJCb2FyZFsyXS5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdPT1wbGF5ZXJCb2FyZFsyXS5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXSkgJiZcbiAgICAgICAgKChNYXRoLmFicyhwbGF5ZXJCb2FyZFsyXS5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdLXBsYXllckJvYXJkWzJdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzBdKSkrMSA9PSAyICkgKSApe1xuICAgICAgICAgICAgaXNTaGlwR29vZD10cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlzU2hpcEdvb2Q9ZmFsc2U7XG4gICAgfVxufVxuaWYocGxheWVyQm9hcmQubGVuZ3RoPT00KXtcbiAgICBpZihcbiAgICAgICAgKCAocGxheWVyQm9hcmRbM10uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXT09cGxheWVyQm9hcmRbM10uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0pICYmXG4gICAgICAgICgoTWF0aC5hYnMocGxheWVyQm9hcmRbM10uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXS1wbGF5ZXJCb2FyZFszXS5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXSkpKzEgPT0gMiApICkgfHxcbiAgICAgICAgKCAocGxheWVyQm9hcmRbM10uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXT09cGxheWVyQm9hcmRbM10uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV0pICYmXG4gICAgICAgICgoTWF0aC5hYnMocGxheWVyQm9hcmRbM10uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXS1wbGF5ZXJCb2FyZFszXS5Db29yZGluYXRlcy5lbmRDb3Jkc1swXSkpKzEgPT0gMiApICkgKXtcbiAgICAgICAgICAgIGlzU2hpcEdvb2Q9dHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpc1NoaXBHb29kPWZhbHNlO1xuICAgIH1cbn1cbmlmKHBsYXllckJvYXJkLmxlbmd0aD09NSl7XG4gICAgaWYoXG4gICAgICAgICggKHBsYXllckJvYXJkWzRdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF09PXBsYXllckJvYXJkWzRdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzBdKSAmJlxuICAgICAgICAoKE1hdGguYWJzKHBsYXllckJvYXJkWzRdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV0tcGxheWVyQm9hcmRbNF0uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV0pKSsxID09IDMgKSApIHx8XG4gICAgICAgICggKHBsYXllckJvYXJkWzRdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV09PXBsYXllckJvYXJkWzRdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdKSAmJlxuICAgICAgICAoKE1hdGguYWJzKHBsYXllckJvYXJkWzRdLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF0tcGxheWVyQm9hcmRbNF0uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0pKSsxID09IDMgKSApICl7XG4gICAgICAgICAgICBpc1NoaXBHb29kPXRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaXNTaGlwR29vZD1mYWxzZTtcbiAgICB9XG59XG5pZihwbGF5ZXJCb2FyZC5sZW5ndGg9PTYpe1xuICAgIGlmKFxuICAgICAgICAoIChwbGF5ZXJCb2FyZFs1XS5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdPT1wbGF5ZXJCb2FyZFs1XS5Db29yZGluYXRlcy5lbmRDb3Jkc1swXSkgJiZcbiAgICAgICAgKChNYXRoLmFicyhwbGF5ZXJCb2FyZFs1XS5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdLXBsYXllckJvYXJkWzVdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdKSkrMSA9PSA0ICkgKSB8fFxuICAgICAgICAoIChwbGF5ZXJCb2FyZFs1XS5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdPT1wbGF5ZXJCb2FyZFs1XS5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXSkgJiZcbiAgICAgICAgKChNYXRoLmFicyhwbGF5ZXJCb2FyZFs1XS5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdLXBsYXllckJvYXJkWzVdLkNvb3JkaW5hdGVzLmVuZENvcmRzWzBdKSkrMSA9PSA0ICkgKSApe1xuICAgICAgICAgICAgaXNTaGlwR29vZD10cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlzU2hpcEdvb2Q9ZmFsc2U7XG4gICAgfVxufVxuaWYocGxheWVyQm9hcmQubGVuZ3RoPT03KXtcbiAgICBpZihcbiAgICAgICAgKCAocGxheWVyQm9hcmRbNl0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXT09cGxheWVyQm9hcmRbNl0uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0pICYmXG4gICAgICAgICgoTWF0aC5hYnMocGxheWVyQm9hcmRbNl0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXS1wbGF5ZXJCb2FyZFs2XS5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXSkpKzEgPT0gNSApICkgfHxcbiAgICAgICAgKCAocGxheWVyQm9hcmRbNl0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1sxXT09cGxheWVyQm9hcmRbNl0uQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV0pICYmXG4gICAgICAgICgoTWF0aC5hYnMocGxheWVyQm9hcmRbNl0uQ29vcmRpbmF0ZXMuc3RhcnRDb3Jkc1swXS1wbGF5ZXJCb2FyZFs2XS5Db29yZGluYXRlcy5lbmRDb3Jkc1swXSkpKzEgPT0gNSApICkgKXtcbiAgICAgICAgICAgIGlzU2hpcEdvb2Q9dHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpc1NoaXBHb29kPWZhbHNlO1xuICAgIH1cbn1cblxuXG4vLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IDIgZXhhY3QgdGlsZXMgaW4gR2FtZUJvYXJkIGFycmF5IC0gaXQgbWVhbnMgc2hpcHMgYXJlIG92ZXJsYXBwaW5nXG5mb3IobGV0IGk9MDtpPEdhbWVCb2FyZC5sZW5ndGg7aSsrKXtcbiAgICBmb3IobGV0IGo9MDtqPEdhbWVCb2FyZC5sZW5ndGg7aisrKXtcbiAgICAgICAgaWYoR2FtZUJvYXJkW2ldWzBdPT1HYW1lQm9hcmRbal1bMF0gJiYgR2FtZUJvYXJkW2ldWzFdPT1HYW1lQm9hcmRbal1bMV0gJiYgaSE9ail7XG4gICAgICAgICAgICByZXR1cm4gaXNTaGlwR29vZD1mYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbnJldHVybiBpc1NoaXBHb29kO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzPWNoZWNrVGhlU2hpcDsiLCJcbmZ1bmN0aW9uIHNoaXBDb25zdHJ1Y3RvcihDb29yZGluYXRlcyxoaXRQb3NpdGlvbixzdW5rKXtcbiAgICB0aGlzLkNvb3JkaW5hdGVzPUNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaGl0UG9zaXRpb249aGl0UG9zaXRpb247XG4gICAgdGhpcy5zdW5rPXN1bms7XG59O1xuc2hpcENvbnN0cnVjdG9yLnByb3RvdHlwZS5BbGxDb29yZGluYXRlcz1mdW5jdGlvbigpeyAvLyBnZXRzIGFsbCB0aGUgY29vcmRpbmF0ZXMgYmV0d2VlbiBzdGFydCBhbmQgZW5kIHBvc2l0aW9uc1xuICAgIGNvbnN0IGFsbENvb3JkaW5hdGVzPVtdO1xuXG4gICAgaWYoTWF0aC5hYnModGhpcy5Db29yZGluYXRlcy5lbmRDb3Jkc1swXS10aGlzLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF0pPT0wKXtcbiAgICAgICAgLy8gdmVydGljYWwgc2hpcFxuICAgICAgICBjb25zdCBsZW5ndGg9TWF0aC5hYnModGhpcy5Db29yZGluYXRlcy5lbmRDb3Jkc1sxXS10aGlzLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMV0pKzE7XG4gICAgICAgIGxldCBsb25nZXJDb29yZGluYXRlPTA7XG4gICAgICAgIGlmKHRoaXMuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV0+dGhpcy5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdKXtsb25nZXJDb29yZGluYXRlPXRoaXMuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMV07fVxuICAgICAgICBlbHNle2xvbmdlckNvb3JkaW5hdGU9dGhpcy5Db29yZGluYXRlcy5zdGFydENvcmRzWzFdfTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxsZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGFsbENvb3JkaW5hdGVzLnB1c2goW3RoaXMuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0sbG9uZ2VyQ29vcmRpbmF0ZS1pXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBob3Jpem9udGFsIHNoaXBcblxuICAgICAgICBjb25zdCBsZW5ndGg9TWF0aC5hYnModGhpcy5Db29yZGluYXRlcy5lbmRDb3Jkc1swXS10aGlzLkNvb3JkaW5hdGVzLnN0YXJ0Q29yZHNbMF0pKzE7XG4gICAgICAgIGxldCBsb25nZXJDb29yZGluYXRlPTA7XG4gICAgICAgIGlmKHRoaXMuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF0+dGhpcy5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdKXtsb25nZXJDb29yZGluYXRlPXRoaXMuQ29vcmRpbmF0ZXMuZW5kQ29yZHNbMF07fVxuICAgICAgICBlbHNle2xvbmdlckNvb3JkaW5hdGU9dGhpcy5Db29yZGluYXRlcy5zdGFydENvcmRzWzBdfTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxsZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGFsbENvb3JkaW5hdGVzLnB1c2goW2xvbmdlckNvb3JkaW5hdGUtaSx0aGlzLkNvb3JkaW5hdGVzLmVuZENvcmRzWzFdXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFsbENvb3JkaW5hdGVzO1xufVxuXG5cblxubW9kdWxlLmV4cG9ydHM9c2hpcENvbnN0cnVjdG9yOyIsImNvbnN0IENvbXB1dGVyQ2hvb3NlU2hpcHMgPSByZXF1aXJlKCcuL0NvbXB1dGVyQ2hvb3NlU2hpcHMnKTtcbmNvbnN0IENoZWNrSGl0ID0gcmVxdWlyZSgnLi9DaGVja0hpdCcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0R2FtZShCb3RHYW1lQm9hcmQsQm90UGxheWVyQm9hcmQsYm9keSxHYW1lQm9hcmQscGxheWVyQm9hcmQpe1xuICAgIEJvdEdhbWVCb2FyZCA9IENvbXB1dGVyQ2hvb3NlU2hpcHMoQm90UGxheWVyQm9hcmQpO1xuICAgIGJvZHkuaW5uZXJIVE1MPScnO1xuICAgIGNvbnN0IHBsYXllclNpZGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyU2lkZS5zZXRBdHRyaWJ1dGUoJ2lkJywncGxheWVyLXNpZGUnKTtcbiAgICBjb25zdCBjb21wdXRlclNpZGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tcHV0ZXJTaWRlLnNldEF0dHJpYnV0ZSgnaWQnLCdjb21wdXRlci1zaWRlJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWVIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJvamVjdE5hbWVIMy5pbm5lclRleHQ9J0JhdHRsZXNoaXBzJztcbiAgICBjb25zdCBtb2RpZmllZEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgbW9kaWZpZWRCb2R5LnN0eWxlLmRpc3BsYXk9J2dyaWQnO1xuICAgIG1vZGlmaWVkQm9keS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzPScxZnIgNGZyIDFmcic7XG4gICAgbW9kaWZpZWRCb2R5LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnM9JzFmciAxZnInO1xuXG4gICAgLy8gYm9keXtcbiAgICAvLyAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAvLyAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAvLyAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIC8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIC8vIH1cbiAgICBib2R5LmFwcGVuZChwcm9qZWN0TmFtZUgzLCBwbGF5ZXJTaWRlLGNvbXB1dGVyU2lkZSk7XG4gICAgZm9yKGxldCBpPTE7aTw9NjtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MTtqPD02O2orKyl7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJCb3g9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7Ly8gcGxheWVyIHNpZGUgYm94ZXNcbiAgICAgICAgICAgIHBsYXllckJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZXMnLGAke2p9JHtpfWApO1xuICAgICAgICAgICAgR2FtZUJvYXJkLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudFswXT09aiAmJiBlbGVtZW50WzFdPT1pKXtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm94LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTsgLy8gdGhpcyBtZWFucyB0aGVyZSBpcyBhIHBhcnQgb2YgYSBzaGlwIG9uIHRoYXQgdGlsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGxheWVyQm94LmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaWRlLWJveCcpO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckJveD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gUEMgc2lkZSBib3hlc1xuICAgICAgICAgICAgY29tcHV0ZXJCb3guc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGVzJyxgJHtqfSR7aX1gKTtcbiAgICAgICAgICAgIGNvbnN0IENsaWNrZWRUaWxlQ29vcmRzPWNvbXB1dGVyQm94LmRhdGFzZXQuY29vcmRpbmF0ZXM7XG4gICAgICAgICAgICBjb21wdXRlckJveC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaWRlLWJveCcpO1xuICAgICAgICAgICAgZnVuY3Rpb24gQ2hlY2soKXtcbiAgICAgICAgICAgICAgICBDaGVja0hpdChDbGlja2VkVGlsZUNvb3JkcyxCb3RQbGF5ZXJCb2FyZCxCb3RHYW1lQm9hcmQsR2FtZUJvYXJkLHBsYXllckJvYXJkLGJvZHkpOyAvLyBjaGVja3MgcGxheWVycyBoaXQgLi4uXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLENoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXB1dGVyQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxDaGVjaylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29tcHV0ZXJTaWRlLmFwcGVuZChjb21wdXRlckJveCk7XG4gICAgICAgICAgICBwbGF5ZXJTaWRlLmFwcGVuZChwbGF5ZXJCb3gpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGV4cGxhbmF0aW9uT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGV4cGxhbmF0aW9uT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdleHBsYW5hdGlvbi1vdmVybGF5Jyk7XG5cbiAgICBjb25zdCBFT3RleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBFT3RleHREaXYuY2xhc3NMaXN0LmFkZCgnZXhwbGFuYXRpb24tb3ZlcmxheS10ZXh0RGl2Jyk7XG4gICAgLy8gRU8gLSBleHBsYW5hdGlvbiBvdmVybGF5XG4gICAgY29uc3QgRU9oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgRU9oZWFkZXIuaW5uZXJUZXh0PWBJdCdzIGZpZ2h0IHRpbWUhYDtcbiAgICBjb25zdCBFT2ZpcnN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBFT2ZpcnN0VGV4dC5pbm5lclRleHQgPSAnWW91ciBib2FyZCBpcyBvbiB0aGUgbGVmdCwgeW91ciBlbmVtaWVzIGlzIG9uIHRoZSByaWdodC4nO1xuICAgIGNvbnN0IEVPc2Vjb25kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBFT3NlY29uZFRleHQuaW5uZXJUZXh0ID0gJ09uIHlvdXIgYm9hcmQgYWxsIGhpdCB0aWxlcyBhcmUgZ3JheS4gT24geW91ciBlbmVtaWVzIGJvYXJkLCBtaXNzZWQgaGl0cyBhcmUgZ3JheSwgYWNjdXJhdGUgaGl0cyBhcmUgbGlnaHQgYmx1ZSBhbmQgZGVzdHJveWVkIHNoaXBzIGFyZSBkYXJrIGJsdWUuJztcbiAgICBjb25zdCBFT2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIEVPYnV0dG9uLmlubmVyVGV4dD0nRmlnaHQhJztcbiAgICBFT2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdleHBsYW5hdGlvbi1vdmVybGF5LWJ1dHRvbicpO1xuXG4gICAgRU90ZXh0RGl2LmFwcGVuZChFT2hlYWRlcixFT2ZpcnN0VGV4dCxFT3NlY29uZFRleHQsRU9idXR0b24pO1xuICAgIGV4cGxhbmF0aW9uT3ZlcmxheS5hcHBlbmQoRU90ZXh0RGl2KTtcbiAgICBib2R5LmFwcGVuZChleHBsYW5hdGlvbk92ZXJsYXkpO1xuICAgIEVPYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBleHBsYW5hdGlvbk92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfSlcblxuXG4gICAgLy8gY29uc3Qgb3ZlcmxheT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2ZpbmFsLXNoaXAtb3ZlcmxheScpO1xuXG4gICAgLy8gY29uc3Qgb3ZlcmxheVRleHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gb3ZlcmxheVRleHQuY2xhc3NMaXN0LmFkZCgnZmluYWwtc2hpcC1vdmVybGF5LXRleHQnKTtcbiAgICAvLyBvdmVybGF5VGV4dC5pbm5lclRleHQ9J1N0YXJ0IHRoZSBnYW1lISc7XG4gICAgLy8gb3ZlcmxheS5hcHBlbmQob3ZlcmxheVRleHQpO1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICBib2R5LmFwcGVuZChvdmVybGF5KTtcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgICAgICBvdmVybGF5LnN0eWxlLm9wYWNpdHk9JzAnO1xuICAgIC8vICAgICB9LCAxNTAwKTtcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIC8vICAgICB9LCAyMDAwKTtcbiAgICAvLyB9LCAwKTtcblxucmV0dXJuIEJvdEdhbWVCb2FyZDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9zcmMvZmlyc3RTY3JlZW5TdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4uL3NyYy9wbGF5ZXJDaG9vc2VTaGlwc1N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3JjL0dhbWVwbGF5LmNzc1wiO1xuaW1wb3J0IHBsYXllckNob29zZVNoaXBzIGZyb20gJy4vUGxheWVyQ2hvb3NlU2hpcHMuanMnO1xuaW1wb3J0IG92ZXJsYXkgZnJvbSAnLi9PdmVybGF5LmpzJztcbmltcG9ydCBzdGFydEdhbWUgZnJvbSAnLi9zdGFydEdhbWUuanMnXG5pbXBvcnQgY2hlY2tUaGVTaGlwIGZyb20gJy4vY2hlY2tUaGVTaGlwLmpzJ1xuXG5sZXQgR2FtZUJvYXJkPVtdOyAvLyB0aGlzIGFycmF5IHdpbGwgc3RvcmUgcGxheWVycyBib2FyZFxubGV0IHBsYXllckJvYXJkPVtdOyAvLyB0aGlzIGFycmF5IHdpbGwgc3RvcmUgcGxheWVycyBzaGlwc1xuXG5sZXQgQm90R2FtZUJvYXJkPVtdOyAvLyB0aGlzIGFycmF5IHdpbGwgc3RvcmUgY29tcHV0ZXJzIHNoaXBzXG5sZXQgQm90UGxheWVyQm9hcmQ9W107IC8vIHRoaXMgYXJyYXkgd2lsbCBzdG9yZSBjb21wdXRlcnMgYm9hcmRcbmxldCBpc1NoaXBHb29kPXRydWU7IC8vIGJvb2xlYW4gd2lsbCBiZSBzZXQgdG8gZmFsc2Ugd2hlbiBhIHNoaXAgaXNuJ3QgdGhlIGxlbmd0aCBpdHMgc3VwcG9zZWQgdG8gYmUgb3IgZ29lcyBib3RoIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseVxuXG5jb25zdCBib2R5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTsgLy8gbWFpbiBib2R5IHRoYXQgd2lsbCBiZSBtYW5pcHVsYXRlZCB3aGVuIGkgbmVlZCB0byBsb2FkIGRpZmZlcmVudCBzY3JlZW5zXG5cbi8vIHN0YXJ0aW5nIHNjcmVlbiBlbGVtZW50c1xuY29uc3QgZmlyc3RTY3JlZW49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtZmlyc3Qtc2NyZWVuJyk7XG5jb25zdCBzdGFydEJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtZ2FtZScpO1xuY29uc3QgY29udGVudFBsYXllckNob29zZVNoaXBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBib2FyZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCdib2FyZCcpO1xuXG5mb3IobGV0IGk9MTtpPD02O2krKyl7XG5cbiAgICBmb3IobGV0IGo9MTtqPD02O2orKyl7XG5cbiAgICAgICAgY29uc3QgYm94PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGVzJyxgJHtqfSR7aX1gKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwbGF5ZXJDaG9vc2VTaGlwcyh0aGlzLmRhdGFzZXQuY29vcmRpbmF0ZXMsR2FtZUJvYXJkLHBsYXllckJvYXJkKTsgLy8gdXBkYXRlcyBwbGF5ZXJCb2FyZCwgR2FtZUJvYXJkIGFycmF5cyBhbmQgdGhlIFVJIGluc2lkZVxuICAgICAgICAgICAgaXNTaGlwR29vZD1jaGVja1RoZVNoaXAocGxheWVyQm9hcmQsaXNTaGlwR29vZCxHYW1lQm9hcmQpOyAvLyBjaGVja3MgaWYgc2hpcCBwbGFjZWQgYnkgdGhlIHBsYXllciBpcyBwbGFjZWQgYnkgdGhlIHJ1bGVzXG4gICAgICAgICAgICBpZihpc1NoaXBHb29kPT1mYWxzZSl7IC8vIHRocm93cyBhbiBlcnJvciBpZiBpdCBpc24ndCwgcmVzdGFydHMgdGhlIHdpbmRvd1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ3NoaXAtb3ZlcmxheScpO1xuICAgICAgICAgICAgICAgIGVycm9yLnN0eWxlLm9wYWNpdHk9JzEnO1xuICAgICAgICAgICAgICAgIGVycm9yLnN0eWxlLmJhY2tncm91bmRDb2xvcj0ncmdiKDIyMiwgOTYsIDk2KSc7XG4gICAgICAgICAgICAgICAgZXJyb3IuaW5uZXJUZXh0PWBGb2xsb3cgdGhlIHJ1bGVzIG9mIHNoaXAgY3JlYXRpb24gLSB5b3VyIHNoaXBzIGNhbid0IGdvIGJvdGggaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5LCB0aGV5IG11c3QgYmUgdGhlIGxlbmd0aCBzcGVjaWZpZWQgYW5kIHRoZXkgY2FuJ3Qgb3ZlcmxhcCFgO1xuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kKGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0sIDYwMDApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIFN0YXJ0cyB3aG9sZSBjb2RlIGFsbCBvdmVyIGFnYWluXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdmVybGF5KHBsYXllckJvYXJkLGJvZHkpO1xuICAgICAgICAgICAgaWYocGxheWVyQm9hcmQubGVuZ3RoPT03KXtcbiAgICAgICAgICAgICAgICBCb3RHYW1lQm9hcmQgPSBzdGFydEdhbWUoQm90R2FtZUJvYXJkLEJvdFBsYXllckJvYXJkLGJvZHksR2FtZUJvYXJkLHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBib2FyZC5hcHBlbmQoYm94KTtcbiAgICB9XG59XG5cblxuXG5cbmNvbnRlbnRQbGF5ZXJDaG9vc2VTaGlwcy5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXBsYXllci1jaG9vc2Utc2hpcHMnKTtcbmNvbnRlbnRQbGF5ZXJDaG9vc2VTaGlwcy5hcHBlbmQoYm9hcmQpO1xuXG5cbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgIGZpcnN0U2NyZWVuLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgZXhwbGFuYXRpb25PdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXhwbGFuYXRpb25PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2V4cGxhbmF0aW9uLW92ZXJsYXknKTtcblxuICAgIGNvbnN0IEVPdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEVPdGV4dERpdi5jbGFzc0xpc3QuYWRkKCdleHBsYW5hdGlvbi1vdmVybGF5LXRleHREaXYnKTtcbiAgICAvLyBFTyAtIGV4cGxhbmF0aW9uIG92ZXJsYXlcbiAgICBjb25zdCBFT2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBFT2hlYWRlci5pbm5lclRleHQ9J1dlbGNvbWUgdG8gQmF0dGxlc2hpcHMhJztcbiAgICBjb25zdCBFT2ZpcnN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBFT2ZpcnN0VGV4dC5pbm5lclRleHQgPSAnVGhpcyBpcyBhIHR5cGljYWwgZ2FtZSBvZiBiYXR0bGVzaGlwcyAtIHlvdSB0cnkgdG8gc2hvb3QgeW91ciBlbmVtaWVzIHNoaXBzLCB5b3VyIGVuZW15IHRyaWVzIHRvIHNob290IHlvdXJzLic7XG4gICAgY29uc3QgRU9zZWNvbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIEVPc2Vjb25kVGV4dC5pbm5lclRleHQgPSAnRmlyc3Qgb2YgYWxsLCBjaG9vc2UgeW91ciBib2FyZCBzaGlwcyBwb3NpdGlvbnMgYnkgZm9sbG93aW5nIHRoZSBvdmVybGF5cyB0aGF0IHBvcHVwLic7XG4gICAgY29uc3QgRU9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBFT2J1dHRvbi5pbm5lclRleHQ9J0NvbnRpbnVlJztcbiAgICBFT2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdleHBsYW5hdGlvbi1vdmVybGF5LWJ1dHRvbicpO1xuXG4gICAgRU90ZXh0RGl2LmFwcGVuZChFT2hlYWRlcixFT2ZpcnN0VGV4dCxFT3NlY29uZFRleHQsRU9idXR0b24pO1xuXG4gICAgRU9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIGV4cGxhbmF0aW9uT3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgb3ZlcmxheShwbGF5ZXJCb2FyZCxib2R5KTtcbiAgICB9KVxuXG4gICAgZXhwbGFuYXRpb25PdmVybGF5LmFwcGVuZChFT3RleHREaXYpO1xuICAgIGJvZHkuYXBwZW5kKGV4cGxhbmF0aW9uT3ZlcmxheSk7XG4gICAgYm9keS5hcHBlbmQoY29udGVudFBsYXllckNob29zZVNoaXBzKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9