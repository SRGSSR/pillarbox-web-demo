var o=(t,r,e)=>{if(!r.has(t))throw TypeError("Cannot "+e)};var a=(t,r,e)=>(o(t,r,"read from private field"),e?e.call(t):r.get(t)),i=(t,r,e)=>{if(r.has(t))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(t):r.set(t,e)},u=(t,r,e,n)=>(o(t,r,"write to private field"),n?n.call(t,e):r.set(t,e),e);var d=(t,r,e)=>(o(t,r,"access private method"),e);import{p}from"./core-demo-header-component-DMYgftkn.js";const b=p.getPlugin("plugin");var s,c,m,l,g;class w extends b{constructor(e,n){super(e,n);i(this,c);i(this,l);i(this,s,void 0);this.player.ready(()=>d(this,c,m).call(this)),this.player.on("srgssr/chapter",({data:h})=>d(this,l,g).call(this,h))}}s=new WeakMap,c=new WeakSet,m=function(){u(this,s,this.player.getChild("ControlBar").addChild("component",{id:"current-chapter",className:"pbw-current-chapter vjs-hidden"}));const e=document.createElement("img");e.className="pbw-chapter-thumbnail";const n=document.createElement("span");n.className="pbw-chapter-title",a(this,s).el().appendChild(e),a(this,s).el().appendChild(n),a(this,s).updateData=(h,C)=>{n.textContent=C,e.src=h}},l=new WeakSet,g=function(e){if(!e){a(this,s).hide();return}const n=JSON.parse(e.text);a(this,s).updateData(n.imageUrl,n.title),a(this,s).show()};p.registerPlugin("currentChapter",w);const y=p("video-element-id",{plugins:{currentChapter:!0}});y.src({src:"urn:rts:video:10894383",type:"srgssr/urn"});document.querySelector("#close-btn").addEventListener("click",()=>{window.close()});window.pillarbox=p;
//# sourceMappingURL=chapters-DKzSmFs4.js.map
