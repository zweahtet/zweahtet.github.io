(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2520],{6071:function(e,t,n){"use strict";var r=n(3038),i=n(862);t.default=void 0;var a=i(n(7294)),o=n(1689),s=n(2441),l=n(5749),c={};function d(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(i?"%"+i:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),i=n&&n.asPath||"/",u=a.default.useMemo((function(){var t=(0,o.resolveHref)(i,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?(0,o.resolveHref)(i,e.as):s||a}}),[i,e.href,e.as]),f=u.href,p=u.as,m=e.children,h=e.replace,g=e.shallow,x=e.scroll,v=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var y=a.Children.only(m),b=y&&"object"===typeof y&&y.ref,w=(0,l.useIntersection)({rootMargin:"200px"}),j=r(w,2),k=j[0],_=j[1],N=a.default.useCallback((function(e){k(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,k]);(0,a.useEffect)((function(){var e=_&&t&&(0,o.isLocalURL)(f),r="undefined"!==typeof v?v:n&&n.locale,i=c[f+"%"+p+(r?"%"+r:"")];e&&!i&&d(n,f,p,{locale:r})}),[p,f,_,v,t,n]);var C={ref:N,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:a,locale:l,scroll:s}))}(e,n,f,p,h,g,x,v)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),d(n,f,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var S="undefined"!==typeof v?v:n&&n.locale,I=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(p,S,n&&n.locales,n&&n.domainLocales);C.href=I||(0,o.addBasePath)((0,o.addLocale)(p,S,n&&n.defaultLocale))}return a.default.cloneElement(y,C)};t.default=u},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=(0,i.useRef)(),c=(0,i.useState)(!1),d=r(c,2),u=d[0],f=d[1],p=(0,i.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return(0,i.useEffect)((function(){if(!o&&!u){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[u]),[p,u]};var i=n(7294),a=n(8391),o="undefined"!==typeof IntersectionObserver;var s=new Map},7775:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(2821)),a=n(7817),o=n(6226),s=n(3833);t.Z=function(){return(0,r.jsx)(s.V6,{children:(0,r.jsxs)(s.qr,{children:[(0,r.jsx)(s.Ov,{children:(0,r.jsx)(s.ne,{children:"Innovating one project at a time"})}),(0,r.jsxs)(s.Gn,{children:[(0,r.jsx)(o.HE,{href:a.us.Github.visit,children:(0,r.jsx)(i.RrF,{size:"3rem"})}),(0,r.jsx)(o.HE,{href:a.us.LinkedIn.visit,children:(0,r.jsx)(i._iD,{size:"3rem"})})]})]})})}},3833:function(e,t,n){"use strict";n.d(t,{V6:function(){return i},qr:function(){return a},Ov:function(){return o},ne:function(){return s},Gn:function(){return l}});var r=n(9163),i=r.default.section.withConfig({displayName:"FooterStyles__FooterWrapper",componentId:"sc-1ifsifd-0"})(["border-top:2px solid #6666ff;width:calc(100vw - 96px);padding:1.5rem 40px;box-sizing:content-box;@media ","{width:calc(100vw - 32px);}"],(function(e){return e.theme.breakpoints.sm})),a=(r.default.a.withConfig({displayName:"FooterStyles__LinkItem",componentId:"sc-1ifsifd-1"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ","{font-size:16px;line-height:28px;display:flex;}@media ","{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),r.default.div.withConfig({displayName:"FooterStyles__SocialIconsContainer",componentId:"sc-1ifsifd-2"})(["max-width:1040px;display:flex;justify-content:space-between;@media ","{display:flex;justify-content:space-between;}@media ","{display:flex;width:100%;flex-direction:column;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),o=r.default.div.withConfig({displayName:"FooterStyles__CompanyContainer",componentId:"sc-1ifsifd-3"})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ","{flex-direction:column;align-items:baseline;}@media ","{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),s=r.default.p.withConfig({displayName:"FooterStyles__Slogan",componentId:"sc-1ifsifd-4"})(["min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ","{font-size:16px;line-height:28px;}@media ","{line-height:22px;font-size:14px;min-width:100px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),l=r.default.div.withConfig({displayName:"FooterStyles__SocialContainer",componentId:"sc-1ifsifd-5"})(["display:flex;align-items:center;@media ","{justify-content:center;padding-right:16px;flex-wrap:wrap;}"],(function(e){return e.theme.breakpoints.md}));r.default.ul.withConfig({displayName:"FooterStyles__LinkList",componentId:"sc-1ifsifd-6"})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ","{padding:32px 0 16px;}@media ","{width:100%;padding:32px 0 16px;gap:16px;}@media ","{width:100%;padding:32px 4px 16px;gap:5px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),r.default.div.withConfig({displayName:"FooterStyles__LinkColumn",componentId:"sc-1ifsifd-7"})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]),r.default.h4.withConfig({displayName:"FooterStyles__LinkTitle",componentId:"sc-1ifsifd-8"})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ","{font-size:10px;line-height:12px;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm}))},3689:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),i=(n(1664),n(7294),n(2821)),a=n(7817),o=n(3833),s=n(6226);function l(e){return(0,r.jsx)("div",{children:(0,r.jsx)("header",{className:"shadow border-b-2 border-indigo-600",children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"container mx-auto px-6 py-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("a",{class:"flex items-center text-white-800 hover:text-indigo-500",href:"/",children:[(0,r.jsx)("svg",{class:"h-10 w-10 sm:h-10 sm:w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),(0,r.jsx)("span",{className:"mx-3 fond-medium",children:"Zwea Htet"})]})}),(0,r.jsx)("div",{className:"flex itesm-center -mx-2",children:(0,r.jsxs)(o.Gn,{children:[(0,r.jsx)(s.HE,{href:a.us.Github.visit,children:(0,r.jsx)(i.RrF,{size:"3rem"})}),(0,r.jsx)(s.HE,{href:a.us.LinkedIn.visit,children:(0,r.jsx)(i._iD,{size:"3rem"})})]})})]})})})})})}},6226:function(e,t,n){"use strict";n.d(t,{HE:function(){return a}});var r=n(1649),i=n(9163),a=(i.default.div.withConfig({displayName:"HeaderStyles__Container",componentId:"sc-9w0vkp-0"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ","{display:flex;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),i.default.span.withConfig({displayName:"HeaderStyles__Span",componentId:"sc-9w0vkp-1"})(["font-size:2rem;"]),i.default.div.withConfig({displayName:"HeaderStyles__Div1",componentId:"sc-9w0vkp-2"})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ","{grid-area:1 / 1 / 2 / 3;}"],(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"HeaderStyles__Div2",componentId:"sc-9w0vkp-3"})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ","{grid-area:2 / 2 / 3 / 5;}"],(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"HeaderStyles__Div3",componentId:"sc-9w0vkp-4"})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ","{align-items:center;grid-area:1 / 4 / 2 / 6;}"],(function(e){return e.theme.breakpoints.sm})),i.default.a.withConfig({displayName:"HeaderStyles__NavLink",componentId:"sc-9w0vkp-5"})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ","{padding:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),i.default.button.withConfig({displayName:"HeaderStyles__ContactDropDown",componentId:"sc-9w0vkp-6"})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ","{padding:0.4rem 0;}@media ","{padding:0;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md})),(0,i.default)(r.U0j).withConfig({displayName:"HeaderStyles__NavProductsIcon",componentId:"sc-9w0vkp-7"})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:",";transform:",";&:hover{opacity:1;}@media ","{margin:2px 0 0 2px;width:15px;}"],(function(e){return e.isOpen?"1":".75"}),(function(e){return e.isOpen?"scaleY(-1)":"scaleY(1)"}),(function(e){return e.theme.breakpoints.sm})),i.default.a.withConfig({displayName:"HeaderStyles__SocialIcons",componentId:"sc-9w0vkp-8"})(["transition:0.3s ease;border-radius:50px;padding:8px;&:hover{transform:scale(1.2);cursor:pointer;color:#6666ff;}"]))},7817:function(e,t,n){"use strict";n.d(t,{q:function(){return r},Gm:function(){return i},kL:function(){return a},us:function(){return o},Y5:function(){return s}});var r=[{title:"Financial Literatus",description:"A web application to educate high school students about financial literacy and help them choose a lifestyle options",image:"/images/financialLiteratusHomePage.jpeg",tags:["React","Redux","Typescript","Axios"],source:"https://financial-literatus.github.io",code:"https://github.com/financial-literatus/financial-literatus.github.io.git",id:0},{title:"Ants vs Some Bees",description:"This game is inspired by PopCap Games' Plants Vs. Zombies. This project uses an object-oriented programming paradigm, focusing on material from Chapter 2.5 of Composing Programs. The project also involves understanding, extending, and testing a large program.",image:"/images/antsVsSomeBees.jpeg",tags:["Python","OOP","Javascript","Flask"],source:"https://financial-literatus.github.io",code:"https://github.com/financial-literatus/financial-literatus.github.io.git",id:1}],i=[{year:2017,text:"Self-taught basic web development"},{year:2018,text:"Started my college career"},{year:2021,text:"Developed Financial Literatus"},{year:2021,text:"Software Engineer at ConnectAtCal"}],a=[{number:2,text:"Open Source Projects"}],o={Github:{visit:"https://github.com/zweahtet"},LinkedIn:{visit:"https://www.linkedin.com/in/zachhtet23/"}},s=[{id:0,name:"Structure and Interpretation of Computer Programs"},{id:1,name:"Data Structures and Algorithms with Java"},{id:2,name:"Data Structures and Algorithms with Java"}]},938:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return m}});var r=n(5893);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(7294);function s(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex overflow-x-hidden overflow-y-auto border-r-2",children:(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{value:"list-of-courses",className:"block py-2.5 px-1.5",children:e.courses.map((function(t,n){return(0,r.jsx)("li",{className:"p-2 rounded transition \r duration-200 hover:bg-gray-500 hover:text-white",onClick:e.onClick,value:t,children:t},n)}))})})})})}var l=n(1664);function c(e){var t=e.categories;return(0,r.jsx)("section",{className:"max-w-6x1 mx-auto px-2.5 sm:px-2.5 lg:px-2.5 py-2.5",children:(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:t&&t.map((function(e,t){return(0,r.jsx)("div",{className:"w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row",children:(0,r.jsxs)("div",{className:"w-full md:w-4/5 text-left p-7 md:p-4/5 space-y-2",children:[(0,r.jsx)("h3",{className:"text-md text-gray-700 font-bold",children:e.title}),(0,r.jsx)("p",{className:"text-base leading-relaxed text-gray-500 font-normal",children:e.category}),(0,r.jsx)("div",{className:"flex justify-start space-x-2",children:(0,r.jsx)(l.default,{href:"/".concat(e._id),children:(0,r.jsx)("button",{type:"link",className:"text-gray-500 hover:text-gray-600",children:"Read more"})})})]})})}))})})}function d(e){return(0,r.jsxs)("main",{className:"flex flex-col w-full overflow-x-hidden overflow-y-auto py-1 px-4 text-2xl mb-14",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("h1",{className:"font-bold",children:e.contentHeader}),(0,r.jsx)(l.default,{href:"/new-category",children:"Add Problem"})]}),(0,r.jsx)(c,{categories:e.contentCategories})]})}var u=n(7775),f=n(3689),p=!0;function m(e){var t,n=e.courses,i=(t="course",n.reduce((function(e,n){var r=n[t];return e[r]=e[r]||[],e[r].push(n),e}),{})),l=Object.keys(i),c=a(o.useState({courseHeader:"cs61a",categories:i.cs61a}),2),p=c[0],m=c[1];return(0,r.jsxs)("div",{className:"flex flex-col relative min-h-screen md:flex",children:[(0,r.jsx)(f.Z,{}),(0,r.jsxs)("div",{className:"flex h-full flex-grow",children:[(0,r.jsx)(s,{courses:l,onClick:function(e){m({courseHeader:e.target.getAttribute("value"),categories:i[e.target.getAttribute("value")]})}}),(0,r.jsx)(d,{contentHeader:p.courseHeader,contentCategories:p.categories})]}),(0,r.jsx)(u.Z,{})]})}},9422:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses",function(){return n(938)}])},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return r.createElement(d,o({attr:o({},e.attr)},t),l(e.child))}}function d(e){var t=function(t){var n,i=e.attr,a=e.size,l=e.title,c=s(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(i)}}},function(e){e.O(0,[4617,9866,9774,2888,179],(function(){return t=9422,e(e.s=t);var t}));var t=e.O();_N_E=t}]);