webpackJsonp([0x6076cb9b4688],{57:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),r=a(n),o=l(11),i=a(o),s=l(67),u=a(s),c=function(e){var t=e.items,l=e.renderer;return r.default.createElement("ul",{className:u.default.list},t.map(function(e,t){return r.default.createElement("li",{key:""+e.id+t,className:(0,i.default)(u.default.item,{firstline:t<2})},l(e,t<2))}))};t.default=c,e.exports=t.default},67:function(e,t){e.exports={list:"src-components-PageGrid----style-module---list---2oYkk",item:"src-components-PageGrid----style-module---item---12WvF"}},342:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),r=a(n),o=l(9),i=a(o),s=l(11),u=(a(s),l(461)),c=a(u),f=l(58),d=a(f),m=function(e){var t=e.locale,l=(e.t,e[t]),a=void 0;return a=e.firstline?{default:{w:579},"(max-width:1023px)":{w:459},"(max-width:767px)":{w:679},"(max-width:479px)":{w:399}}:{default:{w:281},"(max-width:1023px)":{w:459},"(max-width:767px)":{w:679},"(max-width:479px)":{w:399}},r.default.createElement(i.default,{to:"/gallery/"+e.slug,className:c.default.tile},l.image[0].file&&r.default.createElement("div",{className:c.default.image_container},r.default.createElement(d.default,{className:c.default.image,sizes:a,file:l.image[0].file})),!l.image[0].file&&r.default.createElement("div",{className:c.default.image_placeholder}),r.default.createElement("div",{className:c.default.info},r.default.createElement("span",{className:c.default.title},l.title)))};t.default=m,e.exports=t.default},461:function(e,t){e.exports={tile:"src-templates-gallery-components-Tile----style-module---tile---1ivC9",info:"src-templates-gallery-components-Tile----style-module---info---LYmXD",image_container:"src-templates-gallery-components-Tile----style-module---image_container---3M9bt",image_placeholder:"src-templates-gallery-components-Tile----style-module---image_placeholder---32-O8",title:"src-templates-gallery-components-Tile----style-module---title---3fgI-",image:"src-templates-gallery-components-Tile----style-module---image---2lqwt"}},343:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},s=l(1),u=a(s),c=l(9),f=(a(c),l(11)),d=(a(f),l(34)),m=l(33),p=a(m),y=l(57),h=a(y),g=l(342),w=a(g),_=function(e){function t(){var l,a,o;n(this,t);for(var s=arguments.length,c=Array(s),f=0;f<s;f++)c[f]=arguments[f];return l=a=r(this,e.call.apply(e,[this].concat(c))),a.itemRenderer=function(e){return u.default.createElement(w.default,i({},e,{t:a.props.actions.translate,locale:a.props.locale}))},o=l,r(a,o)}return o(t,e),t.prototype.render=function(){var e=(this.props.actions.translate,this.props.locale,this.props.pathContext.data.items);return u.default.createElement(p.default,i({},this.state,this.props),u.default.createElement(h.default,{renderer:this.itemRenderer,items:e}))},t}(s.Component);t.default=(0,d.connectComponent)(_),e.exports=t.default}});
//# sourceMappingURL=component---src-templates-gallery-index-js-600c246446f1db772893.js.map