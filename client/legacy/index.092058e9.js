import{r as t,u as n,_ as r,a,b as e,c,i as s,s as u,d as o,S as i,f,t as p,j as l,k as h,l as v,g as d,n as y,o as m,v as x,w as R,p as j}from"./client.7a491251.js";function E(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,c=a(t);if(n){var s=a(this).constructor;r=Reflect.construct(c,arguments,s)}else r=c.apply(this,arguments);return e(this,r)}}function g(t){var n,r,a,e,c=JSON.stringify(t[0],null,2)+"";return{c:function(){n=f("div"),r=f("pre"),a=f("code"),e=p(c)},l:function(t){n=l(t,"DIV",{});var s=h(n);r=l(s,"PRE",{});var u=h(r);a=l(u,"CODE",{});var o=h(a);e=v(o,c),o.forEach(d),u.forEach(d),s.forEach(d)},m:function(t,c){y(t,n,c),m(n,r),m(r,a),m(a,e)},p:function(t,n){1&x(n,1)[0]&&c!==(c=JSON.stringify(t[0],null,2)+"")&&R(e,c)},i:j,o:j,d:function(t){t&&d(n)}}}function D(t,n){return S.apply(this,arguments)}function S(){return(S=t(n.mark((function t(r,a){var e,c,s,u;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.params.path,c="".concat(e.join("/"),".json"),t.next=4,this.fetch(c);case 4:return s=t.sent,t.next=7,s.json();case 7:return u=t.sent,t.abrupt("return",{data:u});case 9:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function w(t,n,r){var a=n.data;return t.$set=function(t){"data"in t&&r(0,a=t.data)},[a]}var O=function(t){r(a,i);var n=E(a);function a(t){var r;return c(this,a),r=n.call(this),s(o(r),t,w,g,u,{data:0}),r}return a}();export default O;export{D as preload};
