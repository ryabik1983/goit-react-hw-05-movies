"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[699],{5631:function(e,t,n){n.d(t,{BC:function(){return g},k4:function(){return p},Qf:function(){return m},mU:function(){return h},S:function(){return f},Hu:function(){return _}});var a=n(5861),c=n(7757),i=n.n(c),r="api_key=9b0c2f9965f33f91e75ff619d689bb58",o=null,s=null;function u(e){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return o=null,s=null,u("https://api.themoviedb.org/3/trending/movie/week?".concat(r,"&page=").concat(e))}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o=e,s=t,u("https://api.themoviedb.org/3/search/movie?".concat(r,"&language=en-US&page=1&include_adult=true&query=").concat(e,"&page=").concat(t))}function m(){return{paramsQ:o,paramsP:s}}function h(e){return u("https://api.themoviedb.org/3/movie/".concat(e,"?").concat(r,"&language=en-US"))}function f(e){return u("https://api.themoviedb.org/3/movie/".concat(e,"/credits?").concat(r,"&language=en-US"))}function _(e){return u("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?").concat(r,"&language=en-US"))}},3699:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(885),c=n(5631),i={list:"MoviesPage_list__K2QNJ",item:"MoviesPage_item__bd7st",title:"MoviesPage_title__bUXXw",link:"MoviesPage_link__TOWOj",img:"MoviesPage_img__36DKc",form:"MoviesPage_form__KoXhV",input:"MoviesPage_input__WgEB1",searchBtn:"MoviesPage_searchBtn__wgR3S",GoBackBtn:"MoviesPage_GoBackBtn__F934p"},r=n(3504),o=n(6871),s=n(2791),u=n(6445),l=n(2977),g=n(5660),p=n(184);function m(){var e=(0,s.useState)(null),t=(0,a.Z)(e,2),n=t[0],m=t[1],h=(0,s.useState)(null),f=(0,a.Z)(h,2),_=f[0],v=f[1],d=(0,s.useState)(1),b=(0,a.Z)(d,2),w=b[0],x=b[1],j=(0,s.useState)(null),k=(0,a.Z)(j,2),S=k[0],P=k[1],N=(0,o.TH)(),y=(0,o.s0)(),B=new URLSearchParams(N.search).get("query"),M=new URLSearchParams(N.search).get("page");return(0,s.useEffect)((function(){B&&c.k4(B,M).then((function(e){v(e),x(e.page),P(e.total_pages)}))}),[B,M,n]),(0,p.jsxs)("div",{className:i.page,children:[(0,p.jsxs)("form",{className:i.form,onSubmit:function(e){!function(e){e.preventDefault(),n&&y("/movies/?query=".concat(n,"&page=",1))}(e)},children:[(0,p.jsx)("button",{className:i.GoBackBtn,type:"button",onClick:function(e){y("/")},children:"go back"}),(0,p.jsx)("input",{placeholder:B||"Please, enter your query",className:i.input,onChange:function(e){!function(e){m(e.target.value.trim())}(e)}}),(0,p.jsx)("button",{className:i.searchBtn,type:"submit",children:"Search"})]}),_&&(0,p.jsx)("ul",{className:i.list,children:_.results.map((function(e){return(0,p.jsx)("li",{className:i.item,children:(0,p.jsxs)(r.OL,{className:i.link,to:"/movies/".concat(e.id),children:[e.poster_path?(0,p.jsx)("img",{className:i.img,src:"https://www.themoviedb.org/t/p/w500".concat(e.poster_path),alt:e.id}):(0,p.jsx)("img",{className:i.img,src:"/noSignal.jpg",alt:e.id}),(0,p.jsx)("p",{className:i.title,children:e.title})]})},e.id)}))}),S&&(0,p.jsx)(u.Z,{maxWidth:"md",children:(0,p.jsx)(l.Z,{spacing:2,children:!!S&&(0,p.jsx)(g.Z,{count:S,page:w,onChange:function(e,t){y("/movies/?query=".concat(B,"&page=").concat(t)),window.scrollTo({top:80,behavior:"smooth"})},sx:{marginY:3,marginX:"auto"}})})})]})}}}]);
//# sourceMappingURL=699.f65808e7.chunk.js.map