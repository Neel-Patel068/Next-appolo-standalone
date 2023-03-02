"use strict";
exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 5871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uk": () => (/* binding */ useApollo),
/* harmony export */   "_p": () => (/* binding */ addApolloState),
/* harmony export */   "in": () => (/* binding */ initializeApollo)
/* harmony export */ });
/* unused harmony exports APOLLO_STATE_PROPERTY_NAME, COOKIES_TOKEN_NAME */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6330);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7812);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2901);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_5__);






const APOLLO_STATE_PROPERTY_NAME = "__APOLLO_STATE__";
const COOKIES_TOKEN_NAME = "jwt";
const getToken = (req)=>{
    const parsedCookie = cookie__WEBPACK_IMPORTED_MODULE_2___default().parse(req ? req.headers.cookie ?? "" : document.cookie);
    return parsedCookie[COOKIES_TOKEN_NAME];
};
let apolloClient = null;
const createApolloClient = (ctx)=>{
    const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.HttpLink({
        uri: "https://api.mocki.io/v2/c4d7a195/graphql",
        credentials: "same-origin"
    });
    const authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__.setContext)((_, { headers  })=>{
        // Get the authentication token from cookies
        const token = getToken(ctx?.req);
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ""
            }
        };
    });
    return new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({
        ssrMode: "undefined" === "undefined",
        link: authLink.concat(httpLink),
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache()
    });
};
function initializeApollo(initialState = null, ctx = null) {
    const client = apolloClient ?? createApolloClient(ctx);
    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = client.extract();
        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        const data = deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(initialState, existingCache, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray, sourceArray)=>[
                    ...sourceArray,
                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!lodash_isequal__WEBPACK_IMPORTED_MODULE_5___default()(d, s))), 
                ]
        });
        // Restore the cache with the merged data
        client.cache.restore(data);
    }
    // For SSG and SSR always create a new Apollo Client
    if (true) {
        return client;
    }
    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = client;
    }
    return client;
}
function addApolloState(client, pageProps) {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROPERTY_NAME] = client.cache.extract();
    }
    return pageProps;
}
function useApollo(pageProps) {
    const state = pageProps[APOLLO_STATE_PROPERTY_NAME];
    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(state), [
        state
    ]);
    return store;
}


/***/ })

};
;