"use strict";
(() => {
var exports = {};
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 7407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_users_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3813);
/* harmony import */ var _graphql_queries_users_graphql_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8513);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5871);




// Data is already available in the UsersList components, because it's been rehydrated.
// But we still have an access to this data via props, if needed.
const UsersSSRPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Server-Side Rendering"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_users_list__WEBPACK_IMPORTED_MODULE_1__/* .UsersList */ .t, {})
        ]
    });
};
async function getServerSideProps(ctx) {
    const apolloClient = (0,_lib_apollo__WEBPACK_IMPORTED_MODULE_3__/* .initializeApollo */ ["in"])(null, ctx);
    const { data  } = await apolloClient.query({
        query: _graphql_queries_users_graphql_interface__WEBPACK_IMPORTED_MODULE_2__/* .UsersDocument */ .S
    });
    return (0,_lib_apollo__WEBPACK_IMPORTED_MODULE_3__/* .addApolloState */ ._p)(apolloClient, {
        props: {
            users: data.users
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersSSRPage);


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 7812:
/***/ ((module) => {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 2901:
/***/ ((module) => {

module.exports = require("lodash.isequal");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [871,813], () => (__webpack_exec__(7407)));
module.exports = __webpack_exports__;

})();