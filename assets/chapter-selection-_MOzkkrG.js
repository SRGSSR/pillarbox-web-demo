import{p as n}from"./core-demo-header-component-D2o7ekP1.js";window.player=n("video-element-id",{muted:!0});player.on("srgssr/chapter",({data:r={text:null}})=>{const t=JSON.parse(r.text);document.querySelectorAll(".chapter").forEach(a=>{const c=t&&t.urn===a.dataset.urn;a.classList.toggle("chapter-selected",c)})});player.on("loadeddata",()=>{document.getElementById("chapter-selector")&&document.getElementById("chapter-selector").remove();const r=Array.from(player.textTracks().getTrackById("srgssr-chapters").cues);if(!r)return;const t=document.createElement("div");t.id="chapter-selector",r.forEach(({startTime:a,text:c},l)=>{const{duration:i,imageUrl:d,imageTitle:p,mediaType:u,title:m,urn:s,vendor:h}=JSON.parse(c),o=`${"chapter-"+l}`,e=document.createElement("a");e.dataset.urn=s,e.className="chapter",e.setAttribute("aria-labelledby",o),e.href=`https://www.${h.toLowerCase()}.ch/play/tv/-/${u.toLowerCase()}/-?urn=${s}`,e.innerHTML=`
        <figure>
          <img
            src="${d}"
            alt="${p}"
            loading="lazy"
          />
          <figcaption id="${o}">
            <p class="title">${m}</p>
            <span aria-hidden="true" class="duration">${n.time.formatTime(i/1e3,600)}</span>
          </figcaption>
        </figure>
      `,e.addEventListener("click",y=>{y.preventDefault(),player.currentTime(a+.1)}),t.append(e)}),document.body.append(t)});player.src({src:"urn:rts:video:10894383",type:"srgssr/urn"});document.querySelector("#close-btn").addEventListener("click",()=>{window.close()});window.pillarbox=n;
//# sourceMappingURL=chapter-selection-_MOzkkrG.js.map
