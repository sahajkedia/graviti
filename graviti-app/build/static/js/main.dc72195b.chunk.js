(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c.n(n),r=c(11),a=c(18),i=c(1),l=c(0),j=c(9),o=(c(23),c.p+"static/media/logo.6873a213.jpg"),b=c(4);c(25).config();var d={lat:12.971599,lng:77.594566};var u=function(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(l.useState)(""),u=Object(i.a)(s,2),O=u[0],h=u[1],x=Object(l.useState)(""),p=Object(i.a)(x,2),v=p[0],g=p[1],m=Object(l.useState)(""),f=Object(i.a)(m,2),w=f[0],y=f[1],N=Object(l.useRef)(),C=Object(l.useRef)();if(!Object(j.e)({googleMapsApiKey:"AIzaSyAolXVBph__8LXk-JukgnxDUI4LPDQAsxQ",libraries:["places"]}).isLoaded)return Object(b.jsx)("p",{children:"Hi I'm feeling great"});function k(){return(k=Object(a.a)(Object(r.a)().mark((function e(){var t,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(N.current.value),y(C.current.value),""!==N.current.value&&""!==C.current.value){e.next=4;break}return e.abrupt("return");case 4:return t=new google.maps.DirectionsService,e.next=7,t.route({origin:N.current.value,destination:C.current.value,travelMode:google.maps.TravelMode.DRIVING});case 7:c=e.sent,n(c),h(c.routes[0].legs[0].distance.text);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"full",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("img",{src:o,alt:"logo"})}),Object(b.jsxs)("div",{className:"center",children:[Object(b.jsxs)("p",{children:["Let's calculate ",Object(b.jsx)("b",{children:"distance"})," from Google maps"]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"insideContent",children:[Object(b.jsx)("label",{children:"Origin"}),Object(b.jsx)(j.a,{children:Object(b.jsx)("input",{type:"text",placeholder:"",ref:N})}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Destination"}),Object(b.jsx)(j.a,{children:Object(b.jsx)("input",{type:"text",placeholder:"",ref:C})}),Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("div",{className:"distance",children:"Distance"}),Object(b.jsx)("h1",{children:O})]}),Object(b.jsxs)("div",{className:"fooText",children:["The distance between ",Object(b.jsx)("b",{children:v})," and ",Object(b.jsx)("b",{children:w})," is ",O]})]}),Object(b.jsx)("button",{style:{marginTop:"6vh",marginRight:"5vw"},onClick:function(){return k.apply(this,arguments)},children:"Calculate"}),Object(b.jsxs)(j.c,{center:d,zoom:15,mapContainerStyle:{width:"40vw",height:"50vh"},options:{zoomControl:!1,streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1},children:[Object(b.jsx)(j.d,{position:d}),c&&Object(b.jsx)(j.b,{directions:c})]})]})]})]})};var O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:Object(b.jsx)(u,{})})})};s.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.dc72195b.chunk.js.map