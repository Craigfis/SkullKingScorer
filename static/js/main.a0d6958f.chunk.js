(this.webpackJsonpskscorer=this.webpackJsonpskscorer||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),l=n(6),o=n.n(l),i=(n(13),n(1)),u=(n(14),n(7)),d=n(3);!function(e){e[e.NotYet=1]="NotYet",e[e.Bidding=2]="Bidding",e[e.Playing=3]="Playing",e[e.Completed=4]="Completed"}(a||(a={}));var m=a,s=function(e){var t=e.cardCount,n=e.prevRoundScore,a=e.roundMode,l=e.player,o=e.recordBid,i=e.recordScore,s=e.trickPlayedAction,b=e.tricksPlayed,E=Object(r.useState)(0),p=Object(d.a)(E,2),f=p[0],y=p[1],g=Object(r.useState)(0),O=Object(d.a)(g,2),j=O[0],h=O[1],v=Object(r.useState)(0),S=Object(d.a)(v,2),k=S[0],C=S[1],P=Object(u.a)(Array(t+1).keys()),B=Object(r.useState)(0),w=Object(d.a)(B,2),A=w[0],R=w[1];Object(r.useEffect)((function(){if(a===m.Completed){var e=(r=t,o=j,u=k,0===(c=f)&&0===o?10*r:c!==o?10*-Math.abs(c-o):20*o+u);i(l,e+n),R(e)}var r,c,o,u}),[a,f,k,l,A,n,i,t,j]);return c.a.createElement("td",{className:"PlayerRound",style:{width:160},key:l},a===m.Bidding&&c.a.createElement("div",null,P.map((function(e){return c.a.createElement(c.a.Fragment,null,"\xa0",c.a.createElement("input",{key:l+e,type:"radio",name:l,id:l+e,value:e,onClick:function(){var t;y(t=e),o(l,t)}}),c.a.createElement("label",{key:l+e+"L",htmlFor:l+e},e),"\xa0",c.a.createElement("br",null))}))),(a===m.Completed||a===m.Playing)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Bid: ",f," "),c.a.createElement("span",null,"Won: ",j," "),a===m.Playing&&b<t&&c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){h(j+1),s()}},"Add Trick")),a===m.Playing&&b===t&&c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Bonus",type:"number",style:{width:44},onChange:function(e){C(Number(e.target.value))}}))),a===m.Completed&&c.a.createElement(c.a.Fragment,null,k>0&&c.a.createElement("div",null,"Bonus: ",k),c.a.createElement("div",null,"score: ",A),c.a.createElement("div",null,"Total: ",A+n)))},b=function(e){var t=e.cardCount,n=e.players,a=e.prevRoundScores,l=e.currentRound,o=e.roundCompleteAction,u=Object(r.useState)(l<t?m.NotYet:l===t?m.Bidding:m.Completed),d=Object(i.a)(u,2),b=d[0],E=d[1],p=Object(r.useState)({}),f=Object(i.a)(p,2),y=f[0],g=f[1],O=Object(r.useState)(!1),j=Object(i.a)(O,2),h=j[0],v=j[1],S=Object(r.useState)(0),k=Object(i.a)(S,2),C=k[0],P=k[1],B=function(e,t){y[e]=t,g(y);var a=!0,r=0;n.forEach((function(e){void 0===y[e]?a=!1:r+=y[e]})),v(a),P(r)},w=Object(r.useState)({}),A=Object(i.a)(w,2),R=A[0],N=A[1],F=function(e,t){R[e]=t,N(R)};Object(r.useEffect)((function(){E(l<t?m.NotYet:l===t?m.Bidding:m.Completed)}),[t,l]);var K=Object(r.useState)(0),Y=Object(i.a)(K,2),M=Y[0],W=Y[1],x=function(){W(M+1)},G=Object(r.useState)(!1),J=Object(i.a)(G,2),T=J[0],z=J[1];return c.a.createElement("tr",{className:"Round"},c.a.createElement("td",{key:"cardCount"},t,!h&&l===t&&c.a.createElement("div",null,"Enter bids")),n.map((function(e){return c.a.createElement(s,{key:e,cardCount:t,trickPlayedAction:x,tricksPlayed:M,prevRoundScore:a&&a[e]?a[e]:0,roundMode:b,player:e,recordBid:B,recordScore:F})})),c.a.createElement("td",{style:{width:50,border:"none"}},b===m.Bidding&&h&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){E(m.Playing)}},"Start Round"),c.a.createElement("div",{style:{width:100}},C===t?"Bids at par":C<t?"Bids "+(t-C)+" under":"Bids "+(C-t)+" over")),b===m.Playing&&M<t&&!T&&c.a.createElement("button",{onClick:function(){z(!0),x()}},"Kraken Played"),b===m.Playing&&M===t&&c.a.createElement("button",{onClick:function(){E(m.Completed),o(R)}},"Round done")))},E=(n(15),function(e){var t=e.players,n=e.deletePlayerAction,a=e.startGameAction,l=Object(r.useState)(1),o=Object(i.a)(l,2),u=o[0],d=o[1],m=Object(r.useState)([]),s=Object(i.a)(m,2),E=s[0],p=s[1],f=function(e){1===u&&a(),E[u]=e,p(E),d(u+1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Round"),t.map((function(e){return c.a.createElement("th",{key:e},e,1===u&&c.a.createElement("button",{onClick:function(){n(e)}}," \u2717"))})))),c.a.createElement("tbody",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return c.a.createElement(b,{key:e,cardCount:e,players:t,prevRoundScores:e>1?E[e-1]:null,currentRound:u,roundCompleteAction:f})})))))});var p=function(){var e=Object(r.useState)(["Player 1","Player 2","Player 3"]),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Object(r.useState)(""),o=Object(i.a)(l,2),u=o[0],d=o[1],m=Object(r.useState)(!1),s=Object(i.a)(m,2),b=s[0],p=s[1],f=Object(r.useState)(!1),y=Object(i.a)(f,2),g=y[0],O=y[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App-body"},c.a.createElement("h1",null,"Ye New Skull King Scoresheet"),!b&&!g&&c.a.createElement("button",{onClick:function(){p(!0)}},"Add player"),b&&c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",placeholder:"name",onChange:function(e){d(e.target.value)}}),c.a.createElement("button",{onClick:function(){n.push(u),a(n),p(!1)}},"OK")),c.a.createElement(E,{players:n,deletePlayerAction:function(e){a(n.filter((function(t){return t!==e})))},startGameAction:function(){O(!0)}}),c.a.createElement("br",null),c.a.createElement("div",{style:{fontSize:11}},"Copyright (c) 2020 Craig Fisher ",c.a.createElement("a",{href:"https://twitter.com/craigfis"},"@craigfis"),c.a.createElement("br",null),c.a.createElement("a",{href:"https://github.com/Craigfis/SkullKingScorer"},"https://github.com/Craigfis/SkullKingScorer"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.a0d6958f.chunk.js.map