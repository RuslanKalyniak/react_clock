(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/1.16f6975a.jpeg"},function(e,t,n){e.exports=n.p+"static/media/3.90992eaa.jpg"},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),l=n.n(o),r=n(1),i=n(2),s=n(4),u=n(3),m=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date}),console.log(this.state.date.toLocaleTimeString())}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,this.state.date.toLocaleTimeString()))}}]),n}(c.a.Component)),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={clockName:"Random name",hiddenClock:!1,hint:!0},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var n="The Clock was renamed from ".concat(t.name,"\n    to ").concat(this.state.name);t.name!==this.state.name&&console.log(n)}},{key:"render",value:function(){var e=this,t=this.state,a=t.clockName,o=t.hiddenClock,l=t.hint;return c.a.createElement("div",{className:"mainBox"},c.a.createElement("div",{className:"spinner-border text-danger",hidden:!o}),c.a.createElement("h1",null,!o&&c.a.createElement(m,null)),c.a.createElement("span",{hidden:o},"Name clock:",c.a.createElement("h2",null,a)),c.a.createElement("div",{className:"alert alert-success",hidden:!o},"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0441\u0442\u0430\u0440\u0442, \u0449\u043e\u0431 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0438 \u0433\u043e\u0434\u0438\u043d\u043d\u0438\u043a.",c.a.createElement("img",{src:n(13),alt:"logo"})),c.a.createElement("button",{type:"button",className:"btn btn-danger margin",onClick:function(){e.setState({hiddenClock:!0})}},"STOP/HIDE"),c.a.createElement("button",{type:"button",className:"btn btn-success margin",onClick:function(){e.setState({hiddenClock:!1})}},"START/SHOW"),c.a.createElement("button",{type:"button",className:"btn btn-light margin",onClick:function(){e.setState({clockName:Math.random().toString(36).substring(7)})},onMouseEnter:function(){e.setState({hint:!1})},onMouseLeave:function(){e.setState({hint:!0})}},"CHAGE NAME"),c.a.createElement("div",null,c.a.createElement("div",null),c.a.createElement("img",{src:n(14),alt:"logo",className:"denus",hidden:l})))}}]),a}(c.a.Component);l.a.render(c.a.createElement(d,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.ee850c7d.chunk.js.map