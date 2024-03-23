/*! For license information please see 7549.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7549],{"32541":function(e,n,t){t.d(n,{"Z":function(){return d}});var a=t(3799),r=t(32461),s=t(53202),o=t(28673),i=t(66306),p=t(98612),l=t(955),c=t(65169),d=function(e){(0,s.Z)(ComponentState,e);var n=(0,o.Z)(ComponentState);function ComponentState(){return(0,a.Z)(this,ComponentState),n.apply(this,arguments)}return(0,r.Z)(ComponentState,[{"key":"render","value":function render(){return(0,c.jsxs)(l.View,{"className":"page-state","children":[(0,c.jsxs)(l.View,{"className":"page-state-platform","children":["组件类型：",this.props.platform]}),(0,c.jsxs)(l.View,{"className":"page-state-rate","children":["适配进度：",this.props.rate,"%"]})]})}}]),ComponentState}(p.Component);(0,i.Z)(d,"options",{"addGlobalClass":!0})},"6575":function(e,n,t){t.d(n,{"Z":function(){return d}});var a=t(3799),r=t(32461),s=t(53202),o=t(28673),i=t(66306),p=t(98612),l=t(955),c=t(65169),d=function(e){(0,s.Z)(Header,e);var n=(0,o.Z)(Header);function Header(){return(0,a.Z)(this,Header),n.apply(this,arguments)}return(0,r.Z)(Header,[{"key":"render","value":function render(){return(0,c.jsxs)(l.View,{"className":"page-head","children":[(0,c.jsx)(l.View,{"className":"page-head-title","children":this.props.title}),(0,c.jsx)(l.View,{"className":"page-head-line"}),this.props.desc?(0,c.jsx)(l.View,{"className":"page-head-desc","children":this.props.desc}):null]})}}]),Header}(p.Component);(0,i.Z)(d,"options",{"addGlobalClass":!0})},"17549":function(e,n,t){t.r(n),t.d(n,{"default":function(){return f}});var a=t(3799),r=t(32461),s=t(53202),o=t(28673),i=t(98612),p=t(955),l=t(6575),c=t(32541),d=t(65169),f=function(e){(0,s.Z)(PageView,e);var n=(0,o.Z)(PageView);function PageView(){return(0,a.Z)(this,PageView),n.apply(this,arguments)}return(0,r.Z)(PageView,[{"key":"render","value":function render(){return(0,d.jsxs)(p.View,{"className":"components-page","children":[(0,d.jsxs)(p.View,{"className":"components-page__header","children":[(0,d.jsx)(l.Z,{"title":"Video"}),(0,d.jsx)(c.Z,{"platform":"H5","rate":"100","children":" "})]}),(0,d.jsx)(p.View,{"className":"components-page__body","style":{"marginTop":"100px"},"children":(0,d.jsx)(p.View,{"className":"components-page__body-example example","children":(0,d.jsx)(p.View,{"className":"example-body","children":(0,d.jsx)(p.Video,{"style":{"height":"300px","marginTop":"100px"},"src":"https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400","controls":!0,"autoplay":!1,"initialTime":"0","id":"video","loop":!1,"muted":!1})})})})]})}}]),PageView}(i.Component)},"55001":function(e,n,t){var a=t(98612),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,t){var a,s={},l=null,c=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,a)&&!p.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{"$$typeof":r,"type":e,"key":l,"ref":c,"props":s,"_owner":i.current}}n.Fragment=s,n.jsx=q,n.jsxs=q},"65169":function(e,n,t){e.exports=t(55001)}}]);