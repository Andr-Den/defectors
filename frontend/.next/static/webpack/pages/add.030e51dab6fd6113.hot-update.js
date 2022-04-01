"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/add",{

/***/ "./src/pages/add.js":
/*!**************************!*\
  !*** ./src/pages/add.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_reducers_companiesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/reducers/companiesSlice */ \"./src/app/reducers/companiesSlice.js\");\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Add() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), name = ref[0], setName = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), website = ref1[0], setWebsite = ref1[1];\n    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), date = ref2[0], setDate = ref2[1];\n    var ref3 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(), register = ref3.register, handleSubmit = ref3.handleSubmit;\n    var onSubmit = function(data) {\n        dispatch((0,_app_reducers_companiesSlice__WEBPACK_IMPORTED_MODULE_4__.addCompany)(data));\n        router.push(\"/\");\n    };\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var handleAddClick = function(e) {\n        e.preventDefault();\n    };\n    var handleClick = function(e) {\n        e.preventDefault();\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-center align-items-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form, {\n            onSubmit: handleSubmit(onSubmit),\n            className: \"w-50\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Group, {\n                className: \"d-grid gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Label, {\n                        children: \"\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0438\\u0438\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/add.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Control, _objectSpread({}, register(\"name\"), {\n                        value: name || \"\",\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        }\n                    }), void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/add.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Label, {\n                        children: \"\\u0421\\u0441\\u044B\\u043B\\u043A\\u0430 \\u043D\\u0430 \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u044C\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/add.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Control, _objectSpread({}, register(\"website\"), {\n                        value: website || \"\",\n                        onChange: function(e) {\n                            return setWebsite(e.target.value);\n                        }\n                    }), void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/add.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Label, {\n                        children: \"\\u0414\\u0430\\u0442\\u0430\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/add.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Control, _objectSpread({}, register(\"date\"), {\n                        value: date || \"\",\n                        onChange: function(e) {\n                            return setDate(e.target.value);\n                        }\n                    }), void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/add.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        type: \"submit\",\n                        variant: \"success\",\n                        className: \"mt-3 w-25 m-auto\",\n                        onClick: handleAddClick,\n                        children: \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/add.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        variant: \"secondary\",\n                        className: \"w-25 m-auto\",\n                        onClick: handleClick,\n                        children: \"\\u041D\\u0430\\u0437\\u0430\\u0434\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/add.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/add.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/add.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/add.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Add, \"6xeZ3BBPcfvuIWOslpSKO2Hgvqk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Add;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(_app_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Add));\nvar _c;\n$RefreshReg$(_c, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUNBQUtSLE9BQU8sQ0FBQ1EsQ0FBQyxDQUFDVSxNQUFNLENBQUNGLEtBQUssQ0FBQzt5QkFBQTs7Ozs7NEJBQUc7a0NBQ2xHLDhEQUFDN0IsbURBQU07d0JBQUNnQyxJQUFJLEVBQUMsUUFBUTt3QkFBQ0MsT0FBTyxFQUFDLFNBQVM7d0JBQUNSLFNBQVMsRUFBQyxrQkFBa0I7d0JBQUNTLE9BQU8sRUFBRWQsY0FBYztrQ0FBRSxrREFBUTs7Ozs7NEJBQWlCO2tDQUMvRyw4REFBUHBCLG1EQUFNO3dCQUFDaUMsT0FBTyxFQUFDLFdBQVc7d0JBQUNSLFNBQVMsRUFBQyxhQUFhO3dCQUFDUyxPQUFPLEVBQUVYLFdBQVc7a0NBQUUsZ0NBQUs7Ozs7OzRCQUFTOzs7Ozs7b0JBQzdFOzs7OztnQkFDUjs7Ozs7WUFDSCxDQUNKO0NBQ0g7R0F0Q01sQixHQUFHOztRQUNPTixvREFBVztRQUlPRixvREFBTztRQUszQkssa0RBQVM7OztBQVZqQkcsS0FBQUEsR0FBRztBQXdDWiwrREFBZVAsb0RBQU8sQ0FBQ00sa0RBQUssQ0FBQyxDQUFDQyxHQUFHLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWRkLmpzP2RlMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgYWRkQ29tcGFueSB9IGZyb20gJy4uL2FwcC9yZWR1Y2Vycy9jb21wYW5pZXNTbGljZSc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vYXBwL3N0b3JlJztcblxuZnVuY3Rpb24gQWRkKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3dlYnNpdGUsIHNldFdlYnNpdGVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4geyBcbiAgICBkaXNwYXRjaChhZGRDb21wYW55KGRhdGEpKTtcbiAgICByb3V0ZXIucHVzaCgnLycpO1xuICB9XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZENsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJvdXRlci5wdXNoKCcvJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtNVwiPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT1cInctNTBcIj5cbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwiZC1ncmlkIGdhcC0yXCI+XG4gICAgICAgICAgPEZvcm0uTGFiZWw+0J3QsNC30LLQsNC90LjQtSDQutC+0LzQv9Cw0L3QuNC4PC9Gb3JtLkxhYmVsPlxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgey4uLnJlZ2lzdGVyKCduYW1lJyl9IHZhbHVlPXtuYW1lIHx8ICcnfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgPEZvcm0uTGFiZWw+0KHRgdGL0LvQutCwINC90LAg0L3QvtCy0L7RgdGC0Yw8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgPEZvcm0uQ29udHJvbCB7Li4ucmVnaXN0ZXIoJ3dlYnNpdGUnKX0gdmFsdWU9e3dlYnNpdGUgfHwgJyd9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0V2Vic2l0ZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICA8Rm9ybS5MYWJlbD7QlNCw0YLQsDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICA8Rm9ybS5Db250cm9sIHsuLi5yZWdpc3RlcignZGF0ZScpfSB2YWx1ZT17ZGF0ZSB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgY2xhc3NOYW1lPVwibXQtMyB3LTI1IG0tYXV0b1wiIG9uQ2xpY2s9e2hhbmRsZUFkZENsaWNrfT7QlNC+0LHQsNCy0LjRgtGMPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPVwidy0yNSBtLWF1dG9cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+0J3QsNC30LDQtDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0b3JlKShBZGQpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUZvcm0iLCJjb25uZWN0IiwidXNlRGlzcGF0Y2giLCJCdXR0b24iLCJGb3JtIiwidXNlUm91dGVyIiwiYWRkQ29tcGFueSIsInN0b3JlIiwiQWRkIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwid2Vic2l0ZSIsInNldFdlYnNpdGUiLCJkYXRlIiwic2V0RGF0ZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwib25TdWJtaXQiLCJkYXRhIiwicm91dGVyIiwicHVzaCIsImhhbmRsZUFkZENsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJHcm91cCIsIkxhYmVsIiwiQ29udHJvbCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0eXBlIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/add.js\n");

/***/ })

});