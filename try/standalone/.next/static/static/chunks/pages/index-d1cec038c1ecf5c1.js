(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(441)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,u=n(7273).Z,a=r(n(7294)),l=n(6273),i=n(2725),f=n(3462),c=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function h(e,t,n,o){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var y=a.default.forwardRef((function(e,t){var n,r=e.href,y=e.as,_=e.children,x=e.prefetch,b=e.passHref,C=e.replace,g=e.shallow,j=e.scroll,m=e.locale,M=e.onClick,L=e.onMouseEnter,R=e.onTouchStart,E=e.legacyBehavior,O=void 0===E?!0!==Boolean(!1):E,w=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,!O||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var P=!1!==x,k=a.default.useContext(f.RouterContext),T=a.default.useContext(c.AppRouterContext);T&&(k=T);var S,I=a.default.useMemo((function(){var e=o(l.resolveHref(k,r,!0),2),t=e[0],n=e[1];return{href:t,as:y?l.resolveHref(k,y):n||t}}),[k,r,y]),N=I.href,A=I.as,H=a.default.useRef(N),U=a.default.useRef(A);O&&(S=a.default.Children.only(n));var B=O?S&&"object"===typeof S&&S.ref:t,D=o(s.useIntersection({rootMargin:"200px"}),3),K=D[0],Z=D[1],G=D[2],X=a.default.useCallback((function(e){U.current===A&&H.current===N||(G(),U.current=A,H.current=N),K(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[A,B,N,G,K]);a.default.useEffect((function(){var e=Z&&P&&l.isLocalURL(N),t="undefined"!==typeof m?m:k&&k.locale,n=v[N+"%"+A+(t?"%"+t:"")];e&&!n&&h(k,N,A,{locale:t})}),[A,N,Z,m,P,k]);var q={ref:X,onClick:function(e){O||"function"!==typeof M||M(e),O&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,u,i,f,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:f,scroll:i}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!s})};c?a.default.startTransition(d):d()}}(e,k,N,A,C,g,j,m,Boolean(T),P)},onMouseEnter:function(e){O||"function"!==typeof L||L(e),O&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),!P&&T||l.isLocalURL(N)&&h(k,N,A,{priority:!0})},onTouchStart:function(e){O||"function"!==typeof R||R(e),O&&S.props&&"function"===typeof S.props.onTouchStart&&S.props.onTouchStart(e),!P&&T||l.isLocalURL(N)&&h(k,N,A,{priority:!0})}};if(!O||b||"a"===S.type&&!("href"in S.props)){var z="undefined"!==typeof m?m:k&&k.locale,V=k&&k.isLocaleDomain&&d.getDomainLocale(A,z,k.locales,k.domainLocales);q.href=V||p.addBasePath(i.addLocale(A,z,k&&k.defaultLocale))}return O?a.default.cloneElement(S,q):a.default.createElement("a",Object.assign({},w,q),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!a,c=o(r.useState(!1),2),s=c[0],d=c[1],p=o(r.useState(null),2),v=p[0],h=p[1];r.useEffect((function(){if(a){if(f||s)return;if(v&&v.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var r=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:r},i.push(n),l.set(n,t),t}(n),r=o.id,u=o.observer,a=o.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(r);var t=i.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&i.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var o=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(o)}}}),[v,f,n,t,s]);var y=r.useCallback((function(){d(!1)}),[]);return[h,s,y]};var r=n(7294),u=n(9311),a="function"===typeof IntersectionObserver,l=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var u=o.default.createContext(null);t.LayoutRouterContext=u;var a=o.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=o.default.createContext(null);t.TemplateContext=l},441:function(e,t,n){"use strict";n.r(t);var o=n(5893),r=n(1664),u=n.n(r),a=n(6252);t.default=function(){var e=(0,a.x)();return(0,o.jsxs)("section",{children:[(0,o.jsxs)("h1",{children:["Hello, you're using Apollo Client ",e.version]}),(0,o.jsx)("p",{children:"Here are few examples of how to use it:"}),(0,o.jsx)("nav",{children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(u(),{href:"/users-csr",children:"Client-Side Rendering"})}),(0,o.jsx)("li",{children:(0,o.jsx)(u(),{href:"/users-ssr",children:"Server-Side Rendering"})})]})})]})}},1664:function(e,t,n){e.exports=n(8418)},6252:function(e,t,n){"use strict";n.d(t,{x:function(){return a}});var o=n(9008),r=n(7294),u=n(5092);function a(e){var t=(0,r.useContext)((0,u.K)()),n=e||t.client;return __DEV__?(0,o.kG)(!!n,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,o.kG)(!!n,29),n}}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);