import{o as e}from"./core-demo-header-component-D9cvS36a.js";var t=e(`video-element-id`,{muted:!0});t.on(`srgssr/chapter`,({data:e={text:null}})=>{let t=JSON.parse(e.text);document.querySelectorAll(`.chapter`).forEach(e=>{let n=t&&t.urn===e.dataset.urn;e.classList.toggle(`chapter-selected`,n)})}),t.on(`loadeddata`,()=>{document.getElementById(`chapter-selector`)&&document.getElementById(`chapter-selector`).remove();let n=Array.from(t.textTracks().getTrackById(`srgssr-chapters`).cues);if(!n)return;let r=document.createElement(`div`);r.id=`chapter-selector`,n.forEach(({startTime:n,text:i},a)=>{let{duration:o,imageUrl:s,imageTitle:c,mediaType:l,title:u,urn:d,vendor:f}=JSON.parse(i),p=`${`chapter-`+a}`,m=document.createElement(`a`);m.dataset.urn=d,m.className=`chapter`,m.setAttribute(`aria-labelledby`,p),m.href=`https://www.${f.toLowerCase()}.ch/play/tv/-/${l.toLowerCase()}/-?urn=${d}`,m.innerHTML=`
        <figure>
          <img
            src="${s}"
            alt="${c}"
            loading="lazy"
          />
          <figcaption id="${p}">
            <p class="title">${u}</p>
            <span aria-hidden="true" class="duration">${e.time.formatTime(o/1e3,600)}</span>
          </figcaption>
        </figure>
      `,m.addEventListener(`click`,e=>{e.preventDefault(),t.currentTime(n+.1)}),r.append(m)}),document.body.append(r)}),t.src({src:`urn:rts:video:10894383`,type:`srgssr/urn`}),document.querySelector(`#close-btn`).addEventListener(`click`,()=>{window.close()}),window.pillarbox=e,window.player=e.getPlayer(`video-element-id`);
//# sourceMappingURL=chapter-selection-DZ2Hdtur.js.map