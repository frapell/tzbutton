(this.webpackJsonptzbutton=this.webpackJsonptzbutton||[]).push([[0],{155:function(e,t){},248:function(e,t,n){e.exports=n.p+"static/media/tzbutton-logo-pressed.83915e22.svg"},249:function(e,t,n){e.exports=n.p+"static/media/tzbutton-logo-unpressed.45024e1f.svg"},252:function(e,t,n){e.exports=n.p+"static/media/timeline.1485c219.png"},253:function(e,t,n){e.exports=n.p+"static/media/thanos-logo.b7b68acd.svg"},292:function(e,t,n){e.exports=n(553)},297:function(e,t,n){},298:function(e,t,n){},306:function(e,t){},308:function(e,t){},318:function(e,t){},320:function(e,t){},346:function(e,t){},348:function(e,t){},349:function(e,t){},355:function(e,t){},357:function(e,t){},375:function(e,t){},378:function(e,t){},394:function(e,t){},397:function(e,t){},472:function(e,t){},474:function(e,t){},553:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(40),c=n.n(o),l=(n(297),n(65)),i=n(95),s=n(101),u=n(100),m=(n(298),n(255)),h=n(26),d=n(560),p=n(561),E=n(562),b=n(563),f=n(564),w=n(42),g=function(){var e=Object(h.useColorMode)().toggleColorMode,t=Object(h.useColorModeValue)("dark","light"),n=Object(h.useColorModeValue)(w.d,w.e);return r.a.createElement(d.a,{w:"100%",h:"100%",padding:"1.5rem",align:"center",justify:"space-between"},r.a.createElement(p.a,{alignItems:"center",flexGrow:1}),r.a.createElement(d.a,{align:"center",color:"gray.400"},r.a.createElement(E.a,{spacing:"2"},r.a.createElement(b.a,{href:"https://t.me/TezosNotifierBot?start=tzbutton_KT1L5XZbKeMXFDJuwr1zcFzkamTWf7kk6LRd_TzButton",isExternal:!0},r.a.createElement(f.a,{size:"md",fontSize:"lg","aria-label":"Get notified about updates",variant:"ghost",color:"current",icon:r.a.createElement(w.a,null)})),r.a.createElement(b.a,{href:"https://github.com/AndreasGassmann/tztip.me",isExternal:!0},r.a.createElement(f.a,{size:"md",fontSize:"lg","aria-label":"Open on GitHub",variant:"ghost",color:"current",icon:r.a.createElement(w.c,null)})),r.a.createElement(f.a,{size:"md",fontSize:"lg","aria-label":"Switch to ".concat(t," mode"),variant:"ghost",color:"current",onClick:e,icon:r.a.createElement(n,null)}))))},y=n(12),v=n(17),x=n.n(v),T=n(29),k=n(247),O=n(256),z=n(565),I=n(566),A=n(567),S=n(568),N=function(e,t){return r.a.createElement(b.a,{href:t,isExternal:!0},e)},C=n(248),R=n.n(C),j=n(249),B=n.n(j),F=function(){var e=Object(a.useState)(!1),t=Object(y.a)(e,2),n=t[0],o=t[1];return r.a.createElement("img",{style:{cursor:"pointer"},src:n?R.a:B.a,onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},width:"200px",height:"200px",alt:"TzButton - click to participate"})},W=n(134),H=n(35),M=n(8),L="KT1L5XZbKeMXFDJuwr1zcFzkamTWf7kk6LRd",D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"".concat(new M.BigNumber("200000").shiftedBy(-6).times(e).toFixed()," ").concat("XTZ")},P=function(){var e=Object(T.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new W.a({name:"TzButton"}),H.b.setWalletProvider(t),e.next=4,t.requestPermissions();case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(T.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return t=e.sent,e.next=5,t.client.requestOperation({operationDetails:[{kind:"transaction",amount:"200000",destination:L}]});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(T.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return e.next=4,H.b.wallet.at(L);case 4:return t=e.sent,e.next=7,t.methods.withdraw("").send();case 7:return n=e.sent,e.abrupt("return",n.opHash);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(T.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.b.contract.at(L);case 2:return t=e.sent,e.next=5,t.storage();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y="",U=function(){var e=Object(T.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("checking for updates"),e.next=3,H.b.rpc.getBlock();case 3:return t=e.sent,n=t.hash!==Y&&t.operations[3].some((function(e){return e.contents.some((function(e){return e.kind===H.a.TRANSACTION&&e.destination===L}))})),Y=t.hash,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return"https://tezblock.io/account/".concat(e)},Z=function(){var e=Object(T.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open(V(),"_blank");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(T.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://better-call.dev/mainnet/".concat(L,"/code"),"_blank");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(T.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.b.tz.getBalance(L);case 2:return e.abrupt("return",e.sent.shiftedBy(-6).toString());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(T.a)(x.a.mark((function e(){var t,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new W.a({name:"TzButton"}),e.next=3,n.client.getActiveAccount();case 3:return a=e.sent,e.abrupt("return",null!==(t=null===a||void 0===a?void 0:a.address)&&void 0!==t?t:"");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=new M.BigNumber(3).times(60).times(60).times(1e3),Q=function(e){var t=new M.BigNumber(e).times(10).plus(2);return $.plus(t).dividedBy(t)},ee=function(e){for(var t=[[Math.floor(e/31536e3),"years"],[Math.floor(e%31536e3/86400),"days"],[Math.floor(e%31536e3%86400/3600),"hours"],[Math.floor(e%31536e3%86400%3600/60),"minutes"],[e%31536e3%86400%3600%60,"seconds"]],n="",a=0,r=t.length;a<r;a++)0!==t[a][0]&&(n+=" "+t[a][0]+" "+(1===t[a][0]?t[a][1].substr(0,t[a][1].length-1):t[a][1]));return n.trim()},te=function(){return r.a.createElement("span",null,"The game is over!",r.a.createElement("br",null),r.a.createElement(O.a,{onClick:_,colorScheme:"green",size:"sm"},"Withdraw"))},ne=function(){var e=Object(T.a)(x.a.mark((function e(t,n){var a,r,o,c,l,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("refreshing"),e.next=3,X();case 3:return a=e.sent,e.next=6,J();case 6:return r=e.sent,o=new Date(a.leadership_start_timestamp),c=a.countdown_milliseconds.div(1e3).toNumber(),l=new Date(o.getTime()+1e3*c),e.next=12,q();case 12:e.t0=e.sent,e.t1=a.leader,e.t2=o,e.t3=l,e.t4=c,e.t5=r,i={loaded:!0,potAmount:e.t0,leader:e.t1,leaderStartTime:e.t2,leaderEndTime:e.t3,countdownTime:e.t4,myAddress:e.t5},ae=Promise.resolve(i),t(i),n&&n({position:"top",title:"New leader",description:"Someone just became the new leader and the countdown was reset.",status:"success",duration:6e3,isClosable:!0});case 22:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ae=new Promise((function(e,t){ne(e)})),re={loaded:!1,potAmount:"",leader:"",leaderStartTime:void 0,leaderEndTime:void 0,myAddress:"",countdownTime:0},oe=function(){var e=Object(h.useToast)(),t=Object(a.useState)(re),n=Object(y.a)(t,2),o=n[0],c=n[1],l=Object(a.useRef)();Object(a.useEffect)((function(){return console.log("setting up interval"),ae.then(c),l.current=setInterval(Object(T.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:t.sent&&ne(c,e);case 4:case"end":return t.stop()}}),t)}))),1e4),function(){console.log("removing interval"),l.current&&clearInterval(l.current)}}),[e]);var i=N(o.leader,V(o.leader)),s=o.loaded?r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{as:"h1",size:"xl",fontWeight:"semibold"},"TzButton"),r.a.createElement(I.a,{opacity:.7,fontSize:"xl",mt:"6"},"A social experiment on the Tezos blockchain."),r.a.createElement(I.a,{fontSize:"6xl"},o.leaderEndTime?r.a.createElement(k.a,{date:o.leaderEndTime,daysInHours:!0,zeroPadTime:2},r.a.createElement(te,null)):"Loading..."),r.a.createElement(p.b,{mt:"6",onClick:G},r.a.createElement(F,null)),r.a.createElement(I.a,{mt:"6"},"Click the button to become the ",r.a.createElement("b",null,"new leader")," and reset the countdown to",r.a.createElement("br",null)," ",r.a.createElement("b",null,function(e,t){var n=new M.BigNumber(1e3*e),a=Q(t),r=n.minus(a);return ee(r.dividedBy(1e3).integerValue().toNumber())}(o.countdownTime,o.potAmount)),"."),r.a.createElement(A.a,{my:16}),r.a.createElement(I.a,{fontSize:"3xl"},"Pot Size ",r.a.createElement(I.a,{as:"b"},o.potAmount," XTZ")),o.leader===o.myAddress?r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{fontSize:"6xl"},"You are the leader!"," ",r.a.createElement("span",{role:"img","aria-label":"Leader"},"\ud83e\udd47")),r.a.createElement(I.a,{fontSize:"xl"},i)):r.a.createElement(I.a,{fontSize:"xl"},r.a.createElement("span",{role:"img","aria-label":"Leader"},"\ud83e\udd47"," "),i),r.a.createElement(S.a,null,r.a.createElement(O.a,{mr:2,mt:8,onClick:Z,colorScheme:"blue",size:"sm"},"History"),r.a.createElement(O.a,{mt:8,onClick:K,colorScheme:"blue",size:"sm"},"Contract")),r.a.createElement(I.a,{opacity:.7,mt:"10"},"Disclaimer: This is an experiment with an unaudited smart contract, consider the funds you send to the contract as lost."),r.a.createElement(I.a,{opacity:.7,mt:"10"},r.a.createElement(b.a,{href:"https://github.com/tzbutton/tzbutton-contract/issues/1",isExternal:!0},"Conclusion of Round 1"))):r.a.createElement(p.a,{my:50},"Loading...");return r.a.createElement(p.a,{mb:20},r.a.createElement(p.a,{as:"section",pt:24,pb:16},r.a.createElement(S.a,null,r.a.createElement(p.a,{maxW:"xl",mx:"auto",textAlign:"center"},s))))},ce=n(569),le=n(574),ie=n(571),se=n(252),ue=n.n(se),me=n(98),he=n.n(me),de=n(99),pe=n.n(de),Ee=n(253),be=n.n(Ee),fe=N("Beacon","https://www.walletbeacon.io/"),we=N("Taquito","https://tezostaquito.io/"),ge=N('Reddit "The Button"',"https://www.reddit.com/r/thebutton/"),ye=function(){var e=Object(h.useColorModeValue)("gray.100","gray.100"),t=Object(h.useColorModeValue)("black","gray.800"),n=[{title:"How does it work?",description:r.a.createElement(r.a.Fragment,null,"The TZButton experiment is controlled by a smart contract deployed on the Tezos blockchain. Whenever anyone presses the button three things will happen:",r.a.createElement(S.a,{mt:"3"},r.a.createElement(ce.b,null,r.a.createElement(ce.a,null,"You will add ",r.a.createElement("b",null,D())," to the smart contract\u2019s balance"),r.a.createElement(ce.a,null,"The address of the sender will become the leader"),r.a.createElement(ce.a,null,"The countdown is reset"))),r.a.createElement(I.a,{mt:"3"},"The address that is the leader after the countdown expired will be eligible to withdraw the total balance on the smart contract."),r.a.createElement("br",null),r.a.createElement("br",null),"Example:",r.a.createElement(le.a,{src:ue.a,width:"100%"}),r.a.createElement(ce.b,null,r.a.createElement(ce.a,null,"Alice presses the button, ",r.a.createElement("b",null,D())," are now on the smart contract, the countdown is reset and the total time is reduced by ",r.a.createElement("b",null,"1 hour and 30 minutes"),", which means it's now counting down from ",r.a.createElement("b",null,"22 hours and 30 minutes"),"."),r.a.createElement(ce.a,null,r.a.createElement("b",null,"1 hour and 25 minutes")," before the countdown expires, Bob presses the button."," ",r.a.createElement("b",null,D(1))," are now in the smart contract, the countdown is reset and the total time is reduced by ",r.a.createElement("b",null,"45 minutes"),", which means it's now counting down from"," ",r.a.createElement("b",null,"21 hours and 45 minutes"),"."),r.a.createElement(ce.a,null,"Many people participate, the balance of the smart contract increases and the time each countdown lasts decreases, ",r.a.createElement("b",null,"but the countdown never hits 0"),". Each transaction adds another"," ",r.a.createElement("b",null,D()),", the balance grows to ",r.a.createElement("b",null,D(12099))," and the countdown resets to ",r.a.createElement("b",null,"9 hours and 1 minute"),"."),r.a.createElement(ce.a,null,r.a.createElement("b",null,"5 hours and 32 minutes")," before the countdown expires, Charlie presses the button,"," ",r.a.createElement("b",null,D(12100))," are now on the smart contract, the countdown is reset and the total time is reduced by only ",r.a.createElement("b",null,"around half a second"),", which means it's still counting down from"," ",r.a.createElement("b",null,"9 hours and 1 minute"),". The countdown now changes so little that it requires multiple transactions for the countdown to decrease another second."),r.a.createElement(ce.a,null,"No one presses the button for more than 9 hours and 1 minute. This means ",r.a.createElement("b",null,"Charlie is the winner"),"."),r.a.createElement(ce.a,null,"Charlie can now withdraw ",r.a.createElement("b",null,D(12100)),", because he was the leader when the countdown expired.")))},{title:"How to participate",description:r.a.createElement(r.a.Fragment,null,"Download a beacon compatible wallet and click the button.",r.a.createElement(S.a,{mt:"8"},r.a.createElement(E.a,{spacing:"24px"},r.a.createElement(b.a,{href:"https://airgap.it/",isExternal:!0},r.a.createElement(le.a,{src:he.a,width:"150px"})),r.a.createElement(b.a,{href:"https://chrome.google.com/webstore/detail/beacon-extension/gpfndedineagiepkpinficbcbbgjoenn",isExternal:!0},r.a.createElement(le.a,{src:pe.a,width:"150px"})),r.a.createElement(b.a,{href:"https://thanoswallet.com/",isExternal:!0},r.a.createElement(le.a,{src:be.a,width:"150px"})))),r.a.createElement(I.a,{mt:8},"Using the CLI (more advanced users)"),r.a.createElement(S.a,{mt:4},r.a.createElement(ie.a,{color:t},"$ tezos-client remember contract tzbutton KT1L5XZbKeMXFDJuwr1zcFzkamTWf7kk6LRd",r.a.createElement("br",null),"$ tezos-client transfer 0.2 from myalias to tzbutton")))},{title:"Why TzButton?",description:r.a.createElement(r.a.Fragment,null,"The experiment was inspired by \u201cthe Button\u201d (an experiment conducted with Reddit users ",ge,"). Besides the fact that the behavior of the participating users will be automatically recorded on the blockchain and analyzed + published on this site, there are also other reasons why this experiment is interesting:",r.a.createElement(S.a,{mt:"3"},r.a.createElement(ce.c,null,r.a.createElement(ce.a,null,"It showcases how easy it is for dApps to interact securely with the Tezos blockchain using the existing libraries in the ecosystem (like ",fe," and ",we,")"),r.a.createElement(ce.a,null,"It sets an incentive for security engineers to try to break and exploit the smart contract. This could mean two things:",r.a.createElement(ce.b,null,r.a.createElement(ce.a,null,"The contract and tooling used is secure and can be used as a reference for future applications."),r.a.createElement(ce.a,null,"A breach would be transparent and recorded on the blockchain, meaning the entire community would be able to learn from it."))),r.a.createElement(ce.a,null,"It provides to the community an open source boilerplate/project to create dApps on the Tezos Blockchain."))))}];return r.a.createElement(p.a,{bg:e,color:t,py:16},n.map((function(e,t){return r.a.createElement("span",{key:t},0!==t?r.a.createElement(A.a,{my:16}):"",r.a.createElement(S.a,null,r.a.createElement(z.a,{mb:4},e.title),e.description))})))},ve=n(573),xe=r.a.createElement(r.a.Fragment,null,"There are:",r.a.createElement("br",null),r.a.createElement(le.a,{src:"https://source.unsplash.com/collection/139386/",boxSize:"200"})),Te=function(e,t){return r.a.createElement(b.a,{href:t,isExternal:!0},e)},ke=Te("AirGap","https://airgap.it/"),Oe=Te("TzButton GitHub","https://github.com/tzbutton/tzbutton"),ze=[{title:"Are there any fees?",description:"The only fees are the transaction fees (gas cost to execute your transaction)."},{title:"Who developed TZButton?",description:r.a.createElement(r.a.Fragment,null,"TZButton was developed by members of the ",ke," team during their free time.")},{title:"Can I press the button multiple times?",description:"Yes. Just keep in mind that every time the button is pressed, you will add ".concat(D()," to the balance and the countdown will be reset. So it does not make any sense to press it if you already are the leader.")},{title:"How is this project funded?",description:r.a.createElement(r.a.Fragment,null,"This project was created on a voluntary basis during our free time. We don't have any direct commercial motivation.",r.a.createElement("br",null),r.a.createElement("br",null),"The only thing that could be considered as a commercial motivation is that the contracts balance is delegated to the AirGap baker. All resulting baking rewards will be used to support open source software.")},{title:"Where can I find the source code of this project?",description:r.a.createElement(r.a.Fragment,null,"The entire project is released using the permissive MIT license, you can find the code on github:"," ",Oe)},{title:"How can I participate in the experiment?",description:"In case you already have a beacon compatible wallet, you just have to press the button. In case you don't have a beacon compatible wallet yet, here are some guide how to set up one: coming soon"},{title:"How can I withdraw the balance?",description:"When the countdown expires the current button will become the withdraw button."},{title:"If I'm the leader and the countdown expires, how quickly do I need to withdraw the balance?",description:"No rush. You can take all the time you need, no one will be able to overwrite your leader position and you are the only one capable of withdrawing the funds."},{title:"Can't the contract owner withdraw the balance?",description:"No. The contract does not have such a function. Only the leader can withdraw the balance once the countdown expired."},{title:"Why are there no cat pictures on this site?",description:xe},{title:"Can I pay more than ".concat(D(),"?"),description:"No, the contract will not allow you to pay more or less than ".concat(D(),".")},{title:"Can I pay less than ".concat(D(),"?"),description:"No, the contract will not allow you to pay more or less than ".concat(D(),".")},{title:"Is this dApp secure?",description:r.a.createElement(r.a.Fragment,null,"Probably not.",r.a.createElement("br",null),"Don't participate if you cannot afford to lose the 0.2 XTZ you are sending to the contract.")}],Ie=function(){return r.a.createElement(p.a,{as:"section",py:16},r.a.createElement(S.a,null,r.a.createElement(p.a,{maxW:"100%",mx:"auto"},r.a.createElement(z.a,{mb:4},"FAQs"),r.a.createElement(ve.a,{allowToggle:!0},ze.map((function(e,t){return r.a.createElement(ve.d,{key:t},r.a.createElement(ve.b,null,r.a.createElement(p.a,{flex:"1",textAlign:"left"},e.title),r.a.createElement(ve.c,null)),r.a.createElement(ve.e,{pb:4},e.description))}))))))},Ae={code:[{link:"https://github.com/tzbutton/tzbutton",name:"Frontend",icon:r.a.createElement(w.c,null)},{link:"https://github.com/tzbutton/tzbutton-contract",name:"Contract",icon:r.a.createElement(w.c,null)}],social:[{link:"https://twitter.com/airgap_it",name:"Twitter",icon:r.a.createElement(w.f,null)}],contact:[{link:"mailto:hi@airgap.it",name:"Email",icon:r.a.createElement(w.b,null)}]},Se=function(){var e=Object(h.useColorModeValue)("gray.100","gray.100"),t=Object(h.useColorModeValue)("black","gray.800");return r.a.createElement(p.a,{as:"footer",bg:e,color:t,py:10,px:8},r.a.createElement(S.a,{maxW:"xl",mx:"auto"},r.a.createElement(d.a,{wrap:"wrap",justify:"center"},r.a.createElement(E.b,{my:4,w:["100%","50%","33%"]},r.a.createElement(I.a,{fontWeight:"900"},"Code"),Ae.code.map((function(e,t){return r.a.createElement(b.a,{href:e.link,key:t,isExternal:!0,_hover:{textDecoration:"none"}},r.a.createElement(O.a,{variant:"ghost",leftIcon:e.icon,color:"gray.500"},e.name))}))),r.a.createElement(E.b,{my:4,w:["100%","50%","33%"]},r.a.createElement(I.a,{fontWeight:"900"},"Social"),Ae.social.map((function(e,t){return r.a.createElement(b.a,{href:e.link,key:t,isExternal:!0,_hover:{textDecoration:"none"}},r.a.createElement(O.a,{variant:"ghost",leftIcon:e.icon,color:"gray.500"},e.name))}))),r.a.createElement(E.b,{my:4,w:["100%","50%","33%"]},r.a.createElement(I.a,{fontWeight:"900"},"Contact"),Ae.contact.map((function(e,t){return r.a.createElement(b.a,{href:e.link,key:t,isExternal:!0,_hover:{textDecoration:"none"}},r.a.createElement(O.a,{variant:"ghost",leftIcon:e.icon,color:"gray.500"},e.name))})))),r.a.createElement(A.a,{borderColor:"gray.300",my:4}),r.a.createElement(S.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,{href:"https://airgap.it/",isExternal:!0},r.a.createElement(le.a,{src:he.a,width:"150px"})),r.a.createElement(b.a,{href:"https://walletbeacon.io/",isExternal:!0},r.a.createElement(le.a,{src:pe.a,width:"150px"})))),r.a.createElement(A.a,{borderColor:"gray.300",my:4}),r.a.createElement(S.a,null,r.a.createElement(I.a,{fontSize:"xs"},r.a.createElement(I.a,{as:"b"},"Disclaimer"),": This is an experiment, consider the funds you send to the contract as lost. No one forces you to participate."),r.a.createElement(I.a,{fontSize:"xs"},'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'))))},Ne=n(572),Ce=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(h.ChakraProvider,{theme:m.a},r.a.createElement(Ne.a,null),r.a.createElement(g,null),r.a.createElement(E.b,{minH:"90vh"},r.a.createElement(oe,null),r.a.createElement(ye,null),r.a.createElement(Ie,null)),r.a.createElement(Se,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,n){e.exports=n.p+"static/media/airgap-logo.38eff924.svg"},99:function(e,t,n){e.exports=n.p+"static/media/beacon-logo.944018ec.svg"}},[[292,1,2]]]);
//# sourceMappingURL=main.a838b7d9.chunk.js.map