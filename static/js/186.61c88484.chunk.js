"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,r,t){t.r(r);var n=t(439),a=t(791),u=t(689),c=t(311),s=t(184);r.default=function(){var e=(0,a.useState)([]),r=(0,n.Z)(e,2),t=r[0],i=r[1],p=(0,u.UO)().movieId;return(0,a.useEffect)((function(){p&&(0,c.tx)(p).then((function(e){return i(e)}))}),[p]),t.length>0?(0,s.jsx)("ul",{children:t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("span",{children:["Author: ",t]}),(0,s.jsx)("p",{children:n})]},r)}))}):(0,s.jsx)("p",{children:"We don't have any reviews for this movie"})}},311:function(e,r,t){t.d(r,{Df:function(){return s},TP:function(){return p},tx:function(){return f},z1:function(){return i},zv:function(){return o}});var n=t(861),a=t(687),u=t.n(a),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"3f49b3b9ed9e869041581873eb04aafc"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/trending/movie/day");case 3:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/search/movie",{params:{language:"en-US",page:1,include_adult:!1,query:r}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/movie/".concat(r),{params:{language:"en-US"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("movie/".concat(r,"/credits"),{params:{language:"en-US"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("movie/".concat(r,"/reviews"),{params:{language:"en-US"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.61c88484.chunk.js.map