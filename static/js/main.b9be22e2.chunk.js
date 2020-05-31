(this.webpackJsonpskscorer=this.webpackJsonpskscorer||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),c=n(7),o=n.n(c),i=(n(14),n(1)),u=(n(15),n(8));!function(e){e[e.NotYet=1]="NotYet",e[e.Bidding=2]="Bidding",e[e.Playing=3]="Playing",e[e.Completed=4]="Completed"}(a||(a={}));var s=a,d=(n(16),function(e){var t=e.cardCount,n=e.prevRoundScore,a=e.roundMode,c=e.player,o=e.recordBid,d=e.recordScore,m=e.trickPlayedAction,p=e.tricksPlayed,y=e.winning,g=e.startingPlayer,b=e.legendaryExpansionInPlay,E=Object(r.useState)(0),f=Object(i.a)(E,2),v=f[0],h=f[1],S=Object(r.useState)(0),O=Object(i.a)(S,2),k=O[0],j=O[1],C=Object(r.useState)(0),P=Object(i.a)(C,2),w=P[0],B=P[1],N=Object(u.a)(Array(t+1).keys()),A=Object(r.useState)(0),x=Object(i.a)(A,2),R=x[0],I=x[1];Object(r.useEffect)((function(){if(a===s.Completed){var e=function(e,t,n,a,r){var l=0;return r>0&&(l=t===n?r:-r),0===t?0===n?10*e+l:-10*e+l:t!==n?10*-Math.abs(t-n)+l:20*n+a+l}(t,v,k,w,M);d(c,e+n),I(e)}}),[a,v,w,c,R,n,d,t,k]);var F=function(e){h(Math.max(0,Math.min(v+e,t)))},K=Object(r.useState)(0),_=Object(i.a)(K,2),M=_[0],J=_[1],U=function(e){J(e)},W=y?"rgba(255,215,0,0.6)":g&&a===s.Bidding?"rgba(25,25,200,0.6)":"";return l.a.createElement("td",{className:"PlayerRound",style:{width:160,backgroundColor:W},key:c+t},a===s.Bidding&&l.a.createElement("div",{title:g?"Starts round":""},N.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{key:c+e,type:"radio",name:c,id:c+e,value:e,onClick:function(){var t;h(t=e),o(c,t)}}),l.a.createElement("label",{key:c+e+"L",htmlFor:c+e},e),"\xa0",l.a.createElement("br",null))}))),(a===s.Completed||a===s.Playing)&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,"Bid: ",v," "),l.a.createElement("span",null,"Won: ",k," "),M>0&&l.a.createElement("div",null,"Bet: ",M),a===s.Playing&&l.a.createElement("div",null,p<t&&l.a.createElement("button",{onClick:function(){j(k+1),m()}},"Add Trick"),b&&k>0&&l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"dropdownbutton"},l.a.createElement("img",{style:{backgroundColor:"white"},alt:"Pirate played",width:16,src:"/SkullKingScorer/Skull-And-Crossbones-Remix.svg"})),l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("div",null,"Use Harry the Giant"),l.a.createElement("div",{className:"dropdown-option",onClick:function(){return F(1)}},"Raise bid by 1"),l.a.createElement("div",{className:"dropdown-option",onClick:function(){return F(-1)}},"Lower bid by 1"),l.a.createElement("div",null,"Use Rascal of Roatan "),l.a.createElement("div",{className:"dropdown-option",onClick:function(){return U(10)}},"Bet 10 points"),l.a.createElement("div",{className:"dropdown-option",onClick:function(){return U(20)}},"Bet 20 points")))),a===s.Playing&&p===t&&v===k&&l.a.createElement("div",null,l.a.createElement("input",{placeholder:"Bonus",type:"number",style:{width:48},min:"0",step:"10",onChange:function(e){B(Number(e.target.value))}}))),a===s.Completed&&l.a.createElement(l.a.Fragment,null,w>0&&l.a.createElement("div",null,"Bonus: ",w),l.a.createElement("div",null,"Score: ",R),l.a.createElement("div",null,"Total: ",R+n)))}),m=n(3);m.a.initialize("UA-166808776-1");var p=function(e){var t=e.cardCount,n=e.players,a=e.prevRoundScores,c=e.currentRound,o=e.roundCompleteAction,u=e.winningPlayers,p=e.startingPlayer,y=e.legendaryExpansionInPlay,g=Object(r.useState)(c<t?s.NotYet:c===t?s.Bidding:s.Completed),b=Object(i.a)(g,2),E=b[0],f=b[1],v=Object(r.useState)({}),h=Object(i.a)(v,2),S=h[0],O=h[1],k=Object(r.useState)(!1),j=Object(i.a)(k,2),C=j[0],P=j[1],w=Object(r.useState)(0),B=Object(i.a)(w,2),N=B[0],A=B[1],x=function(e,t){S[e]=t,O(S);var a=!0,r=0;n.forEach((function(e){void 0===S[e]?a=!1:r+=S[e]})),P(a),A(r)},R=Object(r.useState)({}),I=Object(i.a)(R,2),F=I[0],K=I[1],_=function(e,t){F[e]=t,K(F)};Object(r.useEffect)((function(){f(c<t?s.NotYet:c===t?s.Bidding:s.Completed)}),[t,c]);var M=Object(r.useState)(0),J=Object(i.a)(M,2),U=J[0],W=J[1],Y=function(){W(U+1)},G=Object(r.useState)(!1),z=Object(i.a)(G,2),L=z[0],H=z[1];return l.a.createElement("tr",{className:"Round"},l.a.createElement("td",{key:"cardCount"},t,!C&&c===t&&l.a.createElement("div",null,"Enter bids")),n.map((function(e){return l.a.createElement(d,{key:e+t,cardCount:t,trickPlayedAction:Y,tricksPlayed:U,prevRoundScore:a&&a[e]?a[e]:0,roundMode:E,player:e,recordBid:x,recordScore:_,winning:u.includes(e)&&t===c-1,startingPlayer:p===e,legendaryExpansionInPlay:y})})),l.a.createElement("td",{style:{width:50,border:"none"}},E===s.Bidding&&C&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){f(s.Playing),1===c&&m.a.event({action:"game_started",category:"game_activity",label:"Players: "+n})}},"Start Round"),l.a.createElement("div",{style:{width:100}},N===t?"Bids at par":N<t?"Bids "+(t-N)+" under":"Bids "+(N-t)+" over")),E===s.Playing&&U<t&&!L&&y&&l.a.createElement("button",{onClick:function(){H(!0),Y()}},"Kraken Played"),E===s.Playing&&U===t&&l.a.createElement("button",{onClick:function(){f(s.Completed),o(F)}},"Round done")))};n(19);m.a.initialize("UA-166808776-1");var y=function(e){var t=e.players,n=e.deletePlayerAction,a=e.startGameAction,c=e.legendaryExpansionInPlay,o=Object(r.useState)(1),u=Object(i.a)(o,2),s=u[0],d=u[1],y=Object(r.useState)([]),g=Object(i.a)(y,2),b=g[0],E=g[1],f=Object(r.useState)([]),v=Object(i.a)(f,2),h=v[0],S=v[1],O=function(e){1===s&&a(),b[s]=e,E(b),10===s?m.a.event({action:"game_completed",category:"game_activity",label:"Winners: "+h+" Scores: "+b[s]}):d(s+1)},k=Object(r.useState)(0),j=Object(i.a)(k,2),C=j[0],P=j[1];return Object(r.useEffect)((function(){var e=0;if(s>1){var t=s-1;for(var n in b[t])b[t][n]>e?(h=[n],e=b[t][n]):b[t][n]===e&&h.push(n);S(h)}}),[b,s]),l.a.createElement(l.a.Fragment,null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Round"),t.map((function(e){return l.a.createElement("th",{key:e,title:1===s?"Click here to make this the starting player":"",onClick:function(){return function(e){if(1===s){var n=0,a={};t.forEach((function(e){a[e]=n++})),P(a[e])}}(e)}},e,"\xa0",1===s&&l.a.createElement("button",{onClick:function(){n(e)}},"\u2717"))})))),l.a.createElement("tbody",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return l.a.createElement(p,{key:e,cardCount:e,players:t,prevRoundScores:e>1?b[e-1]:null,currentRound:s,roundCompleteAction:O,winningPlayers:h,startingPlayer:t[(C+e-1)%t.length],legendaryExpansionInPlay:c})})))))};var g=function(){var e=localStorage.getItem("players"),t=["Player 1","Player 2","Player 3"];e&&(t=JSON.parse(e));var n=Object(r.useState)(t),a=Object(i.a)(n,2),c=a[0],o=a[1],u=Object(r.useState)(""),s=Object(i.a)(u,2),d=s[0],m=s[1],p=Object(r.useState)(!1),g=Object(i.a)(p,2),b=g[0],E=g[1],f=Object(r.useState)(!1),v=Object(i.a)(f,2),h=v[0],S=v[1],O=Object(r.useState)("true"===localStorage.getItem("legendaryExpansionInPlay")),k=Object(i.a)(O,2),j=k[0],C=k[1];return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-body"},l.a.createElement("h1",null,"Ye New Skull King Scoresheet"),!b&&!h&&l.a.createElement("div",null,l.a.createElement("input",{id:"legendary_expansion_cb",type:"checkbox",checked:j,onChange:function(e){C(!j),localStorage.setItem("legendaryExpansionInPlay",String(!j))},title:"Adds support for the Kraken and Harry the Giant cards"}),l.a.createElement("label",{htmlFor:"legendary_expansion_cb"},"Use Legendary Expansion"),l.a.createElement("button",{onClick:function(){E(!0)}},"Add player")),b&&l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"text",placeholder:"name",onChange:function(e){m(e.target.value)}}),l.a.createElement("button",{onClick:function(){c.push(d),o(c),E(!1),localStorage.setItem("players",JSON.stringify(c))}},"OK")),l.a.createElement(y,{players:c,deletePlayerAction:function(e){o(c.filter((function(t){return t!==e}))),localStorage.setItem("players",JSON.stringify(c.filter((function(t){return t!==e}))))},startGameAction:function(){S(!0)},legendaryExpansionInPlay:j}),l.a.createElement("br",null),l.a.createElement("div",{style:{fontSize:11}},"\xa9 2020 Craig Fisher ",l.a.createElement("a",{href:"https://twitter.com/craigfis"},"@craigfis"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/Craigfis/SkullKingScorer"},"https://github.com/Craigfis/SkullKingScorer"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.grandpabecksgames.com/products-skull-king"},"What is Skull King?"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.b9be22e2.chunk.js.map