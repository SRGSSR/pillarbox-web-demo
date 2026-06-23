import{o as e}from"./core-demo-header-component-0-GgfcNR.js";window.player=e(`video-element-id`,{muted:!0}),player.on(`srgssr/chapter`,({data:e={text:null}})=>{let t=JSON.parse(e.text);document.querySelectorAll(`.chapter`).forEach(e=>{let n=t&&t.urn===e.dataset.urn;e.classList.toggle(`chapter-selected`,n)})}),player.on(`loadeddata`,()=>{document.getElementById(`chapter-selector`)&&document.getElementById(`chapter-selector`).remove();let t=Array.from(player.textTracks().getTrackById(`srgssr-chapters`).cues);if(!t)return;let n=document.createElement(`div`);n.id=`chapter-selector`,t.forEach(({startTime:t,text:r},i)=>{let{duration:a,imageUrl:o,imageTitle:s,mediaType:c,title:l,urn:u,vendor:d}=JSON.parse(r),f=`${`chapter-`+i}`,p=document.createElement(`a`);p.dataset.urn=u,p.className=`chapter`,p.setAttribute(`aria-labelledby`,f),p.href=`https://www.${d.toLowerCase()}.ch/play/tv/-/${c.toLowerCase()}/-?urn=${u}`,p.innerHTML=`
        <figure>
          <img
            src="${o}"
            alt="${s}"
            loading="lazy"
          />
          <figcaption id="${f}">
            <p class="title">${l}</p>
            <span aria-hidden="true" class="duration">${e.time.formatTime(a/1e3,600)}</span>
          </figcaption>
        </figure>
      `,p.addEventListener(`click`,e=>{e.preventDefault(),player.currentTime(t+.1)}),n.append(p)}),document.body.append(n)}),player.src({src:`urn:rts:video:10894383`,type:`srgssr/urn`}),document.querySelector(`#close-btn`).addEventListener(`click`,()=>{window.close()}),window.pillarbox=e;
//# sourceMappingURL=chapter-selection-CcxdQ_Id.js.map