"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/app/reducers/companiesSlice.js":
/*!********************************************!*\
  !*** ./src/app/reducers/companiesSlice.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCompanies\": function() { return /* binding */ getCompanies; },\n/* harmony export */   \"addCompany\": function() { return /* binding */ addCompany; },\n/* harmony export */   \"editCompany\": function() { return /* binding */ editCompany; },\n/* harmony export */   \"deleteCompany\": function() { return /* binding */ deleteCompany; },\n/* harmony export */   \"companiesSlice\": function() { return /* binding */ companiesSlice; },\n/* harmony export */   \"allCompanies\": function() { return /* binding */ allCompanies; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nvar initialState = {\n    companyList: [],\n    company: {},\n    status: \"\"\n};\nvar getCompanies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/getCompanies\", _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var response;\n    return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return _utils_api__WEBPACK_IMPORTED_MODULE_1__.getCompanies();\n            case 2:\n                response = _ctx.sent;\n                return _ctx.abrupt(\"return\", response.data);\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n})));\nvar addCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/addCompany\", function() {\n    var _ref = _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var name, website, date, response;\n        return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    name = param.name, website = param.website, date = param.date;\n                    _ctx.next = 3;\n                    return _utils_api__WEBPACK_IMPORTED_MODULE_1__.addCompany(name, website, date);\n                case 3:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.data);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}());\nvar editCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/updateCompany\", function() {\n    var _ref = _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n        var response;\n        return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _utils_api__WEBPACK_IMPORTED_MODULE_1__.updateCompany(data);\n                case 2:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(data) {\n        return _ref.apply(this, arguments);\n    };\n}());\nvar deleteCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/deleteCompany\", function() {\n    var _ref = _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n        var response;\n        return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _utils_api__WEBPACK_IMPORTED_MODULE_1__.deleteCompany(data);\n                case 2:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(data) {\n        return _ref.apply(this, arguments);\n    };\n}());\nvar companiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"companies\",\n    initialState: initialState,\n    reducers: {},\n    extraReducers: function(builder) {\n        builder.addCase(getCompanies.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(getCompanies.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.companyList = action.payload;\n        });\n        builder.addCase(addCompany.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(addCompany.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.company = action.payload;\n        });\n        builder.addCase(editCompany.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(editCompany.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.company = action.payload;\n        });\n        builder.addCase(deleteCompany.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(deleteCompany.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.companyList = _toConsumableArray(state.companyList).concat([\n                state.companyList.filter(function(item, index) {\n                    return index !== action.payload;\n                })\n            ]);\n        });\n    }\n});\nvar allCompanies = function(state) {\n    return state.companies.companyList;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (companiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3JlZHVjZXJzL2NvbXBhbmllc1NsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUMxQjtBQUV2QyxJQUFNRyxZQUFZLEdBQUc7SUFDbkJDLFdBQVcsRUFBRSxFQUFFO0lBQ2ZDLE9BQU8sRUFBRSxFQUFFO0lBQ1hDLE1BQU0sRUFBRSxFQUFFO0NBQ1g7QUFFTSxJQUFNQyxZQUFZLEdBQUdQLGtFQUFnQixDQUMxQyx3QkFBd0IsRUFDeEIsaU1BQVk7UUFDSlEsUUFBUTs7Ozs7dUJBQVNOLG9EQUFnQixFQUFFOztnQkFBbkNNLFFBQVEsWUFBMkI7NkNBQ2xDQSxRQUFRLENBQUNDLElBQUk7Ozs7OztDQUNyQixHQUNGLENBQUM7QUFFSyxJQUFNQyxVQUFVLEdBQUdWLGtFQUFnQixDQUN4QyxzQkFBc0I7ZUFDdEIsc01BQWlDO1lBQXpCVyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUNuQkwsUUFBUTs7OztvQkFEUkcsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxJQUFJLFNBQUpBLElBQUk7OzJCQUNGWCxrREFBYyxDQUFDUyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxDQUFDOztvQkFBcERMLFFBQVEsWUFBNEM7aURBQ25EQSxRQUFRLENBQUNDLElBQUk7Ozs7OztLQUNyQjs7OztJQUNGLENBQUM7QUFFSyxJQUFNSyxXQUFXLEdBQUdkLGtFQUFnQixDQUN6Qyx5QkFBeUI7ZUFDekIsK0xBQU9TLElBQUksRUFBSztZQUNSRCxRQUFROzs7OzsyQkFBU04scURBQWlCLENBQUNPLElBQUksQ0FBQzs7b0JBQXhDRCxRQUFRLFlBQWdDO2lEQUN2Q0EsUUFBUSxDQUFDQyxJQUFJOzs7Ozs7S0FDckI7b0JBSE1BLElBQUk7OztJQUlaLENBQUM7QUFFSyxJQUFNTyxhQUFhLEdBQUdoQixrRUFBZ0IsQ0FDM0MseUJBQXlCO2VBQ3pCLCtMQUFPUyxJQUFJLEVBQUs7WUFDUkQsUUFBUTs7Ozs7MkJBQVNOLHFEQUFpQixDQUFDTyxJQUFJLENBQUM7O29CQUF4Q0QsUUFBUSxZQUFnQztpREFDdkNBLFFBQVEsQ0FBQ0MsSUFBSTs7Ozs7O0tBQ3JCO29CQUhNQSxJQUFJOzs7SUFJWixDQUFDO0FBRUssSUFBTVEsY0FBYyxHQUFHaEIsNkRBQVcsQ0FBQztJQUN4Q1UsSUFBSSxFQUFFLFdBQVc7SUFDakJSLFlBQVksRUFBWkEsWUFBWTtJQUNaZSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxhQUFhLEVBQUUsU0FBQ0MsT0FBTyxFQUFLO1FBQ3hCQSxPQUFPLENBQ0pDLE9BQU8sQ0FBQ2QsWUFBWSxDQUFDZSxPQUFPLEVBQUUsU0FBQ0MsS0FBSyxFQUFLO1lBQ3hDQSxLQUFLLENBQUNqQixNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQzFCLENBQUMsQ0FDRGUsT0FBTyxDQUFDZCxZQUFZLENBQUNpQixTQUFTLEVBQUUsU0FBQ0QsS0FBSyxFQUFFRSxNQUFNLEVBQUs7WUFDbERGLEtBQUssQ0FBQ2pCLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdEJpQixLQUFLLENBQUNuQixXQUFXLEdBQUdxQixNQUFNLENBQUNDLE9BQU8sQ0FBQztTQUNwQyxDQUFDLENBQUM7UUFDSE4sT0FBTyxDQUNOQyxPQUFPLENBQUNYLFVBQVUsQ0FBQ1ksT0FBTyxFQUFFLFNBQUNDLEtBQUssRUFBSztZQUN0Q0EsS0FBSyxDQUFDakIsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUMxQixDQUFDLENBQ0RlLE9BQU8sQ0FBQ1gsVUFBVSxDQUFDYyxTQUFTLEVBQUUsU0FBQ0QsS0FBSyxFQUFFRSxNQUFNLEVBQUs7WUFDaERGLEtBQUssQ0FBQ2pCLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdEJpQixLQUFLLENBQUNsQixPQUFPLEdBQUdvQixNQUFNLENBQUNDLE9BQU8sQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFDSE4sT0FBTyxDQUNOQyxPQUFPLENBQUNQLFdBQVcsQ0FBQ1EsT0FBTyxFQUFFLFNBQUNDLEtBQUssRUFBSztZQUN2Q0EsS0FBSyxDQUFDakIsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUMxQixDQUFDLENBQ0RlLE9BQU8sQ0FBQ1AsV0FBVyxDQUFDVSxTQUFTLEVBQUUsU0FBQ0QsS0FBSyxFQUFFRSxNQUFNLEVBQUs7WUFDakRGLEtBQUssQ0FBQ2pCLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdEJpQixLQUFLLENBQUNsQixPQUFPLEdBQUdvQixNQUFNLENBQUNDLE9BQU8sQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFDSE4sT0FBTyxDQUNOQyxPQUFPLENBQUNMLGFBQWEsQ0FBQ00sT0FBTyxFQUFFLFNBQUNDLEtBQUssRUFBSztZQUN6Q0EsS0FBSyxDQUFDakIsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUMxQixDQUFDLENBQ0RlLE9BQU8sQ0FBQ0wsYUFBYSxDQUFDUSxTQUFTLEVBQUUsU0FBQ0QsS0FBSyxFQUFFRSxNQUFNLEVBQUs7WUFDbkRGLEtBQUssQ0FBQ2pCLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdEJpQixLQUFLLENBQUNuQixXQUFXLEdBQUcsbUJBQUltQixLQUFLLENBQUNuQixXQUFXLENBQWpCbUIsUUFBSjtnQkFBdUJBLEtBQUssQ0FBQ25CLFdBQVcsQ0FBQ3VCLE1BQU0sQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUs7MkJBQUtBLEtBQUssS0FBS0osTUFBTSxDQUFDQyxPQUFPO2lCQUFBLENBQUM7YUFBQyxFQUFDO1NBRWpILENBQUMsQ0FBQztLQUNOO0NBQ0osQ0FBQyxDQUFDO0FBRUksSUFBTUksWUFBWSxHQUFHLFNBQUNQLEtBQUs7V0FBS0EsS0FBSyxDQUFDUSxTQUFTLENBQUMzQixXQUFXO0NBQUEsQ0FBQztBQUVuRSwrREFBZWEsY0FBYyxDQUFDZSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZWR1Y2Vycy9jb21wYW5pZXNTbGljZS5qcz8zMTljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjb21wYW55TGlzdDogW10sXG4gIGNvbXBhbnk6IHt9LFxuICBzdGF0dXM6ICcnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbXBhbmllcyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICdjb21wYW5pZXMvZ2V0Q29tcGFuaWVzJyxcbiAgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldENvbXBhbmllcygpO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbXBhbnkgPSBjcmVhdGVBc3luY1RodW5rKFxuICAnY29tcGFuaWVzL2FkZENvbXBhbnknLFxuICBhc3luYyAoe25hbWUsIHdlYnNpdGUsIGRhdGV9KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuYWRkQ29tcGFueShuYW1lLCB3ZWJzaXRlLCBkYXRlKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBlZGl0Q29tcGFueSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICdjb21wYW5pZXMvdXBkYXRlQ29tcGFueScsXG4gIGFzeW5jIChkYXRhKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkudXBkYXRlQ29tcGFueShkYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb21wYW55ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgJ2NvbXBhbmllcy9kZWxldGVDb21wYW55JyxcbiAgYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5kZWxldGVDb21wYW55KGRhdGEpO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGNvbXBhbmllc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnY29tcGFuaWVzJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge30sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGdldENvbXBhbmllcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGdldENvbXBhbmllcy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2lkbGUnO1xuICAgICAgICAgIHN0YXRlLmNvbXBhbnlMaXN0ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGFkZENvbXBhbnkucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgICAgICB9KVxuICAgICAgICAuYWRkQ2FzZShhZGRDb21wYW55LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnaWRsZSc7XG4gICAgICAgICAgc3RhdGUuY29tcGFueSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9KTtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAuYWRkQ2FzZShlZGl0Q29tcGFueS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGVkaXRDb21wYW55LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnaWRsZSc7XG4gICAgICAgICAgc3RhdGUuY29tcGFueSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9KTtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAuYWRkQ2FzZShkZWxldGVDb21wYW55LnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENhc2UoZGVsZXRlQ29tcGFueS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2lkbGUnO1xuICAgICAgICAgIHN0YXRlLmNvbXBhbnlMaXN0ID0gWy4uLnN0YXRlLmNvbXBhbnlMaXN0LCBzdGF0ZS5jb21wYW55TGlzdC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gYWN0aW9uLnBheWxvYWQpXTtcblxuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBhbGxDb21wYW5pZXMgPSAoc3RhdGUpID0+IHN0YXRlLmNvbXBhbmllcy5jb21wYW55TGlzdDtcblxuZXhwb3J0IGRlZmF1bHQgY29tcGFuaWVzU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJhcGkiLCJpbml0aWFsU3RhdGUiLCJjb21wYW55TGlzdCIsImNvbXBhbnkiLCJzdGF0dXMiLCJnZXRDb21wYW5pZXMiLCJyZXNwb25zZSIsImRhdGEiLCJhZGRDb21wYW55IiwibmFtZSIsIndlYnNpdGUiLCJkYXRlIiwiZWRpdENvbXBhbnkiLCJ1cGRhdGVDb21wYW55IiwiZGVsZXRlQ29tcGFueSIsImNvbXBhbmllc1NsaWNlIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwiYWxsQ29tcGFuaWVzIiwiY29tcGFuaWVzIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/reducers/companiesSlice.js\n");

/***/ })

});