var m=(e,o,t)=>{if(!o.has(e))throw TypeError("Cannot "+t)};var i=(e,o,t)=>(m(e,o,"read from private field"),t?t.call(e):o.get(e)),c=(e,o,t)=>{if(o.has(e))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(e):o.set(e,t)},a=(e,o,t,l)=>(m(e,o,"write to private field"),l?l.call(e,t):o.set(e,t),t);var p=(e,o,t)=>(m(e,o,"access private method"),t);import{p as g}from"./core-demo-header-component-DMYgftkn.js";const N=g.getPlugin("plugin");var n,s,r,u,d,b;class S extends N{constructor(t,l){super(t,l);c(this,r);c(this,d);c(this,n,void 0);c(this,s,void 0);this.player.ready(()=>p(this,r,u).call(this)),this.player.on("srgssr/blocked-segment",({data:h})=>p(this,d,b).call(this,h))}get options(){return this.player.options().plugins.blockedSegmentNotification}}n=new WeakMap,s=new WeakMap,r=new WeakSet,u=function(){a(this,n,k.addChild("component",{className:"pbw-blocked-segment-notification vjs-hidden"}))},d=new WeakSet,b=async function(t){clearTimeout(i(this,s));const h=JSON.parse(t.text).blockReason??"UNKNOWN",y=i(this,n).localize(h);i(this,n).el().textContent=`ⓘ ${y}`,i(this,n).show(),a(this,s,setTimeout(()=>{i(this,n).hide(),a(this,s,void 0)},this.options.delay))};g.registerPlugin("blockedSegmentNotification",S);const k=g("video-element-id",{plugins:{blockedSegmentNotification:{delay:5e3}}});k.src({src:"urn:rts:video:10894383",type:"srgssr/urn"});document.querySelector("#close-btn").addEventListener("click",()=>{window.close()});window.pillarbox=g;
//# sourceMappingURL=blocked-segment-xkGGROY4.js.map
