(this.webpackJsonpbasic2=this.webpackJsonpbasic2||[]).push([[0],[,,,,,,,function(t,e,a){t.exports=a.p+"static/media/0.f06df755.jpg"},function(t,e,a){t.exports=a.p+"static/media/1.ca6c10d5.jpg"},function(t,e,a){t.exports=a.p+"static/media/2.1dc76568.jpg"},function(t,e,a){t.exports=a.p+"static/media/3.837148ce.jpg"},function(t,e,a){t.exports=a.p+"static/media/4.db9097e8.jpg"},function(t,e,a){t.exports=a.p+"static/media/5.fbff4784.jpg"},function(t,e,a){t.exports=a.p+"static/media/6.c4ea9528.jpg"},function(t,e,a){t.exports=a.p+"static/media/7.62a781c8.jpg"},function(t,e,a){t.exports=a.p+"static/media/8.0f8ca81e.jpg"},function(t,e,a){t.exports=a.p+"static/media/9.1b557aa7.jpg"},function(t,e,a){t.exports=a.p+"static/media/10.c80394c2.jpg"},function(t,e,a){t.exports=a(27)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(6),s=a.n(i),c=(a(23),a(2)),o=a(1),u=a(4),l=a(3),m=a(7),h=a.n(m),p=a(8),d=a.n(p),f=a(9),g=a.n(f),v=a(10),k=a.n(v),w=a(11),b=a.n(w),j=a(12),y=a.n(j),x=a(13),C=a.n(x),E=a(14),W=a.n(E),O=a(15),N=a.n(O),S=a(16),A=a.n(S),I=a(17),M=a.n(I),P=(a(24),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("img",{className:"HangmanImg",src:this.props.imgArr[this.props.img_num],alt:"img1"})}}]),a}(n.Component));P.defaultProps={imgArr:[h.a,d.a,g.a,k.a,b.a,y.a,C.a,W.a,N.a,A.a,M.a]};var G=P,B=["apple","java","python","ruby","scala","matlab","kotlin","go","swift","computer","program","execution","data","info","euro","knight","money","solution","solve","exe","like","dislike","comment","love","ap","etc","luck","best"],H=(a(25),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;Object(c.a)(this,a),n=e.call(this,t);var r=B[Math.floor(Math.random()*B.length)];return n.state={word:r,img:10-r.length,currentWord:n.makeInitialWord(r),leftChance:r.length-1,win:!1,guess:new Set},n}return Object(o.a)(a,[{key:"makeInitialWord",value:function(t){for(var e="",a=0;a<t.length;a++)e+="*";return e}}]),Object(o.a)(a,[{key:"restart",value:function(){var t=B[Math.floor(Math.random()*B.length)];this.setState({word:t,img:10-t.length,currentWord:this.makeInitialWord(t),leftChance:t.length-1,win:!1,guess:new Set})}},{key:"makeNewCurrentWord",value:function(t,e){for(var a=t.currentWord,n="",r=0;r<this.state.word.length;r++)this.state.word[r]===e?n+=e:n+=a[r];for(var i=0;i<n.length;i++)if("*"===n[i])return{currentWord:n,guess:t.guess.add(e)};return{currentWord:n,win:!0,guess:t.guess.add(e)}}},{key:"click",value:function(t,e){var a=this;this.state.win||-1===this.state.leftChance||(this.state.word.match(e)?this.setState((function(t){return a.makeNewCurrentWord(t,e)})):this.setState((function(t){return{leftChance:t.leftChance-1,img:t.img+1,guess:t.guess.add(e)}})))}},{key:"render",value:function(){for(var t=this,e=[],a=0;a<this.state.currentWord.length;a++)"*"===this.state.currentWord[a]&&-1===this.state.leftChance?e.push(r.a.createElement("p",{className:"red"},this.state.word[a])):e.push(r.a.createElement("p",null,this.state.currentWord[a]));return r.a.createElement("div",{className:"hangmangame"},r.a.createElement(G,{img_num:this.state.img}),r.a.createElement("p",{className:"msg"},-1===this.state.leftChance?"Game Over!":this.state.win?"Woww , You win!":"Guess left : ".concat(this.state.leftChance)),r.a.createElement("div",{className:"text"},e),r.a.createElement("div",{className:"keyboard"},this.props.keys.map((function(e){return r.a.createElement("button",{onClick:function(a){return t.click(a.target,e)},disabled:t.state.guess.has(e)},e)}))),r.a.createElement("button",{className:"restart",onClick:function(){return t.restart()}},-1===this.state.leftChance?"Play Again ? ":this.state.win?"Play Again ?":"Restart ?"))}}]),a}(n.Component));H.defaultProps={keys:"abcdefghijklmnopqrstuvwxyz".split("")};var J=H,_=(a(26),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Hangman Game!"),r.a.createElement(J,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.ec9f3320.chunk.js.map