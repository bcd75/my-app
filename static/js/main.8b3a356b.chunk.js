(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,n){},16:function(e,a,n){},17:function(e,a,n){},18:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(6),m=n.n(r),c=(n(15),n(4)),i=n(2);n(16);var u=e=>{let{onLoginSuccess:a}=e;const[n,r]=Object(t.useState)(""),[m,c]=Object(t.useState)(""),[u,g]=Object(t.useState)(""),o=Object(i.p)();return l.a.createElement("div",{className:"login-container"},l.a.createElement("h2",null,"Welcome"),u&&l.a.createElement("p",{className:"error"},u),l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),"user"===n&&"p@ssword"===m?(a(),g(""),o("/dashboard")):g("Invalid username or password")}},l.a.createElement("div",null,l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",value:n,onChange:e=>r(e.target.value),required:!0})),l.a.createElement("div",null,l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",value:m,onChange:e=>c(e.target.value),required:!0})),l.a.createElement("button",{type:"submit"},"Login")))};n(17);const g=[{id:1,name:"Alice",age:25,gender:"Female"},{id:2,name:"Bob",age:30,gender:"Male"},{id:3,name:"Charlie",age:35,gender:"Male"},{id:4,name:"Daisy",age:24,gender:"Female"},{id:5,name:"Eve",age:28,gender:"Female"},{id:6,name:"Frank",age:32,gender:"Male"},{id:7,name:"Grace",age:29,gender:"Female"},{id:8,name:"Hank",age:38,gender:"Male"},{id:9,name:"Ivy",age:26,gender:"Female"},{id:10,name:"Jack",age:33,gender:"Male"},{id:11,name:"Karen",age:27,gender:"Female"},{id:12,name:"Leo",age:40,gender:"Male"},{id:13,name:"Mia",age:22,gender:"Female"},{id:14,name:"Nick",age:31,gender:"Male"},{id:15,name:"Olivia",age:35,gender:"Female"},{id:16,name:"Paul",age:28,gender:"Male"},{id:17,name:"Quinn",age:23,gender:"Female"},{id:18,name:"Ralph",age:36,gender:"Male"},{id:19,name:"Sophia",age:21,gender:"Female"},{id:20,name:"Tom",age:34,gender:"Male"}];var o=()=>{const[e,a]=Object(t.useState)(""),[n,r]=Object(t.useState)(18),[m,c]=Object(t.useState)(45),[i,u]=Object(t.useState)(""),o=g.filter(a=>{const t=a.name.toLowerCase().includes(e.toLowerCase()),l=a.age>=n&&a.age<=m,r=!i||a.gender.toLowerCase()===i.toLowerCase();return t&&l&&r});return l.a.createElement("div",{className:"user-list-container"},l.a.createElement("h1",null,"Dashboard"),l.a.createElement("div",{className:"filter-container"},l.a.createElement("input",{type:"text",className:"input-box",placeholder:"Search by name",value:e,onChange:e=>a(e.target.value)}),l.a.createElement("div",{className:"age-range-container"},l.a.createElement("div",{className:"age-range"},l.a.createElement("label",null,"Min Age:"),l.a.createElement("input",{type:"number",className:"age-input",min:18,max:45,value:n,onChange:e=>r(Number(e.target.value))})),l.a.createElement("div",{className:"age-range"},l.a.createElement("label",null,"Max Age:"),l.a.createElement("input",{type:"number",className:"age-input",min:18,max:45,value:m,onChange:e=>c(Number(e.target.value))}))),l.a.createElement("div",{className:"gender-filter"},l.a.createElement("label",null,"Gender:"),l.a.createElement("select",{className:"dropdown",value:i,onChange:e=>u(e.target.value)},l.a.createElement("option",{value:""},"All Genders"),l.a.createElement("option",{value:"Male"},"Male"),l.a.createElement("option",{value:"Female"},"Female")))),l.a.createElement("ul",{className:"user-list"},o.length>0?o.map(e=>l.a.createElement("li",{key:e.id,className:"user-item"},e.name," - Age: ",e.age," - Gender: ",e.gender)):l.a.createElement("li",null,"No users found")))};var s=function(){const[e,a]=Object(t.useState)(!1);return l.a.createElement(c.a,null,l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/Login",element:l.a.createElement(u,{onLoginSuccess:()=>{a(!0)}})}),l.a.createElement(i.b,{path:"/Dashboard",element:e?l.a.createElement(o,null):l.a.createElement(i.a,{to:"/Login"})}),l.a.createElement(i.b,{path:"/",element:l.a.createElement(i.a,{to:e?"/Dashboard":"/Login"})})))};var d=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then(a=>{let{getCLS:n,getFID:t,getFCP:l,getLCP:r,getTTFB:m}=a;n(e),t(e),l(e),r(e),m(e)})};m.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null))),d()},7:function(e,a,n){e.exports=n(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.8b3a356b.chunk.js.map