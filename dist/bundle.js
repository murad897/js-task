/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #bcead5;\\n  display: flex;\\n  align-items: center;\\n  height: 100vh;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  flex-direction: column;\\n  gap: 30px;\\n  max-width: 1200px;\\n  margin: 0 auto;\\n  padding: 20px;\\n}\\n\\n#inner-container {\\n  display: grid;\\n  gap: 10px;\\n  justify-self: center;\\n  justify-content: center;\\n  text-align: center;\\n  height: 600px;\\n  align-items: center;\\n}\\n\\n.container {\\n  width: 100%;\\n  margin: 0 auto;\\n  border-radius: 10px;\\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\\n}\\n\\n.popup {\\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\\n  padding: 10px 20px;\\n  border-radius: 10px;\\n  margin-top: 30px;\\n}\\n\\nh1,\\np {\\n  letter-spacing: 0.1em;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.inner-popup {\\n  display: flex;\\n  text-align: center;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.inner-popup button {\\n  padding: 10px;\\n  background: none;\\n  border: none;\\n  cursor: pointer;\\n  color: white;\\n  border-radius: 5px;\\n  letter-spacing: 0.1em;\\n  color: #000000;\\n  font-weight: bold;\\n  font-size: 1.1em;\\n}\\n\\n.easy-level {\\n  background: #82cd47 !important;\\n}\\n\\n.medium-level {\\n  background: #f6f6c9 !important;\\n}\\n\\n.hard-level {\\n  background: #ff6464 !important;\\n}\\n\\n.prison2 {\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-template-rows: auto;\\n}\\n.prison6 {\\n  grid-template-columns: repeat(6, 1fr);\\n  grid-template-rows: auto;\\n}\\n.prison10 {\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: auto;\\n}\\n.prisoneazy {\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-template-rows: auto;\\n}\\n\\n.prisonmedium {\\n  grid-template-columns: repeat(8, 1fr);\\n  grid-template-rows: auto;\\n}\\n\\n.prisonhard {\\n  grid-template-columns: repeat(12, 1fr);\\n  grid-template-rows: auto;\\n}\\n.card {\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  cursor: pointer;\\n  border-radius: 5px;\\n  transform-style: preserve-3d;\\n  transform-origin: center right;\\n  transition: transform 1s;\\n}\\n\\n.card.rototate-card {\\n  transform: translateX(-100%) rotateY(-180deg);\\n}\\n\\n.rototate-card {\\n  pointer-events: none;\\n}\\n\\n.card-face {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  line-height: 260px;\\n  color: white;\\n  text-align: center;\\n  font-weight: bold;\\n  font-size: 40px;\\n  backface-visibility: hidden;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.card .card-front {\\n  background: rgb(19, 185, 141);\\n  border-radius: 5px;\\n}\\n\\n.card img {\\n  width: 100%;\\n  height: 100%;\\n  border-radius: 5px;\\n}\\n\\n.card-back {\\n  position: absolute;\\n  top: 0;\\n  height: 100%;\\n  left: 0;\\n  right: 0;\\n  margin-left: auto;\\n  margin-right: auto;\\n  background-color: #a8e890;\\n  transform: rotateY(180deg);\\n  border-radius: 5px;\\n}\\n\\n#inner-container::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n/* Hide scrollbar for IE, Edge and Firefox */\\n#inner-container {\\n  -ms-overflow-style: none; /* IE and Edge */\\n  scrollbar-width: none; /* Firefox */\\n}\\n\\n.timer-popup {\\n  display: none;\\n  width: 400px;\\n  height: auto;\\n  border-radius: 30px;\\n  font-size: 25px;\\n  text-align: center;\\n  position: fixed;\\n  background: #0e5e6f;\\n  padding: 30px;\\n  color: white;\\n  font-weight: bold;\\n  top: calc(50% - 80px);\\n  left: calc(50% - 230px);\\n}\\n\\n.timer-popup button {\\n  color: #432c7a;\\n  padding: 10px 40px;\\n  border: none;\\n  cursor: pointer;\\n  border-radius: 10px;\\n}\\n\\n.active {\\n  display: block;\\n}\\n\\n#selector {\\n  display: none;\\n  width: 130px;\\n  padding: 10px 20px;\\n  border-radius: 5px;\\n  margin-top: 12px;\\n  background-color: #ffefd6;\\n  border: none;\\n  cursor: pointer;\\n  font-size: 18px;\\n  position: relative;\\n  text-transform: uppercase;\\n  letter-spacing: 0.1em;\\n  font-weight: bold;\\n  z-index: 10;\\n  overflow: hidden;\\n}\\n\\n#selector div {\\n  padding: 5px;\\n}\\n\\n.selector-value {\\n  background-color: #ffefd6 !important;\\n  padding: 10px 20px !important;\\n  width: 130px;\\n  font-size: 18px;\\n  border-radius: 5px;\\n  margin-top: 12px;\\n}\\n\\n#selector:focus,\\n:hover {\\n  outline: none;\\n}\\n\\n.active-menu {\\n  display: block !important;\\n  text-align: left;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-task/./src/styles/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://js-task/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-task/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-task/./src/styles/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-task/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-task/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-task/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-task/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-task/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-task/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n\nvar optionsHard = [\"😀\", \"😀\", \"😇\", \"😇\", \"🙂\", \"🙂\", \"😝\", \"😝\", \"🙃\", \"🙃\", \"😁\", \"😁\", \"🤞\", \"🤞\", \"👎 \", \"👎 \", \"🤜\", \"🤜\", \"👏\", \"👏\", \"👧\", \"👧\", \"😑\", \"😑\", \"😞\", \"😞\", \"🥲\", \"🥲\", \"😂\", \"😂\", \"😊\", \"😊\", \"😵\", \"😵\", \"💩\", \"💩\", \"😾\", \"😾\", \"😹\", \"😹\", \"😼\", \"😼\", \"💀\", \"💀\", \"🤧\", \"🤧\", \"😷\", \"😷\", \"🤒\", \"🤒\", \"🤕\", \"🤕\", \"🥱\", \"🥱\", \"😪\", \"😪\", \"😡\", \"😡\", \"🤬\", \"🤬\", \"🤯\", \"🤯\", \"🤖\", \"🤖\", \"😈\", \"😈\", \"👹\", \"👹\", \"🥶\", \"🥶\", \"😎\", \"😎\", \"🎃\", \"🎃\", \"🐶\", \"🐶\", \"🐱\", \"🐱\", \"🐭\", \"🐭\", \"🐹\", \"🐹\", \"🐰\", \"🐰\", \"🦊\", \"🦊\", \"🐻\", \"🐻\", \"🐼\", \"🐼\", \"🐻‍❄️\", \"🐻‍❄️\", \"🐨\", \"🐨\", \"🐯\", \"🐯\", \"🐮\", \"🐮\", \"🐷\", \"🐷\", \"🦉\", \"🦉\", \"🦇\", \"🦇\", \"🐺\", \"🐺\", \"🌞\", \"🌞\", \"🌝\", \"🌝\", \"🌛\", \"🌛\", \"🌜\", \"🌜\", \"🌚\", \"🌚\", \"🌕\", \"🌕\", \"🌒\", \"🌒\", \"⚡️\", \"⚡️\", \"🌤\", \"🌤\", \"🌎\", \"🌎\", \"☔️\", \"☔️\", \"🌨\", \"🌨\", \"🌈\", \"🌈\", \"🍟\", \"🍟\", \"🍜\", \"🍜\", \"🍥\", \"🍥\", \"🍘\", \"🍘\", \"🍬\", \"🍬\", \"🥇\", \"🥇\"];\nvar optionsHard10x10 = [\"😀\", \"😀\", \"😇\", \"😇\", \"🙂\", \"🙂\", \"😝\", \"😝\", \"🙃\", \"🙃\", \"😁\", \"😁\", \"🤞\", \"🤞\", \"👎 \", \"👎 \", \"🤜\", \"🤜\", \"👏\", \"👏\", \"👧\", \"👧\", \"😑\", \"😑\", \"😞\", \"😞\", \"🥲\", \"🥲\", \"😂\", \"😂\", \"😊\", \"😊\", \"😵\", \"😵\", \"💩\", \"💩\", \"😾\", \"😾\", \"😹\", \"😹\", \"😼\", \"😼\", \"💀\", \"💀\", \"🤧\", \"🤧\", \"😷\", \"😷\", \"🤒\", \"🤒\", \"🤕\", \"🤕\", \"🥱\", \"🥱\", \"😪\", \"😪\", \"😡\", \"😡\", \"🤬\", \"🤬\", \"🤯\", \"🤯\", \"🤖\", \"🤖\", \"😈\", \"😈\", \"👹\", \"👹\", \"🥶\", \"🥶\", \"😎\", \"😎\", \"🎃\", \"🎃\", \"🐶\", \"🐶\", \"🐱\", \"🐱\", \"🐭\", \"🐭\", \"🐹\", \"🐹\", \"🐰\", \"🐰\", \"🦊\", \"🦊\", \"🐻\", \"🐻\", \"🐼\", \"🐼\", \"🐻‍❄️\", \"🐻‍❄️\", \"🐨\", \"🐨\", \"🐯\", \"🐯\", \"🐮\", \"🐮\", \"🐷\", \"🐷\"];\nvar optionsMedium = [\"😀\", \"😀\", \"😇\", \"😇\", \"🙂\", \"🙂\", \"😝\", \"😝\", \"🙃\", \"🙃\", \"😁\", \"😁\", \"🤞\", \"🤞\", \"👎 \", \"👎 \", \"🤜\", \"🤜\", \"👏\", \"👏\", \"👧\", \"👧\", \"😑\", \"😑\", \"😞\", \"😞\", \"🥲\", \"🥲\", \"😂\", \"😂\", \"😊\", \"😊\", \"😵\", \"😵\", \"💩\", \"💩\", \"😾\", \"😾\", \"😹\", \"😹\", \"😼\", \"😼\", \"💀\", \"💀\", \"🤧\", \"🤧\", \"😷\", \"😷\", \"🤒\", \"🤒\", \"🤕\", \"🤕\", \"🥱\", \"🥱\", \"😪\", \"😪\", \"😡\", \"😡\", \"🤬 \", \"🤬\", \"🤯\", \"🤯\", \"🤖\", \"🤖\"];\nvar optionsMedium6x6 = [\"😀\", \"😀\", \"😇\", \"😇\", \"🙂\", \"🙂\", \"😝\", \"😝\", \"🙃\", \"🙃\", \"😁\", \"😁\", \"🤞\", \"🤞\", \"👎 \", \"👎 \", \"🤜\", \"🤜\", \"👏\", \"👏\", \"👧\", \"👧\", \"😑\", \"😑\", \"😞\", \"😞\", \"🥲\", \"🥲\", \"😂\", \"😂\", \"😊\", \"😊\", \"😵\", \"😵\", \"💩\", \"💩\"];\nvar optionsEazy = [\"😇\", \"😇\", \"😀\", \"😀\", \"🙂\", \"🙂\", \"😝\", \"😝\", \"🙃\", \"🙃\", \"😁\", \"😁\", \"👎 \", \"👎 \", \"🤜\", \"🤜\"];\nvar optionsEazy2x2 = [\"😇\", \"😇\", \"😀\", \"😀\"];\nvar selector = document.querySelector(\".selector-value\");\nvar selectorMenu = document.querySelector(\"#selector\");\nvar innerContainer = document.querySelector(\"#inner-container\");\nvar finishedTextPopup = document.querySelector(\".timer-popup\");\nvar selectorMenuItems = Array.from(document.querySelectorAll(\".selector-item\"));\nvar buttons = Array.from(document.querySelectorAll(\".inner-popup button\"));\nvar cardsOnTable;\nvar chosenLevel;\nvar startTimer = 0;\nvar timer;\nvar gamefinishedText;\nvar PlayMemory = /** @class */ (function () {\n    function PlayMemory(level) {\n        this.level = level;\n    }\n    PlayMemory.prototype.play = function () {\n        this.getLevel();\n        this.cardClick();\n    };\n    PlayMemory.prototype.startTimer = function () {\n        var totalSeconds = 0;\n        timer = setInterval(function () {\n            ++totalSeconds;\n            var hour = Math.floor(totalSeconds / 3600);\n            var minute = Math.floor((totalSeconds - hour * 3600) / 60);\n            var seconds = totalSeconds - (hour * 3600 + minute * 60);\n            if (hour < 10)\n                hour = \"0\" + hour;\n            if (minute < 10)\n                minute = \"0\" + minute;\n            if (seconds < 10)\n                seconds = \"0\" + seconds;\n            gamefinishedText = \"<div>\\n      <p>Congrats you finished this level in</p>\\n      <p>\".concat(hour, \": \").concat(minute, \": \").concat(seconds, \"</p>\\n      </div>\");\n        }, 1000);\n    };\n    PlayMemory.prototype.getLevel = function () {\n        startTimer = 0;\n        clearInterval(timer);\n        this.level === \"2\"\n            ? (cardsOnTable = optionsEazy2x2\n                .sort(function () { return Math.random() - 0.5; }))\n            : null;\n        this.level === \"6\"\n            ? (cardsOnTable = optionsMedium6x6\n                .sort(function () { return Math.random() - 0.5; }))\n            : null;\n        this.level === \"10\"\n            ? (cardsOnTable = optionsHard10x10\n                .sort(function () { return Math.random() - 0.5; }))\n            : null;\n        this.level === \"eazy\"\n            ? (cardsOnTable = optionsEazy\n                .sort(function () { return Math.random() - 0.5; }))\n            : null;\n        this.level === \"medium\"\n            ? (cardsOnTable = optionsMedium\n                .sort(function () { return Math.random() - 0.5; }))\n            : null;\n        this.level === \"hard\"\n            ? (cardsOnTable = optionsHard\n                .sort(function () { return Math.random() - 0.5; }))\n            : null;\n        innerContainer.className = \"\";\n        innerContainer.classList.add(\"prison\".concat(this.level));\n        this.addCard(cardsOnTable);\n    };\n    PlayMemory.prototype.addCard = function (cardsOnTable) {\n        innerContainer.innerHTML = \"\";\n        cardsOnTable.map(function (item) {\n            var card = document.createElement(\"div\");\n            card.className = 'card';\n            var frontSide = document.createElement(\"div\");\n            frontSide.className = \"card-face card-front\";\n            var backSide = document.createElement(\"div\");\n            backSide.innerText = \"\".concat(item);\n            backSide.className = \"card-face card-back\";\n            card.appendChild(frontSide);\n            card.appendChild(backSide);\n            innerContainer.appendChild(card);\n        });\n        this.cardClick();\n    };\n    PlayMemory.prototype.cardClick = function () {\n        var _this = this;\n        var cards = document.querySelectorAll(\".card\");\n        var history = [];\n        cards.forEach(function (card, index) {\n            card.addEventListener(\"click\", function (e) {\n                console.log(card, 'card');\n                card.classList.add(\"rototate-card\");\n                startTimer += 1;\n                if (startTimer === 1) {\n                    _this.startTimer();\n                }\n                history.push({\n                    text: e.path[1].innerText,\n                    index: index,\n                });\n                if (history.length === cardsOnTable.length) {\n                    clearInterval(timer);\n                    startTimer = 0;\n                    finishedTextPopup.classList.add(\"active\");\n                    finishedTextPopup.innerHTML = gamefinishedText;\n                    history = [];\n                    setTimeout(function () {\n                        finishedTextPopup.classList.remove(\"active\");\n                        cards.forEach(function (item) {\n                            item.classList.remove(\"rototate-card\");\n                        });\n                        _this.getLevel();\n                    }, 3000);\n                }\n                if (history.length > 1) {\n                    history.map(function (item, index) {\n                        if (index !== 0 &&\n                            item.text === history[index - 1].text &&\n                            index % 2) {\n                            return null;\n                        }\n                        else if (index !== 0 && index % 2) {\n                            var removeActive = history.slice(-2);\n                            removeActive.forEach(function (item) {\n                                setTimeout(function () {\n                                    cards[item.index].classList.remove(\"rototate-card\");\n                                }, 700);\n                            });\n                            history.splice(history.length - 2, 2);\n                        }\n                    });\n                }\n            });\n        });\n    };\n    return PlayMemory;\n}());\nbuttons.map(function (button) {\n    button.addEventListener(\"click\", function () {\n        if (button.className !== \"selector-value\") {\n            chosenLevel = button.dataset.level;\n            var game = new PlayMemory(chosenLevel);\n            game.play();\n        }\n    });\n});\nselector.addEventListener(\"click\", function () {\n    selectorMenu.classList.toggle(\"active-menu\");\n});\nselectorMenuItems.forEach(function (item) {\n    item.addEventListener(\"click\", function () {\n        selectorMenu.classList.remove(\"active-menu\");\n        selector.innerHTML = \"<p>\".concat(item.textContent, \"&#x21d3;</p>\");\n        var customLevel = item.dataset.level;\n        var game = new PlayMemory(customLevel);\n        game.play();\n    });\n});\n\n\n//# sourceURL=webpack://js-task/./src/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;