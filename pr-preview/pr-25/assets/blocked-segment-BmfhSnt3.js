var h=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)};var n=(t,o,e)=>(h(t,o,"read from private field"),e?e.call(t):o.get(t)),l=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)},a=(t,o,e,c)=>(h(t,o,"write to private field"),c?c.call(t,e):o.set(t,e),e);var p=(t,o,e)=>(h(t,o,"access private method"),e);import{p as g}from"./core-demo-header-component-RoiX7w6o.js";/* empty css                        */const f=g.getPlugin("plugin");var i,s,r,u,d,m;class N extends f{constructor(e,c){super(e,c);l(this,r);l(this,d);l(this,i,void 0);l(this,s,void 0);this.player.ready(()=>p(this,r,u).call(this)),this.player.on("loadeddata",()=>p(this,d,m).call(this))}get options(){return this.player.options().plugins.blockedSegmentNotification}}i=new WeakMap,s=new WeakMap,r=new WeakSet,u=function(){a(this,i,k.addChild("component",{className:"pbw-blocked-segment-notification vjs-hidden"}))},d=new WeakSet,m=function(){const e=this.player.textTracks().getTrackById("srgssr-blocked-segments");e==null||e.on("cuechange",()=>{if(!e.activeCues.length)return;clearTimeout(n(this,s));const b=JSON.parse(e.activeCues[0].text).blockReason??"UNKNOWN",y=n(this,i).localize(b);n(this,i).el().textContent=`ⓘ ${y}`,n(this,i).show(),a(this,s,setTimeout(()=>{n(this,i).hide(),a(this,s,void 0)},this.options.delay))})};g.registerPlugin("blockedSegmentNotification",N);const k=g("video-element-id",{fill:!0,plugins:{blockedSegmentNotification:{delay:5e3}}});k.src({src:"urn:rts:video:10894383",type:"srgssr/urn"});document.querySelector("#close-btn").addEventListener("click",()=>{window.close()});window.pillarbox=g;
//# sourceMappingURL=blocked-segment-BmfhSnt3.js.map
