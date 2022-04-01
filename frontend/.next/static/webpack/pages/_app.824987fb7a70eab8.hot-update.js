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

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_URL\": function() { return /* binding */ BASE_URL; },\n/* harmony export */   \"getCompanies\": function() { return /* binding */ getCompanies; },\n/* harmony export */   \"addCompany\": function() { return /* binding */ addCompany; },\n/* harmony export */   \"updateCompany\": function() { return /* binding */ updateCompany; },\n/* harmony export */   \"deleteCompany\": function() { return /* binding */ deleteCompany; }\n/* harmony export */ });\nvar BASE_URL = \"http://localhost:3001\";\nvar checkResponse = function(res) {\n    if (res.ok) {\n        return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n};\nvar getCompanies = function() {\n    return fetch(\"\".concat(BASE_URL), {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    }).then(checkResponse).then(function(res) {\n        return res;\n    });\n};\nvar addCompany = function(name, website, date) {\n    return fetch(\"\".concat(BASE_URL), {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            name: name,\n            website: website,\n            date: date\n        })\n    }).then(checkResponse).then(function(res) {\n        return res;\n    });\n};\nvar updateCompany = function(data) {\n    return fetch(\"\".concat(BASE_URL, \"/\") + data._id, {\n        method: \"PATCH\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            name: data.name,\n            website: data.website,\n            date: data.date\n        })\n    }).then(checkResponse).then(function(res) {\n        return res;\n    });\n};\nvar deleteCompany = function(data1) {\n    return fetch(\"\".concat(BASE_URL, \"/\") + data1._id, {\n        method: \"DELETE\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    }).then(checkResponse).then(function(data) {\n        return data;\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sSUFBTUEsUUFBUSxHQUFHLHVCQUF1QixDQUFDO0FBRWhELElBQU1DLGFBQWEsR0FBRyxTQUFDQyxHQUFHLEVBQUs7SUFDN0IsSUFBSUEsR0FBRyxDQUFDQyxFQUFFLEVBQUU7UUFDVixPQUFPRCxHQUFHLENBQUNFLElBQUksRUFBRSxDQUFDO0tBQ25CO0lBRUQsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsd0NBQVMsQ0FBYSxPQUFYSixHQUFHLENBQUNLLE1BQU0sQ0FBRSxDQUFDLENBQUM7Q0FDaEQ7QUFFTSxJQUFNQyxZQUFZLEdBQUc7V0FBTUMsS0FBSyxDQUFDLEVBQUMsQ0FBVyxPQUFUVCxRQUFRLENBQUUsRUFBRTtRQUNyRFUsTUFBTSxFQUFFLEtBQUs7UUFDYkMsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztLQUNGLENBQUMsQ0FDQ0MsSUFBSSxDQUFDWCxhQUFhLENBQUMsQ0FDbkJXLElBQUksQ0FBQyxTQUFDVixHQUFHO2VBQUtBLEdBQUc7S0FBQSxDQUFDO0NBQUEsQ0FBQztBQUVmLElBQU1XLFVBQVUsR0FBRyxTQUFDQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsSUFBSTtXQUFLUCxLQUFLLENBQUMsRUFBQyxDQUFXLE9BQVRULFFBQVEsQ0FBRSxFQUFFO1FBQ3RFVSxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0RNLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFDbkJMLElBQUksRUFBSkEsSUFBSTtZQUFFQyxPQUFPLEVBQVBBLE9BQU87WUFBRUMsSUFBSSxFQUFKQSxJQUFJO1NBQ3BCLENBQUM7S0FDSCxDQUFDLENBQ0NKLElBQUksQ0FBQ1gsYUFBYSxDQUFDLENBQ25CVyxJQUFJLENBQUMsU0FBQ1YsR0FBRztlQUFLQSxHQUFHO0tBQUEsQ0FBQztDQUFBLENBQUM7QUFFYixJQUFNa0IsYUFBYSxHQUFHLFNBQUNDLElBQUksRUFBSztJQUNyQyxPQUFPWixLQUFLLENBQUMsRUFBQyxDQUFXLE1BQUMsQ0FBVlQsUUFBUSxFQUFDLEdBQUMsQ0FBQyxHQUFHcUIsSUFBSSxDQUFDQyxHQUFHLEVBQUU7UUFDdENaLE1BQU0sRUFBRSxPQUFPO1FBQ2ZDLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkM7UUFDRE0sSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztZQUNuQkwsSUFBSSxFQUFFTyxJQUFJLENBQUNQLElBQUk7WUFBRUMsT0FBTyxFQUFFTSxJQUFJLENBQUNOLE9BQU87WUFBRUMsSUFBSSxFQUFFSyxJQUFJLENBQUNMLElBQUk7U0FDeEQsQ0FBQztLQUNILENBQUMsQ0FDREosSUFBSSxDQUFDWCxhQUFhLENBQUMsQ0FDbkJXLElBQUksQ0FBQyxTQUFDVixHQUFHLEVBQUs7UUFDYixPQUFPQSxHQUFHLENBQUM7S0FDWixDQUFDO0NBQ0gsQ0FBQztBQUVLLElBQU1xQixhQUFhLEdBQUcsU0FBQ0YsS0FBSSxFQUFLO0lBQ3JDLE9BQU9aLEtBQUssQ0FBQyxFQUFDLENBQVcsTUFBQyxDQUFWVCxRQUFRLEVBQUMsR0FBQyxDQUFDLEdBQUdxQixLQUFJLENBQUNDLEdBQUcsRUFBRTtRQUN0Q1osTUFBTSxFQUFFLFFBQVE7UUFDaEJDLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkM7S0FDRixDQUFDLENBQ0RDLElBQUksQ0FBQ1gsYUFBYSxDQUFDLENBQ25CVyxJQUFJLENBQUMsU0FBQ1MsSUFBSSxFQUFLO1FBQ2QsT0FBT0EsSUFBSSxDQUFDO0tBQ2IsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2FwaS5qcz9lMjg2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnO1xuXG5jb25zdCBjaGVja1Jlc3BvbnNlID0gKHJlcykgPT4ge1xuICBpZiAocmVzLm9rKSB7XG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbXBhbmllcyA9ICgpID0+IGZldGNoKGAke0JBU0VfVVJMfWAsIHtcbiAgbWV0aG9kOiAnR0VUJyxcbiAgaGVhZGVyczoge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0sXG59KVxuICAudGhlbihjaGVja1Jlc3BvbnNlKVxuICAudGhlbigocmVzKSA9PiByZXMpO1xuXG5leHBvcnQgY29uc3QgYWRkQ29tcGFueSA9IChuYW1lLCB3ZWJzaXRlLCBkYXRlKSA9PiBmZXRjaChgJHtCQVNFX1VSTH1gLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSxcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgIG5hbWUsIHdlYnNpdGUsIGRhdGUsXG4gIH0pLFxufSlcbiAgLnRoZW4oY2hlY2tSZXNwb25zZSlcbiAgLnRoZW4oKHJlcykgPT4gcmVzKTtcblxuICBleHBvcnQgY29uc3QgdXBkYXRlQ29tcGFueSA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGAke0JBU0VfVVJMfS9gICsgZGF0YS5faWQsIHtcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSwgd2Vic2l0ZTogZGF0YS53ZWJzaXRlLCBkYXRlOiBkYXRhLmRhdGUsXG4gICAgICB9KSxcbiAgICB9KVxuICAgIC50aGVuKGNoZWNrUmVzcG9uc2UpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KVxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBkZWxldGVDb21wYW55ID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goYCR7QkFTRV9VUkx9L2AgKyBkYXRhLl9pZCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihjaGVja1Jlc3BvbnNlKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KVxuICB9O1xuIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiY2hlY2tSZXNwb25zZSIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJnZXRDb21wYW5pZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwiYWRkQ29tcGFueSIsIm5hbWUiLCJ3ZWJzaXRlIiwiZGF0ZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlQ29tcGFueSIsImRhdGEiLCJfaWQiLCJkZWxldGVDb21wYW55Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/api.js\n");

/***/ })

});