(this["webpackJsonpfitness-assistant-p1-m2"]=this["webpackJsonpfitness-assistant-p1-m2"]||[]).push([[0],{360:function(e,t,n){},366:function(e,t){},367:function(e,t){},375:function(e,t){},378:function(e,t){},379:function(e,t){},380:function(e,t,n){},390:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n(66),r=n.n(c),i=(n(360),n(97)),o=n(4),s=n.n(o),l=n(12),u=n(5),j=n(184),d=n(348),b=n(301),h=n.n(b),O=n(81),p=n(195),x=(n(187),n(0),"aqua");function g(e){return[e.y,e.x]}function f(e,t,n,a,c){e.beginPath(),e.arc(n,t,a,0,2*Math.PI),e.fillStyle=c,e.fill()}function m(e,t,n,a,c){var r=Object(u.a)(e,2),i=r[0],o=r[1],s=Object(u.a)(t,2),l=s[0],j=s[1];c.beginPath(),c.moveTo(o*a,i*a),c.lineTo(j*a,l*a),c.lineWidth=2,c.strokeStyle=n,c.stroke()}var v=n(391),S=n(428),y=n(429),k=n(430),C=n(431),w=n(432),L=n(433),N=n(434),I=n(437),T=n(435),A=n(442),J=n(440),_=n(436),W=n(441),U=n(427),D=n(439),E=n(438),G=n(423),P=n(425),B=n(426),M=n(37),R=n(424),K=n(347),H=n.n(K);n(380);function z(e){var t=Math.round(80*e.length/100),n=O.b.array(e).shuffle(10),a=n.take(t),c=n.skip(t);return[34,a.map((function(e){var t=e.xs,n=e.ys,a=["JUMPING_JACKS"==n?1:0,"WALL_SIT"==n?1:0,"LUNGES"==n?1:0];return{xs:Object.values(t),ys:Object.values(a)}})).batch(30),c.map((function(e){var t=e.xs,n=e.ys,a=["JUMPING_JACKS"==n?1:0,"WALL_SIT"==n?1:0,"LUNGES"==n?1:0];return{xs:Object.values(t),ys:Object.values(a)}})).batch(30)]}function F(e){var t=O.f();return t.add(O.d.dense({inputShape:[e],units:12,activation:"relu"})),t.add(O.d.dense({units:8,activation:"relu"})),t.add(O.d.dense({units:3,activation:"softmax"})),t.compile({optimizer:O.h.adam(.001),loss:"categoricalCrossentropy",metrics:"accuracy"}),t}function q(e,t,n){return V.apply(this,arguments)}function V(){return(V=Object(l.a)(s.a.mark((function e(t,n,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=F(a),e.next=3,c.fitDataset(t,{epochs:100,validationData:n,callbacks:{onEpochEnd:function(e,t){console.log("Epoch: "+e+" Loss: "+t.loss+" Accuracy: "+t.acc+" Validation loss: "+t.val_loss+" Validation accuracy: "+t.val_acc)}}});case 3:return e.sent,e.next=6,c.save("indexeddb://fitness-assistant-model");case 6:console.log("Model saved!");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=n(28),X=["children","classes","onClose"],Y=Object(M.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,a=e.onClose,c=Object(d.a)(e,X);return Object(Q.jsxs)(G.a,Object(j.a)(Object(j.a)({disableTypography:!0,className:n.root},c),{},{children:[Object(Q.jsx)(v.a,{variant:"h6",children:t}),a?Object(Q.jsx)(R.a,{"aria-label":"close",className:n.closeButton,onClick:a,children:Object(Q.jsx)(H.a,{})}):null]}))})),Z=Object(M.a)((function(e){return{root:{padding:e.spacing(2)}}}))(P.a),$=Object(M.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(B.a);function ee(e){return Object(Q.jsx)(D.a,Object(j.a)({elevation:6,variant:"filled"},e))}var te=Object(U.a)((function(e){return{backgroundAppBar:{background:"#1875d2"},title:{flexGrow:1,textAlign:"left"},statsCard:{width:"250px",margin:"10px"},singleLine:{display:"flex",alignItems:"center",justifyContent:"center"},formControl:{margin:e.spacing(1),minWidth:120}}})),ne=function(e){return new Promise((function(t,n){isNaN(e)?n(new Error("delay requires a valid number.")):setTimeout(t,e)}))};var ae=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(null),c=Object(u.a)(n,2),r=c[0],o=c[1],d=Object(a.useState)(!1),b=Object(u.a)(d,2),U=b[0],D=b[1],G=Object(a.useRef)(null),P=Object(a.useState)(!1),B=Object(u.a)(P,2),M=B[0],R=B[1],K=Object(a.useState)("inactive"),H=Object(u.a)(K,2),F=H[0],V=H[1],X=Object(a.useState)({workout:"",name:"hai"}),ae=Object(u.a)(X,2),ce=ae[0],re=ae[1],ie=Object(a.useState)(!1),oe=Object(u.a)(ie,2),se=oe[0],le=oe[1],ue=Object(a.useState)(!1),je=Object(u.a)(ue,2),de=je[0],be=je[1],he=Object(a.useState)(!1),Oe=Object(u.a)(he,2),pe=Oe[0],xe=Oe[1],ge=Object(a.useState)([]),fe=Object(u.a)(ge,2),me=fe[0],ve=fe[1],Se=Object(a.useState)(!1),ye=Object(u.a)(Se,2),ke=ye[0],Ce=ye[1],we=Object(a.useState)(!1),Le=Object(u.a)(we,2),Ne=Le[0],Ie=Le[1],Te=te(),Ae="waiting",Je=!1,_e=null,We=!1,Ue=0,De=Object(a.useState)(0),Ee=Object(u.a)(De,2),Ge=Ee[0],Pe=Ee[1],Be=0,Me=Object(a.useState)(0),Re=Object(u.a)(Me,2),Ke=Re[0],He=Re[1],ze=0,Fe=Object(a.useState)(0),qe=Object(u.a)(Fe,2),Ve=qe[0],Qe=qe[1],Xe=0,Ye=Object(a.useState)(0),Ze=Object(u.a)(Ye,2),$e=Ze[0],et=Ze[1],tt=Object(a.useState)(0),nt=Object(u.a)(tt,2),at=nt[0],ct=nt[1],rt=Object(a.useState)(0),it=Object(u.a)(rt,2),ot=it[0],st=it[1],lt=Object(a.useState)(!1),ut=Object(u.a)(lt,2),jt=ut[0],dt=ut[1],bt=function(){dt(!1)},ht=function(e,t){"clickaway"!==t&&le(!1)},Ot=function(e,t){"clickaway"!==t&&be(!1)},pt=Object(a.useState)(!1),xt=Object(u.a)(pt,2),gt=xt[0],ft=xt[1],mt=function(e,t){"clickaway"!==t&&ft(!1)},vt=function(e,t){"clickaway"!==t&&xe(!1)};Object(a.useEffect)((function(){kt()}),[]);var St=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V("active"),e.next=3,ne(1e4);case 3:return le(!0),console.log("collecting"),Ae="collecting",e.next=8,ne(3e4);case 8:be(!0),console.log("not collecting"),Ae="waiting",V("inactive");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),yt=function(e){var t=localStorage.getItem(e);null===t?localStorage.setItem(e,1):(console.log("Increase counter"),localStorage.setItem(e,parseInt(t)+1))},kt=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.c({architecture:"MobileNetV1",outputStride:16,inputResolution:{width:800,height:600},multiplier:.75});case 2:t=e.sent,o(t),console.log("Posenet Model Loaded..");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ct=function(){"undefined"!==typeof e.current&&null!==e.current&&4===e.current.video.readyState&&(G.current=setInterval((function(){var n=e.current.video,a=e.current.video.videoWidth,c=e.current.video.videoHeight;e.current.video.width=a,e.current.video.height=c;var i=(new Date).getTime();r.estimateSinglePose(n,{flipHorizontal:!1}).then((function(e){for(var n=(new Date).getTime(),r=[],o=0;o<e.keypoints.length;o++){var s=e.keypoints[o].position.x,l=e.keypoints[o].position.y;e.keypoints[o].score<.1?(s=0,l=0):(s=s/400-1,l=l/300-1),r.push(s),r.push(l)}if("collecting"===Ae){console.log(n-i," ms"),console.log(O.c()),console.log(e),console.log(ce.workout);var u={xs:r,ys:ce.workout};me.push(u),ve(me)}if(!0===Je)if(!1===We){var j=function(e,t){var n=O.g(t.xs,[1,t.xs.length]),a=e.predict(n),c=O.a(a,1).dataSync(),r=a.dataSync()[c],i=null;if(r>.7){var o=["JUMPING_JACKS","WALL_SIT","LUNGES"];console.log(o[c]+", probability: "+r),i=o[c]}return a.dispose(),i}(_e,{xs:r});null!==j&&("JUMPING_JACKS"===j?(Pe(Be+=1),yt("JUMPING_JACKS")):"WALL_SIT"===j?(He(ze+=1),yt("WALL_SIT")):"LUNGES"===j&&(Qe(Xe+=1),yt("LUNGES")),We=!0,Ue=(new Date).getTime())}else{(new Date).getTime()-Ue>1500&&(Ue=0,We=!1)}wt(e,a,c,t)}))}),100))},wt=function(e,t,n,a){var c=a.current.getContext("2d");a.current.width=t,a.current.height=n,function(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=0;c<e.length;c++){var r=e[c];if(!(r.score<t)){var i=r.position;f(n,i.y*a,i.x*a,3,x)}}}(e.keypoints,.5,c),function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;p.a(e,t).forEach((function(e){m(g(e[0].position),g(e[1].position),x,a,n)}))}(e.keypoints,.5,c)},Lt=function(){return clearInterval(G.current)},Nt=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("START_WORKOUT"!==t){e.next=19;break}if(!Ne){e.next=7;break}Je=!1,Ie(!1),Lt(),e.next=19;break;case 7:return Je=!0,e.prev=8,e.next=11,O.e("indexeddb://fitness-assistant-model");case 11:_e=e.sent,Ie(!0),Ct(),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),xe(!0);case 19:"COLLECT_DATA"===t&&(M?"inactive"===F&&(R((function(e){return!e})),Lt(),Ae="waiting",Ce(!1)):ce.workout.length>0&&(R((function(e){return!e})),Ct(),St(),Ce(!0)));case 20:case"end":return e.stop()}}),e,null,[[8,16]])})));return function(t){return e.apply(this,arguments)}}(),It=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(me.length>0)){e.next=9;break}return console.log("Data size: "+me.length),D(!0),t=z(me),n=Object(u.a)(t,3),a=n[0],c=n[1],r=n[2],e.next=6,q(c,r,a);case 6:D(!1),e.next=10;break;case 9:ft(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Tt=function(){var e=null===localStorage.getItem("JUMPING_JACKS")?0:localStorage.getItem("JUMPING_JACKS"),t=null===localStorage.getItem("WALL_SIT")?0:localStorage.getItem("WALL_SIT"),n=null===localStorage.getItem("LUNGES")?0:localStorage.getItem("LUNGES");et(e),ct(t),st(n),dt(!0)},At=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ve([]),Pe(0),He(0),Qe(0),indexedDB.deleteDatabase("tensorflowjs");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(Q.jsxs)("div",{className:"App",children:[Object(Q.jsx)(S.a,{container:!0,spacing:3,children:Object(Q.jsx)(S.a,{item:!0,xs:12,children:Object(Q.jsx)(y.a,{position:"static",className:Te.backgroundAppBar,children:Object(Q.jsxs)(k.a,{variant:"dense",children:[Object(Q.jsx)(v.a,{variant:"h6",color:"inherit",className:Te.title,children:"Fitness Assistant"}),Object(Q.jsx)(C.a,{color:"inherit",onClick:function(){return Nt("START_WORKOUT")},disabled:ke||U,children:Ne?"Stop":"Start Workout"}),Object(Q.jsx)(C.a,{color:"inherit",onClick:function(){return Tt()},disabled:ke||U,children:"History"}),Object(Q.jsx)(C.a,{color:"inherit",onClick:function(){return At()},disabled:ke||U||Ne,children:"Reset"})]})})})}),Object(Q.jsx)(S.a,{container:!0,spacing:3,children:Object(Q.jsx)(S.a,{item:!0,xs:12,children:Object(Q.jsxs)(w.a,{children:[Object(Q.jsxs)(L.a,{children:[Object(Q.jsx)(h.a,{ref:e,style:{marginTop:"10px",marginBottom:"10px",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:800,height:600}}),Object(Q.jsx)("canvas",{ref:t,style:{marginTop:"10px",marginBottom:"10px",position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:800,height:600}})]}),Object(Q.jsx)(N.a,{style:{justifyContent:"center"},children:Object(Q.jsxs)(S.a,{container:!0,spacing:0,children:[Object(Q.jsx)(S.a,{item:!0,xs:12,children:Object(Q.jsxs)(k.a,{style:{justifyContent:"center"},children:[Object(Q.jsx)(w.a,{className:Te.statsCard,children:Object(Q.jsxs)(L.a,{children:[Object(Q.jsx)(v.a,{className:Te.title,color:"textSecondary",gutterBottom:!0,children:"Jumping Jacks"}),Object(Q.jsx)(v.a,{variant:"h2",component:"h2",color:"secondary",children:Ge})]})}),Object(Q.jsx)(w.a,{className:Te.statsCard,children:Object(Q.jsxs)(L.a,{children:[Object(Q.jsx)(v.a,{className:Te.title,color:"textSecondary",gutterBottom:!0,children:"Wall-Sit"}),Object(Q.jsx)(v.a,{variant:"h2",component:"h2",color:"secondary",children:Ke})]})}),Object(Q.jsx)(w.a,{className:Te.statsCard,children:Object(Q.jsxs)(L.a,{children:[Object(Q.jsx)(v.a,{className:Te.title,color:"textSecondary",gutterBottom:!0,children:"Lunges"}),Object(Q.jsx)(v.a,{variant:"h2",component:"h2",color:"secondary",children:Ve})]})})]})}),Object(Q.jsxs)(S.a,{item:!0,xs:12,className:Te.singleLine,children:[Object(Q.jsxs)(T.a,{className:Te.formControl,required:!0,children:[Object(Q.jsx)(A.a,{htmlFor:"age-native-helper",children:"Workout"}),Object(Q.jsxs)(J.a,{value:ce.workout,onChange:function(e){var t=e.target.name;re(Object(j.a)(Object(j.a)({},ce),{},Object(i.a)({},t,e.target.value)))},inputProps:{name:"workout",id:"age-native-helper"},children:[Object(Q.jsx)("option",{"aria-label":"None",value:""}),Object(Q.jsx)("option",{value:"JUMPING_JACKS",children:"Jumping Jacks"}),Object(Q.jsx)("option",{value:"WALL_SIT",children:"Wall-Sit"}),Object(Q.jsx)("option",{value:"LUNGES",children:"Lunges"})]}),Object(Q.jsx)(_.a,{children:"Select training data type"})]}),Object(Q.jsxs)(k.a,{children:[Object(Q.jsx)(v.a,{style:{marginRight:16},children:Object(Q.jsx)(C.a,{variant:"contained",onClick:function(){return Nt("COLLECT_DATA")},color:M?"secondary":"default",disabled:U||Ne,children:M?"Stop":"Collect Data"})}),Object(Q.jsx)(v.a,{style:{marginRight:16},children:Object(Q.jsx)(C.a,{variant:"contained",onClick:function(){return It()},disabled:ke||Ne,children:"Train Model"})}),U?Object(Q.jsx)(I.a,{color:"secondary"}):null]})]})]})})]})})}),Object(Q.jsxs)(E.a,{onClose:bt,"aria-labelledby":"customized-dialog-title",open:jt,maxWidth:"md",children:[Object(Q.jsx)(Y,{id:"customized-dialog-title",onClose:bt,children:"Workout History"}),Object(Q.jsx)(Z,{children:Object(Q.jsxs)(k.a,{children:[Object(Q.jsx)(w.a,{className:Te.statsCard,children:Object(Q.jsxs)(L.a,{children:[Object(Q.jsx)(v.a,{className:Te.title,color:"textSecondary",gutterBottom:!0,children:"Jumping Jacks"}),Object(Q.jsx)(v.a,{variant:"h2",component:"h2",color:"secondary",children:$e})]})}),Object(Q.jsx)(w.a,{className:Te.statsCard,children:Object(Q.jsxs)(L.a,{children:[Object(Q.jsx)(v.a,{className:Te.title,color:"textSecondary",gutterBottom:!0,children:"Wall-Sit"}),Object(Q.jsx)(v.a,{variant:"h2",component:"h2",color:"secondary",children:at})]})}),Object(Q.jsx)(w.a,{className:Te.statsCard,children:Object(Q.jsxs)(L.a,{children:[Object(Q.jsx)(v.a,{className:Te.title,color:"textSecondary",gutterBottom:!0,children:"Lunges"}),Object(Q.jsx)(v.a,{variant:"h2",component:"h2",color:"secondary",children:ot})]})})]})}),Object(Q.jsx)($,{children:Object(Q.jsx)(C.a,{autoFocus:!0,onClick:bt,color:"primary",children:"Close"})})]}),Object(Q.jsx)(W.a,{open:se,autoHideDuration:2e3,onClose:ht,children:Object(Q.jsx)(ee,{onClose:ht,severity:"info",children:"Started collecting pose data!"})}),Object(Q.jsx)(W.a,{open:de,autoHideDuration:2e3,onClose:Ot,children:Object(Q.jsx)(ee,{onClose:Ot,severity:"success",children:"Completed collecting pose data!"})}),Object(Q.jsx)(W.a,{open:gt,autoHideDuration:2e3,onclose:mt,children:Object(Q.jsx)(ee,{onClose:mt,severity:"error",children:"Training data is not available!"})}),Object(Q.jsx)(W.a,{open:pe,autoHideDuration:2e3,onClose:vt,children:Object(Q.jsx)(ee,{onClose:vt,severity:"error",children:"Model is not avilable!"})})]})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,444)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};r.a.render(Object(Q.jsx)(ae,{}),document.getElementById("root")),ce()}},[[390,1,2]]]);
//# sourceMappingURL=main.2d34f8b3.chunk.js.map