import{i as D,t as ze,a as st,r as Q,x as u,p as me,b as S,e as En,c as kn,d as Cn,T as Rn,g as _n,o as Et}from"./core-demo-header-component-zTCY2js5.js";const Tn="[part=container]{block-size:480px;aspect-ratio:var(--ratio-widescreen);padding:0;overflow:visible;background-color:var(--color-12)}[part=close-btn]{position:absolute;top:calc(var(--size-3) * -1);right:0;z-index:2;width:var(--size-7);height:var(--size-7);font-size:var(--size-4);text-align:center;background:var(--gray-6);border-radius:var(--radius-round)}";class Ln extends D{static properties={open:{type:Boolean,reflect:!0}};static styles=[ze,st,Q(Tn)];#t;constructor(){super(),this.open=!1}updated(e){super.updated(e),e.has("open")&&(this.open?(this.#t.showModal(),this.#t.classList.toggle("slide-up-fade-in",!0)):this.#t.close())}firstUpdated(e){super.firstUpdated(e),this.#t=this.shadowRoot.querySelector("dialog")}#e(){this.dispatchEvent(new CustomEvent("close"))}#n(e){this.#t===e.target&&(this.open=!1)}render(){return u`
      <dialog part="container"
              @click="${this.#n.bind(this)}"
              @close="${this.#e.bind(this)}"
              @animationend="${e=>e.target.classList.remove("slide-up-fade-in")}">
        <button part="close-btn"
                @click="${()=>{this.open=!1}}"
                title="Close player dialog">&times;</button>
        <slot></slot>
      </dialog>
    `}}customElements.define("demo-dialog",Ln);class ue{static loadPreferences(){return JSON.parse(localStorage.getItem("preferences"))||{}}static savePreferences(e){localStorage.setItem("preferences",JSON.stringify(e))}}const it="il.srgssr.ch",J={vector:"srgplay"},An={includeAggregations:!1,includeSuggestions:!1,sortBy:"default",sortDir:"desc",pageSize:50,...J},Pn={onlyActiveShows:!0,...J},ae=({title:s,urn:e,mediaType:n,date:i,duration:l})=>({title:s,urn:e,mediaType:n,date:i,duration:l});class In{#t;constructor(e=it){this.host=e}get host(){return this.#t}set host(e){this.#t=e||it}async search(e,n,i=void 0){const l=await this.#e(`/${e.toLowerCase()}/searchResultMediaList`,{...An,q:n},i),f=w=>w.searchResultMediaList.map(ae);return{results:f(l),next:l.next?this.#n(l.next,f):void 0}}async topics(e,n="tv"){return(await this.#e(`/${e.toLowerCase()}/topicList/${n}`)).topicList.map(({title:l,urn:f})=>({title:l,urn:f}))}async latestByTopic(e,n=30){const i=await this.#e(`/mediaList/latest/byTopicUrn/${e}`,{pageSize:n}),l=f=>f.mediaList.map(ae);return{results:l(i),next:i.next?this.#n(i.next,l):void 0}}async shows(e,n="unlimited",i="tv"){return(await this.#e(`/${e.toLowerCase()}/showList/${i}/alphabetical`,{...Pn,pageSize:n})).showList.map(({title:f,urn:w})=>({title:f,urn:w}))}async latestByShow(e,n=30){const i=await this.#e(`/episodeComposition/latestByShow/byUrn/${e}`,{...J,pageSize:n}),l=f=>f.episodeList.map(({mediaList:w})=>w[0]).map(ae);return{results:l(i),next:i.next?this.#n(i.next,l):void 0}}async editorial(e,n=30){const i=await this.#e(`/${e.toLowerCase()}/mediaList/video/editorial`,{...J,pageSize:n}),l=f=>f.mediaList.map(ae);return{results:l(i),next:i.next?this.#n(i.next,l):void 0}}async livestreams(e,n="video"){return(await this.#e(`/${e.toLowerCase()}/mediaList/${n}/livestreams`)).mediaList.map(ae)}async scheduledLivestream(e,n=10){const i=await this.#e(`/${e.toLowerCase()}/mediaList/video/scheduledLivestreams`,{...J,pageSize:n}),l=f=>f.mediaList.map(ae);return{results:l(i),next:i.next?this.#n(i.next,l):void 0}}async livecenter(e,n=10){const i=await this.#e(`/${e.toLowerCase()}/mediaList/video/scheduledLivestreams/livecenter`,{...J,pageSize:n}),l=f=>f.mediaList.map(ae);return{results:l(i),next:i.next?this.#n(i.next,l):void 0}}async channels(e,n="radio"){return(await this.#e(`/${e.toLowerCase()}/channelList/${n}`)).channelList.map(({title:l,id:f})=>({title:l,id:f}))}async radioShowByChannel(e,n,i="unlimited"){return(await this.#e(`/${e.toLowerCase()}/showList/radio/alphabeticalByChannel/${n}`,{...J,pageSize:i})).showList.map(({title:f,urn:w})=>({title:f,urn:w}))}async#e(e,n=J,i=void 0){const l=new URLSearchParams(n).toString(),f=`https://${this.host}/integrationlayer/2.0/${e.replace(/^\/+/,"")}?${l}`;return fetch(f,{signal:i}).then(w=>w.ok?w.json():Promise.reject(w)).catch(w=>Promise.reject(w))}#n(e,n){return async(i=void 0)=>{const l=await fetch(e,{signal:i}).then(w=>w.ok?w.json():Promise.reject(w)).catch(w=>Promise.reject(w));return{results:n(l),next:this.#n(l.next,n)}}}}const $=new In,kt="demo-player",Mn={restoreEl:!0},Dn=s=>({muted:s.muted??!0,autoplay:s.autoplay??!1,debug:s.debug??!1,srgOptions:{dataProviderHost:s.dataProviderHost??it}}),Nn=(s={})=>(window.player=new me(kt,{...Mn,...Dn(ue.loadPreferences()),...s}),window.player),$n=()=>{me.getPlayer(kt).dispose(),window.player=null};window.pillarbox=me;const Ct=document.querySelector("demo-dialog"),Rt=s=>{const e=Object.keys(s??{})[0];return e?{vendor:e,...e==="com.apple.fps.1_0"?s[e]:{licenseUri:s[e]}}:{}},On=s=>{if(!s.vendor)return;const{certificateUri:e,licenseUri:n}=s;return s.vendor==="com.apple.fps.1_0"?{[s.vendor]:{certificateUri:e,licenseUri:n}}:{[s.vendor]:n}},jn=({src:s,type:e,keySystems:n})=>new URLSearchParams({src:s,type:e,...Rt(n)}).toString();Ct.addEventListener("close",()=>{$n(),S.updateState({},["src","type","vendor","certificateUri","licenseUri"])});const _t=s=>{if(window.player)return;const e=s.detail.queryParams;if("src"in e){const{src:n,type:i}=e,l=On(e);Tt({src:n,type:i,keySystems:l})}};S.addEventListener("routechanged",_t);S.addEventListener("queryparams",_t);const Tt=({src:s,type:e,keySystems:n,playerOptions:i},l=!0)=>{const f=Nn(i??{});return Ct.open=!0,f.src({src:s,type:e,keySystems:n}),l&&S.updateState({src:s,...e?{type:e}:{},...Rt(n)}),f};const He=En(class extends kn{constructor(s){if(super(s),s.type!==Cn.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter((e=>s[e])).join(" ")+" "}update(s,[e]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const n=s.element.classList;for(const i of this.st)i in e||(n.remove(i),this.st.delete(i));for(const i in e){const l=!!e[i];l===this.st.has(i)||this.nt?.has(i)||(l?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return Rn}});class Un extends D{static properties={src:{type:String},drmSettings:{type:Object},drmSettingsShown:{state:!0,type:Boolean}};createRenderRoot(){return this}constructor(){super(),this.src="",this.#t()}#t(){this.drmSettings={vendor:"",certificateUri:"",licenseUri:""}}#e(){try{return new URL(this.src).searchParams.get("urn")??this.src}catch{return this.src}}#n(){const e=this.#e()?.trim(),n=e.startsWith("urn:")?"srgssr/urn":void 0,i=this.#s;this.dispatchEvent(new CustomEvent("submit-media",{detail:{src:e,type:n,keySystems:i}}))}#i(e){this.src=e.target.value,e.key==="Enter"&&this.src&&this.#n()}get#s(){if(this.drmSettings?.vendor)return this.#r()}#r(){const e=this.drmSettings.certificateUri?.trim(),n=this.drmSettings.licenseUri?.trim();return this.drmSettings.vendor==="com.apple.fps.1_0"?{[this.drmSettings.vendor]:{certificateUri:e,licenseUri:n}}:{[this.drmSettings.vendor]:n}}render(){const e={spin:this.drmSettingsShown===!0,"spin-back":this.drmSettingsShown===!1};return u`
      <div part="load-bar-container">
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

      <button part="load-bar-action"
              ?disabled="${!this.src}"
              @click="${this.#n}">
        <i class="material-symbols-outlined">play_circle</i> Play content
      </button>
    `}updated(e){super.updated(e),e.has("drmSettingsShown")&&this.drmSettingsShown&&this.renderRoot.querySelector('[part="drm-settings-container"]').classList.add("active")}#a(e){e.target.classList.toggle("active",!e.target.classList.contains("fade-out-shrink")),e.target.classList.remove("fade-in-grow","fade-out-shrink")}#o(){return{"fade-in-grow":this.drmSettingsShown===!0,"fade-out-shrink":this.drmSettingsShown===!1}}#l(){return u`
      <form part="drm-settings-container" class="${He(this.#o())}"
            aria-hidden="${!this.drmSettingsShown}"
            @reset="${this.#t}"
            @animationend="${e=>this.#a(e)}">
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
        <button part="clear-drm-settings-button" type="reset">
          <i class="material-symbols-outlined">delete</i> Clear Settings
        </button>
        <hr>
      </form>
    `}}customElements.define("load-media-form",Un);const Bn="[part=a]{display:flex;flex-direction:column;gap:var(--size-2);justify-content:center;min-height:var(--size-10);margin:0;color:var(--color-0);font-weight:var(--font-weight-6);font-size:var(--size-3);text-align:justify;text-decoration:none;background-color:var(--color-9);border:1px solid var(--color-10);transition:background-color .4s,border-color .4s;padding-inline:var(--size-3)}[part=a]:hover{text-decoration:none;background-color:var(--color-8);border-color:var(--color-9)}[part=title]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}::slotted([slot=description]){display:flex;align-items:center;color:var(--color-6);font-weight:var(--font-weight-5);font-size:var(--size-3);font-style:italic}";class Hn extends D{static properties={href:{type:String},title:{type:String}};static styles=Q(Bn);#t=e=>{e.preventDefault();const n=new URL(`${window.location.origin}/${this.href}`),i=Object.fromEntries(n.searchParams.entries());S.navigateTo(n.pathname,i)};connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.#t)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.#t)}render(){return u`
      <a href="${this.href}" title="${this.title}" part="a">
        <span part="title">${this.title}</span>
        <slot part="description" name="description"></slot>
      </a>
    `}}customElements.define("content-link",Hn);const zn={SRGSSR:[{title:"Horizontal video",src:"urn:rts:video:14827306",type:"srgssr/urn"},{title:"Square video",src:"urn:rts:video:8393241",type:"srgssr/urn"},{title:"Vertical video",src:"urn:rts:video:13444390",type:"srgssr/urn"},{title:"A bon entendeur",src:"urn:rts:video:14080915",type:"srgssr/urn"},{title:"Live video",description:"SRF 1",src:"urn:srf:video:c4927fcf-e1a0-0001-7edd-1ef01d441651",type:"srgssr/urn"},{title:"DVR video livestream",description:"RTS 1",src:"urn:rts:video:3608506",type:"srgssr/urn"},{title:"Content with a blocked time range",description:"Puls - Gehirnerschütterung, Akutgeriatrie, Erlenpollen im Winter",src:"urn:srf:video:40ca0277-0e53-4312-83e2-4710354ff53e",type:"srgssr/urn"},{title:"DVR audio livestream",description:"Couleur 3 (DVR)",src:"urn:rts:audio:3262363",type:"srgssr/urn"},{title:"Expired URN",description:"Content that is not available anymore",src:"urn:rts:video:13382911",type:"srgssr/urn"},{title:"Unknown URN",description:"Content that does not exist",src:"urn:srf:video:unknown",type:"srgssr/urn"}],HLS:[{title:"VOD - HLS",description:"Sacha part à la rencontre d'univers atypiques",src:"https://rts-vod-amd.akamaized.net/ww/14970442/96fc7429-64c1-34b0-8c05-62cf114695ac/master.m3u8",type:"application/x-mpegURL"},{title:"VOD - HLS (short)",description:"Des violents orages ont touché Ajaccio, chef-lieu de la Corse, jeudi",src:"https://rts-vod-amd.akamaized.net/ww/13317145/f1d49f18-f302-37ce-866c-1c1c9b76a824/master.m3u8",type:"application/x-mpegURL"},{title:"Brain Farm Skate Phantom Flex",description:"4K video",src:"https://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",type:"application/x-mpegURL"},{title:"Video livestream - HLS",description:"Couleur 3 en vidéo (live)",src:"https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8?dw=0",type:"application/x-mpegURL"},{title:"Video livestream with DVR - HLS",description:"Couleur 3 en vidéo (DVR)",src:"https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8",type:"application/x-mpegURL"},{title:"Video livestream with DVR and timestamps - HLS",description:"Tageschau",src:"https://tagesschau.akamaized.net/hls/live/2020115/tagesschau/tagesschau_1/master.m3u8",type:"application/x-mpegURL"},{title:"Audio livestream - HLS",description:"Couleur 3 (DVR)",src:"https://lsaplus.swisstxt.ch/audio/couleur3_96.stream/playlist.m3u8",type:"application/x-mpegURL"},{title:"Apple Basic 4:3",description:"4x3 aspect ratio, H.264 @ 30Hz",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",type:"application/x-mpegURL"},{title:"Apple Basic 16:9",description:"16x9 aspect ratio, H.264 @ 30Hz",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",type:"application/x-mpegURL"},{title:"Apple Advanced 16:9 (TS)",description:"16x9 aspect ratio, H.264 @ 30Hz and 60Hz, Transport stream",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8",type:"application/x-mpegURL"},{title:"Apple Advanced 16:9 (fMP4)",description:"16x9 aspect ratio, H.264 @ 30Hz and 60Hz, Fragmented MP4",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",type:"application/x-mpegURL"},{title:"Apple Advanced 16:9 (HEVC/H.264)",description:"16x9 aspect ratio, H.264 and HEVC @ 30Hz and 60Hz",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_adv_example_hevc/master.m3u8",type:"application/x-mpegURL"},{title:"Apple Atmos",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8",type:"application/x-mpegURL"},{title:"Apple WWDC Keynote 2023",src:"https://events-delivery.apple.com/0105cftwpxxsfrpdwklppzjhjocakrsk/m3u8/vod_index-PQsoJoECcKHTYzphNkXohHsQWACugmET.m3u8",type:"application/x-mpegURL"},{title:"Apple tv trailer",description:"Lot of audios and subtitles choices",src:`https://play-edge.itunes.apple.com/WebObjects/MZPlayLocal.woa/hls/subscription/playlist.m3u8?cc=CH&svcId=tvs.vds.4021&a=1522121579&isExternal=true&brandId=tvs.sbd.4000&id=518077009&l=en-GB&aec=UHD
`,type:"application/x-mpegURL"},{title:"Multiple subtitles and audio tracks",description:"On some devices codec may crash",src:"https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8",type:"application/x-mpegURL"},{title:"4K, HEVC",src:"https://cdn.bitmovin.com/content/encoding_test_dash_hls/4k/hls/4k_profile/master.m3u8",type:"application/x-mpegURL"},{title:"VoD, single audio track",src:"https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",type:"application/x-mpegURL"},{title:"AES-128",src:"https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/m3u8s/11331.m3u8",type:"application/x-mpegURL"},{title:"HLS - Fragmented MP4",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",type:"application/x-mpegURL"},{title:"HLS - Alternate audio language",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.m3u8",type:"application/x-mpegURL"},{title:"HLS - Audio only",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.m3u8?filter=(type!=%22video%22)",type:"application/x-mpegURL"},{title:"HLS - Trickplay",src:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel-trickplay.m3u8",type:"application/x-mpegURL"},{title:"Limiting bandwidth use",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8?max_bitrate=800000",type:"application/x-mpegURL"},{title:"Dynamic Track Selection",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8?filter=%28type%3D%3D%22audio%22%26%26systemBitrate%3C100000%29%7C%7C%28type%3D%3D%22video%22%26%26systemBitrate%3C1024000%29",type:"application/x-mpegURL"},{title:"Pure live",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8",type:"application/x-mpegURL"},{title:"Timeshift (5 minutes)",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8?time_shift=300",type:"application/x-mpegURL"},{title:"Live audio",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8?filter=(type!=%22video%22)",type:"application/x-mpegURL"},{title:"Pure live (scte35)",src:"https://demo.unified-streaming.com/k8s/live/stable/scte35.isml/.m3u8",type:"application/x-mpegURL"},{title:"fMP4, clear",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-fmp4.ism/.m3u8",type:"application/x-mpegURL"},{title:"fMP4, HEVC 4K",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-hevc.ism/.m3u8",type:"application/x-mpegURL"},{title:"Test1",description:"Forced subtitles",src:"https://prd.vod-srgssr.ch/origin/1053457/fr/master.m3u8?complexSubs=true",type:"application/x-mpegURL"}],DASH:[{title:"VoD - Dash (H264)",src:"https://storage.googleapis.com/wvmedia/clear/h264/tears/tears.mpd",type:"application/dash+xml"},{title:"VoD - Dash Widewine cenc (H264)",src:"https://storage.googleapis.com/wvmedia/cenc/h264/tears/tears.mpd",type:"application/dash+xml",keySystems:{"com.widevine.alpha":"https://proxy.uat.widevine.com/proxy?video_id=2015_tears&provider=widevine_test"}},{title:"VoD - Dash (H265)",src:"https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd",type:"application/dash+xml"},{title:"VoD - Dash widewine cenc (H265)",src:"https://storage.googleapis.com/wvmedia/cenc/hevc/tears/tears.mpd",type:"application/dash+xml",keySystems:{"com.widevine.alpha":"https://proxy.uat.widevine.com/proxy?video_id=2015_tears&provider=widevine_test"}},{title:"VoD - Dash - MP4",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.mpd",type:"application/dash+xml"},{title:"Dash - Fragmented MP4",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.mpd",type:"application/dash+xml"},{title:"Dash - TrickPlay",src:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel-trickplay.mpd",type:"application/dash+xml"},{title:"Dash - Tiled thumbnails (live/timeline)",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-tiled-thumbnails-timeline.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Accessibility - hard of hearing",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-hoh-subs.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Single - fragmented TTML",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-en.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Multiple - RFC 5646 language tags",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-rfc5646.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Multiple - fragmented TTML",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-ttml.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Audio only",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.mpd?filter=(type!=%22video%22)",type:"application/dash+xml"},{title:"Dash - Multiple audio codecs",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-codec.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Alternate audio language",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Accessibility - audio description",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-desc-aud.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Pure live",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.mpd",type:"application/dash+xml"},{title:"Dash - Timeshift (5 minutes)",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.mpd?time_shift=300",type:"application/dash+xml"},{title:"Dash - DVB DASH low latency",src:"https://demo.unified-streaming.com/k8s/live/stable/live-low-latency.isml/.mpd",type:"application/dash+xml"}],MP4:[{title:"VOD - MP4",description:"The dig",src:"https://media.swissinfo.ch/media/video/dddaff93-c2cd-4b6e-bdad-55f75a519480/rendition/154a844b-de1d-4854-93c1-5c61cd07e98c.mp4",type:"video/mp4"},{title:"AVC Progressive",src:"https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4",type:"video/mp4"}],AOD:[{title:"Audio HLS",description:"Content with PTS rollover",src:"https://cdn.rts.ch/audio-sample/playlist.m3u8",type:"application/x-mpegURL"}]};function*oe(s,e){if(s!==void 0){let n=0;for(const i of s)yield e(i,n++)}}function q(s,e,n){return s?e(s):n?.(s)}class Fn extends D{createRenderRoot(){return this}render(){return u`
      <load-media-form
        class="fade-in"
        @animationend="${e=>e.target.classList.remove("fade-in")}"
        @submit-media="${e=>Tt(e.detail)}">
      </load-media-form>

      <!-- List of examples -->
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        ${oe(Object.entries(zn),([e,n])=>u`
          <section class="example-section" data-section="${e}">
            <h2 class="sticky">${e}</h2>
            ${oe(n,i=>u`
              <content-link title="${i.description||i.title}"
                            href="examples?${jn(i)}">
                ${q(i.description,()=>u`
                  <span slot="description">${i.title}</span>
                `)}
              </content-link>
            `)}
          </section>
        `)}
      </div>
    `}}customElements.define("examples-page",Fn);S.addRoute("examples","examples-page");const qn="[part=spinner]{display:block;width:var(--size-7);height:var(--size-7);border:3px solid var(--color-2);border-bottom-color:transparent;border-radius:var(--radius-round);animation:var(--animation-spin)}[part=spinner-container]{display:grid;place-content:center;margin:var(--size-10)}";class Gn extends D{static properties={loading:{type:Boolean,reflect:!0}};static styles=Q(qn);constructor(){super(),this.loading=!1}render(){return u`
      <div part="spinner-container" ?hidden="${!this.loading}">
        <div part="spinner"></div>
      </div>
    `}}customElements.define("loading-spinner",Gn);const Vn={root:null,rootMargin:"0px",threshold:.1},Wn=(s,e,n=Vn)=>{new IntersectionObserver(i=>{i.forEach(l=>{l.isIntersecting&&e()})},n).observe(s)};class Kn extends D{static styles=[st];firstUpdated(e){super.firstUpdated(e),Wn(this.renderRoot.querySelector("div"),()=>{this.dispatchEvent(new CustomEvent("intersecting"))})}render(){return u`
      <div part="sentinel"></div>
    `}}customElements.define("intersection-observer",Kn);const Xn="[part=scroll-to-top-button]{position:fixed;right:var(--size-4);bottom:var(--size-4);z-index:1;display:flex;align-items:center;justify-content:center;width:var(--size-7);height:var(--size-7);padding:0;border:none;border-radius:var(--radius-round)}::slotted([slot=icon]){font-size:var(--size-8)}";class Yn extends D{static properties={title:{type:String}};static styles=[ze,Q(Xn)];constructor(){super(),this.title="Scroll to top"}render(){return u`
      <button part="scroll-to-top-button" title="${this.title}"
              @click="${()=>window.scrollTo({top:0,behavior:"smooth"})}">
        <slot name="icon"></slot>
      </button>
    `}}customElements.define("scroll-to-top-button",Yn);const et=s=>s.replace(/\s+/g,"-").toLowerCase();class ve{constructor(e){this.stack=[],this.level=e}async initialize(e,n,i){if(!e||!n)return;const l=this.#n(e),f=this.#i(this.level[l].nodes,n);await this.fetchNextState(l,f),await this.#t(i)}async#t(e){for(const n of e?.split(",")||[]){const i=this.#i(this.level[0].nodes,n);await this.fetchNextState(0,i)}}async fetchNextState(e,n){const i=this.level[e];this.stack.push({level:this.level,sectionIndex:e,nodeIndex:n}),this.level=[await i.resolve(i.nodes[n])]}fetchPreviousState(e){this.level=this.stack[e].level,this.stack.splice(e)}isLeafSection(e){return this.level[e]?.isLeaf()}retrieveNode(e,n){return this.level[e]?.nodes[n]}get root(){return this.stack[0]?.level||this.level}get params(){return ve.#e(this.stack)}static#e(e){if(e.length===0)return{};const n=e[0],i=n.level[n.sectionIndex],l=e.slice(1).map(w=>{const U=w.level[w.sectionIndex].nodes[w.nodeIndex];return U.id||U.urn}),f={section:et(i.title),bu:i.nodes[n.nodeIndex].toLowerCase()};return l&&l.length&&(f.nodes=l.join(",")),f}paramsAt(e,n){return ve.#e([...this.stack,{level:this.level,sectionIndex:e,nodeIndex:n}])}#n(e){const n=et(e).toLowerCase();return this.level.map(i=>et(i.title).toLowerCase()).findIndex(i=>i===n)}#i(e,n){const i=n.toLowerCase();return e.map(l=>(l.urn||l.id||l.toString()).toLowerCase()).findIndex(l=>l===i)}}class L{constructor({title:e,nodes:n,resolve:i=void 0,next:l=void 0}){this.title=e,this.nodes=n,this.resolve=i,this.next=l}isLeaf(){return!this.resolve}async fetchNext(e=void 0){if(!this.next)return;const n=await this.next(e);return this.next=n.next,this.nodes.push(...n.results),n.results}}const ye=s=>({nodes:s.results,next:s.next}),Zn=[new L({title:"TV Topics",nodes:["RSI","RTR","RTS","SRF","SWI"],resolve:async s=>new L({title:`${s} TV Topics`,nodes:await $.topics(s),resolve:async e=>new L({title:e.title,...ye(await $.latestByTopic(e.urn))})})}),new L({title:"TV Shows",nodes:["RSI","RTR","RTS","SRF","SWI"],resolve:async s=>new L({title:`${s} TV Shows`,nodes:await $.shows(s),resolve:async e=>new L({title:e.title,...ye(await $.latestByShow(e.urn))})})}),new L({title:"TV Latest Videos",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} TV Latest Videos`,...ye(await $.editorial(s))})}),new L({title:"TV Livestreams",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} TV Livestreams`,nodes:await $.livestreams(s)})}),new L({title:"Live web",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} Live web`,...ye(await $.scheduledLivestream(s))})}),new L({title:"Live center",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} Live center`,nodes:await $.livecenter(s)})}),new L({title:"Radio Shows",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} Radio Channels`,nodes:await $.channels(s),resolve:async e=>new L({title:`${e.title} Radio shows`,nodes:await $.radioShowByChannel(s,e.id),resolve:async n=>new L({title:n.title,...ye(await $.latestByShow(n.urn))})})})}),new L({title:"Radio Livestreams",nodes:["RSI","RTR","RTS","SRF"],resolve:async s=>new L({title:`${s} Radio Livestreams`,nodes:await $.livestreams(s,"audio")})})];class Jn extends D{static properties={loading:{state:!0,type:Boolean},stack:{state:!0,type:Array},level:{state:!0,type:Object},nextPage:{state:!0,type:Function}};#t=new AbortController;#e;#n;constructor(){super(),this.loading=!1,this.#e=new ve(Zn),this.#i()}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.#n=async e=>{if(!e.detail.popstate)return;this.abortFetch();const n=new ve(this.#e.root),{section:i,bu:l,nodes:f}=e.detail.queryParams;this.loading=!0;try{await n.initialize(i,l,f),this.#e=n,this.#i()}finally{this.loading=!1}},S.addEventListener("queryparams",this.#n)}disconnectedCallback(){super.disconnectedCallback(),this.abortFetch(),S.removeEventListener("queryparams",this.#n)}firstUpdated(e){super.firstUpdated(e),this.#n({detail:{popstate:!0,queryParams:S.queryParams}})}#i(){this.stack=[...this.#e.stack],this.level=[...this.#e.level]}async navigateTo(e,n){if(!this.#e.isLeafSection(e)){this.abortFetch(),this.loading=!0;try{await this.#e.fetchNextState(e,n),this.#i()}finally{this.loading=!1}}}abortFetch(){return this.#t?.abort("New search launched"),this.#t=new AbortController,this.#t.signal}#s(e){return new URLSearchParams({...S.queryParams,src:e.urn,type:"srgssr/urn"}).toString()}#r(e){const n=new Intl.DateTimeFormat("fr-CH").format(new Date(e.date)),i=me.formatTime(e.duration/1e3);return u`
      <content-link title="${e.title}"
                    href="lists?${this.#s(e)}">
        <div slot="description">
          <i
            class="material-symbols-outlined">${e.mediaType==="VIDEO"?"movie":"audiotrack"}</i>
          <span>&nbsp;| ${n} | ${i}</span>
        </div>
      </content-link>
    `}#a(e,n){const i=this.#e.paramsAt(e,n);return new URLSearchParams(i).toString()}#o(e,n,i){return u`
      <content-link title="${typeof e=="string"?e:e.title}"
                    href="lists?${this.#a(n,i)}"
                    data-section-idx="${n}" data-node-idx="${i}">
      </content-link>
    `}async#l(e){const n=this.abortFetch();await e.fetchNext(n),this.#i()}#c(e,n){const i=this.level[0],l=this.level.length===1&&i.next;return u`
      ${oe(e,(f,w)=>u`
        ${q(f.mediaType,()=>this.#r(f,w),()=>this.#o(f,n,w))}
      `)}
      ${q(l,()=>u`
        <intersection-observer
          @intersecting="${()=>this.#l(i)}">
        </intersection-observer>
      `)}
    `}async#d(e){const n=e.target.closest("content-link");if(this.loading||!("nodeIdx"in n.dataset))return;const i=n.dataset.sectionIdx,l=n.dataset.nodeIdx;await this.navigateTo(i,l)}#p(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}"
           @click="${this.#d.bind(this)}">
        ${oe(this.level,(e,n)=>u`
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
      <scroll-to-top-button>
        <i class="material-symbols-outlined" slot="icon">arrow_circle_up</i>
      </scroll-to-top-button>`}#m(e){e.target.tagName.toLowerCase()==="button"&&(this.abortFetch(),this.#e.fetchPreviousState(e.target.dataset.navigationIdx),this.#i(),S.updateState(this.#e.params,["section","bu","nodes"]))}#g(){return u`
      <div class="tree-navigation-container"
           @click="${this.#m.bind(this)}">
        ${q(this.stack.length>0,()=>u`
          <button data-navigation-idx="0">Home</button>
        `)}
        ${oe(this.stack.slice(1),(e,n)=>u`
          <i class="material-symbols-outlined">chevron_right</i>
          <button data-navigation-idx="${n+1}">
            ${e.level[e.sectionIndex].title}
          </button>
        `)}
      </div>
    `}render(){const e=this.level.length===1&&this.level[0].next;return u`
      ${this.#g()}
      ${q(this.loading,this.#h.bind(this),this.#p.bind(this))}
      ${q(e,this.#u.bind(this))}
    `}}customElements.define("lists-page",Jn);S.addRoute("lists","lists-page");const Qn="[part=search-bar-container]{display:flex;align-items:center;margin:0 0 var(--size-1) 0;padding:0 var(--size-2);background-color:var(--color-8);border-radius:var(--radius-2)}[part=search-bar-container] input{width:90%}[part=search-bar-container] button{display:flex;align-items:center;background-color:var(--color-8);border:0}",tt="rsi";class ei extends D{static properties={bu:{type:String},query:{type:String}};static styles=[ze,Q(Qn)];constructor(){super(),this.bu=tt,this.query=""}#t(){this.query=this.renderRoot.querySelector("input").value}#e(e){this.bu=e.target.value}updated(e){if(super.updated(e),["bu","query"].some(n=>e.has(n))){const n=this.query??"",i=this.bu??tt;this.dispatchEvent(new CustomEvent("change",{detail:{query:n,bu:i}}))}}#n(){this.query="",this.renderRoot.querySelector("input").value=""}render(){return u`
      <div part="search-bar-container">
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
               @keyup="${me.fn.debounce(this.#t,500)}"
               .value="${this.query??""}">
        <button title="Clear search"
                @click="${this.#n}">
          <slot name="clear-icon"></slot>
        </button>
      </div>
    `}}customElements.define("search-bar",ei);class ti extends D{static properties={loading:{state:!0,type:Boolean},results:{state:!0,type:Array},nextPage:{state:!0,type:Function}};createRenderRoot(){return this}#t=new AbortController;#e;constructor(){super(),this.loading=!1,this.results=null,this.nextPage=null}connectedCallback(){super.connectedCallback(),this.#e=()=>{const e=this.renderRoot.querySelector("search-bar");e.query=S.queryParams.query??"",e.bu=S.queryParams.bu??"rsi"},S.addEventListener("queryparams",this.#e)}disconnectedCallback(){super.disconnectedCallback(),this.abortSearch(),S.removeEventListener("queryparams",this.#e)}async firstUpdated(e){super.firstUpdated(e);const n=this.renderRoot.querySelector("search-bar");this.#e(),await this.#i(n.bu,n.query)}async#n(e,n){S.updateState({bu:e,...n?{query:n}:{}}),await this.#i(e,n)}async#i(e,n){const i=this.abortSearch();if(!n){[this.results,this.nextPage]=[null,null];return}this.loading=!0;try{const l=await $.search(e,n,i);[this.results,this.nextPage]=[l.results,l.next]}finally{this.loading=!1}}async#s(){const e=this.abortSearch(),n=await this.nextPage(e);this.nextPage=n.next,this.results=[...this.results,...n.results]}abortSearch(){return this.#t?.abort("New search launched"),this.#t=new AbortController,this.#t.signal}#r(e){return new URLSearchParams({...S.queryParams,src:e.urn,type:"srgssr/urn"}).toString()}#a(e){const n=new Intl.DateTimeFormat("fr-CH").format(new Date(e.date)),i=me.formatTime(e.duration/1e3);return u`
      <content-link title="${e.title}"
                    href="search?${this.#r(e)}">
        <div slot="description">
          <i class="material-symbols-outlined">${e.mediaType==="VIDEO"?"movie":"audiotrack"}</i>
          <span>&nbsp;| ${n} | ${i}</span>
        </div>
      </content-link>
    `}#o(){const e={empty:this.results==null,"no-results":this.results&&this.results.length===0,"material-icons":!this.results||this.results.length===0};return u`
      <section class="results-container fade-in ${He(e)}"
               @animationend="${n=>n.target.classList.remove("fade-in")}">
        ${oe(this.results??[],this.#a.bind(this))}
        ${q(this.nextPage,()=>u`
          <intersection-observer
            @intersecting="${this.#s.bind(this)}">
          </intersection-observer>
        `)}
      </section>
    `}#l(){return u`
      <loading-spinner
        loading
        class="slide-up-fade-in"
        @animationend="${e=>e.target.classList.remove("slide-up-fade-in")}">
      </loading-spinner>
    `}#c(){return u`
      <scroll-to-top-button>
        <i class="material-symbols-outlined" slot="icon">arrow_circle_up</i>
      </scroll-to-top-button>`}render(){return u`
      <search-bar
        class="fade-in"
        @animationend="${e=>e.target.classList.remove("fade-in")}"
        @change="${e=>this.#n(e.detail.bu,e.detail.query)}">
        <i class="material-symbols-outlined" slot="clear-icon">close</i>
      </search-bar>

      <!-- Search results -->
      ${q(this.loading,this.#l.bind(this),this.#o.bind(this))}
      ${q(this.results?.length>0,this.#c.bind(this))}
    `}}customElements.define("search-page",ti);S.addRoute("search","search-page");const ni=':host{display:inline-block;cursor:pointer}[part=switch]{display:flex;align-items:center;width:var(--size-9);height:var(--size-7);background-color:var(--gray-6);border-radius:var(--radius-4);transition:.4s}[part=slider]{display:block;width:var(--size-5);height:var(--size-5);margin-left:var(--size-2);background-color:var(--gray-1);border-radius:var(--radius-round);transition:.4s;content:""}:host([checked]) [part=switch]{background-color:var(--green-8)}:host([checked]) [part=slider]{transform:translate(var(--size-5))}:host([disabled]) [part=switch]{cursor:not-allowed;opacity:.5}';class ii extends D{static formAssociated=!0;static properties={checked:{type:Boolean,reflect:!0},disabled:{type:Boolean}};constructor(){super(),this.checked=!1,this.disabled=!1}static styles=Q(ni);#t=e=>{e.key===" "&&(e.preventDefault(),this.toggle())};#e=()=>{this.toggle()};connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","switch"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("click",this.#e),this.addEventListener("keydown",this.#t)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.#e),this.removeEventListener("keydown",this.#t)}toggle(e){this.disabled||(this.checked=e??!this.checked)}updated(e){super.updated(e),e.has("checked")&&(this.setAttribute("aria-checked",this.checked.toString()),this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}render(){return u`
      <div part="switch">
        <div part="slider"></div>
      </div>
    `}}customElements.define("toggle-switch",ii);class si extends D{static properties={autoplay:{type:Boolean,state:!0},muted:{type:Boolean,state:!0},debug:{type:Boolean,state:!0},dataProviderHost:{type:String,state:!0}};constructor(){super();const e=ue.loadPreferences();this.autoplay=e.autoplay??!1,this.muted=e.muted??!0,this.debug=e.debug??!1,this.dataProviderHost=e.dataProviderHost}createRenderRoot(){return this}updated(e){super.updated(e);const n=ue.loadPreferences();[...e.keys()].filter(i=>["autoplay","muted","debug","dataProviderHost"].includes(i)).forEach(i=>{n[i]=this[i]}),ue.savePreferences(n),e.has("debug")&&S.replaceState(this.debug?{debug:"true"}:{}),e.has("dataProviderHost")&&($.host=this.dataProviderHost)}#t(e,n){return u`
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
    `}}customElements.define("settings-page",si);S.addRoute("settings","settings-page");const ri="@media screen and (prefers-color-scheme:dark){pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#adbac7;background:#22272e}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#f47067}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#dcbdfb}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#6cb6ff}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#96d0ff}.hljs-built_in,.hljs-symbol{color:#f69d50}.hljs-comment,.hljs-code,.hljs-formula{color:#768390}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#8ddb8c}.hljs-subst{color:#adbac7}.hljs-section{color:#316dca;font-weight:700}.hljs-bullet{color:#eac55f}.hljs-emphasis{color:#adbac7;font-style:italic}.hljs-strong{color:#adbac7;font-weight:700}.hljs-addition{color:#b4f1b4;background-color:#1b4721}.hljs-deletion{color:#ffd8d3;background-color:#78191b}}@media screen and (prefers-color-scheme:light){pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#005cc5}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-comment,.hljs-code,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}}[part=container]{overflow-x:auto;font-size:var(--font-size-0)}slot{display:none}";var nt,xt;function ai(){if(xt)return nt;xt=1;function s(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(r=>{const o=t[r],b=typeof o;(b==="object"||b==="function")&&!Object.isFrozen(o)&&s(o)}),t}class e{constructor(r){r.data===void 0&&(r.data={}),this.data=r.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function n(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(t,...r){const o=Object.create(null);for(const b in t)o[b]=t[b];return r.forEach(function(b){for(const R in b)o[R]=b[R]}),o}const l="</span>",f=t=>!!t.scope,w=(t,{prefix:r})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const o=t.split(".");return[`${r}${o.shift()}`,...o.map((b,R)=>`${b}${"_".repeat(R+1)}`)].join(" ")}return`${r}${t}`};class U{constructor(r,o){this.buffer="",this.classPrefix=o.classPrefix,r.walk(this)}addText(r){this.buffer+=n(r)}openNode(r){if(!f(r))return;const o=w(r.scope,{prefix:this.classPrefix});this.span(o)}closeNode(r){f(r)&&(this.buffer+=l)}value(){return this.buffer}span(r){this.buffer+=`<span class="${r}">`}}const ge=(t={})=>{const r={children:[]};return Object.assign(r,t),r};class W{constructor(){this.rootNode=ge(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(r){this.top.children.push(r)}openNode(r){const o=ge({scope:r});this.add(o),this.stack.push(o)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(r){return this.constructor._walk(r,this.rootNode)}static _walk(r,o){return typeof o=="string"?r.addText(o):o.children&&(r.openNode(o),o.children.forEach(b=>this._walk(r,b)),r.closeNode(o)),r}static _collapse(r){typeof r!="string"&&r.children&&(r.children.every(o=>typeof o=="string")?r.children=[r.children.join("")]:r.children.forEach(o=>{W._collapse(o)}))}}class we extends W{constructor(r){super(),this.options=r}addText(r){r!==""&&this.add(r)}startScope(r){this.openNode(r)}endScope(){this.closeNode()}__addSublanguage(r,o){const b=r.root;o&&(b.scope=`language:${o}`),this.add(b)}toHTML(){return new U(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function K(t){return t?typeof t=="string"?t:t.source:null}function G(t){return H("(?=",t,")")}function xe(t){return H("(?:",t,")*")}function Se(t){return H("(?:",t,")?")}function H(...t){return t.map(o=>K(o)).join("")}function Ee(t){const r=t[t.length-1];return typeof r=="object"&&r.constructor===Object?(t.splice(t.length-1,1),r):{}}function ke(...t){return"("+(Ee(t).capture?"":"?:")+t.map(b=>K(b)).join("|")+")"}function le(t){return new RegExp(t.toString()+"|").exec("").length-1}function Ce(t,r){const o=t&&t.exec(r);return o&&o.index===0}const Re=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ee(t,{joinWith:r}){let o=0;return t.map(b=>{o+=1;const R=o;let _=K(b),p="";for(;_.length>0;){const d=Re.exec(_);if(!d){p+=_;break}p+=_.substring(0,d.index),_=_.substring(d.index+d[0].length),d[0][0]==="\\"&&d[1]?p+="\\"+String(Number(d[1])+R):(p+=d[0],d[0]==="("&&o++)}return p}).map(b=>`(${b})`).join(r)}const te=/\b\B/,_e="[a-zA-Z]\\w*",ce="[a-zA-Z_]\\w*",Te="\\b\\d+(\\.\\d+)?",Le="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ae="\\b(0b[01]+)",Fe="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",qe=(t={})=>{const r=/^#![ ]*\//;return t.binary&&(t.begin=H(r,/.*\b/,t.binary,/\b.*/)),i({scope:"meta",begin:r,end:/$/,relevance:0,"on:begin":(o,b)=>{o.index!==0&&b.ignoreMatch()}},t)},ne={begin:"\\\\[\\s\\S]",relevance:0},Ge={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},Pe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Ve={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},I=function(t,r,o={}){const b=i({scope:"comment",begin:t,end:r,contains:[]},o);b.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const R=ke("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return b.contains.push({begin:H(/[ ]+/,"(",R,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),b},X=I("//","$"),ie=I("/\\*","\\*/"),de=I("#","$"),fe={scope:"number",begin:Te,relevance:0},Ie={scope:"number",begin:Le,relevance:0},Mt={scope:"number",begin:Ae,relevance:0},Dt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},Nt={scope:"title",begin:_e,relevance:0},$t={scope:"title",begin:ce,relevance:0},Ot={begin:"\\.\\s*"+ce,relevance:0};var Me=Object.freeze({__proto__:null,APOS_STRING_MODE:Ge,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Mt,BINARY_NUMBER_RE:Ae,COMMENT:I,C_BLOCK_COMMENT_MODE:ie,C_LINE_COMMENT_MODE:X,C_NUMBER_MODE:Ie,C_NUMBER_RE:Le,END_SAME_AS_BEGIN:function(t){return Object.assign(t,{"on:begin":(r,o)=>{o.data._beginMatch=r[1]},"on:end":(r,o)=>{o.data._beginMatch!==r[1]&&o.ignoreMatch()}})},HASH_COMMENT_MODE:de,IDENT_RE:_e,MATCH_NOTHING_RE:te,METHOD_GUARD:Ot,NUMBER_MODE:fe,NUMBER_RE:Te,PHRASAL_WORDS_MODE:Ve,QUOTE_STRING_MODE:Pe,REGEXP_MODE:Dt,RE_STARTERS_RE:Fe,SHEBANG:qe,TITLE_MODE:Nt,UNDERSCORE_IDENT_RE:ce,UNDERSCORE_TITLE_MODE:$t});function jt(t,r){t.input[t.index-1]==="."&&r.ignoreMatch()}function Ut(t,r){t.className!==void 0&&(t.scope=t.className,delete t.className)}function Bt(t,r){r&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=jt,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Ht(t,r){Array.isArray(t.illegal)&&(t.illegal=ke(...t.illegal))}function zt(t,r){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function Ft(t,r){t.relevance===void 0&&(t.relevance=1)}const qt=(t,r)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const o=Object.assign({},t);Object.keys(t).forEach(b=>{delete t[b]}),t.keywords=o.keywords,t.begin=H(o.beforeMatch,G(o.begin)),t.starts={relevance:0,contains:[Object.assign(o,{endsParent:!0})]},t.relevance=0,delete o.beforeMatch},Gt=["of","and","for","in","not","or","if","then","parent","list","value"],Vt="keyword";function rt(t,r,o=Vt){const b=Object.create(null);return typeof t=="string"?R(o,t.split(" ")):Array.isArray(t)?R(o,t):Object.keys(t).forEach(function(_){Object.assign(b,rt(t[_],r,_))}),b;function R(_,p){r&&(p=p.map(d=>d.toLowerCase())),p.forEach(function(d){const g=d.split("|");b[g[0]]=[_,Wt(g[0],g[1])]})}}function Wt(t,r){return r?Number(r):Kt(t)?0:1}function Kt(t){return Gt.includes(t.toLowerCase())}const at={},se=t=>{console.error(t)},ot=(t,...r)=>{console.log(`WARN: ${t}`,...r)},pe=(t,r)=>{at[`${t}/${r}`]||(console.log(`Deprecated as of ${t}. ${r}`),at[`${t}/${r}`]=!0)},De=new Error;function lt(t,r,{key:o}){let b=0;const R=t[o],_={},p={};for(let d=1;d<=r.length;d++)p[d+b]=R[d],_[d+b]=!0,b+=le(r[d-1]);t[o]=p,t[o]._emit=_,t[o]._multi=!0}function Xt(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw se("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),De;if(typeof t.beginScope!="object"||t.beginScope===null)throw se("beginScope must be object"),De;lt(t,t.begin,{key:"beginScope"}),t.begin=ee(t.begin,{joinWith:""})}}function Yt(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw se("skip, excludeEnd, returnEnd not compatible with endScope: {}"),De;if(typeof t.endScope!="object"||t.endScope===null)throw se("endScope must be object"),De;lt(t,t.end,{key:"endScope"}),t.end=ee(t.end,{joinWith:""})}}function Zt(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function Jt(t){Zt(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),Xt(t),Yt(t)}function Qt(t){function r(p,d){return new RegExp(K(p),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(d?"g":""))}class o{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(d,g){g.position=this.position++,this.matchIndexes[this.matchAt]=g,this.regexes.push([g,d]),this.matchAt+=le(d)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const d=this.regexes.map(g=>g[1]);this.matcherRe=r(ee(d,{joinWith:"|"}),!0),this.lastIndex=0}exec(d){this.matcherRe.lastIndex=this.lastIndex;const g=this.matcherRe.exec(d);if(!g)return null;const P=g.findIndex((be,Ke)=>Ke>0&&be!==void 0),T=this.matchIndexes[P];return g.splice(0,P),Object.assign(g,T)}}class b{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(d){if(this.multiRegexes[d])return this.multiRegexes[d];const g=new o;return this.rules.slice(d).forEach(([P,T])=>g.addRule(P,T)),g.compile(),this.multiRegexes[d]=g,g}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(d,g){this.rules.push([d,g]),g.type==="begin"&&this.count++}exec(d){const g=this.getMatcher(this.regexIndex);g.lastIndex=this.lastIndex;let P=g.exec(d);if(this.resumingScanAtSamePosition()&&!(P&&P.index===this.lastIndex)){const T=this.getMatcher(0);T.lastIndex=this.lastIndex+1,P=T.exec(d)}return P&&(this.regexIndex+=P.position+1,this.regexIndex===this.count&&this.considerAll()),P}}function R(p){const d=new b;return p.contains.forEach(g=>d.addRule(g.begin,{rule:g,type:"begin"})),p.terminatorEnd&&d.addRule(p.terminatorEnd,{type:"end"}),p.illegal&&d.addRule(p.illegal,{type:"illegal"}),d}function _(p,d){const g=p;if(p.isCompiled)return g;[Ut,zt,Jt,qt].forEach(T=>T(p,d)),t.compilerExtensions.forEach(T=>T(p,d)),p.__beforeBegin=null,[Bt,Ht,Ft].forEach(T=>T(p,d)),p.isCompiled=!0;let P=null;return typeof p.keywords=="object"&&p.keywords.$pattern&&(p.keywords=Object.assign({},p.keywords),P=p.keywords.$pattern,delete p.keywords.$pattern),P=P||/\w+/,p.keywords&&(p.keywords=rt(p.keywords,t.case_insensitive)),g.keywordPatternRe=r(P,!0),d&&(p.begin||(p.begin=/\B|\b/),g.beginRe=r(g.begin),!p.end&&!p.endsWithParent&&(p.end=/\B|\b/),p.end&&(g.endRe=r(g.end)),g.terminatorEnd=K(g.end)||"",p.endsWithParent&&d.terminatorEnd&&(g.terminatorEnd+=(p.end?"|":"")+d.terminatorEnd)),p.illegal&&(g.illegalRe=r(p.illegal)),p.contains||(p.contains=[]),p.contains=[].concat(...p.contains.map(function(T){return en(T==="self"?p:T)})),p.contains.forEach(function(T){_(T,g)}),p.starts&&_(p.starts,d),g.matcher=R(g),g}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=i(t.classNameAliases||{}),_(t)}function ct(t){return t?t.endsWithParent||ct(t.starts):!1}function en(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(r){return i(t,{variants:null},r)})),t.cachedVariants?t.cachedVariants:ct(t)?i(t,{starts:t.starts?i(t.starts):null}):Object.isFrozen(t)?i(t):t}var tn="11.11.1";class nn extends Error{constructor(r,o){super(r),this.name="HTMLInjectionError",this.html=o}}const We=n,dt=i,pt=Symbol("nomatch"),sn=7,ht=function(t){const r=Object.create(null),o=Object.create(null),b=[];let R=!0;const _="Could not find the language '{}', did you forget to load/include a language module?",p={disableAutodetect:!0,name:"Plain text",contains:[]};let d={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:we};function g(a){return d.noHighlightRe.test(a)}function P(a){let m=a.className+" ";m+=a.parentNode?a.parentNode.className:"";const x=d.languageDetectRe.exec(m);if(x){const k=Y(x[1]);return k||(ot(_.replace("{}",x[1])),ot("Falling back to no-highlight mode for this block.",a)),k?x[1]:"no-highlight"}return m.split(/\s+/).find(k=>g(k)||Y(k))}function T(a,m,x){let k="",A="";typeof m=="object"?(k=a,x=m.ignoreIllegals,A=m.language):(pe("10.7.0","highlight(lang, code, ...args) has been deprecated."),pe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),A=a,k=m),x===void 0&&(x=!0);const B={code:k,language:A};$e("before:highlight",B);const Z=B.result?B.result:be(B.language,B.code,x);return Z.code=B.code,$e("after:highlight",Z),Z}function be(a,m,x,k){const A=Object.create(null);function B(c,h){return c.keywords[h]}function Z(){if(!y.keywords){M.addText(C);return}let c=0;y.keywordPatternRe.lastIndex=0;let h=y.keywordPatternRe.exec(C),v="";for(;h;){v+=C.substring(c,h.index);const E=F.case_insensitive?h[0].toLowerCase():h[0],N=B(y,E);if(N){const[V,xn]=N;if(M.addText(v),v="",A[E]=(A[E]||0)+1,A[E]<=sn&&(Ue+=xn),V.startsWith("_"))v+=h[0];else{const Sn=F.classNameAliases[V]||V;z(h[0],Sn)}}else v+=h[0];c=y.keywordPatternRe.lastIndex,h=y.keywordPatternRe.exec(C)}v+=C.substring(c),M.addText(v)}function Oe(){if(C==="")return;let c=null;if(typeof y.subLanguage=="string"){if(!r[y.subLanguage]){M.addText(C);return}c=be(y.subLanguage,C,!0,wt[y.subLanguage]),wt[y.subLanguage]=c._top}else c=Xe(C,y.subLanguage.length?y.subLanguage:null);y.relevance>0&&(Ue+=c.relevance),M.__addSublanguage(c._emitter,c.language)}function O(){y.subLanguage!=null?Oe():Z(),C=""}function z(c,h){c!==""&&(M.startScope(h),M.addText(c),M.endScope())}function ft(c,h){let v=1;const E=h.length-1;for(;v<=E;){if(!c._emit[v]){v++;continue}const N=F.classNameAliases[c[v]]||c[v],V=h[v];N?z(V,N):(C=V,Z(),C=""),v++}}function bt(c,h){return c.scope&&typeof c.scope=="string"&&M.openNode(F.classNameAliases[c.scope]||c.scope),c.beginScope&&(c.beginScope._wrap?(z(C,F.classNameAliases[c.beginScope._wrap]||c.beginScope._wrap),C=""):c.beginScope._multi&&(ft(c.beginScope,h),C="")),y=Object.create(c,{parent:{value:y}}),y}function yt(c,h,v){let E=Ce(c.endRe,v);if(E){if(c["on:end"]){const N=new e(c);c["on:end"](h,N),N.isMatchIgnored&&(E=!1)}if(E){for(;c.endsParent&&c.parent;)c=c.parent;return c}}if(c.endsWithParent)return yt(c.parent,h,v)}function fn(c){return y.matcher.regexIndex===0?(C+=c[0],1):(Qe=!0,0)}function bn(c){const h=c[0],v=c.rule,E=new e(v),N=[v.__beforeBegin,v["on:begin"]];for(const V of N)if(V&&(V(c,E),E.isMatchIgnored))return fn(h);return v.skip?C+=h:(v.excludeBegin&&(C+=h),O(),!v.returnBegin&&!v.excludeBegin&&(C=h)),bt(v,c),v.returnBegin?0:h.length}function yn(c){const h=c[0],v=m.substring(c.index),E=yt(y,c,v);if(!E)return pt;const N=y;y.endScope&&y.endScope._wrap?(O(),z(h,y.endScope._wrap)):y.endScope&&y.endScope._multi?(O(),ft(y.endScope,c)):N.skip?C+=h:(N.returnEnd||N.excludeEnd||(C+=h),O(),N.excludeEnd&&(C=h));do y.scope&&M.closeNode(),!y.skip&&!y.subLanguage&&(Ue+=y.relevance),y=y.parent;while(y!==E.parent);return E.starts&&bt(E.starts,c),N.returnEnd?0:h.length}function vn(){const c=[];for(let h=y;h!==F;h=h.parent)h.scope&&c.unshift(h.scope);c.forEach(h=>M.openNode(h))}let je={};function vt(c,h){const v=h&&h[0];if(C+=c,v==null)return O(),0;if(je.type==="begin"&&h.type==="end"&&je.index===h.index&&v===""){if(C+=m.slice(h.index,h.index+1),!R){const E=new Error(`0 width match regex (${a})`);throw E.languageName=a,E.badRule=je.rule,E}return 1}if(je=h,h.type==="begin")return bn(h);if(h.type==="illegal"&&!x){const E=new Error('Illegal lexeme "'+v+'" for mode "'+(y.scope||"<unnamed>")+'"');throw E.mode=y,E}else if(h.type==="end"){const E=yn(h);if(E!==pt)return E}if(h.type==="illegal"&&v==="")return C+=`
`,1;if(Je>1e5&&Je>h.index*3)throw new Error("potential infinite loop, way more iterations than matches");return C+=v,v.length}const F=Y(a);if(!F)throw se(_.replace("{}",a)),new Error('Unknown language: "'+a+'"');const wn=Qt(F);let Ze="",y=k||wn;const wt={},M=new d.__emitter(d);vn();let C="",Ue=0,re=0,Je=0,Qe=!1;try{if(F.__emitTokens)F.__emitTokens(m,M);else{for(y.matcher.considerAll();;){Je++,Qe?Qe=!1:y.matcher.considerAll(),y.matcher.lastIndex=re;const c=y.matcher.exec(m);if(!c)break;const h=m.substring(re,c.index),v=vt(h,c);re=c.index+v}vt(m.substring(re))}return M.finalize(),Ze=M.toHTML(),{language:a,value:Ze,relevance:Ue,illegal:!1,_emitter:M,_top:y}}catch(c){if(c.message&&c.message.includes("Illegal"))return{language:a,value:We(m),illegal:!0,relevance:0,_illegalBy:{message:c.message,index:re,context:m.slice(re-100,re+100),mode:c.mode,resultSoFar:Ze},_emitter:M};if(R)return{language:a,value:We(m),illegal:!1,relevance:0,errorRaised:c,_emitter:M,_top:y};throw c}}function Ke(a){const m={value:We(a),illegal:!1,relevance:0,_top:p,_emitter:new d.__emitter(d)};return m._emitter.addText(a),m}function Xe(a,m){m=m||d.languages||Object.keys(r);const x=Ke(a),k=m.filter(Y).filter(gt).map(O=>be(O,a,!1));k.unshift(x);const A=k.sort((O,z)=>{if(O.relevance!==z.relevance)return z.relevance-O.relevance;if(O.language&&z.language){if(Y(O.language).supersetOf===z.language)return 1;if(Y(z.language).supersetOf===O.language)return-1}return 0}),[B,Z]=A,Oe=B;return Oe.secondBest=Z,Oe}function rn(a,m,x){const k=m&&o[m]||x;a.classList.add("hljs"),a.classList.add(`language-${k}`)}function Ye(a){let m=null;const x=P(a);if(g(x))return;if($e("before:highlightElement",{el:a,language:x}),a.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",a);return}if(a.children.length>0&&(d.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(a)),d.throwUnescapedHTML))throw new nn("One of your code blocks includes unescaped HTML.",a.innerHTML);m=a;const k=m.textContent,A=x?T(k,{language:x,ignoreIllegals:!0}):Xe(k);a.innerHTML=A.value,a.dataset.highlighted="yes",rn(a,x,A.language),a.result={language:A.language,re:A.relevance,relevance:A.relevance},A.secondBest&&(a.secondBest={language:A.secondBest.language,relevance:A.secondBest.relevance}),$e("after:highlightElement",{el:a,result:A,text:k})}function an(a){d=dt(d,a)}const on=()=>{Ne(),pe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function ln(){Ne(),pe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let ut=!1;function Ne(){function a(){Ne()}if(document.readyState==="loading"){ut||window.addEventListener("DOMContentLoaded",a,!1),ut=!0;return}document.querySelectorAll(d.cssSelector).forEach(Ye)}function cn(a,m){let x=null;try{x=m(t)}catch(k){if(se("Language definition for '{}' could not be registered.".replace("{}",a)),R)se(k);else throw k;x=p}x.name||(x.name=a),r[a]=x,x.rawDefinition=m.bind(null,t),x.aliases&&mt(x.aliases,{languageName:a})}function dn(a){delete r[a];for(const m of Object.keys(o))o[m]===a&&delete o[m]}function pn(){return Object.keys(r)}function Y(a){return a=(a||"").toLowerCase(),r[a]||r[o[a]]}function mt(a,{languageName:m}){typeof a=="string"&&(a=[a]),a.forEach(x=>{o[x.toLowerCase()]=m})}function gt(a){const m=Y(a);return m&&!m.disableAutodetect}function hn(a){a["before:highlightBlock"]&&!a["before:highlightElement"]&&(a["before:highlightElement"]=m=>{a["before:highlightBlock"](Object.assign({block:m.el},m))}),a["after:highlightBlock"]&&!a["after:highlightElement"]&&(a["after:highlightElement"]=m=>{a["after:highlightBlock"](Object.assign({block:m.el},m))})}function un(a){hn(a),b.push(a)}function mn(a){const m=b.indexOf(a);m!==-1&&b.splice(m,1)}function $e(a,m){const x=a;b.forEach(function(k){k[x]&&k[x](m)})}function gn(a){return pe("10.7.0","highlightBlock will be removed entirely in v12.0"),pe("10.7.0","Please use highlightElement now."),Ye(a)}Object.assign(t,{highlight:T,highlightAuto:Xe,highlightAll:Ne,highlightElement:Ye,highlightBlock:gn,configure:an,initHighlighting:on,initHighlightingOnLoad:ln,registerLanguage:cn,unregisterLanguage:dn,listLanguages:pn,getLanguage:Y,registerAliases:mt,autoDetection:gt,inherit:dt,addPlugin:un,removePlugin:mn}),t.debugMode=function(){R=!1},t.safeMode=function(){R=!0},t.versionString=tn,t.regex={concat:H,lookahead:G,either:ke,optional:Se,anyNumberOfTimes:xe};for(const a in Me)typeof Me[a]=="object"&&s(Me[a]);return Object.assign(t,Me),t},he=ht({});return he.newInstance=()=>ht({}),nt=he,he.HighlightJS=he,he.default=he,nt}var oi=ai();const Lt=_n(oi),St="[A-Za-z$_][0-9A-Za-z$_]*",li=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],ci=["true","false","null","undefined","NaN","Infinity"],At=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Pt=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],It=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],di=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],pi=[].concat(It,At,Pt);function hi(s){const e=s.regex,n=(I,{after:X})=>{const ie="</"+I[0].slice(1);return I.input.indexOf(ie,X)!==-1},i=St,l={begin:"<>",end:"</>"},f=/<[A-Za-z0-9\\._:-]+\s*\/>/,w={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(I,X)=>{const ie=I[0].length+I.index,de=I.input[ie];if(de==="<"||de===","){X.ignoreMatch();return}de===">"&&(n(I,{after:ie})||X.ignoreMatch());let fe;const Ie=I.input.substring(ie);if(fe=Ie.match(/^\s*=/)){X.ignoreMatch();return}if((fe=Ie.match(/^\s+extends\s+/))&&fe.index===0){X.ignoreMatch();return}}},U={$pattern:St,keyword:li,literal:ci,built_in:pi,"variable.language":di},ge="[0-9](_?[0-9])*",W=`\\.(${ge})`,we="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",K={className:"number",variants:[{begin:`(\\b(${we})((${W})|\\.)?|(${W}))[eE][+-]?(${ge})\\b`},{begin:`\\b(${we})\\b((${W})\\b|\\.)?|(${W})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},G={className:"subst",begin:"\\$\\{",end:"\\}",keywords:U,contains:[]},xe={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,G],subLanguage:"xml"}},Se={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,G],subLanguage:"css"}},H={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,G],subLanguage:"graphql"}},Ee={className:"string",begin:"`",end:"`",contains:[s.BACKSLASH_ESCAPE,G]},le={className:"comment",variants:[s.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),s.C_BLOCK_COMMENT_MODE,s.C_LINE_COMMENT_MODE]},Ce=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,xe,Se,H,Ee,{match:/\$\d+/},K];G.contains=Ce.concat({begin:/\{/,end:/\}/,keywords:U,contains:["self"].concat(Ce)});const Re=[].concat(le,G.contains),ee=Re.concat([{begin:/(\s*)\(/,end:/\)/,keywords:U,contains:["self"].concat(Re)}]),te={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:U,contains:ee},_e={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},ce={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...At,...Pt]}},Te={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Le={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[te],illegal:/%/},Ae={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Fe(I){return e.concat("(?!",I.join("|"),")")}const qe={match:e.concat(/\b/,Fe([...It,"super","import"].map(I=>`${I}\\s*\\(`)),i,e.lookahead(/\s*\(/)),className:"title.function",relevance:0},ne={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Ge={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},te]},Pe="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+s.UNDERSCORE_IDENT_RE+")\\s*=>",Ve={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Pe)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[te]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:U,exports:{PARAMS_CONTAINS:ee,CLASS_REFERENCE:ce},illegal:/#(?![$_A-z])/,contains:[s.SHEBANG({label:"shebang",binary:"node",relevance:5}),Te,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,xe,Se,H,Ee,le,{match:/\$\d+/},K,ce,{scope:"attr",match:i+e.lookahead(":"),relevance:0},Ve,{begin:"("+s.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[le,s.REGEXP_MODE,{className:"function",begin:Pe,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:s.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:U,contains:ee}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:l.begin,end:l.end},{match:f},{begin:w.begin,"on:begin":w.isTrulyOpeningTag,end:w.end}],subLanguage:"xml",contains:[{begin:w.begin,end:w.end,skip:!0,contains:["self"]}]}]},Le,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+s.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[te,s.inherit(s.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},ne,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[te]},qe,Ae,_e,Ge,{match:/\$[(.]/}]}}Lt.registerLanguage("javascript",hi);class ui extends D{static styles=[Q(ri)];static properties={language:{type:String},code:{tyoe:String,state:!0}};constructor(){super(),this.language="javascript"}#t(){const n=this.shadowRoot.querySelector("slot").assignedNodes()[0].textContent;this.code=Lt.highlight(n,{language:this.language}).value}render(){return u`
      <pre part="container"><code>${Et(this.code)}</code></pre>
      <slot @slotchange="${()=>this.#t()}"></slot>
    `}}customElements.define("code-block",ui);const mi="::slotted([slot=demo]){aspect-ratio:var(--ratio-widescreen)}::slotted([slot=description]){padding-left:var(--size-2);color:var(--color-4);font-weight:var(--font-weight-3);font-size:var(--font-size-1);text-align:justify;border-left:3px solid var(--color-5)}::slotted([slot=toggle-collapsed]),::slotted([slot=toggle-expanded]){display:flex;gap:var(--size-1);align-items:center;cursor:pointer}[part=implementation]{display:none;margin-bottom:var(--size-4);background-color:var(--color-10);border:2px solid var(--color-5);border-radius:var(--radius-1);box-shadow:var(--inner-shadow-4)}[part=implementation].active{display:block}[part=implementation-code]{padding-inline:var(--size-3)}[part=implementation-footer]{display:flex;align-items:center;justify-content:end;border-top:1px solid var(--color-6);padding-inline:var(--size-2)}[part=implementation-link]{padding:var(--size-2);font-size:var(--font-size-0)}[part=implementation-toggle]{background:none;border:none}[part=implementation-toggle]:hover{background:none}";class gi extends D{static styles=[ze,st,Q(mi)];static properties={collapsed:{type:Boolean},hasCodeExample:{type:Boolean,state:!0},exampleLanguage:{type:String},href:{type:String}};connectedCallback(){super.connectedCallback(),this.collapsed=!0,this.shadowRoot.addEventListener("slotchange",()=>{this.hasCodeExample=this.#t("code")})}updated(e){super.updated(e),e.has("collapsed")&&!this.collapsed&&this.shadowRoot.querySelector('[part="implementation"]').classList.add("active")}#t(e){return this.shadowRoot.querySelector(`slot[name="${e}"]`).assignedNodes().length>0}#e(e){e.target.classList.toggle("active",!e.target.classList.contains("fade-out-shrink")),e.target.classList.remove("fade-in-grow","fade-out-shrink")}#n(){return{"fade-in-grow":this.collapsed===!1,"fade-out-shrink":this.collapsed===!0}}render(){return u`
      <slot name="title"></slot>
      <slot name="description"></slot>

      <div ?hidden="${!this.hasCodeExample}">
        <button part="implementation-toggle" @click="${()=>{this.collapsed=!this.collapsed}}">
          <slot name="toggle-collapsed" ?hidden="${!this.collapsed}"></slot>
          <slot name="toggle-expanded" ?hidden="${this.collapsed}"></slot>
        </button>
        <div part="implementation"
             class="${He(this.#n())}"
             @animationend="${e=>this.#e(e)}">
          <div part="implementation-code">
            <slot name="code"></slot>
          </div>
          ${q(this.href,()=>u`
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
    `}}customElements.define("showcase-component",gi);const fi=`<!DOCTYPE html>
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
`,bi=`<!DOCTYPE html>
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
`,yi=`<!DOCTYPE html>
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
`,vi=`<!DOCTYPE html>
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
`,wi=`<!DOCTYPE html>
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
`,xi=`<!DOCTYPE html>
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
      // Define the metadata of the playlist item
      data: {
        title: mainChapter.title,
        duration: mainChapter.duration / 1000,
        live: mainChapter.type === 'LIVESTREAM',
        imageUrl: mainChapter.imageUrl,
        imageTitle: mainChapter.imageTitle
      },
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
`,Si=`<!DOCTYPE html>
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
`,Ei=`<!DOCTYPE html>
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
`,ki=`<!DOCTYPE html>
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
`,Ci=`<!DOCTYPE html>
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
`,Ri=`<!DOCTYPE html>
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
`,_i=`<!DOCTYPE html>
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
`,Ti=`<!DOCTYPE html>
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
      ?.spriteSheet;

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
`;function Li(s){const e=s.replace(/^[\r\n]+|[\r\n]+$/g,""),i=e.split(`
`)[0].match(/^ */)[0].length,l=new RegExp(`^ {${i}}`,"gm");return e.replace(l,"")}const Ai=new DOMParser;function j(s,e="[data-implementation]"){return Li(Ai.parseFromString(s,"text/html").querySelector(e).textContent)}const Pi=[{id:"start-time",href:"start-time.html",title:"Start the player at a given position",description:u`In this showcase, we'll demonstrate how to load a video source and start playback at a specific position using Pillarbox. This can be useful when you want to provide users with the option to begin watching a video from a predefined timestamp. To achieve this functionality, follow the code snippet below:`,code:j(fi)},{id:"multi-player",href:"multi-player.html",title:"Multiple Players",description:u`This example demonstrates how to incorporate multiple video players on a webpage.In this showcase, two players are initialized, each with its own configuration, a button allows to toggle the mute state for both players.`,code:j(bi)},{id:"blocked-segments",href:"blocked-segment.html",title:"Detect Blocked Segments",description:u`This tutorial covers how to use Pillarbox to create a plugin that detects and notifies when a blocked segment is skipped. <br><br><b>Note:</b> The blocked segment starts at 29:26 for this example.`,code:j(yi)},{id:"chapters",href:"chapters.html",title:"Display Current Chapter",description:u`This showcase explains how to use Pillarbox to create a plugin that displays the currently playing chapter in a box above the progress bar.`,code:j(vi)},{id:"skip-credits",href:"skip-credits.html",title:"Skip Credits",description:u`This example shows how to use the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/skip-button#readme" target="_blank">Pillarbox Skip Button component</a> to add a "Skip" button during detected credit intervals. <br><br><b>Note:</b> Seek to 26:40 to see the button.`,code:j(wi)},{id:"playlist",href:"playlist.html",title:"Playlist",description:u`This example shows how to fetch media data for a set of video sources and load them into the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/pillarbox-playlist#readme" target="_blank">Pillarbox Playlist plugin</a> with metadata such as title and duration.`,code:j(xi)},{id:"quality-menu",href:"quality-menu.html",title:"Quality Menu",description:u`In this showcase, we'll demonstrate how to display a quality selector menu using the <a href="https://github.com/videojs/videojs-contrib-quality-menu" target="_blank">videojs-contrib-quality-menu</a> plugin.`,code:j(Si)},{id:"countdown",href:"countdown.html",title:"Countdown Timer",description:u`In this showcase, we'll demonstrate how to display a countdown timer.`,code:j(Ei)},{id:"playback-rate",href:"playback-rate.html",title:"Playback Rate",description:u`In this showcase, we'll demonstrate how to display the playback rate component.`,code:j(ki)},{id:"chapter-selection",href:"chapter-selection.html",title:"Chapter Selection",description:u`In this showcase, we'll demonstrate how to display a chapter selector.`,code:j(Ci)},{id:"firefox-pip",href:"firefox-pip.html",title:"Hide Firefox PiP Button",description:u`In this showcase, we'll demonstrate how to hide Firefox PiP Button. Activating or deactivating PiP in Firefox applies at the next player resize, such as when entering full screen mode. This appears to be due to an implementation bug in Firefox. Refer to the <a href="https://github.com/SRGSSR/pillarbox-web-demo/pull/57" target="_blank">PR</a> for more details.`,code:j(Ri)},{id:"spatial-navigation",href:"spatial-navigation.html",title:"Enable Spatial Navigation",description:u`In this showcase, we will demonstrate how to enable <a href="https://videojs.com/guides/spatial-navigation/" target="_blank" rel="noopener noreferrer">spatial navigation</a>, allowing users to control the player with a remote on smart TVs like Tizen and webOS.<br><br>            <i>Note: If you're targeting TV devices with spatial navigation, consider removing the volume button and setting muted: false, as volume is typically handled by the device itself.</i>`,code:j(_i)},{id:"thumbnail-preview",href:"thumbnail-preview.html",title:"Thumbnail Preview",description:u`This example shows how to use the thumbnail preview metadata from the current SRGSSR source and inject it into the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/thumbnail-preview#readme" target="_blank">Thumbnail Preview plugin</a>.`,code:j(Ti)}];class Ii extends D{createRenderRoot(){return this}render(){return u`
      ${oe(Pi??[],this.#t.bind(this))}
    `}#t({id:e,href:n,title:i,description:l,code:f}){return u`
      <div class="fade-in"
           @animationend="${w=>w.target.classList.remove("fade-in")}">
        <showcase-component href="${n}">
          <a id="${e}" href="#${e}" slot="title" part="anchor-title">
            <h2>${i}</h2>
          </a>
          <p slot="description">${l}</p>
          <span slot="toggle-collapsed">
            <i class="material-symbols-outlined">visibility</i> See the Implementation
          </span>
          <span slot="toggle-expanded">
            <i class="material-symbols-outlined">visibility_off</i> Hide the Implementation
          </span>
          <code-block slot="code" language="javascript">${f}</code-block>
        </showcase-component>
        <a part="showcase-link"
           href="./static/showcases/${n}"
           target="_blank">
          Open this showcase
        </a>
      </div>
    `}}customElements.define("showcase-page",Ii);S.addRoute("showcase","showcase-page");class Mi extends D{static properties={debug:{type:Boolean,state:!0}};createRenderRoot(){return this}#t=({detail:{queryParams:e}})=>{this.debug=e.debug==="true"};connectedCallback(){super.connectedCallback(),this.debug=S.queryParams.debug==="true",S.addEventListener("routechanged",this.#t),S.addEventListener("queryparams",this.#t)}disconnectedCallback(){S.removeEventListener("routechanged",this.#t),S.removeEventListener("queryparams",this.#t)}render(){return u`
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
          <li part="monitoring-li">
            <a href="https://grafana.pillarbox.ch/"
               title="Monitoring" part="monitoring-link"
               target="_blank" rel="noopener noreferrer">
              <i class="material-symbols-outlined">bar_chart</i>
            </a>
          </li>
        </ul>
      </nav>`}}customElements.define("demo-header",Mi);class Di extends D{static properties={route:{state:!0}};constructor(){super(),this.route=S.currentRoute,S.addEventListener("routechanged",({detail:{route:e}})=>{this.route?.destroy(),this.route=e})}createRenderRoot(){return this}render(){return Et(`<${this.route.component}></${this.route.component}>`)}}customElements.define("route-outlet",Di);const Be=ue.loadPreferences();$.host=Be.dataProviderHost;S.start({defaultPath:"examples"});S.queryParams.debug?(Be.debug=S.queryParams.debug==="true",ue.savePreferences(Be)):Be.debug&&S.updateState({debug:"true"});
//# sourceMappingURL=index-D5ukCEtm.js.map
