"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[388],{9388:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(5861),a=r(9439),s=r(7757),i=r.n(s),c=r(2791),o=r(7689),u=r(1087),l=r(6767),v="Button_button__wiIYs",p=r(184),d=function(e){var t=e.text;return(0,p.jsx)("button",{className:v,type:"button",children:t})},f=r(4455),h={moveDetailsContainer:"MovieDetailsPage_moveDetailsContainer__aSJOG",image:"MovieDetailsPage_image__rM8CA",movieDetailsWrap:"MovieDetailsPage_movieDetailsWrap__3dhOs",movieTitle:"MovieDetailsPage_movieTitle__empjt",additionalInfo:"MovieDetailsPage_additionalInfo__rpx7d"},m=function(){var e,t,r=(0,o.UO)().movieId,s=(0,c.useState)(),v=(0,a.Z)(s,2),m=v[0],x=v[1],_=null!==(e=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,c.useEffect)((function(){(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Y5)(r);case 3:t=e.sent,x(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[r]),m?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.rU,{to:_,children:(0,p.jsx)(d,{text:"Go back"})}),(0,p.jsxs)("div",{className:h.movieDetailsContainer,children:[(0,p.jsx)("img",{className:h.image,src:m.poster_path?"https://image.tmdb.org/t/p/w500".concat(m.poster_path):"https://fakeimg.pl/600x400?text=No+Image+Available",alt:m.title}),(0,p.jsxs)("div",{className:h.movieDetailsWrap,children:[(0,p.jsx)("h1",{className:h.movieTitle,children:m.title}),(0,p.jsxs)("h4",{className:h.userScore,children:["User score: ",Math.round(10*m.vote_average),"%"]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:m.overview}),(0,p.jsx)("h2",{children:"Genres"}),(0,p.jsx)("p",{children:m.genres.map((function(e){return(0,p.jsx)("span",{children:e.name},e.id)}))})]})]}),(0,p.jsx)("hr",{}),(0,p.jsx)("h3",{className:h.additionalInfo,children:" Additional information"}),(0,p.jsx)(u.rU,{to:"cast",children:(0,p.jsx)(d,{text:"Cast"})}),(0,p.jsx)(u.rU,{to:"reviews",children:(0,p.jsx)(d,{text:"Reviews"})}),(0,p.jsx)("hr",{}),(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)(f.a,{}),children:(0,p.jsx)(o.j3,{})})]}):(0,p.jsx)(f.a,{})}},6767:function(e,t,r){r.d(t,{Hx:function(){return v},Y5:function(){return u},mv:function(){return o},uV:function(){return l},wr:function(){return c}});var n=r(5861),a=r(7757),s=r.n(a),i=r(3016);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"b3c924fdd5f692c25a77af55ab3c1b33"};var c=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.resutls);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=388.17f3dfa3.chunk.js.map