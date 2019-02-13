(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){e.exports=n(243)},243:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(49),c=n.n(i),s=n(13),o=n(11),u=n(106),l=n(248),m=n(249),p=n(250),d=n(246),h=n(3),f=n(2),E=n(8),b=n(6),v=n(9),y=n(19),S=n.n(y),O=n(22),g=n(31),j=n(107),I=n.n(j).a.create({baseURL:"http://localhost:3001"}),k=n(108),N=n.n(k)()(),w=function(e){return function(){var t=Object(g.a)(S.a.mark(function t(n){var a;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.get("/streams/".concat(e));case 2:a=t.sent,n({type:"FETCH_STREAM",payload:a.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},C=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getId()):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"736089993774-bb80s3fkpn5sussi4r2cdlf8oq132n3t.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In With Google")}},{key:"render",value:function(){return r.a.createElement("div",null," ",this.renderAuthButton()," ")}}]),t}(r.a.Component),A=Object(s.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(C),T=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(d.a,{to:"/",className:"item"},"Streamer"),r.a.createElement("div",{className:"right menu"},r.a.createElement(d.a,{to:"/",className:"item"},"All Streams"),r.a.createElement(A,null)))},_=n(245),D=n(244),R=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).renderInput=function(e){var t=e.input,a=e.label,i=e.meta,c="field ".concat(i.error&&i.touched?"error":"");return r.a.createElement("div",{className:c},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"})),n.renderError(i))},n.onSubmit=function(e){n.props.onSubmit(e)},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(_.a,{name:"title",component:this.renderInput,label:"Enter Title"}),r.a.createElement(_.a,{name:"description",component:this.renderInput,label:"Enter Description"}),r.a.createElement("button",{className:"ui button primary"}," Submit "))}}]),t}(r.a.Component),x=Object(D.a)({form:"streamForm",validate:function(e){var t={};return e.title||(t.title="You must enter a valid input"),e.description||(t.description="You must enter a valid description"),t}})(R),M=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.createStream(e)},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Create a Stream "),r.a.createElement(x,{onSubmit:this.onSubmit}))}}]),t}(r.a.Component),L=Object(s.b)(null,{createStream:function(e){return function(){var t=Object(g.a)(S.a.mark(function t(n,a){var r,i;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,I.post("/streams",Object(O.a)({},e,{userId:r}));case 3:i=t.sent,n({type:"CREATE_STREAM",payload:i.data}),N.push("/");case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}})(M),U=function(e){return c.a.createPortal(r.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},P=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderContent",value:function(){return this.props.stream?"Are you sure you want to delete: ".concat(this.props.stream.title):"Are you sure you want to delete this stream?"}},{key:"renderActions",value:function(){var e=this,t=this.props.match.params.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){e.props.deleteStream(t)},className:"ui button negative"},"Delete"),r.a.createElement(d.a,{to:"/",className:"ui button"}," Cancel "))}},{key:"render",value:function(){return r.a.createElement(U,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return N.push("/")}})}}]),t}(r.a.Component),F=Object(s.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:w,deleteStream:function(e){return function(){var t=Object(g.a)(S.a.mark(function t(n){return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.delete("/streams/".concat(e));case 2:n({type:"DELETE_STREAM",payload:e}),N.push("/");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(P),G=n(39),H=n.n(G),q=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.editStream(n.props.match.params.id,e)},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return this.props.stream?r.a.createElement("div",null,r.a.createElement("h3",null," Edit a Stream"),r.a.createElement(x,{initialValues:H.a.pick(this.props.stream,"title","description"),onSubmit:this.onSubmit})):r.a.createElement("div",null," Loading... ")}}]),t}(r.a.Component),B=Object(s.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:w,editStream:function(e,t){return function(){var n=Object(g.a)(S.a.mark(function n(a){var r;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.patch("/streams/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_STREAM",payload:r.data}),N.push("/");case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}})(q),J=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId===this.props.currentUserId)return r.a.createElement("div",{className:"right floated content"},r.a.createElement(d.a,{to:"/streams/edit/".concat(e.id),className:"ui button primary"},"EDIT"),r.a.createElement(d.a,{to:"/streams/delete/".concat(e.id),className:"ui button negative"},"DELETE"))}},{key:"renderCreate",value:function(e){if(this.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(d.a,{to:"/streams/new",className:"ui button primary"},"Create Stream"))}},{key:"renderList",value:function(){var e=this;return this.props.streams.map(function(t){return r.a.createElement("div",{className:"item",key:t.id},e.renderAdmin(t),r.a.createElement("i",{className:"large middle aligned icon camera"}),r.a.createElement("div",{className:"content"},r.a.createElement(d.a,{to:"/streams/".concat(t.id),className:"header"},t.title),r.a.createElement("div",{className:"description"},t.description," ")))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null," Streams "),r.a.createElement("div",{className:"ui celled list"},this.renderList()),this.renderCreate())}}]),t}(r.a.Component),V=Object(s.b)(function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}},{fetchStreams:function(){return function(){var e=Object(g.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("/streams");case 2:n=e.sent,t({type:"FETCH_STREAMS",payload:n.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(J),W=n(110),X=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(E.a)(this,Object(b.a)(t).call(this,e))).videoRef=r.a.createRef(),n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchStream(e),this.buildPlayer()}},{key:"componentDidUpdate",value:function(){this.buildPlayer()}},{key:"componentWillUnmount",value:function(){this.player.destroy()}},{key:"buildPlayer",value:function(){if(!this.player&&this.props.stream){var e=this.props.match.params.id;this.player=W.a.createPlayer({type:"flv",url:"http://localhost:8000/live/".concat(e,".flv")}),this.player.attachMediaElement(this.videoRef.current),this.player.load()}}},{key:"render",value:function(){return this.props.stream?r.a.createElement("div",null,r.a.createElement("video",{ref:this.videoRef,style:{width:"100%"},controls:!0}),r.a.createElement("h1",null," ",this.props.stream.title," "),r.a.createElement("h5",null," ",this.props.stream.description," ")):r.a.createElement("div",null," Loading... ")}}]),t}(r.a.Component),Y=Object(s.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:w})(X),K=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(l.a,{history:N},r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(m.a,null,r.a.createElement(p.a,{path:"/",exact:!0,component:V}),r.a.createElement(p.a,{path:"/streams/new",exact:!0,component:L}),r.a.createElement(p.a,{path:"/streams/delete/:id",exact:!0,component:F}),r.a.createElement(p.a,{path:"/streams/edit/:id",exact:!0,component:B}),r.a.createElement(p.a,{path:"/streams/:id",exact:!0,component:Y})))))},z=n(247),Q={isSignedIn:null,userId:null},Z=n(30),$=Object(o.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(O.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(O.a)({},e,{isSignedIn:!1,userId:null});default:return e}},form:z.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAMS":return Object(O.a)({},e,H.a.mapKeys(t.payload,"id"));case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return Object(O.a)({},e,Object(Z.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return H.a.omit(e,t.payload);default:return e}}}),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,te=Object(o.e)($,ee(Object(o.a)(u.a)));c.a.render(r.a.createElement(s.a,{store:te},r.a.createElement(K,null)),document.querySelector("#root"))}},[[112,2,1]]]);
//# sourceMappingURL=main.2f386df9.chunk.js.map