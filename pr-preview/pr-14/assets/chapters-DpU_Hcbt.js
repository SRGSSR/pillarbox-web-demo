import{p as s}from"./core-demo-header-component-BT_QUw0k.js";/* empty css                        */s.registerPlugin("currentChapter",function(){const n=this;n.ready(()=>{const e=n.getChild("ControlBar").addChild("component",{className:"pbw-blocked-segment-notification vjs-hidden"}),a=document.createElement("img");a.className="pbw-chapter-thumbnail";const r=document.createElement("span");r.className="pbw-chapter-title",e.el().appendChild(a),e.el().appendChild(r),e.hide(),n.on("loadeddata",()=>{const t=n.textTracks().getTrackById("srgssr-chapters");t==null||t.on("cuechange",()=>{if(t.activeCues.length>0){const c=JSON.parse(t.activeCues[0].text);r.textContent=c.title,r.title=c.title,a.src=c.imageUrl,e.show()}else e.hide()})})})});const i=s("video-element-id",{fill:!0,plugins:{currentChapter:{}}});i.src({src:"urn:rts:video:10894383",type:"srgssr/urn"});document.querySelector("#close-btn").addEventListener("click",()=>{window.close()});window.pillarbox=s;
//# sourceMappingURL=chapters-DpU_Hcbt.js.map