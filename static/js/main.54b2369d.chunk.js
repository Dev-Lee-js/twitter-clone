(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),u=a(4),i=a(16),o=a(2),s=a(5),m=a.n(s),p=a(10),f=a(6),d=a(17),E=a(18),b=a.n(E);a(42),a(44),a(51);b.a.initializeApp({apiKey:"AIzaSyAEzSBIpQOE5fQctvphOtB8Bslni6m5jTI",authDomain:"twitter-clone-93ade.firebaseapp.com",projectId:"twitter-clone-93ade",storageBucket:"twitter-clone-93ade.appspot.com",messagingSenderId:"522489420310",appId:"1:522489420310:web:80a9cb6e70a9b43fcfb337"});var h=b.a,v=b.a.auth(),g=b.a.firestore(),y=b.a.storage(),O=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),o=i[0],s=i[1],f=Object(n.useState)(!0),d=Object(u.a)(f,2),E=d[0],b=d[1],h=Object(n.useState)(""),g=Object(u.a)(h,2),y=g[0],O=g[1],j=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},w=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!E){e.next=8;break}return e.next=5,v.createUserWithEmailAndPassword(a,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,v.signInWithEmailAndPassword(a,o);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),O(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:w,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"\uc774\uba54\uc77c",required:!0,value:a,onChange:j,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",required:!0,value:o,className:"authInput",onChange:j}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:E?"\uac00\uc785\ud558\uae30":"\ub85c\uadf8\uc778"}),y&&r.a.createElement("span",{className:"authError"},y)),r.a.createElement("div",{className:"authBox"},r.a.createElement("span",null,E?"\uc774\ubbf8 \uc544\uc774\ub514\uac00 \uc788\uc73c\uc138\uc694?":"\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?"),r.a.createElement("span",{onClick:function(){return b((function(e){return!e}))},className:"authSwitch"},E?"\ub85c\uadf8\uc778":"\ud68c\uc6d0\uac00\uc785"),r.a.createElement("span",null,"\ud558\uae30")))},j=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new h.auth.GoogleAuthProvider:"github"===a&&(n=new h.auth.GithubAuthProvider),e.next=4,v.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(f.a,{icon:d.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(O,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"\uad6c\uae00 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778 ",r.a.createElement(f.a,{icon:d.b})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"\uae43\ud5d9 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778 ",r.a.createElement(f.a,{icon:d.a}))))},w=a(31),x=a(12),N=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(u.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)(t.text),d=Object(u.a)(s,2),E=d[0],b=d[1],h=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,g.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,y.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){return o((function(e){return!e}))},O=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,g.doc("nweets/".concat(t.id)).update({text:E});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:O,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:E,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;b(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:v,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{class:"nweet__actions"},r.a.createElement("span",{onClick:h},r.a.createElement(f.a,{icon:x.d})),r.a.createElement("span",{onClick:v},r.a.createElement(f.a,{icon:x.a})))))},k=a(53),S=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),d=s[0],E=s[1],b=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===d){e.next=12;break}return r=y.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,r.putString(d,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,g.collection("nweets").add(u);case 15:i(""),E("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(f.a,{icon:x.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;E(t)},a.readAsDataURL(t)},style:{opacity:0}}),d&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:d,style:{backgroundImage:d}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return E("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(f.a,{icon:x.c}))))},I=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){g.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));i(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(S,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(N,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},C=function(e){var t=e.refreshUser,a=e.userObj,c=Object(o.f)(),l=Object(n.useState)(a.displayName),i=Object(u.a)(l,2),s=i[0],f=i[1],d=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===s){e.next=5;break}return e.next=4,a.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:d,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:s,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){v.signOut(),c.push("/")}},"Log Out"))},F=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",style:{marginRight:10}},r.a.createElement(f.a,{icon:d.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(f.a,{icon:x.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},A=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(i.a,null,a&&r.a.createElement(F,{userObj:n}),r.a.createElement(o.c,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(I,{userObj:n})),r.a.createElement(o.a,{exact:!0,path:"/profile"},r.a.createElement(C,{userObj:n,refreshUser:t}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(j,null)))))};var B=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){v.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(A,{refreshUser:function(){var e=v.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing...")};a(49);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.54b2369d.chunk.js.map