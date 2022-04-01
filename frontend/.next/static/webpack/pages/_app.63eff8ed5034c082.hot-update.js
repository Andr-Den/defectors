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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCompanies\": function() { return /* binding */ getCompanies; },\n/* harmony export */   \"addCompany\": function() { return /* binding */ addCompany; },\n/* harmony export */   \"editCompany\": function() { return /* binding */ editCompany; },\n/* harmony export */   \"deleteCompany\": function() { return /* binding */ deleteCompany; },\n/* harmony export */   \"companiesSlice\": function() { return /* binding */ companiesSlice; },\n/* harmony export */   \"allCompanies\": function() { return /* binding */ allCompanies; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\nvar initialState = {\n    companyList: [],\n    company: {},\n    status: \"\"\n};\nvar getCompanies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/getCompanies\", _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var response;\n    return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return _utils_api__WEBPACK_IMPORTED_MODULE_1__.getCompanies();\n            case 2:\n                response = _ctx.sent;\n                return _ctx.abrupt(\"return\", response.data);\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n})));\nvar addCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/addCompany\", function() {\n    var _ref = _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var name, website, date, response;\n        return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    name = param.name, website = param.website, date = param.date;\n                    _ctx.next = 3;\n                    return _utils_api__WEBPACK_IMPORTED_MODULE_1__.addCompany(name, website, date);\n                case 3:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.data);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}());\nvar editCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/updateCompany\", function() {\n    var _ref = _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n        var response;\n        return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _utils_api__WEBPACK_IMPORTED_MODULE_1__.updateCompany(data);\n                case 2:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(data) {\n        return _ref.apply(this, arguments);\n    };\n}());\nvar deleteCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"companies/deleteCompany\", function() {\n    var _ref = _asyncToGenerator(_Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n        var response;\n        return _Users_andreydenisov_projects_defectors_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _utils_api__WEBPACK_IMPORTED_MODULE_1__.deleteCompany(data);\n                case 2:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response._id);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(data) {\n        return _ref.apply(this, arguments);\n    };\n}());\nvar companiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"companies\",\n    initialState: initialState,\n    reducers: {},\n    extraReducers: function(builder) {\n        builder.addCase(getCompanies.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(getCompanies.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.companyList = action.payload;\n        });\n        builder.addCase(addCompany.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(addCompany.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.company = action.payload;\n        });\n        builder.addCase(editCompany.pending, function(state) {\n            state.status = \"loading\";\n        }).addCase(editCompany.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.company = action.payload;\n        });\n        builder.addCase(deleteCompany.pending, function(state, action) {\n            state.status = \"loading\";\n        }).addCase(deleteCompany.fulfilled, function(state, action) {\n            state.status = \"idle\";\n            state.companyList = state.companyList.filter(function(item) {\n                return item._id !== action.payload;\n            });\n            console.log(action);\n        });\n    }\n});\nvar allCompanies = function(state) {\n    return state.companies.companyList;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (companiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3JlZHVjZXJzL2NvbXBhbmllc1NsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQzFCO0FBRXZDLElBQU1HLFlBQVksR0FBRztJQUNuQkMsV0FBVyxFQUFFLEVBQUU7SUFDZkMsT0FBTyxFQUFFLEVBQUU7SUFDWEMsTUFBTSxFQUFFLEVBQUU7Q0FDWDtBQUVNLElBQU1DLFlBQVksR0FBR1Asa0VBQWdCLENBQzFDLHdCQUF3QixFQUN4QixpTUFBWTtRQUNKUSxRQUFROzs7Ozt1QkFBU04sb0RBQWdCLEVBQUU7O2dCQUFuQ00sUUFBUSxZQUEyQjs2Q0FDbENBLFFBQVEsQ0FBQ0MsSUFBSTs7Ozs7O0NBQ3JCLEdBQ0YsQ0FBQztBQUVLLElBQU1DLFVBQVUsR0FBR1Ysa0VBQWdCLENBQ3hDLHNCQUFzQjtlQUN0QixzTUFBaUM7WUFBekJXLElBQUksRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQ25CTCxRQUFROzs7O29CQURSRyxJQUFJLFNBQUpBLElBQUksRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLElBQUksU0FBSkEsSUFBSTs7MkJBQ0ZYLGtEQUFjLENBQUNTLElBQUksRUFBRUMsT0FBTyxFQUFFQyxJQUFJLENBQUM7O29CQUFwREwsUUFBUSxZQUE0QztpREFDbkRBLFFBQVEsQ0FBQ0MsSUFBSTs7Ozs7O0tBQ3JCOzs7O0lBQ0YsQ0FBQztBQUVLLElBQU1LLFdBQVcsR0FBR2Qsa0VBQWdCLENBQ3pDLHlCQUF5QjtlQUN6QiwrTEFBT1MsSUFBSSxFQUFLO1lBQ1JELFFBQVE7Ozs7OzJCQUFTTixxREFBaUIsQ0FBQ08sSUFBSSxDQUFDOztvQkFBeENELFFBQVEsWUFBZ0M7aURBQ3ZDQSxRQUFRLENBQUNDLElBQUk7Ozs7OztLQUNyQjtvQkFITUEsSUFBSTs7O0lBSVosQ0FBQztBQUVLLElBQU1PLGFBQWEsR0FBR2hCLGtFQUFnQixDQUMzQyx5QkFBeUI7ZUFDekIsK0xBQU9TLElBQUksRUFBSztZQUNSRCxRQUFROzs7OzsyQkFBU04scURBQWlCLENBQUNPLElBQUksQ0FBQzs7b0JBQXhDRCxRQUFRLFlBQWdDO2lEQUN2Q0EsUUFBUSxDQUFDUyxHQUFHOzs7Ozs7S0FDcEI7b0JBSE1SLElBQUk7OztJQUlaLENBQUM7QUFFSyxJQUFNUyxjQUFjLEdBQUdqQiw2REFBVyxDQUFDO0lBQ3hDVSxJQUFJLEVBQUUsV0FBVztJQUNqQlIsWUFBWSxFQUFaQSxZQUFZO0lBQ1pnQixRQUFRLEVBQUUsRUFBRTtJQUNaQyxhQUFhLEVBQUUsU0FBQ0MsT0FBTyxFQUFLO1FBQ3hCQSxPQUFPLENBQ0pDLE9BQU8sQ0FBQ2YsWUFBWSxDQUFDZ0IsT0FBTyxFQUFFLFNBQUNDLEtBQUssRUFBSztZQUN4Q0EsS0FBSyxDQUFDbEIsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUMxQixDQUFDLENBQ0RnQixPQUFPLENBQUNmLFlBQVksQ0FBQ2tCLFNBQVMsRUFBRSxTQUFDRCxLQUFLLEVBQUVFLE1BQU0sRUFBSztZQUNsREYsS0FBSyxDQUFDbEIsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN0QmtCLEtBQUssQ0FBQ3BCLFdBQVcsR0FBR3NCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUNITixPQUFPLENBQ05DLE9BQU8sQ0FBQ1osVUFBVSxDQUFDYSxPQUFPLEVBQUUsU0FBQ0MsS0FBSyxFQUFLO1lBQ3RDQSxLQUFLLENBQUNsQixNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQzFCLENBQUMsQ0FDRGdCLE9BQU8sQ0FBQ1osVUFBVSxDQUFDZSxTQUFTLEVBQUUsU0FBQ0QsS0FBSyxFQUFFRSxNQUFNLEVBQUs7WUFDaERGLEtBQUssQ0FBQ2xCLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdEJrQixLQUFLLENBQUNuQixPQUFPLEdBQUdxQixNQUFNLENBQUNDLE9BQU8sQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFDSE4sT0FBTyxDQUNOQyxPQUFPLENBQUNSLFdBQVcsQ0FBQ1MsT0FBTyxFQUFFLFNBQUNDLEtBQUssRUFBSztZQUN2Q0EsS0FBSyxDQUFDbEIsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUMxQixDQUFDLENBQ0RnQixPQUFPLENBQUNSLFdBQVcsQ0FBQ1csU0FBUyxFQUFFLFNBQUNELEtBQUssRUFBRUUsTUFBTSxFQUFLO1lBQ2pERixLQUFLLENBQUNsQixNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3RCa0IsS0FBSyxDQUFDbkIsT0FBTyxHQUFHcUIsTUFBTSxDQUFDQyxPQUFPLENBQUM7U0FDaEMsQ0FBQyxDQUFDO1FBQ0hOLE9BQU8sQ0FDTkMsT0FBTyxDQUFDTixhQUFhLENBQUNPLE9BQU8sRUFBRSxTQUFDQyxLQUFLLEVBQUVFLE1BQU0sRUFBSztZQUNqREYsS0FBSyxDQUFDbEIsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUMxQixDQUFDLENBQ0RnQixPQUFPLENBQUNOLGFBQWEsQ0FBQ1MsU0FBUyxFQUFFLFNBQUNELEtBQUssRUFBRUUsTUFBTSxFQUFLO1lBQ25ERixLQUFLLENBQUNsQixNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3RCa0IsS0FBSyxDQUFDcEIsV0FBVyxHQUFHb0IsS0FBSyxDQUFDcEIsV0FBVyxDQUFDd0IsTUFBTSxDQUFDLFNBQUNDLElBQUk7dUJBQUtBLElBQUksQ0FBQ1osR0FBRyxLQUFLUyxNQUFNLENBQUNDLE9BQU87YUFBQSxDQUFDLENBQUM7WUFDcEZHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxNQUFNLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0tBQ047Q0FDSixDQUFDLENBQUM7QUFFSSxJQUFNTSxZQUFZLEdBQUcsU0FBQ1IsS0FBSztXQUFLQSxLQUFLLENBQUNTLFNBQVMsQ0FBQzdCLFdBQVc7Q0FBQSxDQUFDO0FBRW5FLCtEQUFlYyxjQUFjLENBQUNnQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZWR1Y2Vycy9jb21wYW5pZXNTbGljZS5qcz8zMTljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjb21wYW55TGlzdDogW10sXG4gIGNvbXBhbnk6IHt9LFxuICBzdGF0dXM6ICcnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbXBhbmllcyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICdjb21wYW5pZXMvZ2V0Q29tcGFuaWVzJyxcbiAgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldENvbXBhbmllcygpO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbXBhbnkgPSBjcmVhdGVBc3luY1RodW5rKFxuICAnY29tcGFuaWVzL2FkZENvbXBhbnknLFxuICBhc3luYyAoe25hbWUsIHdlYnNpdGUsIGRhdGV9KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuYWRkQ29tcGFueShuYW1lLCB3ZWJzaXRlLCBkYXRlKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBlZGl0Q29tcGFueSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICdjb21wYW5pZXMvdXBkYXRlQ29tcGFueScsXG4gIGFzeW5jIChkYXRhKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkudXBkYXRlQ29tcGFueShkYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb21wYW55ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgJ2NvbXBhbmllcy9kZWxldGVDb21wYW55JywgXG4gIGFzeW5jIChkYXRhKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZGVsZXRlQ29tcGFueShkYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuX2lkXG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgY29tcGFuaWVzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdjb21wYW5pZXMnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7fSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgIGJ1aWxkZXJcbiAgICAgICAgLmFkZENhc2UoZ2V0Q29tcGFuaWVzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENhc2UoZ2V0Q29tcGFuaWVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnaWRsZSc7XG4gICAgICAgICAgc3RhdGUuY29tcGFueUxpc3QgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgLmFkZENhc2UoYWRkQ29tcGFueS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGFkZENvbXBhbnkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdpZGxlJztcbiAgICAgICAgICBzdGF0ZS5jb21wYW55ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGVkaXRDb21wYW55LnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENhc2UoZWRpdENvbXBhbnkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdpZGxlJztcbiAgICAgICAgICBzdGF0ZS5jb21wYW55ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGRlbGV0ZUNvbXBhbnkucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGRlbGV0ZUNvbXBhbnkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdpZGxlJztcbiAgICAgICAgICBzdGF0ZS5jb21wYW55TGlzdCA9IHN0YXRlLmNvbXBhbnlMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5faWQgIT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24pXG4gICAgICAgIH0pO1xuICAgIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGFsbENvbXBhbmllcyA9IChzdGF0ZSkgPT4gc3RhdGUuY29tcGFuaWVzLmNvbXBhbnlMaXN0O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wYW5pZXNTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsImFwaSIsImluaXRpYWxTdGF0ZSIsImNvbXBhbnlMaXN0IiwiY29tcGFueSIsInN0YXR1cyIsImdldENvbXBhbmllcyIsInJlc3BvbnNlIiwiZGF0YSIsImFkZENvbXBhbnkiLCJuYW1lIiwid2Vic2l0ZSIsImRhdGUiLCJlZGl0Q29tcGFueSIsInVwZGF0ZUNvbXBhbnkiLCJkZWxldGVDb21wYW55IiwiX2lkIiwiY29tcGFuaWVzU2xpY2UiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJmaWx0ZXIiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImFsbENvbXBhbmllcyIsImNvbXBhbmllcyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/reducers/companiesSlice.js\n");

/***/ })

});