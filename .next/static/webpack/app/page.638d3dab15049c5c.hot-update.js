/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/GoalsCard.tsx":
/*!**************************************!*\
  !*** ./src/components/GoalsCard.tsx ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/pages/Dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/Dashboard.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BudgetCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BudgetCard */ \"(app-pages-browser)/./src/components/BudgetCard.tsx\");\n/* harmony import */ var _components_NetWorth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NetWorth */ \"(app-pages-browser)/./src/components/NetWorth.tsx\");\n/* harmony import */ var _barrel_optimize_names_AiOutlineMenu_react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineMenu!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.mjs\");\n/* harmony import */ var _components_GoalsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GoalsCard */ \"(app-pages-browser)/./src/components/GoalsCard.tsx\");\n/* harmony import */ var _components_GoalsCard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_GoalsCard__WEBPACK_IMPORTED_MODULE_4__);\n// src/pages/Dashboard.tsx\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center mb-6 bg-[#FFF] p-4 rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineMenu_react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMenu, {\n                        className: \"text-3xl text-[#082864] mr-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sabateeshsivakumar/Desktop/Projects/MoneyTracker/wealthwise/WealthWise/src/pages/Dashboard.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-[#082864] font-medium\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sabateeshsivakumar/Desktop/Projects/MoneyTracker/wealthwise/WealthWise/src/pages/Dashboard.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sabateeshsivakumar/Desktop/Projects/MoneyTracker/wealthwise/WealthWise/src/pages/Dashboard.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row -mx-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-2 mb-4 flex-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BudgetCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/sabateeshsivakumar/Desktop/Projects/MoneyTracker/wealthwise/WealthWise/src/pages/Dashboard.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sabateeshsivakumar/Desktop/Projects/MoneyTracker/wealthwise/WealthWise/src/pages/Dashboard.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-2 mb-4 flex-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NetWorth__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/sabateeshsivakumar/Desktop/Projects/MoneyTracker/wealthwise/WealthWise/src/pages/Dashboard.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sabateeshsivakumar/Desktop/Projects/MoneyTracker/wealthwise/WealthWise/src/pages/Dashboard.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_GoalsCard__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                            fileName: \"/Users/sabateeshsivakumar/Desktop/Projects/MoneyTracker/wealthwise/WealthWise/src/pages/Dashboard.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sabateeshsivakumar/Desktop/Projects/MoneyTracker/wealthwise/WealthWise/src/pages/Dashboard.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sabateeshsivakumar/Desktop/Projects/MoneyTracker/wealthwise/WealthWise/src/pages/Dashboard.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sabateeshsivakumar/Desktop/Projects/MoneyTracker/wealthwise/WealthWise/src/pages/Dashboard.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wYWdlcy9EYXNoYm9hcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDBCQUEwQjs7QUFDQTtBQUN3QjtBQUNBO0FBQ0g7QUFDQztBQUVoRCxNQUFNSyxZQUFzQjtJQUMxQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0osOEZBQWFBO3dCQUFDSSxXQUFVOzs7Ozs7a0NBQ3pCLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBc0M7Ozs7Ozs7Ozs7OzswQkFFdEQsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNOLDhEQUFVQTs7Ozs7Ozs7OztrQ0FFYiw4REFBQ0s7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNMLDREQUFZQTs7Ozs7Ozs7OztrQ0FFZiw4REFBQ0k7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNILDhEQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtLQXBCTUM7QUFzQk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC50c3g/MDRlYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFnZXMvRGFzaGJvYXJkLnRzeFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdWRnZXRDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQnVkZ2V0Q2FyZCc7XG5pbXBvcnQgTmV0V29ydGhDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTmV0V29ydGgnO1xuaW1wb3J0IHsgQWlPdXRsaW5lTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCBHb2Fsc0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Hb2Fsc0NhcmQnO1xuXG5jb25zdCBEYXNoYm9hcmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTYgYmctWyNGRkZdIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxBaU91dGxpbmVNZW51IGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtWyMwODI4NjRdIG1yLTJcIiAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1bIzA4Mjg2NF0gZm9udC1tZWRpdW1cIj5EYXNoYm9hcmQ8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgLW14LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIG1iLTQgZmxleC0xXCI+XG4gICAgICAgICAgPEJ1ZGdldENhcmQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBtYi00IGZsZXgtMVwiPlxuICAgICAgICAgIDxOZXRXb3J0aENhcmQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMlwiPlxuICAgICAgICAgIDxHb2Fsc0NhcmQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1ZGdldENhcmQiLCJOZXRXb3J0aENhcmQiLCJBaU91dGxpbmVNZW51IiwiR29hbHNDYXJkIiwiRGFzaGJvYXJkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/pages/Dashboard.tsx\n"));

/***/ })

});