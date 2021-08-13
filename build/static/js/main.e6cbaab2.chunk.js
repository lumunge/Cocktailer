(this.webpackJsonpreaction=this.webpackJsonpreaction||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(18),i=a.n(c),r=a(16),s=a(11),o=a(138),l=a(51),j=a(136),d=Object(j.a)((function(){return{about:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"72vh",marginTop:"6rem"}}})),h=a(2),b=function(){var e=d();return Object(h.jsx)(o.a,{children:Object(h.jsxs)("div",{className:e.about,children:[Object(h.jsx)(l.a,{variant:"h2",children:"Need A Drink / Cocktail?"}),Object(h.jsx)(l.a,{variant:"h5",children:"This is a web application that enables you to make your own drinks or cocktails. We offer over 500+ beverages, alcoholic and non-alcoholic with images, ingredients and instructions on how to go about preparing the drink. We have included filters for various preferences for our respective users. Hope you enjoy"})]})})},u=a(139),x=a(140),m=a(141),p=Object(j.a)((function(){return{navbar:{background:"rgba(0,0,0,0.8)"},link:{color:"#fff",fontWeight:"600","&:hover":{color:"#FA8072",transition:"all.4s ease-in"}},username:{color:"#fff",fontWeight:"600"},avatar:{backgroundColor:"#FA8072"},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center"},logout:{color:"#FA8072",fontSize:"2rem","&:hover":{color:"red",transition:"all.4s ease-in"}},profile:{display:"flex",width:"105%",justifyContent:"space-around",alignItems:"center"}}})),O=function(){var e=p();return Object(h.jsx)(u.a,{position:"fixed",className:e.navbar,children:Object(h.jsx)(x.a,{className:e.toolbar,children:Object(h.jsxs)("div",{children:[Object(h.jsx)(m.a,{className:e.link,component:r.b,to:"/",children:"Home"}),Object(h.jsx)(m.a,{className:e.link,component:r.b,to:"/about",children:"About"}),Object(h.jsx)(m.a,{className:e.link,component:r.b,to:"/categories",children:"Cocktails"})]})})})},f=a(23),g=a(27),v=a.n(g),k=a(142),w=a(144),y=a(145),N=a(146),D=a(147),C=a(143),A=Object(j.a)((function(){return{progress:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},image:{height:250},title:{textAlign:"center",padding:"2rem 0"},actions:{display:"flex",justifyContent:"space-between"},cardFooter:{display:"flex"}}})),I=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],i=a[1],s=new Array(12).fill(0),j=Object(n.useState)(!0),d=Object(f.a)(j,2),b=d[0],u=d[1],x=e.location.pathname.substr(11),p=A();return Object(n.useEffect)((function(){x.includes("alcohol")?v.a.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=".concat(x)).then((function(e){var t=e.data.drinks;i(t),u(!b)})).catch((function(e){console.log(e)})):v.a.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=".concat(x)).then((function(e){var t=e.data.drinks;i(t),u(!b)})).catch((function(e){console.log(e)}))}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{variant:"h4",className:p.title,children:"Cocktails"}),b?Object(h.jsx)(k.a,{container:!0,spacing:2,children:s.map((function(e){return Object(h.jsxs)(k.a,{item:!0,xs:12,sm:6,md:4,children:[Object(h.jsx)(C.a,{variant:"rect",width:380,height:250}),Object(h.jsxs)("div",{className:p.cardFooter,children:[Object(h.jsx)(C.a,{variant:"text",width:300,height:60}),"\xa0",Object(h.jsx)(C.a,{variant:"text",width:70,height:60})]})]})}))}):Object(h.jsx)(k.a,{container:!0,spacing:2,children:null===c||void 0===c?void 0:c.map((function(e){return Object(h.jsx)(k.a,{item:!0,xs:12,sm:6,md:4,children:Object(h.jsxs)(w.a,{children:[Object(h.jsx)(y.a,{children:Object(h.jsx)(N.a,{className:p.image,image:e.strDrinkThumb,title:e.strDrink})}),Object(h.jsxs)(D.a,{className:p.actions,children:[Object(h.jsx)(l.a,{variant:"h6",children:e.strDrink}),Object(h.jsx)(m.a,{variant:"contained",color:"secondary",component:r.b,to:{pathname:"/drink/:".concat(e.idDrink)},children:"How To"})]})]},e.idMeal)})}))})]})})},F=a(148),S=a(157),T=a(149),B=a(155),M=a(150),z=a(74),W=a.n(z),H=a(75),Y=a.n(H),E=a(76),V=a.n(E),Z=Object(j.a)((function(){return{main:{height:"100vh",marginTop:"6rem"},title:{textAlign:"center",paddingBottom:"2rem"},image:{height:350}}})),q=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)([]),s=Object(f.a)(r,2),j=s[0],d=s[1],b=Object(n.useState)(!1),u=Object(f.a)(b,2),x=u[0],m=u[1],p=Object(n.useState)(!1),O=Object(f.a)(p,2),g=O[0],y=O[1],C=e.location.pathname.substr(8),A=Z(),I=function(){y(!g)};Object(n.useEffect)((function(){v.a.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(C)).then((function(e){var t=e.data.drinks;i(t),d(t[0]),m(!x)})).catch((function(e){console.log(e)}))}),[]);for(var z=[],H=1;H<=20&&j["strIngredient".concat(H)];H++)z.push("".concat(j["strMeasure".concat(H)]," --- ").concat(j["strIngredient".concat(H)]));return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(o.a,{className:A.main,children:c.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)(l.a,{variant:"h4",className:A.title,children:["How to make ",e.strDrink]}),Object(h.jsxs)(k.a,{container:!0,spacing:3,className:A.mainContainer,children:[Object(h.jsx)(k.a,{item:!0,sm:6,xs:12,className:A.ingredients,children:Object(h.jsxs)(w.a,{children:[Object(h.jsx)(F.a,{title:"".concat(e.strDrink),subheader:"Category: ".concat(e.strCategory)}),Object(h.jsx)(l.a,{variant:"h5",children:Object(h.jsx)(S.a,{children:"Ingredients: "})}),z.map((function(e){return Object(h.jsx)(S.a,{children:e})}))]})}),Object(h.jsx)(k.a,{item:!0,sm:6,xs:12,className:A.drink,children:Object(h.jsxs)(w.a,{children:[Object(h.jsx)(N.a,{className:A.image,image:e.strDrinkThumb,title:e.strDrink}),Object(h.jsxs)(D.a,{disableSpacing:!0,children:[Object(h.jsx)(T.a,{children:Object(h.jsx)(W.a,{})}),Object(h.jsx)(T.a,{children:Object(h.jsx)(Y.a,{})}),Object(h.jsx)(T.a,{onClick:I,children:Object(h.jsx)(V.a,{})})]}),Object(h.jsx)(B.a,{in:g,timeout:"auto",unmountOnExit:!0,children:Object(h.jsxs)(M.a,{children:[Object(h.jsx)(l.a,{variant:"h5",children:"Preparation"}),Object(h.jsx)(l.a,{paragraph:!0,children:e.strInstructions})]})})]})})]})]},e.idDrink)}))})})},G=a(156),J=a(151),P=Object(j.a)((function(){return{main:{marginTop:"6rem",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},wrapper:{backgroundImage:"url('https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvY2t0YWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60')",backgroundPosition:"center",backgroundSize:"cover",margin:"2rem",width:"200px",height:"150px",position:"relative",overflow:"hidden",transition:"all .4s ease-in","&:hover":{transform:"scale(1.1)"}},filter:{backgroundImage:"url('https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmV2ZXJhZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60')"},overlay:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",color:"red"},text:{color:"#fff",textDecoration:"none",fontWeight:"600"},categories:{width:"100%",display:"flex",justifyContent:"center"},paper:{padding:"1.5rem"},button:{margin:"10px",textTransform:"capitalize",padding:"5px 10px"}}})),L=function(){var e,t,a=P(),n=[Object(G.a)("categories",(function(){return v()("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")})),Object(G.a)("filters",(function(){return v()("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")}))],c=Object(f.a)(n,2),i=c[0],s=i.isLoading,j=i.data,d=c[1],b=d.isLoading,u=d.data;return Object(h.jsx)(o.a,{children:Object(h.jsxs)(o.a,{className:a.main,children:[Object(h.jsx)(l.a,{variant:"h4",className:a.title,children:"All Categories"}),s?Object(h.jsx)("div",{children:Object(h.jsx)(J.a,{})}):Object(h.jsx)(k.a,{container:!0,spacing:3,className:a.categories,children:null===(e=j.data.drinks)||void 0===e?void 0:e.map((function(e){return Object(h.jsx)(k.a,{item:!0,className:a.wrapper,component:r.b,to:{pathname:"/category/:".concat(e.strCategory)},children:Object(h.jsx)("div",{className:a.overlay,children:Object(h.jsx)(l.a,{variant:"h6",className:a.text,children:e.strCategory})})})}))}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{variant:"h4",children:"Other Filters"}),b?Object(h.jsx)("div",{children:Object(h.jsx)(J.a,{})}):Object(h.jsx)(k.a,{container:!0,spacing:3,className:a.categories,children:null===(t=u.data.drinks)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)(k.a,{item:!0,className:"".concat(a.filter," ").concat(a.wrapper),component:r.b,to:{pathname:"/category/:".concat(e.strAlcoholic)},children:Object(h.jsx)("div",{className:a.overlay,children:Object(h.jsx)(l.a,{variant:"h6",className:a.text,children:e.strAlcoholic})})})}))})]})})},_=Object(j.a)((function(){return{home:{backgroundImage:"url('https://mcdn.wallpapersafari.com/medium/76/75/0FBlqY.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"85vh"},overlay:{position:"relative",zIndex:"999",background:"rgba(0,0,0,0.7)",width:"100%",height:"100%",color:"#fff",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}})),R=a(78),X=a.n(R),K=function(){var e=_();return Object(h.jsx)("div",{className:e.home,children:Object(h.jsxs)("div",{className:e.overlay,children:[Object(h.jsx)(l.a,{variant:"h2",children:"Try out new drinks with free cocktail recipes"}),Object(h.jsx)(m.a,{variant:"contained",component:r.b,to:"/categories",children:Object(h.jsx)(X.a,{})})]})})},Q=a(152),U=a(153),$=a(79),ee=a.n($),te=a(80),ae=a.n(te),ne=a(81),ce=a.n(ne),ie=Object(j.a)((function(){return{nav:{backgroundColor:"transparent",padding:"4rem 0 6rem 0",textAlign:"center"}}})),re=function(){var e=ie();return Object(h.jsx)(Q.a,{className:e.nav,children:Object(h.jsxs)("div",{className:e.socials,children:[Object(h.jsx)("a",{href:"https://github.com/lumunge",rel:"noreferrer",target:"_blank",children:Object(h.jsx)(U.a,{icon:Object(h.jsx)(ee.a,{})})}),Object(h.jsx)("a",{href:"https://ke.linkedin.com/in/lumunge",rel:"noreferrer",target:"_blank",children:Object(h.jsx)(U.a,{icon:Object(h.jsx)(ae.a,{})})}),Object(h.jsx)("a",{href:"#!",onClick:function(){return alert("lumungep12@gmail.com")},children:Object(h.jsx)(U.a,{icon:Object(h.jsx)(ce.a,{})})})]})})};a(119);function se(){return Object(h.jsxs)(r.a,{children:[Object(h.jsx)(O,{}),Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:"/",exact:!0,component:K}),Object(h.jsx)(s.a,{path:"/about",component:b}),Object(h.jsx)(s.a,{path:"/categories",component:L}),Object(h.jsx)(s.a,{path:"/category",component:I}),Object(h.jsx)(s.a,{path:"/drink",component:q})]}),Object(h.jsx)(re,{})]})}var oe=a(154),le=a(77),je=new oe.a;i.a.render(Object(h.jsx)(le.a,{client:je,children:Object(h.jsx)(se,{})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.e6cbaab2.chunk.js.map