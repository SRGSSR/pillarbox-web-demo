var h=(t,r,e)=>{if(!r.has(t))throw TypeError("Cannot "+e)};var s=(t,r,e)=>(h(t,r,"read from private field"),e?e.call(t):r.get(t)),i=(t,r,e)=>{if(r.has(t))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(t):r.set(t,e)},d=(t,r,e,a)=>(h(t,r,"write to private field"),a?a.call(t,e):r.set(t,e),e);var o=(t,r,e)=>(h(t,r,"access private method"),e);import{p}from"./core-demo-header-component-BT_wCgVp.js";/* empty css                        */const y=p.getPlugin("plugin");var n,c,u,l,m;class b extends y{constructor(e,a){super(e,a);i(this,c);i(this,l);i(this,n,void 0);this.player.ready(()=>o(this,c,u).call(this)),this.player.on("loadeddata",()=>o(this,l,m).call(this))}}n=new WeakMap,c=new WeakSet,u=function(){d(this,n,this.player.getChild("ControlBar").addChild("component",{id:"current-chapter",className:"pbw-current-chapter vjs-hidden"}));const e=document.createElement("img");e.className="pbw-chapter-thumbnail";const a=document.createElement("span");a.className="pbw-chapter-title",s(this,n).el().appendChild(e),s(this,n).el().appendChild(a),s(this,n).updateData=(g,C)=>{a.textContent=C,e.src=g}},l=new WeakSet,m=function(){const e=this.player.textTracks().getTrackById("srgssr-chapters");e==null||e.on("cuechange",()=>{if(!e.activeCues.length){s(this,n).hide();return}const a=JSON.parse(e.activeCues[0].text);s(this,n).updateData(a.imageUrl,a.title),s(this,n).show()})};p.registerPlugin("currentChapter",b);const w=p("video-element-id",{fill:!0,plugins:{currentChapter:!0}});w.src({src:"urn:rts:video:10894383",type:"srgssr/urn"});document.querySelector("#close-btn").addEventListener("click",()=>{window.close()});window.pillarbox=p;
//# sourceMappingURL=chapters-Ce2WIsOv.js.map
