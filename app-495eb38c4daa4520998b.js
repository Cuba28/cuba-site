webpackJsonp([0xd2a57dc1d883],{109:function(n,e,o){"use strict";function t(n,e,o){var t=r.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function u(n,e,o){return r.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=u;var r=[{plugin:o(299),options:{plugins:[]}}]},292:function(n,e,o){"use strict";var t;e.components={"component---src-templates-index-js":o(488),"component---src-templates-events-index-js":o(484),"component---src-templates-events-single-js":o(485),"component---src-templates-menu-index-js":o(489),"component---src-templates-menu-single-js":o(490),"component---src-templates-gallery-index-js":o(486),"component---src-templates-gallery-single-js":o(487),"component---src-pages-404-js":o(482),"component---src-pages-contacts-js":o(483)},e.json=(t={"layout-index.json":o(5),"index.json":o(515)},t["layout-index.json"]=o(5),t["events.json"]=o(494),t["layout-index.json"]=o(5),t["events-17-11-0-salsa-night.json"]=o(507),t["layout-index.json"]=o(5),t["events-17-11-0-night-of-latina-dancing.json"]=o(504),t["layout-index.json"]=o(5),t["events-17-11-0-first-saturday-of-the-summer.json"]=o(501),t["layout-index.json"]=o(5),t["events-17-11-0-night-of-the-cuban-rum.json"]=o(505),t["layout-index.json"]=o(5),t["events-17-11-0-cuban-dancing.json"]=o(498),t["layout-index.json"]=o(5),t["events-17-11-0-saint-patricks-day.json"]=o(506),t["layout-index.json"]=o(5),t["events-17-11-0-wednesdays-dancing.json"]=o(509),t["layout-index.json"]=o(5),t["events-17-11-0-live-music-night.json"]=o(502),t["layout-index.json"]=o(5),t["events-17-11-0-dia-de-la-independencia.json"]=o(499),t["layout-index.json"]=o(5),t["events-17-11-0-asalto-al-cuartel-moncada-ili-dia-de-la-rebeldia-nacional.json"]=o(496),t["layout-index.json"]=o(5),t["events-17-11-0-dia-de-los-trabajadores.json"]=o(500),t["layout-index.json"]=o(5),t["events-17-11-0-christmas.json"]=o(497),t["layout-index.json"]=o(5),t["events-17-11-0-st-valentines-day.json"]=o(508),t["layout-index.json"]=o(5),t["events-17-11-0-8-of-martch.json"]=o(495),t["layout-index.json"]=o(5),t["events-17-11-0-new-year.json"]=o(503),t["layout-index.json"]=o(5),t["menu.json"]=o(516),t["layout-index.json"]=o(5),t["menu-17-11-0-breakfast.json"]=o(518),t["layout-index.json"]=o(5),t["menu-17-11-0-strawberry-daiquiri.json"]=o(530),t["layout-index.json"]=o(5),t["menu-17-11-0-beet-n-berry-smoothie.json"]=o(517),t["layout-index.json"]=o(5),t["menu-17-11-0-sandwich-with-ham.json"]=o(527),t["layout-index.json"]=o(5),t["menu-17-11-0-shrimps-with-vegetables.json"]=o(529),t["layout-index.json"]=o(5),t["menu-17-11-0-congry-or-moros.json"]=o(521),t["layout-index.json"]=o(5),t["menu-17-11-0-cuban-meat-stew-la-caldosa-la-caldosa.json"]=o(522),t["layout-index.json"]=o(5),t["menu-17-11-0-fried-pineapples.json"]=o(523),t["layout-index.json"]=o(5),t["menu-17-11-0-ham-la-cuba.json"]=o(524),t["layout-index.json"]=o(5),t["menu-17-11-0-burger.json"]=o(519),t["layout-index.json"]=o(5),t["menu-17-11-0-pork-ribs.json"]=o(525),t["layout-index.json"]=o(5),t["menu-17-11-0-pumpkin-soup.json"]=o(526),t["layout-index.json"]=o(5),t["menu-17-11-0-shrimp.json"]=o(528),t["layout-index.json"]=o(5),t["menu-17-11-0-burito.json"]=o(520),t["layout-index.json"]=o(5),t["gallery.json"]=o(510),t["layout-index.json"]=o(5),t["gallery-17-11-0-christmas-2016.json"]=o(511),t["layout-index.json"]=o(5),t["gallery-17-11-0-new-year-2016.json"]=o(514),t["layout-index.json"]=o(5),t["gallery-17-11-0-halloween.json"]=o(513),t["layout-index.json"]=o(5),t["gallery-17-11-0-dia-de-la-independencia.json"]=o(512),t["layout-index.json"]=o(5),t["404.json"]=o(491),t["layout-index.json"]=o(5),t["contacts.json"]=o(493),t["layout-index.json"]=o(5),t["404-html.json"]=o(492),t),e.layouts={"component---src-layouts-index-js":o(481)}},293:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function u(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(1),c=t(i),l=o(3),p=t(l),d=o(171),m=t(d),f=o(77),h=t(f),g=o(109),y=function(n){var e=n.children;return c.default.createElement("div",null,e())},j=function(n){function e(o){u(this,e);var t=r(this,n.call(this));return t.state={location:o.location,pageResources:m.default.getResourcesForPathname(o.location.pathname)},t}return a(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=m.default.getResourcesForPathname(n.location.pathname);o?this.setState({location:n.location,pageResources:o}):m.default.getResourcesForPathname(n.location.pathname,function(o){e.setState({location:n.location,pageResources:o})})}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){e.page.path===m.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources})}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=j,n.exports=e.default},77:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(703),r=t(u),a=(0,r.default)();n.exports=a},294:function(n,e,o){"use strict";var t=o(75),u={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var r=decodeURIComponent(o),a=r.slice(e.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),u[a])return u[a];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,t.matchPath)(a,{path:n.path})||(0,t.matchPath)(a,{path:n.matchPath}))return s=n,u[a]=n,!0}else{if((0,t.matchPath)(a,{path:n.path,exact:!0}))return s=n,u[a]=n,!0;if((0,t.matchPath)(a,{path:n.path+"index.html"}))return s=n,u[a]=n,!0}return!1}),s}}},295:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(133),r=t(u),a=o(109),s=(0,a.apiRunner)("replaceHistory"),i=s[0],c=i||(0,r.default)();n.exports=c},492:function(n,e,o){o(2),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(536)})})}},491:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(537)})})}},493:function(n,e,o){o(2),n.exports=function(n){return o.e(58372664347541,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(538)})})}},495:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe8c8b9191b28,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(539)})})}},496:function(n,e,o){o(2),n.exports=function(n){return o.e(0x74a30f7daa96,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(540)})})}},497:function(n,e,o){o(2),n.exports=function(n){return o.e(0xac0fa8d2bc06,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(541)})})}},498:function(n,e,o){o(2),n.exports=function(n){return o.e(86004660154792,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(542)})})}},499:function(n,e,o){o(2),n.exports=function(n){return o.e(0x828b5e8a1cff,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(543)})})}},500:function(n,e,o){o(2),n.exports=function(n){return o.e(0x8ec3de3e3335,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(544)})})}},501:function(n,e,o){o(2),n.exports=function(n){return o.e(52742862739752,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(545)})})}},502:function(n,e,o){o(2),n.exports=function(n){return o.e(0xebb19183d82a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(546)})})}},503:function(n,e,o){o(2),n.exports=function(n){return o.e(0x73bb8ce69993,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(547)})})}},504:function(n,e,o){o(2),n.exports=function(n){return o.e(0x89f3f5001369,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(548)})})}},505:function(n,e,o){o(2),n.exports=function(n){return o.e(87127130951895,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(549)})})}},506:function(n,e,o){o(2),n.exports=function(n){return o.e(0x6d092e1ed03a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(550)})})}},507:function(n,e,o){o(2),n.exports=function(n){return o.e(0xfbb61a229a52,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(551)})})}},508:function(n,e,o){o(2),n.exports=function(n){return o.e(95061952563883,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(552)})})}},509:function(n,e,o){o(2),n.exports=function(n){return o.e(58147363256783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(553)})})}},494:function(n,e,o){o(2),n.exports=function(n){return o.e(44713349584700,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(554)})})}},511:function(n,e,o){o(2),n.exports=function(n){return o.e(0xc952c267ae11,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(555)})})}},512:function(n,e,o){o(2),n.exports=function(n){return o.e(0xcdc6ab26bee0,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(556)})})}},513:function(n,e,o){o(2),n.exports=function(n){return o.e(0x8ef1b84ca1a5,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(557)})})}},514:function(n,e,o){o(2),n.exports=function(n){return o.e(89250395130422,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(558)})})}},510:function(n,e,o){o(2),n.exports=function(n){return o.e(0x6e8019efaac5,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(559)})})}},515:function(n,e,o){o(2),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(560)})})}},5:function(n,e,o){o(2),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(136)})})}},517:function(n,e,o){o(2),n.exports=function(n){return o.e(60061228783795,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(561)})})}},518:function(n,e,o){o(2),n.exports=function(n){return o.e(79712766840057,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(562)})})}},519:function(n,e,o){o(2),n.exports=function(n){return o.e(0xc3573165c0ab,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(563)})})}},520:function(n,e,o){o(2),n.exports=function(n){return o.e(0xb86d7d8ce309,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(564)})})}},521:function(n,e,o){o(2),n.exports=function(n){return o.e(0x6c656bd9b9e6,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(565)})})}},522:function(n,e,o){o(2),n.exports=function(n){return o.e(0xefa37fe697b9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(566)})})}},523:function(n,e,o){o(2),n.exports=function(n){return o.e(0xb157285f92b1,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(567)})})}},524:function(n,e,o){o(2),n.exports=function(n){return o.e(88632601855856,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(568)})})}},525:function(n,e,o){o(2),n.exports=function(n){return o.e(0xc3c638d799ee,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(569)})})}},526:function(n,e,o){o(2),n.exports=function(n){return o.e(0xcdc802533b22,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(570)})})}},527:function(n,e,o){o(2),n.exports=function(n){return o.e(25909505832771,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(571)})})}},528:function(n,e,o){o(2),n.exports=function(n){return o.e(0x7658fe8b0c7f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(572)})})}},529:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9377262283a2,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(573)})})}},530:function(n,e,o){o(2),n.exports=function(n){return o.e(62521073327612,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(574)})})}},516:function(n,e,o){o(2),n.exports=function(n){return o.e(21111123612422,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(575)})})}},481:function(n,e,o){o(2),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(296)})})}},171:function(n,e,o){(function(e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(1),r=(t(u),o(294)),a=t(r),s=o(77),i=t(s),c=void 0,l={},p={},d={},m={},f={},h=[],g=[],y={},j=[],x={},v=function(n){return n&&n.default||n},b=void 0,C=!0;b=o(297)({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(n){R(n,function(){j=j.filter(function(e){return e!==n}),b.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){b.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){b.onPostLoadPageResources(n)});var N=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},k=function(n,e){return y[n]>y[e]?1:y[n]<y[e]?-1:0},R=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[n])e.nextTick(function(){o(null,m[n])});else{var t="component---"===n.slice(0,12)?p.components[n]||p.layouts[n]:p.json[n];t(function(e,t){m[n]=t,o(e,t)})}},w=function(n,o){f[n]?e.nextTick(function(){o(null,f[n])}):R(n,function(e,t){if(e)o(e);else{var u=v(t());f[n]=u,o(e,u)}})},_=1,P={empty:function(){g=[],y={},x={},j=[],h=[]},addPagesArray:function(n){h=n;var e="";e="/cuba-site",c=(0,a.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return g.pop()},enqueue:function(n){if(!h.some(function(e){return e.path===n}))return!1;var e=1/_;_+=1,y[n]?y[n]+=1:y[n]=1,P.has(n)||g.unshift(n),g.sort(k);var o=c(n);return o.jsonName&&(x[o.jsonName]?x[o.jsonName]+=1+e:x[o.jsonName]=1+e,j.indexOf(o.jsonName)!==-1||m[o.jsonName]||j.unshift(o.jsonName)),o.componentChunkName&&(x[o.componentChunkName]?x[o.componentChunkName]+=1+e:x[o.componentChunkName]=1+e,j.indexOf(o.componentChunkName)!==-1||m[o.jsonName]||j.unshift(o.componentChunkName)),j.sort(N),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:x}},getPages:function(){return{pathArray:g,pathCount:y}},getPage:function(n){return c(n)},has:function(n){return g.some(function(e){return e===n})},getResourcesForPathname:function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(n)||navigator.serviceWorker.getRegistrations().then(function(n){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var u;if(o){if(t>=e.length)break;u=e[t++]}else{if(t=e.next(),t.done)break;u=t.value}var r=u;r.unregister()}window.location.reload()})),C=!1;var t=c(n);if(!t)return void console.log("A page wasn't found for \""+n+'"');if(n=t.path,d[n])return e.nextTick(function(){o(d[n]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:d[n]})}),d[n];i.default.emit("onPreLoadPageResources",{path:n});var u=void 0,r=void 0,a=void 0,s=function(){if(u&&r&&(!t.layoutComponentChunkName||a)){d[n]={component:u,json:r,layout:a,page:t};var e={component:u,json:r,layout:a,page:t};o(e),i.default.emit("onPostLoadPageResources",{page:t,pageResources:e})}};return w(t.componentChunkName,function(n,e){n&&console.log("Loading the component for "+t.path+" failed"),u=e,s()}),w(t.jsonName,function(n,e){n&&console.log("Loading the JSON for "+t.path+" failed"),r=e,s()}),void(t.layoutComponentChunkName&&w(t.layoutComponentChunkName,function(n,e){n&&console.log("Loading the Layout for "+t.path+" failed"),a=e,s()}))},peek:function(n){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(n){return g.length-g.indexOf(n)-1}};n.exports=P}).call(e,o(70))},576:function(n,e){n.exports=[{componentChunkName:"component---src-templates-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-templates-events-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events.json",path:"/events"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-salsa-night.json",path:"/events/17-11-0-salsa-night"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-night-of-latina-dancing.json",path:"/events/17-11-0-night-of-latina-dancing"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-first-saturday-of-the-summer.json",path:"/events/17-11-0-first-saturday-of-the-summer"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-night-of-the-cuban-rum.json",path:"/events/17-11-0-night-of-the-cuban-rum"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-cuban-dancing.json",path:"/events/17-11-0-cuban-dancing"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-saint-patricks-day.json",path:"/events/17-11-0-saint-patricks-day"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-wednesdays-dancing.json",path:"/events/17-11-0-wednesdays-dancing"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-live-music-night.json",path:"/events/17-11-0-live-music-night"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-dia-de-la-independencia.json",path:"/events/17-11-0-dia-de-la-independencia"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-asalto-al-cuartel-moncada-ili-dia-de-la-rebeldia-nacional.json",path:"/events/17-11-0-asalto-al-cuartel-moncada-ili-dia-de-la-rebeldia-nacional"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-dia-de-los-trabajadores.json",path:"/events/17-11-0-dia-de-los-trabajadores"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-christmas.json",path:"/events/17-11-0-christmas"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-st-valentines-day.json",path:"/events/17-11-0-st-valentines-day"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-8-of-martch.json",path:"/events/17-11-0-8-of-martch"},{componentChunkName:"component---src-templates-events-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-17-11-0-new-year.json",path:"/events/17-11-0-new-year"},{componentChunkName:"component---src-templates-menu-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu.json",path:"/menu"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-breakfast.json",path:"/menu/17-11-0-breakfast"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-strawberry-daiquiri.json",path:"/menu/17-11-0-strawberry-daiquiri"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-beet-n-berry-smoothie.json",path:"/menu/17-11-0-beet-n-berry-smoothie"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-sandwich-with-ham.json",path:"/menu/17-11-0-sandwich-with-ham"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-shrimps-with-vegetables.json",path:"/menu/17-11-0-shrimps-with-vegetables"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-congry-or-moros.json",path:"/menu/17-11-0-congry-or-moros"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-cuban-meat-stew-la-caldosa-la-caldosa.json",path:"/menu/17-11-0-cuban-meat-stew-la-caldosa-la-caldosa"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-fried-pineapples.json",path:"/menu/17-11-0-fried-pineapples"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-ham-la-cuba.json",path:"/menu/17-11-0-ham-la-cuba"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-burger.json",path:"/menu/17-11-0-burger"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-pork-ribs.json",path:"/menu/17-11-0-pork-ribs"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-pumpkin-soup.json",path:"/menu/17-11-0-pumpkin-soup"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-shrimp.json",path:"/menu/17-11-0-shrimp"},{componentChunkName:"component---src-templates-menu-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"menu-17-11-0-burito.json",path:"/menu/17-11-0-burito"},{componentChunkName:"component---src-templates-gallery-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"gallery.json",path:"/gallery"},{componentChunkName:"component---src-templates-gallery-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"gallery-17-11-0-christmas-2016.json",path:"/gallery/17-11-0-christmas-2016"},{componentChunkName:"component---src-templates-gallery-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"gallery-17-11-0-new-year-2016.json",path:"/gallery/17-11-0-new-year-2016"},{componentChunkName:"component---src-templates-gallery-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"gallery-17-11-0-halloween.json",path:"/gallery/17-11-0-halloween"},{componentChunkName:"component---src-templates-gallery-single-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"gallery-17-11-0-dia-de-la-independencia.json",path:"/gallery/17-11-0-dia-de-la-independencia"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-contacts-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contacts.json",path:"/contacts/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},297:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],u=[],r=function(){var n=e();n&&(u.push(n),o(n))},a=function(n){switch(n.type){case"RESOURCE_FINISHED":u=u.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===u.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(n){a({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:u}},empty:function(){t=[],u=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},r=o(109),a=o(1),s=t(a),i=o(52),c=t(i),l=o(75),p=o(534),d=o(438),m=t(d),f=o(295),h=t(f),g=o(77),y=t(g),j=o(576),x=t(j),v=o(577),b=t(v),C=o(293),N=t(C),k=o(292),R=t(k),w=o(171),_=t(w);o(428),window.___emitter=y.default,_.default.addPagesArray(x.default),_.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=_.default,window.matchPath=l.matchPath;var P=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=P[n];return null!=e&&(h.default.replace(e.toPath),!0)};E(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){E(n.pathname)||(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var o=e.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var u=n.location.pathname;if(u===o)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&o(298);var t=function(n){function e(o){o.page.path===_.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(t),window.___history.push(n))}var o=P[n];if(o&&(n=o.toPath),window.location.pathname!==n){var t=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);_.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,r.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=(0,r.apiRunner)("replaceRouterComponent",{history:h.default})[0],d=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},f=(0,l.withRouter)(N.default);_.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,a.createElement)(i?i:d,null,(0,a.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,a.createElement)(f,{layout:!0,children:function(e){return(0,a.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return _.default.getPage(t.location.pathname)?(0,a.createElement)(N.default,u({page:!0},t)):(0,a.createElement)(N.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,m.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},577:function(n,e){n.exports=[]},298:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(77),r=t(u),a="/";a="/cuba-site/","serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},299:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(1),r=t(u),a=o(75),s=o(273),i=o(334),c=t(i);
e.replaceRouterComponent=function(n){var e=n.history,o=(0,c.default)(),t=function(n){var t=n.children;return r.default.createElement(s.Provider,{store:o},r.default.createElement(a.Router,{history:e},t))};return t}},438:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,u="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return r||o.addEventListener(u,n=function(){for(o.removeEventListener(u,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},2:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),u=o.e,r=o.s;o.e=function(t,a){var s=!1,i=!0,c=function(n){a&&(a(o,n),a=null)};return!r&&e&&e[t]?void c(!0):(u(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,r?r[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},703:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).map(function(n){n(o)}),(n["*"]||[]).map(function(n){n(e,o)})}}}n.exports=o},70:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function u(n){if(l===setTimeout)return setTimeout(n,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function r(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function a(){h&&m&&(h=!1,m.length?f=m.concat(f):g=-1,f.length&&s())}function s(){if(!h){var n=u(a);h=!0;for(var e=f.length;e;){for(m=f,f=[];++g<e;)m&&m[g].run();g=-1,e=f.length}m=null,h=!1,r(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,d=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(n){l=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var m,f=[],h=!1,g=-1;d.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];f.push(new i(n,e)),1!==f.length||h||u(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(n){return[]},d.binding=function(n){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(n){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},853:function(n,e){"use strict";function o(n){return function(e){var o=e.dispatch,t=e.getState;return function(e){return function(u){return"function"==typeof u?u(o,t,n):e(u)}}}}e.__esModule=!0;var t=o();t.withExtraArgument=o,e.default=t},482:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(329)})})}},483:function(n,e,o){o(2),n.exports=function(n){return o.e(0x79735a9ecbef,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(330)})})}},331:function(n,e,o){"use strict";e.__esModule=!0;var t=o(332);Object.defineProperty(e,"locale",{enumerable:!0,get:function(){return t.locale}});var u=o(333);Object.defineProperty(e,"locales",{enumerable:!0,get:function(){return u.locales}})},332:function(n,e){"use strict";function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){case"locale/SWITCH_LOCALE":return e.locale;default:return n}}e.__esModule=!0,e.locale=o},333:function(n,e){"use strict";function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){default:return n}}e.__esModule=!0,e.locales=o},334:function(n,e,o){"use strict";function t(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e.default=n,e}function u(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.initState=void 0;var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},a=o(169),s=o(853),i=u(s),c=o(331),l=t(c),p=(e.initState={locale:"ru"},(0,a.combineReducers)(r({},l))),d={locale:"ru",locales:["ru","en"]},m=function(){return(0,a.createStore)(p,d,(0,a.applyMiddleware)(i.default))};e.default=m},484:function(n,e,o){o(2),n.exports=function(n){return o.e(63560627574878,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(338)})})}},485:function(n,e,o){o(2),n.exports=function(n){return o.e(0x767162c0de90,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(339)})})}},486:function(n,e,o){o(2),n.exports=function(n){return o.e(0x6076cb9b4688,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(343)})})}},487:function(n,e,o){o(2),n.exports=function(n){return o.e(0x83d78e190f51,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(344)})})}},488:function(n,e,o){o(2),n.exports=function(n){return o.e(0x5eadfb0a5d2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(345)})})}},489:function(n,e,o){o(2),n.exports=function(n){return o.e(26316382052729,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(349)})})}},490:function(n,e,o){o(2),n.exports=function(n){return o.e(0xd85884efae66,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(350)})})}}});
//# sourceMappingURL=app-495eb38c4daa4520998b.js.map