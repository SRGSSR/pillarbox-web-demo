var d=(t,s,e)=>{if(!s.has(t))throw TypeError("Cannot "+e)};var c=(t,s,e)=>(d(t,s,"read from private field"),e?e.call(t):s.get(t)),n=(t,s,e)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,e)},u=(t,s,e,r)=>(d(t,s,"write to private field"),r?r.call(t,e):s.set(t,e),e);var p=(t,s,e)=>(d(t,s,"access private method"),e);import{p as i}from"./core-demo-header-component-76S4-KyJ.js";/* empty css                        */const m=i.getPlugin("plugin");var a,l,g,o,h;class v extends m{constructor(e,r){super(e,r);n(this,l);n(this,o);n(this,a,void 0);this.player.ready(()=>p(this,l,g).call(this)),this.player.on("loadeddata",()=>p(this,o,h).call(this))}}a=new WeakMap,l=new WeakSet,g=function(){u(this,a,this.player.addChild("button",{clickHandler:()=>{const r=this.player.textTracks().getTrackById("srgssr-intervals").activeCues[0];this.player.currentTime(r.endTime)},className:"pbw-skip-btn vjs-hidden vjs-visible-text",controlText:`${this.player.localize("skip")} >>`}))},o=new WeakSet,h=function(){const e=k.textTracks().getTrackById("srgssr-intervals");e==null||e.on("cuechange",()=>{if(!e.activeCues.length){c(this,a).hide();return}c(this,a).show()})};i.registerPlugin("skipButton",v);i.addLanguage("en",{skip:"Skip"});i.addLanguage("fr",{skip:"Passer"});i.addLanguage("de",{skip:"Überspringen"});i.addLanguage("it",{skip:"Saltare"});i.addLanguage("rm",{skip:"Sursiglir"});const k=i("video-element-id",{fill:!0,plugins:{skipButton:!0}});k.src({src:"urn:rts:video:14683290",type:"srgssr/urn"});document.querySelector("#close-btn").addEventListener("click",()=>{window.close()});window.pillarbox=i;
//# sourceMappingURL=skip-credits-BcZI_jsh.js.map
