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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCompanies\": function() { return /* binding */ getCompanies; },\n/* harmony export */   \"addCompany\": function() { return /* binding */ addCompany; },\n/* harmony export */   \"editCompany\": function() { return /* binding */ editCompany; },\n/* harmony export */   \"deleteCompany\": function() { return /* binding */ deleteCompany; },\n/* harmony export */   \"companiesSlice\": function() { return /* binding */ companiesSlice; },\n/* harmony export */   \"allCompanies\": function() { return /* binding */ allCompanies; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\nvar initialState = {\n    companyList: [],\n    company: {},\n    status: \"\"\n};\nvar getCompanies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/getCompanies\", _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var response;\n    return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return _utils_api__WEBPACK_IMPORTED_MODULE_1__.getCompanies();\n            case 2:\n                response = _ctx.sent;\n                return _ctx.abrupt(\"return\", response.data);\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n})));\nvar addCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/addCompany\", function() {\n    var _ref = _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var name, website, date, response;\n        return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    name = param.name, website = param.website, date = param.date;\n                    _ctx.next = 3;\n                    return _utils_api__WEBPACK_IMPORTED_MODULE_1__.addCompany(name, website, date);\n                case 3:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.data);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}());\nvar editCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/updateCompany\", function() {\n    var _ref = _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n        var response;\n        return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _utils_api__WEBPACK_IMPORTED_MODULE_1__.updateCompany(data);\n                case 2:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(data) {\n        return _ref.apply(this, arguments);\n    };\n}());\nvar deleteCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/deleteCompany\", function() {\n    var _ref = _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n        var response;\n        return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _utils_api__WEBPACK_IMPORTED_MODULE_1__.deleteCompany(data);\n                case 2:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(data) {\n        return _ref.apply(this, arguments);\n    };\n}());\nvar companiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"companies\",\n    initialState: initialState,\n    reducers: {},\n    extraReducers: function(builder) {\n        builder.addCase(getCompanies.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(getCompanies.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.companyList = action.payload;\n        });\n        builder.addCase(addCompany.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(addCompany.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.company = action.payload;\n        });\n        builder.addCase(editCompany.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(editCompany.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.company = action.payload;\n        });\n        builder.addCase(deleteCompany.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(deleteCompany.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.companyList = state.companyList.filter(function(item) {\n                return item._id !== action.payload;\n            });\n            console.log(action);\n        });\n    }\n});\nvar allCompanies = function(state) {\n    return state.companies.companyList;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (companiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3JlZHVjZXJzL2NvbXBhbmllc1NsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQzFCO0FBRXZDLElBQU1HLFlBQVksR0FBRztJQUNuQkMsV0FBVyxFQUFFLEVBQUU7SUFDZkMsT0FBTyxFQUFFLEVBQUU7SUFDWEMsTUFBTSxFQUFFLEVBQUU7Q0FDWDtBQUVNLElBQU1DLFlBQVksR0FBR1Asa0VBQWdCLENBQzFDLHdCQUF3QixFQUN4QixpTUFBWTtRQUNKUSxRQUFROzs7Ozt1QkFBU04sb0RBQWdCLEVBQUU7O2dCQUFuQ00sUUFBUSxZQUEyQjs2Q0FDbENBLFFBQVEsQ0FBQ0MsSUFBSTs7Ozs7O0NBQ3JCLEdBQ0YsQ0FBQztBQUVLLElBQU1DLFVBQVUsR0FBR1Ysa0VBQWdCLENBQ3hDLHNCQUFzQjtlQUN0QixzTUFBaUM7WUFBekJXLElBQUksRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQ25CTCxRQUFROzs7O29CQURSRyxJQUFJLFNBQUpBLElBQUksRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLElBQUksU0FBSkEsSUFBSTs7MkJBQ0ZYLGtEQUFjLENBQUNTLElBQUksRUFBRUMsT0FBTyxFQUFFQyxJQUFJLENBQUM7O29CQUFwREwsUUFBUSxZQUE0QztpREFDbkRBLFFBQVEsQ0FBQ0MsSUFBSTs7Ozs7O0tBQ3JCOzs7O0lBQ0YsQ0FBQztBQUVLLElBQU1LLFdBQVcsR0FBR2Qsa0VBQWdCLENBQ3pDLHlCQUF5QjtlQUN6QiwrTEFBT1MsSUFBSSxFQUFLO1lBQ1JELFFBQVE7Ozs7OzJCQUFTTixxREFBaUIsQ0FBQ08sSUFBSSxDQUFDOztvQkFBeENELFFBQVEsWUFBZ0M7aURBQ3ZDQSxRQUFRLENBQUNDLElBQUk7Ozs7OztLQUNyQjtvQkFITUEsSUFBSTs7O0lBSVosQ0FBQztBQUVLLElBQU1PLGFBQWEsR0FBR2hCLGtFQUFnQixDQUMzQyx5QkFBeUI7ZUFDekIsK0xBQU9TLElBQUksRUFBSztZQUNSRCxRQUFROzs7OzsyQkFBU04scURBQWlCLENBQUNPLElBQUksQ0FBQzs7b0JBQXhDRCxRQUFRLFlBQWdDO2lEQUN2Q0EsUUFBUSxDQUFDQyxJQUFJOzs7Ozs7S0FDckI7b0JBSE1BLElBQUk7OztJQUlaLENBQUM7QUFFSyxJQUFNUSxjQUFjLEdBQUdoQiw2REFBVyxDQUFDO0lBQ3hDVSxJQUFJLEVBQUUsV0FBVztJQUNqQlIsWUFBWSxFQUFaQSxZQUFZO0lBQ1plLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLGFBQWEsRUFBRSxTQUFDQyxPQUFPLEVBQUs7UUFDeEJBLE9BQU8sQ0FDSkMsT0FBTyxDQUFDZCxZQUFZLENBQUNlLE9BQU8sRUFBRSxTQUFDQyxLQUFLLEVBQUs7WUFDeENBLEtBQUssQ0FBQ2pCLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDMUIsQ0FBQyxDQUNEZSxPQUFPLENBQUNkLFlBQVksQ0FBQ2lCLFNBQVMsRUFBRSxTQUFDRCxLQUFLLEVBQUVFLE1BQU0sRUFBSztZQUNsREYsS0FBSyxDQUFDakIsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN0QmlCLEtBQUssQ0FBQ25CLFdBQVcsR0FBR3FCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUNITixPQUFPLENBQ05DLE9BQU8sQ0FBQ1gsVUFBVSxDQUFDWSxPQUFPLEVBQUUsU0FBQ0MsS0FBSyxFQUFLO1lBQ3RDQSxLQUFLLENBQUNqQixNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQzFCLENBQUMsQ0FDRGUsT0FBTyxDQUFDWCxVQUFVLENBQUNjLFNBQVMsRUFBRSxTQUFDRCxLQUFLLEVBQUVFLE1BQU0sRUFBSztZQUNoREYsS0FBSyxDQUFDakIsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN0QmlCLEtBQUssQ0FBQ2xCLE9BQU8sR0FBR29CLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztRQUNITixPQUFPLENBQ05DLE9BQU8sQ0FBQ1AsV0FBVyxDQUFDUSxPQUFPLEVBQUUsU0FBQ0MsS0FBSyxFQUFLO1lBQ3ZDQSxLQUFLLENBQUNqQixNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQzFCLENBQUMsQ0FDRGUsT0FBTyxDQUFDUCxXQUFXLENBQUNVLFNBQVMsRUFBRSxTQUFDRCxLQUFLLEVBQUVFLE1BQU0sRUFBSztZQUNqREYsS0FBSyxDQUFDakIsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN0QmlCLEtBQUssQ0FBQ2xCLE9BQU8sR0FBR29CLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztRQUNITixPQUFPLENBQ05DLE9BQU8sQ0FBQ0wsYUFBYSxDQUFDTSxPQUFPLEVBQUUsU0FBQ0MsS0FBSyxFQUFLO1lBQ3pDQSxLQUFLLENBQUNqQixNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQzFCLENBQUMsQ0FDRGUsT0FBTyxDQUFDTCxhQUFhLENBQUNRLFNBQVMsRUFBRSxTQUFDRCxLQUFLLEVBQUVFLE1BQU0sRUFBSztZQUNuREYsS0FBSyxDQUFDakIsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN0QmlCLEtBQUssQ0FBQ25CLFdBQVcsR0FBR21CLEtBQUssQ0FBQ25CLFdBQVcsQ0FBQ3VCLE1BQU0sQ0FBQyxTQUFDQyxJQUFJO3VCQUFLQSxJQUFJLENBQUNDLEdBQUcsS0FBS0osTUFBTSxDQUFDQyxPQUFPO2FBQUEsQ0FBQyxDQUFDO1lBQ3BGSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sTUFBTSxDQUFDO1NBQ3BCLENBQUMsQ0FBQztLQUNOO0NBQ0osQ0FBQyxDQUFDO0FBRUksSUFBTU8sWUFBWSxHQUFHLFNBQUNULEtBQUs7V0FBS0EsS0FBSyxDQUFDVSxTQUFTLENBQUM3QixXQUFXO0NBQUEsQ0FBQztBQUVuRSwrREFBZWEsY0FBYyxDQUFDaUIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVkdWNlcnMvY29tcGFuaWVzU2xpY2UuanM/MzE5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY29tcGFueUxpc3Q6IFtdLFxuICBjb21wYW55OiB7fSxcbiAgc3RhdHVzOiAnJyxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wYW5pZXMgPSBjcmVhdGVBc3luY1RodW5rKFxuICAnY29tcGFuaWVzL2dldENvbXBhbmllcycsXG4gIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXRDb21wYW5pZXMoKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBhZGRDb21wYW55ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgJ2NvbXBhbmllcy9hZGRDb21wYW55JyxcbiAgYXN5bmMgKHtuYW1lLCB3ZWJzaXRlLCBkYXRlfSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmFkZENvbXBhbnkobmFtZSwgd2Vic2l0ZSwgZGF0ZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgZWRpdENvbXBhbnkgPSBjcmVhdGVBc3luY1RodW5rKFxuICAnY29tcGFuaWVzL3VwZGF0ZUNvbXBhbnknLFxuICBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnVwZGF0ZUNvbXBhbnkoZGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29tcGFueSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICdjb21wYW5pZXMvZGVsZXRlQ29tcGFueScsIFxuICBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmRlbGV0ZUNvbXBhbnkoZGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgY29tcGFuaWVzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdjb21wYW5pZXMnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7fSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgIGJ1aWxkZXJcbiAgICAgICAgLmFkZENhc2UoZ2V0Q29tcGFuaWVzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENhc2UoZ2V0Q29tcGFuaWVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnaWRsZSc7XG4gICAgICAgICAgc3RhdGUuY29tcGFueUxpc3QgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgLmFkZENhc2UoYWRkQ29tcGFueS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGFkZENvbXBhbnkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdpZGxlJztcbiAgICAgICAgICBzdGF0ZS5jb21wYW55ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGVkaXRDb21wYW55LnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENhc2UoZWRpdENvbXBhbnkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdpZGxlJztcbiAgICAgICAgICBzdGF0ZS5jb21wYW55ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGRlbGV0ZUNvbXBhbnkucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgICAgICB9KVxuICAgICAgICAuYWRkQ2FzZShkZWxldGVDb21wYW55LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnaWRsZSc7XG4gICAgICAgICAgc3RhdGUuY29tcGFueUxpc3QgPSBzdGF0ZS5jb21wYW55TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKVxuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBhbGxDb21wYW5pZXMgPSAoc3RhdGUpID0+IHN0YXRlLmNvbXBhbmllcy5jb21wYW55TGlzdDtcblxuZXhwb3J0IGRlZmF1bHQgY29tcGFuaWVzU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJhcGkiLCJpbml0aWFsU3RhdGUiLCJjb21wYW55TGlzdCIsImNvbXBhbnkiLCJzdGF0dXMiLCJnZXRDb21wYW5pZXMiLCJyZXNwb25zZSIsImRhdGEiLCJhZGRDb21wYW55IiwibmFtZSIsIndlYnNpdGUiLCJkYXRlIiwiZWRpdENvbXBhbnkiLCJ1cGRhdGVDb21wYW55IiwiZGVsZXRlQ29tcGFueSIsImNvbXBhbmllc1NsaWNlIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZmlsdGVyIiwiaXRlbSIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJhbGxDb21wYW5pZXMiLCJjb21wYW5pZXMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/reducers/companiesSlice.js\n");

/***/ })

});