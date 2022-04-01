"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/edit/[id]";
exports.ids = ["pages/edit/[id]"];
exports.modules = {

/***/ "./src/app/reducers/companiesSlice.js":
/*!********************************************!*\
  !*** ./src/app/reducers/companiesSlice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCompanies\": () => (/* binding */ getCompanies),\n/* harmony export */   \"addCompany\": () => (/* binding */ addCompany),\n/* harmony export */   \"editCompany\": () => (/* binding */ editCompany),\n/* harmony export */   \"deleteCompany\": () => (/* binding */ deleteCompany),\n/* harmony export */   \"companiesSlice\": () => (/* binding */ companiesSlice),\n/* harmony export */   \"allCompanies\": () => (/* binding */ allCompanies),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n\n\nconst initialState = {\n    companyList: [],\n    company: {},\n    status: \"\"\n};\nconst getCompanies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"companies/getCompanies\", async ()=>{\n    const response = await _utils_api__WEBPACK_IMPORTED_MODULE_1__.getCompanies();\n    return response.data;\n});\nconst addCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"companies/addCompany\", async ({ name , website , date  })=>{\n    const response = await _utils_api__WEBPACK_IMPORTED_MODULE_1__.addCompany(name, website, date);\n    return response.data;\n});\nconst editCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"companies/updateCompany\", async (data)=>{\n    const response = await _utils_api__WEBPACK_IMPORTED_MODULE_1__.updateCompany(data);\n    return response.data;\n});\nconst deleteCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"companies/deleteCompany\", async (data)=>{\n    const response = await _utils_api__WEBPACK_IMPORTED_MODULE_1__.deleteCompany(data);\n    return response.data;\n});\nconst companiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"companies\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(getCompanies.pending, (state)=>{\n            state.status = \"loading\";\n        }).addCase(getCompanies.fulfilled, (state, action)=>{\n            state.status = \"idle\";\n            state.companyList = action.payload;\n        });\n        builder.addCase(addCompany.pending, (state)=>{\n            state.status = \"loading\";\n        }).addCase(addCompany.fulfilled, (state, action)=>{\n            state.status = \"idle\";\n            state.company = action.payload;\n        });\n        builder.addCase(editCompany.pending, (state)=>{\n            state.status = \"loading\";\n        }).addCase(editCompany.fulfilled, (state, action)=>{\n            state.status = \"idle\";\n            state.company = action.payload;\n        });\n        builder.addCase(deleteCompany.pending, (state)=>{\n            state.status = \"loading\";\n        }).addCase(deleteCompany.fulfilled, (state, action)=>{\n            state.status = \"idle\";\n            action.payload = state.company._id;\n            state.companyList = state.companyList.filter((item)=>item._id !== action.payload\n            );\n        });\n    }\n});\nconst allCompanies = (state)=>state.companies.companyList\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (companiesSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQ2xCLE9BQU8sR0FBR29CLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztRQUNITixPQUFPLENBQ05DLE9BQU8sQ0FBQ0wsYUFBYSxDQUFDTSxPQUFPLEVBQUUsQ0FBQ0MsS0FBSyxHQUFLO1lBQ3pDQSxLQUFLLENBQUNqQixNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQzFCLENBQUMsQ0FDRGUsT0FBTyxDQUFDTCxhQUFhLENBQUNRLFNBQVMsRUFBRSxDQUFDRCxLQUFLLEVBQUVFLE1BQU0sR0FBSztZQUNuREYsS0FBSyxDQUFDakIsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN0Qm1CLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSCxLQUFLLENBQUNsQixPQUFPLENBQUNzQixHQUFHO1lBQ2xDSixLQUFLLENBQUNuQixXQUFXLEdBQUdtQixLQUFLLENBQUNuQixXQUFXLENBQUN3QixNQUFNLENBQUMsQ0FBQ0MsSUFBSSxHQUFLQSxJQUFJLENBQUNGLEdBQUcsS0FBS0YsTUFBTSxDQUFDQyxPQUFPO1lBQUEsQ0FBQyxDQUFDO1NBQ3JGLENBQUMsQ0FBQztLQUNOO0NBQ0osQ0FBQyxDQUFDO0FBRUksTUFBTUksWUFBWSxHQUFHLENBQUNQLEtBQUssR0FBS0EsS0FBSyxDQUFDUSxTQUFTLENBQUMzQixXQUFXO0FBQUEsQ0FBQztBQUVuRSxpRUFBZWEsY0FBYyxDQUFDZSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9hcHAvcmVkdWNlcnMvY29tcGFuaWVzU2xpY2UuanM/MzE5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY29tcGFueUxpc3Q6IFtdLFxuICBjb21wYW55OiB7fSxcbiAgc3RhdHVzOiAnJyxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wYW5pZXMgPSBjcmVhdGVBc3luY1RodW5rKFxuICAnY29tcGFuaWVzL2dldENvbXBhbmllcycsXG4gIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXRDb21wYW5pZXMoKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBhZGRDb21wYW55ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgJ2NvbXBhbmllcy9hZGRDb21wYW55JyxcbiAgYXN5bmMgKHtuYW1lLCB3ZWJzaXRlLCBkYXRlfSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmFkZENvbXBhbnkobmFtZSwgd2Vic2l0ZSwgZGF0ZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgZWRpdENvbXBhbnkgPSBjcmVhdGVBc3luY1RodW5rKFxuICAnY29tcGFuaWVzL3VwZGF0ZUNvbXBhbnknLFxuICBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnVwZGF0ZUNvbXBhbnkoZGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29tcGFueSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICdjb21wYW5pZXMvZGVsZXRlQ29tcGFueScsIFxuICBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmRlbGV0ZUNvbXBhbnkoZGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgY29tcGFuaWVzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdjb21wYW5pZXMnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7fSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgIGJ1aWxkZXJcbiAgICAgICAgLmFkZENhc2UoZ2V0Q29tcGFuaWVzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENhc2UoZ2V0Q29tcGFuaWVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnaWRsZSc7XG4gICAgICAgICAgc3RhdGUuY29tcGFueUxpc3QgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgLmFkZENhc2UoYWRkQ29tcGFueS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGFkZENvbXBhbnkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdpZGxlJztcbiAgICAgICAgICBzdGF0ZS5jb21wYW55ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGVkaXRDb21wYW55LnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZENhc2UoZWRpdENvbXBhbnkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdpZGxlJztcbiAgICAgICAgICBzdGF0ZS5jb21wYW55ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGRlbGV0ZUNvbXBhbnkucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgICAgICB9KVxuICAgICAgICAuYWRkQ2FzZShkZWxldGVDb21wYW55LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnaWRsZSc7XG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQgPSBzdGF0ZS5jb21wYW55Ll9pZFxuICAgICAgICAgIHN0YXRlLmNvbXBhbnlMaXN0ID0gc3RhdGUuY29tcGFueUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLl9pZCAhPT0gYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBhbGxDb21wYW5pZXMgPSAoc3RhdGUpID0+IHN0YXRlLmNvbXBhbmllcy5jb21wYW55TGlzdDtcblxuZXhwb3J0IGRlZmF1bHQgY29tcGFuaWVzU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJhcGkiLCJpbml0aWFsU3RhdGUiLCJjb21wYW55TGlzdCIsImNvbXBhbnkiLCJzdGF0dXMiLCJnZXRDb21wYW5pZXMiLCJyZXNwb25zZSIsImRhdGEiLCJhZGRDb21wYW55IiwibmFtZSIsIndlYnNpdGUiLCJkYXRlIiwiZWRpdENvbXBhbnkiLCJ1cGRhdGVDb21wYW55IiwiZGVsZXRlQ29tcGFueSIsImNvbXBhbmllc1NsaWNlIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiX2lkIiwiZmlsdGVyIiwiaXRlbSIsImFsbENvbXBhbmllcyIsImNvbXBhbmllcyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/reducers/companiesSlice.js\n");

/***/ }),

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_companiesSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/companiesSlice */ \"./src/app/reducers/companiesSlice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        companies: _reducers_companiesSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDTztBQUVsRCxNQUFNRSxLQUFLLEdBQUdGLGdFQUFjLENBQUM7SUFDbENHLE9BQU8sRUFBRTtRQUNQQyxTQUFTLEVBQUVILGdFQUFnQjtLQUM1QjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2FwcC9zdG9yZS5qcz81OGM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgY29tcGFuaWVzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2NvbXBhbmllc1NsaWNlJztcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgY29tcGFuaWVzOiBjb21wYW5pZXNSZWR1Y2VyLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjb21wYW5pZXNSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiY29tcGFuaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/pages/edit/[id].js":
/*!********************************!*\
  !*** ./src/pages/edit/[id].js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_reducers_companiesSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/reducers/companiesSlice */ \"./src/app/reducers/companiesSlice.js\");\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/store */ \"./src/app/store.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction Edit() {\n    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [website, setWebsite] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [date, setDate] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    // const onSubmit = data => dispatch(editCompany({...data, _id: company._id}));\n    const onSubmit = (data)=>dispatch((0,_app_reducers_companiesSlice__WEBPACK_IMPORTED_MODULE_6__.editCompany)(data))\n    ;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    console.log();\n    const handleClick = (e)=>{\n        e.preventDefault();\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-center align-items-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {\n            onSubmit: handleSubmit(onSubmit),\n            className: \"w-50\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                className: \"d-grid gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                        children: \"\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0438\\u0438\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/edit/[id].js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {\n                        ...register(\"name\"),\n                        value: name || \"\",\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/edit/[id].js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                        children: \"\\u0421\\u0441\\u044B\\u043B\\u043A\\u0430 \\u043D\\u0430 \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u044C\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/edit/[id].js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {\n                        ...register(\"website\"),\n                        value: website || \"\",\n                        onChange: (e)=>setWebsite(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/edit/[id].js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                        children: \"\\u0414\\u0430\\u0442\\u0430\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/edit/[id].js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {\n                        ...register(\"date\"),\n                        value: date || \"\",\n                        onChange: (e)=>setDate(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/edit/[id].js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        type: \"submit\",\n                        variant: \"success\",\n                        className: \"w-25 m-auto\",\n                        children: \"\\u0420\\u0435\\u0434\\u0430\\u043A\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/edit/[id].js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"secondary\",\n                        className: \"w-25 m-auto\",\n                        onClick: handleClick,\n                        children: \"\\u041D\\u0430\\u0437\\u0430\\u0434\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/edit/[id].js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/edit/[id].js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/edit/[id].js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/andreydenisov/projects/defectors/frontend/src/pages/edit/[id].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(_app_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Edit));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVELGlFQUFldkIsb0RBQU8sQ0FBQ00sa0RBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2VkaXQvW2lkXS5qcz8zYTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGVkaXRDb21wYW55IH0gZnJvbSAnLi4vLi4vYXBwL3JlZHVjZXJzL2NvbXBhbmllc1NsaWNlJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9hcHAvc3RvcmUnO1xuXG4gZnVuY3Rpb24gRWRpdCgpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICBjb25zdCBbd2Vic2l0ZSwgc2V0V2Vic2l0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgLy8gY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IGRpc3BhdGNoKGVkaXRDb21wYW55KHsuLi5kYXRhLCBfaWQ6IGNvbXBhbnkuX2lkfSkpO1xuICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gZGlzcGF0Y2goZWRpdENvbXBhbnkoZGF0YSkpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnNvbGUubG9nKClcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJvdXRlci5wdXNoKCcvJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtNVwiPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT1cInctNTBcIj5cbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwiZC1ncmlkIGdhcC0yXCI+XG4gICAgICAgICAgPEZvcm0uTGFiZWw+0J3QsNC30LLQsNC90LjQtSDQutC+0LzQv9Cw0L3QuNC4PC9Gb3JtLkxhYmVsPlxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgey4uLnJlZ2lzdGVyKCduYW1lJyl9IHZhbHVlPXtuYW1lIHx8ICcnfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgPEZvcm0uTGFiZWw+0KHRgdGL0LvQutCwINC90LAg0L3QvtCy0L7RgdGC0Yw8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgPEZvcm0uQ29udHJvbCB7Li4ucmVnaXN0ZXIoJ3dlYnNpdGUnKX0gdmFsdWU9e3dlYnNpdGUgfHwgJyd9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0V2Vic2l0ZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICA8Rm9ybS5MYWJlbD7QlNCw0YLQsDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICA8Rm9ybS5Db250cm9sIHsuLi5yZWdpc3RlcignZGF0ZScpfSB2YWx1ZT17ZGF0ZSB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgY2xhc3NOYW1lPVwidy0yNSBtLWF1dG9cIj7QoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cInctMjUgbS1hdXRvXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PtCd0LDQt9Cw0LQ8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0b3JlKShFZGl0KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VGb3JtIiwiY29ubmVjdCIsInVzZURpc3BhdGNoIiwiQnV0dG9uIiwiRm9ybSIsInVzZVJvdXRlciIsImVkaXRDb21wYW55Iiwic3RvcmUiLCJFZGl0IiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsIndlYnNpdGUiLCJzZXRXZWJzaXRlIiwiZGF0ZSIsInNldERhdGUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImRpc3BhdGNoIiwib25TdWJtaXQiLCJkYXRhIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsIkdyb3VwIiwiTGFiZWwiLCJDb250cm9sIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInR5cGUiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/edit/[id].js\n");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"getCompanies\": () => (/* binding */ getCompanies),\n/* harmony export */   \"addCompany\": () => (/* binding */ addCompany),\n/* harmony export */   \"updateCompany\": () => (/* binding */ updateCompany),\n/* harmony export */   \"deleteCompany\": () => (/* binding */ deleteCompany)\n/* harmony export */ });\nconst BASE_URL = \"http://localhost:3001\";\nconst checkResponse = (res)=>{\n    if (res.ok) {\n        return res.json();\n    }\n    return Promise.reject(`Ошибка: ${res.status}`);\n};\nconst getCompanies = ()=>fetch(`${BASE_URL}`, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    }).then(checkResponse).then((res)=>res\n    )\n;\nconst addCompany = (name, website, date)=>fetch(`${BASE_URL}`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            name,\n            website,\n            date\n        })\n    }).then(checkResponse).then((res)=>res\n    )\n;\nconst updateCompany = (data)=>{\n    return fetch(`${BASE_URL}/` + data._id, {\n        method: \"PATCH\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            name: data.name,\n            website: data.website,\n            date: data.date\n        })\n    }).then(checkResponse).then((res)=>{\n        return res;\n    });\n};\nconst deleteCompany = (data1)=>{\n    return fetch(`${BASE_URL}/` + data1._id, {\n        method: \"DELETE\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    }).then(checkResponse).then((data)=>{\n        return data;\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHLHVCQUF1QixDQUFDO0FBRWhELE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxHQUFHLEdBQUs7SUFDN0IsSUFBSUEsR0FBRyxDQUFDQyxFQUFFLEVBQUU7UUFDVixPQUFPRCxHQUFHLENBQUNFLElBQUksRUFBRSxDQUFDO0tBQ25CO0lBRUQsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxjQUFRLEVBQUVKLEdBQUcsQ0FBQ0s7Q0FDdEM7QUFFTSxNQUFNQyxZQUFZLEdBQUcsSUFBTUMsS0FBSyxDQUFDLENBQUMsRUFBRVQsUUFBUSxDQUFDLENBQUMsRUFBRTtRQUNyRFUsTUFBTSxFQUFFLEtBQUs7UUFDYkMsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztLQUNGLENBQUMsQ0FDQ0MsSUFBSSxDQUFDWCxhQUFhLENBQUMsQ0FDbkJXLElBQUksQ0FBQyxDQUFDVixHQUFHLEdBQUtBLEdBQUc7SUFBQSxDQUFDO0FBQUEsQ0FBQztBQUVmLE1BQU1XLFVBQVUsR0FBRyxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxHQUFLUCxLQUFLLENBQUMsQ0FBQyxFQUFFVCxRQUFRLENBQUMsQ0FBQyxFQUFFO1FBQ3RFVSxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0RNLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFDbkJMLElBQUk7WUFBRUMsT0FBTztZQUFFQyxJQUFJO1NBQ3BCLENBQUM7S0FDSCxDQUFDLENBQ0NKLElBQUksQ0FBQ1gsYUFBYSxDQUFDLENBQ25CVyxJQUFJLENBQUMsQ0FBQ1YsR0FBRyxHQUFLQSxHQUFHO0lBQUEsQ0FBQztBQUFBLENBQUM7QUFFYixNQUFNa0IsYUFBYSxHQUFHLENBQUNDLElBQUksR0FBSztJQUNyQyxPQUFPWixLQUFLLENBQUMsQ0FBQyxFQUFFVCxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUdxQixJQUFJLENBQUNDLEdBQUcsRUFBRTtRQUN0Q1osTUFBTSxFQUFFLE9BQU87UUFDZkMsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNETSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1lBQ25CTCxJQUFJLEVBQUVPLElBQUksQ0FBQ1AsSUFBSTtZQUFFQyxPQUFPLEVBQUVNLElBQUksQ0FBQ04sT0FBTztZQUFFQyxJQUFJLEVBQUVLLElBQUksQ0FBQ0wsSUFBSTtTQUN4RCxDQUFDO0tBQ0gsQ0FBQyxDQUNESixJQUFJLENBQUNYLGFBQWEsQ0FBQyxDQUNuQlcsSUFBSSxDQUFDLENBQUNWLEdBQUcsR0FBSztRQUNiLE9BQU9BLEdBQUcsQ0FBQztLQUNaLENBQUM7Q0FDSCxDQUFDO0FBRUssTUFBTXFCLGFBQWEsR0FBRyxDQUFDRixLQUFJLEdBQUs7SUFDckMsT0FBT1osS0FBSyxDQUFDLENBQUMsRUFBRVQsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHcUIsS0FBSSxDQUFDQyxHQUFHLEVBQUU7UUFDdENaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO0tBQ0YsQ0FBQyxDQUNEQyxJQUFJLENBQUNYLGFBQWEsQ0FBQyxDQUNuQlcsSUFBSSxDQUFDLENBQUNTLElBQUksR0FBSztRQUNkLE9BQU9BLElBQUksQ0FBQztLQUNiLENBQUM7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdXRpbHMvYXBpLmpzP2UyODYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XG5cbmNvbnN0IGNoZWNrUmVzcG9uc2UgPSAocmVzKSA9PiB7XG4gIGlmIChyZXMub2spIHtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlcy5zdGF0dXN9YCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tcGFuaWVzID0gKCkgPT4gZmV0Y2goYCR7QkFTRV9VUkx9YCwge1xuICBtZXRob2Q6ICdHRVQnLFxuICBoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSxcbn0pXG4gIC50aGVuKGNoZWNrUmVzcG9uc2UpXG4gIC50aGVuKChyZXMpID0+IHJlcyk7XG5cbmV4cG9ydCBjb25zdCBhZGRDb21wYW55ID0gKG5hbWUsIHdlYnNpdGUsIGRhdGUpID0+IGZldGNoKGAke0JBU0VfVVJMfWAsIHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9LFxuICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgbmFtZSwgd2Vic2l0ZSwgZGF0ZSxcbiAgfSksXG59KVxuICAudGhlbihjaGVja1Jlc3BvbnNlKVxuICAudGhlbigocmVzKSA9PiByZXMpO1xuXG4gIGV4cG9ydCBjb25zdCB1cGRhdGVDb21wYW55ID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goYCR7QkFTRV9VUkx9L2AgKyBkYXRhLl9pZCwge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLCB3ZWJzaXRlOiBkYXRhLndlYnNpdGUsIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgLnRoZW4oY2hlY2tSZXNwb25zZSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbXBhbnkgPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBmZXRjaChgJHtCQVNFX1VSTH0vYCArIGRhdGEuX2lkLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKGNoZWNrUmVzcG9uc2UpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gIH07XG4iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJjaGVja1Jlc3BvbnNlIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1cyIsImdldENvbXBhbmllcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJhZGRDb21wYW55IiwibmFtZSIsIndlYnNpdGUiLCJkYXRlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVDb21wYW55IiwiZGF0YSIsIl9pZCIsImRlbGV0ZUNvbXBhbnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/api.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/edit/[id].js"));
module.exports = __webpack_exports__;

})();