(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/components/util/Tab.jsx":
/*!*************************************!*\
  !*** ./src/components/util/Tab.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_MyInfoTabContents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/MyInfoTabContents */ \"./src/pages/MyInfoTabContents.jsx\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nclass Tab extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    this.getCurrentIndex = e => {\n      this.activeIndex = e.currentTarget.getAttribute('data-index');\n      e.currentTarget.parentNode.childNodes.forEach(v => {\n        v.classList.remove('active');\n      });\n      e.currentTarget.classList.add('active');\n    };\n\n    this.activeIndex = '0';\n  }\n\n  render() {\n    switch (this.props.pageName) {\n      case 'myInfo':\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"tabs\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"active\",\n          \"data-index\": \"0\",\n          onClick: this.getCurrentIndex\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: \"#\"\n        }, \"Personal\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          \"data-index\": \"1\",\n          onClick: this.getCurrentIndex\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: \"#\"\n        }, \"Day off log\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_MyInfoTabContents__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          tabIndex: this.activeIndex\n        }));\n\n      default:\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"tabs\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"active\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: \"#\"\n        }, \"Tab 1\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: \"#\"\n        }, \"Tab 2\"))));\n    }\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nconst _default = Tab;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Tab, \"Tab\", \"/Users/sungkyukim/Documents/Projects/git/portfolio/gb_erp/app-client/src/components/util/Tab.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/sungkyukim/Documents/Projects/git/portfolio/gb_erp/app-client/src/components/util/Tab.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/util/Tab.jsx?");

/***/ }),

/***/ "./src/pages/MyInfo.jsx":
/*!******************************!*\
  !*** ./src/pages/MyInfo.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_util_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/util/Tab */ \"./src/components/util/Tab.jsx\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nclass MyInfo extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const pageName = 'myInfo';\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"area_contents\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card_section\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_util_Tab__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      pageName: pageName\n    })))));\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nconst _default = MyInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MyInfo, \"MyInfo\", \"/Users/sungkyukim/Documents/Projects/git/portfolio/gb_erp/app-client/src/pages/MyInfo.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/sungkyukim/Documents/Projects/git/portfolio/gb_erp/app-client/src/pages/MyInfo.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/pages/MyInfo.jsx?");

/***/ }),

/***/ "./src/pages/MyInfoTabContents.jsx":
/*!*****************************************!*\
  !*** ./src/pages/MyInfoTabContents.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Personal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Personal */ \"./src/pages/Personal.jsx\");\n/* harmony import */ var _pages_RequestDayOff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/RequestDayOff */ \"./src/pages/RequestDayOff.jsx\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nclass MyInfoTabContents extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    switch (this.props.tabIndex) {\n      case '0':\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Personal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n\n      case '1':\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_RequestDayOff__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null);\n    }\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nconst _default = MyInfoTabContents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MyInfoTabContents, \"MyInfoTabContents\", \"/Users/sungkyukim/Documents/Projects/git/portfolio/gb_erp/app-client/src/pages/MyInfoTabContents.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/sungkyukim/Documents/Projects/git/portfolio/gb_erp/app-client/src/pages/MyInfoTabContents.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/pages/MyInfoTabContents.jsx?");

/***/ }),

/***/ "./src/pages/Personal.jsx":
/*!********************************!*\
  !*** ./src/pages/Personal.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nclass Personal extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"tab_contents\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card_title\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Basic Info\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"btn_info_modify\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"#\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      className: \"fas fa-pen\"\n    }), \"modify\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card_body\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section_form row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"\"\n    }, \"First Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      value: \"Sungkyu\",\n      readOnly: true\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"\"\n    }, \"Last Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      value: \"Kim\",\n      readOnly: true\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"\"\n    }, \"Preferred Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      value: \"David\",\n      readOnly: true\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section_form row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"\"\n    }, \"Birth day (mm/dd/yyyy)\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      value: \"01/01/1919\",\n      placeholder: \"\",\n      readOnly: true\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section_form row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"\"\n    }, \"Gender\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      value: \"Male\",\n      readOnly: true\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section_form row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"\"\n    }, \"Address 1\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      value: \"\",\n      readOnly: true\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section_form row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"\"\n    }, \"Address 1\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      value: \"\",\n      readOnly: true\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section_form row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"\"\n    }, \"E-mail\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      value: \"dkim@gbc.com\",\n      readOnly: true\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section_form row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"\"\n    }, \"Cellphone\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      value: \"+82 10 9876-5432\",\n      readOnly: true\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section_form row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"\"\n    }, \"Hire Date (mm/dd/yyyy)\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      value: \"01/01/2018\",\n      readOnly: true\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section_form row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-4\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"\"\n    }, \"Job Title\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      value: \"Senior front-end developer\",\n      readOnly: true\n    })))));\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nconst _default = Personal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Personal, \"Personal\", \"/Users/sungkyukim/Documents/Projects/git/portfolio/gb_erp/app-client/src/pages/Personal.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/sungkyukim/Documents/Projects/git/portfolio/gb_erp/app-client/src/pages/Personal.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/pages/Personal.jsx?");

/***/ }),

/***/ "./src/pages/RequestDayOff.jsx":
/*!*************************************!*\
  !*** ./src/pages/RequestDayOff.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nclass RequestDayOff extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"tab_contents\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card_title\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Day off\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card_body\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"box_vacation\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      className: \"fas fa-umbrella-beach\"\n    }), \" Vacation Days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"vacation_days\"\n    }, \"17.0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Days available\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Log\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"box_info_select\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      name: \"\",\n      className: \"select\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"2019\"\n    }, \"2019\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"2018\"\n    }, \"2018\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"2017\"\n    }, \"2017\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n      className: \"table table-striped\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Date\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Description\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Used\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Balance\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"01/01/2019\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"Vacation days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"-1 days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"17 days\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"01/01/2019\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"Vacation days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"-1 days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"17 days\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"01/01/2019\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"Vacation days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"-1 days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"17 days\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"01/01/2019\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"Vacation days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"-1 days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"17 days\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"01/01/2019\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"Vacation days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"-1 days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"17 days\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"01/01/2019\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"Vacation days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"-1 days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"17 days\"))))));\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n\nconst _default = RequestDayOff;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(RequestDayOff, \"RequestDayOff\", \"/Users/sungkyukim/Documents/Projects/git/portfolio/gb_erp/app-client/src/pages/RequestDayOff.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/sungkyukim/Documents/Projects/git/portfolio/gb_erp/app-client/src/pages/RequestDayOff.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/pages/RequestDayOff.jsx?");

/***/ })

}]);