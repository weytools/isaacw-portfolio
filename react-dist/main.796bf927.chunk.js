(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},25:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),s=a.n(i),l=(a(22),a(3)),o=a(4),c=a(2),u=a(6),m=a(5),h=(a(23),a(14),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null))}}]),a}(r.a.Component)),d=function(){return r.a.createElement("div",{className:"button-grid"},r.a.createElement(v,null))},v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={squareCount:4,squareText:["Alpha","Bravo","Charlie","Delta"]},n.addSquare=n.addSquare.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"addSquare",value:function(){var e=document.getElementById("input-text").value;if(""!=e&&null!=e){var t=this.state.squareCount;t++;var a=this.state.squareText;console.log(a,typeof a),a.push(e),this.setState({squareCount:t,squareText:a})}else alert("Cannot be blank")}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.squareText.length;t++)e.push(r.a.createElement("div",{className:"bg-item"},r.a.createElement("div",{className:"bg-item-head"},t+1," out of ",this.state.squareCount),this.state.squareText[t]));return e.push(r.a.createElement("input",{className:"bg-item bg-item-head",id:"input-text",type:"text",placeholder:"Anonymous"})),e.push(r.a.createElement("button",{className:"bg-item",id:"input-button",onClick:this.addSquare},"Add")),e}}]),a}(r.a.Component),p=a(7),f=a.n(p),y=a(12),b=(a(25),a(30)),g=a(31),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).state={timerCount:0,catList:[]},n.decrementInterval=5e3,n.noteCountdownStart=5;var r=localStorage.getItem("catList");return r?n.loadSavedCats(r):(n.newCat(),n.newCat()),n.feedHandler=n.feedHandler.bind(Object(c.a)(n)),n.petHandler=n.petHandler.bind(Object(c.a)(n)),n.surrHandler=n.surrHandler.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"loadSavedCats",value:function(){var e=Object(y.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(t);case 2:a=e.sent,this.setState({catList:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"newCat",value:function(){var e=Object(y.a)(f.a.mark((function e(){var t,a,n,r,i,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.catList,a=this.getNewName(),n={hunger:10,love:10},r={message:"Just adopted!",timeout:this.noteCountdownStart},e.next=6,this.getNewImage();case 6:i=e.sent,s={name:a,levels:n,notes:[r],imageURL:i},t.push(s),this.setState({workingList:t});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNewName",value:function(){var e=["Liam","Olivia","Noah","Emma","Oliver","Ava","William","Sophia","Elijah","Isabella","James","Charlotte","Benjamin","Amelia","Lucas","Mia","Mason","Harper","Ethan","Evelyn","Alexander","Abigail","Henry","Emily","Jacob","Ella","Michael","Elizabeth","Daniel","Camila","Logan","Luna","Jackson","Sofia","Sebastian","Avery","Jack","Mila","Aiden","Aria","Owen","Scarlett","Samuel","Penelope","Matthew","Layla","Joseph","Chloe","Levi","Victoria","Mateo","Madison","David","Eleanor","John","Grace","Wyatt","Nora","Carter","Riley","Julian","Zoey","Luke","Hannah","Grayson","Hazel","Isaac","Lily","Jayden","Ellie","Theodore","Violet","Gabriel","Lillian","Anthony","Zoe","Dylan","Stella","Leo","Aurora","Lincoln","Natalie","Jaxon","Emilia","Asher","Everly","Christopher","Leah","Josiah","Aubrey","Andrew","Willow","Thomas","Addison","Joshua","Lucy","Ezra","Audrey","Hudson","Bella","Charles","Nova","Caleb","Brooklyn","Isaiah","Paisley","Ryan","Savannah","Nathan","Claire","Adrian","Skylar","Christian","Isla","Maverick","Genesis","Colton","Naomi","Elias","Elena","Aaron","Caroline","Eli","Eliana","Landon","Anna","Jonathan","Maya","Nolan","Valentina","Hunter","Ruby","Cameron","Kennedy","Connor","Ivy","Santiago","Ariana","Jeremiah","Aaliyah","Ezekiel","Cora","Angel","Madelyn","Roman","Alice","Easton","Kinsley","Miles","Hailey","Robert","Gabriella","Jameson","Allison","Nicholas","Gianna","Greyson","Serenity","Cooper","Samantha","Ian","Sarah","Carson","Autumn","Axel","Quinn","Jaxson","Eva","Dominic","Piper","Leonardo","Sophie","Luca","Sadie","Austin","Delilah","Jordan","Josephine","Adam","Nevaeh","Xavier","Adeline","Jose","Arya","Jace","Emery","Everett","Lydia","Declan","Clara","Evan","Vivian","Kayden","Madeline","Parker","Peyton","Wesley","Julia","Kai","Rylee"];return e[Math.floor(Math.random()*e.length)]}},{key:"getNewImage",value:function(){var e=Object(y.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thecatapi.com/v1/images/search");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=a[0].url,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"feedHandler",value:function(e){var t=this.state.catList;t[e].levels.hunger>=10?this.feedMax(e):t[e].levels.hunger++,this.setState({workingList:t})}},{key:"feedMax",value:function(e){var t=this.state.catList;t[e].notes.push({message:"I'm too full to eat!",timeout:this.noteCountdownStart}),this.setState({workingList:t})}},{key:"petHandler",value:function(e){var t=this.state.catList;10==t[e].levels.love?this.petMax(e):t[e].levels.love++,this.setState({workingList:t})}},{key:"petMax",value:function(e){var t=this.state.catList;t[e].notes.push({message:"I'm too loved to be pet!",timeout:this.noteCountdownStart}),this.setState({workingList:t})}},{key:"surrHandler",value:function(e){var t,a=this.state.catList;1==this.confirmSurrender(a[e].name)&&(t=a.slice(0,e).concat(a.slice(e+1,a.length)),console.log(t),this.setState({catList:t}))}},{key:"confirmSurrender",value:function(e){return window.confirm("Are you sure you want to surrender "+e+"?")}},{key:"componentDidMount",value:function(){var e=this;this.timerBase=setInterval((function(){return e.tick()}),1e3),this.statTimer=setInterval((function(){return e.decrementStats()}),this.decrementInterval)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerBase)}},{key:"componentDidUpdate",value:function(){localStorage.setItem("catList",JSON.stringify(this.state.catList))}},{key:"tick",value:function(){this.setState((function(e){return{timerCount:e.timerCount+1}})),this.noteTimeout()}},{key:"noteTimeout",value:function(){var e=this.state.catList;e.forEach((function(t,a){var n=t.notes.filter((function(e){return e.timeout>0}));n.forEach((function(e){return e.timeout--})),e[a].notes=n})),this.setState({catList:e})}},{key:"decrementStats",value:function(){var e=this.state.catList;e.forEach((function(e){e.levels={hunger:e.levels.hunger<=0?0:e.levels.hunger-1,love:e.levels.love<=0?0:e.levels.love-1}})),this.setState({catList:e})}},{key:"render",value:function(){var e=this,t=this.state.catList.map((function(t,a){return r.a.createElement("div",{className:"cat-card bg-dark rounded",key:a},r.a.createElement("div",{className:"cat-card header font mb-0"},t.name,r.a.createElement("br",null),r.a.createElement("img",{className:"cat-pic mb-2",src:t.imageURL,width:"150",height:"100"})),r.a.createElement("div",{className:"cat-card body text-primary text-left mt-0"},r.a.createElement("div",{className:"cat-card button-bar"},r.a.createElement(b.a,{size:"sm"},r.a.createElement(g.a,{color:"primary",className:"bb-item",onClick:function(){return e.feedHandler(a)}},"Feed"),r.a.createElement(g.a,{color:"info",className:"bb-item",onClick:function(){return e.petHandler(a)}},"Pet"),r.a.createElement(g.a,{color:"danger",className:"bb-item",onClick:function(){return e.surrHandler(a)}},"Surrender"))),r.a.createElement("div",{className:"stats text-primary"},r.a.createElement(k,{stat:"Hunger",level:t.levels.hunger}),r.a.createElement(k,{stat:"Love",level:t.levels.love}),r.a.createElement(C,{notes:t.notes})),r.a.createElement("div",{className:"cat-card footer text-secondary text-center"},"Cat ",a+1," out of ",e.state.catList.length)))})),a=r.a.createElement("div",{className:"text-light lead m-4"},"Cat stats decrement every ",r.a.createElement("span",{className:"text-warning"},this.decrementInterval/1e3)," seconds!",r.a.createElement("p",null,"Keep your kitties happy!")),n=r.a.createElement("div",{className:"\r px-2 text-light\r d-flex align-items-center"},r.a.createElement(g.a,{color:"success",onClick:function(){return e.newCat()}},"Adopt New Cat"),r.a.createElement("div",{className:" h-100 pr-1 mx-2"}),r.a.createElement("div",{className:"text-warning bg-dark p-2 rounded my-2"},"Time Elapsed: ",this.state.timerCount));return r.a.createElement("div",{className:"master-container"},r.a.createElement("div",{className:"gutter"}),r.a.createElement("div",{className:"cat-container"},a,r.a.createElement("div",{className:"break"}),n,r.a.createElement("div",{className:"break"}),t,r.a.createElement("div",{className:"break"})),r.a.createElement("div",{className:"gutter"}))}}]),a}(r.a.Component),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e;return e=this.props.level>=7?"text-success":this.props.level>=4?"text-warning":"text-danger",r.a.createElement("div",{className:e},this.props.stat,": ",this.props.level,"/10")}}]),a}(r.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={visible:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.notes.map((function(e,t){return r.a.createElement("p",{key:t},e.message)}));return r.a.createElement("div",null,e)}}]),a}(r.a.Component);var N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={appIndex:1},n.appList=[r.a.createElement(h,null),r.a.createElement(E,null)],n.changeApp=n.changeApp.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"changeApp",value:function(){var e=this.state.appIndex+1;e==this.appList.length&&(e=0),this.setState({appIndex:e})}},{key:"render",value:function(){var e=this.appList[this.state.appIndex];return console.log("current: "+e),r.a.createElement("div",{className:"playground"},e,r.a.createElement(g.a,{outline:!0,color:"primary",size:"lg",className:"mt-5 px-5",onClick:this.changeApp},"Switch App"))}}]),a}(r.a.Component),S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(28);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.796bf927.chunk.js.map