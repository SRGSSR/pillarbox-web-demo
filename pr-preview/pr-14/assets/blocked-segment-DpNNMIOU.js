import{p as i}from"./core-demo-header-component-BT_QUw0k.js";/* empty css                        */i.registerPlugin("blockedSegmentNotification",function(c){const t=this;t.ready(()=>{const o=t.addChild("component",{className:"pbw-blocked-segment-notification vjs-hidden"});let n;t.on("loadeddata",()=>{const e=t.textTracks().getTrackById("srgssr-blocked-segments");e==null||e.on("cuechange",()=>{if(e.activeCues.length>0){clearTimeout(n);const s=JSON.parse(e.activeCues[0].text).blockReason??"UNKNOWN",l=o.localize(s);o.el().textContent=`ⓘ ${l}`,o.show(),n=setTimeout(()=>{o.hide(),n=void 0},c.delay)}})})})});const a=i("video-element-id",{fill:!0,plugins:{blockedSegmentNotification:{delay:5e3}}});a.src({src:"urn:rts:video:10894383",type:"srgssr/urn"});document.querySelector("#close-btn").addEventListener("click",()=>{window.close()});window.pillarbox=i;
//# sourceMappingURL=blocked-segment-DpNNMIOU.js.map
