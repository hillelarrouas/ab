(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c,s,a=n(1),i=n.n(a),l=n(16),r=n.n(l),o=(n(22),n(23),n(6)),j=(n(24),n(0));var b,d=function(e){var t=e.text,n=Object(a.useState)(),i=Object(o.a)(n,2),l=i[0],r=i[1],b=Object(a.useState)(!1),d=Object(o.a)(b,2),u=d[0],h=d[1],x=Object(a.useState)(),m=Object(o.a)(x,2),O=m[0],v=m[1],f=Object(a.useState)({}),p=Object(o.a)(f,2),g=p[0],N=p[1],y=Object(a.useState)("black"),T=Object(o.a)(y,2),S=T[0],k=T[1];return Object(a.useEffect)((function(){var e=(new Date).getHours();e>=6&&e<12?s="\u05d1\u05d5\u05e7\u05e8":e>=12&&e<18?s="\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd":e>=18&&e<23?s="\u05e2\u05e8\u05d1":(e>=23||e>=0&&e<6)&&(s="\u05dc\u05d9\u05dc\u05d4"),console.log("use effect 1 start "+u),fetch("/getdata",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({day:s})}).then((function(e){return e.json()})).then((function(e){N(e.deta[0]),v(Number(e.deta[0].timeLength)-1+.99166666666667),r(e.deta[0].timeLength+":00")}))}),[]),Object(a.useEffect)((function(){var e=60*O;if(console.log("use effect 2 start "+u),!0===u){console.info("use effect 2 is on");var t,n,s=e;c=setInterval((function(){t=parseInt(s/60,10),n=parseInt(s%60,10),r((t=t<10?"0"+t:t)+":"+(n=n<10?"0"+n:n)),--s<0&&clearInterval(c),Math.trunc(s)>100&&Math.trunc(s)<359?k("red"):k("black"),Math.trunc(s)>0&&Math.trunc(s)<30?k("red"):k("black")}),1e3)}else console.info("use effect 2 is off"),clearInterval(c)}),[u]),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("button",{onClick:function(){if(console.log("the status now is "+u),!0===u){console.log("turning off");var e=Number(g.Tables)+1;console.log(e),fetch("/oupdetRounds",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({r:e,day:s})}).then((function(e){return e.json()})).then((function(e){N(e.deta[0]),clearInterval(c)})).finally((function(){h(!1)}))}else console.log("turning on"),console.error(g.timeLength),console.error(g.timeLength+":00"),r(g.timeLength+":00"),k("black"),h(!0)},className:"retern",children:u?"\u05d4\u05e4\u05e1\u05e7":"\u05d4\u05e4\u05e2\u05dc"}),Object(j.jsx)("div",{className:"texttable",children:t}),Object(j.jsx)("div",{className:"texttime",style:{color:S},children:l})]})};n(26);var u=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=(new Date).getHours();e>=6&&e<12?b="\u05d1\u05d5\u05e7\u05e8":e>=12&&e<18?b="\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd":e>=18&&e<23?b="\u05e2\u05e8\u05d1":(e>=23||e>=0&&e<6)&&(b="\u05dc\u05d9\u05dc\u05d4"),fetch("/getdata",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({day:b})}).then((function(e){return e.json()})).then((function(e){c(e.deta[0])}))}),[]),Object(j.jsxs)("div",{className:"cardtext",children:[Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("div",{className:"titeltext",children:"\u05d0\u05e4\u05d9\u05d4"}),Object(j.jsx)("div",{className:"textbox",children:n.baking})]}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("div",{className:"titeltext",children:"\u05db\u05e9\u05e8\u05d5\u05ea"}),Object(j.jsx)("div",{className:"textbox",children:n.cosher})]}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsxs)("div",{className:"titeltext",children:["\u05de\u05e9\u05de\u05e8\u05ea ",b]}),Object(j.jsxs)("div",{className:"textbox",style:{direction:"rtl"},children:[n.Tables," \u05e9\u05d5\u05dc\u05d7\u05e0\u05d5\u05ea"]})]}),Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("div",{className:"titeltext",children:'\u05e1\u05d4"\u05db \u05e9\u05d5\u05dc\u05d7\u05e0\u05d5\u05ea'}),Object(j.jsx)("div",{className:"textbox",children:n.Roundsonthetable})]})]})};n(27);var h=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),i=Object(o.a)(s,2),l=i[0],r=i[1],b=Object(a.useState)(""),d=Object(o.a)(b,2),u=d[0],h=d[1];function x(e){r("auto");var t=e.target.value;h(t),fetch("/gettyperadio",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({Type:t})}).then((function(e){return e.json()})).then((function(e){document.querySelector("#timeLength").value=e.deta[0].timeLength,document.querySelector("#cosher").value=e.deta[0].cosher,document.querySelector("#Tables").value=e.deta[0].Tables,document.querySelector("#baking").value=e.deta[0].baking}))}return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"cardinput",children:[Object(j.jsx)("div",{className:"titelcardinput",children:"\u05e0\u05d9\u05d4\u05d5\u05dc \u05d8\u05d9\u05d9\u05de\u05e8"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector("#timeLength").value,n=document.querySelector("#cosher").value,s=document.querySelector("#Tables").value,a=document.querySelector("#baking").value;""===u?c("\u05d4\u05d6\u05df \u05e1\u05d5\u05d2 \u05de\u05e9\u05de\u05e8\u05ea \u05dc\u05e9\u05d9\u05e0\u05d5\u05d9\u05d9\u05dd"):t<1||t>18?c("\u05d4\u05d6\u05df \u05d1\u05d0\u05d5\u05e8\u05da \u05d4\u05d8\u05d9\u05d9\u05de\u05e8 \u05dc\u05e4\u05d7\u05d5\u05ea \u05d1\u05d9\u05df 1 \u05dc 18"):0===n.length?c("\u05d4\u05d6\u05df \u05db\u05e9\u05e8\u05d5\u05ea \u05dc\u05de\u05e9\u05de\u05e8\u05ea"):0===s.length?c("\u05d4\u05d6\u05df \u05db\u05de\u05d5\u05ea \u05e1\u05d9\u05d1\u05d5\u05d1\u05d9\u05dd \u05dc\u05de\u05e9\u05de\u05e8\u05ea"):0===a.length?c("\u05d4\u05d6\u05df \u05e1\u05d5\u05d2 \u05d0\u05e4\u05d9\u05d4 \u05dc\u05de\u05e9\u05de\u05e8\u05ea"):fetch("/savetime",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({timeLength:t,cosher:n,Tables:s,baking:a,radio:u})}).then((function(e){return e.json()})).then((function(e){console.log(e),c("\u05d4\u05e9\u05d9\u05e0\u05d5\u05d9\u05d9\u05dd \u05dc\u05de\u05e9\u05de\u05e8\u05ea ".concat(u," \u05e0\u05e9\u05de\u05e8\u05d5 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4")),setTimeout((function(){c("")}),3e3)}))},children:[Object(j.jsxs)("label",{htmlFor:"Morning",className:"lebelinputRadio",children:["\u05d1\u05d5\u05e7\u05e8",Object(j.jsx)("input",{type:"radio",id:"Morning",name:"Type",value:"\u05d1\u05d5\u05e7\u05e8",onChange:x})]}),Object(j.jsxs)("label",{className:"lebelinputRadio",htmlFor:"noon",children:["\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",Object(j.jsx)("input",{type:"radio",id:"noon",name:"Type",value:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",onChange:x})]}),Object(j.jsxs)("label",{className:"lebelinputRadio",htmlFor:"evening",children:["\u05e2\u05e8\u05d1",Object(j.jsx)("input",{type:"radio",id:"evening",name:"Type",value:"\u05e2\u05e8\u05d1",onChange:x})]}),Object(j.jsxs)("label",{className:"lebelinputRadio",htmlFor:"night",children:["\u05dc\u05d9\u05dc\u05d4",Object(j.jsx)("input",{type:"radio",id:"night",name:"Type",value:"\u05dc\u05d9\u05dc\u05d4",onChange:x})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"hoverflwh",style:{height:l},children:[Object(j.jsxs)("div",{className:"rtl",children:[Object(j.jsx)("label",{className:"lebelinputText",htmlFor:"timeLength",children:"\u05d0\u05d5\u05e8\u05da \u05d4\u05d8\u05d9\u05d9\u05de\u05e8  "}),Object(j.jsx)("input",{type:"number",name:"timeLength",id:"timeLength",placeholder:"\u05d4\u05d6\u05df \u05d1\u05d9\u05df 1 - 18",min:"1",max:"18"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{className:"lebelinputText",htmlFor:"cosher",children:"\u05db\u05e9\u05e8\u05d5\u05ea"}),Object(j.jsx)("input",{type:"text",name:"cosher",id:"cosher"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{className:"lebelinputText",htmlFor:"Tables",children:"\u05de\u05e1 \u05e9\u05d5\u05dc\u05d7\u05e0\u05d5\u05ea  "}),Object(j.jsx)("input",{type:"number",name:"Tables",id:"Tables"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{className:"lebelinputText",htmlFor:"baking",children:"\u05e1\u05d5\u05d2 \u05d0\u05e4\u05d9\u05d4"}),Object(j.jsx)("input",{type:"text",name:"baking",id:"baking"}),Object(j.jsx)("br",{})]}),Object(j.jsx)("div",{className:"error",children:n}),Object(j.jsx)("button",{className:"butoonsubmit",type:"submit",children:"\u05e9\u05de\u05d5\u05e8 \u05e9\u05d9\u05e0\u05d5\u05d9\u05d9\u05dd"})]})]})]})})},x=n(10),m=n(2),O=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"cardnav-link",children:Object(j.jsx)(x.b,{className:"nav-link",to:"/Management",children:Object(j.jsx)("div",{className:"nav-linkdiv",children:"\u05e0\u05d9\u05d4\u05d5\u05dc \u05d8\u05d9\u05d9\u05de\u05e8"})})}),Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(d,{text:"\u05e9\u05d5\u05dc\u05d7\u05df \u05e9\u05de\u05d0\u05dc"}),Object(j.jsx)(d,{text:"\u05e9\u05d5\u05dc\u05d7\u05df \u05d9\u05de\u05d9\u05df"})]}),Object(j.jsx)(u,{})]})};function v(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"cardnav-link",children:Object(j.jsx)(x.b,{className:"nav-link",to:"/",children:Object(j.jsx)("div",{className:"nav-linkdiv",children:"\u05d8\u05d9\u05d9\u05de\u05e8"})})}),Object(j.jsx)(h,{})]})}var f=function(){return Object(j.jsx)(x.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"cardto",children:Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{path:"/Management",children:Object(j.jsx)(v,{})}),Object(j.jsx)(m.a,{exact:!0,path:"/",children:Object(j.jsx)(O,{})}),Object(j.jsxs)(m.a,{children:[Object(j.jsx)("h1",{style:{textAlign:"center"},children:"404"}),Object(j.jsx)(x.b,{className:"nav-link",to:"/",children:Object(j.jsx)("div",{className:"nav-linkdiv",children:"\u05d7\u05d6\u05e8\u05d4 \u05dc\u05d3\u05e3 \u05d4\u05d1\u05d9\u05ea"})})]})]})})})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.d10124fc.chunk.js.map