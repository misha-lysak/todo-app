(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),l=a.n(o),r=(a(14),a(15),a(16),a(2)),s=a(1),u=function(e){var t=e.setFilter,a=e.filter,n=function(e){return t(e)};return c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:"all"===a?"selected":"",onClick:function(){return n("all")}},"All")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/active",className:"active"===a?"selected":"",onClick:function(){return n("active")}},"Active")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/completed",className:"completed"===a?"selected":"",onClick:function(){return n("completed")}},"Completed")))},i=a(7),d=a.n(i),m=function(e){var t=e.todo,a=e.todos,o=e.setTodos,l=e.handleRemove,u=Object(n.useState)(!1),i=Object(s.a)(u,2),m=i[0],f=i[1],p=Object(n.useState)(t.title),b=Object(s.a)(p,2),E=b[0],v=b[1],O=Object(n.useState)(E),j=Object(s.a)(O,2),g=j[0],h=j[1],k=Object(n.useCallback)((function(e){var t=a.map((function(t){return Object(r.a)(Object(r.a)({},t),t.id===e?{completed:!t.completed}:{})}));o(t)}),[a]),N=Object(n.useCallback)((function(e){if("Esc"===e.key)return f(!1),void h(E);"Enter"===e.key&&g&&(v(g),f(!1))}),[E,g]),C=Object(n.useCallback)((function(e){var t=e.target,a=e.currentTarget;g&&a===t&&(v(g),f(!1))}),[g]);return c.a.createElement("li",{className:d()(t.completed?"completed":"",m?"editing":"")},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){return k(t.id)}}),c.a.createElement("label",{onDoubleClick:function(){return t.id,void f((function(e){return!e}))}},E),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return l(t.id)}})),c.a.createElement("input",{type:"text",className:"edit",value:g,onChange:function(e){h(e.target.value)},onKeyPress:N,onBlur:C}))},f=function(e){var t=e.todos,a=e.setTodos,n=e.filterTodos,o=e.setFilterTodos,l=function(e){a(t.filter((function(t){return t.id!==e})))};return c.a.createElement("ul",{className:"todo-list"},n.map((function(e){return c.a.createElement(m,{key:e.id,todo:e,todos:t,setTodos:a,filterTodos:n,handleRemove:l,setFilterTodos:o})})))};f.defaultProps={todos:[],filterTodos:[]};var p=a(8),b=function(e){var t=e.setTodos,a=e.todos,o=Object(n.useState)(""),l=Object(s.a)(o,2),r=l[0],u=l[1],i=Object(n.useCallback)((function(e){e.preventDefault(),r&&(t([].concat(Object(p.a)(a),[{title:r,completed:!1,id:+new Date}])),u(""))}),[r]);return c.a.createElement("form",{onSubmit:i},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:r,onChange:function(e){return u(e.target.value)}}))};b.defaultProps={todos:[]};var E=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!0),i=Object(s.a)(l,2),d=i[0],m=i[1],p=Object(n.useState)("all"),E=Object(s.a)(p,2),v=E[0],O=E[1],j=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),c=Object(s.a)(a,2),o=c[0],l=c[1];return[o,function(t){try{var a=t instanceof Function?t(o):t;l(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("todos",a),g=Object(s.a)(j,2),h=g[0],k=g[1],N=Object(n.useCallback)((function(e){switch(e){case"active":k(a.filter((function(e){return!e.completed})));break;case"completed":k(a.filter((function(e){return e.completed})));break;case"all":default:k(a)}}),[a]);return Object(n.useEffect)((function(){N(v)}),[a,v]),c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement(b,{setTodos:o,todos:a})),a.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(){m((function(e){return!e}));var e=a.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:d})}));o(e)}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement(f,{todos:a,setTodos:o,filterTodos:h,setFilterTodos:k})),c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},"".concat(a.filter((function(e){return!e.completed})).length," items left")),c.a.createElement(u,{todos:a,setFilter:O,filter:v}),c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){o((function(e){return e.filter((function(e){return!e.completed}))})),m(!0)}},"Clear completed"))))};l.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.28db5829.chunk.js.map