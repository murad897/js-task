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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #bcead5;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  height: 100vh;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  flex-direction: column;\\r\\n  gap: 30px;\\r\\n  max-width: 1200px;\\r\\n  margin: 0 auto;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n#inner-container {\\r\\n  display: grid;\\r\\n  gap: 10px;\\r\\n  justify-self: center;\\r\\n  justify-content: center;\\r\\n  text-align: center;\\r\\n  height: 600px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 100%;\\r\\n  margin: 0 auto;\\r\\n  border-radius: 10px;\\r\\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\\r\\n  padding: 10px 20px;\\r\\n  border-radius: 10px;\\r\\n  margin-top: 30px;\\r\\n}\\r\\n\\r\\nh1,\\r\\np {\\r\\n  letter-spacing: 0.1em;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.inner-popup {\\r\\n  display: flex;\\r\\n  text-align: center;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.inner-popup button {\\r\\n  padding: 10px;\\r\\n  background: none;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  color: white;\\r\\n  border-radius: 5px;\\r\\n  letter-spacing: 0.1em;\\r\\n  color: #000000;\\r\\n  font-weight: bold;\\r\\n  font-size: 1.1em;\\r\\n}\\r\\n\\r\\n.easy-level {\\r\\n  background: #82cd47 !important;\\r\\n}\\r\\n\\r\\n.medium-level {\\r\\n  background: #f6f6c9 !important;\\r\\n}\\r\\n\\r\\n.hard-level {\\r\\n  background: #ff6464 !important;\\r\\n}\\r\\n\\r\\n.prison2 {\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  grid-template-rows: auto;\\r\\n}\\r\\n.prison6 {\\r\\n  grid-template-columns: repeat(6, 1fr);\\r\\n  grid-template-rows: auto;\\r\\n}\\r\\n.prison10 {\\r\\n  grid-template-columns: repeat(10, 1fr);\\r\\n  grid-template-rows: auto;\\r\\n}\\r\\n.prisoneazy {\\r\\n  grid-template-columns: repeat(4, 1fr);\\r\\n  grid-template-rows: auto;\\r\\n}\\r\\n\\r\\n.prisonmedium {\\r\\n  grid-template-columns: repeat(8, 1fr);\\r\\n  grid-template-rows: auto;\\r\\n}\\r\\n\\r\\n.prisonhard {\\r\\n  grid-template-columns: repeat(12, 1fr);\\r\\n  grid-template-rows: auto;\\r\\n}\\r\\n.card {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  cursor: pointer;\\r\\n  border-radius: 5px;\\r\\n  transform-style: preserve-3d;\\r\\n  transform-origin: center right;\\r\\n  transition: transform 1s;\\r\\n}\\r\\n\\r\\n.card.rototate-card {\\r\\n  transform: translateX(-100%) rotateY(-180deg);\\r\\n}\\r\\n\\r\\n.rototate-card {\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n.card-face {\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  line-height: 260px;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n  font-weight: bold;\\r\\n  font-size: 40px;\\r\\n  backface-visibility: hidden;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.card .card-front {\\r\\n  background: rgb(19, 185, 141);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.card img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.card-back {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  height: 100%;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  background-color: #a8e890;\\r\\n  transform: rotateY(180deg);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n#inner-container::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* Hide scrollbar for IE, Edge and Firefox */\\r\\n#inner-container {\\r\\n  -ms-overflow-style: none; /* IE and Edge */\\r\\n  scrollbar-width: none; /* Firefox */\\r\\n}\\r\\n\\r\\n.timer-popup {\\r\\n  display: none;\\r\\n  width: 400px;\\r\\n  height: auto;\\r\\n  border-radius: 30px;\\r\\n  font-size: 25px;\\r\\n  text-align: center;\\r\\n  position: fixed;\\r\\n  background: #0e5e6f;\\r\\n  padding: 30px;\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n  top: calc(50% - 80px);\\r\\n  left: calc(50% - 230px);\\r\\n}\\r\\n\\r\\n.timer-popup button {\\r\\n  color: #432c7a;\\r\\n  padding: 10px 40px;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n#selector {\\r\\n  display: none;\\r\\n  width: 130px;\\r\\n  padding: 10px 20px;\\r\\n  border-radius: 5px;\\r\\n  margin-top: 12px;\\r\\n  background-color: #ffefd6;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  font-size: 18px;\\r\\n  position: relative;\\r\\n  text-transform: uppercase;\\r\\n  letter-spacing: 0.1em;\\r\\n  font-weight: bold;\\r\\n  z-index: 10;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n#selector div {\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.selector-value {\\r\\n  background-color: #ffefd6 !important;\\r\\n  padding: 10px 20px !important;\\r\\n  width: 130px;\\r\\n  font-size: 18px;\\r\\n  border-radius: 5px;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n#selector:focus,\\r\\n:hover {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.active-menu {\\r\\n  display: block !important;\\r\\n  text-align: left;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-task/./src/styles/index.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n\r\nvar optionsHard = [\"😀\", \"😀\", \"😇\", \"😇\", \"🙂\", \"🙂\", \"😝\", \"😝\", \"🙃\", \"🙃\", \"😁\", \"😁\", \"🤞\", \"🤞\", \"👎 \", \"👎 \", \"🤜\", \"🤜\", \"👏\", \"👏\", \"👧\", \"👧\", \"😑\", \"😑\", \"😞\", \"😞\", \"🥲\", \"🥲\", \"😂\", \"😂\", \"😊\", \"😊\", \"😵\", \"😵\", \"💩\", \"💩\", \"😾\", \"😾\", \"😹\", \"😹\", \"😼\", \"😼\", \"💀\", \"💀\", \"🤧\", \"🤧\", \"😷\", \"😷\", \"🤒\", \"🤒\", \"🤕\", \"🤕\", \"🥱\", \"🥱\", \"😪\", \"😪\", \"😡\", \"😡\", \"🤬\", \"🤬\", \"🤯\", \"🤯\", \"🤖\", \"🤖\", \"😈\", \"😈\", \"👹\", \"👹\", \"🥶\", \"🥶\", \"😎\", \"😎\", \"🎃\", \"🎃\", \"🐶\", \"🐶\", \"🐱\", \"🐱\", \"🐭\", \"🐭\", \"🐹\", \"🐹\", \"🐰\", \"🐰\", \"🦊\", \"🦊\", \"🐻\", \"🐻\", \"🐼\", \"🐼\", \"🐻‍❄️\", \"🐻‍❄️\", \"🐨\", \"🐨\", \"🐯\", \"🐯\", \"🐮\", \"🐮\", \"🐷\", \"🐷\", \"🦉\", \"🦉\", \"🦇\", \"🦇\", \"🐺\", \"🐺\", \"🌞\", \"🌞\", \"🌝\", \"🌝\", \"🌛\", \"🌛\", \"🌜\", \"🌜\", \"🌚\", \"🌚\", \"🌕\", \"🌕\", \"🌒\", \"🌒\", \"⚡️\", \"⚡️\", \"🌤\", \"🌤\", \"🌎\", \"🌎\", \"☔️\", \"☔️\", \"🌨\", \"🌨\", \"🌈\", \"🌈\", \"🍟\", \"🍟\", \"🍜\", \"🍜\", \"🍥\", \"🍥\", \"🍘\", \"🍘\", \"🍬\", \"🍬\", \"🥇\", \"🥇\"];\r\nvar optionsHard10x10 = [\"😀\", \"😀\", \"😇\", \"😇\", \"🙂\", \"🙂\", \"😝\", \"😝\", \"🙃\", \"🙃\", \"😁\", \"😁\", \"🤞\", \"🤞\", \"👎 \", \"👎 \", \"🤜\", \"🤜\", \"👏\", \"👏\", \"👧\", \"👧\", \"😑\", \"😑\", \"😞\", \"😞\", \"🥲\", \"🥲\", \"😂\", \"😂\", \"😊\", \"😊\", \"😵\", \"😵\", \"💩\", \"💩\", \"😾\", \"😾\", \"😹\", \"😹\", \"😼\", \"😼\", \"💀\", \"💀\", \"🤧\", \"🤧\", \"😷\", \"😷\", \"🤒\", \"🤒\", \"🤕\", \"🤕\", \"🥱\", \"🥱\", \"😪\", \"😪\", \"😡\", \"😡\", \"🤬\", \"🤬\", \"🤯\", \"🤯\", \"🤖\", \"🤖\", \"😈\", \"😈\", \"👹\", \"👹\", \"🥶\", \"🥶\", \"😎\", \"😎\", \"🎃\", \"🎃\", \"🐶\", \"🐶\", \"🐱\", \"🐱\", \"🐭\", \"🐭\", \"🐹\", \"🐹\", \"🐰\", \"🐰\", \"🦊\", \"🦊\", \"🐻\", \"🐻\", \"🐼\", \"🐼\", \"🐻‍❄️\", \"🐻‍❄️\", \"🐨\", \"🐨\", \"🐯\", \"🐯\", \"🐮\", \"🐮\", \"🐷\", \"🐷\"];\r\nvar optionsMedium = [\"😀\", \"😀\", \"😇\", \"😇\", \"🙂\", \"🙂\", \"😝\", \"😝\", \"🙃\", \"🙃\", \"😁\", \"😁\", \"🤞\", \"🤞\", \"👎 \", \"👎 \", \"🤜\", \"🤜\", \"👏\", \"👏\", \"👧\", \"👧\", \"😑\", \"😑\", \"😞\", \"😞\", \"🥲\", \"🥲\", \"😂\", \"😂\", \"😊\", \"😊\", \"😵\", \"😵\", \"💩\", \"💩\", \"😾\", \"😾\", \"😹\", \"😹\", \"😼\", \"😼\", \"💀\", \"💀\", \"🤧\", \"🤧\", \"😷\", \"😷\", \"🤒\", \"🤒\", \"🤕\", \"🤕\", \"🥱\", \"🥱\", \"😪\", \"😪\", \"😡\", \"😡\", \"🤬 \", \"🤬\", \"🤯\", \"🤯\", \"🤖\", \"🤖\"];\r\nvar optionsMedium6x6 = [\"😀\", \"😀\", \"😇\", \"😇\", \"🙂\", \"🙂\", \"😝\", \"😝\", \"🙃\", \"🙃\", \"😁\", \"😁\", \"🤞\", \"🤞\", \"👎 \", \"👎 \", \"🤜\", \"🤜\", \"👏\", \"👏\", \"👧\", \"👧\", \"😑\", \"😑\", \"😞\", \"😞\", \"🥲\", \"🥲\", \"😂\", \"😂\", \"😊\", \"😊\", \"😵\", \"😵\", \"💩\", \"💩\"];\r\nvar optionsEazy = [\"😇\", \"😇\", \"😀\", \"😀\", \"🙂\", \"🙂\", \"😝\", \"😝\", \"🙃\", \"🙃\", \"😁\", \"😁\", \"👎 \", \"👎 \", \"🤜\", \"🤜\"];\r\nvar optionsEazy2x2 = [\"😇\", \"😇\", \"😀\", \"😀\"];\r\nvar selector = document.querySelector(\".selector-value\");\r\nvar selectorMenu = document.querySelector(\"#selector\");\r\nvar innerContainer = document.querySelector(\"#inner-container\");\r\nvar finishedTextPopup = document.querySelector(\".timer-popup\");\r\nvar selectorMenuItems = Array.from(document.querySelectorAll(\".selector-item\"));\r\nvar buttons = Array.from(document.querySelectorAll(\".inner-popup button\"));\r\nvar cardsOnTable;\r\nvar chosenLevel;\r\nvar startTimer = 0;\r\nvar timer;\r\nvar gamefinishedText;\r\nvar PlayMemory = /** @class */ (function () {\r\n    function PlayMemory(selectMenuItems, buttons, selector) {\r\n        this.selectMenuItems = selectMenuItems;\r\n        this.buttons = buttons;\r\n        this.selector = selector;\r\n        this.level = \"\";\r\n    }\r\n    PlayMemory.prototype.play = function () {\r\n        var _this = this;\r\n        this.buttons.map(function (button) {\r\n            button.addEventListener(\"click\", function () {\r\n                if (button.className !== \"selector-value\") {\r\n                    chosenLevel = button.dataset.level;\r\n                    _this.level = chosenLevel;\r\n                    _this.getLevel();\r\n                }\r\n            });\r\n        });\r\n        this.selector.addEventListener(\"click\", function () {\r\n            selectorMenu.classList.toggle(\"active-menu\");\r\n        });\r\n        selectorMenuItems.forEach(function (item) {\r\n            item.addEventListener(\"click\", function () {\r\n                selectorMenu.classList.remove(\"active-menu\");\r\n                selector.innerHTML = \"<p>\".concat(item.textContent, \"&#x21d3;</p>\");\r\n                var customLevel = item.dataset.level;\r\n                _this.level = customLevel;\r\n                _this.getLevel();\r\n            });\r\n        });\r\n    };\r\n    PlayMemory.prototype.startTimer = function () {\r\n        var totalSeconds = 0;\r\n        timer = setInterval(function () {\r\n            ++totalSeconds;\r\n            var hour = Math.floor(totalSeconds / 3600);\r\n            var minute = Math.floor((totalSeconds - hour * 3600) / 60);\r\n            var seconds = totalSeconds - (hour * 3600 + minute * 60);\r\n            if (hour < 10)\r\n                hour = \"0\" + hour;\r\n            if (minute < 10)\r\n                minute = \"0\" + minute;\r\n            if (seconds < 10)\r\n                seconds = \"0\" + seconds;\r\n            gamefinishedText = \"<div>\\n      <p>Congrats you finished this level in</p>\\n      <p>\".concat(hour, \": \").concat(minute, \": \").concat(seconds, \"</p>\\n      </div>\");\r\n        }, 1000);\r\n    };\r\n    PlayMemory.prototype.getLevel = function () {\r\n        startTimer = 0;\r\n        clearInterval(timer);\r\n        this.level === \"2\"\r\n            ? (cardsOnTable = optionsEazy2x2.sort(function () { return Math.random() - 0.5; }))\r\n            : null;\r\n        this.level === \"6\"\r\n            ? (cardsOnTable = optionsMedium6x6.sort(function () { return Math.random() - 0.5; }))\r\n            : null;\r\n        this.level === \"10\"\r\n            ? (cardsOnTable = optionsHard10x10.sort(function () { return Math.random() - 0.5; }))\r\n            : null;\r\n        this.level === \"eazy\"\r\n            ? (cardsOnTable = optionsEazy.sort(function () { return Math.random() - 0.5; }))\r\n            : null;\r\n        this.level === \"medium\"\r\n            ? (cardsOnTable = optionsMedium.sort(function () { return Math.random() - 0.5; }))\r\n            : null;\r\n        this.level === \"hard\"\r\n            ? (cardsOnTable = optionsHard.sort(function () { return Math.random() - 0.5; }))\r\n            : null;\r\n        innerContainer.className = \"\";\r\n        innerContainer.classList.add(\"prison\".concat(this.level));\r\n        this.addCard(cardsOnTable);\r\n    };\r\n    PlayMemory.prototype.addCard = function (cardsOnTable) {\r\n        innerContainer.innerHTML = \"\";\r\n        console.log('yes');\r\n        cardsOnTable.map(function (item) {\r\n            var card = document.createElement(\"div\");\r\n            card.className = \"card\";\r\n            var frontSide = document.createElement(\"div\");\r\n            frontSide.className = \"card-face card-front\";\r\n            var backSide = document.createElement(\"div\");\r\n            backSide.innerText = \"\".concat(item);\r\n            backSide.className = \"card-face card-back\";\r\n            card.appendChild(frontSide);\r\n            card.appendChild(backSide);\r\n            innerContainer.appendChild(card);\r\n        });\r\n        this.cardClick();\r\n    };\r\n    PlayMemory.prototype.cardClick = function () {\r\n        var _this = this;\r\n        var cards = document.querySelectorAll(\".card\");\r\n        var history = [];\r\n        cards.forEach(function (card, index) {\r\n            card.addEventListener(\"click\", function (e) {\r\n                console.log(card, \"card\");\r\n                card.classList.add(\"rototate-card\");\r\n                startTimer += 1;\r\n                if (startTimer === 1) {\r\n                    _this.startTimer();\r\n                }\r\n                history.push({\r\n                    text: e.path[1].innerText,\r\n                    index: index,\r\n                });\r\n                if (history.length === cardsOnTable.length) {\r\n                    clearInterval(timer);\r\n                    startTimer = 0;\r\n                    finishedTextPopup.classList.add(\"active\");\r\n                    finishedTextPopup.innerHTML = gamefinishedText;\r\n                    history = [];\r\n                    setTimeout(function () {\r\n                        finishedTextPopup.classList.remove(\"active\");\r\n                        cards.forEach(function (item) {\r\n                            item.classList.remove(\"rototate-card\");\r\n                        });\r\n                        _this.getLevel();\r\n                    }, 3000);\r\n                }\r\n                if (history.length > 1) {\r\n                    history.map(function (item, index) {\r\n                        if (index !== 0 &&\r\n                            item.text === history[index - 1].text &&\r\n                            index % 2) {\r\n                            return null;\r\n                        }\r\n                        else if (index !== 0 && index % 2) {\r\n                            var removeActive = history.slice(-2);\r\n                            removeActive.forEach(function (item) {\r\n                                setTimeout(function () {\r\n                                    cards[item.index].classList.remove(\"rototate-card\");\r\n                                }, 700);\r\n                            });\r\n                            history.splice(history.length - 2, 2);\r\n                        }\r\n                    });\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return PlayMemory;\r\n}());\r\nvar game = new PlayMemory(selectorMenuItems, buttons, selector);\r\ngame.play();\r\n\n\n//# sourceURL=webpack://js-task/./src/index.ts?");

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