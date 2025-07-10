import{i as D,t as B,a as z,r as j,x as u,p as st,b as S,e as Cn,c as Rn,d as _n,T as Tn,f as Et,v as at,g as Ln,o as Ct}from"./core-demo-header-component-CKumsNp2.js";const An="[part=container]{block-size:480px;aspect-ratio:var(--ratio-widescreen);padding:0;overflow:visible;background-color:var(--color-12)}[part=close-btn]{position:absolute;top:calc(var(--size-3) * -1);right:0;z-index:2;width:var(--size-7);height:var(--size-7);font-size:var(--size-4);text-align:center;background:var(--gray-6);border-radius:var(--radius-round)}";class Pn extends D{static properties={open:{type:Boolean,reflect:!0}};static styles=[B,z,j(An)];#t;constructor(){super(),this.open=!1}updated(e){super.updated(e),e.has("open")&&(this.open?(this.#t.showModal(),this.#t.classList.toggle("slide-up-fade-in",!0)):this.#t.close())}firstUpdated(e){super.firstUpdated(e),this.#t=this.shadowRoot.querySelector("dialog")}#e(){this.dispatchEvent(new CustomEvent("close"))}#n(e){this.#t===e.target&&(this.open=!1)}render(){return u`
      <dialog part="container"
              @click="${this.#n.bind(this)}"
              @close="${this.#e.bind(this)}"
              @animationend="${e=>e.target.classList.remove("slide-up-fade-in")}">
        <button part="close-btn"
                @click="${()=>{this.open=!1}}"
                title="Close player dialog">&times;</button>
        <slot></slot>
      </dialog>
    `}}customElements.define("demo-dialog",Pn);class me{static loadPreferences(){return JSON.parse(localStorage.getItem("preferences"))||{}}static savePreferences(e){localStorage.setItem("preferences",JSON.stringify(e))}}const it="il.srgssr.ch",te={vector:"srgplay"},$n={includeAggregations:!1,includeSuggestions:!1,sortBy:"default",sortDir:"desc",pageSize:50,...te},In={onlyActiveShows:!0,...te},le=({title:s,urn:e,mediaType:n,date:i,duration:c})=>({title:s,urn:e,mediaType:n,date:i,duration:c});class Dn{#t;constructor(e=it){this.host=e}get host(){return this.#t}set host(e){this.#t=e||it}async search(e,n,i=void 0){const c=await this.#e(`/${e.toLowerCase()}/searchResultMediaList`,{...$n,q:n},i),v=x=>x.searchResultMediaList.map(le);return{results:v(c),next:c.next?this.#n(c.next,v):void 0}}async topics(e,n="tv"){return(await this.#e(`/${e.toLowerCase()}/topicList/${n}`)).topicList.map(({title:c,urn:v})=>({title:c,urn:v}))}async latestByTopic(e,n=30){const i=await this.#e(`/mediaList/latest/byTopicUrn/${e}`,{pageSize:n}),c=v=>v.mediaList.map(le);return{results:c(i),next:i.next?this.#n(i.next,c):void 0}}async shows(e,n="unlimited",i="tv"){return(await this.#e(`/${e.toLowerCase()}/showList/${i}/alphabetical`,{...In,pageSize:n})).showList.map(({title:v,urn:x})=>({title:v,urn:x}))}async latestByShow(e,n=30){const i=await this.#e(`/episodeComposition/latestByShow/byUrn/${e}`,{...te,pageSize:n}),c=v=>v.episodeList.map(({mediaList:x})=>x[0]).map(le);return{results:c(i),next:i.next?this.#n(i.next,c):void 0}}async editorial(e,n=30){const i=await this.#e(`/${e.toLowerCase()}/mediaList/video/editorial`,{...te,pageSize:n}),c=v=>v.mediaList.map(le);return{results:c(i),next:i.next?this.#n(i.next,c):void 0}}async livestreams(e,n="video"){return(await this.#e(`/${e.toLowerCase()}/mediaList/${n}/livestreams`)).mediaList.map(le)}async scheduledLivestream(e,n=10){const i=await this.#e(`/${e.toLowerCase()}/mediaList/video/scheduledLivestreams`,{...te,pageSize:n}),c=v=>v.mediaList.map(le);return{results:c(i),next:i.next?this.#n(i.next,c):void 0}}async livecenter(e,n=10){const i=await this.#e(`/${e.toLowerCase()}/mediaList/video/scheduledLivestreams/livecenter`,{...te,pageSize:n}),c=v=>v.mediaList.map(le);return{results:c(i),next:i.next?this.#n(i.next,c):void 0}}async channels(e,n="radio"){return(await this.#e(`/${e.toLowerCase()}/channelList/${n}`)).channelList.map(({title:c,id:v})=>({title:c,id:v}))}async radioShowByChannel(e,n,i="unlimited"){return(await this.#e(`/${e.toLowerCase()}/showList/radio/alphabeticalByChannel/${n}`,{...te,pageSize:i})).showList.map(({title:v,urn:x})=>({title:v,urn:x}))}async#e(e,n=te,i=void 0){const c=new URLSearchParams(n).toString(),v=`https://${this.host}/integrationlayer/2.0/${e.replace(/^\/+/,"")}?${c}`;return fetch(v,{signal:i}).then(x=>x.ok?x.json():Promise.reject(x)).catch(x=>Promise.reject(x))}#n(e,n){return async(i=void 0)=>{const c=await fetch(e,{signal:i}).then(x=>x.ok?x.json():Promise.reject(x)).catch(x=>Promise.reject(x));return{results:n(c),next:this.#n(c.next,n)}}}}const N=new Dn,Rt="demo-player",Mn={restoreEl:!0},Nn=s=>({muted:s.muted??!0,autoplay:s.autoplay??!1,debug:s.debug??!1,srgOptions:{dataProviderHost:s.dataProviderHost??it}}),On=(s={})=>(window.player=new st(Rt,{...Mn,...Nn(me.loadPreferences()),...s}),window.player),jn=()=>{st.getPlayer(Rt).dispose(),window.player=null};window.pillarbox=st;const _t=document.querySelector("demo-dialog"),Tt=s=>{const e=Object.keys(s??{})[0];return e?{vendor:e,...e==="com.apple.fps.1_0"?s[e]:{licenseUri:s[e]}}:{}},Un=s=>{if(!s.vendor)return;const{certificateUri:e,licenseUri:n}=s;return s.vendor==="com.apple.fps.1_0"?{[s.vendor]:{certificateUri:e,licenseUri:n}}:{[s.vendor]:n}},Bn=({src:s,type:e,keySystems:n})=>new URLSearchParams({src:s,type:e,...Tt(n)}).toString();_t.addEventListener("close",()=>{jn(),S.updateState({},["src","type","vendor","certificateUri","licenseUri"])});const Lt=s=>{if(window.player)return;const e=s.detail.queryParams;if("src"in e){const{src:n,type:i}=e,c=Un(e);At({src:n,type:i,keySystems:c})}};S.addEventListener("routechanged",Lt);S.addEventListener("queryparams",Lt);const At=({src:s,type:e,keySystems:n,playerOptions:i},c=!0)=>{const v=On(i??{});return _t.open=!0,v.src({src:s,type:e,keySystems:n}),c&&S.updateState({src:s,...e?{type:e}:{},...Tt(n)}),v},zn=".load-bar-container{display:flex;align-items:center;padding:0 var(--size-3);background-color:var(--color-8);border-radius:var(--radius-2)}.load-bar-container input{width:90%}.load-bar-container button{background-color:var(--color-8);border:0}.drm-settings-container{display:none}.drm-settings-container input{border-radius:var(--radius-2)}.drm-settings-container select{border-right:var(--size-5) solid var(--color-8)}.drm-settings-container.active{display:flex;flex-direction:column}.load-bar-action{width:100%}";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=Cn(class extends Rn{constructor(s){if(super(s),s.type!==_n.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const n=s.element.classList;for(const i of this.st)i in e||(n.remove(i),this.st.delete(i));for(const i in e){const c=!!e[i];c===this.st.has(i)||this.nt?.has(i)||(c?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return Tn}});class Hn extends D{static properties={src:{type:String},drmSettings:{type:Object},drmSettingsShown:{state:!0,type:Boolean}};static styles=[B,z,j(zn)];constructor(){super(),this.src="",this.#t()}#t(){this.drmSettings={vendor:"",certificateUri:"",licenseUri:""}}#e(){try{return new URL(this.src).searchParams.get("urn")??this.src}catch{return this.src}}#n(){const e=this.#e()?.trim(),n=e.startsWith("urn:")?"srgssr/urn":void 0,i=this.#s;this.dispatchEvent(new CustomEvent("submit-media",{detail:{src:e,type:n,keySystems:i}}))}#i(e){this.src=e.target.value,e.key==="Enter"&&this.src&&this.#n()}get#s(){if(this.drmSettings?.vendor)return this.#a()}#a(){const e=this.drmSettings.certificateUri?.trim(),n=this.drmSettings.licenseUri?.trim();return this.drmSettings.vendor==="com.apple.fps.1_0"?{[this.drmSettings.vendor]:{certificateUri:e,licenseUri:n}}:{[this.drmSettings.vendor]:n}}render(){const e={spin:this.drmSettingsShown===!0,"spin-back":this.drmSettingsShown===!1};return u`
      <div class="fade-in"
           @animationend="${n=>n.target.classList.remove("fade-in")}">
        <div class="load-bar-container">
          <i class="material-symbols-outlined">link</i>
          <input type="text"
                 placeholder="Enter a URL or URN to play its content..."
                 @keyup="${this.#i}"
                 .value="${this.src??""}">
          <button title="Open DRM Settings"
                  @click="${()=>{this.drmSettingsShown=!this.drmSettingsShown}}">
            <i class="material-symbols-outlined ${He(e)}"
               @animationend="${n=>n.target.classList.remove("spin","spin-back")}">
              key
            </i>
          </button>
        </div>
        
        ${this.#l()}

        <button class="icon-btn load-bar-action"
                ?disabled="${!this.src}"
                @click="${this.#n}">
          <i class="material-symbols-outlined">play_circle</i> Play content
        </button>
      </div>
    `}updated(e){super.updated(e),e.has("drmSettingsShown")&&this.drmSettingsShown&&this.shadowRoot.querySelector(".drm-settings-container").classList.add("active")}#r(e){e.target.classList.toggle("active",!e.target.classList.contains("fade-out-shrink")),e.target.classList.remove("fade-in-grow","fade-out-shrink")}#o(){return{"fade-in-grow":this.drmSettingsShown===!0,"fade-out-shrink":this.drmSettingsShown===!1}}#l(){return u`
      <form class="drm-settings-container ${He(this.#o())}"
            aria-hidden="${!this.drmSettingsShown}"
            @reset="${this.#t}"
            @animationend="${e=>this.#r(e)}">
        <h3>DRM Settings</h3>
        <select aria-label="Select a DRM vendor" required
                .value="${this.drmSettings.vendor}"
                @change="${e=>{this.drmSettings.vendor=e.target.value}}">
          <option value="" disabled selected hidden>Select a DRM vendor
          </option>
          <option value="com.widevine.alpha">Widevine</option>
          <option value="com.apple.fps.1_0">Fairplay</option>
          <option value="com.microsoft.playready">PlayReady</option>
        </select>
        <input type="text"
               placeholder="Enter the license uri..."
               .value="${this.drmSettings.licenseUri}"
               @input="${e=>{this.drmSettings.licenseUri=e.target.value}}">
        <input type="text"
               placeholder="Enter the certificate uri..."
               .value="${this.drmSettings.certificateUri}"
               @input="${e=>{this.drmSettings.certificateUri=e.target.value}}">
        <button class="icon-btn warning-text" type="reset">
          <i class="material-symbols-outlined">delete</i>Clear Settings
        </button>
        <hr>
      </form>
    `}}customElements.define("load-media-form",Hn);const Fn="[part=a]{display:flex;flex-direction:column;gap:var(--size-2);justify-content:center;min-height:var(--size-10);margin:0;color:var(--color-0);font-weight:var(--font-weight-6);font-size:var(--size-3);text-align:justify;text-decoration:none;background-color:var(--color-9);border:1px solid var(--color-10);transition:background-color .4s,border-color .4s;padding-inline:var(--size-3)}[part=a]:hover{text-decoration:none;background-color:var(--color-8);border-color:var(--color-9)}[part=title]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}::slotted([slot=description]){display:flex;align-items:center;color:var(--color-6);font-weight:var(--font-weight-5);font-size:var(--size-3);font-style:italic}";class qn extends D{static properties={href:{}};static styles=j(Fn);#t=e=>{e.preventDefault();const n=new URL(`${window.location.origin}/${this.href}`),i=Object.fromEntries(n.searchParams.entries());S.navigateTo(n.pathname,i)};connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.#t)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.#t)}render(){return u`
      <a href="${this.href}" title="${this.title}" part="a">
        <span part="title">${this.title}</span>
        <slot part="description" name="description"></slot>
      </a>
    `}}customElements.define("content-link",qn);const Gn={SRGSSR:[{title:"Horizontal video",src:"urn:rts:video:14827306",type:"srgssr/urn"},{title:"Square video",src:"urn:rts:video:8393241",type:"srgssr/urn"},{title:"Vertical video",src:"urn:rts:video:13444390",type:"srgssr/urn"},{title:"A bon entendeur",src:"urn:rts:video:14080915",type:"srgssr/urn"},{title:"Live video",description:"SRF 1",src:"urn:srf:video:c4927fcf-e1a0-0001-7edd-1ef01d441651",type:"srgssr/urn"},{title:"DVR video livestream",description:"RTS 1",src:"urn:rts:video:3608506",type:"srgssr/urn"},{title:"Content with a blocked time range",description:"Puls - Gehirnerschütterung, Akutgeriatrie, Erlenpollen im Winter",src:"urn:srf:video:40ca0277-0e53-4312-83e2-4710354ff53e",type:"srgssr/urn"},{title:"DVR audio livestream",description:"Couleur 3 (DVR)",src:"urn:rts:audio:3262363",type:"srgssr/urn"},{title:"Expired URN",description:"Content that is not available anymore",src:"urn:rts:video:13382911",type:"srgssr/urn"},{title:"Unknown URN",description:"Content that does not exist",src:"urn:srf:video:unknown",type:"srgssr/urn"}],HLS:[{title:"VOD - HLS",description:"Sacha part à la rencontre d'univers atypiques",src:"https://rts-vod-amd.akamaized.net/ww/14970442/96fc7429-64c1-34b0-8c05-62cf114695ac/master.m3u8",type:"application/x-mpegURL"},{title:"VOD - HLS (short)",description:"Des violents orages ont touché Ajaccio, chef-lieu de la Corse, jeudi",src:"https://rts-vod-amd.akamaized.net/ww/13317145/f1d49f18-f302-37ce-866c-1c1c9b76a824/master.m3u8",type:"application/x-mpegURL"},{title:"Brain Farm Skate Phantom Flex",description:"4K video",src:"https://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",type:"application/x-mpegURL"},{title:"Video livestream - HLS",description:"Couleur 3 en vidéo (live)",src:"https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8?dw=0",type:"application/x-mpegURL"},{title:"Video livestream with DVR - HLS",description:"Couleur 3 en vidéo (DVR)",src:"https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8",type:"application/x-mpegURL"},{title:"Video livestream with DVR and timestamps - HLS",description:"Tageschau",src:"https://tagesschau.akamaized.net/hls/live/2020115/tagesschau/tagesschau_1/master.m3u8",type:"application/x-mpegURL"},{title:"Audio livestream - HLS",description:"Couleur 3 (DVR)",src:"https://lsaplus.swisstxt.ch/audio/couleur3_96.stream/playlist.m3u8",type:"application/x-mpegURL"},{title:"Apple Basic 4:3",description:"4x3 aspect ratio, H.264 @ 30Hz",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",type:"application/x-mpegURL"},{title:"Apple Basic 16:9",description:"16x9 aspect ratio, H.264 @ 30Hz",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",type:"application/x-mpegURL"},{title:"Apple Advanced 16:9 (TS)",description:"16x9 aspect ratio, H.264 @ 30Hz and 60Hz, Transport stream",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8",type:"application/x-mpegURL"},{title:"Apple Advanced 16:9 (fMP4)",description:"16x9 aspect ratio, H.264 @ 30Hz and 60Hz, Fragmented MP4",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",type:"application/x-mpegURL"},{title:"Apple Advanced 16:9 (HEVC/H.264)",description:"16x9 aspect ratio, H.264 and HEVC @ 30Hz and 60Hz",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_adv_example_hevc/master.m3u8",type:"application/x-mpegURL"},{title:"Apple Atmos",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8",type:"application/x-mpegURL"},{title:"Apple WWDC Keynote 2023",src:"https://events-delivery.apple.com/0105cftwpxxsfrpdwklppzjhjocakrsk/m3u8/vod_index-PQsoJoECcKHTYzphNkXohHsQWACugmET.m3u8",type:"application/x-mpegURL"},{title:"Apple tv trailer",description:"Lot of audios and subtitles choices",src:`https://play-edge.itunes.apple.com/WebObjects/MZPlayLocal.woa/hls/subscription/playlist.m3u8?cc=CH&svcId=tvs.vds.4021&a=1522121579&isExternal=true&brandId=tvs.sbd.4000&id=518077009&l=en-GB&aec=UHD
`,type:"application/x-mpegURL"},{title:"Multiple subtitles and audio tracks",description:"On some devices codec may crash",src:"https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8",type:"application/x-mpegURL"},{title:"4K, HEVC",src:"https://cdn.bitmovin.com/content/encoding_test_dash_hls/4k/hls/4k_profile/master.m3u8",type:"application/x-mpegURL"},{title:"VoD, single audio track",src:"https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",type:"application/x-mpegURL"},{title:"AES-128",src:"https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/m3u8s/11331.m3u8",type:"application/x-mpegURL"},{title:"HLS - Fragmented MP4",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",type:"application/x-mpegURL"},{title:"HLS - Alternate audio language",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.m3u8",type:"application/x-mpegURL"},{title:"HLS - Audio only",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.m3u8?filter=(type!=%22video%22)",type:"application/x-mpegURL"},{title:"HLS - Trickplay",src:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel-trickplay.m3u8",type:"application/x-mpegURL"},{title:"Limiting bandwidth use",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8?max_bitrate=800000",type:"application/x-mpegURL"},{title:"Dynamic Track Selection",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8?filter=%28type%3D%3D%22audio%22%26%26systemBitrate%3C100000%29%7C%7C%28type%3D%3D%22video%22%26%26systemBitrate%3C1024000%29",type:"application/x-mpegURL"},{title:"Pure live",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8",type:"application/x-mpegURL"},{title:"Timeshift (5 minutes)",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8?time_shift=300",type:"application/x-mpegURL"},{title:"Live audio",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8?filter=(type!=%22video%22)",type:"application/x-mpegURL"},{title:"Pure live (scte35)",src:"https://demo.unified-streaming.com/k8s/live/stable/scte35.isml/.m3u8",type:"application/x-mpegURL"},{title:"fMP4, clear",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-fmp4.ism/.m3u8",type:"application/x-mpegURL"},{title:"fMP4, HEVC 4K",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-hevc.ism/.m3u8",type:"application/x-mpegURL"},{title:"Test1",description:"Forced subtitles",src:"https://prd.vod-srgssr.ch/origin/1053457/fr/master.m3u8?complexSubs=true",type:"application/x-mpegURL"}],DASH:[{title:"VoD - Dash (H264)",src:"https://storage.googleapis.com/wvmedia/clear/h264/tears/tears.mpd",type:"application/dash+xml"},{title:"VoD - Dash Widewine cenc (H264)",src:"https://storage.googleapis.com/wvmedia/cenc/h264/tears/tears.mpd",type:"application/dash+xml",keySystems:{"com.widevine.alpha":"https://proxy.uat.widevine.com/proxy?video_id=2015_tears&provider=widevine_test"}},{title:"VoD - Dash (H265)",src:"https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd",type:"application/dash+xml"},{title:"VoD - Dash widewine cenc (H265)",src:"https://storage.googleapis.com/wvmedia/cenc/hevc/tears/tears.mpd",type:"application/dash+xml",keySystems:{"com.widevine.alpha":"https://proxy.uat.widevine.com/proxy?video_id=2015_tears&provider=widevine_test"}},{title:"VoD - Dash - MP4",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.mpd",type:"application/dash+xml"},{title:"Dash - Fragmented MP4",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.mpd",type:"application/dash+xml"},{title:"Dash - TrickPlay",src:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel-trickplay.mpd",type:"application/dash+xml"},{title:"Dash - Tiled thumbnails (live/timeline)",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-tiled-thumbnails-timeline.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Accessibility - hard of hearing",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-hoh-subs.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Single - fragmented TTML",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-en.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Multiple - RFC 5646 language tags",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-rfc5646.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Multiple - fragmented TTML",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-ttml.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Audio only",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.mpd?filter=(type!=%22video%22)",type:"application/dash+xml"},{title:"Dash - Multiple audio codecs",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-codec.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Alternate audio language",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Accessibility - audio description",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-desc-aud.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Pure live",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.mpd",type:"application/dash+xml"},{title:"Dash - Timeshift (5 minutes)",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.mpd?time_shift=300",type:"application/dash+xml"},{title:"Dash - DVB DASH low latency",src:"https://demo.unified-streaming.com/k8s/live/stable/live-low-latency.isml/.mpd",type:"application/dash+xml"}],MP4:[{title:"VOD - MP4",description:"The dig",src:"https://media.swissinfo.ch/media/video/dddaff93-c2cd-4b6e-bdad-55f75a519480/rendition/154a844b-de1d-4854-93c1-5c61cd07e98c.mp4",type:"video/mp4"},{title:"AVC Progressive",src:"https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4",type:"video/mp4"}],AOD:[{title:"Audio HLS",description:"Content with PTS rollover",src:"https://cdn.rts.ch/audio-sample/playlist.m3u8",type:"application/x-mpegURL"}]};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ge(s,e){if(s!==void 0){let n=0;for(const i of s)yield e(i,n++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function W(s,e,n){return s?e(s):n?.(s)}class Vn extends D{static styles=[B,z,Et`
      .example-section p {
        margin-bottom: 0;
        color: var(--color-5);
        font-size: var(--size-3);
        text-align: left;
      }`];render(){return u`
      <load-media-form @submit-media="${e=>At(e.detail)}">
      </load-media-form>

      <!-- List of examples -->
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        ${ge(Object.entries(Gn),([e,n])=>u`
          <section class="example-section" data-section="${e}">
            <h2 class="sticky">${e}</h2>
            ${ge(n,i=>u`
              <content-link title="${i.description||i.title}"
                            href="examples?${Bn(i)}">
                ${W(i.description,()=>u`
                    <span slot="description">${i.title}</span>
                `)}
              </content-link>
            `)}
          </section>
        `)}
      </div>
    `}}customElements.define("examples-page",Vn);S.addRoute("examples","examples-page");const Wn=".tree-navigation-container{display:flex;align-items:end}.tree-navigation-container button{padding:0;color:var(--color-6);background:transparent;border:none}.tree-navigation-container button:hover{color:inherit}.tree-navigation-container i{font-size:var(--size-3)}intersection-observer::part(sentinel){width:100%;height:var(--size-9);margin-top:var(--size-4);background-color:var(--color-9);border:1px solid var(--color-10);border-radius:var(--radius-3);animation:var(--animation-blink)}",Kn=".spinner{display:block;width:var(--size-7);height:var(--size-7);border:3px solid var(--color-2);border-bottom-color:transparent;border-radius:var(--radius-round);animation:var(--animation-spin)}.spinner-container{display:grid;place-content:center;margin:var(--size-10)}.spinner-container.hidden{display:none}";class Xn extends D{static properties={loading:{type:Boolean,reflect:!0}};static styles=[z,j(Kn)];constructor(){super(),this.loading=!1}render(){return u`
      <div class="spinner-container ${this.loading?"":"hidden"}">
        <div class="spinner"></div>
      </div>
    `}}customElements.define("loading-spinner",Xn);const Yn={root:null,rootMargin:"0px",threshold:.1},Zn=(s,e,n=Yn)=>{new IntersectionObserver(i=>{i.forEach(c=>{c.isIntersecting&&e()})},n).observe(s)};class Jn extends D{static styles=[z];firstUpdated(e){super.firstUpdated(e),Zn(this.renderRoot.querySelector("div"),()=>{this.dispatchEvent(new CustomEvent("intersecting"))})}render(){return u`
      <div part="sentinel"></div>
    `}}customElements.define("intersection-observer",Jn);class Qn extends D{static styles=[B,z,Et`
      .scroll-to-top-button {
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--size-7);
        height: var(--size-7);
        padding: 0;
        border: none;
        border-radius: var(--radius-round);
      }

      .scroll-to-top-button i {
        font-size: var(--size-8);
      }
  `];render(){return u`
      <button class="scroll-to-top-button" title="Scroll to top" 
              @click="${()=>window.scrollTo({top:0,behavior:"smooth"})}">
        <i class="material-symbols-outlined">arrow_circle_up</i>
      </button>
    `}}customElements.define("scroll-to-top-button",Qn);const et=s=>s.replace(/\s+/g,"-").toLowerCase();class we{constructor(e){this.stack=[],this.level=e}async initialize(e,n,i){if(!e||!n)return;const c=this.#n(e),v=this.#i(this.level[c].nodes,n);await this.fetchNextState(c,v),await this.#t(i)}async#t(e){for(const n of e?.split(",")||[]){const i=this.#i(this.level[0].nodes,n);await this.fetchNextState(0,i)}}async fetchNextState(e,n){const i=this.level[e];this.stack.push({level:this.level,sectionIndex:e,nodeIndex:n}),this.level=[await i.resolve(i.nodes[n])]}fetchPreviousState(e){this.level=this.stack[e].level,this.stack.splice(e)}isLeafSection(e){return this.level[e]?.isLeaf()}retrieveNode(e,n){return this.level[e]?.nodes[n]}get root(){return this.stack[0]?.level||this.level}get params(){return we.#e(this.stack)}static#e(e){if(e.length===0)return{};const n=e[0],i=n.level[n.sectionIndex],c=e.slice(1).map(x=>{const H=x.level[x.sectionIndex].nodes[x.nodeIndex];return H.id||H.urn}),v={section:et(i.title),bu:i.nodes[n.nodeIndex].toLowerCase()};return c&&c.length&&(v.nodes=c.join(",")),v}paramsAt(e,n){return we.#e([...this.stack,{level:this.level,sectionIndex:e,nodeIndex:n}])}#n(e){const n=et(e).toLowerCase();return this.level.map(i=>et(i.title).toLowerCase()).findIndex(i=>i===n)}#i(e,n){const i=n.toLowerCase();return e.map(c=>(c.urn||c.id||c.toString()).toLowerCase()).findIndex(c=>c===i)}}class L{constructor({title:e,nodes:n,resolve:i=void 0,next:c=void 0}){this.title=e,this.nodes=n,this.resolve=i,this.next=c}isLeaf(){return!this.resolve}async fetchNext(e=void 0){if(!this.next)return;const n=await this.next(e);return this.next=n.next,this.nodes.push(...n.results),n.results}}const ye=s=>({nodes:s.results,next:s.next}),ei=[new L({title:"TV Topics",nodes:["RSI","RTR","RTS","SRF","SWI"],resolve:async s=>new L({title:`${s} TV Topics`,nodes:await N.topics(s),resolve:async e=>new L({title:e.title,...ye(await N.latestByTopic(e.urn))})})}),new L({title:"TV Shows",nodes:["RSI","RTR","RTS","SRF","SWI"],resolve:async s=>new L({title:`${s} TV Shows`,nodes:await N.shows(s),resolve:async e=>new L({title:e.title,...ye(await N.latestByShow(e.urn))})})}),new L({title:"TV Latest Videos",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} TV Latest Videos`,...ye(await N.editorial(s))})}),new L({title:"TV Livestreams",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} TV Livestreams`,nodes:await N.livestreams(s)})}),new L({title:"Live web",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} Live web`,...ye(await N.scheduledLivestream(s))})}),new L({title:"Live center",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} Live center`,nodes:await N.livecenter(s)})}),new L({title:"Radio Shows",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} Radio Channels`,nodes:await N.channels(s),resolve:async e=>new L({title:`${e.title} Radio shows`,nodes:await N.radioShowByChannel(s,e.id),resolve:async n=>new L({title:n.title,...ye(await N.latestByShow(n.urn))})})})}),new L({title:"Radio Livestreams",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} Radio Livestreams`,nodes:await N.livestreams(s,"audio")})})];class ti extends D{static properties={loading:{state:!0,type:Boolean},stack:{state:!0,type:Array},level:{state:!0,type:Object},nextPage:{state:!0,type:Function}};static styles=[B,z,j(Wn)];#t=new AbortController;#e;#n;constructor(){super(),this.loading=!1,this.#e=new we(ei),this.#i()}connectedCallback(){super.connectedCallback(),this.#n=async e=>{if(!e.detail.popstate)return;this.abortFetch();const n=new we(this.#e.root),{section:i,bu:c,nodes:v}=e.detail.queryParams;this.loading=!0;try{await n.initialize(i,c,v),this.#e=n,this.#i()}finally{this.loading=!1}},S.addEventListener("queryparams",this.#n)}disconnectedCallback(){super.disconnectedCallback(),this.abortFetch(),S.removeEventListener("queryparams",this.#n)}firstUpdated(e){super.firstUpdated(e),this.#n({detail:{popstate:!0,queryParams:S.queryParams}})}#i(){this.stack=[...this.#e.stack],this.level=[...this.#e.level]}async navigateTo(e,n){if(!this.#e.isLeafSection(e)){this.abortFetch(),this.loading=!0;try{await this.#e.fetchNextState(e,n),this.#i()}finally{this.loading=!1}}}abortFetch(){return this.#t?.abort("New search launched"),this.#t=new AbortController,this.#t.signal}#s(e){return new URLSearchParams({...S.queryParams,src:e.urn,type:"srgssr/urn"}).toString()}#a(e){const n=new Intl.DateTimeFormat("fr-CH").format(new Date(e.date)),i=at.formatTime(e.duration/1e3);return u`
      <content-link title="${e.title}" href="lists?${this.#s(e)}">
        <div slot="description">
          <i class="material-symbols-outlined">${e.mediaType==="VIDEO"?"movie":"audiotrack"}</i>
          <span>&nbsp;| ${n} | ${i}</span>
        </div>
      </content-link>
    `}#r(e,n){const i=this.#e.paramsAt(e,n);return new URLSearchParams(i).toString()}#o(e,n,i){return u`
      <content-link title="${typeof e=="string"?e:e.title}"
                   href="lists?${this.#r(n,i)}"
                   data-section-idx="${n}" data-node-idx="${i}">
      </content-link>
    `}async#l(e){const n=this.abortFetch();await e.fetchNext(n),this.#i()}#c(e,n){const i=this.level[0],c=this.level.length===1&&i.next;return u`
        ${ge(e,(v,x)=>u`
            ${W(v.mediaType,()=>this.#a(v,x),()=>this.#o(v,n,x))}
        `)}
        ${W(c,()=>u`
            <intersection-observer
                    @intersecting="${()=>this.#l(i)}">
            </intersection-observer>
        `)}
    `}async#d(e){const n=e.target.closest("content-link");if(this.loading||!("nodeIdx"in n.dataset))return;const i=n.dataset.sectionIdx,c=n.dataset.nodeIdx;await this.navigateTo(i,c)}#p(){return u`
        <div class="fade-in"
             @animationend="${e=>e.target.classList.remove("fade-in")}"
             @click="${this.#d.bind(this)}">
            ${ge(this.level,(e,n)=>u`
                <section>
                    <h2 class="sticky">${e.title}</h2>
                    ${this.#c(e.nodes,n)}
                </section>
            `)}
        </div>
    `}#h(){return u`
        <loading-spinner loading class="slide-up-fade-in"
                         @animationend="${e=>e.target.classList.remove("slide-up-fade-in")}">
        </loading-spinner>
    `}#u(){return u`
        <scroll-to-top-button></scroll-to-top-button>`}#m(e){e.target.tagName.toLowerCase()==="button"&&(this.abortFetch(),this.#e.fetchPreviousState(e.target.dataset.navigationIdx),this.#i(),S.updateState(this.#e.params,["section","bu","nodes"]))}#g(){return u`
        <div class="tree-navigation-container"
             @click="${this.#m.bind(this)}">
            ${W(this.stack.length>0,()=>u`
                <button data-navigation-idx="0">Home</button>
            `)}
            ${ge(this.stack.slice(1),(e,n)=>u`
                <i class="material-symbols-outlined">chevron_right</i>
                <button data-navigation-idx="${n+1}">
                    ${e.level[e.sectionIndex].title}
                </button>
            `)}
        </div>
    `}render(){const e=this.level.length===1&&this.level[0].next;return u`
        ${this.#g()}
        ${W(this.loading,this.#h.bind(this),this.#p.bind(this))}
        ${W(e,this.#u.bind(this))}
    `}}customElements.define("lists-page",ti);S.addRoute("lists","lists-page");const ni='.results-container{display:flex;flex-direction:column;margin-top:var(--size-3)}.results-container.empty,.results-container.no-results{gap:var(--size-3);align-items:center;justify-content:center;min-height:var(--size-12);margin-top:var(--size-10);color:var(--gray-8)}.results-container.empty:before,.results-container.no-results:before{font-size:var(--size-9)}.results-container.empty:after,.results-container.no-results:after{font-family:var(--font-sans)}.results-container.empty:before{font-weight:400;font-family:Material Symbols Outlined;font-style:normal;line-height:1;content:"search";font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48}.results-container.empty:after{content:"Enter something to search"}.results-container.no-results:before{font-weight:400;font-family:Material Symbols Outlined;font-style:normal;line-height:1;content:"do_not_disturb_alt";font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48}.results-container.no-results:after{content:"No results"}intersection-observer::part(sentinel){width:100%;height:var(--size-9);margin-top:var(--size-4);background-color:var(--color-9);border:1px solid var(--color-10);border-radius:var(--radius-3);animation:var(--animation-blink)}',ii=".search-bar-container{display:flex;align-items:center;margin:0 0 var(--size-1) 0;padding:0 var(--size-2);background-color:var(--color-8);border-radius:var(--radius-2)}.search-bar-container input{width:90%}.search-bar-container button{display:flex;align-items:center;background-color:var(--color-8);border:0}",tt="rsi";class si extends D{static properties={bu:{type:String},query:{type:String}};static styles=[B,z,j(ii)];constructor(){super(),this.bu=tt,this.query=""}#t(){this.query=this.renderRoot.querySelector("input").value}#e(e){this.bu=e.target.value}updated(e){if(super.updated(e),["bu","query"].some(n=>e.has(n))){const n=this.query??"",i=this.bu??tt;this.dispatchEvent(new CustomEvent("change",{detail:{query:n,bu:i}}))}}#n(){this.query="",this.renderRoot.querySelector("input").value=""}render(){return u`
      <div class="search-bar-container fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <select aria-label="Select a business unit"
                .value="${this.bu??tt}"
                @change="${this.#e}">
          <option value="rsi" selected>RSI</option>
          <option value="rtr">RTR</option>
          <option value="rts">RTS</option>
          <option value="srf">SRF</option>
          <option value="swi">SWI</option>
        </select>
        <input type="text"
               placeholder="Search for content..."
               @keyup="${at.fn.debounce(this.#t,500)}"
               .value="${this.query??""}">
        <button title="Clear search"
                @click="${this.#n}">
          <i class="material-symbols-outlined">close</i>
        </button>
      </div>
    `}}customElements.define("search-bar",si);class ai extends D{static properties={loading:{state:!0,type:Boolean},results:{state:!0,type:Array},nextPage:{state:!0,type:Function}};static styles=[B,z,j(ni)];#t=new AbortController;#e;constructor(){super(),this.loading=!1,this.results=null,this.nextPage=null}connectedCallback(){super.connectedCallback(),this.#e=()=>{const e=this.renderRoot.querySelector("search-bar");e.query=S.queryParams.query??"",e.bu=S.queryParams.bu??"rsi"},S.addEventListener("queryparams",this.#e)}disconnectedCallback(){super.disconnectedCallback(),this.abortSearch(),S.removeEventListener("queryparams",this.#e)}async firstUpdated(e){super.firstUpdated(e);const n=this.renderRoot.querySelector("search-bar");this.#e(),await this.#i(n.bu,n.query)}async#n(e,n){S.updateState({bu:e,...n?{query:n}:{}}),await this.#i(e,n)}async#i(e,n){const i=this.abortSearch();if(!n){[this.results,this.nextPage]=[null,null];return}this.loading=!0;try{const c=await N.search(e,n,i);[this.results,this.nextPage]=[c.results,c.next]}finally{this.loading=!1}}async#s(){const e=this.abortSearch(),n=await this.nextPage(e);this.nextPage=n.next,this.results=[...this.results,...n.results]}abortSearch(){return this.#t?.abort("New search launched"),this.#t=new AbortController,this.#t.signal}#a(e){return new URLSearchParams({...S.queryParams,src:e.urn,type:"srgssr/urn"}).toString()}#r(e){const n=new Intl.DateTimeFormat("fr-CH").format(new Date(e.date)),i=at.formatTime(e.duration/1e3);return u`
      <content-link title="${e.title}"
                    href="search?${this.#a(e)}">
        <div slot="description">
          <i
            class="material-symbols-outlined">${e.mediaType==="VIDEO"?"movie":"audiotrack"}</i>
          <span>&nbsp;| ${n} | ${i}</span>
        </div>
      </content-link>
    `}#o(){const e={empty:this.results==null,"no-results":this.results&&this.results.length===0,"material-icons":!this.results||this.results.length===0};return u`
      <section class="results-container fade-in ${He(e)}"
               @animationend="${n=>n.target.classList.remove("fade-in")}">
        ${ge(this.results??[],this.#r.bind(this))}
        ${W(this.nextPage,()=>u`
          <intersection-observer
            @intersecting="${this.#s.bind(this)}">
          </intersection-observer>
        `)}
      </section>
    `}#l(){return u`
      <loading-spinner loading class="slide-up-fade-in"
                       @animationend="${e=>e.target.classList.remove("slide-up-fade-in")}">
      </loading-spinner>
    `}#c(){return u`
      <scroll-to-top-button></scroll-to-top-button>`}render(){return u`
      <search-bar
        @change="${e=>this.#n(e.detail.bu,e.detail.query)}">
      </search-bar>

      <!-- Search results -->
      ${W(this.loading,this.#l.bind(this),this.#o.bind(this))}
      ${W(this.results?.length>0,this.#c.bind(this))}
    `}}customElements.define("search-page",ai);S.addRoute("search","search-page");const ri=':host{display:inline-block;cursor:pointer}[part=switch]{display:flex;align-items:center;width:var(--size-9);height:var(--size-7);background-color:var(--gray-6);border-radius:var(--radius-4);transition:.4s}[part=slider]{display:block;width:var(--size-5);height:var(--size-5);margin-left:var(--size-2);background-color:var(--gray-1);border-radius:var(--radius-round);transition:.4s;content:""}:host([checked]) [part=switch]{background-color:var(--green-8)}:host([checked]) [part=slider]{transform:translate(var(--size-5))}:host([disabled]) [part=switch]{cursor:not-allowed;opacity:.5}';class oi extends D{static formAssociated=!0;static properties={checked:{type:Boolean,reflect:!0},disabled:{type:Boolean}};constructor(){super(),this.checked=!1,this.disabled=!1}static styles=[B,j(ri)];#t=e=>{e.key===" "&&(e.preventDefault(),this.toggle())};#e=()=>{this.toggle()};connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","switch"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("click",this.#e),this.addEventListener("keydown",this.#t)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.#e),this.removeEventListener("keydown",this.#t)}toggle(e){this.disabled||(this.checked=e??!this.checked)}updated(e){super.updated(e),e.has("checked")&&(this.setAttribute("aria-checked",this.checked.toString()),this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}render(){return u`
        <div part="switch">
            <div part="slider"></div>
        </div>
    `}}customElements.define("toggle-switch",oi);const li="[part=title]{margin:0;padding:var(--size-3) 0}[part=toggle-container],[part=input-container]{display:flex;align-items:center;justify-content:space-between;margin:0;color:var(--color-0);font-weight:var(--font-weight-6);font-size:var(--size-3);text-align:justify;background-color:var(--color-9);border:1px solid var(--color-10)}[part=toggle-container]:first-of-type,[part=input-container]:first-of-type{border-radius:var(--radius-3) var(--radius-3) 0 0}[part=toggle-container]:last-of-type,[part=input-container]:last-of-type{border-radius:0 0 var(--radius-3) var(--radius-3)}[part=label]{line-height:var(--size-8);padding-inline:var(--size-3)}[part=toggle-container] [part=label]{flex:1;cursor:pointer}[part=toggle-switch]{display:flex;align-items:center;height:var(--size-8);padding-inline:var(--size-3)}[part=input]{flex:1;margin:0;padding:var(--size-1) var(--size-3);text-align:right;background-color:var(--color-9);border-bottom-right-radius:var(--radius-3)}";class ci extends D{static properties={autoplay:{type:Boolean,state:!0},muted:{type:Boolean,state:!0},debug:{type:Boolean,state:!0},dataProviderHost:{type:String,state:!0}};static styles=[B,z,j(li)];constructor(){super();const e=me.loadPreferences();this.autoplay=e.autoplay??!1,this.muted=e.muted??!0,this.debug=e.debug??!1,this.dataProviderHost=e.dataProviderHost}updated(e){super.updated(e);const n=me.loadPreferences();[...e.keys()].filter(i=>["autoplay","muted","debug","dataProviderHost"].includes(i)).forEach(i=>{n[i]=this[i]}),me.savePreferences(n),e.has("debug")&&S.replaceState(this.debug?{debug:"true"}:{}),e.has("dataProviderHost")&&(N.host=this.dataProviderHost)}#t(e,n){return u`
      <div part="toggle-container">
        <label for="${e}-switch" part="label">${n}</label>
        <toggle-switch id="${e}-switch"
                       part="toggle-switch"
                       exportparts="slider, switch"
                       ?checked="${this[e]}"
                       @change="${i=>{this[e]=i.detail.checked}}">
        </toggle-switch>
      </div>
    `}#e(e,n){return u`
      <div part="input-container">
        <label for="${e}-input" part="label">${n}</label>
        <input type="text"
               part="input"
               placeholder="il.srgssr.ch"
               id="${e}-input"
               .value="${this[e]??""}"
               @keyup="${i=>{this[e]=i.target.value===""?void 0:i.target.value}}">
      </div>
    `}render(){return u`
      <section class="fade-in" @animationend="${e=>e.target.classList.remove("fade-in")}">
        <h2 part="title">Player Settings</h2>
        ${this.#t("autoplay","Autoplay")}
        ${this.#t("muted","Player starts muted")}
        ${this.#t("debug","Enable debug mode")}
        ${this.#e("dataProviderHost","Data provider host")}
      </section>
    `}}customElements.define("settings-page",ci);S.addRoute("settings","settings-page");const di=`@media screen and (prefers-color-scheme: dark){pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub Dark Dimmed
  Description: Dark dimmed theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Colors taken from GitHub's CSS
*/.hljs{color:#adbac7;background:#22272e}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#f47067}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#dcbdfb}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#6cb6ff}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#96d0ff}.hljs-built_in,.hljs-symbol{color:#f69d50}.hljs-comment,.hljs-code,.hljs-formula{color:#768390}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#8ddb8c}.hljs-subst{color:#adbac7}.hljs-section{color:#316dca;font-weight:700}.hljs-bullet{color:#eac55f}.hljs-emphasis{color:#adbac7;font-style:italic}.hljs-strong{color:#adbac7;font-weight:700}.hljs-addition{color:#b4f1b4;background-color:#1b4721}.hljs-deletion{color:#ffd8d3;background-color:#78191b}}@media screen and (prefers-color-scheme: light){pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#005cc5}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-comment,.hljs-code,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}}[part=container]{overflow-x:auto;font-size:var(--font-size-0)}slot{display:none}`;var nt,St;function pi(){if(St)return nt;St=1;function s(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(a=>{const o=t[a],f=typeof o;(f==="object"||f==="function")&&!Object.isFrozen(o)&&s(o)}),t}class e{constructor(a){a.data===void 0&&(a.data={}),this.data=a.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function n(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(t,...a){const o=Object.create(null);for(const f in t)o[f]=t[f];return a.forEach(function(f){for(const R in f)o[R]=f[R]}),o}const c="</span>",v=t=>!!t.scope,x=(t,{prefix:a})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const o=t.split(".");return[`${a}${o.shift()}`,...o.map((f,R)=>`${f}${"_".repeat(R+1)}`)].join(" ")}return`${a}${t}`};class H{constructor(a,o){this.buffer="",this.classPrefix=o.classPrefix,a.walk(this)}addText(a){this.buffer+=n(a)}openNode(a){if(!v(a))return;const o=x(a.scope,{prefix:this.classPrefix});this.span(o)}closeNode(a){v(a)&&(this.buffer+=c)}value(){return this.buffer}span(a){this.buffer+=`<span class="${a}">`}}const fe=(t={})=>{const a={children:[]};return Object.assign(a,t),a};class Y{constructor(){this.rootNode=fe(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(a){this.top.children.push(a)}openNode(a){const o=fe({scope:a});this.add(o),this.stack.push(o)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(a){return this.constructor._walk(a,this.rootNode)}static _walk(a,o){return typeof o=="string"?a.addText(o):o.children&&(a.openNode(o),o.children.forEach(f=>this._walk(a,f)),a.closeNode(o)),a}static _collapse(a){typeof a!="string"&&a.children&&(a.children.every(o=>typeof o=="string")?a.children=[a.children.join("")]:a.children.forEach(o=>{Y._collapse(o)}))}}class xe extends Y{constructor(a){super(),this.options=a}addText(a){a!==""&&this.add(a)}startScope(a){this.openNode(a)}endScope(){this.closeNode()}__addSublanguage(a,o){const f=a.root;o&&(f.scope=`language:${o}`),this.add(f)}toHTML(){return new H(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Z(t){return t?typeof t=="string"?t:t.source:null}function K(t){return q("(?=",t,")")}function Se(t){return q("(?:",t,")*")}function ke(t){return q("(?:",t,")?")}function q(...t){return t.map(o=>Z(o)).join("")}function Ee(t){const a=t[t.length-1];return typeof a=="object"&&a.constructor===Object?(t.splice(t.length-1,1),a):{}}function Ce(...t){return"("+(Ee(t).capture?"":"?:")+t.map(f=>Z(f)).join("|")+")"}function ce(t){return new RegExp(t.toString()+"|").exec("").length-1}function Re(t,a){const o=t&&t.exec(a);return o&&o.index===0}const _e=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ne(t,{joinWith:a}){let o=0;return t.map(f=>{o+=1;const R=o;let _=Z(f),p="";for(;_.length>0;){const d=_e.exec(_);if(!d){p+=_;break}p+=_.substring(0,d.index),_=_.substring(d.index+d[0].length),d[0][0]==="\\"&&d[1]?p+="\\"+String(Number(d[1])+R):(p+=d[0],d[0]==="("&&o++)}return p}).map(f=>`(${f})`).join(a)}const ie=/\b\B/,Te="[a-zA-Z]\\w*",de="[a-zA-Z_]\\w*",Le="\\b\\d+(\\.\\d+)?",Ae="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Pe="\\b(0b[01]+)",Fe="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",qe=(t={})=>{const a=/^#![ ]*\//;return t.binary&&(t.begin=q(a,/.*\b/,t.binary,/\b.*/)),i({scope:"meta",begin:a,end:/$/,relevance:0,"on:begin":(o,f)=>{o.index!==0&&f.ignoreMatch()}},t)},se={begin:"\\\\[\\s\\S]",relevance:0},Ge={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[se]},$e={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[se]},Ve={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},$=function(t,a,o={}){const f=i({scope:"comment",begin:t,end:a,contains:[]},o);f.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const R=Ce("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return f.contains.push({begin:q(/[ ]+/,"(",R,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),f},J=$("//","$"),ae=$("/\\*","\\*/"),pe=$("#","$"),be={scope:"number",begin:Le,relevance:0},Ie={scope:"number",begin:Ae,relevance:0},Mt={scope:"number",begin:Pe,relevance:0},Nt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[se,{begin:/\[/,end:/\]/,relevance:0,contains:[se]}]},Ot={scope:"title",begin:Te,relevance:0},jt={scope:"title",begin:de,relevance:0},Ut={begin:"\\.\\s*"+de,relevance:0};var De=Object.freeze({__proto__:null,APOS_STRING_MODE:Ge,BACKSLASH_ESCAPE:se,BINARY_NUMBER_MODE:Mt,BINARY_NUMBER_RE:Pe,COMMENT:$,C_BLOCK_COMMENT_MODE:ae,C_LINE_COMMENT_MODE:J,C_NUMBER_MODE:Ie,C_NUMBER_RE:Ae,END_SAME_AS_BEGIN:function(t){return Object.assign(t,{"on:begin":(a,o)=>{o.data._beginMatch=a[1]},"on:end":(a,o)=>{o.data._beginMatch!==a[1]&&o.ignoreMatch()}})},HASH_COMMENT_MODE:pe,IDENT_RE:Te,MATCH_NOTHING_RE:ie,METHOD_GUARD:Ut,NUMBER_MODE:be,NUMBER_RE:Le,PHRASAL_WORDS_MODE:Ve,QUOTE_STRING_MODE:$e,REGEXP_MODE:Nt,RE_STARTERS_RE:Fe,SHEBANG:qe,TITLE_MODE:Ot,UNDERSCORE_IDENT_RE:de,UNDERSCORE_TITLE_MODE:jt});function Bt(t,a){t.input[t.index-1]==="."&&a.ignoreMatch()}function zt(t,a){t.className!==void 0&&(t.scope=t.className,delete t.className)}function Ht(t,a){a&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=Bt,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Ft(t,a){Array.isArray(t.illegal)&&(t.illegal=Ce(...t.illegal))}function qt(t,a){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function Gt(t,a){t.relevance===void 0&&(t.relevance=1)}const Vt=(t,a)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const o=Object.assign({},t);Object.keys(t).forEach(f=>{delete t[f]}),t.keywords=o.keywords,t.begin=q(o.beforeMatch,K(o.begin)),t.starts={relevance:0,contains:[Object.assign(o,{endsParent:!0})]},t.relevance=0,delete o.beforeMatch},Wt=["of","and","for","in","not","or","if","then","parent","list","value"],Kt="keyword";function rt(t,a,o=Kt){const f=Object.create(null);return typeof t=="string"?R(o,t.split(" ")):Array.isArray(t)?R(o,t):Object.keys(t).forEach(function(_){Object.assign(f,rt(t[_],a,_))}),f;function R(_,p){a&&(p=p.map(d=>d.toLowerCase())),p.forEach(function(d){const g=d.split("|");f[g[0]]=[_,Xt(g[0],g[1])]})}}function Xt(t,a){return a?Number(a):Yt(t)?0:1}function Yt(t){return Wt.includes(t.toLowerCase())}const ot={},re=t=>{console.error(t)},lt=(t,...a)=>{console.log(`WARN: ${t}`,...a)},he=(t,a)=>{ot[`${t}/${a}`]||(console.log(`Deprecated as of ${t}. ${a}`),ot[`${t}/${a}`]=!0)},Me=new Error;function ct(t,a,{key:o}){let f=0;const R=t[o],_={},p={};for(let d=1;d<=a.length;d++)p[d+f]=R[d],_[d+f]=!0,f+=ce(a[d-1]);t[o]=p,t[o]._emit=_,t[o]._multi=!0}function Zt(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw re("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Me;if(typeof t.beginScope!="object"||t.beginScope===null)throw re("beginScope must be object"),Me;ct(t,t.begin,{key:"beginScope"}),t.begin=ne(t.begin,{joinWith:""})}}function Jt(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw re("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Me;if(typeof t.endScope!="object"||t.endScope===null)throw re("endScope must be object"),Me;ct(t,t.end,{key:"endScope"}),t.end=ne(t.end,{joinWith:""})}}function Qt(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function en(t){Qt(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),Zt(t),Jt(t)}function tn(t){function a(p,d){return new RegExp(Z(p),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(d?"g":""))}class o{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(d,g){g.position=this.position++,this.matchIndexes[this.matchAt]=g,this.regexes.push([g,d]),this.matchAt+=ce(d)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const d=this.regexes.map(g=>g[1]);this.matcherRe=a(ne(d,{joinWith:"|"}),!0),this.lastIndex=0}exec(d){this.matcherRe.lastIndex=this.lastIndex;const g=this.matcherRe.exec(d);if(!g)return null;const P=g.findIndex((ve,Ke)=>Ke>0&&ve!==void 0),T=this.matchIndexes[P];return g.splice(0,P),Object.assign(g,T)}}class f{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(d){if(this.multiRegexes[d])return this.multiRegexes[d];const g=new o;return this.rules.slice(d).forEach(([P,T])=>g.addRule(P,T)),g.compile(),this.multiRegexes[d]=g,g}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(d,g){this.rules.push([d,g]),g.type==="begin"&&this.count++}exec(d){const g=this.getMatcher(this.regexIndex);g.lastIndex=this.lastIndex;let P=g.exec(d);if(this.resumingScanAtSamePosition()&&!(P&&P.index===this.lastIndex)){const T=this.getMatcher(0);T.lastIndex=this.lastIndex+1,P=T.exec(d)}return P&&(this.regexIndex+=P.position+1,this.regexIndex===this.count&&this.considerAll()),P}}function R(p){const d=new f;return p.contains.forEach(g=>d.addRule(g.begin,{rule:g,type:"begin"})),p.terminatorEnd&&d.addRule(p.terminatorEnd,{type:"end"}),p.illegal&&d.addRule(p.illegal,{type:"illegal"}),d}function _(p,d){const g=p;if(p.isCompiled)return g;[zt,qt,en,Vt].forEach(T=>T(p,d)),t.compilerExtensions.forEach(T=>T(p,d)),p.__beforeBegin=null,[Ht,Ft,Gt].forEach(T=>T(p,d)),p.isCompiled=!0;let P=null;return typeof p.keywords=="object"&&p.keywords.$pattern&&(p.keywords=Object.assign({},p.keywords),P=p.keywords.$pattern,delete p.keywords.$pattern),P=P||/\w+/,p.keywords&&(p.keywords=rt(p.keywords,t.case_insensitive)),g.keywordPatternRe=a(P,!0),d&&(p.begin||(p.begin=/\B|\b/),g.beginRe=a(g.begin),!p.end&&!p.endsWithParent&&(p.end=/\B|\b/),p.end&&(g.endRe=a(g.end)),g.terminatorEnd=Z(g.end)||"",p.endsWithParent&&d.terminatorEnd&&(g.terminatorEnd+=(p.end?"|":"")+d.terminatorEnd)),p.illegal&&(g.illegalRe=a(p.illegal)),p.contains||(p.contains=[]),p.contains=[].concat(...p.contains.map(function(T){return nn(T==="self"?p:T)})),p.contains.forEach(function(T){_(T,g)}),p.starts&&_(p.starts,d),g.matcher=R(g),g}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=i(t.classNameAliases||{}),_(t)}function dt(t){return t?t.endsWithParent||dt(t.starts):!1}function nn(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(a){return i(t,{variants:null},a)})),t.cachedVariants?t.cachedVariants:dt(t)?i(t,{starts:t.starts?i(t.starts):null}):Object.isFrozen(t)?i(t):t}var sn="11.11.1";class an extends Error{constructor(a,o){super(a),this.name="HTMLInjectionError",this.html=o}}const We=n,pt=i,ht=Symbol("nomatch"),rn=7,ut=function(t){const a=Object.create(null),o=Object.create(null),f=[];let R=!0;const _="Could not find the language '{}', did you forget to load/include a language module?",p={disableAutodetect:!0,name:"Plain text",contains:[]};let d={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:xe};function g(r){return d.noHighlightRe.test(r)}function P(r){let m=r.className+" ";m+=r.parentNode?r.parentNode.className:"";const w=d.languageDetectRe.exec(m);if(w){const E=Q(w[1]);return E||(lt(_.replace("{}",w[1])),lt("Falling back to no-highlight mode for this block.",r)),E?w[1]:"no-highlight"}return m.split(/\s+/).find(E=>g(E)||Q(E))}function T(r,m,w){let E="",A="";typeof m=="object"?(E=r,w=m.ignoreIllegals,A=m.language):(he("10.7.0","highlight(lang, code, ...args) has been deprecated."),he("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),A=r,E=m),w===void 0&&(w=!0);const F={code:E,language:A};Oe("before:highlight",F);const ee=F.result?F.result:ve(F.language,F.code,w);return ee.code=F.code,Oe("after:highlight",ee),ee}function ve(r,m,w,E){const A=Object.create(null);function F(l,h){return l.keywords[h]}function ee(){if(!b.keywords){I.addText(C);return}let l=0;b.keywordPatternRe.lastIndex=0;let h=b.keywordPatternRe.exec(C),y="";for(;h;){y+=C.substring(l,h.index);const k=V.case_insensitive?h[0].toLowerCase():h[0],M=F(b,k);if(M){const[X,kn]=M;if(I.addText(y),y="",A[k]=(A[k]||0)+1,A[k]<=rn&&(Be+=kn),X.startsWith("_"))y+=h[0];else{const En=V.classNameAliases[X]||X;G(h[0],En)}}else y+=h[0];l=b.keywordPatternRe.lastIndex,h=b.keywordPatternRe.exec(C)}y+=C.substring(l),I.addText(y)}function je(){if(C==="")return;let l=null;if(typeof b.subLanguage=="string"){if(!a[b.subLanguage]){I.addText(C);return}l=ve(b.subLanguage,C,!0,xt[b.subLanguage]),xt[b.subLanguage]=l._top}else l=Xe(C,b.subLanguage.length?b.subLanguage:null);b.relevance>0&&(Be+=l.relevance),I.__addSublanguage(l._emitter,l.language)}function O(){b.subLanguage!=null?je():ee(),C=""}function G(l,h){l!==""&&(I.startScope(h),I.addText(l),I.endScope())}function bt(l,h){let y=1;const k=h.length-1;for(;y<=k;){if(!l._emit[y]){y++;continue}const M=V.classNameAliases[l[y]]||l[y],X=h[y];M?G(X,M):(C=X,ee(),C=""),y++}}function vt(l,h){return l.scope&&typeof l.scope=="string"&&I.openNode(V.classNameAliases[l.scope]||l.scope),l.beginScope&&(l.beginScope._wrap?(G(C,V.classNameAliases[l.beginScope._wrap]||l.beginScope._wrap),C=""):l.beginScope._multi&&(bt(l.beginScope,h),C="")),b=Object.create(l,{parent:{value:b}}),b}function yt(l,h,y){let k=Re(l.endRe,y);if(k){if(l["on:end"]){const M=new e(l);l["on:end"](h,M),M.isMatchIgnored&&(k=!1)}if(k){for(;l.endsParent&&l.parent;)l=l.parent;return l}}if(l.endsWithParent)return yt(l.parent,h,y)}function vn(l){return b.matcher.regexIndex===0?(C+=l[0],1):(Qe=!0,0)}function yn(l){const h=l[0],y=l.rule,k=new e(y),M=[y.__beforeBegin,y["on:begin"]];for(const X of M)if(X&&(X(l,k),k.isMatchIgnored))return vn(h);return y.skip?C+=h:(y.excludeBegin&&(C+=h),O(),!y.returnBegin&&!y.excludeBegin&&(C=h)),vt(y,l),y.returnBegin?0:h.length}function wn(l){const h=l[0],y=m.substring(l.index),k=yt(b,l,y);if(!k)return ht;const M=b;b.endScope&&b.endScope._wrap?(O(),G(h,b.endScope._wrap)):b.endScope&&b.endScope._multi?(O(),bt(b.endScope,l)):M.skip?C+=h:(M.returnEnd||M.excludeEnd||(C+=h),O(),M.excludeEnd&&(C=h));do b.scope&&I.closeNode(),!b.skip&&!b.subLanguage&&(Be+=b.relevance),b=b.parent;while(b!==k.parent);return k.starts&&vt(k.starts,l),M.returnEnd?0:h.length}function xn(){const l=[];for(let h=b;h!==V;h=h.parent)h.scope&&l.unshift(h.scope);l.forEach(h=>I.openNode(h))}let Ue={};function wt(l,h){const y=h&&h[0];if(C+=l,y==null)return O(),0;if(Ue.type==="begin"&&h.type==="end"&&Ue.index===h.index&&y===""){if(C+=m.slice(h.index,h.index+1),!R){const k=new Error(`0 width match regex (${r})`);throw k.languageName=r,k.badRule=Ue.rule,k}return 1}if(Ue=h,h.type==="begin")return yn(h);if(h.type==="illegal"&&!w){const k=new Error('Illegal lexeme "'+y+'" for mode "'+(b.scope||"<unnamed>")+'"');throw k.mode=b,k}else if(h.type==="end"){const k=wn(h);if(k!==ht)return k}if(h.type==="illegal"&&y==="")return C+=`
`,1;if(Je>1e5&&Je>h.index*3)throw new Error("potential infinite loop, way more iterations than matches");return C+=y,y.length}const V=Q(r);if(!V)throw re(_.replace("{}",r)),new Error('Unknown language: "'+r+'"');const Sn=tn(V);let Ze="",b=E||Sn;const xt={},I=new d.__emitter(d);xn();let C="",Be=0,oe=0,Je=0,Qe=!1;try{if(V.__emitTokens)V.__emitTokens(m,I);else{for(b.matcher.considerAll();;){Je++,Qe?Qe=!1:b.matcher.considerAll(),b.matcher.lastIndex=oe;const l=b.matcher.exec(m);if(!l)break;const h=m.substring(oe,l.index),y=wt(h,l);oe=l.index+y}wt(m.substring(oe))}return I.finalize(),Ze=I.toHTML(),{language:r,value:Ze,relevance:Be,illegal:!1,_emitter:I,_top:b}}catch(l){if(l.message&&l.message.includes("Illegal"))return{language:r,value:We(m),illegal:!0,relevance:0,_illegalBy:{message:l.message,index:oe,context:m.slice(oe-100,oe+100),mode:l.mode,resultSoFar:Ze},_emitter:I};if(R)return{language:r,value:We(m),illegal:!1,relevance:0,errorRaised:l,_emitter:I,_top:b};throw l}}function Ke(r){const m={value:We(r),illegal:!1,relevance:0,_top:p,_emitter:new d.__emitter(d)};return m._emitter.addText(r),m}function Xe(r,m){m=m||d.languages||Object.keys(a);const w=Ke(r),E=m.filter(Q).filter(ft).map(O=>ve(O,r,!1));E.unshift(w);const A=E.sort((O,G)=>{if(O.relevance!==G.relevance)return G.relevance-O.relevance;if(O.language&&G.language){if(Q(O.language).supersetOf===G.language)return 1;if(Q(G.language).supersetOf===O.language)return-1}return 0}),[F,ee]=A,je=F;return je.secondBest=ee,je}function on(r,m,w){const E=m&&o[m]||w;r.classList.add("hljs"),r.classList.add(`language-${E}`)}function Ye(r){let m=null;const w=P(r);if(g(w))return;if(Oe("before:highlightElement",{el:r,language:w}),r.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",r);return}if(r.children.length>0&&(d.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(r)),d.throwUnescapedHTML))throw new an("One of your code blocks includes unescaped HTML.",r.innerHTML);m=r;const E=m.textContent,A=w?T(E,{language:w,ignoreIllegals:!0}):Xe(E);r.innerHTML=A.value,r.dataset.highlighted="yes",on(r,w,A.language),r.result={language:A.language,re:A.relevance,relevance:A.relevance},A.secondBest&&(r.secondBest={language:A.secondBest.language,relevance:A.secondBest.relevance}),Oe("after:highlightElement",{el:r,result:A,text:E})}function ln(r){d=pt(d,r)}const cn=()=>{Ne(),he("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function dn(){Ne(),he("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let mt=!1;function Ne(){function r(){Ne()}if(document.readyState==="loading"){mt||window.addEventListener("DOMContentLoaded",r,!1),mt=!0;return}document.querySelectorAll(d.cssSelector).forEach(Ye)}function pn(r,m){let w=null;try{w=m(t)}catch(E){if(re("Language definition for '{}' could not be registered.".replace("{}",r)),R)re(E);else throw E;w=p}w.name||(w.name=r),a[r]=w,w.rawDefinition=m.bind(null,t),w.aliases&&gt(w.aliases,{languageName:r})}function hn(r){delete a[r];for(const m of Object.keys(o))o[m]===r&&delete o[m]}function un(){return Object.keys(a)}function Q(r){return r=(r||"").toLowerCase(),a[r]||a[o[r]]}function gt(r,{languageName:m}){typeof r=="string"&&(r=[r]),r.forEach(w=>{o[w.toLowerCase()]=m})}function ft(r){const m=Q(r);return m&&!m.disableAutodetect}function mn(r){r["before:highlightBlock"]&&!r["before:highlightElement"]&&(r["before:highlightElement"]=m=>{r["before:highlightBlock"](Object.assign({block:m.el},m))}),r["after:highlightBlock"]&&!r["after:highlightElement"]&&(r["after:highlightElement"]=m=>{r["after:highlightBlock"](Object.assign({block:m.el},m))})}function gn(r){mn(r),f.push(r)}function fn(r){const m=f.indexOf(r);m!==-1&&f.splice(m,1)}function Oe(r,m){const w=r;f.forEach(function(E){E[w]&&E[w](m)})}function bn(r){return he("10.7.0","highlightBlock will be removed entirely in v12.0"),he("10.7.0","Please use highlightElement now."),Ye(r)}Object.assign(t,{highlight:T,highlightAuto:Xe,highlightAll:Ne,highlightElement:Ye,highlightBlock:bn,configure:ln,initHighlighting:cn,initHighlightingOnLoad:dn,registerLanguage:pn,unregisterLanguage:hn,listLanguages:un,getLanguage:Q,registerAliases:gt,autoDetection:ft,inherit:pt,addPlugin:gn,removePlugin:fn}),t.debugMode=function(){R=!1},t.safeMode=function(){R=!0},t.versionString=sn,t.regex={concat:q,lookahead:K,either:Ce,optional:ke,anyNumberOfTimes:Se};for(const r in De)typeof De[r]=="object"&&s(De[r]);return Object.assign(t,De),t},ue=ut({});return ue.newInstance=()=>ut({}),nt=ue,ue.HighlightJS=ue,ue.default=ue,nt}var hi=pi();const Pt=Ln(hi),kt="[A-Za-z$_][0-9A-Za-z$_]*",ui=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],mi=["true","false","null","undefined","NaN","Infinity"],$t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],It=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Dt=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],gi=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],fi=[].concat(Dt,$t,It);function bi(s){const e=s.regex,n=($,{after:J})=>{const ae="</"+$[0].slice(1);return $.input.indexOf(ae,J)!==-1},i=kt,c={begin:"<>",end:"</>"},v=/<[A-Za-z0-9\\._:-]+\s*\/>/,x={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:($,J)=>{const ae=$[0].length+$.index,pe=$.input[ae];if(pe==="<"||pe===","){J.ignoreMatch();return}pe===">"&&(n($,{after:ae})||J.ignoreMatch());let be;const Ie=$.input.substring(ae);if(be=Ie.match(/^\s*=/)){J.ignoreMatch();return}if((be=Ie.match(/^\s+extends\s+/))&&be.index===0){J.ignoreMatch();return}}},H={$pattern:kt,keyword:ui,literal:mi,built_in:fi,"variable.language":gi},fe="[0-9](_?[0-9])*",Y=`\\.(${fe})`,xe="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",Z={className:"number",variants:[{begin:`(\\b(${xe})((${Y})|\\.)?|(${Y}))[eE][+-]?(${fe})\\b`},{begin:`\\b(${xe})\\b((${Y})\\b|\\.)?|(${Y})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},K={className:"subst",begin:"\\$\\{",end:"\\}",keywords:H,contains:[]},Se={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,K],subLanguage:"xml"}},ke={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,K],subLanguage:"css"}},q={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,K],subLanguage:"graphql"}},Ee={className:"string",begin:"`",end:"`",contains:[s.BACKSLASH_ESCAPE,K]},ce={className:"comment",variants:[s.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),s.C_BLOCK_COMMENT_MODE,s.C_LINE_COMMENT_MODE]},Re=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,Se,ke,q,Ee,{match:/\$\d+/},Z];K.contains=Re.concat({begin:/\{/,end:/\}/,keywords:H,contains:["self"].concat(Re)});const _e=[].concat(ce,K.contains),ne=_e.concat([{begin:/(\s*)\(/,end:/\)/,keywords:H,contains:["self"].concat(_e)}]),ie={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:H,contains:ne},Te={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},de={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...$t,...It]}},Le={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ae={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ie],illegal:/%/},Pe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Fe($){return e.concat("(?!",$.join("|"),")")}const qe={match:e.concat(/\b/,Fe([...Dt,"super","import"].map($=>`${$}\\s*\\(`)),i,e.lookahead(/\s*\(/)),className:"title.function",relevance:0},se={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Ge={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ie]},$e="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+s.UNDERSCORE_IDENT_RE+")\\s*=>",Ve={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead($e)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ie]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:H,exports:{PARAMS_CONTAINS:ne,CLASS_REFERENCE:de},illegal:/#(?![$_A-z])/,contains:[s.SHEBANG({label:"shebang",binary:"node",relevance:5}),Le,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,Se,ke,q,Ee,ce,{match:/\$\d+/},Z,de,{scope:"attr",match:i+e.lookahead(":"),relevance:0},Ve,{begin:"("+s.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[ce,s.REGEXP_MODE,{className:"function",begin:$e,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:s.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:H,contains:ne}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:c.begin,end:c.end},{match:v},{begin:x.begin,"on:begin":x.isTrulyOpeningTag,end:x.end}],subLanguage:"xml",contains:[{begin:x.begin,end:x.end,skip:!0,contains:["self"]}]}]},Ae,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+s.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ie,s.inherit(s.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},se,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ie]},qe,Pe,Te,Ge,{match:/\$[(.]/}]}}Pt.registerLanguage("javascript",bi);class vi extends D{static styles=[j(di)];static properties={language:{type:String},code:{tyoe:String,state:!0}};constructor(e){super(e),this.language="javascript"}#t(){const n=this.shadowRoot.querySelector("slot").assignedNodes()[0].textContent;this.code=Pt.highlight(n,{language:this.language}).value}render(){return u`
      <pre part="container"><code>${Ct(this.code)}</code></pre>
      <slot @slotchange="${()=>this.#t()}"></slot>
    `}}customElements.define("code-block",vi);const yi="::slotted([slot=demo]){aspect-ratio:var(--ratio-widescreen)}::slotted([slot=description]){padding-left:var(--size-2);color:var(--color-4);font-weight:var(--font-weight-3);font-size:var(--font-size-1);text-align:justify;border-left:3px solid var(--color-5)}[part=implementation-toggle]{display:flex;align-items:center;cursor:pointer}[part=implementation-toggle] i{margin-right:var(--size-1)}[part=implementation]{display:none;margin-bottom:var(--size-4);background-color:var(--color-10);border:2px solid var(--color-5);border-radius:var(--radius-1);box-shadow:var(--inner-shadow-4)}[part=implementation].active{display:block}[part=implementation-code]{padding-inline:var(--size-3)}[part=implementation-footer]{display:flex;align-items:center;justify-content:end;border-top:1px solid var(--color-6);padding-inline:var(--size-2)}[part=implementation-link]{padding:var(--size-2);font-size:var(--font-size-0)}.hidden{display:none}";class wi extends D{static styles=[B,z,j(yi)];static properties={collapsed:{type:Boolean},hasCodeExample:{type:Boolean,state:!0},exampleLanguage:{type:String},href:{type:String}};connectedCallback(){super.connectedCallback(),this.collapsed=!0,this.shadowRoot.addEventListener("slotchange",()=>{this.hasCodeExample=this.#t("code")})}updated(e){super.updated(e),e.has("collapsed")&&!this.collapsed&&this.shadowRoot.querySelector('[part="implementation"]').classList.add("active")}#t(e){return this.shadowRoot.querySelector(`slot[name="${e}"]`).assignedNodes().length>0}#e(e){e.target.classList.toggle("active",!e.target.classList.contains("fade-out-shrink")),e.target.classList.remove("fade-in-grow","fade-out-shrink")}#n(){return{"fade-in-grow":this.collapsed===!1,"fade-out-shrink":this.collapsed===!0}}render(){return u`
      <slot name="title"></slot>
      <slot name="description"></slot>

      <div class="${this.hasCodeExample?"":"hidden"}">
        <h3 part="implementation-toggle" @click="${()=>{this.collapsed=!this.collapsed}}">
          <i class="material-symbols-outlined">${this.collapsed?"visibility":"visibility_off"}</i>
          ${this.collapsed?"See the Implementation":"Hide the Implementation"} 
        </h3>
        <div part="implementation"
             class="${He(this.#n())}"
             @animationend="${e=>this.#e(e)}">
          <div part="implementation-code">
            <slot name="code"></slot>
          </div>
          ${W(this.href,()=>u`
            <div part="implementation-footer">
              <a
                href="https://github.com/SRGSSR/pillarbox-web-demo/blob/main/static/showcases/${this.href}"
                part="implementation-link"
                target="_blank">
                view on github
              </a>
            </div>
          `)}
        </div>
      </div>
    `}}customElements.define("showcase-component",wi);const xi="[part=showcase-link]{display:flex;flex-direction:column;gap:var(--size-2);justify-content:center;min-height:var(--size-9);margin:0;color:var(--color-0);font-weight:var(--font-weight-6);font-size:var(--size-3);text-align:center;text-decoration:none;background-color:var(--color-9);border:1px solid var(--color-10);border-radius:var(--radius-2);transition:background-color .4s,border-color .4s;padding-inline:var(--size-3)}[part=showcase-link]:hover{text-decoration:none;background-color:var(--color-8);border-color:var(--color-9)}div{margin-top:var(--size-7)}div:last-child{margin-bottom:var(--size-7)}a{font-size:inherit}",Si=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pillarbox Demo - Start Time Showcase</title>
  <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
  <link rel="stylesheet" href="./static-showcase.scss"/>
</head>

<body>
<core-demo-header></core-demo-header>
<div class="showcase-content">
  <h2>Start the player at a given position</h2>
  <div class="video-container">
    <video-js id="video-element-id" class="pillarbox-js" controls></video-js>
  </div>

  <button class="showcase-btn" id="close-btn">Close this window</button>
</div>

<script type="module" data-implementation>
  import pillarbox from '@srgssr/pillarbox-web';

  // Create by referencing the video element with its unique ID
  const player = pillarbox('video-element-id', { muted: true });

  // Load the video source
  player.src({ src: 'urn:rts:video:6820736', type: 'srgssr/urn' });

  // Listen for the 'loadeddata' event, indicating that the video data has loaded
  player.on('loadeddata', () => {
    // Set the desired start position in seconds (e.g., start at 5 minutes)
    player.currentTime(300);
  });
<\/script>

<script type="module">
  import pillarbox from '@srgssr/pillarbox-web';
  import '../../src/layout/header/core-demo-header-component.js';

  document.querySelector('#close-btn').addEventListener('click', () => {
    window.close();
  });

  window.pillarbox = pillarbox;
<\/script>

</body>
</html>
`,ki=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pillarbox Demo - Multi Player Showcase</title>
  <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
  <link rel="stylesheet" href="./static-showcase.scss"/>
</head>

<body>
<core-demo-header></core-demo-header>
<div class="showcase-content">
  <h2>Multiple players</h2>

  <div class="video-container">
    <video-js id="main-player" class="pillarbox-js" controls></video-js>
  </div>

  <button class="showcase-btn" id="toggle-player">Toggle main player</button>

  <div class="video-container">
    <video-js id="second-player" class="pillarbox-js" controls></video-js>
  </div>

  <button class="showcase-btn" id="close-btn">Close this window</button>
</div>
<script type="module" data-implementation>
  import pillarbox from '@srgssr/pillarbox-web';

  // Initialize the Main Player
  const mainPlayer = pillarbox('main-player', { debug: true });
  mainPlayer.src({ src: 'urn:rts:video:6820736', type: 'srgssr/urn' });

  // Initialize the Second Player
  const secondPlayer = pillarbox('second-player', { muted: true, debug: true });
  // Tracking is disabled for this source, only one source can be tracked at a time.
  secondPlayer.src({ src: 'urn:rts:video:6735513', type: 'srgssr/urn', disableTrackers: true });

  // Add an event listener to a button with the id 'toggle-player'
  document.querySelector('#toggle-player').addEventListener('click', () => {
    // Toggle the mute state for both mainPlayer and secondPlayer
    pillarbox.getAllPlayers().forEach(player => {
      player.muted(!player.muted());
    });
  });
<\/script>

<script type="module">
  import pillarbox from '@srgssr/pillarbox-web';
  import '../../src/layout/header/core-demo-header-component.js';

  document.querySelector('#close-btn').addEventListener('click', () => {
    window.close();
  });

  window.pillarbox = pillarbox;
<\/script>

</body>
</html>
`,Ei=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pillarbox Demo - Detect blocked segment</title>
  <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
  <link rel="stylesheet" href="./blocked-segment.scss"/>
</head>

<body>
<core-demo-header></core-demo-header>
<div class="showcase-content">
  <h2>Detect blocked segment</h2>
  <div class="video-container">
    <video-js id="video-element-id" class="pillarbox-js" controls></video-js>
  </div>

  <button class="showcase-btn" id="close-btn">Close this window</button>
</div>

<script type="module" data-implementation>
  // Import the pillarbox library
  import pillarbox from '@srgssr/pillarbox-web';

  const Plugin = pillarbox.getPlugin('plugin');

  // A Pillarbox plugin to display a blocked segment notification.
  class BlockedSegmentNotification extends Plugin {
    // Reference to the component used to display the blocked segment notification.
    #component;
    // The id for the timeout function responsible for managing the auto-hide of the notification.
    #timeoutId;

    /**
     *
     * @param player {import('@srgssr/pillarbox-web').Player}
     * @param options
     */
    constructor(player, options) {
      super(player, options);

      // Attach the DOM element when the player is ready,
      this.player.ready(() => this.#attachComponent());
      // Wait for the blocked segment change event.
      this.player.on('srgssr/blocked-segment', ({ data }) => this.#handleBlockedSegmentChange(data));
    }

    #attachComponent() {
      this.#component = player.addChild('component', {
        // Set the class for styling and hide the element with 'vjs-hidden'
        className: 'pbw-blocked-segment-notification vjs-hidden'
      });
    }

    async #handleBlockedSegmentChange(data) {
      // Cancel the previous timeout
      clearTimeout(this.#timeoutId);

      // Parse the JSON content of the active cue to get the blocked segment information
      const blockSegment = JSON.parse(data.text);
      const blockReason = blockSegment.blockReason ?? 'UNKNOWN';
      // Block reasons are localized out of the box, alternatively you can make your own
      const message = this.#component.localize(blockReason);

      // Update the displayed notification text with the appropriate message
      this.#component.el().textContent = \`ⓘ \${message}\`;

      // Show the blocked segment notification
      this.#component.show();

      // Set a timeout to hide the notification after a specified delay
      this.#timeoutId = setTimeout(() => {
        this.#component.hide();
        this.#timeoutId = undefined;
      }, this.options.delay);
    }

    // Get the options of this plugin
    get options() {
      return this.player.options().plugins.blockedSegmentNotification;
    }
  }

  // Register a plugin to display notifications on blocked segments
  pillarbox.registerPlugin('blockedSegmentNotification', BlockedSegmentNotification);

  // Create a pillarbox player instance with the blockedSegmentNotification plugin
  const player = pillarbox(
    'video-element-id', {
      muted: true,
      plugins: {
        blockedSegmentNotification: {
          delay: 5000, // Delay in milliseconds before hiding the notification
        }
      }
    }
  );

  // Load the video source for the player
  player.src({ src: 'urn:srf:video:40ca0277-0e53-4312-83e2-4710354ff53e', type: 'srgssr/urn' });
<\/script>

<script type="module">
  import pillarbox from '@srgssr/pillarbox-web';
  import '../../src/layout/header/core-demo-header-component.js';

  document.querySelector('#close-btn').addEventListener('click', () => {
    window.close();
  });

  window.pillarbox = pillarbox;
<\/script>

</body>
</html>
`,Ci=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pillarbox Demo - Display Current Chapter</title>
  <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
  <link rel="stylesheet" href="./chapters-showcase.scss"/>
</head>

<body>
<core-demo-header></core-demo-header>
<div class="showcase-content">
  <h2>Display Current Chapter</h2>
  <div class="video-container">
    <video-js id="video-element-id" class="pillarbox-js" controls></video-js>
  </div>

  <button class="showcase-btn" id="close-btn">Close this window</button>
</div>

<script type="module" data-implementation>
  // Import the pillarbox library
  import pillarbox from '@srgssr/pillarbox-web';

  const Plugin = pillarbox.getPlugin('plugin');

  // A Pillarbox plugin to display information about the current chapter.
  class CurrentChapterPlugin extends Plugin {
    // Reference to the component used to display the current chapter information.
    #component;

    constructor(player, options) {
      super(player, options);

      // Attach the DOM element when the player is ready,
      this.player.ready(() => this.#attachComponent());
      // Wait for the chapter change event
      this.player.on('srgssr/chapter', ({ data }) => this.#handleChapterChange(data));
    }

    #attachComponent() {
      // Create a new component to display the current chapter information
      this.#component = this.player.getChild('ControlBar').addChild('component', {
        id: 'current-chapter',
        // Set the class for styling and hide the element with 'vjs-hidden'
        className: 'pbw-current-chapter vjs-hidden'
      });

      // Create an image element for the chapter thumbnail
      const thumbnailImg = document.createElement('img');
      thumbnailImg.className = 'pbw-chapter-thumbnail';

      // Create a span element for the chapter title
      const chapterText = document.createElement('span');
      chapterText.className = 'pbw-chapter-title';

      // Append the thumbnail and title elements to the component
      this.#component.el().appendChild(thumbnailImg);
      this.#component.el().appendChild(chapterText);

      // Add a function to the component to update the chapter information
      this.#component.updateData = (img, text) => {
        chapterText.textContent = text;
        thumbnailImg.src = img;
      };
    }

    #handleChapterChange(data) {
      // Check if there are active cues in the chapters text track
      if (!data) {
        // Hide the current chapter component if there are no active cues
        this.#component.hide();
        return;
      }

      // Parse the JSON content of the active cue to get the current chapter information
      const currentChapter = JSON.parse(data.text);

      // Update the displayed chapter title and thumbnail
      this.#component.updateData(currentChapter.imageUrl, currentChapter.title);

      // Show the current chapter component
      this.#component.show();
    }
  }

  // Register a plugin to display the currently playing chapter
  pillarbox.registerPlugin('currentChapter', CurrentChapterPlugin);

  // Create a pillarbox player instance with the currentChapter plugin
  const player = pillarbox(
    'video-element-id',
    {
      muted: true,
      plugins: { currentChapter: true }
    }
  );

  // Set the video source for the player
  player.src({ src: 'urn:rts:video:10894383', type: 'srgssr/urn' });
<\/script>

<script type="module">
  import pillarbox from '@srgssr/pillarbox-web';
  import '../../src/layout/header/core-demo-header-component.js';

  document.querySelector('#close-btn').addEventListener('click', () => {
    window.close();
  });

  window.pillarbox = pillarbox;
<\/script>

</body>
</html>
`,Ri=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pillarbox Demo - Skip Credits</title>
  <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
  <link rel="stylesheet" href="./skip-showcase.scss"/>
</head>

<body>
<core-demo-header></core-demo-header>
<div class="showcase-content">
  <h2>Skip Credits</h2>
  <div class="video-container">
    <video-js id="video-element-id" class="pillarbox-js" controls></video-js>
  </div>

  <button class="showcase-btn" id="close-btn">Close this window</button>
</div>

<script type="module" data-implementation>
  // Import the pillarbox library
  import pillarbox from '@srgssr/pillarbox-web';
  // Import the skip-button component
  import '@srgssr/skip-button';

  // Create a pillarbox player instance with the skip-button component
  const player = pillarbox(
    'video-element-id',
    {
      muted: true,
      SkipButton: true
    }
  );

  // Load the video source for the player
  player.src({ src: 'urn:rts:video:15532586', type: 'srgssr/urn' });
<\/script>

<script type="module">
  import pillarbox from '@srgssr/pillarbox-web';
  import '../../src/layout/header/core-demo-header-component.js';

  document.querySelector('#close-btn').addEventListener('click', () => {
    window.close();
  });

  window.pillarbox = pillarbox;
<\/script>

</body>
</html>
`,_i=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pillarbox Demo - Playlist</title>
  <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
  <link rel="stylesheet" href="./playlist-showcase.scss"/>
</head>

<body>
<core-demo-header></core-demo-header>
<div class="showcase-content">
  <h2>Playlist</h2>
  <div class="video-container">
    <video-js id="video-element-id" class="pillarbox-js" controls crossorigin="anonymous"></video-js>
  </div>

  <button class="showcase-btn" id="close-btn">Close this window</button>
</div>

<script type="module" data-implementation>
  // Import the pillarbox library and the SrgSsr utility class
  import { default as pillarbox, SrgSsr } from '@srgssr/pillarbox-web';
  // Import the playlist plugin for pillarbox
  import '@srgssr/pillarbox-playlist';
  // Import the playlist UI plugin for pillarbox
  import '@srgssr/pillarbox-playlist/ui';

  // Create a pillarbox player instance with the playlist plugin
  const player = pillarbox('video-element-id', {
    // Activate autoplay to automatically start the next element
    autoplay: true,
    muted: true,
    plugins: {
      // Configure the playlist plugin
      pillarboxPlaylist: { autoadvance: true, repeat: true },
      // Configure the playlist UI plugin and specify where to insert it in the UI
      pillarboxPlaylistUI: { insertChildBefore: 'fullscreenToggle' }
    }
  });

  // Define an array of video sources
  const sources = [
    'urn:rts:video:14827742',
    'urn:srf:video:05457f66-fd67-4131-8e0a-6d85743efc39',
    'urn:rtr:video:33136b80-bec6-40cd-a771-b8954c805098',
    'urn:rts:video:9883196',
  ];

  Promise.all(sources.map(async urn => {
    // Fetch the media composition data for each URN
    const mediaComposition = await SrgSsr.getMediaComposition(urn, SrgSsr.dataProvider(player));
    // Get the main chapter of the media composition
    const mainChapter = mediaComposition.getMainChapter();

    return {
      // Define the sources of this playlist item URL and type
      sources: [{ src: urn, type: 'srgssr/urn' }],
      // Define the title and duration in seconds
      data: { title: mainChapter.title, duration: mainChapter.duration / 1000 },
      // Define the poster image
      poster: mainChapter.imageUrl
    };
  })).then(playlist => {
    // Load the playlist
    player.pillarboxPlaylist().load(playlist);
  });
<\/script>

<script type="module">
  import pillarbox from '@srgssr/pillarbox-web';
  import '../../src/layout/header/core-demo-header-component.js';

  document.querySelector('#close-btn').addEventListener('click', () => {
    window.close();
  });

  window.pillarbox = pillarbox;
<\/script>

</body>
</html>
`,Ti=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pillarbox Demo - Quality Menu</title>
  <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
  <link rel="stylesheet" href="./quality-menu.scss"/>
</head>

<body>
<core-demo-header></core-demo-header>
<div class="showcase-content">
  <h2>Quality Menu</h2>
  <div class="video-container">
    <video-js id="video-element-id" class="pillarbox-js" controls></video-js>
  </div>

  <button class="showcase-btn" id="close-btn">Close this window</button>
</div>

<script type="module" data-implementation>
  import pillarbox from '@srgssr/pillarbox-web';
  // Import the quality menu plugin
  import 'videojs-contrib-quality-menu';

  // Create a pillarbox player instance with the quality menu plugin
  const player = pillarbox(
    'video-element-id',
    {
      muted: true,
      plugins: { qualityMenu: true }
    }
  );

  // Load the video source
  player.src({ src: 'urn:rts:video:9883196', type: 'srgssr/urn' });
<\/script>

<script type="module">
  import pillarbox from '@srgssr/pillarbox-web';
  import '../../src/layout/header/core-demo-header-component.js';

  document.querySelector('#close-btn').addEventListener('click', () => {
    window.close();
  });

  window.pillarbox = pillarbox;
<\/script>

</body>
</html>
`,Li=`<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pillarbox Demo - Display Countdown</title>
    <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
    <link rel="stylesheet" href="./countdown.scss" />
  </head>

  <body>
    <core-demo-header></core-demo-header>
    <div class="showcase-content">
      <h2>Display Countdown</h2>
      <div class="video-container">
        <video-js id="video-element-id" class="pillarbox-js" controls></video-js>
      </div>

      <button class="showcase-btn" id="close-btn">Close this window</button>
    </div>

    <script type="module" data-implementation>
      // Import the pillarbox library
      import pillarbox from '@srgssr/pillarbox-web';

      const ModalDialog = pillarbox.getComponent('ModalDialog');

      /**
       * Provides a countdown timer functionality within a modal dialog.
       */
      class Countdown extends ModalDialog {
        /**
         * Creates an instance of Countdown.
         *
         * @param {Player} player The video.js player instance
         * @param {Object} options Configuration options for the modal dialog
         */
        constructor(player, options) {
          const opts = pillarbox.obj.merge(options, {
            pauseOnOpen: false,
            fillAlways: true,
            temporary: false,
            uncloseable: true
          });

          super(player, opts);

          this.intervalId = undefined;
          this.reset = this.reset.bind(this);

          this.on(player, ['loadstart', 'playerreset', 'dispose', 'error'], this.reset);
        }

        /**
         * The CSS class name for the countdown modal dialog.
         *
         * @returns {string} The CSS class name
         */
        buildCSSClass() {
          return \`pillarbox-countdown \${super.buildCSSClass()}\`;
        }

        /**
         * Disposes of the countdown component.
         *
         * Cleans up any resources and event listeners.
         */
        dispose() {
          this.reset();
          this.off(this.player(), ['loadstart', 'playerreset', 'dispose', 'error'], this.reset);

          super.dispose();
        }

        /**
         * Resets the countdown timer.
         *
         * Clears the interval, closes the modal, and empties its content.
         */
        reset() {
          this.clearInterval(this.intervalId);
          this.close();
          this.empty();

          this.intervalId = undefined;
        }

        /**
         * Starts the countdown timer.
         *
         * @param {number} timestamp The target timestamp in milliseconds
         * @param {string} source The source to play when the countdown ends
         *
         * @returns {boolean} True if the countdown started successfully
         */
        start(timestamp, source) {
          this.reset();

          if (typeof timestamp !== 'number') return;

          this.intervalId = this.setInterval(() => {
            const remainingDuration = this.remainingDuration(timestamp);

            if (remainingDuration.totalInMilliseconds <= 0) {
              this.reset();
              this.player().src(source);

              return;
            }

            this.fillWith(\`\${remainingDuration.days
              }d \${remainingDuration.hours
              }h \${remainingDuration.minutes
              }m \${remainingDuration.seconds
              }s remaining\`);
          }, 1_000);

          this.open();

          return true;
        }

        /**
         * The remaining duration until the target timestamp.
         *
         * @param {number} timestamp The target timestamp in milliseconds
         *
         * @returns {Object} An object containing the remaining days, hours, minutes, seconds, and total in milliseconds
         */
        remainingDuration(timestamp) {
          const SECONDS_IN_MS = 1_000;
          const MINUTES = 60 * SECONDS_IN_MS;
          const HOURS = 60 * MINUTES;
          const DAYS = 24 * HOURS;
          const totalInMilliseconds = timestamp - Date.now();

          let diff = totalInMilliseconds;
          // Calculate days, hours, minutes, and seconds
          let days = Math.floor(diff / DAYS);
          diff -= days * DAYS;

          let hours = Math.floor(diff / HOURS);
          diff -= hours * HOURS;

          let minutes = Math.floor(diff / MINUTES);
          diff -= minutes * MINUTES;

          let seconds = Math.floor(diff / SECONDS_IN_MS);

          return {
            days: days.toString().padStart(2, '0'),
            hours: hours.toString().padStart(2, '0'),
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0'),
            totalInMilliseconds
          }
        }
      }

      // Register Countdown component
      pillarbox.registerComponent('Countdown', Countdown);

      // Create a pillarbox player instance with the countdown component
      const player = pillarbox(
        'video-element-id',
        {
          muted: true,
          fill: true,
          // Add the countdown component to the player
          countdown: true,
        }
      );

      // Listen for player errors
      player.on('error', () => {
        // Get the metadata associated with the error
        const { metadata = {} } = player.error() || {};

        // If the error is not of type STARTDATE we do nothing
        if (metadata.errorType !== 'STARTDATE') return;

        // Extract the validFrom property from the mediaData
        const {
          src: {
            mediaData: {
              chapters: [{ validFrom } = {}] = []
            } = {}
          } = {}
        } = metadata;
        const timestamp = new Date(validFrom).getTime();

        if (!player.countdown.start(timestamp, player.currentSource())) return;

        // Closes error display component to prevent overlapping
        if (player.errorDisplay && player.errorDisplay.opened()) {
          player.errorDisplay.close();
        }
      });

      // In the absence of media generating a STARTDATE error, this function
      // manually activates the countdown
      player.countdown.start(Date.now() + 5_977_235_000, { src: 'urn:rts:video:10894383', type: 'srgssr/urn' });

      // If a media sends a STARTDATE error, the countdown is automatically
      // activated, since the logic for activating the countdown is handled by
      // the error event handler
      // player.src({ src: 'urn:rts:video:10894383', type: 'srgssr/urn' });

      window.player = player;
    <\/script>

    <script type="module">
      import pillarbox from '@srgssr/pillarbox-web';
      import '../../src/layout/header/core-demo-header-component.js';

      document.querySelector('#close-btn').addEventListener('click', () => {
        window.close();
      });

      window.pillarbox = pillarbox;
    <\/script>

  </body>

</html>
`,Ai=`<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pillarbox Demo - Playback Rate</title>
    <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
    <link rel="stylesheet" href="./playback-rate.scss" />
  </head>

  <body>
    <core-demo-header></core-demo-header>
    <div class="showcase-content">
      <h2>Playback Rate</h2>
      <div class="video-container">
        <video-js id="video-element-id" class="pillarbox-js" controls></video-js>
      </div>

      <button class="showcase-btn" id="close-btn">Close this window</button>
    </div>

    <script type="module" data-implementation>
      // Import the pillarbox library
      import pillarbox from '@srgssr/pillarbox-web';

      const player = pillarbox(
        'video-element-id',
        {
          fill: true,
          muted: true,
          // Add the playback rate component to the player
          playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
        }
      );

      player.src({ src: 'urn:rts:video:9883196', type: 'srgssr/urn' });

      window.player = player;
    <\/script>

    <script type="module">
      import pillarbox from '@srgssr/pillarbox-web';
      import '../../src/layout/header/core-demo-header-component.js';

      document.querySelector('#close-btn').addEventListener('click', () => {
        window.close();
      });

      window.pillarbox = pillarbox;
    <\/script>

  </body>

</html>
`,Pi=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pillarbox Demo - Chapter Selection</title>
  <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
  <link rel="stylesheet" href="./chapter-selection.scss"/>
</head>

<body>
<core-demo-header></core-demo-header>
<div class="showcase-content">
  <h2>Chapter Selection</h2>
  <div class="video-container">
    <video-js id="video-element-id" class="pillarbox-js" controls></video-js>
  </div>

  <button class="showcase-btn" id="close-btn">Close this window</button>
</div>

<script type="module" data-implementation>
  // Import the pillarbox library
  import pillarbox from '@srgssr/pillarbox-web';

  // Create a pillarbox player instance with the currentChapter plugin
  window.player = pillarbox(
    'video-element-id',
    { muted: true }
  );

  // Listen for a chapter change
  player.on('srgssr/chapter', ({ data = { text : null} }) => {
    const currentChapter = JSON.parse(data.text);

    // Select the current chapter
    document.querySelectorAll('.chapter').forEach(chapter => {
      const isChapterSelected = currentChapter && currentChapter.urn === chapter.dataset.urn;
      chapter.classList.toggle('chapter-selected', isChapterSelected);
    });
  });

  // Listens for the loadeddata event to build the chapter selector
  player.on('loadeddata', () => {
    // Remove the chapter selector element each time a new media is loaded
    if(document.getElementById('chapter-selector')){
      document.getElementById('chapter-selector').remove();
    }

    // Get each cue from the srgssr-chapters text track
    const chapters = Array.from(player.textTracks().getTrackById('srgssr-chapters').cues);

    if(!chapters) return;

    // Create the chapter selector element
    const chapterSelector = document.createElement('div');

    chapterSelector.id ="chapter-selector";

    // Create the chapter element
    chapters.forEach(({startTime, text}, i) => {
      // Extract the data used to create the chapter UI
      const {
        duration,
        imageUrl,
        imageTitle,
        mediaType,
        title,
        urn,
        vendor
      } = JSON.parse(text);
      const chapterId = \`\${'chapter-' + i}\`;
      const chapter = document.createElement('a');

      chapter.dataset.urn = urn;
      chapter.className = 'chapter';
      chapter.setAttribute('aria-labelledby', chapterId);
      // Create the Play URL for the chapter
      chapter.href = \`https://www.\${vendor.toLowerCase()}.ch/play/tv/-/\${mediaType.toLowerCase()}/-?urn=\${urn}\`;
      // The UI to display the chapter
      chapter.innerHTML = /*html*/\`
        <figure>
          <img
            src="\${imageUrl}"
            alt="\${imageTitle}"
            loading="lazy"
          />
          <figcaption id="\${chapterId}">
            <p class="title">\${title}</p>
            <span aria-hidden="true" class="duration">\${pillarbox.time.formatTime(duration/1_000, 600)}</span>
          </figcaption>
        </figure>
      \`;

      // Handle the click on a chapter
      chapter.addEventListener('click', (e) => {
        e.preventDefault();

        // Add a small tolerance to avoid selecting the previous chapter when
        // endTime matches the selected chapter’s startTime
        player.currentTime(startTime + 0.1);
      });

      // Append the chapter to the chapter selector element
      chapterSelector.append(chapter);
    });

    // Append the chapter selector element to the document body
    document.body.append(chapterSelector);
  });

  // Set the video source for the player
  player.src({ src: 'urn:rts:video:10894383', type: 'srgssr/urn' });
<\/script>

<script type="module">
  import pillarbox from '@srgssr/pillarbox-web';
  import '../../src/layout/header/core-demo-header-component.js';

  document.querySelector('#close-btn').addEventListener('click', () => {
    window.close();
  });

  window.pillarbox = pillarbox;
<\/script>

</body>
</html>
`,$i=`<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pillarbox Demo - Hide Firefox PiP Button</title>
    <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
    <link rel="stylesheet" href="./firefox-pip.scss" />
  </head>

  <body>
    <core-demo-header></core-demo-header>
    <div class="showcase-content">
      <h2>Hide Firefox PiP Button</h2>
      <div class="video-container">
        <video-js id="video-element-id" class="pillarbox-js" controls></video-js>
      </div>

      <button class="showcase-btn" id="close-btn">Close this window</button>
    </div>

    <script type="module" data-implementation>
      // Import the pillarbox library
      import pillarbox from '@srgssr/pillarbox-web';

      const player = pillarbox(
        'video-element-id',
        {
          fill: true,
          muted: true,
          // For Firefox compatibility refer to https://caniuse.com/mdn-api_htmlvideoelement_disablepictureinpicture
          disablePictureInPicture: pillarbox.browser.IS_FIREFOX
        }
      );

      player.src({ src: 'urn:rts:video:9883196', type: 'srgssr/urn' });

      window.player = player;
    <\/script>

    <script type="module">
      import pillarbox from '@srgssr/pillarbox-web';
      import '../../src/layout/header/core-demo-header-component.js';

      document.querySelector('#close-btn').addEventListener('click', () => {
        window.close();
      });

      window.pillarbox = pillarbox;
    <\/script>

  </body>

</html>
`,Ii=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pillarbox Demo - Spatial Navigation</title>
    <link rel="icon" type="image/x-icon" href="../../img/favicon.ico" />
    <link rel="stylesheet" href="./spatial-navigation.scss" />
  </head>

  <body>
    <core-demo-header></core-demo-header>
    <div class="showcase-content">
      <h2>Spatial Navigation</h2>
      <div class="video-container">
        <video-js
          id="video-element-id"
          class="pillarbox-js"
          controls
        ></video-js>
      </div>

      <button class="showcase-btn" id="close-btn">Close this window</button>
    </div>

    <script type="module" data-implementation>
      // Import the pillarbox library
      import pillarbox from "@srgssr/pillarbox-web";

      const player = pillarbox(
        "video-element-id",
        {
          fill: true,
          muted: true,
          spatialNavigation: {
            enabled: true,
            horizontalSeek: true,
          },
        },
        () => {
          player.spatialNavigation.start();
        }
      );

      player.src({ src: "urn:rts:video:9883196", type: "srgssr/urn" });

      window.player = player;
    <\/script>

    <script type="module">
      import pillarbox from "@srgssr/pillarbox-web";
      import "../../src/layout/header/core-demo-header-component.js";

      document.querySelector("#close-btn").addEventListener("click", () => {
        window.close();
      });

      window.pillarbox = pillarbox;
    <\/script>
  </body>
</html>
`,Di=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pillarbox Demo - Thumbnail Preview</title>
  <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
  <link rel="stylesheet" href="./thumbnail-preview.scss"/>
</head>

<body>
<core-demo-header></core-demo-header>
<div class="showcase-content">
  <h2>Thumbnail Preview</h2>
  <div class="video-container">
    <video-js id="video-element-id" class="pillarbox-js" controls></video-js>
  </div>

  <button class="showcase-btn" id="close-btn">Close this window</button>
</div>

<script type="module" data-implementation>
  // Import the pillarbox library
  import pillarbox from '@srgssr/pillarbox-web';
  // Import the thumbnail-preview plugin
  import '@srgssr/thumbnail-preview';

  // Create a pillarbox player instance with the thumbnail-preview component
  const player = pillarbox('video-element-id', { plugins: { thumbnailPreview: {} } });

  // Find and set the sprite sheet on loaded metadata
  player.on('loadedmetadata', () => {
    const thumbnailPreview = player.thumbnailPreview();
    const spriteSheet = player
      .currentSource()
      .mediaData
      ?.chapters
      ?.find(chapter => chapter.urn === 'urn:rts:video:15532586')
      ?.spriteSheet;

    // If there is no sprite metadata force the preview component to hide.
    if (!spriteSheet || ! spriteSheet.url) {
      thumbnailPreview.resetSprite();
      return;
    }

    // Set the sprite of the thumbnail preview plugin
    thumbnailPreview.updateSprite(spriteSheet);
  });

  // Load the video source for the player
  player.src({ src: 'urn:rts:video:15532586', type: 'srgssr/urn' });
<\/script>

<script type="module">
  import pillarbox from '@srgssr/pillarbox-web';
  import '../../src/layout/header/core-demo-header-component.js';

  document.querySelector('#close-btn').addEventListener('click', () => {
    window.close();
  });

  window.pillarbox = pillarbox;
<\/script>

</body>
</html>
`;function Mi(s){const e=s.replace(/^[\r\n]+|[\r\n]+$/g,""),i=e.split(`
`)[0].match(/^ */)[0].length,c=new RegExp(`^ {${i}}`,"gm");return e.replace(c,"")}const Ni=new DOMParser;function U(s,e="[data-implementation]"){return Mi(Ni.parseFromString(s,"text/html").querySelector(e).textContent)}const Oi=U(Si),ji=U(ki),Ui=U(Ei),Bi=U(Ci),zi=U(Ri),Hi=U(_i),Fi=U(Ti),qi=U(Li),Gi=U(Ai),Vi=U(Pi),Wi=U($i),Ki=U(Ii),Xi=U(Di);class Yi extends D{static styles=[B,z,j(xi)];render(){return u`
      ${this.#t()}
      ${this.#e()}
      ${this.#n()}
      ${this.#i()}
      ${this.#s()}
      ${this.#a()}
      ${this.#r()}
      ${this.#o()}
      ${this.#l()}
      ${this.#c()}
      ${this.#d()}
      ${this.#p()}
      ${this.#h()}
    `}#t(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="start-time.html">
          <h2 slot="title">Start the player at a given position</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to load a video source and
            start playback at a specific position using Pillarbox. This can be
            useful when you want to provide users with the option to begin
            watching a video from a predefined timestamp. To achieve this
            functionality, follow the code snippet below:
          </p>
          <code-block slot="code" language="javascript">${Oi}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/start-time.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `}#e(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="multi-player.html">
          <h2 slot="title">Multiple Players</h2>
          <p slot="description">
            This example demonstrates how to incorporate multiple video players
            on a webpage.In this showcase, two players are initialized, each
            with its own configuration, a button allows to toggle the mute state
            for both players.
          </p>
          <code-block slot="code" language="javascript">${ji}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/multi-player.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `}#n(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="blocked-segment.html">
          <h2 slot="title">Detect Blocked Segments</h2>
          <p slot="description">
            This tutorial covers how to use pillarbox to create a plugin that
            detects and notifies when a blocked segment is skipped.
            <br><br>
            <b>Note:</b> The block segement starts at 29:26 for this example.
          </p>
          <code-block slot="code" language="javascript">${Ui}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/blocked-segment.html"
           target="_blank">
          Open this showcase
        </a>
      </div>
    `}#i(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="chapters.html">
          <h2 slot="title">Display Current Chapter</h2>
          <p slot="description">
            This showcase explains how to use pillarbox to create a plugin that
            displays the currently playing chapter in a box above the progress
            bar.
          </p>
          <code-block slot="code" language="javascript">${Bi}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/chapters.html"
           target="_blank">
          Open this showcase
        </a>
      </div>
    `}#s(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="skip-credits.html">
          <h2 slot="title">Skip Credits</h2>
          <p slot="description">
            This example shows how to use the
            <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/skip-button#readme" target="_blank">Pillarbox Skip Button component</a>
            to add a "Skip" button during detected credit intervals.
            <br><br>
            <b>Note:</b> Seek to 26:40 to see the button.
          </p>
          <code-block slot="code" language="javascript">${zi}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/skip-credits.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `}#a(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="playlist.html">
          <h2 slot="title">Playlist</h2>
          <p slot="description">
            This example shows how to fetch media data for a set of video sources
            and load them into the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/pillarbox-playlist#readme" target="_blank">Pillarbox Playlist plugin</a>
            with metadata such as title and duration.
          </p>
          <code-block slot="code" language="javascript">${Hi}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/playlist.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `}#r(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="quality-menu.html">
          <h2 slot="title">Quality Menu</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to display a quality selector
            menu using the <a href="https://github.com/videojs/videojs-contrib-quality-menu">videojs-contrib-quality-menu</a>
            plugin.
          </p>
          <code-block slot="code" language="javascript">${Fi}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/quality-menu.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `}#o(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="countdown.html">
          <h2 slot="title">Countdown Timer</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to display a countdown timer.
          </p>
          <code-block slot="code" language="javascript">${qi}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/countdown.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `}#l(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="playback-rate.html">
          <h2 slot="title">Playback Rate</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to display the playback rate compoment.
          </p>
          <code-block slot="code" language="javascript">${Gi}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/playback-rate.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `}#c(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="chapter-selection.html">
          <h2 slot="title">Chapter Selection</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to display a chapter selector.
          </p>
          <code-block slot="code" language="javascript">${Vi}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/chapter-selection.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `}#d(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="firefox-pip.html">
          <h2 slot="title">Hide Firefox PiP Button</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to hide Firefox PiP Button. Activating or deactivating PiP in Firefox applies at the next player resize, such as when entering full screen mode. This appears to be due to an implementation bug in Firefox. Refer to the <a href="https://github.com/SRGSSR/pillarbox-web-demo/pull/57" target="_blank">PR</a> for more details.
          </p>
          <code-block slot="code" language="javascript">${Wi}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/firefox-pip.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `}#p(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="spatial-navigation.html">
          <h2 slot="title">Enable Spatial Navigation</h2>
          <p slot="description">
            In this showcase, we will demonstrate how to enable <a href="https://videojs.com/guides/spatial-navigation/" target="_blank" rel="noopener noreferrer">spatial navigation</a>, allowing users to control the player with a remote on smart TVs like Tizen and webOS.
            <br>
            <br>
            <i>Note: If you're targeting TV devices with spatial navigation, consider removing the volume button and setting muted: false, as volume is typically handled by the device itself.</i>
          </p>
          <code-block slot="code" language="javascript">${Ki}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/spatial-navigation.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `}#h(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="thumbnail-preview.html">
          <h2 slot="title">Show Thumbnail Preview from IL Metadata</h2>
          <p slot="description">
            This example shows how to use the thumbnail preview metadata from the current SRGSSR source
            and inject it into the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/thumbnail-preview#readme" target="_blank">Thumbnail Preview plugin</a>.
          </p>
          <code-block slot="code" language="javascript">${Xi}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/thumbnail-preview.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `}}customElements.define("showcase-page",Yi);S.addRoute("showcase","showcase-page");const Zi="ul,li{margin:0;padding:0;list-style:none}route-link::part(a){padding:var(--size-1) var(--size-2);font-size:var(--size-4);border-radius:var(--radius-3);transition:background-color .4s,color .4s}route-link::part(a active){color:var(--color-8);text-decoration:none;background-color:var(--color-5);cursor:default;transition:background-color .8s,color .4s}core-demo-header{display:flex;align-items:center}core-demo-header route-link{margin-left:var(--size-2)}core-demo-header route-link::part(a){display:flex;align-items:center;text-decoration:none}core-demo-header .material-symbols-outlined{font-size:var(--size-7)}nav ul{display:flex;margin-bottom:var(--size-4)}nav ul li{margin:0}";class Ji extends D{static properties={debug:{type:Boolean,state:!0}};static styles=[B,j(Zi)];#t=({detail:{queryParams:e}})=>{this.debug=e.debug==="true"};connectedCallback(){super.connectedCallback(),this.debug=S.queryParams.debug==="true",S.addEventListener("routechanged",this.#t),S.addEventListener("queryparams",this.#t)}disconnectedCallback(){S.removeEventListener("routechanged",this.#t),S.removeEventListener("queryparams",this.#t)}render(){return u`
      ${this.#e()}
      ${this.#n()}
    `}#e(){return u`
      <core-demo-header>
        <route-link href="settings${this.debug?"?debug=true":""}"
                    title="Settings" slot="actions">
          <i class="material-symbols-outlined">settings</i>
        </route-link>
      </core-demo-header>
    `}#n(){return u`
      <nav>
        <ul>
          <li>
            <route-link href="examples${this.debug?"?debug=true":""}">
              Examples
            </route-link>
          </li>
          <li>
            <route-link href="search${this.debug?"?debug=true":""}">Search
            </route-link>
          </li>
          <li>
            <route-link href="lists${this.debug?"?debug=true":""}">Lists
            </route-link>
          </li>
          <li>
            <route-link href="showcase${this.debug?"?debug=true":""}">
              Showcase
            </route-link>
          </li>
        </ul>
      </nav>`}}customElements.define("demo-header",Ji);class Qi extends D{static properties={route:{state:!0}};constructor(){super(),this.route=S.currentRoute,S.addEventListener("routechanged",({detail:{route:e}})=>{this.route?.destroy(),this.route=e})}render(){return Ct(`<${this.route.component}></${this.route.component}>`)}}customElements.define("route-outlet",Qi);const ze=me.loadPreferences();N.host=ze.dataProviderHost;S.start({defaultPath:"examples"});S.queryParams.debug?(ze.debug=S.queryParams.debug==="true",me.savePreferences(ze)):ze.debug&&S.updateState({debug:"true"});
//# sourceMappingURL=index-BrZ_4Ego.js.map
