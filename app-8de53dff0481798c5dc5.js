webpackJsonp([0xd2a57dc1d883],{104:function(n,e,o){"use strict";function t(n,e,o){var t=r.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function u(n,e,o){return r.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=u;var r=[{plugin:o(295),options:{plugins:[]}}]},288:function(n,e,o){"use strict";var t;e.components={"component---src-templates-index-js":o(468),"component---src-templates-events-index-js":o(466),"component---src-templates-events-single-js":o(467),"component---src-templates-menu-index-js":o(469),"component---src-templates-menu-single-js":o(470),"component---src-pages-404-js":o(464),"component---src-pages-contacts-js":o(465)},e.json=(t={"layout-index.json":o(5),"index.json":o(490)},t["layout-index.json"]=o(5),t["events.json"]=o(474),t["layout-index.json"]=o(5),t["events-17-12-3-salsa-night.json"]=o(487),t["layout-index.json"]=o(5),t["events-17-12-3-night-of-latina-dancing.json"]=o(484),t["layout-index.json"]=o(5),t["events-17-12-3-first-saturday-of-the-summer.json"]=o(481),t["layout-index.json"]=o(5),t["events-17-12-3-night-of-the-cuban-rum.json"]=o(485),t["layout-index.json"]=o(5),t["events-17-12-3-cuban-dancing.json"]=o(478),t["layout-index.json"]=o(5),t["events-17-12-3-saint-patricks-day.json"]=o(486),t["layout-index.json"]=o(5),t["events-17-12-3-wednesdays-dancing.json"]=o(489),t["layout-index.json"]=o(5),t["events-17-12-3-live-music-night.json"]=o(482),t["layout-index.json"]=o(5),t["events-17-12-3-dia-de-la-independencia.json"]=o(479),t["layout-index.json"]=o(5),t["events-17-12-3-asalto-al-cuartel-moncada-ili-dia-de-la-rebeldia-nacional.json"]=o(476),t["layout-index.json"]=o(5),t["events-17-12-3-dia-de-los-trabajadores.json"]=o(480),t["layout-index.json"]=o(5),t["events-17-12-3-christmas.json"]=o(477),t["layout-index.json"]=o(5),t["events-17-12-3-st-valentines-day.json"]=o(488),t["layout-index.json"]=o(5),t["events-17-12-3-8-of-martch.json"]=o(475),t["layout-index.json"]=o(5),t["events-17-12-3-new-year.json"]=o(483),t["layout-index.json"]=o(5),t["menu.json"]=o(491),t["layout-index.json"]=o(5),t["menu-17-12-3-breakfast.json"]=o(493),t["layout-index.json"]=o(5),t["menu-17-12-3-beet-n-berry-smoothie.json"]=o(492),t["layout-index.json"]=o(5),t["menu-17-12-3-sandwich-with-ham.json"]=o(502),t["layout-index.json"]=o(5),t["menu-17-12-3-shrimps-with-vegetables.json"]=o(504),t["layout-index.json"]=o(5),t["menu-17-12-3-congry-or-moros.json"]=o(496),t["layout-index.json"]=o(5),t["menu-17-12-3-cuban-meat-stew-la-caldosa-la-caldosa.json"]=o(497),t["layout-index.json"]=o(5),t["menu-17-12-3-fried-pineapples.json"]=o(498),t["layout-index.json"]=o(5),t["menu-17-12-3-ham-la-cuba.json"]=o(499),t["layout-index.json"]=o(5),t["menu-17-12-3-burger.json"]=o(494),t["layout-index.json"]=o(5),t["menu-17-12-3-pork-ribs.json"]=o(500),t["layout-index.json"]=o(5),t["menu-17-12-3-pumpkin-soup.json"]=o(501),t["layout-index.json"]=o(5),t["menu-17-12-3-shrimp.json"]=o(503),t["layout-index.json"]=o(5),t["menu-17-12-3-burito.json"]=o(495),t["layout-index.json"]=o(5),t["404.json"]=o(471),t["layout-index.json"]=o(5),t["contacts.json"]=o(473),t["layout-index.json"]=o(5),t["404-html.json"]=o(472),t),e.layouts={"component---src-layouts-index-js":o(463)}},289:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function u(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(1),c=t(i),l=o(4),p=t(l),d=o(168),f=t(d),m=o(73),h=t(m),g=o(104),y=function(n){var e=n.children;return c.default.createElement("div",null,e())},j=function(n){function e(o){u(this,e);var t=r(this,n.call(this));return t.state={location:o.location,pageResources:f.default.getResourcesForPathname(o.location.pathname)},t}return a(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=f.default.getResourcesForPathname(n.location.pathname);o?this.setState({location:n.location,pageResources:o}):f.default.getResourcesForPathname(n.location.pathname,function(o){e.setState({location:n.location,pageResources:o})})}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){e.page.path===f.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources})}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=j,n.exports=e.default},73:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(671),r=t(u),a=(0,r.default)();n.exports=a},290:function(n,e,o){"use strict";var t=o(71),u={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var r=decodeURIComponent(o),a=r.slice(e.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),u[a])return u[a];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,t.matchPath)(a,{path:n.path})||(0,t.matchPath)(a,{path:n.matchPath}))return s=n,u[a]=n,!0}else{if((0,t.matchPath)(a,{path:n.path,exact:!0}))return s=n,u[a]=n,!0;if((0,t.matchPath)(a,{path:n.path+"index.html"}))return s=n,u[a]=n,!0}return!1}),s}}},291:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(131),r=t(u),a=o(104),s=(0,a.apiRunner)("replaceHistory"),i=s[0],c=i||(0,r.default)();n.exports=c},472:function(n,e,o){o(2),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(510)})})}},471:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(511)})})}},473:function(n,e,o){o(2),n.exports=function(n){return o.e(58372664347541,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(512)})})}},475:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9df33a8c0a48,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(513)})})}},476:function(n,e,o){o(2),n.exports=function(n){return o.e(0xbc59876f595f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(514)})})}},477:function(n,e,o){o(2),n.exports=function(n){return o.e(0x7dd86dea2dec,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(515)})})}},478:function(n,e,o){o(2),n.exports=function(n){return o.e(46973141075842,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(516)})})}},479:function(n,e,o){o(2),n.exports=function(n){return o.e(81516180194870,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(517)})})}},480:function(n,e,o){o(2),n.exports=function(n){return o.e(0xc93c01d2b7cf,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(518)})})}},481:function(n,e,o){o(2),n.exports=function(n){return o.e(0xbaba189a2d36,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(519)})})}},482:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9f3bd5e1b131,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(520)})})}},483:function(n,e,o){o(2),n.exports=function(n){return o.e(0x702fe22e8c90,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(521)})})}},484:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe38484e3be53,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(522)})})}},485:function(n,e,o){o(2),n.exports=function(n){return o.e(0xce4933d58158,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(523)})})}},486:function(n,e,o){o(2),n.exports=function(n){return o.e(0xc37e43459c68,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(524)})})}},487:function(n,e,o){o(2),n.exports=function(n){return o.e(0x86c94034efea,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(525)})})}},488:function(n,e,o){o(2),n.exports=function(n){return o.e(0xa3b44d7092de,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(526)})})}},489:function(n,e,o){o(2),n.exports=function(n){return o.e(0x6005ee89797c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(527)})})}},474:function(n,e,o){o(2),n.exports=function(n){return o.e(44713349584700,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(528)})})}},490:function(n,e,o){o(2),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(529)})})}},5:function(n,e,o){o(2),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(134)})})}},492:function(n,e,o){o(2),n.exports=function(n){return o.e(0xcbb98dcb7a5d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(530)})})}},493:function(n,e,o){o(2),n.exports=function(n){return o.e(67701401376592,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(531)})})}},494:function(n,e,o){o(2),n.exports=function(n){return o.e(67016692574535,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(532)})})}},495:function(n,e,o){o(2),n.exports=function(n){return o.e(75364563973470,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(533)})})}},496:function(n,e,o){o(2),n.exports=function(n){return o.e(0xc9eb81a4dbba,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(534)})})}},497:function(n,e,o){o(2),n.exports=function(n){return o.e(76800866966239,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(535)})})}},498:function(n,e,o){o(2),n.exports=function(n){return o.e(0x6819575a13bb,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(536)})})}},499:function(n,e,o){o(2),n.exports=function(n){return o.e(0x8ae2e150378d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(537)})})}},500:function(n,e,o){o(2),n.exports=function(n){return o.e(65731880916748,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(538)})})}},501:function(n,e,o){o(2),n.exports=function(n){return o.e(0x867c359e2670,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(539)})})}},502:function(n,e,o){o(2),n.exports=function(n){return o.e(0xc36876ed3253,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(540)})})}},503:function(n,e,o){o(2),n.exports=function(n){return o.e(0xb1435653f1b2,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(541)})})}},504:function(n,e,o){o(2),n.exports=function(n){return o.e(0xfc3ea0010764,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(542)})})}},491:function(n,e,o){o(2),n.exports=function(n){return o.e(21111123612422,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(543)})})}},463:function(n,e,o){o(2),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(292)})})}},168:function(n,e,o){(function(e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(1),r=(t(u),o(290)),a=t(r),s=o(73),i=t(s),c=void 0,l={},p={},d={},f={},m={},h=[],g=[],y={},j=[],v={},x=function(n){return n&&n.default||n},b=void 0,C=!0;b=o(293)({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(n){R(n,function(){j=j.filter(function(e){return e!==n}),b.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){b.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){b.onPostLoadPageResources(n)});var N=function(n,e){return v[n]>v[e]?1:v[n]<v[e]?-1:0},k=function(n,e){return y[n]>y[e]?1:y[n]<y[e]?-1:0},R=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[n])e.nextTick(function(){o(null,f[n])});else{var t="component---"===n.slice(0,12)?p.components[n]||p.layouts[n]:p.json[n];t(function(e,t){f[n]=t,o(e,t)})}},w=function(n,o){m[n]?e.nextTick(function(){o(null,m[n])}):R(n,function(e,t){if(e)o(e);else{var u=x(t());m[n]=u,o(e,u)}})},_=1,P={empty:function(){g=[],y={},v={},j=[],h=[]},addPagesArray:function(n){h=n;var e="";e="/cuba-site",c=(0,a.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return g.pop()},enqueue:function(n){if(!h.some(function(e){return e.path===n}))return!1;var e=1/_;_+=1,y[n]?y[n]+=1:y[n]=1,P.has(n)||g.unshift(n),g.sort(k);var o=c(n);return o.jsonName&&(v[o.jsonName]?v[o.jsonName]+=1+e:v[o.jsonName]=1+e,j.indexOf(o.jsonName)!==-1||f[o.jsonName]||j.unshift(o.jsonName)),o.componentChunkName&&(v[o.componentChunkName]?v[o.componentChunkName]+=1+e:v[o.componentChunkName]=1+e,j.indexOf(o.componentChunkName)!==-1||f[o.jsonName]||j.unshift(o.componentChunkName)),j.sort(N),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:v}},getPages:function(){return{pathArray:g,pathCount:y}},getPage:function(n){return c(n)},has:function(n){return g.some(function(e){return e===n})},getResourcesForPathname:function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(n)||navigator.serviceWorker.getRegistrations().then(function(n){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var u;if(o){if(t>=e.length)break;u=e[t++]}else{if(t=e.next(),t.done)break;u=t.value}var r=u;r.unregister()}window.location.reload()})),C=!1;var t=c(n);if(!t)return void console.log("A page wasn't found for \""+n+'"');if(n=t.path,d[n])return e.nextTick(function(){o(d[n]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:d[n]})}),d[n];i.default.emit("onPreLoadPageResources",{path:n});var u=void 0,r=void 0,a=void 0,s=function(){if(u&&r&&(!t.layoutComponentChunkName||a)){d[n]={component:u,json:r,layout:a,page:t};var e={component:u,json:r,layout:a,page:t};o(e),i.default.emit("onPostLoadPageResources",{page:t,pageResources:e})}};return w(t.componentChunkName,function(n,e){n&&console.log("Loading the component for "+t.path+" failed"),u=e,s()}),w(t.jsonName,function(n,e){n&&console.log("Loading the JSON for "+t.path+" failed"),r=e,s()}),void(t.layoutComponentChunkName&&w(t.layoutComponentChunkName,function(n,e){n&&console.log("Loading the Layout for "+t.path+" failed"),a=e,s()}))},peek:function(n){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(n){return g.length-g.indexOf(n)-1}};n.exports=P}).call(e,o(66))},544:function(n,e){n.exports=[{componentChunkName:"component---src-templates-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-templates-events-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events.json",path:"/events"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-salsa-night.json",path:"/events/17-12-3-salsa-night"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-night-of-latina-dancing.json",path:"/events/17-12-3-night-of-latina-dancing"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-first-saturday-of-the-summer.json",path:"/events/17-12-3-first-saturday-of-the-summer"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-night-of-the-cuban-rum.json",path:"/events/17-12-3-night-of-the-cuban-rum"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-cuban-dancing.json",path:"/events/17-12-3-cuban-dancing"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-saint-patricks-day.json",path:"/events/17-12-3-saint-patricks-day"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-wednesdays-dancing.json",path:"/events/17-12-3-wednesdays-dancing"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-live-music-night.json",path:"/events/17-12-3-live-music-night"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-dia-de-la-independencia.json",path:"/events/17-12-3-dia-de-la-independencia"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-asalto-al-cuartel-moncada-ili-dia-de-la-rebeldia-nacional.json",path:"/events/17-12-3-asalto-al-cuartel-moncada-ili-dia-de-la-rebeldia-nacional"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-dia-de-los-trabajadores.json",path:"/events/17-12-3-dia-de-los-trabajadores"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-christmas.json",path:"/events/17-12-3-christmas"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-st-valentines-day.json",path:"/events/17-12-3-st-valentines-day"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-8-of-martch.json",path:"/events/17-12-3-8-of-martch"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-12-3-new-year.json",path:"/events/17-12-3-new-year"},{componentChunkName:"component---src-templates-menu-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu.json",path:"/menu"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-breakfast.json",path:"/menu/17-12-3-breakfast"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-beet-n-berry-smoothie.json",path:"/menu/17-12-3-beet-n-berry-smoothie"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-sandwich-with-ham.json",path:"/menu/17-12-3-sandwich-with-ham"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-shrimps-with-vegetables.json",path:"/menu/17-12-3-shrimps-with-vegetables"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-congry-or-moros.json",path:"/menu/17-12-3-congry-or-moros"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-cuban-meat-stew-la-caldosa-la-caldosa.json",path:"/menu/17-12-3-cuban-meat-stew-la-caldosa-la-caldosa"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-fried-pineapples.json",path:"/menu/17-12-3-fried-pineapples"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-ham-la-cuba.json",path:"/menu/17-12-3-ham-la-cuba"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-burger.json",path:"/menu/17-12-3-burger"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-pork-ribs.json",path:"/menu/17-12-3-pork-ribs"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-pumpkin-soup.json",path:"/menu/17-12-3-pumpkin-soup"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-shrimp.json",path:"/menu/17-12-3-shrimp"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-12-3-burito.json",path:"/menu/17-12-3-burito"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-contacts-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contacts.json",path:"/contacts/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},293:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],u=[],r=function(){var n=e();n&&(u.push(n),o(n))},a=function(n){switch(n.type){case"RESOURCE_FINISHED":u=u.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===u.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(n){a({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:u}},empty:function(){t=[],u=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},r=o(104),a=o(1),s=t(a),i=o(52),c=t(i),l=o(71),p=o(508),d=o(425),f=t(d),m=o(291),h=t(m),g=o(73),y=t(g),j=o(544),v=t(j),x=o(545),b=t(x),C=o(289),N=t(C),k=o(288),R=t(k),w=o(168),_=t(w);o(415),window.___emitter=y.default,_.default.addPagesArray(v.default),_.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=_.default,window.matchPath=l.matchPath;var P=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=P[n];return null!=e&&(h.default.replace(e.toPath),!0)};E(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){E(n.pathname)||(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var o=e.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var u=n.location.pathname;if(u===o)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&o(294);var t=function(n){function e(o){o.page.path===_.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(t),window.___history.push(n))}var o=P[n];if(o&&(n=o.toPath),window.location.pathname!==n){var t=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);_.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,r.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=(0,r.apiRunner)("replaceRouterComponent",{history:h.default})[0],d=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},m=(0,l.withRouter)(N.default);_.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,a.createElement)(i?i:d,null,(0,a.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,a.createElement)(m,{layout:!0,children:function(e){return(0,a.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return _.default.getPage(t.location.pathname)?(0,a.createElement)(N.default,u({page:!0},t)):(0,a.createElement)(N.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,f.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},545:function(n,e){n.exports=[]},294:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(73),r=t(u),a="/";a="/cuba-site/","serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},295:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(1),r=t(u),a=o(71),s=o(269),i=o(326),c=t(i);e.replaceRouterComponent=function(n){var e=n.history,o=(0,c.default)(),t=function(n){var t=n.children;return r.default.createElement(s.Provider,{store:o},r.default.createElement(a.Router,{history:e},t))};return t}},425:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,u="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return r||o.addEventListener(u,n=function(){for(o.removeEventListener(u,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},2:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),u=o.e,r=o.s;o.e=function(t,a){var s=!1,i=!0,c=function(n){a&&(a(o,n),a=null)};return!r&&e&&e[t]?void c(!0):(u(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,r?r[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},671:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).map(function(n){n(o)}),(n["*"]||[]).map(function(n){n(e,o)})}}}n.exports=o},66:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function u(n){if(l===setTimeout)return setTimeout(n,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function r(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function a(){h&&f&&(h=!1,f.length?m=f.concat(m):g=-1,m.length&&s())}function s(){if(!h){var n=u(a);h=!0;for(var e=m.length;e;){for(f=m,m=[];++g<e;)f&&f[g].run();g=-1,e=m.length}f=null,h=!1,r(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,d=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(n){l=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var f,m=[],h=!1,g=-1;d.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];m.push(new i(n,e)),1!==m.length||h||u(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(n){return[];
},d.binding=function(n){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(n){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},805:function(n,e){"use strict";function o(n){return function(e){var o=e.dispatch,t=e.getState;return function(e){return function(u){return"function"==typeof u?u(o,t,n):e(u)}}}}e.__esModule=!0;var t=o();t.withExtraArgument=o,e.default=t},464:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(321)})})}},465:function(n,e,o){o(2),n.exports=function(n){return o.e(0x79735a9ecbef,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(322)})})}},323:function(n,e,o){"use strict";e.__esModule=!0;var t=o(324);Object.defineProperty(e,"locale",{enumerable:!0,get:function(){return t.locale}});var u=o(325);Object.defineProperty(e,"locales",{enumerable:!0,get:function(){return u.locales}})},324:function(n,e){"use strict";function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){case"locale/SWITCH_LOCALE":return e.locale;default:return n}}e.__esModule=!0,e.locale=o},325:function(n,e){"use strict";function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){default:return n}}e.__esModule=!0,e.locales=o},326:function(n,e,o){"use strict";function t(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e.default=n,e}function u(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.initState=void 0;var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},a=o(166),s=o(805),i=u(s),c=o(323),l=t(c),p=(e.initState={locale:"ru"},(0,a.combineReducers)(r({},l))),d={locale:"ru",locales:["ru","en"]},f=function(){return(0,a.createStore)(p,d,(0,a.applyMiddleware)(i.default))};e.default=f},466:function(n,e,o){o(2),n.exports=function(n){return o.e(63560627574878,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(330)})})}},467:function(n,e,o){o(2),n.exports=function(n){return o.e(0x767162c0de90,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(331)})})}},468:function(n,e,o){o(2),n.exports=function(n){return o.e(0x5eadfb0a5d2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(332)})})}},469:function(n,e,o){o(2),n.exports=function(n){return o.e(26316382052729,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(336)})})}},470:function(n,e,o){o(2),n.exports=function(n){return o.e(0xd85884efae66,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(337)})})}}});
//# sourceMappingURL=app-8de53dff0481798c5dc5.js.map