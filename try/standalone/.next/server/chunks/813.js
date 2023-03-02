"use strict";
exports.id = 813;
exports.ids = [813];
exports.modules = {

/***/ 3813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* reexport */ UsersListContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/components/users-list/users-list.tsx

const UsersList = ({ users  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: users.map((user)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: user.email
            }, user.id))
    });
};

// EXTERNAL MODULE: ./src/graphql/queries/users.graphql.interface.ts
var users_graphql_interface = __webpack_require__(8513);
;// CONCATENATED MODULE: ./src/components/users-list/users-list-container.tsx




const UsersListContainer = ()=>{
    const { data , loading  } = (0,client_.useQuery)(users_graphql_interface/* UsersDocument */.S);
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Users loading..."
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(UsersList, {
        users: data.users
    });
};

;// CONCATENATED MODULE: ./src/components/users-list/index.ts



/***/ }),

/***/ 8513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ UsersDocument)
/* harmony export */ });
const UsersDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "users"
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "users"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "email"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};


/***/ })

};
;