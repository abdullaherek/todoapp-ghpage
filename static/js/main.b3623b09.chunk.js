(this["webpackJsonptodoapp-ghpage"]=this["webpackJsonptodoapp-ghpage"]||[]).push([[0],{21:function(e,n,t){},22:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var o,c,r,i,a,s=t(0),u=t.n(s),l=t(12),d=t.n(l),b=(t(21),t(16)),j=t(10),g=t(6),p=(t(22),t(3)),f=t(2),O=f.b.input.attrs({type:"input"})(o||(o=Object(p.a)(["\n    border-color: ",";\n    outline:none;\n\n"])),(function(e){return e.value.length>5?"green":"red"})),h=f.b.span(c||(c=Object(p.a)(["\n    text-decoration: ","\n"])),(function(e){return e.isDone?"line-through":"none"})),v=f.b.button(r||(r=Object(p.a)(["\nbackground:palevioletred;\ncolor:white;\nfont-size: 1em;\nmargin: 1em;\npadding: 0.25em 1em;\nborder: 2px solid palevioletred;\nborder-radius: 3px;\n\n"]))),x=f.b.button(i||(i=Object(p.a)(["\nbackground:white\ncolor:palevioletred;\nfont-size: 1em;\nmargin: 1em;\npadding: 0.25em 1em;\nborder: 2px solid palevioletred;\nborder-radius: 3px;\n\n"]))),k=Object(f.a)(a||(a=Object(p.a)(["\n\n    *{\n            font-size:1rem;\n    }\n"]))),m=t(1);function y(e){var n=e.saveTodo,t=Object(s.useState)(""),o=Object(g.a)(t,2),c=o[0],r=o[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{value:c,onChange:function(e){r(e.target.value)}}),Object(m.jsx)(v,{onClick:function(){return n(c)},children:"Save"})]})}function C(e){var n=e.list,t=void 0===n?[]:n,o=e.toggleTodoCheck,c=e.deleteTodo;return t.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"checkbox",style:{marginRight:"15px"},defaultChecked:e.isDone,onClick:function(n){return o({isDone:n.target.checked,key:e.key})}}),Object(m.jsx)(h,{isDone:e.isDone,children:e.title}),Object(m.jsx)(x,{onClick:function(){return c(e.key)},children:"Delete"}),Object(m.jsx)("hr",{})]})}))}var D=t(30);var T=function(){var e=Object(s.useState)([]),n=Object(g.a)(e,2),t=n[0],o=n[1];return Object(s.useEffect)((function(){t.length>0&&localStorage.setItem("todo",JSON.stringify(t))}),[t]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(k,{}),Object(m.jsx)(y,{saveTodo:function(e){var n=e.trim();if(n){var c={key:Object(D.a)(),title:n,isDone:!1};o([].concat(Object(b.a)(t),[c])),console.log(t)}else alert("Bo\u015f b\u0131rakmay\u0131n\u0131z!")}}),Object(m.jsx)(C,{list:t,toggleTodoCheck:function(e){var n=e.isDone,c=e.key,r=t.map((function(e){return e.key===c?Object(j.a)(Object(j.a)({},e),{},{isDone:n}):e}));o(r)},deleteTodo:function(e){var n=t.filter((function(n){return n.key!==e}));o(n)}})]})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),o(e),c(e),r(e),i(e)}))};d.a.render(Object(m.jsx)(u.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root")),S()}},[[28,1,2]]]);
//# sourceMappingURL=main.b3623b09.chunk.js.map