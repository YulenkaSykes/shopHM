(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{36:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(24),s=c.n(r),o=(c(36),c(7)),i=c(14),l=c(3),j=c(11),d=c(4),u=c(0),b=function(){var e,t=Object(a.useContext)(f),c=t.data,n=t.dispatch,r=Object(a.useState)({}),s=Object(o.a)(r,2),i=s[0],j=s[1];return Object(u.jsxs)("div",{className:"register_Login row",children:[Object(u.jsx)("span",{children:"Name"}),Object(u.jsx)("input",{className:"input_r_l",value:i.login,type:"text",onChange:function(e){return j(Object(l.a)(Object(l.a)({},i),{},{login:e.target.value}))}}),Object(u.jsx)("span",{children:"Password"}),Object(u.jsx)("input",{className:"input_r_l",value:i.password,type:"text",onChange:function(e){return j(Object(l.a)(Object(l.a)({},i),{},{password:e.target.value}))}}),Object(u.jsx)("button",{className:"button_r_l",onClick:function(){c.users.find((function(e){return e.login===i.login&&e.password===i.password}))?n({type:"login",payload:i}):alert("User is not find"),j({login:"",password:""})},children:"Click"}),(null===(e=c.user)||void 0===e?void 0:e.login)&&Object(u.jsx)(d.a,{to:"/product"})]})},p=function(){var e=Object(a.useContext)(f),t=(e.data,e.dispatch),c=Object(a.useState)({}),n=Object(o.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(!1),j=Object(o.a)(i,2),b=j[0],p=j[1];return Object(u.jsxs)("div",{className:"register_Login row",children:[Object(u.jsx)("span",{children:"Name"}),Object(u.jsx)("input",{className:"input_r_l",value:r.login,type:"text",onChange:function(e){return s(Object(l.a)(Object(l.a)({},r),{},{login:e.target.value}))}}),Object(u.jsx)("span",{children:"Password"}),Object(u.jsx)("input",{className:"input_r_l",value:r.password,type:"text",onChange:function(e){return s(Object(l.a)(Object(l.a)({},r),{},{password:e.target.value}))}}),Object(u.jsx)("button",{className:"button_r_l",onClick:function(){t({type:"add",payload:r}),s({login:"",password:""}),p(!0)},children:"Click"}),b&&Object(u.jsx)(d.a,{to:"/login"})]})},O=c(57),h=function(){var e,t,c=Object(a.useContext)(f),n=c.data,r=c.dispatch,s=Object(a.useState)([]),i=Object(o.a)(s,2),l=i[0],d=i[1],b=Object(a.useState)(0),p=Object(o.a)(b,2),h=p[0],x=p[1],g=function(e){fetch("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=asia2&lang=en&currentpage=".concat(e,"&pagesize=30&categories=men_all&concepts=H%26M%20MAN"),{method:"GET",headers:{"x-rapidapi-host":"apidojo-hm-hennes-mauritz-v1.p.rapidapi.com","x-rapidapi-key":"2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326"}}).then((function(e){return e.json()})).then((function(e){console.log(e.results),r({type:"product",payload:e.results})}))};return Object(a.useEffect)((function(){g(h);for(var e=[],t=0;t<15;t++)e.push(t);d([].concat(e))}),[]),Object(a.useEffect)((function(){r({type:"clearProduct"}),g(h)}),[h]),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"card-wrapper row",children:(null===(e=n.user)||void 0===e?void 0:e.login)?n.products.length>1?n.products.map((function(e){var t;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:e.images[0].url,alt:"good"}),Object(u.jsx)("h3",{children:e.name}),Object(u.jsxs)("div",{className:"price",children:[Object(u.jsxs)("span",{children:["Price: $ ",e.price.value]}),e.sale&&Object(u.jsx)("span",{className:"sale",children:"Sale"}),(null===(t=n.user.cart)||void 0===t?void 0:t.find((function(t){return t.code===e.code})))?Object(u.jsx)("span",{className:"icon",onClick:function(){return r({type:"delete_cart",payload:e})},children:Object(u.jsx)(O.a,{className:"icon_i",children:"remove_shopping_cart"})}):Object(u.jsx)("span",{className:"icon",onClick:function(){return r({type:"add_cart",payload:e})},children:Object(u.jsx)(O.a,{className:"icon_i",children:"add_shopping_cart"})}),Object(u.jsxs)("p",{children:["Category ",e.categoryName]}),Object(u.jsx)(j.b,{className:"more row",style:{color:"black"},to:"/productInfo/".concat(e.articles[0].code),children:"More"})]})]})})):Object(u.jsx)("h1",{className:"loader row",children:"Loading..."}):Object(u.jsxs)("h1",{className:"loader row",children:["Please \xa0",Object(u.jsx)(j.b,{style:{color:"black"},to:"/login",children:"login"}),"\xa0 to view the goods"]})}),(null===(t=n.user)||void 0===t?void 0:t.login)&&Object(u.jsxs)("div",{className:"pagination row",children:[Object(u.jsx)("span",{className:"row",onClick:function(){return x(h-1<0?l.length-1:h-1)},children:Object(u.jsx)(O.a,{children:"arrow_left"})}),l.map((function(e){return Object(u.jsx)("span",{className:"row ".concat(h===e&&"active"),style:{margin:"10px"},onClick:function(){return x(e)},children:e})})),Object(u.jsx)("span",{className:"row",onClick:function(){return x(h+1>14?0:h+1)},children:Object(u.jsx)(O.a,{children:"arrow_right"})})]})]})};function x(){var e,t,c=Object(a.useContext)(f),n=c.data,r=c.dispatch;return Object(u.jsx)("div",{className:"card-wrapper row",children:(null===(e=n.user)||void 0===e||null===(t=e.cart)||void 0===t?void 0:t.length)>0?n.user.cart.map((function(e){var t;return Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsx)("img",{src:e.images[0].url,alt:"product"}),Object(u.jsx)("h3",{children:e.name}),Object(u.jsxs)("span",{children:["Price: $",e.price.value]}),e.sale&&Object(u.jsx)("span",{className:"sale",children:"Sale"}),(null===(t=n.user.cart)||void 0===t?void 0:t.find((function(t){return t.code===e.code})))?Object(u.jsx)("span",{className:"icon",onClick:function(){return r({type:"delete_cart",payload:e})},children:Object(u.jsx)(O.a,{className:"icon_i",children:"remove_shopping_cart"})}):Object(u.jsx)("span",{className:"icon",onClick:function(){return r({type:"add_cart",payload:e})},children:Object(u.jsx)(O.a,{className:"icon_i",children:"add_shopping_cart"})}),Object(u.jsxs)("span",{children:["Category: ",e.categoryName]})]})})):Object(u.jsx)("h2",{className:"loader row",children:"Cart is empty"})})}var g=function(){var e=Object(d.g)().code,t=Object(a.useContext)(f).data,c=Object(a.useState)(),n=Object(o.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(),l=Object(o.a)(i,2),j=l[0],b=l[1];return Object(a.useEffect)((function(){fetch("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&productcode=".concat(e,"&country=asia2"),{method:"GET",headers:{"x-rapidapi-host":"apidojo-hm-hennes-mauritz-v1.p.rapidapi.com","x-rapidapi-key":"2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326"}}).then((function(e){return e.json()})).then((function(e){console.log(e),b(e.product)})),s(t.products.find((function(t){return t.articles[0].code===e})))}),[]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{className:"loader",children:["Product Info, code: ",e]}),j?Object(u.jsxs)("div",{className:"product_info row",children:[Object(u.jsx)("img",{src:r.images[0].url,alt:"good"}),Object(u.jsxs)("div",{className:"product_text_info",children:[Object(u.jsx)("h1",{children:j.name}),Object(u.jsx)("p",{children:j.description}),Object(u.jsxs)("div",{className:"row",style:{width:"10vw"},children:[Object(u.jsx)("span",{children:"Color:"}),Object(u.jsx)("span",{className:"color",style:{background:"".concat(j.color.rgbColor)}})]}),Object(u.jsxs)("span",{children:["Made in ",j.countryOfProduction]}),Object(u.jsxs)("span",{children:["Price: ","".concat(j.whitePrice.price)]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"back",onClick:function(){return window.history.back()},children:"Back"})})]})]}):Object(u.jsx)("h1",{className:"loader row",children:"Loading..."})]})})},f=(c(43),c(44),Object(a.createContext)(null)),m=function(e,t){switch(t.type){case"product":return Object(l.a)(Object(l.a)({},e),{},{products:t.payload});case"clearProduct":return Object(l.a)(Object(l.a)({},e),{},{products:[]});case"add":return Object(l.a)(Object(l.a)({},e),{},{users:[].concat(Object(i.a)(e.users),[Object(l.a)(Object(l.a)({},t.payload),{},{cart:[]})])});case"add_cart":return Object(l.a)(Object(l.a)({},e),{},{user:Object(l.a)(Object(l.a)({},e.user),{},{cart:[].concat(Object(i.a)(e.user.cart),[t.payload])}),users:[].concat(Object(i.a)(e.users.filter((function(t){return t.login!==e.user.login}))),[Object(l.a)(Object(l.a)({},e.user),{},{cart:[].concat(Object(i.a)(e.user.cart),[t.payload])})])});case"delete_cart":return Object(l.a)(Object(l.a)({},e),{},{user:Object(l.a)(Object(l.a)({},e.user),{},{cart:e.user.cart.filter((function(e){return e.code!==t.payload.code}))}),users:[].concat(Object(i.a)(e.users.filter((function(t){return t.login!==e.user.login}))),[Object(l.a)(Object(l.a)({},e.user),{},{cart:e.user.cart.filter((function(e){return e.code!==t.payload.code}))})])});case"login":return Object(l.a)(Object(l.a)({},e),{},{user:e.users.find((function(e){return e.login===t.payload.login}))});case"logout":return Object(l.a)(Object(l.a)({},e),{},{user:{}});default:return e}};var v=function(){var e=Object(a.useReducer)(m,{products:[],user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{cart:[]},users:localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[]}),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){localStorage.setItem("users",JSON.stringify(c.users))}),[c.users]),Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(c.user))}),[c.user]),Object(u.jsx)(f.Provider,{value:{data:c,dispatch:n},children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)("span",{children:"Register"})}),Object(u.jsx)(j.b,{to:"/login",children:Object(u.jsx)("span",{children:"Login"})}),Object(u.jsx)(j.b,{to:"/product",children:Object(u.jsx)("span",{children:"Product"})}),c.user.login&&Object(u.jsx)(j.b,{to:"/cart",children:"Cart"})]}),c.user.login&&Object(u.jsxs)("div",{className:"info_person",children:[Object(u.jsx)(O.a,{fontSize:"large",children:"person"}),Object(u.jsx)("h5",{children:c.user.login}),Object(u.jsx)("button",{className:"btn_person",onClick:function(){return n({type:"logout"})},children:"Logout"})]})]})}),Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.b,{path:"/",exact:!0,children:Object(u.jsx)(p,{})}),Object(u.jsx)(d.b,{path:"/login",children:Object(u.jsx)(b,{})}),Object(u.jsx)(d.b,{path:"/product",children:Object(u.jsx)(h,{})}),Object(u.jsx)(d.b,{path:"/cart",children:Object(u.jsx)(x,{})}),Object(u.jsx)(d.b,{path:"/productInfo/:code",children:Object(u.jsx)(g,{})})]})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),N()}},[[45,1,2]]]);
//# sourceMappingURL=main.784a6749.chunk.js.map