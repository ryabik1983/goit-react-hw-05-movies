"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[667],{9667:function(e,s,t){t.r(s),t.d(s,{default:function(){return c}});var i=t(885),a=t(2791),n=t(5631),l={list:"Reviews_list__wcdPO",item:"Reviews_item__ISZRT",user:"Reviews_user__LVMRO",img:"Reviews_img__+lVy+"},r=t(184);function c(e){var s=e.id,t=(0,a.useState)(null),c=(0,i.Z)(t,2),u=c[0],h=c[1];return(0,a.useEffect)((function(){n.Hu(s).then((function(e){return h(e.results)}))}),[s]),null!==u&&u.length>0?(0,r.jsx)("ul",{className:l.list,children:u.map((function(e){var s=e.author_details.avatar_path;return(0,r.jsxs)("li",{className:l.item,children:[(0,r.jsxs)("div",{className:l.user,children:[s&&s.includes("http")?(0,r.jsx)("img",{className:l.img,src:s.slice(1,s.length),alt:e.author,width:50}):(0,r.jsx)("img",{className:l.img,src:"/noPhoto.jpg",alt:e.author,width:50}),(0,r.jsx)("h3",{className:l.title,children:e.author})]}),(0,r.jsx)("p",{className:l.description,children:e.content})]},e.id)}))}):(0,r.jsx)("h2",{children:"We don't have any reviews for this movie :("})}}}]);
//# sourceMappingURL=667.7bd40988.chunk.js.map