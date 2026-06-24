import{c as e,d as t,f as n,g as r,h as i,i as a,l as o,m as s,n as c,o as l,p as u,r as d,t as f,u as p}from"./core-demo-header-component-C6PDx-DJ.js";var m=`[part=container]{block-size:480px;aspect-ratio:var(--ratio-widescreen);background-color:var(--color-12);padding:0;overflow:visible}[part=close-btn]{top:calc(var(--size-3) * -1);z-index:2;width:var(--size-7);height:var(--size-7);font-size:var(--size-4);text-align:center;background:var(--gray-6);border-radius:var(--radius-round);position:absolute;right:0}`,h=class extends t{static properties={open:{type:Boolean,reflect:!0}};static styles=[p,o,s(m)];#e;constructor(){super(),this.open=!1}updated(e){super.updated(e),e.has(`open`)&&(this.open?(this.#e.showModal(),this.#e.classList.toggle(`slide-up-fade-in`,!0)):this.#e.close())}firstUpdated(e){super.firstUpdated(e),this.#e=this.shadowRoot.querySelector(`dialog`)}#t(){this.dispatchEvent(new CustomEvent(`close`))}#n(e){this.#e===e.target&&(this.open=!1)}render(){return u`
      <dialog part="container"
              @click="${this.#n.bind(this)}"
              @close="${this.#t.bind(this)}"
              @animationend="${e=>e.target.classList.remove(`slide-up-fade-in`)}">
        <button part="close-btn"
                @click="${()=>{this.open=!1}}"
                title="Close player dialog">&times;</button>
        <slot></slot>
      </dialog>
    `}};customElements.define(`demo-dialog`,h);var g=class{static loadPreferences(){return JSON.parse(localStorage.getItem(`preferences`))||{}}static savePreferences(e){localStorage.setItem(`preferences`,JSON.stringify(e))}},_=`il.srgssr.ch`,v={vector:`srgplay`},y={includeAggregations:!1,includeSuggestions:!1,sortBy:`default`,sortDir:`desc`,pageSize:50,...v},b={onlyActiveShows:!0,...v},x=({title:e,urn:t,mediaType:n,date:r,duration:i})=>({title:e,urn:t,mediaType:n,date:r,duration:i}),S=new class{#e;constructor(e=_){this.host=e}get host(){return this.#e}set host(e){this.#e=e||`il.srgssr.ch`}async search(e,t,n=void 0){let r=await this.#t(`/${e.toLowerCase()}/searchResultMediaList`,{...y,q:t},n),i=e=>e.searchResultMediaList.map(x);return{results:i(r),next:r.next?this.#n(r.next,i):void 0}}async topics(e,t=`tv`){return(await this.#t(`/${e.toLowerCase()}/topicList/${t}`)).topicList.map(({title:e,urn:t})=>({title:e,urn:t}))}async latestByTopic(e,t=30){let n=await this.#t(`/mediaList/latest/byTopicUrn/${e}`,{pageSize:t}),r=e=>e.mediaList.map(x);return{results:r(n),next:n.next?this.#n(n.next,r):void 0}}async shows(e,t=`unlimited`,n=`tv`){return(await this.#t(`/${e.toLowerCase()}/showList/${n}/alphabetical`,{...b,pageSize:t})).showList.map(({title:e,urn:t})=>({title:e,urn:t}))}async latestByShow(e,t=30){let n=await this.#t(`/episodeComposition/latestByShow/byUrn/${e}`,{...v,pageSize:t}),r=e=>e.episodeList.map(({mediaList:e})=>e[0]).map(x);return{results:r(n),next:n.next?this.#n(n.next,r):void 0}}async editorial(e,t=30){let n=await this.#t(`/${e.toLowerCase()}/mediaList/video/editorial`,{...v,pageSize:t}),r=e=>e.mediaList.map(x);return{results:r(n),next:n.next?this.#n(n.next,r):void 0}}async livestreams(e,t=`video`){return(await this.#t(`/${e.toLowerCase()}/mediaList/${t}/livestreams`)).mediaList.map(x)}async scheduledLivestream(e,t=10){let n=await this.#t(`/${e.toLowerCase()}/mediaList/video/scheduledLivestreams`,{...v,pageSize:t}),r=e=>e.mediaList.map(x);return{results:r(n),next:n.next?this.#n(n.next,r):void 0}}async livecenter(e,t=10){let n=await this.#t(`/${e.toLowerCase()}/mediaList/video/scheduledLivestreams/livecenter`,{...v,pageSize:t}),r=e=>e.mediaList.map(x);return{results:r(n),next:n.next?this.#n(n.next,r):void 0}}async channels(e,t=`radio`){return(await this.#t(`/${e.toLowerCase()}/channelList/${t}`)).channelList.map(({title:e,id:t})=>({title:e,id:t}))}async radioShowByChannel(e,t,n=`unlimited`){return(await this.#t(`/${e.toLowerCase()}/showList/radio/alphabeticalByChannel/${t}`,{...v,pageSize:n})).showList.map(({title:e,urn:t})=>({title:e,urn:t}))}async#t(e,t=v,n=void 0){let r=new URLSearchParams(t).toString(),i=`https://${this.host}/integrationlayer/2.0/${e.replace(/^\/+/,``)}?${r}`;return fetch(i,{signal:n}).then(e=>e.ok?e.json():Promise.reject(e)).catch(e=>Promise.reject(e))}#n(e,t){return async(n=void 0)=>{let r=await fetch(e,{signal:n}).then(e=>e.ok?e.json():Promise.reject(e)).catch(e=>Promise.reject(e));return{results:t(r),next:this.#n(r.next,t)}}}},C=`demo-player`,w={restoreEl:!0},T=e=>({muted:e.muted??!0,autoplay:e.autoplay??!1,debug:e.debug??!1,srgOptions:{dataProviderHost:e.dataProviderHost??`il.srgssr.ch`}}),E=(e={})=>(window.player=new l(C,{...w,...T(g.loadPreferences()),...e}),window.player),D=()=>{l.getPlayer(C).dispose(),window.player=null};window.pillarbox=l;var O=document.querySelector(`demo-dialog`),k=e=>{let t=Object.keys(e??{})[0];return t?{vendor:t,...t===`com.apple.fps.1_0`?e[t]:{licenseUri:e[t]}}:{}},A=e=>{if(!e.vendor)return;let{certificateUri:t,licenseUri:n}=e;return e.vendor===`com.apple.fps.1_0`?{[e.vendor]:{certificateUri:t,licenseUri:n}}:{[e.vendor]:n}},j=({src:e,type:t,keySystems:n})=>new URLSearchParams({src:e,type:t,...k(n)}).toString();O.addEventListener(`close`,()=>{D(),e.updateState({},[`src`,`type`,`vendor`,`certificateUri`,`licenseUri`])});var M=e=>{if(window.player)return;let t=e.detail.queryParams;if(`src`in t){let{src:e,type:n}=t;N({src:e,type:n,keySystems:A(t)})}};e.addEventListener(`routechanged`,M),e.addEventListener(`queryparams`,M);var N=({src:t,type:n,keySystems:r,playerOptions:i},a=!0)=>{let o=E(i??{});return O.open=!0,o.src({src:t,type:n,keySystems:r}),a&&e.updateState({src:t,...n?{type:n}:{},...k(r)}),o},P=c(class extends d{constructor(e){if(super(e),e.type!==a.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return n}}),F=class extends t{static properties={src:{type:String},drmSettings:{type:Object},drmSettingsShown:{state:!0,type:Boolean}};createRenderRoot(){return this}constructor(){super(),this.src=``,this.#e()}#e(){this.drmSettings={vendor:``,certificateUri:``,licenseUri:``}}#t(){try{return new URL(this.src).searchParams.get(`urn`)??this.src}catch{return this.src}}#n(){let e=this.#t()?.trim(),t=e.startsWith(`urn:`)?`srgssr/urn`:void 0,n=this.#i;this.dispatchEvent(new CustomEvent(`submit-media`,{detail:{src:e,type:t,keySystems:n}}))}#r(e){this.src=e.target.value,e.key===`Enter`&&this.src&&this.#n()}get#i(){if(this.drmSettings?.vendor)return this.#a()}#a(){let e=this.drmSettings.certificateUri?.trim(),t=this.drmSettings.licenseUri?.trim();return this.drmSettings.vendor===`com.apple.fps.1_0`?{[this.drmSettings.vendor]:{certificateUri:e,licenseUri:t}}:{[this.drmSettings.vendor]:t}}render(){let e={spin:this.drmSettingsShown===!0,"spin-back":this.drmSettingsShown===!1};return u`
      <div part="load-bar-container">
        <i class="material-symbols-outlined">link</i>
        <input type="text"
               placeholder="Enter a URL or URN to play its content..."
               @keyup="${this.#r}"
               .value="${this.src??``}">
        <button title="Open DRM Settings"
                @click="${()=>{this.drmSettingsShown=!this.drmSettingsShown}}">
          <i class="material-symbols-outlined ${P(e)}"
             @animationend="${e=>e.target.classList.remove(`spin`,`spin-back`)}">
            key
          </i>
        </button>
      </div>
      
      ${this.#c()}

      <button part="load-bar-action"
              ?disabled="${!this.src}"
              @click="${this.#n}">
        <i class="material-symbols-outlined">play_circle</i> Play content
      </button>
    `}updated(e){super.updated(e),e.has(`drmSettingsShown`)&&this.drmSettingsShown&&this.renderRoot.querySelector(`[part="drm-settings-container"]`).classList.add(`active`)}#o(e){e.target.classList.toggle(`active`,!e.target.classList.contains(`fade-out-shrink`)),e.target.classList.remove(`fade-in-grow`,`fade-out-shrink`)}#s(){return{"fade-in-grow":this.drmSettingsShown===!0,"fade-out-shrink":this.drmSettingsShown===!1}}#c(){return u`
      <form part="drm-settings-container" class="${P(this.#s())}"
            aria-hidden="${!this.drmSettingsShown}"
            @reset="${this.#e}"
            @animationend="${e=>this.#o(e)}">
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
    `}};customElements.define(`load-media-form`,F);var I=`[part=a]{gap:var(--size-2);min-height:var(--size-10);color:var(--color-0);font-weight:var(--font-weight-6);font-size:var(--size-3);text-align:justify;background-color:var(--color-9);border:1px solid var(--color-10);padding-inline:var(--size-3);flex-direction:column;justify-content:center;margin:0;text-decoration:none;transition:background-color .4s,border-color .4s;display:flex}[part=a]:hover{background-color:var(--color-8);border-color:var(--color-9);text-decoration:none}[part=title]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}::slotted([slot=description]){color:var(--color-6);font-weight:var(--font-weight-5);font-size:var(--size-3);align-items:center;font-style:italic;display:flex}`,L=class extends t{static properties={href:{type:String},title:{type:String}};static styles=s(I);#e=t=>{t.preventDefault();let n=new URL(`${window.location.origin}/${this.href}`),r=Object.fromEntries(n.searchParams.entries());e.navigateTo(n.pathname,r)};connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.#e)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.#e)}render(){return u`
      <a href="${this.href}" title="${this.title}" part="a">
        <span part="title">${this.title}</span>
        <slot part="description" name="description"></slot>
      </a>
    `}};customElements.define(`content-link`,L);var R={SRGSSR:[{title:`Horizontal video`,src:`urn:rts:video:14827306`,type:`srgssr/urn`},{title:`Square video`,src:`urn:rts:video:8393241`,type:`srgssr/urn`},{title:`Vertical video`,src:`urn:rts:video:13444390`,type:`srgssr/urn`},{title:`A bon entendeur`,src:`urn:rts:video:14080915`,type:`srgssr/urn`},{title:`Live video`,description:`SRF 1`,src:`urn:srf:video:c4927fcf-e1a0-0001-7edd-1ef01d441651`,type:`srgssr/urn`},{title:`DVR video livestream`,description:`RTS 1`,src:`urn:rts:video:3608506`,type:`srgssr/urn`},{title:`Content with a blocked time range`,description:`Puls - Gehirnerschütterung, Akutgeriatrie, Erlenpollen im Winter`,src:`urn:srf:video:40ca0277-0e53-4312-83e2-4710354ff53e`,type:`srgssr/urn`},{title:`DVR audio livestream`,description:`Couleur 3 (DVR)`,src:`urn:rts:audio:3262363`,type:`srgssr/urn`},{title:`Expired URN`,description:`Content that is not available anymore`,src:`urn:rts:video:13382911`,type:`srgssr/urn`},{title:`Unknown URN`,description:`Content that does not exist`,src:`urn:srf:video:unknown`,type:`srgssr/urn`}],HLS:[{title:`VOD - HLS`,description:`Sacha part à la rencontre d'univers atypiques`,src:`https://rts-vod-amd.akamaized.net/ww/14970442/96fc7429-64c1-34b0-8c05-62cf114695ac/master.m3u8`,type:`application/x-mpegURL`},{title:`VOD - HLS (short)`,description:`Des violents orages ont touché Ajaccio, chef-lieu de la Corse, jeudi`,src:`https://rts-vod-amd.akamaized.net/ww/13317145/f1d49f18-f302-37ce-866c-1c1c9b76a824/master.m3u8`,type:`application/x-mpegURL`},{title:`Brain Farm Skate Phantom Flex`,description:`4K video`,src:`https://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8`,type:`application/x-mpegURL`},{title:`Video livestream with DVR - HLS`,description:`Couleur 3 en vidéo (DVR)`,src:`https://visualradio-rts-couleur3-d.akamaized.net/out/v1/6a1472634ad745f59a9e63ee8adbbc00/index.m3u8`,type:`application/x-mpegURL`},{title:`Video livestream with DVR and timestamps - HLS`,description:`Tageschau`,src:`https://tagesschau.akamaized.net/hls/live/2020115/tagesschau/tagesschau_1/master.m3u8`,type:`application/x-mpegURL`},{title:`Audio livestream - HLS`,description:`Couleur 3 (DVR)`,src:`https://stxt-audiostreaming.akamaized.net/hls/live/2117380/couleur3/master.m3u8`,type:`application/x-mpegURL`},{title:`Apple Basic 4:3`,description:`4x3 aspect ratio, H.264 @ 30Hz`,src:`https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8`,type:`application/x-mpegURL`},{title:`Apple Basic 16:9`,description:`16x9 aspect ratio, H.264 @ 30Hz`,src:`https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8`,type:`application/x-mpegURL`},{title:`Apple Advanced 16:9 (TS)`,description:`16x9 aspect ratio, H.264 @ 30Hz and 60Hz, Transport stream`,src:`https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8`,type:`application/x-mpegURL`},{title:`Apple Advanced 16:9 (fMP4)`,description:`16x9 aspect ratio, H.264 @ 30Hz and 60Hz, Fragmented MP4`,src:`https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8`,type:`application/x-mpegURL`},{title:`Apple Advanced 16:9 (HEVC/H.264)`,description:`16x9 aspect ratio, H.264 and HEVC @ 30Hz and 60Hz`,src:`https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_adv_example_hevc/master.m3u8`,type:`application/x-mpegURL`},{title:`Apple Atmos`,src:`https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8`,type:`application/x-mpegURL`},{title:`Apple WWDC Keynote 2023`,src:`https://events-delivery.apple.com/0105cftwpxxsfrpdwklppzjhjocakrsk/m3u8/vod_index-PQsoJoECcKHTYzphNkXohHsQWACugmET.m3u8`,type:`application/x-mpegURL`},{title:`Apple tv trailer`,description:`Lot of audios and subtitles choices`,src:`https://play-edge.itunes.apple.com/WebObjects/MZPlayLocal.woa/hls/subscription/playlist.m3u8?cc=CH&svcId=tvs.vds.4021&a=1522121579&isExternal=true&brandId=tvs.sbd.4000&id=518077009&l=en-GB&aec=UHD
`,type:`application/x-mpegURL`},{title:`Multiple subtitles and audio tracks`,description:`On some devices codec may crash`,src:`https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8`,type:`application/x-mpegURL`},{title:`4K, HEVC`,src:`https://cdn.bitmovin.com/content/encoding_test_dash_hls/4k/hls/4k_profile/master.m3u8`,type:`application/x-mpegURL`},{title:`VoD, single audio track`,src:`https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8`,type:`application/x-mpegURL`},{title:`AES-128`,src:`https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/m3u8s/11331.m3u8`,type:`application/x-mpegURL`},{title:`HLS - Fragmented MP4`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8`,type:`application/x-mpegURL`},{title:`HLS - Alternate audio language`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.m3u8`,type:`application/x-mpegURL`},{title:`HLS - Audio only`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.m3u8?filter=(type!=%22video%22)`,type:`application/x-mpegURL`},{title:`HLS - Trickplay`,src:`https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel-trickplay.m3u8`,type:`application/x-mpegURL`},{title:`Limiting bandwidth use`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8?max_bitrate=800000`,type:`application/x-mpegURL`},{title:`Dynamic Track Selection`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8?filter=%28type%3D%3D%22audio%22%26%26systemBitrate%3C100000%29%7C%7C%28type%3D%3D%22video%22%26%26systemBitrate%3C1024000%29`,type:`application/x-mpegURL`},{title:`Pure live`,src:`https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8`,type:`application/x-mpegURL`},{title:`Timeshift (5 minutes)`,src:`https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8?time_shift=300`,type:`application/x-mpegURL`},{title:`Live audio`,src:`https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8?filter=(type!=%22video%22)`,type:`application/x-mpegURL`},{title:`Pure live (scte35)`,src:`https://demo.unified-streaming.com/k8s/live/stable/scte35.isml/.m3u8`,type:`application/x-mpegURL`},{title:`fMP4, clear`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-fmp4.ism/.m3u8`,type:`application/x-mpegURL`},{title:`fMP4, HEVC 4K`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-hevc.ism/.m3u8`,type:`application/x-mpegURL`},{title:`Test1`,description:`Forced subtitles`,src:`https://prd.vod-srgssr.ch/origin/1053457/fr/master.m3u8?complexSubs=true`,type:`application/x-mpegURL`}],DASH:[{title:`VoD - Dash (H264)`,src:`https://storage.googleapis.com/wvmedia/clear/h264/tears/tears.mpd`,type:`application/dash+xml`},{title:`VoD - Dash Widewine cenc (H264)`,src:`https://storage.googleapis.com/wvmedia/cenc/h264/tears/tears.mpd`,type:`application/dash+xml`,keySystems:{"com.widevine.alpha":`https://proxy.uat.widevine.com/proxy?video_id=2015_tears&provider=widevine_test`}},{title:`VoD - Dash (H265)`,src:`https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd`,type:`application/dash+xml`},{title:`VoD - Dash widewine cenc (H265)`,src:`https://storage.googleapis.com/wvmedia/cenc/hevc/tears/tears.mpd`,type:`application/dash+xml`,keySystems:{"com.widevine.alpha":`https://proxy.uat.widevine.com/proxy?video_id=2015_tears&provider=widevine_test`}},{title:`VoD - Dash - MP4`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.mpd`,type:`application/dash+xml`},{title:`Dash - Fragmented MP4`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.mpd`,type:`application/dash+xml`},{title:`Dash - TrickPlay`,src:`https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel-trickplay.mpd`,type:`application/dash+xml`},{title:`Dash - Tiled thumbnails (live/timeline)`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-tiled-thumbnails-timeline.ism/.mpd`,type:`application/dash+xml`},{title:`Dash - Accessibility - hard of hearing`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-hoh-subs.ism/.mpd`,type:`application/dash+xml`},{title:`Dash - Single - fragmented TTML`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-en.ism/.mpd`,type:`application/dash+xml`},{title:`Dash - Multiple - RFC 5646 language tags`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-rfc5646.ism/.mpd`,type:`application/dash+xml`},{title:`Dash - Multiple - fragmented TTML`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-ttml.ism/.mpd`,type:`application/dash+xml`},{title:`Dash - Audio only`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.mpd?filter=(type!=%22video%22)`,type:`application/dash+xml`},{title:`Dash - Multiple audio codecs`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-codec.ism/.mpd`,type:`application/dash+xml`},{title:`Dash - Alternate audio language`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.mpd`,type:`application/dash+xml`},{title:`Dash - Accessibility - audio description`,src:`https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-desc-aud.ism/.mpd`,type:`application/dash+xml`},{title:`Dash - Pure live`,src:`https://demo.unified-streaming.com/k8s/live/stable/live.isml/.mpd`,type:`application/dash+xml`},{title:`Dash - Timeshift (5 minutes)`,src:`https://demo.unified-streaming.com/k8s/live/stable/live.isml/.mpd?time_shift=300`,type:`application/dash+xml`},{title:`Dash - DVB DASH low latency`,src:`https://demo.unified-streaming.com/k8s/live/stable/live-low-latency.isml/.mpd`,type:`application/dash+xml`}],MP4:[{title:`VOD - MP4`,description:`The dig`,src:`https://media.swissinfo.ch/media/video/dddaff93-c2cd-4b6e-bdad-55f75a519480/rendition/154a844b-de1d-4854-93c1-5c61cd07e98c.mp4`,type:`video/mp4`},{title:`AVC Progressive`,src:`https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4`,type:`video/mp4`}],AOD:[{title:`Audio HLS`,description:`Content with PTS rollover`,src:`https://cdn.rts.ch/audio-sample/playlist.m3u8`,type:`application/x-mpegURL`}]};function*z(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function B(e,t,n){return e?t(e):n?.(e)}var ee=class extends t{createRenderRoot(){return this}render(){return u`
      <load-media-form
        class="fade-in"
        @animationend="${e=>e.target.classList.remove(`fade-in`)}"
        @submit-media="${e=>N(e.detail)}">
      </load-media-form>

      <!-- List of examples -->
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove(`fade-in`)}">
        ${z(Object.entries(R),([e,t])=>u`
          <section class="example-section" data-section="${e}">
            <h2 class="sticky">${e}</h2>
            ${z(t,e=>u`
              <content-link title="${e.description||e.title}"
                            href="examples?${j(e)}">
                ${B(e.description,()=>u`
                  <span slot="description">${e.title}</span>
                `)}
              </content-link>
            `)}
          </section>
        `)}
      </div>
    `}};customElements.define(`examples-page`,ee),e.addRoute(`examples`,`examples-page`);var te=`[part=spinner]{width:var(--size-7);height:var(--size-7);border:3px solid var(--color-2);border-radius:var(--radius-round);animation:var(--animation-spin);border-bottom-color:#0000;display:block}[part=spinner-container]{margin:var(--size-10);place-content:center;display:grid}`,ne=class extends t{static properties={loading:{type:Boolean,reflect:!0}};static styles=s(te);constructor(){super(),this.loading=!1}render(){return u`
      <div part="spinner-container" ?hidden="${!this.loading}">
        <div part="spinner"></div>
      </div>
    `}};customElements.define(`loading-spinner`,ne);var re={root:null,rootMargin:`0px`,threshold:.1},ie=(e,t,n=re)=>{new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t()})},n).observe(e)},ae=class extends t{static styles=[o];firstUpdated(e){super.firstUpdated(e),ie(this.renderRoot.querySelector(`div`),()=>{this.dispatchEvent(new CustomEvent(`intersecting`))})}render(){return u`
      <div part="sentinel"></div>
    `}};customElements.define(`intersection-observer`,ae);var oe=`[part=scroll-to-top-button]{right:var(--size-4);bottom:var(--size-4);z-index:1;width:var(--size-7);height:var(--size-7);border-radius:var(--radius-round);border:none;justify-content:center;align-items:center;padding:0;display:flex;position:fixed}::slotted([slot=icon]){font-size:var(--size-8)}`,se=class extends t{static properties={title:{type:String}};static styles=[p,s(oe)];constructor(){super(),this.title=`Scroll to top`}render(){return u`
      <button part="scroll-to-top-button" title="${this.title}"
              @click="${()=>window.scrollTo({top:0,behavior:`smooth`})}">
        <slot name="icon"></slot>
      </button>
    `}};customElements.define(`scroll-to-top-button`,se);var V=e=>e.replace(/\s+/g,`-`).toLowerCase(),H=class e{constructor(e){this.stack=[],this.level=e}async initialize(e,t,n){if(!e||!t)return;let r=this.#n(e),i=this.#r(this.level[r].nodes,t);await this.fetchNextState(r,i),await this.#e(n)}async#e(e){for(let t of e?.split(`,`)||[]){let e=this.#r(this.level[0].nodes,t);await this.fetchNextState(0,e)}}async fetchNextState(e,t){let n=this.level[e];this.stack.push({level:this.level,sectionIndex:e,nodeIndex:t}),this.level=[await n.resolve(n.nodes[t])]}fetchPreviousState(e){this.level=this.stack[e].level,this.stack.splice(e)}isLeafSection(e){return this.level[e]?.isLeaf()}retrieveNode(e,t){return this.level[e]?.nodes[t]}get root(){return this.stack[0]?.level||this.level}get params(){return e.#t(this.stack)}static#t(e){if(e.length===0)return{};let t=e[0],n=t.level[t.sectionIndex],r=e.slice(1).map(e=>{let t=e.level[e.sectionIndex].nodes[e.nodeIndex];return t.id||t.urn}),i={section:V(n.title),bu:n.nodes[t.nodeIndex].toLowerCase()};return r&&r.length&&(i.nodes=r.join(`,`)),i}paramsAt(t,n){return e.#t([...this.stack,{level:this.level,sectionIndex:t,nodeIndex:n}])}#n(e){let t=V(e).toLowerCase();return this.level.map(e=>V(e.title).toLowerCase()).findIndex(e=>e===t)}#r(e,t){let n=t.toLowerCase();return e.map(e=>(e.urn||e.id||e.toString()).toLowerCase()).findIndex(e=>e===n)}},U=class{constructor({title:e,nodes:t,resolve:n=void 0,next:r=void 0}){this.title=e,this.nodes=t,this.resolve=n,this.next=r}isLeaf(){return!this.resolve}async fetchNext(e=void 0){if(!this.next)return;let t=await this.next(e);return this.next=t.next,this.nodes.push(...t.results),t.results}},W=e=>({nodes:e.results,next:e.next}),ce=[new U({title:`TV Topics`,nodes:[`RSI`,`RTR`,`RTS`,`SRF`,`SWI`],resolve:async e=>new U({title:`${e} TV Topics`,nodes:await S.topics(e),resolve:async e=>new U({title:e.title,...W(await S.latestByTopic(e.urn))})})}),new U({title:`TV Shows`,nodes:[`RSI`,`RTR`,`RTS`,`SRF`,`SWI`],resolve:async e=>new U({title:`${e} TV Shows`,nodes:await S.shows(e),resolve:async e=>new U({title:e.title,...W(await S.latestByShow(e.urn))})})}),new U({title:`TV Latest Videos`,nodes:[`RSI`,`RTR`,`RTS`,`SRF`],resolve:async e=>new U({title:`${e} TV Latest Videos`,...W(await S.editorial(e))})}),new U({title:`TV Livestreams`,nodes:[`RSI`,`RTR`,`RTS`,`SRF`],resolve:async e=>new U({title:`${e} TV Livestreams`,nodes:await S.livestreams(e)})}),new U({title:`Live web`,nodes:[`RSI`,`RTR`,`RTS`,`SRF`],resolve:async e=>new U({title:`${e} Live web`,...W(await S.scheduledLivestream(e))})}),new U({title:`Live center`,nodes:[`RSI`,`RTR`,`RTS`,`SRF`],resolve:async e=>new U({title:`${e} Live center`,nodes:await S.livecenter(e)})}),new U({title:`Radio Shows`,nodes:[`RSI`,`RTR`,`RTS`,`SRF`],resolve:async e=>new U({title:`${e} Radio Channels`,nodes:await S.channels(e),resolve:async t=>new U({title:`${t.title} Radio shows`,nodes:await S.radioShowByChannel(e,t.id),resolve:async e=>new U({title:e.title,...W(await S.latestByShow(e.urn))})})})}),new U({title:`Radio Livestreams`,nodes:[`RSI`,`RTR`,`RTS`,`SRF`],resolve:async e=>new U({title:`${e} Radio Livestreams`,nodes:await S.livestreams(e,`audio`)})})],G=class extends t{static properties={loading:{state:!0,type:Boolean},stack:{state:!0,type:Array},level:{state:!0,type:Object},nextPage:{state:!0,type:Function}};#e=new AbortController;#t;#n;constructor(){super(),this.loading=!1,this.#t=new H(ce),this.#r()}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.#n=async e=>{if(!e.detail.popstate)return;this.abortFetch();let t=new H(this.#t.root),{section:n,bu:r,nodes:i}=e.detail.queryParams;this.loading=!0;try{await t.initialize(n,r,i),this.#t=t,this.#r()}finally{this.loading=!1}},e.addEventListener(`queryparams`,this.#n)}disconnectedCallback(){super.disconnectedCallback(),this.abortFetch(),e.removeEventListener(`queryparams`,this.#n)}firstUpdated(t){super.firstUpdated(t),this.#n({detail:{popstate:!0,queryParams:e.queryParams}})}#r(){this.stack=[...this.#t.stack],this.level=[...this.#t.level]}async navigateTo(e,t){if(!this.#t.isLeafSection(e)){this.abortFetch(),this.loading=!0;try{await this.#t.fetchNextState(e,t),this.#r()}finally{this.loading=!1}}}abortFetch(){return this.#e?.abort(`New search launched`),this.#e=new AbortController,this.#e.signal}#i(t){return new URLSearchParams({...e.queryParams,src:t.urn,type:`srgssr/urn`}).toString()}#a(e){let t=new Intl.DateTimeFormat(`fr-CH`).format(new Date(e.date)),n=l.formatTime(e.duration/1e3);return u`
      <content-link title="${e.title}"
                    href="lists?${this.#i(e)}">
        <div slot="description">
          <i
            class="material-symbols-outlined">${e.mediaType===`VIDEO`?`movie`:`audiotrack`}</i>
          <span>&nbsp;| ${t} | ${n}</span>
        </div>
      </content-link>
    `}#o(e,t){let n=this.#t.paramsAt(e,t);return new URLSearchParams(n).toString()}#s(e,t,n){return u`
      <content-link title="${typeof e==`string`?e:e.title}"
                    href="lists?${this.#o(t,n)}"
                    data-section-idx="${t}" data-node-idx="${n}">
      </content-link>
    `}async#c(e){let t=this.abortFetch();await e.fetchNext(t),this.#r()}#l(e,t){let n=this.level[0],r=this.level.length===1&&n.next;return u`
      ${z(e,(e,n)=>u`
        ${B(e.mediaType,()=>this.#a(e,n),()=>this.#s(e,t,n))}
      `)}
      ${B(r,()=>u`
        <intersection-observer
          @intersecting="${()=>this.#c(n)}">
        </intersection-observer>
      `)}
    `}async#u(e){let t=e.target.closest(`content-link`);if(this.loading||!(`nodeIdx`in t.dataset))return;let n=t.dataset.sectionIdx,r=t.dataset.nodeIdx;await this.navigateTo(n,r)}#d(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove(`fade-in`)}"
           @click="${this.#u.bind(this)}">
        ${z(this.level,(e,t)=>u`
          <section>
            <h2 class="sticky">${e.title}</h2>
            ${this.#l(e.nodes,t)}
          </section>
        `)}
      </div>
    `}#f(){return u`
      <loading-spinner loading class="slide-up-fade-in"
                       @animationend="${e=>e.target.classList.remove(`slide-up-fade-in`)}">
      </loading-spinner>
    `}#p(){return u`
      <scroll-to-top-button>
        <i class="material-symbols-outlined" slot="icon">arrow_circle_up</i>
      </scroll-to-top-button>`}#m(t){t.target.tagName.toLowerCase()===`button`&&(this.abortFetch(),this.#t.fetchPreviousState(t.target.dataset.navigationIdx),this.#r(),e.updateState(this.#t.params,[`section`,`bu`,`nodes`]))}#h(){return u`
      <div class="tree-navigation-container"
           @click="${this.#m.bind(this)}">
        ${B(this.stack.length>0,()=>u`
          <button data-navigation-idx="0">Home</button>
        `)}
        ${z(this.stack.slice(1),(e,t)=>u`
          <i class="material-symbols-outlined">chevron_right</i>
          <button data-navigation-idx="${t+1}">
            ${e.level[e.sectionIndex].title}
          </button>
        `)}
      </div>
    `}render(){let e=this.level.length===1&&this.level[0].next;return u`
      ${this.#h()}
      ${B(this.loading,this.#f.bind(this),this.#d.bind(this))}
      ${B(e,this.#p.bind(this))}
    `}};customElements.define(`lists-page`,G),e.addRoute(`lists`,`lists-page`);var le=`[part=search-bar-container]{margin:0 0 var(--size-1) 0;padding:0 var(--size-2);background-color:var(--color-8);border-radius:var(--radius-2);align-items:center;display:flex}[part=search-bar-container] input{width:90%}[part=search-bar-container] button{background-color:var(--color-8);border:0;align-items:center;display:flex}`,K=`rsi`,q=class extends t{static properties={bu:{type:String},query:{type:String}};static styles=[p,s(le)];constructor(){super(),this.bu=K,this.query=``}#e(){this.query=this.renderRoot.querySelector(`input`).value}#t(e){this.bu=e.target.value}updated(e){if(super.updated(e),[`bu`,`query`].some(t=>e.has(t))){let e=this.query??``,t=this.bu??K;this.dispatchEvent(new CustomEvent(`change`,{detail:{query:e,bu:t}}))}}#n(){this.query=``,this.renderRoot.querySelector(`input`).value=``}render(){return u`
      <div part="search-bar-container">
        <select aria-label="Select a business unit"
                .value="${this.bu??K}"
                @change="${this.#t}">
          <option value="rsi" selected>RSI</option>
          <option value="rtr">RTR</option>
          <option value="rts">RTS</option>
          <option value="srf">SRF</option>
          <option value="swi">SWI</option>
        </select>
        <input type="text"
               placeholder="Search for content..."
               @keyup="${l.fn.debounce(this.#e,500)}"
               .value="${this.query??``}">
        <button title="Clear search"
                @click="${this.#n}">
          <slot name="clear-icon"></slot>
        </button>
      </div>
    `}};customElements.define(`search-bar`,q);var ue=class extends t{static properties={loading:{state:!0,type:Boolean},results:{state:!0,type:Array},nextPage:{state:!0,type:Function}};createRenderRoot(){return this}#e=new AbortController;#t;constructor(){super(),this.loading=!1,this.results=null,this.nextPage=null}connectedCallback(){super.connectedCallback(),this.#t=()=>{let t=this.renderRoot.querySelector(`search-bar`);t.query=e.queryParams.query??``,t.bu=e.queryParams.bu??`rsi`},e.addEventListener(`queryparams`,this.#t)}disconnectedCallback(){super.disconnectedCallback(),this.abortSearch(),e.removeEventListener(`queryparams`,this.#t)}async firstUpdated(e){super.firstUpdated(e);let t=this.renderRoot.querySelector(`search-bar`);this.#t(),await this.#r(t.bu,t.query)}async#n(t,n){e.updateState({bu:t,...n?{query:n}:{}}),await this.#r(t,n)}async#r(e,t){let n=this.abortSearch();if(!t){[this.results,this.nextPage]=[null,null];return}this.loading=!0;try{let r=await S.search(e,t,n);[this.results,this.nextPage]=[r.results,r.next]}finally{this.loading=!1}}async#i(){let e=this.abortSearch(),t=await this.nextPage(e);this.nextPage=t.next,this.results=[...this.results,...t.results]}abortSearch(){return this.#e?.abort(`New search launched`),this.#e=new AbortController,this.#e.signal}#a(t){return new URLSearchParams({...e.queryParams,src:t.urn,type:`srgssr/urn`}).toString()}#o(e){let t=new Intl.DateTimeFormat(`fr-CH`).format(new Date(e.date)),n=l.formatTime(e.duration/1e3);return u`
      <content-link title="${e.title}"
                    href="search?${this.#a(e)}">
        <div slot="description">
          <i class="material-symbols-outlined">${e.mediaType===`VIDEO`?`movie`:`audiotrack`}</i>
          <span>&nbsp;| ${t} | ${n}</span>
        </div>
      </content-link>
    `}#s(){return u`
      <section class="results-container fade-in ${P({empty:this.results==null,"no-results":this.results&&this.results.length===0,"material-icons":!this.results||this.results.length===0})}"
               @animationend="${e=>e.target.classList.remove(`fade-in`)}">
        ${z(this.results??[],this.#o.bind(this))}
        ${B(this.nextPage,()=>u`
          <intersection-observer
            @intersecting="${this.#i.bind(this)}">
          </intersection-observer>
        `)}
      </section>
    `}#c(){return u`
      <loading-spinner
        loading
        class="slide-up-fade-in"
        @animationend="${e=>e.target.classList.remove(`slide-up-fade-in`)}">
      </loading-spinner>
    `}#l(){return u`
      <scroll-to-top-button>
        <i class="material-symbols-outlined" slot="icon">arrow_circle_up</i>
      </scroll-to-top-button>`}render(){return u`
      <search-bar
        class="fade-in"
        @animationend="${e=>e.target.classList.remove(`fade-in`)}"
        @change="${e=>this.#n(e.detail.bu,e.detail.query)}">
        <i class="material-symbols-outlined" slot="clear-icon">close</i>
      </search-bar>

      <!-- Search results -->
      ${B(this.loading,this.#c.bind(this),this.#s.bind(this))}
      ${B(this.results?.length>0,this.#l.bind(this))}
    `}};customElements.define(`search-page`,ue),e.addRoute(`search`,`search-page`);var de=`:host{cursor:pointer;display:inline-block}[part=switch]{width:var(--size-9);height:var(--size-7);background-color:var(--gray-6);border-radius:var(--radius-4);align-items:center;transition:all .4s;display:flex}[part=slider]{width:var(--size-5);height:var(--size-5);margin-left:var(--size-2);background-color:var(--gray-1);border-radius:var(--radius-round);content:"";transition:all .4s;display:block}:host([checked]) [part=switch]{background-color:var(--green-8)}:host([checked]) [part=slider]{transform:translateX(var(--size-5))}:host([disabled]) [part=switch]{cursor:not-allowed;opacity:.5}`,fe=class extends t{static formAssociated=!0;static properties={checked:{type:Boolean,reflect:!0},disabled:{type:Boolean}};constructor(){super(),this.checked=!1,this.disabled=!1}static styles=s(de);#e=e=>{e.key===` `&&(e.preventDefault(),this.toggle())};#t=()=>{this.toggle()};connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`switch`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`0`),this.addEventListener(`click`,this.#t),this.addEventListener(`keydown`,this.#e)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.#t),this.removeEventListener(`keydown`,this.#e)}toggle(e){this.disabled||(this.checked=e??!this.checked)}updated(e){super.updated(e),e.has(`checked`)&&(this.setAttribute(`aria-checked`,this.checked.toString()),this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:this.checked}})))}render(){return u`
      <div part="switch">
        <div part="slider"></div>
      </div>
    `}};customElements.define(`toggle-switch`,fe);var pe=class extends t{static properties={autoplay:{type:Boolean,state:!0},muted:{type:Boolean,state:!0},debug:{type:Boolean,state:!0},dataProviderHost:{type:String,state:!0}};constructor(){super();let e=g.loadPreferences();this.autoplay=e.autoplay??!1,this.muted=e.muted??!0,this.debug=e.debug??!1,this.dataProviderHost=e.dataProviderHost}createRenderRoot(){return this}updated(t){super.updated(t);let n=g.loadPreferences();[...t.keys()].filter(e=>[`autoplay`,`muted`,`debug`,`dataProviderHost`].includes(e)).forEach(e=>{n[e]=this[e]}),g.savePreferences(n),t.has(`debug`)&&e.replaceState(this.debug?{debug:`true`}:{}),t.has(`dataProviderHost`)&&(S.host=this.dataProviderHost)}#e(e,t){return u`
      <div part="toggle-container">
        <label for="${e}-switch" part="label">${t}</label>
        <toggle-switch id="${e}-switch"
                       part="toggle-switch"
                       exportparts="slider, switch"
                       ?checked="${this[e]}"
                       @change="${t=>{this[e]=t.detail.checked}}">
        </toggle-switch>
      </div>
    `}#t(e,t){return u`
      <div part="input-container">
        <label for="${e}-input" part="label">${t}</label>
        <input type="text"
               part="input"
               placeholder="il.srgssr.ch"
               id="${e}-input"
               .value="${this[e]??``}"
               @keyup="${t=>{this[e]=t.target.value===``?void 0:t.target.value}}">
      </div>
    `}render(){return u`
      <section class="fade-in" @animationend="${e=>e.target.classList.remove(`fade-in`)}">
        <h2 part="title">Player Settings</h2>
        ${this.#e(`autoplay`,`Autoplay`)}
        ${this.#e(`muted`,`Player starts muted`)}
        ${this.#e(`debug`,`Enable debug mode`)}
        ${this.#t(`dataProviderHost`,`Data provider host`)}
      </section>
    `}};customElements.define(`settings-page`,pe),e.addRoute(`settings`,`settings-page`);var me=`@media screen and (prefers-color-scheme:dark){pre code.hljs{padding:1em;display:block;overflow-x:auto}code.hljs{padding:3px 5px}.hljs{color:#adbac7;background:#22272e}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#f47067}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#dcbdfb}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#6cb6ff}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#96d0ff}.hljs-built_in,.hljs-symbol{color:#f69d50}.hljs-comment,.hljs-code,.hljs-formula{color:#768390}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#8ddb8c}.hljs-subst{color:#adbac7}.hljs-section{color:#316dca;font-weight:700}.hljs-bullet{color:#eac55f}.hljs-emphasis{color:#adbac7;font-style:italic}.hljs-strong{color:#adbac7;font-weight:700}.hljs-addition{color:#b4f1b4;background-color:#1b4721}.hljs-deletion{color:#ffd8d3;background-color:#78191b}}@media screen and (prefers-color-scheme:light){pre code.hljs{padding:1em;display:block;overflow-x:auto}code.hljs{padding:3px 5px}.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#005cc5}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-comment,.hljs-code,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}}[part=container]{font-size:var(--font-size-0);overflow-x:auto}slot{display:none}`,he=r(i(((e,t)=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw Error(`map is read-only`)}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw Error(`set is read-only`)}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{let r=e[t],i=typeof r;(i===`object`||i===`function`)&&!Object.isFrozen(r)&&n(r)}),e}var r=class{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function i(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`)}function a(e,...t){let n=Object.create(null);for(let t in e)n[t]=e[t];return t.forEach(function(e){for(let t in e)n[t]=e[t]}),n}var o=`</span>`,s=e=>!!e.scope,c=(e,{prefix:t})=>{if(e.startsWith(`language:`))return e.replace(`language:`,`language-`);if(e.includes(`.`)){let n=e.split(`.`);return[`${t}${n.shift()}`,...n.map((e,t)=>`${e}${`_`.repeat(t+1)}`)].join(` `)}return`${t}${e}`},l=class{constructor(e,t){this.buffer=``,this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!s(e))return;let t=c(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){s(e)&&(this.buffer+=o)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}},u=(e={})=>{let t={children:[]};return Object.assign(t,e),t},d=class e{constructor(){this.rootNode=u(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){let t=u({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t==`string`?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(t){typeof t!=`string`&&t.children&&(t.children.every(e=>typeof e==`string`)?t.children=[t.children.join(``)]:t.children.forEach(t=>{e._collapse(t)}))}},f=class extends d{constructor(e){super(),this.options=e}addText(e){e!==``&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){let n=e.root;t&&(n.scope=`language:${t}`),this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}};function p(e){return e?typeof e==`string`?e:e.source:null}function m(e){return _(`(?=`,e,`)`)}function h(e){return _(`(?:`,e,`)*`)}function g(e){return _(`(?:`,e,`)?`)}function _(...e){return e.map(e=>p(e)).join(``)}function v(e){let t=e[e.length-1];return typeof t==`object`&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function y(...e){return`(`+(v(e).capture?``:`?:`)+e.map(e=>p(e)).join(`|`)+`)`}function b(e){return RegExp(e.toString()+`|`).exec(``).length-1}function x(e,t){let n=e&&e.exec(t);return n&&n.index===0}var S=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function C(e,{joinWith:t}){let n=0;return e.map(e=>{n+=1;let t=n,r=p(e),i=``;for(;r.length>0;){let e=S.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),e[0][0]===`\\`&&e[1]?i+=`\\`+String(Number(e[1])+t):(i+=e[0],e[0]===`(`&&n++)}return i}).map(e=>`(${e})`).join(t)}var w=/\b\B/,T=`[a-zA-Z]\\w*`,E=`[a-zA-Z_]\\w*`,D=`\\b\\d+(\\.\\d+)?`,O=`(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)`,k=`\\b(0b[01]+)`,A=`!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~`,j=(e={})=>{let t=/^#![ ]*\//;return e.binary&&(e.begin=_(t,/.*\b/,e.binary,/\b.*/)),a({scope:`meta`,begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{e.index!==0&&t.ignoreMatch()}},e)},M={begin:`\\\\[\\s\\S]`,relevance:0},N={scope:`string`,begin:`'`,end:`'`,illegal:`\\n`,contains:[M]},P={scope:`string`,begin:`"`,end:`"`,illegal:`\\n`,contains:[M]},F={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},I=function(e,t,n={}){let r=a({scope:`comment`,begin:e,end:t,contains:[]},n);r.contains.push({scope:`doctag`,begin:`[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`,end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});let i=y(`I`,`a`,`is`,`so`,`us`,`to`,`at`,`if`,`in`,`it`,`on`,/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:_(/[ ]+/,`(`,i,/[.]?[:]?([.][ ]|[ ])/,`){3}`)}),r},L=I(`//`,`$`),R=I(`/\\*`,`\\*/`),z=I(`#`,`$`),B=Object.freeze({__proto__:null,APOS_STRING_MODE:N,BACKSLASH_ESCAPE:M,BINARY_NUMBER_MODE:{scope:`number`,begin:k,relevance:0},BINARY_NUMBER_RE:k,COMMENT:I,C_BLOCK_COMMENT_MODE:R,C_LINE_COMMENT_MODE:L,C_NUMBER_MODE:{scope:`number`,begin:O,relevance:0},C_NUMBER_RE:O,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})},HASH_COMMENT_MODE:z,IDENT_RE:T,MATCH_NOTHING_RE:w,METHOD_GUARD:{begin:`\\.\\s*[a-zA-Z_]\\w*`,relevance:0},NUMBER_MODE:{scope:`number`,begin:D,relevance:0},NUMBER_RE:D,PHRASAL_WORDS_MODE:F,QUOTE_STRING_MODE:P,REGEXP_MODE:{scope:`regexp`,begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[M,{begin:/\[/,end:/\]/,relevance:0,contains:[M]}]},RE_STARTERS_RE:A,SHEBANG:j,TITLE_MODE:{scope:`title`,begin:T,relevance:0},UNDERSCORE_IDENT_RE:E,UNDERSCORE_TITLE_MODE:{scope:`title`,begin:E,relevance:0}});function ee(e,t){e.input[e.index-1]===`.`&&t.ignoreMatch()}function te(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function ne(e,t){t&&e.beginKeywords&&(e.begin=`\\b(`+e.beginKeywords.split(` `).join(`|`)+`)(?!\\.)(?=\\b|\\s)`,e.__beforeBegin=ee,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function re(e,t){Array.isArray(e.illegal)&&(e.illegal=y(...e.illegal))}function ie(e,t){if(e.match){if(e.begin||e.end)throw Error(`begin & end are not supported with match`);e.begin=e.match,delete e.match}}function ae(e,t){e.relevance===void 0&&(e.relevance=1)}var oe=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw Error(`beforeMatch cannot be used with starts`);let n=Object.assign({},e);Object.keys(e).forEach(t=>{delete e[t]}),e.keywords=n.keywords,e.begin=_(n.beforeMatch,m(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},se=[`of`,`and`,`for`,`in`,`not`,`or`,`if`,`then`,`parent`,`list`,`value`],V=`keyword`;function H(e,t,n=V){let r=Object.create(null);return typeof e==`string`?i(n,e.split(` `)):Array.isArray(e)?i(n,e):Object.keys(e).forEach(function(n){Object.assign(r,H(e[n],t,n))}),r;function i(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach(function(t){let n=t.split(`|`);r[n[0]]=[e,U(n[0],n[1])]})}}function U(e,t){return t?Number(t):+!W(e)}function W(e){return se.includes(e.toLowerCase())}var ce={},G=e=>{console.error(e)},le=(e,...t)=>{console.log(`WARN: ${e}`,...t)},K=(e,t)=>{ce[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),ce[`${e}/${t}`]=!0)},q=Error();function ue(e,t,{key:n}){let r=0,i=e[n],a={},o={};for(let e=1;e<=t.length;e++)o[e+r]=i[e],a[e+r]=!0,r+=b(t[e-1]);e[n]=o,e[n]._emit=a,e[n]._multi=!0}function de(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw G(`skip, excludeBegin, returnBegin not compatible with beginScope: {}`),q;if(typeof e.beginScope!=`object`||e.beginScope===null)throw G(`beginScope must be object`),q;ue(e,e.begin,{key:`beginScope`}),e.begin=C(e.begin,{joinWith:``})}}function fe(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw G(`skip, excludeEnd, returnEnd not compatible with endScope: {}`),q;if(typeof e.endScope!=`object`||e.endScope===null)throw G(`endScope must be object`),q;ue(e,e.end,{key:`endScope`}),e.end=C(e.end,{joinWith:``})}}function pe(e){e.scope&&typeof e.scope==`object`&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function me(e){pe(e),typeof e.beginScope==`string`&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope==`string`&&(e.endScope={_wrap:e.endScope}),de(e),fe(e)}function he(e){function t(t,n){return new RegExp(p(t),`m`+(e.case_insensitive?`i`:``)+(e.unicodeRegex?`u`:``)+(n?`g`:``))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=b(e)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);let e=this.regexes.map(e=>e[1]);this.matcherRe=t(C(e,{joinWith:`|`}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;let t=this.matcherRe.exec(e);if(!t)return null;let n=t.findIndex((e,t)=>t>0&&e!==void 0),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];let t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),t.type===`begin`&&this.count++}exec(e){let t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition()&&!(n&&n.index===this.lastIndex)){let t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}function i(e){let t=new r;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:`begin`})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:`end`}),e.illegal&&t.addRule(e.illegal,{type:`illegal`}),t}function o(n,r){let a=n;if(n.isCompiled)return a;[te,ie,me,oe].forEach(e=>e(n,r)),e.compilerExtensions.forEach(e=>e(n,r)),n.__beforeBegin=null,[ne,re,ae].forEach(e=>e(n,r)),n.isCompiled=!0;let s=null;return typeof n.keywords==`object`&&n.keywords.$pattern&&(n.keywords=Object.assign({},n.keywords),s=n.keywords.$pattern,delete n.keywords.$pattern),s||=/\w+/,n.keywords&&=H(n.keywords,e.case_insensitive),a.keywordPatternRe=t(s,!0),r&&(n.begin||=/\B|\b/,a.beginRe=t(a.begin),!n.end&&!n.endsWithParent&&(n.end=/\B|\b/),n.end&&(a.endRe=t(a.end)),a.terminatorEnd=p(a.end)||``,n.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(n.end?`|`:``)+r.terminatorEnd)),n.illegal&&(a.illegalRe=t(n.illegal)),n.contains||=[],n.contains=[].concat(...n.contains.map(function(e){return ge(e===`self`?n:e)})),n.contains.forEach(function(e){o(e,a)}),n.starts&&o(n.starts,r),a.matcher=i(a),a}if(e.compilerExtensions||=[],e.contains&&e.contains.includes(`self`))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),o(e)}function J(e){return e?e.endsWithParent||J(e.starts):!1}function ge(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return a(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:J(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}var _e=`11.11.1`,ve=class extends Error{constructor(e,t){super(e),this.name=`HTMLInjectionError`,this.html=t}},Y=i,X=a,ye=Symbol(`nomatch`),be=7,xe=function(e){let t=Object.create(null),i=Object.create(null),a=[],o=!0,s=`Could not find the language '{}', did you forget to load/include a language module?`,c={disableAutodetect:!0,name:`Plain text`,contains:[]},l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:`hljs-`,cssSelector:`pre code`,languages:null,__emitter:f};function u(e){return l.noHighlightRe.test(e)}function d(e){let t=e.className+` `;t+=e.parentNode?e.parentNode.className:``;let n=l.languageDetectRe.exec(t);if(n){let t=N(n[1]);return t||(le(s.replace(`{}`,n[1])),le(`Falling back to no-highlight mode for this block.`,e)),t?n[1]:`no-highlight`}return t.split(/\s+/).find(e=>u(e)||N(e))}function p(e,t,n){let r=``,i=``;typeof t==`object`?(r=e,n=t.ignoreIllegals,i=t.language):(K(`10.7.0`,`highlight(lang, code, ...args) has been deprecated.`),K(`10.7.0`,`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),i=e,r=t),n===void 0&&(n=!0);let a={code:r,language:i};z(`before:highlight`,a);let o=a.result?a.result:v(a.language,a.code,n);return o.code=a.code,z(`after:highlight`,o),o}function v(e,n,i,a){let c=Object.create(null);function u(e,t){return e.keywords[t]}function d(){if(!A.keywords){M.addText(P);return}let e=0;A.keywordPatternRe.lastIndex=0;let t=A.keywordPatternRe.exec(P),n=``;for(;t;){n+=P.substring(e,t.index);let r=D.case_insensitive?t[0].toLowerCase():t[0],i=u(A,r);if(i){let[e,a]=i;if(M.addText(n),n=``,c[r]=(c[r]||0)+1,c[r]<=be&&(F+=a),e.startsWith(`_`))n+=t[0];else{let n=D.classNameAliases[e]||e;m(t[0],n)}}else n+=t[0];e=A.keywordPatternRe.lastIndex,t=A.keywordPatternRe.exec(P)}n+=P.substring(e),M.addText(n)}function f(){if(P===``)return;let e=null;if(typeof A.subLanguage==`string`){if(!t[A.subLanguage]){M.addText(P);return}e=v(A.subLanguage,P,!0,j[A.subLanguage]),j[A.subLanguage]=e._top}else e=S(P,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(F+=e.relevance),M.__addSublanguage(e._emitter,e.language)}function p(){A.subLanguage==null?d():f(),P=``}function m(e,t){e!==``&&(M.startScope(t),M.addText(e),M.endScope())}function h(e,t){let n=1,r=t.length-1;for(;n<=r;){if(!e._emit[n]){n++;continue}let r=D.classNameAliases[e[n]]||e[n],i=t[n];r?m(i,r):(P=i,d(),P=``),n++}}function g(e,t){return e.scope&&typeof e.scope==`string`&&M.openNode(D.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(m(P,D.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),P=``):e.beginScope._multi&&(h(e.beginScope,t),P=``)),A=Object.create(e,{parent:{value:A}}),A}function _(e,t,n){let i=x(e.endRe,n);if(i){if(e[`on:end`]){let n=new r(e);e[`on:end`](t,n),n.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return _(e.parent,t,n)}function y(e){return A.matcher.regexIndex===0?(P+=e[0],1):(R=!0,0)}function b(e){let t=e[0],n=e.rule,i=new r(n),a=[n.__beforeBegin,n[`on:begin`]];for(let n of a)if(n&&(n(e,i),i.isMatchIgnored))return y(t);return n.skip?P+=t:(n.excludeBegin&&(P+=t),p(),!n.returnBegin&&!n.excludeBegin&&(P=t)),g(n,e),n.returnBegin?0:t.length}function C(e){let t=e[0],r=n.substring(e.index),i=_(A,e,r);if(!i)return ye;let a=A;A.endScope&&A.endScope._wrap?(p(),m(t,A.endScope._wrap)):A.endScope&&A.endScope._multi?(p(),h(A.endScope,e)):a.skip?P+=t:(a.returnEnd||a.excludeEnd||(P+=t),p(),a.excludeEnd&&(P=t));do A.scope&&M.closeNode(),!A.skip&&!A.subLanguage&&(F+=A.relevance),A=A.parent;while(A!==i.parent);return i.starts&&g(i.starts,e),a.returnEnd?0:t.length}function w(){let e=[];for(let t=A;t!==D;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach(e=>M.openNode(e))}let T={};function E(t,r){let a=r&&r[0];if(P+=t,a==null)return p(),0;if(T.type===`begin`&&r.type===`end`&&T.index===r.index&&a===``){if(P+=n.slice(r.index,r.index+1),!o){let t=Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=T.rule,t}return 1}if(T=r,r.type===`begin`)return b(r);if(r.type===`illegal`&&!i){let e=Error(`Illegal lexeme "`+a+`" for mode "`+(A.scope||`<unnamed>`)+`"`);throw e.mode=A,e}else if(r.type===`end`){let e=C(r);if(e!==ye)return e}if(r.type===`illegal`&&a===``)return P+=`
`,1;if(L>1e5&&L>r.index*3)throw Error(`potential infinite loop, way more iterations than matches`);return P+=a,a.length}let D=N(e);if(!D)throw G(s.replace(`{}`,e)),Error(`Unknown language: "`+e+`"`);let O=he(D),k=``,A=a||O,j={},M=new l.__emitter(l);w();let P=``,F=0,I=0,L=0,R=!1;try{if(D.__emitTokens)D.__emitTokens(n,M);else{for(A.matcher.considerAll();;){L++,R?R=!1:A.matcher.considerAll(),A.matcher.lastIndex=I;let e=A.matcher.exec(n);if(!e)break;let t=E(n.substring(I,e.index),e);I=e.index+t}E(n.substring(I))}return M.finalize(),k=M.toHTML(),{language:e,value:k,relevance:F,illegal:!1,_emitter:M,_top:A}}catch(t){if(t.message&&t.message.includes(`Illegal`))return{language:e,value:Y(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:I,context:n.slice(I-100,I+100),mode:t.mode,resultSoFar:k},_emitter:M};if(o)return{language:e,value:Y(n),illegal:!1,relevance:0,errorRaised:t,_emitter:M,_top:A};throw t}}function b(e){let t={value:Y(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return t._emitter.addText(e),t}function S(e,n){n=n||l.languages||Object.keys(t);let r=b(e),i=n.filter(N).filter(F).map(t=>v(t,e,!1));i.unshift(r);let[a,o]=i.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(N(e.language).supersetOf===t.language)return 1;if(N(t.language).supersetOf===e.language)return-1}return 0}),s=a;return s.secondBest=o,s}function C(e,t,n){let r=t&&i[t]||n;e.classList.add(`hljs`),e.classList.add(`language-${r}`)}function w(e){let t=null,n=d(e);if(u(n))return;if(z(`before:highlightElement`,{el:e,language:n}),e.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e);return}if(e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn(`One of your code blocks includes unescaped HTML. This is a potentially serious security risk.`),console.warn(`https://github.com/highlightjs/highlight.js/wiki/security`),console.warn(`The element with unescaped HTML:`),console.warn(e)),l.throwUnescapedHTML))throw new ve(`One of your code blocks includes unescaped HTML.`,e.innerHTML);t=e;let r=t.textContent,i=n?p(r,{language:n,ignoreIllegals:!0}):S(r);e.innerHTML=i.value,e.dataset.highlighted=`yes`,C(e,n,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),z(`after:highlightElement`,{el:e,result:i,text:r})}function T(e){l=X(l,e)}let E=()=>{k(),K(`10.6.0`,`initHighlighting() deprecated.  Use highlightAll() now.`)};function D(){k(),K(`10.6.0`,`initHighlightingOnLoad() deprecated.  Use highlightAll() now.`)}let O=!1;function k(){function e(){k()}if(document.readyState===`loading`){O||window.addEventListener(`DOMContentLoaded`,e,!1),O=!0;return}document.querySelectorAll(l.cssSelector).forEach(w)}function A(n,r){let i=null;try{i=r(e)}catch(e){if(G(`Language definition for '{}' could not be registered.`.replace(`{}`,n)),o)G(e);else throw e;i=c}i.name||=n,t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&P(i.aliases,{languageName:n})}function j(e){delete t[e];for(let t of Object.keys(i))i[t]===e&&delete i[t]}function M(){return Object.keys(t)}function N(e){return e=(e||``).toLowerCase(),t[e]||t[i[e]]}function P(e,{languageName:t}){typeof e==`string`&&(e=[e]),e.forEach(e=>{i[e.toLowerCase()]=t})}function F(e){let t=N(e);return t&&!t.disableAutodetect}function I(e){e[`before:highlightBlock`]&&!e[`before:highlightElement`]&&(e[`before:highlightElement`]=t=>{e[`before:highlightBlock`](Object.assign({block:t.el},t))}),e[`after:highlightBlock`]&&!e[`after:highlightElement`]&&(e[`after:highlightElement`]=t=>{e[`after:highlightBlock`](Object.assign({block:t.el},t))})}function L(e){I(e),a.push(e)}function R(e){let t=a.indexOf(e);t!==-1&&a.splice(t,1)}function z(e,t){let n=e;a.forEach(function(e){e[n]&&e[n](t)})}function ee(e){return K(`10.7.0`,`highlightBlock will be removed entirely in v12.0`),K(`10.7.0`,`Please use highlightElement now.`),w(e)}Object.assign(e,{highlight:p,highlightAuto:S,highlightAll:k,highlightElement:w,highlightBlock:ee,configure:T,initHighlighting:E,initHighlightingOnLoad:D,registerLanguage:A,unregisterLanguage:j,listLanguages:M,getLanguage:N,registerAliases:P,autoDetection:F,inherit:X,addPlugin:L,removePlugin:R}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=_e,e.regex={concat:_,lookahead:m,either:y,optional:g,anyNumberOfTimes:h};for(let e in B)typeof B[e]==`object`&&n(B[e]);return Object.assign(e,B),e},Z=xe({});Z.newInstance=()=>xe({}),t.exports=Z,Z.HighlightJS=Z,Z.default=Z}))()).default,J=`[A-Za-z$_][0-9A-Za-z$_]*`,ge=`as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(`.`),_e=[`true`,`false`,`null`,`undefined`,`NaN`,`Infinity`],ve=`Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(`.`),Y=[`Error`,`EvalError`,`InternalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`,`URIError`],X=[`setInterval`,`setTimeout`,`clearInterval`,`clearTimeout`,`require`,`exports`,`eval`,`isFinite`,`isNaN`,`parseFloat`,`parseInt`,`decodeURI`,`decodeURIComponent`,`encodeURI`,`encodeURIComponent`,`escape`,`unescape`],ye=[`arguments`,`this`,`super`,`console`,`window`,`document`,`localStorage`,`sessionStorage`,`module`,`global`],be=[].concat(X,ve,Y);function xe(e){let t=e.regex,n=(e,{after:t})=>{let n=`</`+e[0].slice(1);return e.input.indexOf(n,t)!==-1},r=J,i={begin:`<>`,end:`</>`},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{let r=e[0].length+e.index,i=e.input[r];if(i===`<`||i===`,`){t.ignoreMatch();return}i===`>`&&(n(e,{after:r})||t.ignoreMatch());let a,o=e.input.substring(r);if(a=o.match(/^\s*=/)){t.ignoreMatch();return}if((a=o.match(/^\s+extends\s+/))&&a.index===0){t.ignoreMatch();return}}},s={$pattern:J,keyword:ge,literal:_e,built_in:be,"variable.language":ye},c=`[0-9](_?[0-9])*`,l=`\\.(${c})`,u=`0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`,d={className:`number`,variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:`\\b(0|[1-9](_?[0-9])*)n\\b`},{begin:`\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b`},{begin:`\\b0[bB][0-1](_?[0-1])*n?\\b`},{begin:`\\b0[oO][0-7](_?[0-7])*n?\\b`},{begin:`\\b0[0-7]+n?\\b`}],relevance:0},f={className:`subst`,begin:`\\$\\{`,end:`\\}`,keywords:s,contains:[]},p={begin:".?html`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`xml`}},m={begin:".?css`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`css`}},h={begin:".?gql`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`graphql`}},g={className:`string`,begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},_={className:`comment`,variants:[e.COMMENT(/\/\*\*(?!\/)/,`\\*/`,{relevance:0,contains:[{begin:`(?=@[A-Za-z]+)`,relevance:0,contains:[{className:`doctag`,begin:`@[A-Za-z]+`},{className:`type`,begin:`\\{`,end:`\\}`,excludeEnd:!0,excludeBegin:!0,relevance:0},{className:`variable`,begin:`[A-Za-z$_][0-9A-Za-z$_]*(?=\\s*(-)|$)`,endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,{match:/\$\d+/},d];f.contains=v.concat({begin:/\{/,end:/\}/,keywords:s,contains:[`self`].concat(v)});let y=[].concat(_,f.contains),b=y.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:[`self`].concat(y)}]),x={className:`params`,begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b},S={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,`(`,t.concat(/\./,r),`)*`)],scope:{1:`keyword`,3:`title.class`,5:`keyword`,7:`title.class.inherited`}},{match:[/class/,/\s+/,r],scope:{1:`keyword`,3:`title.class`}}]},C={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:`title.class`,keywords:{_:[...ve,...Y]}},w={label:`use_strict`,className:`meta`,relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},T={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:`keyword`,3:`title.function`},label:`func.def`,contains:[x],illegal:/%/},E={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:`variable.constant`};function D(e){return t.concat(`(?!`,e.join(`|`),`)`)}let O={match:t.concat(/\b/,D([...X,`super`,`import`].map(e=>`${e}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:`title.function`,relevance:0},k={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:`prototype`,className:`property`,relevance:0},A={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:`keyword`,3:`title.function`},contains:[{begin:/\(\)/},x]},j=`(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|`+e.UNDERSCORE_IDENT_RE+`)\\s*=>`,M={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(j)],keywords:`async`,className:{1:`keyword`,3:`title.function`},contains:[x]};return{name:`JavaScript`,aliases:[`js`,`jsx`,`mjs`,`cjs`],keywords:s,exports:{PARAMS_CONTAINS:b,CLASS_REFERENCE:C},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:`shebang`,binary:`node`,relevance:5}),w,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,_,{match:/\$\d+/},d,C,{scope:`attr`,match:r+t.lookahead(`:`),relevance:0},M,{begin:`(`+e.RE_STARTERS_RE+`|\\b(case|return|throw)\\b)\\s*`,keywords:`return throw case`,relevance:0,contains:[_,e.REGEXP_MODE,{className:`function`,begin:j,returnBegin:!0,end:`\\s*=>`,contains:[{className:`params`,variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:a},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:`xml`,contains:[{begin:o.begin,end:o.end,skip:!0,contains:[`self`]}]}]},T,{beginKeywords:`while if switch catch for`},{begin:`\\b(?!function)`+e.UNDERSCORE_IDENT_RE+`\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,returnBegin:!0,label:`func.def`,contains:[x,e.inherit(e.TITLE_MODE,{begin:r,className:`title.function`})]},{match:/\.\.\./,relevance:0},k,{match:`\\$[A-Za-z$_][0-9A-Za-z$_]*`,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:`title.function`},contains:[x]},O,E,S,A,{match:/\$[(.]/}]}}he.registerLanguage(`javascript`,xe);var Z=class extends t{static styles=[s(me)];static properties={language:{type:String},code:{tyoe:String,state:!0}};constructor(){super(),this.language=`javascript`}#e(){let e=this.shadowRoot.querySelector(`slot`).assignedNodes()[0].textContent;this.code=he.highlight(e,{language:this.language}).value}render(){return u`
      <pre part="container"><code>${f(this.code)}</code></pre>
      <slot @slotchange="${()=>this.#e()}"></slot>
    `}};customElements.define(`code-block`,Z);var Se=`::slotted([slot=demo]){aspect-ratio:var(--ratio-widescreen)}::slotted([slot=description]){padding-left:var(--size-2);color:var(--color-4);font-weight:var(--font-weight-3);font-size:var(--font-size-1);text-align:justify;border-left:3px solid var(--color-5)}::slotted([slot=toggle-collapsed]),::slotted([slot=toggle-expanded]){gap:var(--size-1);cursor:pointer;align-items:center;display:flex}[part=implementation]{margin-bottom:var(--size-4);background-color:var(--color-10);border:2px solid var(--color-5);border-radius:var(--radius-1);box-shadow:var(--inner-shadow-4);display:none}[part=implementation].active{display:block}[part=implementation-code]{padding-inline:var(--size-3)}[part=implementation-footer]{border-top:1px solid var(--color-6);padding-inline:var(--size-2);justify-content:end;align-items:center;display:flex}[part=implementation-link]{padding:var(--size-2);font-size:var(--font-size-0)}[part=implementation-toggle]{background:0 0;border:none}[part=implementation-toggle]:hover{background:0 0}`,Ce=class extends t{static styles=[p,o,s(Se)];static properties={collapsed:{type:Boolean},hasCodeExample:{type:Boolean,state:!0},exampleLanguage:{type:String},href:{type:String}};connectedCallback(){super.connectedCallback(),this.collapsed=!0,this.shadowRoot.addEventListener(`slotchange`,()=>{this.hasCodeExample=this.#e(`code`)})}updated(e){super.updated(e),e.has(`collapsed`)&&!this.collapsed&&this.shadowRoot.querySelector(`[part="implementation"]`).classList.add(`active`)}#e(e){return this.shadowRoot.querySelector(`slot[name="${e}"]`).assignedNodes().length>0}#t(e){e.target.classList.toggle(`active`,!e.target.classList.contains(`fade-out-shrink`)),e.target.classList.remove(`fade-in-grow`,`fade-out-shrink`)}#n(){return{"fade-in-grow":this.collapsed===!1,"fade-out-shrink":this.collapsed===!0}}render(){return u`
      <slot name="title"></slot>
      <slot name="description"></slot>

      <div ?hidden="${!this.hasCodeExample}">
        <button part="implementation-toggle" @click="${()=>{this.collapsed=!this.collapsed}}">
          <slot name="toggle-collapsed" ?hidden="${!this.collapsed}"></slot>
          <slot name="toggle-expanded" ?hidden="${this.collapsed}"></slot>
        </button>
        <div part="implementation"
             class="${P(this.#n())}"
             @animationend="${e=>this.#t(e)}">
          <div part="implementation-code">
            <slot name="code"></slot>
          </div>
          ${B(this.href,()=>u`
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

        <slot name="action"></slot>
      </div>
    `}};customElements.define(`showcase-component`,Ce);var we=`<!DOCTYPE html>
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
`,Te=`<!DOCTYPE html>
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
`,Ee=`<!DOCTYPE html>
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
`,De=`<!DOCTYPE html>
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
`,Oe=`<!DOCTYPE html>
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
`,ke=`<!DOCTYPE html>
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
`,Ae=`<!DOCTYPE html>
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
`,je=`<!DOCTYPE html>
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
      import '@srgssr/countdown-display';

      // Create a pillarbox player instance with the countdown display component
      const player = pillarbox(
        'video-element-id',
        { muted: true, countdownDisplay: true, }
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
              validFrom
            } = {}
          } = {}
        } = metadata;
        const timestamp = new Date(validFrom).getTime();

        // Closes error display component to prevent overlapping
        if (player.errorDisplay && player.errorDisplay.opened()) {
          player.errorDisplay.close();
        }

        player.countdownDisplay.start(timestamp, player.currentSource())
      });

      // In the absence of media generating a STARTDATE error, this function
      // manually activates the countdown
      player.countdownDisplay.start(Date.now() + 5_977_235_000, { src: 'urn:rts:video:10894383', type: 'srgssr/urn' });

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
`,Me=`<!DOCTYPE html>
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
`,Ne=`<!DOCTYPE html>
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
`,Pe=`<!DOCTYPE html>
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
`,Fe=`<!DOCTYPE html>
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
`,Ie=`<!DOCTYPE html>
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
`,Le=`<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pillarbox Demo - Toggle between the audio and video streams of the same channel</title>
    <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
    <link rel="stylesheet" href="./toggle-live-audio-video.scss" />
  </head>

  <body>
    <core-demo-header></core-demo-header>
    <div class="showcase-content">
      <h2>Toggle between the audio and video streams of the same channel</h2>
      <div class="video-container">
        <video-js id="video-element-id" class="pillarbox-js" controls></video-js>
      </div>

      <button class="showcase-btn" id="close-btn">Close this window</button>
    </div>
    <div id="streams">
      <button id="srf1" class="channel-active">SRF1
        <span class="material-symbols-outlined">music_note</span>
      </button>
      <button id="srf3">SRF3
        <span class="material-symbols-outlined"></span>
      </button>
      <button id="srfMusikwelle">SRF Musikwelle
        <span class="material-symbols-outlined"></span>
      </button>
      <button id="srfVirus">SRF Virus
        <span class="material-symbols-outlined"></span>
      </button>
      <button id="couleur3">Couleur 3
        <span class="material-symbols-outlined"></span>
      </button>
    </div>
    <h2 id="streamtime"></h2>
    <script type="module" data-implementation>
      // Import the pillarbox library
      import pillarbox from '@srgssr/pillarbox-web';

      // List of channels with audio and video streams
      const urns = {
        'srf1': [
          'urn:srf:audio:69e8ac16-4327-4af4-b873-fd5cd6e895a7',
          'urn:srf:video:5b90d1fb-477b-4d98-86a6-82921a4bb0ea'
        ],
        'srf3': [
          'urn:srf:audio:dd0fa1ba-4ff6-4e1a-ab74-d7e49057d96f',
          'urn:srf:video:972b2dbd-3958-43b7-8c15-e92f56c8d734'
        ],
        'srfMusikwelle': [
          'urn:srf:audio:a9c5c070-8899-46c7-ac27-f04f1be902fd',
          'urn:srf:video:973440d3-60a5-4ddf-ae83-2c77815a32a1'
        ],
        'srfVirus': [
          'urn:srf:audio:66815fe2-9008-4853-80a5-f9caaffdf3a9',
          'urn:srf:video:2a60b590-8a28-4540-bce8-fc4e52b3b5d8'
        ],
        'couleur3': [
          'urn:rts:audio:3262363',
          'urn:rts:video:8841634'
        ]
      }

      // Create a pillarbox player instance with the thumbnail-preview component
      window.player = pillarbox('video-element-id');
      // Change default player volume
      player.volume(0.3);
      // Sets autoplay to true after the first user interaction
      player.one('play', () => { player.autoplay(true) });
      // Load the source for the player
      player.src({
        src: 'urn:srf:audio:69e8ac16-4327-4af4-b873-fd5cd6e895a7', type: 'srgssr/urn'
      });

      // Listen for click events
      streams.addEventListener('click', (e) => {
        e.preventDefault();
        const { id, nodeName } = e.target;

        if (nodeName !== 'BUTTON') return;

        pillarbox.dom.$$('#streams button').forEach(button => {
          button.classList.toggle('channel-active', button.id === id);
          button.querySelector('.material-symbols-outlined').innerText = '';
        });

        let activeChannelIconEl = pillarbox.dom.$('.channel-active .material-symbols-outlined');

        // When the URN is a different channel we simply load the first stream of the channel
        if (!urns[id].includes(player.currentSource().mediaData.urn)) {
          player.src({
            src: urns[id][0],
            type: 'srgssr/urn'
          });

          // Add audio icon since the first stream is a live audio
          activeChannelIconEl.innerText = 'music_note';

          return;
        }

        // ---------------------------------------------------------------------
        // The core logic to switch between the audio and video live stream ----
        // ---------------------------------------------------------------------

        // Switch between the audio or video stream of the same channel
        const urn = player.currentSource().mediaData.urn === urns[id][0] ? urns[id][1] : urns[id][0];
        // Store player's current position before switching URN
        const currentTime = player.currentTime();

        // Using loadeddata instead of loadedmetadata because of
        // https://bugs.webkit.org/show_bug.cgi?id=261512
        player.one('loadeddata', () => {
          // restore the position
          player.currentTime(currentTime);
        });

        // Toggle between the audio and video streams of the same channel
        player.src({
          src: urn,
          type: 'srgssr/urn'
        });

        // Toggle between the audio and video icon
        activeChannelIconEl.innerText = urn.includes('audio') ? 'music_note' : 'movie';
      });

      // Display stream's current time if the manifest contains
      // #EXT-X-PROGRAM-DATE-TIME
      function streamTimePosition(player) {
        const activeCueValue = Array.from(player.textTracks())?.find(t => t.kind === 'metadata')?.activeCues?.[0]?.value;

        if (!activeCueValue) return;

        const { start, programDateTime } = activeCueValue;

        if (!programDateTime) return;

        const offsetInChunk = player.currentTime() - start;
        const timePosition = new Date(programDateTime + Math.round(offsetInChunk * 1000));
        const timeToFormat = timePosition.getHours() * 3600 + timePosition.getMinutes() * 60 + timePosition.getSeconds()

        return pillarbox.time.formatTime(timeToFormat, 6000);
      }

      player.on('timeupdate', () => {
        const position = streamTimePosition(player);

        if (!position) return streamtime.textContent = "";

        streamtime.textContent = position;
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
`;function Re(e){let t=e.replace(/^[\r\n]+|[\r\n]+$/g,``),n=t.split(`
`)[0].match(/^ */)[0].length,r=RegExp(`^ {${n}}`,`gm`);return t.replace(r,``)}var ze=new DOMParser;function Q(e,t=`[data-implementation]`){return Re(ze.parseFromString(e,`text/html`).querySelector(t).textContent)}var Be=[{id:`start-time`,href:`start-time.html`,title:`Start the player at a given position`,description:u`In this showcase, we'll demonstrate how to load a video source and start playback at a specific position using Pillarbox. This can be useful when you want to provide users with the option to begin watching a video from a predefined timestamp. To achieve this functionality, follow the code snippet below:`,code:Q(we)},{id:`multi-player`,href:`multi-player.html`,title:`Multiple Players`,description:u`This example demonstrates how to incorporate multiple video players on a webpage.In this showcase, two players are initialized, each with its own configuration, a button allows to toggle the mute state for both players.`,code:Q(Te)},{id:`blocked-segments`,href:`blocked-segment.html`,title:`Detect Blocked Segments`,description:u`This tutorial covers how to use Pillarbox to create a plugin that detects and notifies when a blocked segment is skipped. <br><br><b>Note:</b> The blocked segment starts at 29:26 for this example.`,code:Q(Ee)},{id:`chapters`,href:`chapters.html`,title:`Display Current Chapter`,description:u`This showcase explains how to use Pillarbox to create a plugin that displays the currently playing chapter in a box above the progress bar.`,code:Q(De)},{id:`skip-credits`,href:`skip-credits.html`,title:`Skip Credits`,description:u`This example shows how to use the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/skip-button#readme" target="_blank">Pillarbox Skip Button component</a> to add a "Skip" button during detected credit intervals. <br><br><b>Note:</b> Seek to 26:40 to see the button.`,code:Q(Oe)},{id:`playlist`,href:`playlist.html`,title:`Playlist`,description:u`This example shows how to fetch media data for a set of video sources and load them into the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/pillarbox-playlist#readme" target="_blank">Pillarbox Playlist plugin</a> with metadata such as title and duration.`,code:Q(ke)},{id:`quality-menu`,href:`quality-menu.html`,title:`Quality Menu`,description:u`In this showcase, we'll demonstrate how to display a quality selector menu using the <a href="https://github.com/videojs/videojs-contrib-quality-menu" target="_blank">videojs-contrib-quality-menu</a> plugin.`,code:Q(Ae)},{id:`countdown`,href:`countdown.html`,title:`Countdown Timer`,description:u`In this showcase, we'll demonstrate how to display a countdown timer using the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/countdown-display#readme" target="_blank">@srgssr/countdown-display</a> component.`,code:Q(je)},{id:`playback-rate`,href:`playback-rate.html`,title:`Playback Rate`,description:u`In this showcase, we'll demonstrate how to display the playback rate component.`,code:Q(Me)},{id:`chapter-selection`,href:`chapter-selection.html`,title:`Chapter Selection`,description:u`In this showcase, we'll demonstrate how to display a chapter selector.`,code:Q(Ne)},{id:`firefox-pip`,href:`firefox-pip.html`,title:`Hide Firefox PiP Button`,description:u`In this showcase, we'll demonstrate how to hide Firefox PiP Button. Activating or deactivating PiP in Firefox applies at the next player resize, such as when entering full screen mode. This appears to be due to an implementation bug in Firefox. Refer to the <a href="https://github.com/SRGSSR/pillarbox-web-demo/pull/57" target="_blank">PR</a> for more details.`,code:Q(Pe)},{id:`spatial-navigation`,href:`spatial-navigation.html`,title:`Enable Spatial Navigation`,description:u`In this showcase, we will demonstrate how to enable <a href="https://videojs.com/guides/spatial-navigation/" target="_blank" rel="noopener noreferrer">spatial navigation</a>, allowing users to control the player with a remote on smart TVs like Tizen and webOS.<br><br>            <i>Note: If you're targeting TV devices with spatial navigation, consider removing the volume button and setting muted: false, as volume is typically handled by the device itself.</i>`,code:Q(Fe)},{id:`thumbnail-preview`,href:`thumbnail-preview.html`,title:`Thumbnail Preview`,description:u`This example shows how to use the thumbnail preview metadata from the current SRGSSR source and inject it into the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/thumbnail-preview#readme" target="_blank">Thumbnail Preview plugin</a>.`,code:Q(Ie)},{id:`toggle-live-audio-video`,href:`toggle-live-audio-video.html`,title:`Toggle between an audio and a video live stream`,description:u`This example shows how to switch between the audio and video streams of the same channel.`,code:Q(Le)}],Ve=class extends t{createRenderRoot(){return this}render(){return u`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove(`fade-in`)}">
        ${z(Be??[],this.#e.bind(this))}
      </div>
    `}#e({id:e,href:t,title:n,description:r,code:i}){return u`
      <showcase-component href="${t}">
        <a id="${e}" href="#${e}" slot="title" part="anchor-title">
          <h2>${n}</h2>
        </a>
        <p slot="description">${r}</p>
        <span slot="toggle-collapsed">
            <i class="material-symbols-outlined">visibility</i> See the Implementation
          </span>
        <span slot="toggle-expanded">
            <i class="material-symbols-outlined">visibility_off</i> Hide the Implementation
          </span>
        <code-block slot="code" language="javascript">${i}</code-block>
        <a slot="action" part="showcase-link"
           href="./static/showcases/${t}"
           target="_blank">
          Open this showcase
        </a>
      </showcase-component>
    `}};customElements.define(`showcase-page`,Ve),e.addRoute(`showcase`,`showcase-page`);var He=class extends t{static properties={debug:{type:Boolean,state:!0}};createRenderRoot(){return this}#e=({detail:{queryParams:e}})=>{this.debug=e.debug===`true`};connectedCallback(){super.connectedCallback(),this.debug=e.queryParams.debug===`true`,e.addEventListener(`routechanged`,this.#e),e.addEventListener(`queryparams`,this.#e)}disconnectedCallback(){e.removeEventListener(`routechanged`,this.#e),e.removeEventListener(`queryparams`,this.#e)}render(){return u`
      ${this.#t()}
      ${this.#n()}
    `}#t(){return u`
      <core-demo-header>
        <route-link href="settings${this.debug?`?debug=true`:``}"
                    title="Settings" slot="actions">
          <i class="material-symbols-outlined">settings</i>
        </route-link>
        <a href="https://grafana.pillarbox.ch/" title="Monitoring"
           target="_blank" rel="noopener noreferrer" slot="actions">
          <i class="material-symbols-outlined">bar_chart</i>
        </a>
      </core-demo-header>
    `}#n(){return u`
      <nav>
        <ul>
          <li>
            <route-link href="examples${this.debug?`?debug=true`:``}">
              Examples
            </route-link>
          </li>
          <li>
            <route-link href="search${this.debug?`?debug=true`:``}">Search
            </route-link>
          </li>
          <li>
            <route-link href="lists${this.debug?`?debug=true`:``}">Lists
            </route-link>
          </li>
          <li>
            <route-link href="showcase${this.debug?`?debug=true`:``}">
              Showcase
            </route-link>
          </li>
        </ul>
      </nav>`}};customElements.define(`demo-header`,He);var Ue=class extends t{static properties={route:{state:!0}};constructor(){super(),this.route=e.currentRoute,e.addEventListener(`routechanged`,({detail:{route:e}})=>{this.route?.destroy(),this.route=e})}createRenderRoot(){return this}render(){return f(`<${this.route.component}></${this.route.component}>`)}};customElements.define(`route-outlet`,Ue);var $=g.loadPreferences();S.host=$.dataProviderHost,e.start({defaultPath:`examples`}),e.queryParams.debug?($.debug=e.queryParams.debug===`true`,g.savePreferences($)):$.debug&&e.updateState({debug:`true`});
//# sourceMappingURL=index--sYjHL32.js.map