(this.webpackJsonptzbutton=this.webpackJsonptzbutton||[]).push([[0],{151:function(e,t){},249:function(e,t,n){e.exports=n.p+"static/media/tzbutton-logo-pressed.83915e22.svg"},250:function(e,t,n){e.exports=n.p+"static/media/tzbutton-logo-unpressed.45024e1f.svg"},252:function(e,t,n){e.exports=n.p+"static/media/timeline.1485c219.png"},253:function(e,t,n){e.exports=n.p+"static/media/thanos-logo.b7b68acd.svg"},291:function(e,t,n){e.exports=n(552)},296:function(e,t,n){},297:function(e,t,n){},305:function(e,t){},307:function(e,t){},317:function(e,t){},319:function(e,t){},345:function(e,t){},347:function(e,t){},348:function(e,t){},354:function(e,t){},356:function(e,t){},374:function(e,t){},377:function(e,t){},393:function(e,t){},396:function(e,t){},471:function(e,t){},473:function(e,t){},552:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(38),c=n.n(o),l=(n(296),n(64)),i=n(95),s=n(101),u=n(100),m=(n(297),n(255)),h=n(12),d=n(17),p=n.n(d),E=n(28),b=n(242),f=n(571),w=n(42),g=n(560),y=n(561),x=n(562),v=n(563),T=n(564),k=n(558),O=function(e,t){return r.a.createElement(k.a,{href:t,isExternal:!0},e)},I=n(133),A=n(34),N=n(7),z="KT1L5XZbKeMXFDJuwr1zcFzkamTWf7kk6LRd",S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"".concat(new N.BigNumber("200000").shiftedBy(-6).times(e).toFixed()," ").concat("XTZ")},R=function(){var e=Object(E.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new I.a({name:"TzButton"}),A.b.setWalletProvider(t),e.next=4,t.requestPermissions();case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(E.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return t=e.sent,e.next=5,t.client.requestOperation({operationDetails:[{kind:"transaction",amount:"200000",destination:z}]});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(E.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return e.next=4,A.b.wallet.at(z);case 4:return t=e.sent,e.next=7,t.methods.withdraw("").send();case 7:return n=e.sent,e.abrupt("return",n.opHash);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(E.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.b.contract.at(z);case 2:return t=e.sent,e.next=5,t.storage();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H="",W=function(){var e=Object(E.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("checking for updates"),e.next=3,A.b.rpc.getBlock();case 3:return t=e.sent,n=t.hash!==H&&t.operations[3].some((function(e){return e.contents.some((function(e){return e.kind===A.a.TRANSACTION&&e.destination===z}))})),H=t.hash,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return"https://tezblock.io/account/".concat(e)},D=function(){var e=Object(E.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open(F(),"_blank");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(E.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://better-call.dev/mainnet/".concat(z,"/code"),"_blank");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(E.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.b.tz.getBalance(z);case 2:return e.abrupt("return",e.sent.shiftedBy(-6).toString());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(E.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new I.a({name:"TzButton"}),e.next=3,n.client.getActiveAccount();case 3:return a=e.sent,e.abrupt("return",null!==(t=null===a||void 0===a?void 0:a.address)&&void 0!==t?t:"");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=new N.BigNumber(3).times(60).times(60).times(1e3),G=function(e){var t=new N.BigNumber(e).times(10).plus(2);return Y.plus(t).dividedBy(t)},_=function(e){for(var t=[[Math.floor(e/31536e3),"years"],[Math.floor(e%31536e3/86400),"days"],[Math.floor(e%31536e3%86400/3600),"hours"],[Math.floor(e%31536e3%86400%3600/60),"minutes"],[e%31536e3%86400%3600%60,"seconds"]],n="",a=0,r=t.length;a<r;a++)0!==t[a][0]&&(n+=" "+t[a][0]+" "+(1===t[a][0]?t[a][1].substr(0,t[a][1].length-1):t[a][1]));return n.trim()},U=n(249),Z=n.n(U),q=n(250),X=n.n(q),J=function(){return r.a.createElement("span",null,"The game is over!",r.a.createElement("br",null),r.a.createElement(f.a,{onClick:j,colorScheme:"green",size:"sm"},"Withdraw"))},K=function(){var e=Object(E.a)(p.a.mark((function e(t,n){var a,r,o,c,l,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("refreshing"),e.next=3,B();case 3:return a=e.sent,e.next=6,P();case 6:return r=e.sent,o=new Date(a.leadership_start_timestamp),c=a.countdown_milliseconds.div(1e3).toNumber(),l=new Date(o.getTime()+1e3*c),e.next=12,M();case 12:e.t0=e.sent,e.t1=a.leader,e.t2=o,e.t3=l,e.t4=c,e.t5=r,i={loaded:!0,potAmount:e.t0,leader:e.t1,leaderStartTime:e.t2,leaderEndTime:e.t3,countdownTime:e.t4,myAddress:e.t5},V=Promise.resolve(i),t(i),n&&n({position:"top",title:"New leader",description:"Someone just became the new leader and the countdown was reset.",status:"success",duration:6e3,isClosable:!0});case 22:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=new Promise((function(e,t){K(e)})),Q={loaded:!1,potAmount:"",leader:"",leaderStartTime:void 0,leaderEndTime:void 0,myAddress:"",countdownTime:0},$=function(){var e=Object(w.useToast)(),t=Object(a.useState)(Q),n=Object(h.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(!1),i=Object(h.a)(l,2),s=i[0],u=i[1],m=Object(a.useRef)();Object(a.useEffect)((function(){return console.log("setting up interval"),V.then(c),m.current=setInterval(Object(E.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W();case 2:t.sent&&K(c,e);case 4:case"end":return t.stop()}}),t)}))),1e4),function(){console.log("removing interval"),m.current&&clearInterval(m.current)}}),[e]);var d=O(o.leader,F(o.leader)),I=o.loaded?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{as:"h1",size:"xl",fontWeight:"semibold"},"TzButton"),r.a.createElement(y.a,{opacity:.7,fontSize:"xl",mt:"6"},"A social experiment on the Tezos blockchain."),r.a.createElement(y.a,{fontSize:"6xl"},o.leaderEndTime?r.a.createElement(b.a,{date:o.leaderEndTime,daysInHours:!0,zeroPadTime:2},r.a.createElement(J,null)):"Loading..."),r.a.createElement(x.b,{mt:"6",onClick:C},r.a.createElement("img",{style:{cursor:"pointer"},src:s?Z.a:X.a,onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},width:"200px",height:"200px",alt:"TzButton - click to participate"})),r.a.createElement(y.a,{mt:"6"},"Click the button to become the ",r.a.createElement("b",null,"new leader")," and reset the countdown to",r.a.createElement("br",null)," ",r.a.createElement("b",null,function(e,t){var n=new N.BigNumber(1e3*e),a=G(t),r=n.minus(a);return _(r.dividedBy(1e3).integerValue().toNumber())}(o.countdownTime,o.potAmount)),"."),r.a.createElement(v.a,{my:16}),r.a.createElement(y.a,{fontSize:"3xl"},"Pot Size ",r.a.createElement(y.a,{as:"b"},o.potAmount," XTZ")),o.leader===o.myAddress?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{fontSize:"6xl"},"You are the leader!"," ",r.a.createElement("span",{role:"img","aria-label":"Leader"},"\ud83e\udd47")),r.a.createElement(y.a,{fontSize:"xl"},d)):r.a.createElement(y.a,{fontSize:"xl"},r.a.createElement("span",{role:"img","aria-label":"Leader"},"\ud83e\udd47"," "),d),r.a.createElement(T.a,null,r.a.createElement(f.a,{mr:2,mt:8,onClick:D,colorScheme:"blue",size:"sm"},"History"),r.a.createElement(f.a,{mt:8,onClick:L,colorScheme:"blue",size:"sm"},"Contract")),r.a.createElement(y.a,{opacity:.7,mt:"10"},"Disclaimer: This is an experiment with an unaudited smart contract, consider the funds you send to the contract as lost."),r.a.createElement(y.a,{opacity:.7,mt:"10"},r.a.createElement(k.a,{href:"https://github.com/tzbutton/tzbutton-contract/issues/1",isExternal:!0},"Conclusion of Round 1"))):r.a.createElement(x.a,{my:50},"Loading...");return r.a.createElement(x.a,{mb:20},r.a.createElement(x.a,{as:"section",pt:24,pb:16},r.a.createElement(T.a,null,r.a.createElement(x.a,{maxW:"xl",mx:"auto",textAlign:"center"},I))))},ee=n(565),te=n(572),ne=n(567),ae=n(252),re=n.n(ae),oe=n(98),ce=n.n(oe),le=n(99),ie=n.n(le),se=n(253),ue=n.n(se),me=O("Beacon","https://www.walletbeacon.io/"),he=O("Taquito","https://tezostaquito.io/"),de=O('Reddit "The Button"',"https://www.reddit.com/r/thebutton/"),pe=function(){var e=[{title:"How does it work?",description:r.a.createElement(r.a.Fragment,null,"The TZButton experiment is controlled by a smart contract deployed on the Tezos blockchain. Whenever anyone presses the button three things will happen:",r.a.createElement(T.a,{mt:"3"},r.a.createElement(ee.b,null,r.a.createElement(ee.a,null,"You will add ",r.a.createElement("b",null,S())," to the smart contract\u2019s balance"),r.a.createElement(ee.a,null,"The address of the sender will become the leader"),r.a.createElement(ee.a,null,"The countdown is reset"))),r.a.createElement(y.a,{mt:"3"},"The address that is the leader after the countdown expired will be eligible to withdraw the total balance on the smart contract."),r.a.createElement("br",null),r.a.createElement("br",null),"Example:",r.a.createElement(te.a,{src:re.a,width:"100%"}),r.a.createElement(ee.b,null,r.a.createElement(ee.a,null,"Alice presses the button, ",r.a.createElement("b",null,S())," are now on the smart contract, the countdown is reset and the total time is reduced by ",r.a.createElement("b",null,"1 hour and 30 minutes"),", which means it's now counting down from ",r.a.createElement("b",null,"22 hours and 30 minutes"),"."),r.a.createElement(ee.a,null,r.a.createElement("b",null,"1 hour and 25 minutes")," before the countdown expires, Bob presses the button."," ",r.a.createElement("b",null,S(1))," are now in the smart contract, the countdown is reset and the total time is reduced by ",r.a.createElement("b",null,"45 minutes"),", which means it's now counting down from"," ",r.a.createElement("b",null,"21 hours and 45 minutes"),"."),r.a.createElement(ee.a,null,"Many people participate, the balance of the smart contract increases and the time each countdown lasts decreases, ",r.a.createElement("b",null,"but the countdown never hits 0"),". Each transaction adds another"," ",r.a.createElement("b",null,S()),", the balance grows to ",r.a.createElement("b",null,S(12099))," and the countdown resets to ",r.a.createElement("b",null,"9 hours and 1 minute"),"."),r.a.createElement(ee.a,null,r.a.createElement("b",null,"5 hours and 32 minutes")," before the countdown expires, Charlie presses the button,"," ",r.a.createElement("b",null,S(12100))," are now on the smart contract, the countdown is reset and the total time is reduced by only ",r.a.createElement("b",null,"around half a second"),", which means it's still counting down from"," ",r.a.createElement("b",null,"9 hours and 1 minute"),". The countdown now changes so little that it requires multiple transactions for the countdown to decrease another second."),r.a.createElement(ee.a,null,"No one presses the button for more than 9 hours and 1 minute. This means ",r.a.createElement("b",null,"Charlie is the winner"),"."),r.a.createElement(ee.a,null,"Charlie can now withdraw ",r.a.createElement("b",null,S(12100)),", because he was the leader when the countdown.")))},{title:"How to participate",description:r.a.createElement(r.a.Fragment,null,"Download a beacon compatible wallet and click the button.",r.a.createElement(T.a,{mt:"8"},r.a.createElement(ne.a,{spacing:"24px"},r.a.createElement(k.a,{href:"https://airgap.it/",isExternal:!0},r.a.createElement(te.a,{src:ce.a,width:"150px"})),r.a.createElement(k.a,{href:"https://chrome.google.com/webstore/detail/beacon-extension/gpfndedineagiepkpinficbcbbgjoenn",isExternal:!0},r.a.createElement(te.a,{src:ie.a,width:"150px"})),r.a.createElement(k.a,{href:"https://thanoswallet.com/",isExternal:!0},r.a.createElement(te.a,{src:ue.a,width:"150px"})))))},{title:"Why TzButton?",description:r.a.createElement(r.a.Fragment,null,"The experiment was inspired by \u201cthe Button\u201d (an experiment conducted with Reddit users ",de,"). Besides the fact that the behavior of the participating users will be automatically recorded on the blockchain and analyzed + published on this site, there are also other reasons why this experiment is interesting:",r.a.createElement(T.a,{mt:"3"},r.a.createElement(ee.c,null,r.a.createElement(ee.a,null,"It showcases how easy it is for dApps to interact securely with the Tezos blockchain using the existing libraries in the ecosystem (like ",me," and ",he,")"),r.a.createElement(ee.a,null,"It sets an incentive for security engineers to try to break and exploit the smart contract. This could mean two things:",r.a.createElement(ee.b,null,r.a.createElement(ee.a,null,"The contract and tooling used is secure and can be used as a reference for future applications."),r.a.createElement(ee.a,null,"A breach would be transparent and recorded on the blockchain, meaning the entire community would be able to learn from it."))),r.a.createElement(ee.a,null,"It provides to the community an open source boilerplate/project to create dApps on the Tezos Blockchain."))))}];return r.a.createElement(x.a,{bg:"gray.100",py:16},e.map((function(e,t){return r.a.createElement("span",{key:t},0!==t?r.a.createElement(v.a,{my:16}):"",r.a.createElement(T.a,null,r.a.createElement(g.a,{mb:4},e.title),e.description))})))},Ee=n(570),be=r.a.createElement(r.a.Fragment,null,"There are:",r.a.createElement("br",null),r.a.createElement(te.a,{src:"https://source.unsplash.com/collection/139386/",boxSize:"200"})),fe=function(e,t){return r.a.createElement(k.a,{href:t,isExternal:!0},e)},we=fe("AirGap","https://airgap.it/"),ge=fe("TzButton GitHub","https://github.com/tzbutton/tzbutton"),ye=[{title:"Are there any fees?",description:"The only fees are the transaction fees (gas cost to execute your transaction)."},{title:"Who developed TZButton?",description:r.a.createElement(r.a.Fragment,null,"TZButton was developed by members of the ",we," team during their free time.")},{title:"Can I press the button multiple times?",description:"Yes. Just keep in mind that every time the button is pressed, you will add ".concat(S()," to the balance and the countdown will be reset. So it does not make any sense to press it if you already are the leader.")},{title:"How is this project funded?",description:r.a.createElement(r.a.Fragment,null,"This project was created on a voluntary basis during our free time. We don't have any direct commercial motivation.",r.a.createElement("br",null),r.a.createElement("br",null),"The only thing that could be considered as a commercial motivation is that the contracts balance is delegated to the AirGap baker. All resulting baking rewards will be used to support open source software.")},{title:"Where can I find the source code of this project?",description:r.a.createElement(r.a.Fragment,null,"The entire project is released using the permissive MIT license, you can find the code on github:"," ",ge)},{title:"How can I participate in the experiment?",description:"In case you already have a beacon compatible wallet, you just have to press the button. In case you don't have a beacon compatible wallet yet, here are some guide how to set up one: coming soon"},{title:"How can I withdraw the balance?",description:"When the countdown expires the current button will become the withdraw button."},{title:"If I'm the leader and the countdown expires, how quickly do I need to withdraw the balance?",description:"No rush. You can take all the time you need, no one will be able to overwrite your leader position and you are the only one capable of withdrawing the funds."},{title:"Can't the contract owner withdraw the balance?",description:"No. The contract does not have such a function. Only the leader can withdraw the balance once the countdown expired."},{title:"Why are there no cat pictures on this site?",description:be},{title:"Can I pay more than ".concat(S(),"?"),description:"No, the contract will not allow you to pay more or less than ".concat(S(),".")},{title:"Can I pay less than ".concat(S(),"?"),description:"No, the contract will not allow you to pay more or less than ".concat(S(),".")},{title:"Is this dApp secure?",description:r.a.createElement(r.a.Fragment,null,"Probably not.",r.a.createElement("br",null),"Don't participate if you cannot afford to lose the 0.2 TZ you are sending to the contract.")}],xe=function(){return r.a.createElement(x.a,{as:"section",py:16},r.a.createElement(T.a,null,r.a.createElement(x.a,{maxW:"100%",mx:"auto"},r.a.createElement(g.a,{mb:4},"FAQs"),r.a.createElement(Ee.a,{allowToggle:!0},ye.map((function(e,t){return r.a.createElement(Ee.d,{key:t},r.a.createElement(Ee.b,null,r.a.createElement(x.a,{flex:"1",textAlign:"left"},e.title),r.a.createElement(Ee.c,null)),r.a.createElement(Ee.e,{pb:4},e.description))}))))))},ve=n(82),Te=n(568),ke={code:[{link:"https://github.com/tzbutton/tzbutton",name:"Frontend",icon:r.a.createElement(ve.b,null)},{link:"https://github.com/tzbutton/tzbutton-contract",name:"Contract",icon:r.a.createElement(ve.b,null)}],social:[{link:"https://twitter.com/airgap_it",name:"Twitter",icon:r.a.createElement(ve.c,null)}],contact:[{link:"mailto:hi@airgap.it",name:"Email",icon:r.a.createElement(ve.a,null)}]},Oe=function(){var e=Object(w.useColorMode)().colorMode;return console.log("colorMode",e),r.a.createElement(x.a,{as:"footer",bg:"gray.100",py:10,px:8},r.a.createElement(x.a,{maxW:"xl",mx:"auto"},r.a.createElement(Te.a,{wrap:"wrap",justify:"center"},r.a.createElement(ne.b,{textAlign:"center",my:4,w:["100%","50%","33%"]},r.a.createElement(y.a,{fontWeight:"900"},"Code"),ke.code.map((function(e,t){return r.a.createElement(k.a,{href:e.link,key:t,isExternal:!0,_hover:{textDecoration:"none"}},r.a.createElement(f.a,{variant:"ghost",leftIcon:e.icon,color:"gray.500"},e.name))}))),r.a.createElement(ne.b,{textAlign:"center",my:4,w:["100%","50%","33%"]},r.a.createElement(y.a,{fontWeight:"900"},"Social"),ke.social.map((function(e,t){return r.a.createElement(k.a,{href:e.link,key:t,isExternal:!0,_hover:{textDecoration:"none"}},r.a.createElement(f.a,{variant:"ghost",leftIcon:e.icon,color:"gray.500"},e.name))}))),r.a.createElement(ne.b,{textAlign:"center",my:4,w:["100%","50%","33%"]},r.a.createElement(y.a,{fontWeight:"900"},"Contact"),ke.contact.map((function(e,t){return r.a.createElement(k.a,{href:e.link,key:t,isExternal:!0,_hover:{textDecoration:"none"}},r.a.createElement(f.a,{variant:"ghost",leftIcon:e.icon,color:"gray.500"},e.name))})))),r.a.createElement(v.a,{borderColor:"gray.300",my:4}),r.a.createElement(T.a,null,r.a.createElement(ne.a,null,r.a.createElement(k.a,{href:"https://airgap.it/",isExternal:!0},r.a.createElement(te.a,{src:ce.a,width:"150px"})),r.a.createElement(k.a,{href:"https://walletbeacon.io/",isExternal:!0},r.a.createElement(te.a,{src:ie.a,width:"150px"})))),r.a.createElement(v.a,{borderColor:"gray.300",my:4}),r.a.createElement(T.a,null,r.a.createElement(y.a,{fontSize:"xs"},r.a.createElement(y.a,{as:"b"},"Disclaimer"),": This is an experiment, consider the funds you send to the contract as lost. No one forces you to participate."),r.a.createElement(y.a,{fontSize:"xs"},'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'))))},Ie=n(569),Ae=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(w.ChakraProvider,{theme:m.a},r.a.createElement(Ie.a,null),r.a.createElement(ne.b,{minH:"90vh"},r.a.createElement($,null),r.a.createElement(pe,null),r.a.createElement(xe,null)),r.a.createElement(Oe,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,n){e.exports=n.p+"static/media/airgap-logo.38eff924.svg"},99:function(e,t,n){e.exports=n.p+"static/media/beacon-logo.944018ec.svg"}},[[291,1,2]]]);
//# sourceMappingURL=main.31f6782c.chunk.js.map