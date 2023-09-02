(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[10],{103:function(e,t,c){"use strict";var n=c(7),a=c(0);t.a=function(e){var t=Object(a.useState)(new Date),c=Object(n.a)(t,2),s=c[0],r=c[1],i=Object(a.useState)({minutes:0,seconds:0}),l=Object(n.a)(i,2),d=l[0],o=l[1],j=Object(a.useState)(0),b=Object(n.a)(j,2),u=b[0],m=b[1],O=Object(a.useState)(0),h=Object(n.a)(O,2),x=h[0],f=h[1];return Object(a.useEffect)((function(){if(e){var t=setInterval((function(){var c=new Date;r(c);var n=e-c.getTime();if(n<=0)clearInterval(t),o({minutes:0,seconds:0});else{var a=Math.floor(n/6e4),s=Math.floor(n/1e3%60);o({minutes:a,seconds:s});var i=Math.floor(n/12e4);m(i),f(Math.floor(n/1e3))}}),1e3);return function(){return clearInterval(t)}}}),[e]),{currentTime:s,remainingTime:d,formattedTime:"".concat(d.minutes,":").concat(d.seconds<10?"0":"").concat(d.seconds),currentIndex:u,totalRemainingSeconds:x}}},119:function(e,t,c){},125:function(e,t,c){},142:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(4),s=c(9),r=c.n(s),i=c(5),l=c(92),d=c(10),o=c(2),j=c.n(o),b=c(6),u=c(7),m=c(17),O=(c(119),c.p+"static/media/trading.c31da198.jpg"),h=c(1);var x=function(e){return e.isOpen,e.onClose,Object(h.jsx)("div",{className:"trading container d-flex justify-content-center align-items-center ",children:Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("img",{src:O,width:"50%",alt:"Image",className:"img-fluid"}),Object(h.jsx)("h2",{className:"mt-3",children:"Trading has not yet started!!"}),Object(h.jsx)("p",{className:"lead",children:"Please be advised that trading has not yet begun for the day. If you are attempting to place a trade, please wait until trading commences before doing so. Thank you for your patience and understanding."})]})})},f=c.p+"static/media/message.17f316c9.mp3",p=(c.p,c(18)),v=c(99),g=c(141),N=(c(125),function(e){var t=function(t){27===(t.charCode||t.keyCode)&&e.onClose()};return Object(n.useEffect)((function(){return document.body.addEventListener("keydown",t),function(){document.body.removeEventListener("keydown",t)}}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(g.a,{in:e.show,unmountOnExit:!0,timeout:{enter:0,exit:300},children:Object(h.jsx)("div",{className:"modal",onClick:e.onClose,children:Object(h.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(h.jsx)("div",{className:"modal-header",children:Object(h.jsx)("h4",{className:"modal-title",children:e.title})}),Object(h.jsx)("div",{className:"modal-body",children:Object(h.jsxs)("table",{className:"modaltable table-bordered",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Lot"}),Object(h.jsx)("th",{scope:"col",children:"Factory"}),Object(h.jsx)("th",{scope:"col",children:"Price"}),Object(h.jsx)("th",{scope:"col",children:"Bidder"}),Object(h.jsx)("th",{scope:"col",children:"Status"})]})}),Object(h.jsx)("tbody",{children:e.filteredData.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:t+1})}),Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:e.lot})}),Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:e.factory_name})}),Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:e.maximum_bid})}),Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:e.buyer_name})}),Object(h.jsx)("td",{children:Object(h.jsx)("span",{className:1===e.sold_status?"hname":(e.sold_status,"rname"),children:1===e.sold_status?"Sold":0===e.sold_status?"Unsold":"Pending"})})]},t)}))})]})}),Object(h.jsx)("div",{className:"modal-footer",children:Object(h.jsx)("button",{onClick:e.onClose,className:"btn btn-danger",children:"Close"})})]})})})})}),y=c(112),k=c.n(y),S=c(45),w=function(e){var t=e.handleKeyPress,c=e.index,n=(e.time,e.el),a=e.users,s=e.manualmode,r=e.selectedIndex,i=e.handleInputChange,l=e.addBid,d=e.handleInc,o=e.disabledButtons,j=e.setSelectedIndex,b=e.setManualmode;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{className:"text-center",children:[n.lot,Object(h.jsx)("br",{}),n.invoice]}),Object(h.jsxs)("td",{className:"text-center",children:[n.factory_name,Object(h.jsx)("br",{}),"(",n.grade,")"]}),Object(h.jsxs)("td",{className:"text-center",children:[n.price,Object(h.jsx)("br",{}),"(".concat(n.pkgs,")")]}),Object(h.jsxs)("td",{className:"text-center",children:[0!==n.maximum_bid&&Object(h.jsxs)("div",{className:"bidd_name",children:[Object(h.jsx)("p",{className:"highest",children:n.maximum_bid}),Object(h.jsxs)("span",{className:n.buyer==a.link_id?"hname":"rname",children:["(",n.maximum_bid-n.price,")"]})]}),Object(h.jsx)("br",{})]}),Object(h.jsx)("td",{className:"text-center",children:!0===s&&r===c?Object(h.jsx)("div",{className:"mn-bid col-12",children:Object(h.jsx)("input",{className:"form-control m_bid",autoComplete:"off",type:"number",id:"name".concat(n.id),name:"name",value:n.name,onKeyPress:function(e){return t(n,e,c)},onChange:function(e){return i(e,c)}})}):0===n.maximum_bid?Object(h.jsx)("div",{className:"mn-bid col-12",children:Object(h.jsx)("input",{className:"form-control m_bid",autoComplete:"off",type:"number",id:"name".concat(n.id),name:"name",value:n.name,onChange:function(e){return i(e,c)}})}):Object(h.jsx)(h.Fragment,{})}),Object(h.jsx)("td",{className:"text-center",children:0===n.maximum_bid?Object(h.jsx)("button",{disabled:"BIDDER"!==a.type,onClick:function(){return l(n,c)},className:"btn btn-danger square-circle",children:Object(h.jsx)(S.a,{className:"bid"})},n.id+10):Object(h.jsx)("div",{className:"col-12 ",children:Object(h.jsxs)("div",{className:"bidcont mb-2 d-flex justify-content-center",children:[Object(h.jsx)("button",{disabled:o.includes(c),onClick:function(){return d(n,c)},className:" btn-danger square-circle bidbtn",children:"+1"},n.id+11),Object(h.jsx)("button",{onClick:function(){!0===s&&r===c?l(n,c):(b(!0),j(c))},className:" btn-primary square-circle bidbtn",style:{fontSize:"10px"},children:Object(h.jsx)(S.a,{className:"bid"})},n.id)]})})})]})})},_=c(113),C=c(103),I=v.a.connect("http://128.199.28.79:3009"),T=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],s="http://128.199.28.79:3009",o=Object(m.b)(),O=(Object(m.c)((function(e){return e.auction})).auction_data,localStorage.getItem("users")),v=JSON.parse(O),g=Object(n.useState)([]),y=Object(u.a)(g,2),S=y[0],T=y[1],E=Object(n.useState)(""),D=Object(u.a)(E,2),F=(D[0],D[1]),R=Object(n.useState)(""),B=Object(u.a)(R,2),L=B[0],P=B[1],A=Object(n.useState)(""),M=Object(u.a)(A,2),U=(M[0],M[1]),z=Object(n.useState)(),q=Object(u.a)(z,2),K=q[0],H=q[1],J=Object(n.useState)([]),V=Object(u.a)(J,2),G=V[0],W=V[1],Q=Object(n.useState)([]),Y=Object(u.a)(Q,2),Z=Y[0],X=Y[1],$=Object(n.useState)(!1),ee=Object(u.a)($,2),te=(ee[0],ee[1]),ce=Object(n.useState)([]),ne=Object(u.a)(ce,2),ae=ne[0],se=ne[1],re=Object(n.useState)(null),ie=Object(u.a)(re,2),le=ie[0],de=ie[1],oe=Object(n.useState)(0),je=Object(u.a)(oe,2),be=je[0],ue=je[1],me=Object(n.useState)(!1),Oe=Object(u.a)(me,2),he=(Oe[0],Oe[1]),xe=Object(n.useState)(!0),fe=Object(u.a)(xe,2),pe=(fe[0],fe[1]),ve=Object(n.useState)(!1),ge=Object(u.a)(ve,2),Ne=ge[0],ye=(ge[1],Object(n.useState)(!1)),ke=Object(u.a)(ye,2),Se=ke[0],we=ke[1],_e=Object(n.useState)(!1),Ce=Object(u.a)(_e,2),Ie=Ce[0],Te=Ce[1],Ee=function(){var e=Object(b.a)(j.a.mark((function e(){var t,c,n,a,i,l,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.get("".concat(s,"/getselectbroker"));case 3:return t=e.sent,c=t.data[0],n=c.auction,a=c.current_brokers,i=c.name,l=c.id,pe(0===n),e.next=8,Promise.all([P(i),U(l),H(a)]);case 8:return I.emit("user",a),d=function(e){he(e===v.link_id)},I.on("user_toggle",d),e.abrupt("return",(function(){I.off("users",a),I.off("user_toggle",d)}));case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e=!0;Ee(),I.on("checkname",(function(t){e&&P(t)})),I.on("users",(function(t){if(e){t.filter((function(e){return 0===e.sold_status}));W(t),X(t)}}));var t=function(e){ue(e)};return I.on("activeUsers",t),function(){e=!1,I.off("activeUsers",t)}}),[I]);var De=Object(n.useState)(60),Fe=Object(u.a)(De,1)[0],Re=Object(n.useState)(null),Be=Object(u.a)(Re,2),Le=Be[0],Pe=Be[1],Ae=Object(n.useState)(new Date),Me=Object(u.a)(Ae,2),Ue=(Me[0],Me[1],Object(n.useState)(Fe)),ze=Object(u.a)(Ue,2),qe=(ze[0],ze[1],Object(n.useState)(0)),Ke=Object(u.a)(qe,2);Ke[0],Ke[1];Object(n.useEffect)((function(){return I.on("users",(function(e){W(e)})),I.on("endTimeUpdated",(function(e){Pe(new Date(e.endTime).getTime())})),function(){I.off("users")}}),[]);var He=Object(n.useState)(""),Je=Object(u.a)(He,2),Ve=Je[0],Ge=Je[1],We=Object(n.useState)(""),Qe=Object(u.a)(We,2),Ye=Qe[0],Ze=Qe[1],Xe=Object(n.useState)(""),$e=Object(u.a)(Xe,2),et=$e[0],tt=$e[1],ct=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.get("".concat(s,"/catalougedata"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),nt=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.get("".concat(s,"/api/getEndTime"));case 3:return t=e.sent,e.abrupt("return",t.data.endTime);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),at=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.get("".concat(s,"/getselectbroker"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),st=Object(_.a)("catalogData",ct,{revalidateOnFocus:!0,revalidateOnReconnect:!0}),rt=st.data,it=(st.error,Object(_.a)("endTime",nt,{revalidateOnFocus:!0,revalidateOnReconnect:!0})),lt=it.data,dt=(it.error,Object(_.a)("".concat(s,"/getselectbroker"),at,{revalidateOnFocus:!0,revalidateOnReconnect:!0,onSuccess:function(e){var t=e[0],c=t.auction,n=t.current_brokers,a=t.name,s=t.id,r=t.sale_no,i=t.season,l=t.date;pe(0===c),P(a),U(s),H(n),Ge(r),Ze(i),tt(l)}})),ot=(dt.data,dt.error,Object(C.a)(Le)),jt=ot.currentIndex,bt=ot.formattedTime;ot.remainingTime,ot.totalRemainingSeconds;Object(n.useEffect)((function(){rt&&W(rt),lt&&Pe(new Date(Number(lt)).getTime())}),[rt,lt]);var ut=G?G[jt]:{},mt=G?G[jt+1]:{},Ot=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("".concat(s,"/getselectbroker")).then((function(e){I.emit("user",e.data[0].current_brokers)})).catch((function(e){console.log(e)}));case 2:o(p.c),a(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ht=function(){var e=Object(b.a)(j.a.mark((function e(t,c){var n,a,i,l,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.maximum_bid,i=a+.5*a,l=null===(n=S[c])||void 0===n?void 0:n.name){e.next=7;break}return Te(!1),e.abrupt("return");case 7:if(!(0!==a&&l<a)){e.next=10;break}return alert("Bid value should be greater than or equal to the maximum bid."),e.abrupt("return");case 10:if(!(l>i&&0!==a)){e.next=13;break}return alert("You can only bid up to 50% of the maximum bid."),e.abrupt("return");case 13:return we(!0),d={id:t.id,bid:l,sold_status:Number(l)>Number(t.price)?1:t.sold_status,buyer:v.link_id},e.prev=15,e.next=18,r.a.put("".concat(s,"/manualbid"),d);case 18:return I.emit("user",K),e.next=21,I.on("user"((function(e){W(e)})));case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(15),console.log(e.t0);case 26:Te(!1),we(!1);case 28:case"end":return e.stop()}}),e,null,[[15,23]])})));return function(t,c){return e.apply(this,arguments)}}(),xt=function(){var e=Object(b.a)(j.a.mark((function e(t,c){var n,a,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return se((function(e){return[].concat(Object(d.a)(e),[c])})),we(!0),n=new Audio(f),a=G.map((function(e,c){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{maximum_bid:e.maximum_bid+1,buyer:v.link_id,key:c,sold_status:Number(e.maximum_bid+1)>Number(e.price)?1:e.sold_status}):Object(l.a)(Object(l.a)({},e),{},{key:c})})),i=a.filter((function(e){return e.id===t.id})),e.prev=5,e.next=8,r.a.put("".concat(s,"/updateauction"),i);case 8:I.emit("user",K),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.log(e.t0);case 14:return e.prev=14,n.play(),te(!1),we(!1),se((function(e){return e.filter((function(e){return e!==c}))})),e.finish(14);case 20:case"end":return e.stop()}}),e,null,[[5,11,14,20]])})));return function(t,c){return e.apply(this,arguments)}}(),ft=Z.filter((function(e){return e.buyer===v.link_id}));return null===Le||null===G?Object(h.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)(k.a,{type:"spin",color:"#007bff",height:50,width:50}),Object(h.jsx)("div",{style:{marginTop:"20px",fontSize:"16px",fontWeight:"bold"},children:"Verifying Data..."})]}):Object(h.jsxs)(h.Fragment,{children:[Se?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"overlay",children:Object(h.jsxs)("div",{className:"spinner-container",children:[Object(h.jsx)("div",{className:"spinner"}),Object(h.jsx)("span",{children:"Verifying data..."})]})})}):"",Ne&&""!==v.type?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)(k.a,{type:"spin",color:"#007bff",height:50,width:50}),Object(h.jsx)("div",{style:{marginTop:"20px",fontSize:"16px",fontWeight:"bold"},children:"Verifying Data..."})]})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(N,{title:"My Lot",onClose:function(){return a(!1)},show:c,filteredData:ft}),Object(h.jsxs)("div",{className:"section-head sec-h",children:[Object(h.jsxs)("p",{className:"br-n",children:["=",L.toUpperCase(),"="]}),Object(h.jsxs)("div",{className:"row newc",children:[Object(h.jsxs)("div",{className:"col-7 col-md-9 card-btn leftCard",children:[Object(h.jsxs)("h2",{children:["AUCTION DATE :"," ",et||""]}),Object(h.jsxs)("p",{className:"sell-text",children:["SALE NO - #",Ve||""," (CEREMONIAL SALE)"]}),Object(h.jsxs)("p",{className:"sell-text",children:["PARTICIPATE - #",be," "]}),Object(h.jsxs)("p",{className:"sell-text",children:["SEASON - #",Ye||""]}),Object(h.jsxs)("p",{className:"sell-text",children:["CURRENT BROKER :"," ",Object(h.jsx)("span",{className:"",children:L.toUpperCase()})," "]}),Object(h.jsx)("div",{className:" row margin-left",children:Object(h.jsx)("button",{type:"button",onClick:Ot,className:"col-5 buttonGroup btn btn-success my-btn",children:"My Lot"})})]}),Object(h.jsx)("div",{className:"col-5 col-md-3 align-items-center justify-content-center mt-5 rCard",children:Object(h.jsx)("div",{className:"col-12",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"row rightCard",children:Object(h.jsxs)("div",{className:" ",children:[Object(h.jsx)("div",{className:"col-md-12 count-t",children:Object(h.jsx)("h2",{className:"text-center mh2",children:bt})}),Object(h.jsx)("div",{className:"col-md-12 name-t",children:Object(h.jsx)("h2",{className:"mh2 text-center",children:v.short_name})})]})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"col-md-12 name-t mh3",children:Object(h.jsxs)("h4",{className:" text-center fw-bold fs-4",children:["TOTAL : ",G.length," LOT"]})})})]})})})]})]}),Object(h.jsx)("div",{className:"card p-3",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-6 col-md-3 d-flex justify-content-start align-items-center",children:[Object(h.jsx)("span",{style:{backgroundColor:"white",color:"black",padding:"5px",fontSize:"12px"},children:"PLZ BID"}),Object(h.jsx)("span",{style:{backgroundColor:"#6f6fc4",color:"white",padding:"5px",fontSize:"12px"},children:"HBH"})]}),Object(h.jsx)("div",{className:"col-6 col-md-9 d-flex justify-content-end",style:{paddingRight:"20px"},children:Object(h.jsx)("span",{style:{backgroundColor:"black",color:"white",padding:"5px",fontSize:"12px"},children:bt})})]})}),"0:00"===bt&&"BIDDER"===v.type?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x,{})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"table-container con",children:[Object(h.jsx)("div",{className:"row g-1 bid-table",children:Object(h.jsxs)("table",{id:"auction",className:"table table-bordered",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsxs)("th",{scope:"col",children:["Lot ",Object(h.jsx)("br",{}),"Invoice"]}),Object(h.jsxs)("th",{scope:"col",children:["Factory",Object(h.jsx)("br",{}),"Grade"]}),Object(h.jsxs)("th",{scope:"col",children:["Price",Object(h.jsx)("br",{}),"Qty"]}),Object(h.jsxs)("th",{scope:"col",children:["Highest",Object(h.jsx)("br",{})," Buyer"]}),Object(h.jsx)("th",{scope:"col",children:"Bid"}),Object(h.jsx)("th",{scope:"col",children:"Action"})]})}),Object(h.jsx)("tbody",{children:ut&&Object(h.jsx)(w,{handleKeyPress:function(e,t,c){"Enter"===t.key&&ht(e,c)},uId:v.link_id,sl:"",time:"",el:ut,index:ut.id,setManualmode:Te,setSelectedIndex:de,users:v,formatTime:"",manualmode:Ie,selectedIndex:le,handleInputChange:function(e,t){var c=e.target,n=c.name,a=c.value;T((function(e){var c=Object(d.a)(e);return c[t]=Object(l.a)(Object(l.a)({},c[t]),{},Object(i.a)({},n,a)),c})),F(t)},addBid:ht,handleInc:xt,disabledButtons:ae},ut.id)})]})}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("div",{className:"row",children:mt?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"col-12 col-md-12",children:Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:0===mt.sold_status?"rem-card-x":"rem-card-y",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-8",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsxs)("p",{className:"rem-text",children:["Lot - (",mt.lot,") ",mt.factory_name," "]})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsxs)("p",{className:"rem-text",children:[mt.buyer_name,"(",mt.maximum_bid-mt.price,")"]})})]}),Object(h.jsx)("div",{className:"col-4 d-flex align-items-center justify-content-center ".concat(0===mt.sold_status?"btcls":"btctik"),children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-12 ",children:Object(h.jsx)("i",{className:0===mt.sold_status?"bi bi-x-circle ":"bi bi-check2-circle"})})})})]})})})})}):""})})]})})]})]})};t.default=function(){var e=Object(a.n)();return Object(n.useEffect)((function(){var t=sessionStorage.getItem("token");e(t?"/bidders":"/")}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("section",{className:"content-header"}),Object(h.jsx)("section",{className:"content",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-xs-12",children:Object(h.jsx)(T,{})})})})]})}}}]);
//# sourceMappingURL=10.6917e89b.chunk.js.map