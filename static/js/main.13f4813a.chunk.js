(this.webpackJsonpskscorer=this.webpackJsonpskscorer||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),l=n(6),o=n.n(l),u=(n(13),n(1)),i=(n(14),n(7)),d=n(3);!function(e){e[e.NotYet=1]="NotYet",e[e.Bidding=2]="Bidding",e[e.Playing=3]="Playing",e[e.Completed=4]="Completed"}(a||(a={}));var m=a,s=function(e){var t=e.cardCount,n=e.prevRoundScore,a=e.roundMode,l=e.player,o=e.recordBid,u=e.recordScore,s=e.trickPlayedAction,b=e.tricksPlayed,E=Object(c.useState)(0),p=Object(d.a)(E,2),f=p[0],y=p[1],O=Object(c.useState)(0),j=Object(d.a)(O,2),v=j[0],g=j[1],k=Object(c.useState)(0),h=Object(d.a)(k,2),S=h[0],C=h[1],P=Object(i.a)(Array(t+1).keys()),A=Object(c.useState)(0),B=Object(d.a)(A,2),w=B[0],R=B[1];Object(c.useEffect)((function(){if(a===m.Completed){var e=(c=t,o=v,i=S,0===(r=f)&&0===o?10*c:r!==o?10*-Math.abs(r-o):20*o+i);u(l,e+n),R(e)}var c,r,o,i}),[a,f,S,l,w,n,u,t,v]);return r.a.createElement("td",{className:"PlayerRound",style:{width:160},key:l},a===m.Bidding&&r.a.createElement("div",null,P.map((function(e){return r.a.createElement(r.a.Fragment,null,"\xa0",r.a.createElement("input",{key:l+e,type:"radio",name:l,id:l+e,value:e,onClick:function(){var t;y(t=e),o(l,t)}}),r.a.createElement("label",{key:l+e+"L",htmlFor:l+e},e),"\xa0",r.a.createElement("br",null))}))),(a===m.Completed||a===m.Playing)&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Bid: ",f," "),r.a.createElement("span",null,"Won: ",v," "),a===m.Playing&&b<t&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){g(v+1),s()}},"Add Trick")),a===m.Playing&&b===t&&r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Bonus",type:"number",style:{width:44},onChange:function(e){C(Number(e.target.value))}}))),a===m.Completed&&r.a.createElement(r.a.Fragment,null,S>0&&r.a.createElement("div",null,"Bonus: ",S),r.a.createElement("div",null,"score: ",w),r.a.createElement("div",null,"Total: ",w+n)))},b=function(e){var t=e.cardCount,n=e.players,a=e.prevRoundScores,l=e.currentRound,o=e.roundCompleteAction,i=Object(c.useState)(l<t?m.NotYet:l===t?m.Bidding:m.Completed),d=Object(u.a)(i,2),b=d[0],E=d[1],p=Object(c.useState)({}),f=Object(u.a)(p,2),y=f[0],O=f[1],j=Object(c.useState)(!1),v=Object(u.a)(j,2),g=v[0],k=v[1],h=function(e,t){y[e]=t,O(y);var a=!0;n.forEach((function(e){void 0===y[e]&&(a=!1)})),k(a)},S=Object(c.useState)({}),C=Object(u.a)(S,2),P=C[0],A=C[1],B=function(e,t){P[e]=t,A(P)};Object(c.useEffect)((function(){E(l<t?m.NotYet:l===t?m.Bidding:m.Completed)}),[t,l]);var w=Object(c.useState)(0),R=Object(u.a)(w,2),N=R[0],F=R[1],M=function(){F(N+1)},Y=Object(c.useState)(!1),K=Object(u.a)(Y,2),W=K[0],x=K[1];return r.a.createElement("tr",{className:"Round"},r.a.createElement("td",{key:"cardCount"},t),n.map((function(e){return r.a.createElement(s,{key:e,cardCount:t,trickPlayedAction:M,tricksPlayed:N,prevRoundScore:a&&a[e]?a[e]:0,roundMode:b,player:e,recordBid:h,recordScore:B})})),r.a.createElement("td",{style:{width:50,border:"none"}},b===m.Bidding&&g&&r.a.createElement("button",{onClick:function(){E(m.Playing)}},"Start Round"),b===m.Playing&&N<t&&!W&&r.a.createElement("button",{onClick:function(){x(!0),M()}},"Kraken Played"),b===m.Playing&&N===t&&r.a.createElement("button",{onClick:function(){E(m.Completed),o(P)}},"Round done")))},E=(n(15),function(e){var t=e.players,n=e.deletePlayerAction,a=e.startGameAction,l=Object(c.useState)(1),o=Object(u.a)(l,2),i=o[0],d=o[1],m=Object(c.useState)([]),s=Object(u.a)(m,2),E=s[0],p=s[1],f=function(e){1===i&&a(),E[i]=e,p(E),d(i+1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Round"),t.map((function(e){return r.a.createElement("th",{key:e},e,1===i&&r.a.createElement("button",{onClick:function(){n(e)}}," \u2717"))})))),r.a.createElement("tbody",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return r.a.createElement(b,{key:e,cardCount:e,players:t,prevRoundScores:e>1?E[e-1]:null,currentRound:i,roundCompleteAction:f})})))))});var p=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)(""),o=Object(u.a)(l,2),i=o[0],d=o[1],m=Object(c.useState)(!1),s=Object(u.a)(m,2),b=s[0],p=s[1],f=Object(c.useState)(!1),y=Object(u.a)(f,2),O=y[0],j=y[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-body"},r.a.createElement("h1",null,"Skull King Scoresheet"),!b&&!O&&r.a.createElement("button",{onClick:function(){p(!0)}},"Add player"),b&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"name",onChange:function(e){d(e.target.value)}}),r.a.createElement("button",{onClick:function(){n.push(i),a(n),p(!1)}},"OK")),r.a.createElement(E,{players:n,deletePlayerAction:function(e){a(n.filter((function(t){return t!==e})))},startGameAction:function(){j(!0)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.13f4813a.chunk.js.map