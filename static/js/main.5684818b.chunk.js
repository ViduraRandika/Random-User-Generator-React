(this["webpackJsonpreact-fundamentals"]=this["webpackJsonpreact-fundamentals"]||[]).push([[0],{20:function(e,t,i){},22:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),c=i(9),o=i.n(c),s=(i(20),i(3)),l=i(2),r=i(14),d=i(5),u=i(10),m=i.n(u),j=(i(22),i(0));var b=function(e){return Object(j.jsx)("li",{className:"list-group-item shadow",children:Object(j.jsxs)("div",{className:"row align-items-center",children:[Object(j.jsx)("div",{className:"col-12 col-sm-2 col-md-2",children:Object(j.jsx)("p",{children:Object(j.jsx)("img",{src:e.dp,alt:e.name,className:"border border-dark rounded-circle shadow"})})}),Object(j.jsxs)("div",{className:"col col-sm col-md",children:[Object(j.jsx)("h5",{style:{color:"red"},children:e.name}),Object(j.jsxs)("p",{className:"greenText",children:["Gender : ",e.gender]}),e.city," | ",e.email," | ",e.phone,Object(j.jsxs)("p",{children:[m()(e.dob).format("DD-MM-YYYY")," and ",e.age," years old"]})]})]})})};var p=function(){var e=Object(a.useState)(new Date),t=Object(d.a)(e,2),i=t[0],c=t[1],o=Object(a.useState)([{id:1,name:{title:"Mr",first:"Brad",last:"Gibson"},gender:"male",location:{city:"Kilcoole"},email:"brad.gibson@example.com",dob:{date:"1993-07-20T09:44:18.674Z",age:"28"},phone:"011-962-7516",picture:{medium:"https://randomuser.me/api/portraits/med/men/75.jpg"}},{id:2,name:{title:"Mr",first:"Clifford",last:"Bell"},gender:"male",location:{city:"Westminster"},email:"clifford.bell@example.com",dob:{date:"1996-05-11T08:58:31.195Z",age:"25"},phone:"011-962-5516",picture:{medium:"https://randomuser.me/api/portraits/med/men/94.jpg"}}]),s=Object(d.a)(o,2),l=s[0],u=s[1];return Object(a.useEffect)((function(){fetch("https://randomuser.me/api").then((function(e){return e.json()})).then((function(e){u((function(t){return[].concat(Object(r.a)(t),[e.results[0]])}))}))}),[i]),Object(j.jsx)(n.a.Fragment,{children:Object(j.jsxs)("div",{className:"container mt-4",children:[Object(j.jsx)("button",{className:"btn btn-primary mb-2",onClick:function(){c(new Date)},children:"Add Name"}),Object(j.jsx)("ul",{className:"list-group",children:l.map((function(e){return Object(j.jsx)(b,{dp:e.picture.medium,name:"".concat(e.name.title,".").concat(e.name.first," ").concat(e.name.last),gender:e.gender,city:e.location.city,email:e.email,dob:e.dob.date,age:e.dob.age,phone:e.phone},e.id)}))})]})})};var h=function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark shadow",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Name List"}),Object(j.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{className:"nav-link",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{className:"nav-link",to:"/about",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{className:"nav-link",to:"/namelist",children:"Show Name List"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{className:"nav-link",to:"/namelistc",children:"Name List - Class"})})]})]})})};var x=function(){return Object(j.jsx)(n.a.Fragment,{children:Object(j.jsxs)("div",{className:"container mt-4",children:[Object(j.jsx)("h3",{children:"Welcome"}),Object(j.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(j.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(j.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(j.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'})]})})};var O=function(){return Object(j.jsx)(n.a.Fragment,{children:Object(j.jsxs)("div",{className:"container mt-4",children:[Object(j.jsx)("h3",{children:"About"}),Object(j.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(j.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(j.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(j.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'})]})})};i(24);var f=function(){return Object(j.jsx)("footer",{className:"footer bg-dark",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(j.jsx)("h5",{children:"Links"}),Object(j.jsxs)("ul",{className:"list-unstyled",children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/namelist",children:"Show Name List"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/namelistc",children:"Name List - Class"})})]})]}),Object(j.jsxs)("div",{class:"col-7 col-sm-5",children:[Object(j.jsx)("h5",{children:"Our Address"}),Object(j.jsxs)("address",{children:[Object(j.jsx)("div",{children:"Mawanella, Sri Lanka"}),Object(j.jsx)("div",{children:"Tel.: +94779179292"}),Object(j.jsxs)("div",{children:["Email: ",Object(j.jsx)(s.b,{to:"#",children:"dilshanudawatta15@gmail.com"})]})]})]}),Object(j.jsx)("div",{class:"col-12 col-sm-4 align-self-center",children:Object(j.jsxs)("div",{class:"text-center",children:[Object(j.jsx)(s.b,{to:"#",children:"Google "}),Object(j.jsx)(s.b,{to:"#",children:"Facebook "}),Object(j.jsx)(s.b,{to:"#",children:"LinkedIn "}),Object(j.jsx)(s.b,{to:"#",children:"Twitter "}),Object(j.jsx)(s.b,{to:"#",children:"YouTube "})]})}),Object(j.jsx)("div",{class:"row justify-content-center",children:Object(j.jsx)("div",{class:"col-auto",children:Object(j.jsx)("p",{children:"\xa9 Copyright 2021 Dilshan Udawaththa"})})})]})})})},g=i(11),v=i(12),N=i(15),q=i(13),L=function(e){Object(N.a)(i,e);var t=Object(q.a)(i);function i(e){var a;return Object(g.a)(this,i),(a=t.call(this,e)).addNameHandler=function(){console.log("Add Name button Clicked"),console.log(a.state.message)},a.nameListComponent=function(){return a.state.nameList.map((function(e){return Object(j.jsx)(b,{dp:e.picture.medium,name:"".concat(e.name.title,".").concat(e.name.first," ").concat(e.name.last),gender:e.gender,city:e.location.city,email:e.email,dob:e.dob.date,age:e.dob.age,phone:e.phone},e.id)}))},console.log("Constructor called!"),a.state={nameList:[{id:1,name:{title:"Mr",first:"Brad",last:"Gibson"},gender:"male",location:{city:"Kilcoole"},email:"brad.gibson@example.com",dob:{date:"1993-07-20T09:44:18.674Z",age:"28"},phone:"011-962-7516",picture:{medium:"https://randomuser.me/api/portraits/med/men/75.jpg"}},{id:2,name:{title:"Mr",first:"Clifford",last:"Bell"},gender:"male",location:{city:"Westminster"},email:"clifford.bell@example.com",dob:{date:"1996-05-11T08:58:31.195Z",age:"25"},phone:"011-962-5516",picture:{medium:"https://randomuser.me/api/portraits/med/men/94.jpg"}}]},a}return Object(v.a)(i,[{key:"componentDidMount",value:function(){console.log("componentDidMount Method Called")}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate Method Called"),console.log(this.state.message)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container mt-4",children:[Object(j.jsx)("button",{className:"btn btn-primary mb-2",onClick:this.addNameHandler,children:"Add Name"}),Object(j.jsx)("ul",{className:"list-group",children:this.nameListComponent()})]})}}]),i}(a.Component);var k=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(x,{})}),Object(j.jsx)(l.a,{path:"about",element:Object(j.jsx)(O,{})}),Object(j.jsx)(l.a,{path:"namelist",element:Object(j.jsx)(p,{})}),Object(j.jsx)(l.a,{path:"namelistc",element:Object(j.jsx)(L,{})})]}),Object(j.jsx)(f,{})]})})},y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,26)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;i(e),a(e),n(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),y()}},[[25,1,2]]]);
//# sourceMappingURL=main.5684818b.chunk.js.map