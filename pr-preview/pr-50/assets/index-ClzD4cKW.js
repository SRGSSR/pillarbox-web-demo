var Do=Object.defineProperty;var Vt=t=>{throw TypeError(t)};var Io=(t,n,e)=>n in t?Do(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var x=(t,n,e)=>Io(t,typeof n!="symbol"?n+"":n,e),dt=(t,n,e)=>n.has(t)||Vt("Cannot "+e);var y=(t,n,e)=>(dt(t,n,"read from private field"),e?e.call(t):n.get(t)),R=(t,n,e)=>n.has(t)?Vt("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,e),J=(t,n,e,o)=>(dt(t,n,"write to private field"),o?o.call(t,e):n.set(t,e),e),s=(t,n,e)=>(dt(t,n,"access private method"),e);import{r as j,t as q,a as F,b as B,x as d,p as $t,c as v,e as $o,i as jo,d as No,T as Oo,f as tn,v as jt,g as Po,o as nn}from"./core-demo-header-component-BNyRgtzK.js";const zo="[part=container]{block-size:480px;aspect-ratio:var(--ratio-widescreen);padding:0;overflow:visible;background-color:var(--color-12)}[part=close-btn]{position:absolute;top:calc(var(--size-3) * -1);right:0;z-index:2;width:var(--size-7);height:var(--size-7);font-size:var(--size-4);text-align:center;background:var(--gray-6);border-radius:var(--radius-round)}";var oe,Te,on,rn;class gt extends j{constructor(){super();R(this,Te);R(this,oe);this.open=!1}updated(e){super.updated(e),e.has("open")&&(this.open?(y(this,oe).showModal(),y(this,oe).classList.toggle("slide-up-fade-in",!0)):y(this,oe).close())}firstUpdated(e){super.firstUpdated(e),J(this,oe,this.shadowRoot.querySelector("dialog"))}render(){return d`
      <dialog part="container"
              @click="${s(this,Te,rn).bind(this)}"
              @close="${s(this,Te,on).bind(this)}"
              @animationend="${e=>e.target.classList.remove("slide-up-fade-in")}">
        <button part="close-btn"
                @click="${()=>{this.open=!1}}"
                title="Close player dialog">&times;</button>
        <slot></slot>
      </dialog>
    `}}oe=new WeakMap,Te=new WeakSet,on=function(){this.dispatchEvent(new CustomEvent("close"))},rn=function(e){y(this,oe)===e.target&&(this.open=!1)},x(gt,"properties",{open:{type:Boolean,reflect:!0}}),x(gt,"styles",[q,F,B(zo)]);customElements.define("demo-dialog",gt);class Se{static loadPreferences(){return JSON.parse(localStorage.getItem("preferences"))||{}}static savePreferences(n){localStorage.setItem("preferences",JSON.stringify(n))}}const yt="il.srgssr.ch",ne={vector:"srgplay"},Uo={includeAggregations:!1,includeSuggestions:!1,sortBy:"default",sortDir:"desc",pageSize:50,...ne},Bo={onlyActiveShows:!0,...ne},be=({title:t,urn:n,mediaType:e,date:o,duration:i})=>({title:t,urn:n,mediaType:e,date:o,duration:i});var Oe,L,H,te;class Ho{constructor(n=yt){R(this,L);R(this,Oe);this.host=n}get host(){return y(this,Oe)}set host(n){J(this,Oe,n||yt)}async search(n,e,o=void 0){const i=await s(this,L,H).call(this,`/${n.toLowerCase()}/searchResultMediaList`,{...Uo,q:e},o),a=r=>r.searchResultMediaList.map(be);return{results:a(i),next:i.next?s(this,L,te).call(this,i.next,a):void 0}}async topics(n,e="tv"){return(await s(this,L,H).call(this,`/${n.toLowerCase()}/topicList/${e}`)).topicList.map(({title:i,urn:a})=>({title:i,urn:a}))}async latestByTopic(n,e=30){const o=await s(this,L,H).call(this,`/mediaList/latest/byTopicUrn/${n}`,{pageSize:e}),i=a=>a.mediaList.map(be);return{results:i(o),next:o.next?s(this,L,te).call(this,o.next,i):void 0}}async shows(n,e="unlimited",o="tv"){return(await s(this,L,H).call(this,`/${n.toLowerCase()}/showList/${o}/alphabetical`,{...Bo,pageSize:e})).showList.map(({title:a,urn:r})=>({title:a,urn:r}))}async latestByShow(n,e=30){const o=await s(this,L,H).call(this,`/episodeComposition/latestByShow/byUrn/${n}`,{...ne,pageSize:e}),i=a=>a.episodeList.map(({mediaList:r})=>r[0]).map(be);return{results:i(o),next:o.next?s(this,L,te).call(this,o.next,i):void 0}}async editorial(n,e=30){const o=await s(this,L,H).call(this,`/${n.toLowerCase()}/mediaList/video/editorial`,{...ne,pageSize:e}),i=a=>a.mediaList.map(be);return{results:i(o),next:o.next?s(this,L,te).call(this,o.next,i):void 0}}async livestreams(n,e="video"){return(await s(this,L,H).call(this,`/${n.toLowerCase()}/mediaList/${e}/livestreams`)).mediaList.map(be)}async scheduledLivestream(n,e=10){const o=await s(this,L,H).call(this,`/${n.toLowerCase()}/mediaList/video/scheduledLivestreams`,{...ne,pageSize:e}),i=a=>a.mediaList.map(be);return{results:i(o),next:o.next?s(this,L,te).call(this,o.next,i):void 0}}async livecenter(n,e=10){const o=await s(this,L,H).call(this,`/${n.toLowerCase()}/mediaList/video/scheduledLivestreams/livecenter`,{...ne,pageSize:e}),i=a=>a.mediaList.map(be);return{results:i(o),next:o.next?s(this,L,te).call(this,o.next,i):void 0}}async channels(n,e="radio"){return(await s(this,L,H).call(this,`/${n.toLowerCase()}/channelList/${e}`)).channelList.map(({title:i,id:a})=>({title:i,id:a}))}async radioShowByChannel(n,e,o="unlimited"){return(await s(this,L,H).call(this,`/${n.toLowerCase()}/showList/radio/alphabeticalByChannel/${e}`,{...ne,pageSize:o})).showList.map(({title:a,urn:r})=>({title:a,urn:r}))}}Oe=new WeakMap,L=new WeakSet,H=async function(n,e=ne,o=void 0){const i=new URLSearchParams(e).toString(),a=`https://${this.host}/integrationlayer/2.0/${n.replace(/^\/+/,"")}?${i}`;return fetch(a,{signal:o}).then(r=>r.ok?r.json():Promise.reject(r)).catch(r=>Promise.reject(r))},te=function(n,e){return async(o=void 0)=>{const i=await fetch(n,{signal:o}).then(r=>r.ok?r.json():Promise.reject(r)).catch(r=>Promise.reject(r));return{results:e(i),next:s(this,L,te).call(this,i.next,e)}}};const P=new Ho,an="demo-player",qo={restoreEl:!0},Fo=t=>({muted:t.muted??!0,autoplay:t.autoplay??!1,debug:t.debug??!1,srgOptions:{dataProviderHost:t.dataProviderHost??yt}}),Go=(t={})=>(window.player=new $t(an,{...qo,...Fo(Se.loadPreferences()),...t}),window.player),Vo=()=>{$t.getPlayer(an).dispose(),window.player=null};window.pillarbox=$t;const cn=document.querySelector("demo-dialog"),sn=t=>{const n=Object.keys(t??{})[0];return n?{vendor:n,...n==="com.apple.fps.1_0"?t[n]:{licenseUri:t[n]}}:{}},Wo=t=>{if(!t.vendor)return;const{certificateUri:n,licenseUri:e}=t;return t.vendor==="com.apple.fps.1_0"?{[t.vendor]:{certificateUri:n,licenseUri:e}}:{[t.vendor]:e}},Ko=({src:t,type:n,keySystems:e})=>new URLSearchParams({src:t,type:n,...sn(e)}).toString();cn.addEventListener("close",()=>{Vo(),v.updateState({},["src","type","vendor","certificateUri","licenseUri"])});const ln=t=>{if(window.player)return;const n=t.detail.queryParams;if("src"in n){const{src:e,type:o}=n,i=Wo(n);mn({src:e,type:o,keySystems:i})}};v.addEventListener("routechanged",ln);v.addEventListener("queryparams",ln);const mn=({src:t,type:n,keySystems:e,playerOptions:o},i=!0)=>{const a=Go(o??{});return cn.open=!0,a.src({src:t,type:n,keySystems:e}),i&&v.updateState({src:t,...n?{type:n}:{},...sn(e)}),a},Xo=".load-bar-container{display:flex;align-items:center;padding:0 var(--size-3);background-color:var(--color-8);border-radius:var(--radius-2)}.load-bar-container input{width:90%}.load-bar-container button{background-color:var(--color-8);border:0}.drm-settings-container{display:none}.drm-settings-container input{border-radius:var(--radius-2)}.drm-settings-container select{border-right:var(--size-5) solid var(--color-8)}.drm-settings-container.active{display:flex;flex-direction:column}.load-bar-action{width:100%}";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=$o(class extends jo{constructor(t){var n;if(super(t),t.type!==No.ATTRIBUTE||t.name!=="class"||((n=t.strings)==null?void 0:n.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(n=>t[n]).join(" ")+" "}update(t,[n]){var o,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in n)n[a]&&!((o=this.nt)!=null&&o.has(a))&&this.st.add(a);return this.render(n)}const e=t.element.classList;for(const a of this.st)a in n||(e.remove(a),this.st.delete(a));for(const a in n){const r=!!n[a];r===this.st.has(a)||(i=this.nt)!=null&&i.has(a)||(r?(e.add(a),this.st.add(a)):(e.remove(a),this.st.delete(a)))}return Oo}});var A,wt,fn,kt,bn,dn,pn,un,hn,gn;class vt extends j{constructor(){super();R(this,A);this.src="",s(this,A,wt).call(this)}render(){const e={spin:this.drmSettingsShown===!0,"spin-back":this.drmSettingsShown===!1};return d`
      <div class="fade-in"
           @animationend="${o=>o.target.classList.remove("fade-in")}">
        <div class="load-bar-container">
          <i class="material-icons-outlined">insert_link</i>
          <input type="text"
                 placeholder="Enter a URL or URN to play its content..."
                 @keyup="${s(this,A,bn)}"
                 .value="${this.src??""}">
          <button title="Open DRM Settings"
                  @click="${()=>{this.drmSettingsShown=!this.drmSettingsShown}}">
            <i class="material-icons-outlined ${tt(e)}"
               @animationend="${o=>o.target.classList.remove("spin","spin-back")}">
              key
            </i>
          </button>
        </div>
        
        ${s(this,A,gn).call(this)}

        <button class="icon-btn load-bar-action"
                ?disabled="${!this.src}"
                @click="${s(this,A,kt)}">
          <i class="material-icons-outlined">play_circle</i> Play content
        </button>
      </div>
    `}updated(e){super.updated(e),e.has("drmSettingsShown")&&this.drmSettingsShown&&this.shadowRoot.querySelector(".drm-settings-container").classList.add("active")}}A=new WeakSet,wt=function(){this.drmSettings={vendor:"",certificateUri:"",licenseUri:""}},fn=function(){try{return new URL(this.src).searchParams.get("urn")??this.src}catch{return this.src}},kt=function(){var a;const e=(a=s(this,A,fn).call(this))==null?void 0:a.trim(),o=e.startsWith("urn:")?"srgssr/urn":void 0,i=y(this,A,dn);this.dispatchEvent(new CustomEvent("submit-media",{detail:{src:e,type:o,keySystems:i}}))},bn=function(e){this.src=e.target.value,e.key==="Enter"&&this.src&&s(this,A,kt).call(this)},dn=function(){var e;if((e=this.drmSettings)!=null&&e.vendor)return s(this,A,pn).call(this)},pn=function(){var i,a;const e=(i=this.drmSettings.certificateUri)==null?void 0:i.trim(),o=(a=this.drmSettings.licenseUri)==null?void 0:a.trim();return this.drmSettings.vendor==="com.apple.fps.1_0"?{[this.drmSettings.vendor]:{certificateUri:e,licenseUri:o}}:{[this.drmSettings.vendor]:o}},un=function(e){e.target.classList.toggle("active",!e.target.classList.contains("fade-out-shrink")),e.target.classList.remove("fade-in-grow","fade-out-shrink")},hn=function(){return{"fade-in-grow":this.drmSettingsShown===!0,"fade-out-shrink":this.drmSettingsShown===!1}},gn=function(){return d`
      <form class="drm-settings-container ${tt(s(this,A,hn).call(this))}"
            aria-hidden="${!this.drmSettingsShown}"
            @reset="${s(this,A,wt)}"
            @animationend="${e=>s(this,A,un).call(this,e)}">
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
          <i class="material-icons-outlined">delete</i>Clear Settings
        </button>
        <hr>
      </form>
    `},x(vt,"properties",{src:{type:String},drmSettings:{type:Object},drmSettingsShown:{state:!0,type:Boolean}}),x(vt,"styles",[q,F,B(Xo)]);customElements.define("load-media-form",vt);const Zo="[part=a]{display:flex;flex-direction:column;gap:var(--size-2);justify-content:center;min-height:var(--size-10);margin:0;color:var(--color-0);font-weight:var(--font-weight-6);font-size:var(--size-3);text-align:justify;text-decoration:none;background-color:var(--color-9);border:1px solid var(--color-10);transition:background-color .4s,border-color .4s;padding-inline:var(--size-3)}[part=a]:hover{text-decoration:none;background-color:var(--color-8);border-color:var(--color-9)}[part=title]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}::slotted([slot=description]){display:flex;align-items:center;color:var(--color-6);font-weight:var(--font-weight-5);font-size:var(--size-3);font-style:italic}";var Pe;class xt extends j{constructor(){super(...arguments);R(this,Pe,e=>{e.preventDefault();const o=new URL(`${window.location.origin}/${this.href}`),i=Object.fromEntries(o.searchParams.entries());v.navigateTo(o.pathname,i)})}connectedCallback(){super.connectedCallback(),this.addEventListener("click",y(this,Pe))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",y(this,Pe))}render(){return d`
      <a href="${this.href}" title="${this.title}" part="a">
        <span part="title">${this.title}</span>
        <slot part="description" name="description"></slot>
      </a>
    `}}Pe=new WeakMap,x(xt,"properties",{href:{}}),x(xt,"styles",B(Zo));customElements.define("content-link",xt);const Yo={SRGSSR:[{title:"Horizontal video",src:"urn:rts:video:14827306",type:"srgssr/urn"},{title:"Square video",src:"urn:rts:video:8393241",type:"srgssr/urn"},{title:"Vertical video",src:"urn:rts:video:13444390",type:"srgssr/urn"},{title:"Token-protected video",description:"Ski alpin, Slalom Messieurs",src:"urn:swisstxt:video:rts:c56ea781-99ad-40c3-8d9b-444cc5ac3aea",type:"srgssr/urn"},{title:"Superfluously token-protected video",description:"Telegiornale flash",src:"urn:rsi:video:15916771",type:"srgssr/urn"},{title:"DRM-protected video",description:"Top Models 8870",src:"urn:rts:video:13639837",type:"srgssr/urn"},{title:"Live video",description:"SRF 1",src:"urn:srf:video:c4927fcf-e1a0-0001-7edd-1ef01d441651",type:"srgssr/urn"},{title:"DVR video livestream",description:"RTS 1",src:"urn:rts:video:3608506",type:"srgssr/urn"},{title:"DVR audio livestream",description:"Couleur 3 (DVR)",src:"urn:rts:audio:3262363",type:"srgssr/urn"},{title:"On-demand audio stream",description:"Il lavoro di TerraProject per una fotografia documentaria",src:"urn:rsi:audio:8833144",type:"srgssr/urn"},{title:"Expired URN",description:"Content that is not available anymore",src:"urn:rts:video:13382911",type:"srgssr/urn"},{title:"Unknown URN",description:"Content that does not exist",src:"urn:srf:video:unknown",type:"srgssr/urn"}],HLS:[{title:"VOD - HLS",description:"Sacha part à la rencontre d'univers atypiques",src:"https://rts-vod-amd.akamaized.net/ww/14970442/da2b38fb-ca9f-3c76-80c6-e6fa7f3c2699/master.m3u8",type:"application/x-mpegURL"},{title:"VOD - HLS (short)",description:"Des violents orages ont touché Ajaccio, chef-lieu de la Corse, jeudi",src:"https://rts-vod-amd.akamaized.net/ww/13317145/f1d49f18-f302-37ce-866c-1c1c9b76a824/master.m3u8",type:"application/x-mpegURL"},{title:"Brain Farm Skate Phantom Flex",description:"4K video",src:"https://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",type:"application/x-mpegURL"},{title:"Video livestream - HLS",description:"Couleur 3 en vidéo (live)",src:"https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8?dw=0",type:"application/x-mpegURL"},{title:"Video livestream with DVR - HLS",description:"Couleur 3 en vidéo (DVR)",src:"https://rtsc3video.akamaized.net/hls/live/2042837/c3video/3/playlist.m3u8",type:"application/x-mpegURL"},{title:"Video livestream with DVR and timestamps - HLS",description:"Tageschau",src:"https://tagesschau.akamaized.net/hls/live/2020115/tagesschau/tagesschau_1/master.m3u8",type:"application/x-mpegURL"},{title:"Audio livestream - HLS",description:"Couleur 3 (DVR)",src:"https://lsaplus.swisstxt.ch/audio/couleur3_96.stream/playlist.m3u8",type:"application/x-mpegURL"},{title:"Apple Basic 4:3",description:"4x3 aspect ratio, H.264 @ 30Hz",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",type:"application/x-mpegURL"},{title:"Apple Basic 16:9",description:"16x9 aspect ratio, H.264 @ 30Hz",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",type:"application/x-mpegURL"},{title:"Apple Advanced 16:9 (TS)",description:"16x9 aspect ratio, H.264 @ 30Hz and 60Hz, Transport stream",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8",type:"application/x-mpegURL"},{title:"Apple Advanced 16:9 (fMP4)",description:"16x9 aspect ratio, H.264 @ 30Hz and 60Hz, Fragmented MP4",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",type:"application/x-mpegURL"},{title:"Apple Advanced 16:9 (HEVC/H.264)",description:"16x9 aspect ratio, H.264 and HEVC @ 30Hz and 60Hz",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_adv_example_hevc/master.m3u8",type:"application/x-mpegURL"},{title:"Apple Atmos",src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8",type:"application/x-mpegURL"},{title:"Apple WWDC Keynote 2023",src:"https://events-delivery.apple.com/0105cftwpxxsfrpdwklppzjhjocakrsk/m3u8/vod_index-PQsoJoECcKHTYzphNkXohHsQWACugmET.m3u8",type:"application/x-mpegURL"},{title:"Apple tv trailer",description:"Lot of audios and subtitles choices",src:`https://play-edge.itunes.apple.com/WebObjects/MZPlayLocal.woa/hls/subscription/playlist.m3u8?cc=CH&svcId=tvs.vds.4021&a=1522121579&isExternal=true&brandId=tvs.sbd.4000&id=518077009&l=en-GB&aec=UHD
`,type:"application/x-mpegURL"},{title:"Multiple subtitles and audio tracks",description:"On some devices codec may crash",src:"https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8",type:"application/x-mpegURL"},{title:"4K, HEVC",src:"https://cdn.bitmovin.com/content/encoding_test_dash_hls/4k/hls/4k_profile/master.m3u8",type:"application/x-mpegURL"},{title:"VoD, single audio track",src:"https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",type:"application/x-mpegURL"},{title:"AES-128",src:"https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/m3u8s/11331.m3u8",type:"application/x-mpegURL"},{title:"HLS - Fragmented MP4",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",type:"application/x-mpegURL"},{title:"HLS - Alternate audio language",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.m3u8",type:"application/x-mpegURL"},{title:"HLS - Audio only",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.m3u8?filter=(type!=%22video%22)",type:"application/x-mpegURL"},{title:"HLS - Trickplay",src:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel-trickplay.m3u8",type:"application/x-mpegURL"},{title:"Limiting bandwidth use",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8?max_bitrate=800000",type:"application/x-mpegURL"},{title:"Dynamic Track Selection",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8?filter=%28type%3D%3D%22audio%22%26%26systemBitrate%3C100000%29%7C%7C%28type%3D%3D%22video%22%26%26systemBitrate%3C1024000%29",type:"application/x-mpegURL"},{title:"Pure live",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8",type:"application/x-mpegURL"},{title:"Timeshift (5 minutes)",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8?time_shift=300",type:"application/x-mpegURL"},{title:"Live audio",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8?filter=(type!=%22video%22)",type:"application/x-mpegURL"},{title:"Pure live (scte35)",src:"https://demo.unified-streaming.com/k8s/live/stable/scte35.isml/.m3u8",type:"application/x-mpegURL"},{title:"fMP4, clear",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-fmp4.ism/.m3u8",type:"application/x-mpegURL"},{title:"fMP4, HEVC 4K",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-hevc.ism/.m3u8",type:"application/x-mpegURL"},{title:"Test1",description:"Forced subtitles",src:"https://prd.vod-srgssr.ch/origin/1053457/fr/master.m3u8?complexSubs=true",type:"application/x-mpegURL"}],DASH:[{title:"VoD - Dash (H264)",src:"https://storage.googleapis.com/wvmedia/clear/h264/tears/tears.mpd",type:"application/dash+xml"},{title:"VoD - Dash Widewine cenc (H264)",src:"https://storage.googleapis.com/wvmedia/cenc/h264/tears/tears.mpd",type:"application/dash+xml",keySystems:{"com.widevine.alpha":"https://proxy.uat.widevine.com/proxy?video_id=2015_tears&provider=widevine_test"}},{title:"VoD - Dash (H265)",src:"https://storage.googleapis.com/wvmedia/clear/hevc/tears/tears.mpd",type:"application/dash+xml"},{title:"VoD - Dash widewine cenc (H265)",src:"https://storage.googleapis.com/wvmedia/cenc/hevc/tears/tears.mpd",type:"application/dash+xml",keySystems:{"com.widevine.alpha":"https://proxy.uat.widevine.com/proxy?video_id=2015_tears&provider=widevine_test"}},{title:"VoD - Dash - MP4",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.mpd",type:"application/dash+xml"},{title:"Dash - Fragmented MP4",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.mpd",type:"application/dash+xml"},{title:"Dash - TrickPlay",src:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel-trickplay.mpd",type:"application/dash+xml"},{title:"Dash - Tiled thumbnails (live/timeline)",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-tiled-thumbnails-timeline.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Accessibility - hard of hearing",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-hoh-subs.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Single - fragmented TTML",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-en.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Multiple - RFC 5646 language tags",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-rfc5646.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Multiple - fragmented TTML",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-ttml.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Audio only",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.mpd?filter=(type!=%22video%22)",type:"application/dash+xml"},{title:"Dash - Multiple audio codecs",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-codec.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Alternate audio language",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-multi-lang.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Accessibility - audio description",src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-desc-aud.ism/.mpd",type:"application/dash+xml"},{title:"Dash - Pure live",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.mpd",type:"application/dash+xml"},{title:"Dash - Timeshift (5 minutes)",src:"https://demo.unified-streaming.com/k8s/live/stable/live.isml/.mpd?time_shift=300",type:"application/dash+xml"},{title:"Dash - DVB DASH low latency",src:"https://demo.unified-streaming.com/k8s/live/stable/live-low-latency.isml/.mpd",type:"application/dash+xml"}],MP4:[{title:"VOD - MP4",description:"The dig",src:"https://media.swissinfo.ch/media/video/dddaff93-c2cd-4b6e-bdad-55f75a519480/rendition/154a844b-de1d-4854-93c1-5c61cd07e98c.mp4",type:"video/mp4"},{title:"AVC Progressive",src:"https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4",type:"video/mp4"}],AOD:[{title:"Audio HLS",description:"Content with PTS rollover",src:"https://cdn.rts.ch/audio-sample/playlist.m3u8",type:"application/x-mpegURL"}]};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ee(t,n){if(t!==void 0){let e=0;for(const o of t)yield n(o,e++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(t,n,e){return t?n(t):e==null?void 0:e(t)}class yn extends j{render(){return d`
      <load-media-form @submit-media="${n=>mn(n.detail)}">
      </load-media-form>

      <!-- List of examples -->
      <div class="fade-in"
           @animationend="${n=>n.target.classList.remove("fade-in")}">
        ${Ee(Object.entries(Yo),([n,e])=>d`
          <section class="example-section" data-section="${n}">
            <h2 class="sticky">${n}</h2>
            ${Ee(e,o=>d`
              <content-link title="${o.description||o.title}"
                            href="examples?${Ko(o)}">
                ${Z(o.description,()=>d`
                    <span slot="description">${o.title}</span>
                `)}
              </content-link>
            `)}
          </section>
        `)}
      </div>
    `}}x(yn,"styles",[q,F,tn`
      .example-section p {
        margin-bottom: 0;
        color: var(--color-5);
        font-size: var(--size-3);
        text-align: left;
      }`]);customElements.define("examples-page",yn);v.addRoute("examples","examples-page");const Jo=".tree-navigation-container{display:flex;align-items:end}.tree-navigation-container button{padding:0;color:var(--color-6);background:transparent;border:none}.tree-navigation-container button:hover{color:inherit}.tree-navigation-container i{font-size:var(--size-3)}intersection-observer::part(sentinel){width:100%;height:var(--size-9);margin-top:var(--size-4);background-color:var(--color-9);border:1px solid var(--color-10);border-radius:var(--radius-3);animation:var(--animation-blink)}",Qo=".spinner{display:block;width:var(--size-7);height:var(--size-7);border:3px solid var(--color-2);border-bottom-color:transparent;border-radius:var(--radius-round);animation:var(--animation-spin)}.spinner-container{display:grid;place-content:center;margin:var(--size-10)}.spinner-container.hidden{display:none}";class St extends j{constructor(){super(),this.loading=!1}render(){return d`
      <div class="spinner-container ${this.loading?"":"hidden"}">
        <div class="spinner"></div>
      </div>
    `}}x(St,"properties",{loading:{type:Boolean,reflect:!0}}),x(St,"styles",[F,B(Qo)]);customElements.define("loading-spinner",St);const ei={root:null,rootMargin:"0px",threshold:.1},ti=(t,n,e=ei)=>{new IntersectionObserver(o=>{o.forEach(i=>{i.isIntersecting&&n()})},e).observe(t)};class vn extends j{firstUpdated(n){super.firstUpdated(n),ti(this.renderRoot.querySelector("div"),()=>{this.dispatchEvent(new CustomEvent("intersecting"))})}render(){return d`
      <div part="sentinel"></div>
    `}}x(vn,"styles",[F]);customElements.define("intersection-observer",vn);class wn extends j{render(){return d`
      <button class="scroll-to-top-button" title="Scroll to top" 
              @click="${()=>window.scrollTo({top:0,behavior:"smooth"})}">
        <i class="material-icons-outlined">arrow_circle_up</i>
      </button>
    `}}x(wn,"styles",[q,F,tn`
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
  `]);customElements.define("scroll-to-top-button",wn);const pt=t=>t.replace(/\s+/g,"-").toLowerCase();var Q,kn,ze,Et,xn,Rt;const $e=class $e{constructor(n){R(this,Q);this.stack=[],this.level=n}async initialize(n,e,o){if(!n||!e)return;const i=s(this,Q,xn).call(this,n),a=s(this,Q,Rt).call(this,this.level[i].nodes,e);await this.fetchNextState(i,a),await s(this,Q,kn).call(this,o)}async fetchNextState(n,e){const o=this.level[n];this.stack.push({level:this.level,sectionIndex:n,nodeIndex:e}),this.level=[await o.resolve(o.nodes[e])]}fetchPreviousState(n){this.level=this.stack[n].level,this.stack.splice(n)}isLeafSection(n){var e;return(e=this.level[n])==null?void 0:e.isLeaf()}retrieveNode(n,e){var o;return(o=this.level[n])==null?void 0:o.nodes[e]}get root(){var n;return((n=this.stack[0])==null?void 0:n.level)||this.level}get params(){var n;return s(n=$e,ze,Et).call(n,this.stack)}paramsAt(n,e){var o;return s(o=$e,ze,Et).call(o,[...this.stack,{level:this.level,sectionIndex:n,nodeIndex:e}])}};Q=new WeakSet,kn=async function(n){for(const e of(n==null?void 0:n.split(","))||[]){const o=s(this,Q,Rt).call(this,this.level[0].nodes,e);await this.fetchNextState(0,o)}},ze=new WeakSet,Et=function(n){if(n.length===0)return{};const e=n[0],o=e.level[e.sectionIndex],i=n.slice(1).map(r=>{const l=r.level[r.sectionIndex].nodes[r.nodeIndex];return l.id||l.urn}),a={section:pt(o.title),bu:o.nodes[e.nodeIndex].toLowerCase()};return i&&i.length&&(a.nodes=i.join(",")),a},xn=function(n){const e=pt(n).toLowerCase();return this.level.map(o=>pt(o.title).toLowerCase()).findIndex(o=>o===e)},Rt=function(n,e){const o=e.toLowerCase();return n.map(i=>(i.urn||i.id||i.toString()).toLowerCase()).findIndex(i=>i===o)},R($e,ze);let nt=$e;class M{constructor({title:n,nodes:e,resolve:o=void 0,next:i=void 0}){this.title=n,this.nodes=e,this.resolve=o,this.next=i}isLeaf(){return!this.resolve}async fetchNext(n=void 0){if(!this.next)return;const e=await this.next(n);return this.next=e.next,this.nodes.push(...e.results),e.results}}const Ie=t=>({nodes:t.results,next:t.next}),ni=[new M({title:"TV Topics",nodes:["RSI","RTR","RTS","SRF","SWI"],resolve:async t=>new M({title:`${t} TV Topics`,nodes:await P.topics(t),resolve:async n=>new M({title:n.title,...Ie(await P.latestByTopic(n.urn))})})}),new M({title:"TV Shows",nodes:["RSI","RTR","RTS","SRF","SWI"],resolve:async t=>new M({title:`${t} TV Shows`,nodes:await P.shows(t),resolve:async n=>new M({title:n.title,...Ie(await P.latestByShow(n.urn))})})}),new M({title:"TV Latest Videos",nodes:["RSI","RTR","RTS","SRF"],resolve:async t=>new M({title:`${t} TV Latest Videos`,...Ie(await P.editorial(t))})}),new M({title:"TV Livestreams",nodes:["RSI","RTR","RTS","SRF"],resolve:async t=>new M({title:`${t} TV Livestreams`,nodes:await P.livestreams(t)})}),new M({title:"Live web",nodes:["RSI","RTR","RTS","SRF"],resolve:async t=>new M({title:`${t} Live web`,...Ie(await P.scheduledLivestream(t))})}),new M({title:"Live center",nodes:["RSI","RTR","RTS","SRF"],resolve:async t=>new M({title:`${t} Live center`,nodes:await P.livecenter(t)})}),new M({title:"Radio Shows",nodes:["RSI","RTR","RTS","SRF"],resolve:async t=>new M({title:`${t} Radio Channels`,nodes:await P.channels(t),resolve:async n=>new M({title:`${n.title} Radio shows`,nodes:await P.radioShowByChannel(t,n.id),resolve:async e=>new M({title:e.title,...Ie(await P.latestByShow(e.urn))})})})}),new M({title:"Radio Livestreams",nodes:["RSI","RTR","RTS","SRF"],resolve:async t=>new M({title:`${t} Radio Livestreams`,nodes:await P.livestreams(t,"audio")})})];var Re,U,de,k,xe,Sn,En,Rn,Cn,_n,Tn,Ln,An,Mn,Dn,In,$n;class Ct extends j{constructor(){super();R(this,k);R(this,Re,new AbortController);R(this,U);R(this,de);this.loading=!1,J(this,U,new nt(ni)),s(this,k,xe).call(this)}connectedCallback(){super.connectedCallback(),J(this,de,async e=>{if(!e.detail.popstate)return;this.abortFetch();const o=new nt(y(this,U).root),{section:i,bu:a,nodes:r}=e.detail.queryParams;this.loading=!0;try{await o.initialize(i,a,r),J(this,U,o),s(this,k,xe).call(this)}finally{this.loading=!1}}),v.addEventListener("queryparams",y(this,de))}disconnectedCallback(){super.disconnectedCallback(),this.abortFetch(),v.removeEventListener("queryparams",y(this,de))}firstUpdated(e){super.firstUpdated(e),y(this,de).call(this,{detail:{popstate:!0,queryParams:v.queryParams}})}async navigateTo(e,o){if(!y(this,U).isLeafSection(e)){this.abortFetch(),this.loading=!0;try{await y(this,U).fetchNextState(e,o),s(this,k,xe).call(this)}finally{this.loading=!1}}}abortFetch(){var e;return(e=y(this,Re))==null||e.abort("New search launched"),J(this,Re,new AbortController),y(this,Re).signal}render(){const e=this.level.length===1&&this.level[0].next;return d`
        ${s(this,k,$n).call(this)}
        ${Z(this.loading,s(this,k,Mn).bind(this),s(this,k,An).bind(this))}
        ${Z(e,s(this,k,Dn).bind(this))}
    `}}Re=new WeakMap,U=new WeakMap,de=new WeakMap,k=new WeakSet,xe=function(){this.stack=[...y(this,U).stack],this.level=[...y(this,U).level]},Sn=function(e){return new URLSearchParams({...v.queryParams,src:e.urn,type:"srgssr/urn"}).toString()},En=function(e){const o=new Intl.DateTimeFormat("fr-CH").format(new Date(e.date)),i=jt.formatTime(e.duration/1e3);return d`
      <content-link title="${e.title}" href="lists?${s(this,k,Sn).call(this,e)}">
        <div slot="description">
          <i class="material-icons-outlined">${e.mediaType==="VIDEO"?"movie":"audiotrack"}</i>
          <span>&nbsp;| ${o} | ${i}</span>
        </div>
      </content-link>
    `},Rn=function(e,o){const i=y(this,U).paramsAt(e,o);return new URLSearchParams(i).toString()},Cn=function(e,o,i){return d`
      <content-link title="${typeof e=="string"?e:e.title}"
                   href="lists?${s(this,k,Rn).call(this,o,i)}"
                   data-section-idx="${o}" data-node-idx="${i}">
      </content-link>
    `},_n=async function(e){const o=this.abortFetch();await e.fetchNext(o),s(this,k,xe).call(this)},Tn=function(e,o){const i=this.level[0],a=this.level.length===1&&i.next;return d`
        ${Ee(e,(r,l)=>d`
            ${Z(r.mediaType,()=>s(this,k,En).call(this,r,l),()=>s(this,k,Cn).call(this,r,o,l))}
        `)}
        ${Z(a,()=>d`
            <intersection-observer
                    @intersecting="${()=>s(this,k,_n).call(this,i)}">
            </intersection-observer>
        `)}
    `},Ln=async function(e){const o=e.target.closest("content-link");if(this.loading||!("nodeIdx"in o.dataset))return;const i=o.dataset.sectionIdx,a=o.dataset.nodeIdx;await this.navigateTo(i,a)},An=function(){return d`
        <div class="fade-in"
             @animationend="${e=>e.target.classList.remove("fade-in")}"
             @click="${s(this,k,Ln).bind(this)}">
            ${Ee(this.level,(e,o)=>d`
                <section>
                    <h2 class="sticky">${e.title}</h2>
                    ${s(this,k,Tn).call(this,e.nodes,o)}
                </section>
            `)}
        </div>
    `},Mn=function(){return d`
        <loading-spinner loading class="slide-up-fade-in"
                         @animationend="${e=>e.target.classList.remove("slide-up-fade-in")}">
        </loading-spinner>
    `},Dn=function(){return d`
        <scroll-to-top-button></scroll-to-top-button>`},In=function(e){e.target.tagName.toLowerCase()==="button"&&(this.abortFetch(),y(this,U).fetchPreviousState(e.target.dataset.navigationIdx),s(this,k,xe).call(this),v.updateState(y(this,U).params,["section","bu","nodes"]))},$n=function(){return d`
        <div class="tree-navigation-container"
             @click="${s(this,k,In).bind(this)}">
            ${Z(this.stack.length>0,()=>d`
                <button data-navigation-idx="0">Home</button>
            `)}
            ${Ee(this.stack.slice(1),(e,o)=>d`
                <i class="material-icons-outlined">chevron_right</i>
                <button data-navigation-idx="${o+1}">
                    ${e.level[e.sectionIndex].title}
                </button>
            `)}
        </div>
    `},x(Ct,"properties",{loading:{state:!0,type:Boolean},stack:{state:!0,type:Array},level:{state:!0,type:Object},nextPage:{state:!0,type:Function}}),x(Ct,"styles",[q,F,B(Jo)]);customElements.define("lists-page",Ct);v.addRoute("lists","lists-page");const oi="@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url("+new URL("material-icons-kAwBdRge.woff2",import.meta.url).href+') format("woff2"),url('+new URL("material-icons-Dr0goTwe.woff",import.meta.url).href+') format("woff")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url('+new URL("material-icons-outlined-DZhiGvEA.woff2",import.meta.url).href+') format("woff2"),url('+new URL("material-icons-outlined-BpWbwl2n.woff",import.meta.url).href+') format("woff")}.material-icons-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url('+new URL("material-icons-round-DrirKXBx.woff2",import.meta.url).href+') format("woff2"),url('+new URL("material-icons-round-BDlwx-sv.woff",import.meta.url).href+') format("woff")}.material-icons-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url('+new URL("material-icons-sharp-gidztirS.woff2",import.meta.url).href+') format("woff2"),url('+new URL("material-icons-sharp-CH1KkVu7.woff",import.meta.url).href+') format("woff")}.material-icons-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url('+new URL("material-icons-two-tone-DuNIpaEj.woff2",import.meta.url).href+') format("woff2"),url('+new URL("material-icons-two-tone-B7wz7mED.woff",import.meta.url).href+') format("woff")}.material-icons-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}.mi{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}.mi-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}.mi-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}.mi-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}.mi-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}.mi-123:before{content:""}.mi-360:before{content:""}.mi-10k:before{content:""}.mi-10mp:before{content:""}.mi-11mp:before{content:""}.mi-12mp:before{content:""}.mi-13mp:before{content:""}.mi-14mp:before{content:""}.mi-15mp:before{content:""}.mi-16mp:before{content:""}.mi-17mp:before{content:""}.mi-18-up-rating:before{content:""}.mi-18mp:before{content:""}.mi-19mp:before{content:""}.mi-1k:before{content:""}.mi-1k-plus:before{content:""}.mi-1x-mobiledata:before{content:""}.mi-20mp:before{content:""}.mi-21mp:before{content:""}.mi-22mp:before{content:""}.mi-23mp:before{content:""}.mi-24mp:before{content:""}.mi-2k:before{content:""}.mi-2k-plus:before{content:""}.mi-2mp:before{content:""}.mi-30fps:before{content:""}.mi-30fps-select:before{content:""}.mi-3d-rotation:before{content:""}.mi-3g-mobiledata:before{content:""}.mi-3k:before{content:""}.mi-3k-plus:before{content:""}.mi-3mp:before{content:""}.mi-3p:before{content:""}.mi-4g-mobiledata:before{content:""}.mi-4g-plus-mobiledata:before{content:""}.mi-4k:before{content:""}.mi-4k-plus:before{content:""}.mi-4mp:before{content:""}.mi-5g:before{content:""}.mi-5k:before{content:""}.mi-5k-plus:before{content:""}.mi-5mp:before{content:""}.mi-60fps:before{content:""}.mi-60fps-select:before{content:""}.mi-6-ft-apart:before{content:""}.mi-6k:before{content:""}.mi-6k-plus:before{content:""}.mi-6mp:before{content:""}.mi-7k:before{content:""}.mi-7k-plus:before{content:""}.mi-7mp:before{content:""}.mi-8k:before{content:""}.mi-8k-plus:before{content:""}.mi-8mp:before{content:""}.mi-9k:before{content:""}.mi-9k-plus:before{content:""}.mi-9mp:before{content:""}.mi-abc:before{content:""}.mi-ac-unit:before{content:""}.mi-access-alarm:before{content:""}.mi-access-alarms:before{content:""}.mi-access-time:before{content:""}.mi-access-time-filled:before{content:""}.mi-accessibility:before{content:""}.mi-accessibility-new:before{content:""}.mi-accessible:before{content:""}.mi-accessible-forward:before{content:""}.mi-account-balance:before{content:""}.mi-account-balance-wallet:before{content:""}.mi-account-box:before{content:""}.mi-account-circle:before{content:""}.mi-account-tree:before{content:""}.mi-ad-units:before{content:""}.mi-adb:before{content:""}.mi-add:before{content:""}.mi-add-a-photo:before{content:""}.mi-add-alarm:before{content:""}.mi-add-alert:before{content:""}.mi-add-box:before{content:""}.mi-add-business:before{content:""}.mi-add-call:before{content:""}.mi-add-card:before{content:""}.mi-add-chart:before{content:""}.mi-add-circle:before{content:""}.mi-add-circle-outline:before{content:""}.mi-add-comment:before{content:""}.mi-add-home:before{content:""}.mi-add-home-work:before{content:""}.mi-add-ic-call:before{content:""}.mi-add-link:before{content:""}.mi-add-location:before{content:""}.mi-add-location-alt:before{content:""}.mi-add-moderator:before{content:""}.mi-add-photo-alternate:before{content:""}.mi-add-reaction:before{content:""}.mi-add-road:before{content:""}.mi-add-shopping-cart:before{content:""}.mi-add-task:before{content:""}.mi-add-to-drive:before{content:""}.mi-add-to-home-screen:before{content:""}.mi-add-to-photos:before{content:""}.mi-add-to-queue:before{content:""}.mi-addchart:before{content:""}.mi-adf-scanner:before{content:""}.mi-adjust:before{content:""}.mi-admin-panel-settings:before{content:""}.mi-adobe:before{content:""}.mi-ads-click:before{content:""}.mi-agriculture:before{content:""}.mi-air:before{content:""}.mi-airline-seat-flat:before{content:""}.mi-airline-seat-flat-angled:before{content:""}.mi-airline-seat-individual-suite:before{content:""}.mi-airline-seat-legroom-extra:before{content:""}.mi-airline-seat-legroom-normal:before{content:""}.mi-airline-seat-legroom-reduced:before{content:""}.mi-airline-seat-recline-extra:before{content:""}.mi-airline-seat-recline-normal:before{content:""}.mi-airline-stops:before{content:""}.mi-airlines:before{content:""}.mi-airplane-ticket:before{content:""}.mi-airplanemode-active:before{content:""}.mi-airplanemode-inactive:before{content:""}.mi-airplanemode-off:before{content:""}.mi-airplanemode-on:before{content:""}.mi-airplay:before{content:""}.mi-airport-shuttle:before{content:""}.mi-alarm:before{content:""}.mi-alarm-add:before{content:""}.mi-alarm-off:before{content:""}.mi-alarm-on:before{content:""}.mi-album:before{content:""}.mi-align-horizontal-center:before{content:""}.mi-align-horizontal-left:before{content:""}.mi-align-horizontal-right:before{content:""}.mi-align-vertical-bottom:before{content:""}.mi-align-vertical-center:before{content:""}.mi-align-vertical-top:before{content:""}.mi-all-inbox:before{content:""}.mi-all-inclusive:before{content:""}.mi-all-out:before{content:""}.mi-alt-route:before{content:""}.mi-alternate-email:before{content:""}.mi-amp-stories:before{content:""}.mi-analytics:before{content:""}.mi-anchor:before{content:""}.mi-android:before{content:""}.mi-animation:before{content:""}.mi-announcement:before{content:""}.mi-aod:before{content:""}.mi-apartment:before{content:""}.mi-api:before{content:""}.mi-app-blocking:before{content:""}.mi-app-registration:before{content:""}.mi-app-settings-alt:before{content:""}.mi-app-shortcut:before{content:""}.mi-apple:before{content:""}.mi-approval:before{content:""}.mi-apps:before{content:""}.mi-apps-outage:before{content:""}.mi-architecture:before{content:""}.mi-archive:before{content:""}.mi-area-chart:before{content:""}.mi-arrow-back:before{content:""}.mi-arrow-back-ios:before{content:""}.mi-arrow-back-ios-new:before{content:""}.mi-arrow-circle-down:before{content:""}.mi-arrow-circle-left:before{content:""}.mi-arrow-circle-right:before{content:""}.mi-arrow-circle-up:before{content:""}.mi-arrow-downward:before{content:""}.mi-arrow-drop-down:before{content:""}.mi-arrow-drop-down-circle:before{content:""}.mi-arrow-drop-up:before{content:""}.mi-arrow-forward:before{content:""}.mi-arrow-forward-ios:before{content:""}.mi-arrow-left:before{content:""}.mi-arrow-outward:before{content:""}.mi-arrow-right:before{content:""}.mi-arrow-right-alt:before{content:""}.mi-arrow-upward:before{content:""}.mi-art-track:before{content:""}.mi-article:before{content:""}.mi-aspect-ratio:before{content:""}.mi-assessment:before{content:""}.mi-assignment:before{content:""}.mi-assignment-add:before{content:""}.mi-assignment-ind:before{content:""}.mi-assignment-late:before{content:""}.mi-assignment-return:before{content:""}.mi-assignment-returned:before{content:""}.mi-assignment-turned-in:before{content:""}.mi-assist-walker:before{content:""}.mi-assistant:before{content:""}.mi-assistant-direction:before{content:""}.mi-assistant-navigation:before{content:""}.mi-assistant-photo:before{content:""}.mi-assured-workload:before{content:""}.mi-atm:before{content:""}.mi-attach-email:before{content:""}.mi-attach-file:before{content:""}.mi-attach-money:before{content:""}.mi-attachment:before{content:""}.mi-attractions:before{content:""}.mi-attribution:before{content:""}.mi-audio-file:before{content:""}.mi-audiotrack:before{content:""}.mi-auto-awesome:before{content:""}.mi-auto-awesome-mosaic:before{content:""}.mi-auto-awesome-motion:before{content:""}.mi-auto-delete:before{content:""}.mi-auto-fix-high:before{content:""}.mi-auto-fix-normal:before{content:""}.mi-auto-fix-off:before{content:""}.mi-auto-graph:before{content:""}.mi-auto-mode:before{content:""}.mi-auto-stories:before{content:""}.mi-autofps-select:before{content:""}.mi-autorenew:before{content:""}.mi-av-timer:before{content:""}.mi-baby-changing-station:before{content:""}.mi-back-hand:before{content:""}.mi-backpack:before{content:""}.mi-backspace:before{content:""}.mi-backup:before{content:""}.mi-backup-table:before{content:""}.mi-badge:before{content:""}.mi-bakery-dining:before{content:""}.mi-balance:before{content:""}.mi-balcony:before{content:""}.mi-ballot:before{content:""}.mi-bar-chart:before{content:""}.mi-barcode-reader:before{content:""}.mi-batch-prediction:before{content:""}.mi-bathroom:before{content:""}.mi-bathtub:before{content:""}.mi-battery-0-bar:before{content:""}.mi-battery-1-bar:before{content:""}.mi-battery-20:before{content:""}.mi-battery-2-bar:before{content:""}.mi-battery-30:before{content:""}.mi-battery-3-bar:before{content:""}.mi-battery-4-bar:before{content:""}.mi-battery-50:before{content:""}.mi-battery-5-bar:before{content:""}.mi-battery-60:before{content:""}.mi-battery-6-bar:before{content:""}.mi-battery-80:before{content:""}.mi-battery-90:before{content:""}.mi-battery-alert:before{content:""}.mi-battery-charging-20:before{content:""}.mi-battery-charging-30:before{content:""}.mi-battery-charging-50:before{content:""}.mi-battery-charging-60:before{content:""}.mi-battery-charging-80:before{content:""}.mi-battery-charging-90:before{content:""}.mi-battery-charging-full:before{content:""}.mi-battery-full:before{content:""}.mi-battery-saver:before{content:""}.mi-battery-std:before{content:""}.mi-battery-unknown:before{content:""}.mi-beach-access:before{content:""}.mi-bed:before{content:""}.mi-bedroom-baby:before{content:""}.mi-bedroom-child:before{content:""}.mi-bedroom-parent:before{content:""}.mi-bedtime:before{content:""}.mi-bedtime-off:before{content:""}.mi-beenhere:before{content:""}.mi-bento:before{content:""}.mi-bike-scooter:before{content:""}.mi-biotech:before{content:""}.mi-blender:before{content:""}.mi-blind:before{content:""}.mi-blinds:before{content:""}.mi-blinds-closed:before{content:""}.mi-block:before{content:""}.mi-block-flipped:before{content:""}.mi-bloodtype:before{content:""}.mi-bluetooth:before{content:""}.mi-bluetooth-audio:before{content:""}.mi-bluetooth-connected:before{content:""}.mi-bluetooth-disabled:before{content:""}.mi-bluetooth-drive:before{content:""}.mi-bluetooth-searching:before{content:""}.mi-blur-circular:before{content:""}.mi-blur-linear:before{content:""}.mi-blur-off:before{content:""}.mi-blur-on:before{content:""}.mi-bolt:before{content:""}.mi-book:before{content:""}.mi-book-online:before{content:""}.mi-bookmark:before{content:""}.mi-bookmark-add:before{content:""}.mi-bookmark-added:before{content:""}.mi-bookmark-border:before{content:""}.mi-bookmark-outline:before{content:""}.mi-bookmark-remove:before{content:""}.mi-bookmarks:before{content:""}.mi-border-all:before{content:""}.mi-border-bottom:before{content:""}.mi-border-clear:before{content:""}.mi-border-color:before{content:""}.mi-border-horizontal:before{content:""}.mi-border-inner:before{content:""}.mi-border-left:before{content:""}.mi-border-outer:before{content:""}.mi-border-right:before{content:""}.mi-border-style:before{content:""}.mi-border-top:before{content:""}.mi-border-vertical:before{content:""}.mi-boy:before{content:""}.mi-branding-watermark:before{content:""}.mi-breakfast-dining:before{content:""}.mi-brightness-1:before{content:""}.mi-brightness-2:before{content:""}.mi-brightness-3:before{content:""}.mi-brightness-4:before{content:""}.mi-brightness-5:before{content:""}.mi-brightness-6:before{content:""}.mi-brightness-7:before{content:""}.mi-brightness-auto:before{content:""}.mi-brightness-high:before{content:""}.mi-brightness-low:before{content:""}.mi-brightness-medium:before{content:""}.mi-broadcast-on-home:before{content:""}.mi-broadcast-on-personal:before{content:""}.mi-broken-image:before{content:""}.mi-browse-gallery:before{content:""}.mi-browser-not-supported:before{content:""}.mi-browser-updated:before{content:""}.mi-brunch-dining:before{content:""}.mi-brush:before{content:""}.mi-bubble-chart:before{content:""}.mi-bug-report:before{content:""}.mi-build:before{content:""}.mi-build-circle:before{content:""}.mi-bungalow:before{content:""}.mi-burst-mode:before{content:""}.mi-bus-alert:before{content:""}.mi-business:before{content:""}.mi-business-center:before{content:""}.mi-cabin:before{content:""}.mi-cable:before{content:""}.mi-cached:before{content:""}.mi-cake:before{content:""}.mi-calculate:before{content:""}.mi-calendar-month:before{content:""}.mi-calendar-today:before{content:""}.mi-calendar-view-day:before{content:""}.mi-calendar-view-month:before{content:""}.mi-calendar-view-week:before{content:""}.mi-call:before{content:""}.mi-call-end:before{content:""}.mi-call-made:before{content:""}.mi-call-merge:before{content:""}.mi-call-missed:before{content:""}.mi-call-missed-outgoing:before{content:""}.mi-call-received:before{content:""}.mi-call-split:before{content:""}.mi-call-to-action:before{content:""}.mi-camera:before{content:""}.mi-camera-alt:before{content:""}.mi-camera-enhance:before{content:""}.mi-camera-front:before{content:""}.mi-camera-indoor:before{content:""}.mi-camera-outdoor:before{content:""}.mi-camera-rear:before{content:""}.mi-camera-roll:before{content:""}.mi-cameraswitch:before{content:""}.mi-campaign:before{content:""}.mi-cancel:before{content:""}.mi-cancel-presentation:before{content:""}.mi-cancel-schedule-send:before{content:""}.mi-candlestick-chart:before{content:""}.mi-car-crash:before{content:""}.mi-car-rental:before{content:""}.mi-car-repair:before{content:""}.mi-card-giftcard:before{content:""}.mi-card-membership:before{content:""}.mi-card-travel:before{content:""}.mi-carpenter:before{content:""}.mi-cases:before{content:""}.mi-casino:before{content:""}.mi-cast:before{content:""}.mi-cast-connected:before{content:""}.mi-cast-for-education:before{content:""}.mi-castle:before{content:""}.mi-catching-pokemon:before{content:""}.mi-category:before{content:""}.mi-celebration:before{content:""}.mi-cell-tower:before{content:""}.mi-cell-wifi:before{content:""}.mi-center-focus-strong:before{content:""}.mi-center-focus-weak:before{content:""}.mi-chair:before{content:""}.mi-chair-alt:before{content:""}.mi-chalet:before{content:""}.mi-change-circle:before{content:""}.mi-change-history:before{content:""}.mi-charging-station:before{content:""}.mi-chat:before{content:""}.mi-chat-bubble:before{content:""}.mi-chat-bubble-outline:before{content:""}.mi-check:before{content:""}.mi-check-box:before{content:""}.mi-check-box-outline-blank:before{content:""}.mi-check-circle:before{content:""}.mi-check-circle-outline:before{content:""}.mi-checklist:before{content:""}.mi-checklist-rtl:before{content:""}.mi-checkroom:before{content:""}.mi-chevron-left:before{content:""}.mi-chevron-right:before{content:""}.mi-child-care:before{content:""}.mi-child-friendly:before{content:""}.mi-chrome-reader-mode:before{content:""}.mi-church:before{content:""}.mi-circle:before{content:""}.mi-circle-notifications:before{content:""}.mi-class:before{content:""}.mi-clean-hands:before{content:""}.mi-cleaning-services:before{content:""}.mi-clear:before{content:""}.mi-clear-all:before{content:""}.mi-close:before{content:""}.mi-close-fullscreen:before{content:""}.mi-closed-caption:before{content:""}.mi-closed-caption-disabled:before{content:""}.mi-closed-caption-off:before{content:""}.mi-cloud:before{content:""}.mi-cloud-circle:before{content:""}.mi-cloud-done:before{content:""}.mi-cloud-download:before{content:""}.mi-cloud-off:before{content:""}.mi-cloud-queue:before{content:""}.mi-cloud-sync:before{content:""}.mi-cloud-upload:before{content:""}.mi-cloudy-snowing:before{content:""}.mi-co2:before{content:""}.mi-co-present:before{content:""}.mi-code:before{content:""}.mi-code-off:before{content:""}.mi-coffee:before{content:""}.mi-coffee-maker:before{content:""}.mi-collections:before{content:""}.mi-collections-bookmark:before{content:""}.mi-color-lens:before{content:""}.mi-colorize:before{content:""}.mi-comment:before{content:""}.mi-comment-bank:before{content:""}.mi-comments-disabled:before{content:""}.mi-commit:before{content:""}.mi-commute:before{content:""}.mi-compare:before{content:""}.mi-compare-arrows:before{content:""}.mi-compass-calibration:before{content:""}.mi-compost:before{content:""}.mi-compress:before{content:""}.mi-computer:before{content:""}.mi-confirmation-num:before{content:""}.mi-confirmation-number:before{content:""}.mi-connect-without-contact:before{content:""}.mi-connected-tv:before{content:""}.mi-connecting-airports:before{content:""}.mi-construction:before{content:""}.mi-contact-emergency:before{content:""}.mi-contact-mail:before{content:""}.mi-contact-page:before{content:""}.mi-contact-phone:before{content:""}.mi-contact-support:before{content:""}.mi-contactless:before{content:""}.mi-contacts:before{content:""}.mi-content-copy:before{content:""}.mi-content-cut:before{content:""}.mi-content-paste:before{content:""}.mi-content-paste-go:before{content:""}.mi-content-paste-off:before{content:""}.mi-content-paste-search:before{content:""}.mi-contrast:before{content:""}.mi-control-camera:before{content:""}.mi-control-point:before{content:""}.mi-control-point-duplicate:before{content:""}.mi-conveyor-belt:before{content:""}.mi-cookie:before{content:""}.mi-copy:before{content:""}.mi-copy-all:before{content:""}.mi-copyright:before{content:""}.mi-coronavirus:before{content:""}.mi-corporate-fare:before{content:""}.mi-cottage:before{content:""}.mi-countertops:before{content:""}.mi-create:before{content:""}.mi-create-new-folder:before{content:""}.mi-credit-card:before{content:""}.mi-credit-card-off:before{content:""}.mi-credit-score:before{content:""}.mi-crib:before{content:""}.mi-crisis-alert:before{content:""}.mi-crop:before{content:""}.mi-crop-16-9:before{content:""}.mi-crop-3-2:before{content:""}.mi-crop-5-4:before{content:""}.mi-crop-7-5:before{content:""}.mi-crop-din:before{content:""}.mi-crop-free:before{content:""}.mi-crop-landscape:before{content:""}.mi-crop-original:before{content:""}.mi-crop-portrait:before{content:""}.mi-crop-rotate:before{content:""}.mi-crop-square:before{content:""}.mi-cruelty-free:before{content:""}.mi-css:before{content:""}.mi-currency-bitcoin:before{content:""}.mi-currency-exchange:before{content:""}.mi-currency-franc:before{content:""}.mi-currency-lira:before{content:""}.mi-currency-pound:before{content:""}.mi-currency-ruble:before{content:""}.mi-currency-rupee:before{content:""}.mi-currency-yen:before{content:""}.mi-currency-yuan:before{content:""}.mi-curtains:before{content:""}.mi-curtains-closed:before{content:""}.mi-cut:before{content:""}.mi-cyclone:before{content:""}.mi-dangerous:before{content:""}.mi-dark-mode:before{content:""}.mi-dashboard:before{content:""}.mi-dashboard-customize:before{content:""}.mi-data-array:before{content:""}.mi-data-exploration:before{content:""}.mi-data-object:before{content:""}.mi-data-saver-off:before{content:""}.mi-data-saver-on:before{content:""}.mi-data-thresholding:before{content:""}.mi-data-usage:before{content:""}.mi-dataset:before{content:""}.mi-dataset-linked:before{content:""}.mi-date-range:before{content:""}.mi-deblur:before{content:""}.mi-deck:before{content:""}.mi-dehaze:before{content:""}.mi-delete:before{content:""}.mi-delete-forever:before{content:""}.mi-delete-outline:before{content:""}.mi-delete-sweep:before{content:""}.mi-delivery-dining:before{content:""}.mi-density-large:before{content:""}.mi-density-medium:before{content:""}.mi-density-small:before{content:""}.mi-departure-board:before{content:""}.mi-description:before{content:""}.mi-deselect:before{content:""}.mi-design-services:before{content:""}.mi-desk:before{content:""}.mi-desktop-access-disabled:before{content:""}.mi-desktop-mac:before{content:""}.mi-desktop-windows:before{content:""}.mi-details:before{content:""}.mi-developer-board:before{content:""}.mi-developer-board-off:before{content:""}.mi-developer-mode:before{content:""}.mi-device-hub:before{content:""}.mi-device-thermostat:before{content:""}.mi-device-unknown:before{content:""}.mi-devices:before{content:""}.mi-devices-fold:before{content:""}.mi-devices-other:before{content:""}.mi-dew-point:before{content:""}.mi-dialer-sip:before{content:""}.mi-dialpad:before{content:""}.mi-diamond:before{content:""}.mi-difference:before{content:""}.mi-dining:before{content:""}.mi-dinner-dining:before{content:""}.mi-directions:before{content:""}.mi-directions-bike:before{content:""}.mi-directions-boat:before{content:""}.mi-directions-boat-filled:before{content:""}.mi-directions-bus:before{content:""}.mi-directions-bus-filled:before{content:""}.mi-directions-car:before{content:""}.mi-directions-car-filled:before{content:""}.mi-directions-ferry:before{content:""}.mi-directions-off:before{content:""}.mi-directions-railway:before{content:""}.mi-directions-railway-filled:before{content:""}.mi-directions-run:before{content:""}.mi-directions-subway:before{content:""}.mi-directions-subway-filled:before{content:""}.mi-directions-train:before{content:""}.mi-directions-transit:before{content:""}.mi-directions-transit-filled:before{content:""}.mi-directions-walk:before{content:""}.mi-dirty-lens:before{content:""}.mi-disabled-by-default:before{content:""}.mi-disabled-visible:before{content:""}.mi-disc-full:before{content:""}.mi-discord:before{content:""}.mi-discount:before{content:""}.mi-display-settings:before{content:""}.mi-diversity-1:before{content:""}.mi-diversity-2:before{content:""}.mi-diversity-3:before{content:""}.mi-dnd-forwardslash:before{content:""}.mi-dns:before{content:""}.mi-do-disturb:before{content:""}.mi-do-disturb-alt:before{content:""}.mi-do-disturb-off:before{content:""}.mi-do-disturb-on:before{content:""}.mi-do-not-disturb:before{content:""}.mi-do-not-disturb-alt:before{content:""}.mi-do-not-disturb-off:before{content:""}.mi-do-not-disturb-on:before{content:""}.mi-do-not-disturb-on-total-silence:before{content:""}.mi-do-not-step:before{content:""}.mi-do-not-touch:before{content:""}.mi-dock:before{content:""}.mi-document-scanner:before{content:""}.mi-domain:before{content:""}.mi-domain-add:before{content:""}.mi-domain-disabled:before{content:""}.mi-domain-verification:before{content:""}.mi-done:before{content:""}.mi-done-all:before{content:""}.mi-done-outline:before{content:""}.mi-donut-large:before{content:""}.mi-donut-small:before{content:""}.mi-door-back:before{content:""}.mi-door-front:before{content:""}.mi-door-sliding:before{content:""}.mi-doorbell:before{content:""}.mi-double-arrow:before{content:""}.mi-downhill-skiing:before{content:""}.mi-download:before{content:""}.mi-download-done:before{content:""}.mi-download-for-offline:before{content:""}.mi-downloading:before{content:""}.mi-drafts:before{content:""}.mi-drag-handle:before{content:""}.mi-drag-indicator:before{content:""}.mi-draw:before{content:""}.mi-drive-eta:before{content:""}.mi-drive-file-move:before{content:""}.mi-drive-file-move-outline:before{content:""}.mi-drive-file-move-rtl:before{content:""}.mi-drive-file-rename-outline:before{content:""}.mi-drive-folder-upload:before{content:""}.mi-dry:before{content:""}.mi-dry-cleaning:before{content:""}.mi-duo:before{content:""}.mi-dvr:before{content:""}.mi-dynamic-feed:before{content:""}.mi-dynamic-form:before{content:""}.mi-e-mobiledata:before{content:""}.mi-earbuds:before{content:""}.mi-earbuds-battery:before{content:""}.mi-east:before{content:""}.mi-eco:before{content:""}.mi-edgesensor-high:before{content:""}.mi-edgesensor-low:before{content:""}.mi-edit:before{content:""}.mi-edit-attributes:before{content:""}.mi-edit-calendar:before{content:""}.mi-edit-document:before{content:""}.mi-edit-location:before{content:""}.mi-edit-location-alt:before{content:""}.mi-edit-note:before{content:""}.mi-edit-notifications:before{content:""}.mi-edit-off:before{content:""}.mi-edit-road:before{content:""}.mi-edit-square:before{content:""}.mi-egg:before{content:""}.mi-egg-alt:before{content:""}.mi-eject:before{content:""}.mi-elderly:before{content:""}.mi-elderly-woman:before{content:""}.mi-electric-bike:before{content:""}.mi-electric-bolt:before{content:""}.mi-electric-car:before{content:""}.mi-electric-meter:before{content:""}.mi-electric-moped:before{content:""}.mi-electric-rickshaw:before{content:""}.mi-electric-scooter:before{content:""}.mi-electrical-services:before{content:""}.mi-elevator:before{content:""}.mi-email:before{content:""}.mi-emergency:before{content:""}.mi-emergency-recording:before{content:""}.mi-emergency-share:before{content:""}.mi-emoji-emotions:before{content:""}.mi-emoji-events:before{content:""}.mi-emoji-flags:before{content:""}.mi-emoji-food-beverage:before{content:""}.mi-emoji-nature:before{content:""}.mi-emoji-objects:before{content:""}.mi-emoji-people:before{content:""}.mi-emoji-symbols:before{content:""}.mi-emoji-transportation:before{content:""}.mi-energy-savings-leaf:before{content:""}.mi-engineering:before{content:""}.mi-enhance-photo-translate:before{content:""}.mi-enhanced-encryption:before{content:""}.mi-equalizer:before{content:""}.mi-error:before{content:""}.mi-error-outline:before{content:""}.mi-escalator:before{content:""}.mi-escalator-warning:before{content:""}.mi-euro:before{content:""}.mi-euro-symbol:before{content:""}.mi-ev-station:before{content:""}.mi-event:before{content:""}.mi-event-available:before{content:""}.mi-event-busy:before{content:""}.mi-event-note:before{content:""}.mi-event-repeat:before{content:""}.mi-event-seat:before{content:""}.mi-exit-to-app:before{content:""}.mi-expand:before{content:""}.mi-expand-circle-down:before{content:""}.mi-expand-less:before{content:""}.mi-expand-more:before{content:""}.mi-explicit:before{content:""}.mi-explore:before{content:""}.mi-explore-off:before{content:""}.mi-exposure:before{content:""}.mi-exposure-minus-1:before{content:""}.mi-exposure-minus-2:before{content:""}.mi-exposure-neg-1:before{content:""}.mi-exposure-neg-2:before{content:""}.mi-exposure-plus-1:before{content:""}.mi-exposure-plus-2:before{content:""}.mi-exposure-zero:before{content:""}.mi-extension:before{content:""}.mi-extension-off:before{content:""}.mi-face:before{content:""}.mi-face-2:before{content:""}.mi-face-3:before{content:""}.mi-face-4:before{content:""}.mi-face-5:before{content:""}.mi-face-6:before{content:""}.mi-face-retouching-natural:before{content:""}.mi-face-retouching-off:before{content:""}.mi-face-unlock:before{content:""}.mi-facebook:before{content:""}.mi-fact-check:before{content:""}.mi-factory:before{content:""}.mi-family-restroom:before{content:""}.mi-fast-forward:before{content:""}.mi-fast-rewind:before{content:""}.mi-fastfood:before{content:""}.mi-favorite:before{content:""}.mi-favorite-border:before{content:""}.mi-favorite-outline:before{content:""}.mi-fax:before{content:""}.mi-featured-play-list:before{content:""}.mi-featured-video:before{content:""}.mi-feed:before{content:""}.mi-feedback:before{content:""}.mi-female:before{content:""}.mi-fence:before{content:""}.mi-festival:before{content:""}.mi-fiber-dvr:before{content:""}.mi-fiber-manual-record:before{content:""}.mi-fiber-new:before{content:""}.mi-fiber-pin:before{content:""}.mi-fiber-smart-record:before{content:""}.mi-file-copy:before{content:""}.mi-file-download:before{content:""}.mi-file-download-done:before{content:""}.mi-file-download-off:before{content:""}.mi-file-open:before{content:""}.mi-file-present:before{content:""}.mi-file-upload:before{content:""}.mi-file-upload-off:before{content:""}.mi-filter:before{content:""}.mi-filter-1:before{content:""}.mi-filter-2:before{content:""}.mi-filter-3:before{content:""}.mi-filter-4:before{content:""}.mi-filter-5:before{content:""}.mi-filter-6:before{content:""}.mi-filter-7:before{content:""}.mi-filter-8:before{content:""}.mi-filter-9:before{content:""}.mi-filter-9-plus:before{content:""}.mi-filter-alt:before{content:""}.mi-filter-alt-off:before{content:""}.mi-filter-b-and-w:before{content:""}.mi-filter-center-focus:before{content:""}.mi-filter-drama:before{content:""}.mi-filter-frames:before{content:""}.mi-filter-hdr:before{content:""}.mi-filter-list:before{content:""}.mi-filter-list-alt:before{content:""}.mi-filter-list-off:before{content:""}.mi-filter-none:before{content:""}.mi-filter-tilt-shift:before{content:""}.mi-filter-vintage:before{content:""}.mi-find-in-page:before{content:""}.mi-find-replace:before{content:""}.mi-fingerprint:before{content:""}.mi-fire-extinguisher:before{content:""}.mi-fire-hydrant:before{content:""}.mi-fire-hydrant-alt:before{content:""}.mi-fire-truck:before{content:""}.mi-fireplace:before{content:""}.mi-first-page:before{content:""}.mi-fit-screen:before{content:""}.mi-fitbit:before{content:""}.mi-fitness-center:before{content:""}.mi-flag:before{content:""}.mi-flag-circle:before{content:""}.mi-flaky:before{content:""}.mi-flare:before{content:""}.mi-flash-auto:before{content:""}.mi-flash-off:before{content:""}.mi-flash-on:before{content:""}.mi-flashlight-off:before{content:""}.mi-flashlight-on:before{content:""}.mi-flatware:before{content:""}.mi-flight:before{content:""}.mi-flight-class:before{content:""}.mi-flight-land:before{content:""}.mi-flight-takeoff:before{content:""}.mi-flip:before{content:""}.mi-flip-camera-android:before{content:""}.mi-flip-camera-ios:before{content:""}.mi-flip-to-back:before{content:""}.mi-flip-to-front:before{content:""}.mi-flood:before{content:""}.mi-flourescent:before{content:""}.mi-fluorescent:before{content:""}.mi-flutter-dash:before{content:""}.mi-fmd-bad:before{content:""}.mi-fmd-good:before{content:""}.mi-foggy:before{content:""}.mi-folder:before{content:""}.mi-folder-copy:before{content:""}.mi-folder-delete:before{content:""}.mi-folder-off:before{content:""}.mi-folder-open:before{content:""}.mi-folder-shared:before{content:""}.mi-folder-special:before{content:""}.mi-folder-zip:before{content:""}.mi-follow-the-signs:before{content:""}.mi-font-download:before{content:""}.mi-font-download-off:before{content:""}.mi-food-bank:before{content:""}.mi-forest:before{content:""}.mi-fork-left:before{content:""}.mi-fork-right:before{content:""}.mi-forklift:before{content:""}.mi-format-align-center:before{content:""}.mi-format-align-justify:before{content:""}.mi-format-align-left:before{content:""}.mi-format-align-right:before{content:""}.mi-format-bold:before{content:""}.mi-format-clear:before{content:""}.mi-format-color-fill:before{content:""}.mi-format-color-reset:before{content:""}.mi-format-color-text:before{content:""}.mi-format-indent-decrease:before{content:""}.mi-format-indent-increase:before{content:""}.mi-format-italic:before{content:""}.mi-format-line-spacing:before{content:""}.mi-format-list-bulleted:before{content:""}.mi-format-list-bulleted-add:before{content:""}.mi-format-list-numbered:before{content:""}.mi-format-list-numbered-rtl:before{content:""}.mi-format-overline:before{content:""}.mi-format-paint:before{content:""}.mi-format-quote:before{content:""}.mi-format-shapes:before{content:""}.mi-format-size:before{content:""}.mi-format-strikethrough:before{content:""}.mi-format-textdirection-l-to-r:before{content:""}.mi-format-textdirection-r-to-l:before{content:""}.mi-format-underline:before{content:""}.mi-format-underlined:before{content:""}.mi-fort:before{content:""}.mi-forum:before{content:""}.mi-forward:before{content:""}.mi-forward-10:before{content:""}.mi-forward-30:before{content:""}.mi-forward-5:before{content:""}.mi-forward-to-inbox:before{content:""}.mi-foundation:before{content:""}.mi-free-breakfast:before{content:""}.mi-free-cancellation:before{content:""}.mi-front-hand:before{content:""}.mi-front-loader:before{content:""}.mi-fullscreen:before{content:""}.mi-fullscreen-exit:before{content:""}.mi-functions:before{content:""}.mi-g-mobiledata:before{content:""}.mi-g-translate:before{content:""}.mi-gamepad:before{content:""}.mi-games:before{content:""}.mi-garage:before{content:""}.mi-gas-meter:before{content:""}.mi-gavel:before{content:""}.mi-generating-tokens:before{content:""}.mi-gesture:before{content:""}.mi-get-app:before{content:""}.mi-gif:before{content:""}.mi-gif-box:before{content:""}.mi-girl:before{content:""}.mi-gite:before{content:""}.mi-goat:before{content:"􏿽"}.mi-golf-course:before{content:""}.mi-gpp-bad:before{content:""}.mi-gpp-good:before{content:""}.mi-gpp-maybe:before{content:""}.mi-gps-fixed:before{content:""}.mi-gps-not-fixed:before{content:""}.mi-gps-off:before{content:""}.mi-grade:before{content:""}.mi-gradient:before{content:""}.mi-grading:before{content:""}.mi-grain:before{content:""}.mi-graphic-eq:before{content:""}.mi-grass:before{content:""}.mi-grid-3x3:before{content:""}.mi-grid-4x4:before{content:""}.mi-grid-goldenratio:before{content:""}.mi-grid-off:before{content:""}.mi-grid-on:before{content:""}.mi-grid-view:before{content:""}.mi-group:before{content:""}.mi-group-add:before{content:""}.mi-group-off:before{content:""}.mi-group-remove:before{content:""}.mi-group-work:before{content:""}.mi-groups:before{content:""}.mi-groups-2:before{content:""}.mi-groups-3:before{content:""}.mi-h-mobiledata:before{content:""}.mi-h-plus-mobiledata:before{content:""}.mi-hail:before{content:""}.mi-handshake:before{content:""}.mi-handyman:before{content:""}.mi-hardware:before{content:""}.mi-hd:before{content:""}.mi-hdr-auto:before{content:""}.mi-hdr-auto-select:before{content:""}.mi-hdr-enhanced-select:before{content:""}.mi-hdr-off:before{content:""}.mi-hdr-off-select:before{content:""}.mi-hdr-on:before{content:""}.mi-hdr-on-select:before{content:""}.mi-hdr-plus:before{content:""}.mi-hdr-strong:before{content:""}.mi-hdr-weak:before{content:""}.mi-headphones:before{content:""}.mi-headphones-battery:before{content:""}.mi-headset:before{content:""}.mi-headset-mic:before{content:""}.mi-headset-off:before{content:""}.mi-healing:before{content:""}.mi-health-and-safety:before{content:""}.mi-hearing:before{content:""}.mi-hearing-disabled:before{content:""}.mi-heart-broken:before{content:""}.mi-heat-pump:before{content:""}.mi-height:before{content:""}.mi-help:before{content:""}.mi-help-center:before{content:""}.mi-help-outline:before{content:""}.mi-hevc:before{content:""}.mi-hexagon:before{content:""}.mi-hide-image:before{content:""}.mi-hide-source:before{content:""}.mi-high-quality:before{content:""}.mi-highlight:before{content:""}.mi-highlight-alt:before{content:""}.mi-highlight-off:before{content:""}.mi-highlight-remove:before{content:""}.mi-hiking:before{content:""}.mi-history:before{content:""}.mi-history-edu:before{content:""}.mi-history-toggle-off:before{content:""}.mi-hive:before{content:""}.mi-hls:before{content:""}.mi-hls-off:before{content:""}.mi-holiday-village:before{content:""}.mi-home:before{content:""}.mi-home-filled:before{content:""}.mi-home-max:before{content:""}.mi-home-mini:before{content:""}.mi-home-repair-service:before{content:""}.mi-home-work:before{content:""}.mi-horizontal-distribute:before{content:""}.mi-horizontal-rule:before{content:""}.mi-horizontal-split:before{content:""}.mi-hot-tub:before{content:""}.mi-hotel:before{content:""}.mi-hotel-class:before{content:""}.mi-hourglass-bottom:before{content:""}.mi-hourglass-disabled:before{content:""}.mi-hourglass-empty:before{content:""}.mi-hourglass-full:before{content:""}.mi-hourglass-top:before{content:""}.mi-house:before{content:""}.mi-house-siding:before{content:""}.mi-houseboat:before{content:""}.mi-how-to-reg:before{content:""}.mi-how-to-vote:before{content:""}.mi-html:before{content:""}.mi-http:before{content:""}.mi-https:before{content:""}.mi-hub:before{content:""}.mi-hvac:before{content:""}.mi-ice-skating:before{content:""}.mi-icecream:before{content:""}.mi-image:before{content:""}.mi-image-aspect-ratio:before{content:""}.mi-image-not-supported:before{content:""}.mi-image-search:before{content:""}.mi-imagesearch-roller:before{content:""}.mi-import-contacts:before{content:""}.mi-import-export:before{content:""}.mi-important-devices:before{content:""}.mi-inbox:before{content:""}.mi-incomplete-circle:before{content:""}.mi-indeterminate-check-box:before{content:""}.mi-info:before{content:""}.mi-info-outline:before{content:""}.mi-input:before{content:""}.mi-insert-chart:before{content:""}.mi-insert-chart-outlined:before{content:""}.mi-insert-comment:before{content:""}.mi-insert-drive-file:before{content:""}.mi-insert-emoticon:before{content:""}.mi-insert-invitation:before{content:""}.mi-insert-link:before{content:""}.mi-insert-page-break:before{content:""}.mi-insert-photo:before{content:""}.mi-insights:before{content:""}.mi-install-desktop:before{content:""}.mi-install-mobile:before{content:""}.mi-integration-instructions:before{content:""}.mi-interests:before{content:""}.mi-interpreter-mode:before{content:""}.mi-inventory:before{content:""}.mi-inventory-2:before{content:""}.mi-invert-colors:before{content:""}.mi-invert-colors-off:before{content:""}.mi-invert-colors-on:before{content:""}.mi-ios-share:before{content:""}.mi-iron:before{content:""}.mi-iso:before{content:""}.mi-javascript:before{content:""}.mi-join-full:before{content:""}.mi-join-inner:before{content:""}.mi-join-left:before{content:""}.mi-join-right:before{content:""}.mi-kayaking:before{content:""}.mi-kebab-dining:before{content:""}.mi-key:before{content:""}.mi-key-off:before{content:""}.mi-keyboard:before{content:""}.mi-keyboard-alt:before{content:""}.mi-keyboard-arrow-down:before{content:""}.mi-keyboard-arrow-left:before{content:""}.mi-keyboard-arrow-right:before{content:""}.mi-keyboard-arrow-up:before{content:""}.mi-keyboard-backspace:before{content:""}.mi-keyboard-capslock:before{content:""}.mi-keyboard-command:before{content:""}.mi-keyboard-command-key:before{content:""}.mi-keyboard-control:before{content:""}.mi-keyboard-control-key:before{content:""}.mi-keyboard-double-arrow-down:before{content:""}.mi-keyboard-double-arrow-left:before{content:""}.mi-keyboard-double-arrow-right:before{content:""}.mi-keyboard-double-arrow-up:before{content:""}.mi-keyboard-hide:before{content:""}.mi-keyboard-option:before{content:""}.mi-keyboard-option-key:before{content:""}.mi-keyboard-return:before{content:""}.mi-keyboard-tab:before{content:""}.mi-keyboard-voice:before{content:""}.mi-king-bed:before{content:""}.mi-kitchen:before{content:""}.mi-kitesurfing:before{content:""}.mi-label:before{content:""}.mi-label-important:before{content:""}.mi-label-important-outline:before{content:""}.mi-label-off:before{content:""}.mi-label-outline:before{content:""}.mi-lan:before{content:""}.mi-landscape:before{content:""}.mi-landslide:before{content:""}.mi-language:before{content:""}.mi-laptop:before{content:""}.mi-laptop-chromebook:before{content:""}.mi-laptop-mac:before{content:""}.mi-laptop-windows:before{content:""}.mi-last-page:before{content:""}.mi-launch:before{content:""}.mi-layers:before{content:""}.mi-layers-clear:before{content:""}.mi-leaderboard:before{content:""}.mi-leak-add:before{content:""}.mi-leak-remove:before{content:""}.mi-leave-bags-at-home:before{content:""}.mi-legend-toggle:before{content:""}.mi-lens:before{content:""}.mi-lens-blur:before{content:""}.mi-library-add:before{content:""}.mi-library-add-check:before{content:""}.mi-library-books:before{content:""}.mi-library-music:before{content:""}.mi-light:before{content:""}.mi-light-mode:before{content:""}.mi-lightbulb:before{content:""}.mi-lightbulb-circle:before{content:""}.mi-lightbulb-outline:before{content:""}.mi-line-axis:before{content:""}.mi-line-style:before{content:""}.mi-line-weight:before{content:""}.mi-linear-scale:before{content:""}.mi-link:before{content:""}.mi-link-off:before{content:""}.mi-linked-camera:before{content:""}.mi-liquor:before{content:""}.mi-list:before{content:""}.mi-list-alt:before{content:""}.mi-live-help:before{content:""}.mi-live-tv:before{content:""}.mi-living:before{content:""}.mi-local-activity:before{content:""}.mi-local-airport:before{content:""}.mi-local-atm:before{content:""}.mi-local-attraction:before{content:""}.mi-local-bar:before{content:""}.mi-local-cafe:before{content:""}.mi-local-car-wash:before{content:""}.mi-local-convenience-store:before{content:""}.mi-local-dining:before{content:""}.mi-local-drink:before{content:""}.mi-local-fire-department:before{content:""}.mi-local-florist:before{content:""}.mi-local-gas-station:before{content:""}.mi-local-grocery-store:before{content:""}.mi-local-hospital:before{content:""}.mi-local-hotel:before{content:""}.mi-local-laundry-service:before{content:""}.mi-local-library:before{content:""}.mi-local-mall:before{content:""}.mi-local-movies:before{content:""}.mi-local-offer:before{content:""}.mi-local-parking:before{content:""}.mi-local-pharmacy:before{content:""}.mi-local-phone:before{content:""}.mi-local-pizza:before{content:""}.mi-local-play:before{content:""}.mi-local-police:before{content:""}.mi-local-post-office:before{content:""}.mi-local-print-shop:before{content:""}.mi-local-printshop:before{content:""}.mi-local-restaurant:before{content:""}.mi-local-see:before{content:""}.mi-local-shipping:before{content:""}.mi-local-taxi:before{content:""}.mi-location-city:before{content:""}.mi-location-disabled:before{content:""}.mi-location-history:before{content:""}.mi-location-off:before{content:""}.mi-location-on:before{content:""}.mi-location-pin:before{content:""}.mi-location-searching:before{content:""}.mi-lock:before{content:""}.mi-lock-clock:before{content:""}.mi-lock-open:before{content:""}.mi-lock-outline:before{content:""}.mi-lock-person:before{content:""}.mi-lock-reset:before{content:""}.mi-login:before{content:""}.mi-logo-dev:before{content:""}.mi-logout:before{content:""}.mi-looks:before{content:""}.mi-looks-3:before{content:""}.mi-looks-4:before{content:""}.mi-looks-5:before{content:""}.mi-looks-6:before{content:""}.mi-looks-one:before{content:""}.mi-looks-two:before{content:""}.mi-loop:before{content:""}.mi-loupe:before{content:""}.mi-low-priority:before{content:""}.mi-loyalty:before{content:""}.mi-lte-mobiledata:before{content:""}.mi-lte-plus-mobiledata:before{content:""}.mi-luggage:before{content:""}.mi-lunch-dining:before{content:""}.mi-lyrics:before{content:""}.mi-macro-off:before{content:""}.mi-mail:before{content:""}.mi-mail-lock:before{content:""}.mi-mail-outline:before{content:""}.mi-male:before{content:""}.mi-man:before{content:""}.mi-man-2:before{content:""}.mi-man-3:before{content:""}.mi-man-4:before{content:""}.mi-manage-accounts:before{content:""}.mi-manage-history:before{content:""}.mi-manage-search:before{content:""}.mi-map:before{content:""}.mi-maps-home-work:before{content:""}.mi-maps-ugc:before{content:""}.mi-margin:before{content:""}.mi-mark-as-unread:before{content:""}.mi-mark-chat-read:before{content:""}.mi-mark-chat-unread:before{content:""}.mi-mark-email-read:before{content:""}.mi-mark-email-unread:before{content:""}.mi-mark-unread-chat-alt:before{content:""}.mi-markunread:before{content:""}.mi-markunread-mailbox:before{content:""}.mi-masks:before{content:""}.mi-maximize:before{content:""}.mi-media-bluetooth-off:before{content:""}.mi-media-bluetooth-on:before{content:""}.mi-mediation:before{content:""}.mi-medical-information:before{content:""}.mi-medical-services:before{content:""}.mi-medication:before{content:""}.mi-medication-liquid:before{content:""}.mi-meeting-room:before{content:""}.mi-memory:before{content:""}.mi-menu:before{content:""}.mi-menu-book:before{content:""}.mi-menu-open:before{content:""}.mi-merge:before{content:""}.mi-merge-type:before{content:""}.mi-message:before{content:""}.mi-messenger:before{content:""}.mi-messenger-outline:before{content:""}.mi-mic:before{content:""}.mi-mic-external-off:before{content:""}.mi-mic-external-on:before{content:""}.mi-mic-none:before{content:""}.mi-mic-off:before{content:""}.mi-microwave:before{content:""}.mi-military-tech:before{content:""}.mi-minimize:before{content:""}.mi-minor-crash:before{content:""}.mi-miscellaneous-services:before{content:""}.mi-missed-video-call:before{content:""}.mi-mms:before{content:""}.mi-mobile-friendly:before{content:""}.mi-mobile-off:before{content:""}.mi-mobile-screen-share:before{content:""}.mi-mobiledata-off:before{content:""}.mi-mode:before{content:""}.mi-mode-comment:before{content:""}.mi-mode-edit:before{content:""}.mi-mode-edit-outline:before{content:""}.mi-mode-fan-off:before{content:""}.mi-mode-night:before{content:""}.mi-mode-of-travel:before{content:""}.mi-mode-standby:before{content:""}.mi-model-training:before{content:""}.mi-monetization-on:before{content:""}.mi-money:before{content:""}.mi-money-off:before{content:""}.mi-money-off-csred:before{content:""}.mi-monitor:before{content:""}.mi-monitor-heart:before{content:""}.mi-monitor-weight:before{content:""}.mi-monochrome-photos:before{content:""}.mi-mood:before{content:""}.mi-mood-bad:before{content:""}.mi-moped:before{content:""}.mi-more:before{content:""}.mi-more-horiz:before{content:""}.mi-more-time:before{content:""}.mi-more-vert:before{content:""}.mi-mosque:before{content:""}.mi-motion-photos-auto:before{content:""}.mi-motion-photos-off:before{content:""}.mi-motion-photos-on:before{content:""}.mi-motion-photos-pause:before{content:""}.mi-motion-photos-paused:before{content:""}.mi-motorcycle:before{content:""}.mi-mouse:before{content:""}.mi-move-down:before{content:""}.mi-move-to-inbox:before{content:""}.mi-move-up:before{content:""}.mi-movie:before{content:""}.mi-movie-creation:before{content:""}.mi-movie-edit:before{content:""}.mi-movie-filter:before{content:""}.mi-moving:before{content:""}.mi-mp:before{content:""}.mi-multiline-chart:before{content:""}.mi-multiple-stop:before{content:""}.mi-multitrack-audio:before{content:""}.mi-museum:before{content:""}.mi-music-note:before{content:""}.mi-music-off:before{content:""}.mi-music-video:before{content:""}.mi-my-library-add:before{content:""}.mi-my-library-books:before{content:""}.mi-my-library-music:before{content:""}.mi-my-location:before{content:""}.mi-nat:before{content:""}.mi-nature:before{content:""}.mi-nature-people:before{content:""}.mi-navigate-before:before{content:""}.mi-navigate-next:before{content:""}.mi-navigation:before{content:""}.mi-near-me:before{content:""}.mi-near-me-disabled:before{content:""}.mi-nearby-error:before{content:""}.mi-nearby-off:before{content:""}.mi-nest-cam-wired-stand:before{content:""}.mi-network-cell:before{content:""}.mi-network-check:before{content:""}.mi-network-locked:before{content:""}.mi-network-ping:before{content:""}.mi-network-wifi:before{content:""}.mi-network-wifi-1-bar:before{content:""}.mi-network-wifi-2-bar:before{content:""}.mi-network-wifi-3-bar:before{content:""}.mi-new-label:before{content:""}.mi-new-releases:before{content:""}.mi-newspaper:before{content:""}.mi-next-plan:before{content:""}.mi-next-week:before{content:""}.mi-nfc:before{content:""}.mi-night-shelter:before{content:""}.mi-nightlife:before{content:""}.mi-nightlight:before{content:""}.mi-nightlight-round:before{content:""}.mi-nights-stay:before{content:""}.mi-no-accounts:before{content:""}.mi-no-adult-content:before{content:""}.mi-no-backpack:before{content:""}.mi-no-cell:before{content:""}.mi-no-crash:before{content:""}.mi-no-drinks:before{content:""}.mi-no-encryption:before{content:""}.mi-no-encryption-gmailerrorred:before{content:""}.mi-no-flash:before{content:""}.mi-no-food:before{content:""}.mi-no-luggage:before{content:""}.mi-no-meals:before{content:""}.mi-no-meals-ouline:before{content:""}.mi-no-meeting-room:before{content:""}.mi-no-photography:before{content:""}.mi-no-sim:before{content:""}.mi-no-stroller:before{content:""}.mi-no-transfer:before{content:""}.mi-noise-aware:before{content:""}.mi-noise-control-off:before{content:""}.mi-nordic-walking:before{content:""}.mi-north:before{content:""}.mi-north-east:before{content:""}.mi-north-west:before{content:""}.mi-not-accessible:before{content:""}.mi-not-interested:before{content:""}.mi-not-listed-location:before{content:""}.mi-not-started:before{content:""}.mi-note:before{content:""}.mi-note-add:before{content:""}.mi-note-alt:before{content:""}.mi-notes:before{content:""}.mi-notification-add:before{content:""}.mi-notification-important:before{content:""}.mi-notifications:before{content:""}.mi-notifications-active:before{content:""}.mi-notifications-none:before{content:""}.mi-notifications-off:before{content:""}.mi-notifications-on:before{content:""}.mi-notifications-paused:before{content:""}.mi-now-wallpaper:before{content:""}.mi-now-widgets:before{content:""}.mi-numbers:before{content:""}.mi-offline-bolt:before{content:""}.mi-offline-pin:before{content:""}.mi-offline-share:before{content:""}.mi-oil-barrel:before{content:""}.mi-on-device-training:before{content:""}.mi-ondemand-video:before{content:""}.mi-online-prediction:before{content:""}.mi-opacity:before{content:""}.mi-open-in-browser:before{content:""}.mi-open-in-full:before{content:""}.mi-open-in-new:before{content:""}.mi-open-in-new-off:before{content:""}.mi-open-with:before{content:""}.mi-other-houses:before{content:""}.mi-outbond:before{content:""}.mi-outbound:before{content:""}.mi-outbox:before{content:""}.mi-outdoor-grill:before{content:""}.mi-outgoing-mail:before{content:""}.mi-outlet:before{content:""}.mi-outlined-flag:before{content:""}.mi-output:before{content:""}.mi-padding:before{content:""}.mi-pages:before{content:""}.mi-pageview:before{content:""}.mi-paid:before{content:""}.mi-palette:before{content:""}.mi-pallet:before{content:""}.mi-pan-tool:before{content:""}.mi-pan-tool-alt:before{content:""}.mi-panorama:before{content:""}.mi-panorama-fish-eye:before{content:""}.mi-panorama-fisheye:before{content:""}.mi-panorama-horizontal:before{content:""}.mi-panorama-horizontal-select:before{content:""}.mi-panorama-photosphere:before{content:""}.mi-panorama-photosphere-select:before{content:""}.mi-panorama-vertical:before{content:""}.mi-panorama-vertical-select:before{content:""}.mi-panorama-wide-angle:before{content:""}.mi-panorama-wide-angle-select:before{content:""}.mi-paragliding:before{content:""}.mi-park:before{content:""}.mi-party-mode:before{content:""}.mi-password:before{content:""}.mi-paste:before{content:""}.mi-pattern:before{content:""}.mi-pause:before{content:""}.mi-pause-circle:before{content:""}.mi-pause-circle-filled:before{content:""}.mi-pause-circle-outline:before{content:""}.mi-pause-presentation:before{content:""}.mi-payment:before{content:""}.mi-payments:before{content:""}.mi-paypal:before{content:""}.mi-pedal-bike:before{content:""}.mi-pending:before{content:""}.mi-pending-actions:before{content:""}.mi-pentagon:before{content:""}.mi-people:before{content:""}.mi-people-alt:before{content:""}.mi-people-outline:before{content:""}.mi-percent:before{content:""}.mi-perm-camera-mic:before{content:""}.mi-perm-contact-cal:before{content:""}.mi-perm-contact-calendar:before{content:""}.mi-perm-data-setting:before{content:""}.mi-perm-device-info:before{content:""}.mi-perm-device-information:before{content:""}.mi-perm-identity:before{content:""}.mi-perm-media:before{content:""}.mi-perm-phone-msg:before{content:""}.mi-perm-scan-wifi:before{content:""}.mi-person:before{content:""}.mi-person-2:before{content:""}.mi-person-3:before{content:""}.mi-person-4:before{content:""}.mi-person-add:before{content:""}.mi-person-add-alt:before{content:""}.mi-person-add-alt-1:before{content:""}.mi-person-add-disabled:before{content:""}.mi-person-off:before{content:""}.mi-person-outline:before{content:""}.mi-person-pin:before{content:""}.mi-person-pin-circle:before{content:""}.mi-person-remove:before{content:""}.mi-person-remove-alt-1:before{content:""}.mi-person-search:before{content:""}.mi-personal-injury:before{content:""}.mi-personal-video:before{content:""}.mi-pest-control:before{content:""}.mi-pest-control-rodent:before{content:""}.mi-pets:before{content:""}.mi-phishing:before{content:""}.mi-phone:before{content:""}.mi-phone-android:before{content:""}.mi-phone-bluetooth-speaker:before{content:""}.mi-phone-callback:before{content:""}.mi-phone-disabled:before{content:""}.mi-phone-enabled:before{content:""}.mi-phone-forwarded:before{content:""}.mi-phone-in-talk:before{content:""}.mi-phone-iphone:before{content:""}.mi-phone-locked:before{content:""}.mi-phone-missed:before{content:""}.mi-phone-paused:before{content:""}.mi-phonelink:before{content:""}.mi-phonelink-erase:before{content:""}.mi-phonelink-lock:before{content:""}.mi-phonelink-off:before{content:""}.mi-phonelink-ring:before{content:""}.mi-phonelink-setup:before{content:""}.mi-photo:before{content:""}.mi-photo-album:before{content:""}.mi-photo-camera:before{content:""}.mi-photo-camera-back:before{content:""}.mi-photo-camera-front:before{content:""}.mi-photo-filter:before{content:""}.mi-photo-library:before{content:""}.mi-photo-size-select-actual:before{content:""}.mi-photo-size-select-large:before{content:""}.mi-photo-size-select-small:before{content:""}.mi-php:before{content:""}.mi-piano:before{content:""}.mi-piano-off:before{content:""}.mi-picture-as-pdf:before{content:""}.mi-picture-in-picture:before{content:""}.mi-picture-in-picture-alt:before{content:""}.mi-pie-chart:before{content:""}.mi-pie-chart-outline:before{content:""}.mi-pie-chart-outlined:before{content:""}.mi-pin:before{content:""}.mi-pin-drop:before{content:""}.mi-pin-end:before{content:""}.mi-pin-invoke:before{content:""}.mi-pinch:before{content:""}.mi-pivot-table-chart:before{content:""}.mi-pix:before{content:""}.mi-place:before{content:""}.mi-plagiarism:before{content:""}.mi-play-arrow:before{content:""}.mi-play-circle:before{content:""}.mi-play-circle-fill:before{content:""}.mi-play-circle-filled:before{content:""}.mi-play-circle-outline:before{content:""}.mi-play-disabled:before{content:""}.mi-play-for-work:before{content:""}.mi-play-lesson:before{content:""}.mi-playlist-add:before{content:""}.mi-playlist-add-check:before{content:""}.mi-playlist-add-check-circle:before{content:""}.mi-playlist-add-circle:before{content:""}.mi-playlist-play:before{content:""}.mi-playlist-remove:before{content:""}.mi-plumbing:before{content:""}.mi-plus-one:before{content:""}.mi-podcasts:before{content:""}.mi-point-of-sale:before{content:""}.mi-policy:before{content:""}.mi-poll:before{content:""}.mi-polyline:before{content:""}.mi-polymer:before{content:""}.mi-pool:before{content:""}.mi-portable-wifi-off:before{content:""}.mi-portrait:before{content:""}.mi-post-add:before{content:""}.mi-power:before{content:""}.mi-power-input:before{content:""}.mi-power-off:before{content:""}.mi-power-settings-new:before{content:""}.mi-precision-manufacturing:before{content:""}.mi-pregnant-woman:before{content:""}.mi-present-to-all:before{content:""}.mi-preview:before{content:""}.mi-price-change:before{content:""}.mi-price-check:before{content:""}.mi-print:before{content:""}.mi-print-disabled:before{content:""}.mi-priority-high:before{content:""}.mi-privacy-tip:before{content:""}.mi-private-connectivity:before{content:""}.mi-production-quantity-limits:before{content:""}.mi-propane:before{content:""}.mi-propane-tank:before{content:""}.mi-psychology:before{content:""}.mi-psychology-alt:before{content:""}.mi-public:before{content:""}.mi-public-off:before{content:""}.mi-publish:before{content:""}.mi-published-with-changes:before{content:""}.mi-punch-clock:before{content:""}.mi-push-pin:before{content:""}.mi-qr-code:before{content:""}.mi-qr-code-2:before{content:""}.mi-qr-code-scanner:before{content:""}.mi-query-builder:before{content:""}.mi-query-stats:before{content:""}.mi-question-answer:before{content:""}.mi-question-mark:before{content:""}.mi-queue:before{content:""}.mi-queue-music:before{content:""}.mi-queue-play-next:before{content:""}.mi-quick-contacts-dialer:before{content:""}.mi-quick-contacts-mail:before{content:""}.mi-quickreply:before{content:""}.mi-quiz:before{content:""}.mi-quora:before{content:""}.mi-r-mobiledata:before{content:""}.mi-radar:before{content:""}.mi-radio:before{content:""}.mi-radio-button-checked:before{content:""}.mi-radio-button-off:before{content:""}.mi-radio-button-on:before{content:""}.mi-radio-button-unchecked:before{content:""}.mi-railway-alert:before{content:""}.mi-ramen-dining:before{content:""}.mi-ramp-left:before{content:""}.mi-ramp-right:before{content:""}.mi-rate-review:before{content:""}.mi-raw-off:before{content:""}.mi-raw-on:before{content:""}.mi-read-more:before{content:""}.mi-real-estate-agent:before{content:""}.mi-rebase-edit:before{content:""}.mi-receipt:before{content:""}.mi-receipt-long:before{content:""}.mi-recent-actors:before{content:""}.mi-recommend:before{content:""}.mi-record-voice-over:before{content:""}.mi-rectangle:before{content:""}.mi-recycling:before{content:""}.mi-reddit:before{content:""}.mi-redeem:before{content:""}.mi-redo:before{content:""}.mi-reduce-capacity:before{content:""}.mi-refresh:before{content:""}.mi-remember-me:before{content:""}.mi-remove:before{content:""}.mi-remove-circle:before{content:""}.mi-remove-circle-outline:before{content:""}.mi-remove-done:before{content:""}.mi-remove-from-queue:before{content:""}.mi-remove-moderator:before{content:""}.mi-remove-red-eye:before{content:""}.mi-remove-road:before{content:""}.mi-remove-shopping-cart:before{content:""}.mi-reorder:before{content:""}.mi-repartition:before{content:""}.mi-repeat:before{content:""}.mi-repeat-on:before{content:""}.mi-repeat-one:before{content:""}.mi-repeat-one-on:before{content:""}.mi-replay:before{content:""}.mi-replay-10:before{content:""}.mi-replay-30:before{content:""}.mi-replay-5:before{content:""}.mi-replay-circle-filled:before{content:""}.mi-reply:before{content:""}.mi-reply-all:before{content:""}.mi-report:before{content:""}.mi-report-gmailerrorred:before{content:""}.mi-report-off:before{content:""}.mi-report-problem:before{content:""}.mi-request-page:before{content:""}.mi-request-quote:before{content:""}.mi-reset-tv:before{content:""}.mi-restart-alt:before{content:""}.mi-restaurant:before{content:""}.mi-restaurant-menu:before{content:""}.mi-restore:before{content:""}.mi-restore-from-trash:before{content:""}.mi-restore-page:before{content:""}.mi-reviews:before{content:""}.mi-rice-bowl:before{content:""}.mi-ring-volume:before{content:""}.mi-rocket:before{content:""}.mi-rocket-launch:before{content:""}.mi-roller-shades:before{content:""}.mi-roller-shades-closed:before{content:""}.mi-roller-skating:before{content:""}.mi-roofing:before{content:""}.mi-room:before{content:""}.mi-room-preferences:before{content:""}.mi-room-service:before{content:""}.mi-rotate-90-degrees-ccw:before{content:""}.mi-rotate-90-degrees-cw:before{content:""}.mi-rotate-left:before{content:""}.mi-rotate-right:before{content:""}.mi-roundabout-left:before{content:""}.mi-roundabout-right:before{content:""}.mi-rounded-corner:before{content:""}.mi-route:before{content:""}.mi-router:before{content:""}.mi-rowing:before{content:""}.mi-rss-feed:before{content:""}.mi-rsvp:before{content:""}.mi-rtt:before{content:""}.mi-rule:before{content:""}.mi-rule-folder:before{content:""}.mi-run-circle:before{content:""}.mi-running-with-errors:before{content:""}.mi-rv-hookup:before{content:""}.mi-safety-check:before{content:""}.mi-safety-divider:before{content:""}.mi-sailing:before{content:""}.mi-sanitizer:before{content:""}.mi-satellite:before{content:""}.mi-satellite-alt:before{content:""}.mi-save:before{content:""}.mi-save-alt:before{content:""}.mi-save-as:before{content:""}.mi-saved-search:before{content:""}.mi-savings:before{content:""}.mi-scale:before{content:""}.mi-scanner:before{content:""}.mi-scatter-plot:before{content:""}.mi-schedule:before{content:""}.mi-schedule-send:before{content:""}.mi-schema:before{content:""}.mi-school:before{content:""}.mi-science:before{content:""}.mi-score:before{content:""}.mi-scoreboard:before{content:""}.mi-screen-lock-landscape:before{content:""}.mi-screen-lock-portrait:before{content:""}.mi-screen-lock-rotation:before{content:""}.mi-screen-rotation:before{content:""}.mi-screen-rotation-alt:before{content:""}.mi-screen-search-desktop:before{content:""}.mi-screen-share:before{content:""}.mi-screenshot:before{content:""}.mi-screenshot-monitor:before{content:""}.mi-scuba-diving:before{content:""}.mi-sd:before{content:""}.mi-sd-card:before{content:""}.mi-sd-card-alert:before{content:""}.mi-sd-storage:before{content:""}.mi-search:before{content:""}.mi-search-off:before{content:""}.mi-security:before{content:""}.mi-security-update:before{content:""}.mi-security-update-good:before{content:""}.mi-security-update-warning:before{content:""}.mi-segment:before{content:""}.mi-select-all:before{content:""}.mi-self-improvement:before{content:""}.mi-sell:before{content:""}.mi-send:before{content:""}.mi-send-and-archive:before{content:""}.mi-send-time-extension:before{content:""}.mi-send-to-mobile:before{content:""}.mi-sensor-door:before{content:""}.mi-sensor-occupied:before{content:""}.mi-sensor-window:before{content:""}.mi-sensors:before{content:""}.mi-sensors-off:before{content:""}.mi-sentiment-dissatisfied:before{content:""}.mi-sentiment-neutral:before{content:""}.mi-sentiment-satisfied:before{content:""}.mi-sentiment-satisfied-alt:before{content:""}.mi-sentiment-very-dissatisfied:before{content:""}.mi-sentiment-very-satisfied:before{content:""}.mi-set-meal:before{content:""}.mi-settings:before{content:""}.mi-settings-accessibility:before{content:""}.mi-settings-applications:before{content:""}.mi-settings-backup-restore:before{content:""}.mi-settings-bluetooth:before{content:""}.mi-settings-brightness:before{content:""}.mi-settings-cell:before{content:""}.mi-settings-display:before{content:""}.mi-settings-ethernet:before{content:""}.mi-settings-input-antenna:before{content:""}.mi-settings-input-component:before{content:""}.mi-settings-input-composite:before{content:""}.mi-settings-input-hdmi:before{content:""}.mi-settings-input-svideo:before{content:""}.mi-settings-overscan:before{content:""}.mi-settings-phone:before{content:""}.mi-settings-power:before{content:""}.mi-settings-remote:before{content:""}.mi-settings-suggest:before{content:""}.mi-settings-system-daydream:before{content:""}.mi-settings-voice:before{content:""}.mi-severe-cold:before{content:""}.mi-shape-line:before{content:""}.mi-share:before{content:""}.mi-share-arrival-time:before{content:""}.mi-share-location:before{content:""}.mi-shelves:before{content:""}.mi-shield:before{content:""}.mi-shield-moon:before{content:""}.mi-shop:before{content:""}.mi-shop-2:before{content:""}.mi-shop-two:before{content:""}.mi-shopify:before{content:""}.mi-shopping-bag:before{content:""}.mi-shopping-basket:before{content:""}.mi-shopping-cart:before{content:""}.mi-shopping-cart-checkout:before{content:""}.mi-short-text:before{content:""}.mi-shortcut:before{content:""}.mi-show-chart:before{content:""}.mi-shower:before{content:""}.mi-shuffle:before{content:""}.mi-shuffle-on:before{content:""}.mi-shutter-speed:before{content:""}.mi-sick:before{content:""}.mi-sign-language:before{content:""}.mi-signal-cellular-0-bar:before{content:""}.mi-signal-cellular-1-bar:before{content:""}.mi-signal-cellular-2-bar:before{content:""}.mi-signal-cellular-3-bar:before{content:""}.mi-signal-cellular-4-bar:before{content:""}.mi-signal-cellular-alt:before{content:""}.mi-signal-cellular-alt-1-bar:before{content:""}.mi-signal-cellular-alt-2-bar:before{content:""}.mi-signal-cellular-connected-no-internet-0-bar:before{content:""}.mi-signal-cellular-connected-no-internet-1-bar:before{content:""}.mi-signal-cellular-connected-no-internet-2-bar:before{content:""}.mi-signal-cellular-connected-no-internet-3-bar:before{content:""}.mi-signal-cellular-connected-no-internet-4-bar:before{content:""}.mi-signal-cellular-no-sim:before{content:""}.mi-signal-cellular-nodata:before{content:""}.mi-signal-cellular-null:before{content:""}.mi-signal-cellular-off:before{content:""}.mi-signal-wifi-0-bar:before{content:""}.mi-signal-wifi-1-bar:before{content:""}.mi-signal-wifi-1-bar-lock:before{content:""}.mi-signal-wifi-2-bar:before{content:""}.mi-signal-wifi-2-bar-lock:before{content:""}.mi-signal-wifi-3-bar:before{content:""}.mi-signal-wifi-3-bar-lock:before{content:""}.mi-signal-wifi-4-bar:before{content:""}.mi-signal-wifi-4-bar-lock:before{content:""}.mi-signal-wifi-bad:before{content:""}.mi-signal-wifi-connected-no-internet-0:before{content:""}.mi-signal-wifi-connected-no-internet-1:before{content:""}.mi-signal-wifi-connected-no-internet-2:before{content:""}.mi-signal-wifi-connected-no-internet-3:before{content:""}.mi-signal-wifi-connected-no-internet-4:before{content:""}.mi-signal-wifi-off:before{content:""}.mi-signal-wifi-statusbar-1-bar:before{content:""}.mi-signal-wifi-statusbar-2-bar:before{content:""}.mi-signal-wifi-statusbar-3-bar:before{content:""}.mi-signal-wifi-statusbar-4-bar:before{content:""}.mi-signal-wifi-statusbar-connected-no-internet:before{content:""}.mi-signal-wifi-statusbar-connected-no-internet-1:before{content:""}.mi-signal-wifi-statusbar-connected-no-internet-2:before{content:""}.mi-signal-wifi-statusbar-connected-no-internet-3:before{content:""}.mi-signal-wifi-statusbar-connected-no-internet-4:before{content:""}.mi-signal-wifi-statusbar-not-connected:before{content:""}.mi-signal-wifi-statusbar-null:before{content:""}.mi-signpost:before{content:""}.mi-sim-card:before{content:""}.mi-sim-card-alert:before{content:""}.mi-sim-card-download:before{content:""}.mi-single-bed:before{content:""}.mi-sip:before{content:""}.mi-skateboarding:before{content:""}.mi-skip-next:before{content:""}.mi-skip-previous:before{content:""}.mi-sledding:before{content:""}.mi-slideshow:before{content:""}.mi-slow-motion-video:before{content:""}.mi-smart-button:before{content:""}.mi-smart-display:before{content:""}.mi-smart-screen:before{content:""}.mi-smart-toy:before{content:""}.mi-smartphone:before{content:""}.mi-smoke-free:before{content:""}.mi-smoking-rooms:before{content:""}.mi-sms:before{content:""}.mi-sms-failed:before{content:""}.mi-snapchat:before{content:""}.mi-snippet-folder:before{content:""}.mi-snooze:before{content:""}.mi-snowboarding:before{content:""}.mi-snowing:before{content:""}.mi-snowmobile:before{content:""}.mi-snowshoeing:before{content:""}.mi-soap:before{content:""}.mi-social-distance:before{content:""}.mi-solar-power:before{content:""}.mi-sort:before{content:""}.mi-sort-by-alpha:before{content:""}.mi-sos:before{content:""}.mi-soup-kitchen:before{content:""}.mi-source:before{content:""}.mi-south:before{content:""}.mi-south-america:before{content:""}.mi-south-east:before{content:""}.mi-south-west:before{content:""}.mi-spa:before{content:""}.mi-space-bar:before{content:""}.mi-space-dashboard:before{content:""}.mi-spatial-audio:before{content:""}.mi-spatial-audio-off:before{content:""}.mi-spatial-tracking:before{content:""}.mi-speaker:before{content:""}.mi-speaker-group:before{content:""}.mi-speaker-notes:before{content:""}.mi-speaker-notes-off:before{content:""}.mi-speaker-phone:before{content:""}.mi-speed:before{content:""}.mi-spellcheck:before{content:""}.mi-splitscreen:before{content:""}.mi-spoke:before{content:""}.mi-sports:before{content:""}.mi-sports-bar:before{content:""}.mi-sports-baseball:before{content:""}.mi-sports-basketball:before{content:""}.mi-sports-cricket:before{content:""}.mi-sports-esports:before{content:""}.mi-sports-football:before{content:""}.mi-sports-golf:before{content:""}.mi-sports-gymnastics:before{content:""}.mi-sports-handball:before{content:""}.mi-sports-hockey:before{content:""}.mi-sports-kabaddi:before{content:""}.mi-sports-martial-arts:before{content:""}.mi-sports-mma:before{content:""}.mi-sports-motorsports:before{content:""}.mi-sports-rugby:before{content:""}.mi-sports-score:before{content:""}.mi-sports-soccer:before{content:""}.mi-sports-tennis:before{content:""}.mi-sports-volleyball:before{content:""}.mi-square:before{content:""}.mi-square-foot:before{content:""}.mi-ssid-chart:before{content:""}.mi-stacked-bar-chart:before{content:""}.mi-stacked-line-chart:before{content:""}.mi-stadium:before{content:""}.mi-stairs:before{content:""}.mi-star:before{content:""}.mi-star-border:before{content:""}.mi-star-border-purple500:before{content:""}.mi-star-half:before{content:""}.mi-star-outline:before{content:""}.mi-star-purple500:before{content:""}.mi-star-rate:before{content:""}.mi-stars:before{content:""}.mi-start:before{content:""}.mi-stay-current-landscape:before{content:""}.mi-stay-current-portrait:before{content:""}.mi-stay-primary-landscape:before{content:""}.mi-stay-primary-portrait:before{content:""}.mi-sticky-note-2:before{content:""}.mi-stop:before{content:""}.mi-stop-circle:before{content:""}.mi-stop-screen-share:before{content:""}.mi-storage:before{content:""}.mi-store:before{content:""}.mi-store-mall-directory:before{content:""}.mi-storefront:before{content:""}.mi-storm:before{content:""}.mi-straight:before{content:""}.mi-straighten:before{content:""}.mi-stream:before{content:""}.mi-streetview:before{content:""}.mi-strikethrough-s:before{content:""}.mi-stroller:before{content:""}.mi-style:before{content:""}.mi-subdirectory-arrow-left:before{content:""}.mi-subdirectory-arrow-right:before{content:""}.mi-subject:before{content:""}.mi-subscript:before{content:""}.mi-subscriptions:before{content:""}.mi-subtitles:before{content:""}.mi-subtitles-off:before{content:""}.mi-subway:before{content:""}.mi-summarize:before{content:""}.mi-sunny:before{content:""}.mi-sunny-snowing:before{content:""}.mi-superscript:before{content:""}.mi-supervised-user-circle:before{content:""}.mi-supervisor-account:before{content:""}.mi-support:before{content:""}.mi-support-agent:before{content:""}.mi-surfing:before{content:""}.mi-surround-sound:before{content:""}.mi-swap-calls:before{content:""}.mi-swap-horiz:before{content:""}.mi-swap-horizontal-circle:before{content:""}.mi-swap-vert:before{content:""}.mi-swap-vert-circle:before{content:""}.mi-swap-vertical-circle:before{content:""}.mi-swipe:before{content:""}.mi-swipe-down:before{content:""}.mi-swipe-down-alt:before{content:""}.mi-swipe-left:before{content:""}.mi-swipe-left-alt:before{content:""}.mi-swipe-right:before{content:""}.mi-swipe-right-alt:before{content:""}.mi-swipe-up:before{content:""}.mi-swipe-up-alt:before{content:""}.mi-swipe-vertical:before{content:""}.mi-switch-access-shortcut:before{content:""}.mi-switch-access-shortcut-add:before{content:""}.mi-switch-account:before{content:""}.mi-switch-camera:before{content:""}.mi-switch-left:before{content:""}.mi-switch-right:before{content:""}.mi-switch-video:before{content:""}.mi-synagogue:before{content:""}.mi-sync:before{content:""}.mi-sync-alt:before{content:""}.mi-sync-disabled:before{content:""}.mi-sync-lock:before{content:""}.mi-sync-problem:before{content:""}.mi-system-security-update:before{content:""}.mi-system-security-update-good:before{content:""}.mi-system-security-update-warning:before{content:""}.mi-system-update:before{content:""}.mi-system-update-alt:before{content:""}.mi-system-update-tv:before{content:""}.mi-tab:before{content:""}.mi-tab-unselected:before{content:""}.mi-table-bar:before{content:""}.mi-table-chart:before{content:""}.mi-table-restaurant:before{content:""}.mi-table-rows:before{content:""}.mi-table-view:before{content:""}.mi-tablet:before{content:""}.mi-tablet-android:before{content:""}.mi-tablet-mac:before{content:""}.mi-tag:before{content:""}.mi-tag-faces:before{content:""}.mi-takeout-dining:before{content:""}.mi-tap-and-play:before{content:""}.mi-tapas:before{content:""}.mi-task:before{content:""}.mi-task-alt:before{content:""}.mi-taxi-alert:before{content:""}.mi-telegram:before{content:""}.mi-temple-buddhist:before{content:""}.mi-temple-hindu:before{content:""}.mi-terminal:before{content:""}.mi-terrain:before{content:""}.mi-text-decrease:before{content:""}.mi-text-fields:before{content:""}.mi-text-format:before{content:""}.mi-text-increase:before{content:""}.mi-text-rotate-up:before{content:""}.mi-text-rotate-vertical:before{content:""}.mi-text-rotation-angledown:before{content:""}.mi-text-rotation-angleup:before{content:""}.mi-text-rotation-down:before{content:""}.mi-text-rotation-none:before{content:""}.mi-text-snippet:before{content:""}.mi-textsms:before{content:""}.mi-texture:before{content:""}.mi-theater-comedy:before{content:""}.mi-theaters:before{content:""}.mi-thermostat:before{content:""}.mi-thermostat-auto:before{content:""}.mi-thumb-down:before{content:""}.mi-thumb-down-alt:before{content:""}.mi-thumb-down-off-alt:before{content:""}.mi-thumb-up:before{content:""}.mi-thumb-up-alt:before{content:""}.mi-thumb-up-off-alt:before{content:""}.mi-thumbs-up-down:before{content:""}.mi-thunderstorm:before{content:""}.mi-tiktok:before{content:""}.mi-time-to-leave:before{content:""}.mi-timelapse:before{content:""}.mi-timeline:before{content:""}.mi-timer:before{content:""}.mi-timer-10:before{content:""}.mi-timer-10-select:before{content:""}.mi-timer-3:before{content:""}.mi-timer-3-select:before{content:""}.mi-timer-off:before{content:""}.mi-tips-and-updates:before{content:""}.mi-tire-repair:before{content:""}.mi-title:before{content:""}.mi-toc:before{content:""}.mi-today:before{content:""}.mi-toggle-off:before{content:""}.mi-toggle-on:before{content:""}.mi-token:before{content:""}.mi-toll:before{content:""}.mi-tonality:before{content:""}.mi-topic:before{content:""}.mi-tornado:before{content:""}.mi-touch-app:before{content:""}.mi-tour:before{content:""}.mi-toys:before{content:""}.mi-track-changes:before{content:""}.mi-traffic:before{content:""}.mi-train:before{content:""}.mi-tram:before{content:""}.mi-transcribe:before{content:""}.mi-transfer-within-a-station:before{content:""}.mi-transform:before{content:""}.mi-transgender:before{content:""}.mi-transit-enterexit:before{content:""}.mi-translate:before{content:""}.mi-travel-explore:before{content:""}.mi-trending-down:before{content:""}.mi-trending-flat:before{content:""}.mi-trending-neutral:before{content:""}.mi-trending-up:before{content:""}.mi-trip-origin:before{content:""}.mi-trolley:before{content:""}.mi-troubleshoot:before{content:""}.mi-try:before{content:""}.mi-tsunami:before{content:""}.mi-tty:before{content:""}.mi-tune:before{content:""}.mi-tungsten:before{content:""}.mi-turn-left:before{content:""}.mi-turn-right:before{content:""}.mi-turn-sharp-left:before{content:""}.mi-turn-sharp-right:before{content:""}.mi-turn-slight-left:before{content:""}.mi-turn-slight-right:before{content:""}.mi-turned-in:before{content:""}.mi-turned-in-not:before{content:""}.mi-tv:before{content:""}.mi-tv-off:before{content:""}.mi-two-wheeler:before{content:""}.mi-type-specimen:before{content:""}.mi-u-turn-left:before{content:""}.mi-u-turn-right:before{content:""}.mi-umbrella:before{content:""}.mi-unarchive:before{content:""}.mi-undo:before{content:""}.mi-unfold-less:before{content:""}.mi-unfold-less-double:before{content:""}.mi-unfold-more:before{content:""}.mi-unfold-more-double:before{content:""}.mi-unpublished:before{content:""}.mi-unsubscribe:before{content:""}.mi-upcoming:before{content:""}.mi-update:before{content:""}.mi-update-disabled:before{content:""}.mi-upgrade:before{content:""}.mi-upload:before{content:""}.mi-upload-file:before{content:""}.mi-usb:before{content:""}.mi-usb-off:before{content:""}.mi-vaccines:before{content:""}.mi-vape-free:before{content:""}.mi-vaping-rooms:before{content:""}.mi-verified:before{content:""}.mi-verified-user:before{content:""}.mi-vertical-align-bottom:before{content:""}.mi-vertical-align-center:before{content:""}.mi-vertical-align-top:before{content:""}.mi-vertical-distribute:before{content:""}.mi-vertical-shades:before{content:""}.mi-vertical-shades-closed:before{content:""}.mi-vertical-split:before{content:""}.mi-vibration:before{content:""}.mi-video-call:before{content:""}.mi-video-camera-back:before{content:""}.mi-video-camera-front:before{content:""}.mi-video-chat:before{content:""}.mi-video-collection:before{content:""}.mi-video-file:before{content:""}.mi-video-label:before{content:""}.mi-video-library:before{content:""}.mi-video-settings:before{content:""}.mi-video-stable:before{content:""}.mi-videocam:before{content:""}.mi-videocam-off:before{content:""}.mi-videogame-asset:before{content:""}.mi-videogame-asset-off:before{content:""}.mi-view-agenda:before{content:""}.mi-view-array:before{content:""}.mi-view-carousel:before{content:""}.mi-view-column:before{content:""}.mi-view-comfortable:before{content:""}.mi-view-comfy:before{content:""}.mi-view-comfy-alt:before{content:""}.mi-view-compact:before{content:""}.mi-view-compact-alt:before{content:""}.mi-view-cozy:before{content:""}.mi-view-day:before{content:""}.mi-view-headline:before{content:""}.mi-view-in-ar:before{content:""}.mi-view-kanban:before{content:""}.mi-view-list:before{content:""}.mi-view-module:before{content:""}.mi-view-quilt:before{content:""}.mi-view-sidebar:before{content:""}.mi-view-stream:before{content:""}.mi-view-timeline:before{content:""}.mi-view-week:before{content:""}.mi-vignette:before{content:""}.mi-villa:before{content:""}.mi-visibility:before{content:""}.mi-visibility-off:before{content:""}.mi-voice-chat:before{content:""}.mi-voice-over-off:before{content:""}.mi-voicemail:before{content:""}.mi-volcano:before{content:""}.mi-volume-down:before{content:""}.mi-volume-down-alt:before{content:""}.mi-volume-mute:before{content:""}.mi-volume-off:before{content:""}.mi-volume-up:before{content:""}.mi-volunteer-activism:before{content:""}.mi-vpn-key:before{content:""}.mi-vpn-key-off:before{content:""}.mi-vpn-lock:before{content:""}.mi-vrpano:before{content:""}.mi-wallet:before{content:""}.mi-wallet-giftcard:before{content:""}.mi-wallet-membership:before{content:""}.mi-wallet-travel:before{content:""}.mi-wallpaper:before{content:""}.mi-warehouse:before{content:""}.mi-warning:before{content:""}.mi-warning-amber:before{content:""}.mi-wash:before{content:""}.mi-watch:before{content:""}.mi-watch-later:before{content:""}.mi-watch-off:before{content:""}.mi-water:before{content:""}.mi-water-damage:before{content:""}.mi-water-drop:before{content:""}.mi-waterfall-chart:before{content:""}.mi-waves:before{content:""}.mi-waving-hand:before{content:""}.mi-wb-auto:before{content:""}.mi-wb-cloudy:before{content:""}.mi-wb-incandescent:before{content:""}.mi-wb-iridescent:before{content:""}.mi-wb-shade:before{content:""}.mi-wb-sunny:before{content:""}.mi-wb-twighlight:before{content:""}.mi-wb-twilight:before{content:""}.mi-wc:before{content:""}.mi-web:before{content:""}.mi-web-asset:before{content:""}.mi-web-asset-off:before{content:""}.mi-web-stories:before{content:""}.mi-webhook:before{content:""}.mi-wechat:before{content:""}.mi-weekend:before{content:""}.mi-west:before{content:""}.mi-whatshot:before{content:""}.mi-wheelchair-pickup:before{content:""}.mi-where-to-vote:before{content:""}.mi-widgets:before{content:""}.mi-width-full:before{content:""}.mi-width-normal:before{content:""}.mi-width-wide:before{content:""}.mi-wifi:before{content:""}.mi-wifi-1-bar:before{content:""}.mi-wifi-2-bar:before{content:""}.mi-wifi-calling:before{content:""}.mi-wifi-calling-1:before{content:""}.mi-wifi-calling-2:before{content:""}.mi-wifi-calling-3:before{content:""}.mi-wifi-channel:before{content:""}.mi-wifi-find:before{content:""}.mi-wifi-lock:before{content:""}.mi-wifi-off:before{content:""}.mi-wifi-password:before{content:""}.mi-wifi-protected-setup:before{content:""}.mi-wifi-tethering:before{content:""}.mi-wifi-tethering-error:before{content:""}.mi-wifi-tethering-error-rounded:before{content:""}.mi-wifi-tethering-off:before{content:""}.mi-wind-power:before{content:""}.mi-window:before{content:""}.mi-wine-bar:before{content:""}.mi-woman:before{content:""}.mi-woman-2:before{content:""}.mi-woo-commerce:before{content:""}.mi-wordpress:before{content:""}.mi-work:before{content:""}.mi-work-history:before{content:""}.mi-work-off:before{content:""}.mi-work-outline:before{content:""}.mi-workspace-premium:before{content:""}.mi-workspaces:before{content:""}.mi-workspaces-filled:before{content:""}.mi-workspaces-outline:before{content:""}.mi-wrap-text:before{content:""}.mi-wrong-location:before{content:""}.mi-wysiwyg:before{content:""}.mi-yard:before{content:""}.mi-youtube-searched-for:before{content:""}.mi-zoom-in:before{content:""}.mi-zoom-in-map:before{content:""}.mi-zoom-out:before{content:""}.mi-zoom-out-map:before{content:""}.results-container{display:flex;flex-direction:column;margin-top:var(--size-3)}.results-container.empty,.results-container.no-results{gap:var(--size-3);align-items:center;justify-content:center;min-height:var(--size-12);margin-top:var(--size-10);color:var(--gray-8)}.results-container.empty:before,.results-container.no-results:before{font-size:var(--size-9)}.results-container.empty:after,.results-container.no-results:after{font-family:var(--font-sans)}.results-container.empty:before{content:""}.results-container.empty:after{content:"Enter something to search"}.results-container.no-results:before{content:""}.results-container.no-results:after{content:"No results"}intersection-observer::part(sentinel){width:100%;height:var(--size-9);margin-top:var(--size-4);background-color:var(--color-9);border:1px solid var(--color-10);border-radius:var(--radius-3);animation:var(--animation-blink)}',ii=".search-bar-container{display:flex;align-items:center;margin:0 0 var(--size-1) 0;padding:0 var(--size-2);background-color:var(--color-8);border-radius:var(--radius-2)}.search-bar-container input{width:90%}.search-bar-container button{display:flex;align-items:center;background-color:var(--color-8);border:0}",ut="rsi";var ae,jn,Nn,On;class _t extends j{constructor(){super();R(this,ae);this.bu=ut,this.query=""}updated(e){if(super.updated(e),["bu","query"].some(o=>e.has(o))){const o=this.query??"",i=this.bu??ut;this.dispatchEvent(new CustomEvent("change",{detail:{query:o,bu:i}}))}}render(){return d`
      <div class="search-bar-container fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <select aria-label="Select a business unit"
                .value="${this.bu??ut}"
                @change="${s(this,ae,Nn)}">
          <option value="rsi" selected>RSI</option>
          <option value="rtr">RTR</option>
          <option value="rts">RTS</option>
          <option value="srf">SRF</option>
          <option value="swi">SWI</option>
        </select>
        <input type="text"
               placeholder="Search for content..."
               @keyup="${jt.fn.debounce(s(this,ae,jn),500)}"
               .value="${this.query??""}">
        <button title="Clear search"
                @click="${s(this,ae,On)}">
          <i class="material-icons-outlined">close</i>
        </button>
      </div>
    `}}ae=new WeakSet,jn=function(){this.query=this.renderRoot.querySelector("input").value},Nn=function(e){this.bu=e.target.value},On=function(){this.query="",this.renderRoot.querySelector("input").value=""},x(_t,"properties",{bu:{type:String},query:{type:String}}),x(_t,"styles",[q,F,B(ii)]);customElements.define("search-bar",_t);var Ce,pe,D,Pn,Lt,zn,Un,Bn,Hn,qn,Fn;class Tt extends j{constructor(){super();R(this,D);R(this,Ce,new AbortController);R(this,pe);this.loading=!1,this.results=null,this.nextPage=null}connectedCallback(){super.connectedCallback(),J(this,pe,()=>{const e=this.renderRoot.querySelector("search-bar");e.query=v.queryParams.query??"",e.bu=v.queryParams.bu??"rsi"}),v.addEventListener("queryparams",y(this,pe))}disconnectedCallback(){super.disconnectedCallback(),this.abortSearch(),v.removeEventListener("queryparams",y(this,pe))}async firstUpdated(e){super.firstUpdated(e);const o=this.renderRoot.querySelector("search-bar");y(this,pe).call(this),await s(this,D,Lt).call(this,o.bu,o.query)}abortSearch(){var e;return(e=y(this,Ce))==null||e.abort("New search launched"),J(this,Ce,new AbortController),y(this,Ce).signal}render(){var e;return d`
      <search-bar
        @change="${o=>s(this,D,Pn).call(this,o.detail.bu,o.detail.query)}">
      </search-bar>

      <!-- Search results -->
      ${Z(this.loading,s(this,D,qn).bind(this),s(this,D,Hn).bind(this))}
      ${Z(((e=this.results)==null?void 0:e.length)>0,s(this,D,Fn).bind(this))}
    `}}Ce=new WeakMap,pe=new WeakMap,D=new WeakSet,Pn=async function(e,o){v.updateState({bu:e,...o?{query:o}:{}}),await s(this,D,Lt).call(this,e,o)},Lt=async function(e,o){const i=this.abortSearch();if(!o){[this.results,this.nextPage]=[null,null];return}this.loading=!0;try{const a=await P.search(e,o,i);[this.results,this.nextPage]=[a.results,a.next]}finally{this.loading=!1}},zn=async function(){const e=this.abortSearch(),o=await this.nextPage(e);this.nextPage=o.next,this.results=[...this.results,...o.results]},Un=function(e){return new URLSearchParams({...v.queryParams,src:e.urn,type:"srgssr/urn"}).toString()},Bn=function(e){const o=new Intl.DateTimeFormat("fr-CH").format(new Date(e.date)),i=jt.formatTime(e.duration/1e3);return d`
      <content-link title="${e.title}"
                    href="search?${s(this,D,Un).call(this,e)}">
        <div slot="description">
          <i
            class="material-icons-outlined">${e.mediaType==="VIDEO"?"movie":"audiotrack"}</i>
          <span>&nbsp;| ${o} | ${i}</span>
        </div>
      </content-link>
    `},Hn=function(){const e={empty:this.results==null,"no-results":this.results&&this.results.length===0,"material-icons":!this.results||this.results.length===0};return d`
      <section class="results-container fade-in ${tt(e)}"
               @animationend="${o=>o.target.classList.remove("fade-in")}">
        ${Ee(this.results??[],s(this,D,Bn).bind(this))}
        ${Z(this.nextPage,()=>d`
          <intersection-observer
            @intersecting="${s(this,D,zn).bind(this)}">
          </intersection-observer>
        `)}
      </section>
    `},qn=function(){return d`
      <loading-spinner loading class="slide-up-fade-in"
                       @animationend="${e=>e.target.classList.remove("slide-up-fade-in")}">
      </loading-spinner>
    `},Fn=function(){return d`
      <scroll-to-top-button></scroll-to-top-button>`},x(Tt,"properties",{loading:{state:!0,type:Boolean},results:{state:!0,type:Array},nextPage:{state:!0,type:Function}}),x(Tt,"styles",[q,F,B(oi)]);customElements.define("search-page",Tt);v.addRoute("search","search-page");const ri=':host{display:inline-block;cursor:pointer}[part=switch]{display:flex;align-items:center;width:var(--size-9);height:var(--size-7);background-color:var(--gray-6);border-radius:var(--radius-4);transition:.4s}[part=slider]{display:block;width:var(--size-5);height:var(--size-5);margin-left:var(--size-2);background-color:var(--gray-1);border-radius:var(--radius-round);transition:.4s;content:""}:host([checked]) [part=switch]{background-color:var(--green-8)}:host([checked]) [part=slider]{transform:translate(var(--size-5))}:host([disabled]) [part=switch]{cursor:not-allowed;opacity:.5}';var Ue,Be;class Je extends j{constructor(){super();R(this,Ue,e=>{e.key===" "&&(e.preventDefault(),this.toggle())});R(this,Be,()=>{this.toggle()});this.checked=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","switch"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("click",y(this,Be)),this.addEventListener("keydown",y(this,Ue))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",y(this,Be)),this.removeEventListener("keydown",y(this,Ue))}toggle(e){this.disabled||(this.checked=e??!this.checked)}updated(e){super.updated(e),e.has("checked")&&(this.setAttribute("aria-checked",this.checked.toString()),this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}render(){return d`
        <div part="switch">
            <div part="slider"></div>
        </div>
    `}}Ue=new WeakMap,Be=new WeakMap,x(Je,"formAssociated",!0),x(Je,"properties",{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean}}),x(Je,"styles",[q,B(ri)]);customElements.define("toggle-switch",Je);const ai="[part=title]{margin:0;padding:var(--size-3) 0}[part=toggle-container],[part=input-container]{display:flex;align-items:center;justify-content:space-between;margin:0;color:var(--color-0);font-weight:var(--font-weight-6);font-size:var(--size-3);text-align:justify;background-color:var(--color-9);border:1px solid var(--color-10)}[part=toggle-container]:first-of-type,[part=input-container]:first-of-type{border-radius:var(--radius-3) var(--radius-3) 0 0}[part=toggle-container]:last-of-type,[part=input-container]:last-of-type{border-radius:0 0 var(--radius-3) var(--radius-3)}[part=label]{line-height:var(--size-8);padding-inline:var(--size-3)}[part=toggle-container] [part=label]{flex:1;cursor:pointer}[part=toggle-switch]{display:flex;align-items:center;height:var(--size-8);padding-inline:var(--size-3)}[part=input]{flex:1;margin:0;padding:var(--size-1) var(--size-3);text-align:right;background-color:var(--color-9);border-bottom-right-radius:var(--radius-3)}";var re,Qe,Gn;class At extends j{constructor(){super();R(this,re);const e=Se.loadPreferences();this.autoplay=e.autoplay??!1,this.muted=e.muted??!0,this.debug=e.debug??!1,this.dataProviderHost=e.dataProviderHost}updated(e){super.updated(e);const o=Se.loadPreferences();[...e.keys()].filter(i=>["autoplay","muted","debug","dataProviderHost"].includes(i)).forEach(i=>{o[i]=this[i]}),Se.savePreferences(o),e.has("debug")&&v.replaceState(this.debug?{debug:"true"}:{}),e.has("dataProviderHost")&&(P.host=this.dataProviderHost)}render(){return d`
      <section class="fade-in" @animationend="${e=>e.target.classList.remove("fade-in")}">
        <h2 part="title">Player Settings</h2>
        ${s(this,re,Qe).call(this,"autoplay","Autoplay")}
        ${s(this,re,Qe).call(this,"muted","Player starts muted")}
        ${s(this,re,Qe).call(this,"debug","Enable debug mode")}
        ${s(this,re,Gn).call(this,"dataProviderHost","Data provider host")}
      </section>
    `}}re=new WeakSet,Qe=function(e,o){return d`
      <div part="toggle-container">
        <label for="${e}-switch" part="label">${o}</label>
        <toggle-switch id="${e}-switch"
                       part="toggle-switch"
                       exportparts="slider, switch"
                       ?checked="${this[e]}"
                       @change="${i=>{this[e]=i.detail.checked}}">
        </toggle-switch>
      </div>
    `},Gn=function(e,o){return d`
      <div part="input-container">
        <label for="${e}-input" part="label">${o}</label>
        <input type="text"
               part="input"
               placeholder="il.srgssr.ch"
               id="${e}-input"
               .value="${this[e]??""}"
               @keyup="${i=>{this[e]=i.target.value===""?void 0:i.target.value}}">
      </div>
    `},x(At,"properties",{autoplay:{type:Boolean,state:!0},muted:{type:Boolean,state:!0},debug:{type:Boolean,state:!0},dataProviderHost:{type:String,state:!0}}),x(At,"styles",[q,F,B(ai)]);customElements.define("settings-page",At);v.addRoute("settings","settings-page");const ci=`@media screen and (prefers-color-scheme: dark){pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
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
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#005cc5}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-comment,.hljs-code,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}}[part=container]{overflow-x:auto;font-size:var(--font-size-0)}slot{display:none}`;function Vn(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(n=>{const e=t[n],o=typeof e;(o==="object"||o==="function")&&!Object.isFrozen(e)&&Vn(e)}),t}class Wt{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Wn(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function ie(t,...n){const e=Object.create(null);for(const o in t)e[o]=t[o];return n.forEach(function(o){for(const i in o)e[i]=o[i]}),e}const si="</span>",Kt=t=>!!t.scope,li=(t,{prefix:n})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const e=t.split(".");return[`${n}${e.shift()}`,...e.map((o,i)=>`${o}${"_".repeat(i+1)}`)].join(" ")}return`${n}${t}`};class mi{constructor(n,e){this.buffer="",this.classPrefix=e.classPrefix,n.walk(this)}addText(n){this.buffer+=Wn(n)}openNode(n){if(!Kt(n))return;const e=li(n.scope,{prefix:this.classPrefix});this.span(e)}closeNode(n){Kt(n)&&(this.buffer+=si)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const Xt=(t={})=>{const n={children:[]};return Object.assign(n,t),n};class Nt{constructor(){this.rootNode=Xt(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const e=Xt({scope:n});this.add(e),this.stack.push(e)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,e){return typeof e=="string"?n.addText(e):e.children&&(n.openNode(e),e.children.forEach(o=>this._walk(n,o)),n.closeNode(e)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(e=>typeof e=="string")?n.children=[n.children.join("")]:n.children.forEach(e=>{Nt._collapse(e)}))}}class fi extends Nt{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,e){const o=n.root;e&&(o.scope=`language:${e}`),this.add(o)}toHTML(){return new mi(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function je(t){return t?typeof t=="string"?t:t.source:null}function Kn(t){return ge("(?=",t,")")}function bi(t){return ge("(?:",t,")*")}function di(t){return ge("(?:",t,")?")}function ge(...t){return t.map(e=>je(e)).join("")}function pi(t){const n=t[t.length-1];return typeof n=="object"&&n.constructor===Object?(t.splice(t.length-1,1),n):{}}function Ot(...t){return"("+(pi(t).capture?"":"?:")+t.map(o=>je(o)).join("|")+")"}function Xn(t){return new RegExp(t.toString()+"|").exec("").length-1}function ui(t,n){const e=t&&t.exec(n);return e&&e.index===0}const hi=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Pt(t,{joinWith:n}){let e=0;return t.map(o=>{e+=1;const i=e;let a=je(o),r="";for(;a.length>0;){const l=hi.exec(a);if(!l){r+=a;break}r+=a.substring(0,l.index),a=a.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?r+="\\"+String(Number(l[1])+i):(r+=l[0],l[0]==="("&&e++)}return r}).map(o=>`(${o})`).join(n)}const gi=/\b\B/,Zn="[a-zA-Z]\\w*",zt="[a-zA-Z_]\\w*",Yn="\\b\\d+(\\.\\d+)?",Jn="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Qn="\\b(0b[01]+)",yi="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",vi=(t={})=>{const n=/^#![ ]*\//;return t.binary&&(t.begin=ge(n,/.*\b/,t.binary,/\b.*/)),ie({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,o)=>{e.index!==0&&o.ignoreMatch()}},t)},Ne={begin:"\\\\[\\s\\S]",relevance:0},wi={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ne]},ki={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ne]},xi={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},rt=function(t,n,e={}){const o=ie({scope:"comment",begin:t,end:n,contains:[]},e);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=Ot("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:ge(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},Si=rt("//","$"),Ei=rt("/\\*","\\*/"),Ri=rt("#","$"),Ci={scope:"number",begin:Yn,relevance:0},_i={scope:"number",begin:Jn,relevance:0},Ti={scope:"number",begin:Qn,relevance:0},Li={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ne,{begin:/\[/,end:/\]/,relevance:0,contains:[Ne]}]},Ai={scope:"title",begin:Zn,relevance:0},Mi={scope:"title",begin:zt,relevance:0},Di={begin:"\\.\\s*"+zt,relevance:0},Ii=function(t){return Object.assign(t,{"on:begin":(n,e)=>{e.data._beginMatch=n[1]},"on:end":(n,e)=>{e.data._beginMatch!==n[1]&&e.ignoreMatch()}})};var Ye=Object.freeze({__proto__:null,APOS_STRING_MODE:wi,BACKSLASH_ESCAPE:Ne,BINARY_NUMBER_MODE:Ti,BINARY_NUMBER_RE:Qn,COMMENT:rt,C_BLOCK_COMMENT_MODE:Ei,C_LINE_COMMENT_MODE:Si,C_NUMBER_MODE:_i,C_NUMBER_RE:Jn,END_SAME_AS_BEGIN:Ii,HASH_COMMENT_MODE:Ri,IDENT_RE:Zn,MATCH_NOTHING_RE:gi,METHOD_GUARD:Di,NUMBER_MODE:Ci,NUMBER_RE:Yn,PHRASAL_WORDS_MODE:xi,QUOTE_STRING_MODE:ki,REGEXP_MODE:Li,RE_STARTERS_RE:yi,SHEBANG:vi,TITLE_MODE:Ai,UNDERSCORE_IDENT_RE:zt,UNDERSCORE_TITLE_MODE:Mi});function $i(t,n){t.input[t.index-1]==="."&&n.ignoreMatch()}function ji(t,n){t.className!==void 0&&(t.scope=t.className,delete t.className)}function Ni(t,n){n&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=$i,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Oi(t,n){Array.isArray(t.illegal)&&(t.illegal=Ot(...t.illegal))}function Pi(t,n){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function zi(t,n){t.relevance===void 0&&(t.relevance=1)}const Ui=(t,n)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const e=Object.assign({},t);Object.keys(t).forEach(o=>{delete t[o]}),t.keywords=e.keywords,t.begin=ge(e.beforeMatch,Kn(e.begin)),t.starts={relevance:0,contains:[Object.assign(e,{endsParent:!0})]},t.relevance=0,delete e.beforeMatch},Bi=["of","and","for","in","not","or","if","then","parent","list","value"],Hi="keyword";function eo(t,n,e=Hi){const o=Object.create(null);return typeof t=="string"?i(e,t.split(" ")):Array.isArray(t)?i(e,t):Object.keys(t).forEach(function(a){Object.assign(o,eo(t[a],n,a))}),o;function i(a,r){n&&(r=r.map(l=>l.toLowerCase())),r.forEach(function(l){const p=l.split("|");o[p[0]]=[a,qi(p[0],p[1])]})}}function qi(t,n){return n?Number(n):Fi(t)?0:1}function Fi(t){return Bi.includes(t.toLowerCase())}const Zt={},he=t=>{console.error(t)},Yt=(t,...n)=>{console.log(`WARN: ${t}`,...n)},ke=(t,n)=>{Zt[`${t}/${n}`]||(console.log(`Deprecated as of ${t}. ${n}`),Zt[`${t}/${n}`]=!0)},ot=new Error;function to(t,n,{key:e}){let o=0;const i=t[e],a={},r={};for(let l=1;l<=n.length;l++)r[l+o]=i[l],a[l+o]=!0,o+=Xn(n[l-1]);t[e]=r,t[e]._emit=a,t[e]._multi=!0}function Gi(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw he("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ot;if(typeof t.beginScope!="object"||t.beginScope===null)throw he("beginScope must be object"),ot;to(t,t.begin,{key:"beginScope"}),t.begin=Pt(t.begin,{joinWith:""})}}function Vi(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw he("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ot;if(typeof t.endScope!="object"||t.endScope===null)throw he("endScope must be object"),ot;to(t,t.end,{key:"endScope"}),t.end=Pt(t.end,{joinWith:""})}}function Wi(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function Ki(t){Wi(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),Gi(t),Vi(t)}function Xi(t){function n(r,l){return new RegExp(je(r),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(l?"g":""))}class e{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,p){p.position=this.position++,this.matchIndexes[this.matchAt]=p,this.regexes.push([p,l]),this.matchAt+=Xn(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(p=>p[1]);this.matcherRe=n(Pt(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const p=this.matcherRe.exec(l);if(!p)return null;const _=p.findIndex((ee,V)=>V>0&&ee!==void 0),T=this.matchIndexes[_];return p.splice(0,_),Object.assign(p,T)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const p=new e;return this.rules.slice(l).forEach(([_,T])=>p.addRule(_,T)),p.compile(),this.multiRegexes[l]=p,p}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,p){this.rules.push([l,p]),p.type==="begin"&&this.count++}exec(l){const p=this.getMatcher(this.regexIndex);p.lastIndex=this.lastIndex;let _=p.exec(l);if(this.resumingScanAtSamePosition()&&!(_&&_.index===this.lastIndex)){const T=this.getMatcher(0);T.lastIndex=this.lastIndex+1,_=T.exec(l)}return _&&(this.regexIndex+=_.position+1,this.regexIndex===this.count&&this.considerAll()),_}}function i(r){const l=new o;return r.contains.forEach(p=>l.addRule(p.begin,{rule:p,type:"begin"})),r.terminatorEnd&&l.addRule(r.terminatorEnd,{type:"end"}),r.illegal&&l.addRule(r.illegal,{type:"illegal"}),l}function a(r,l){const p=r;if(r.isCompiled)return p;[ji,Pi,Ki,Ui].forEach(T=>T(r,l)),t.compilerExtensions.forEach(T=>T(r,l)),r.__beforeBegin=null,[Ni,Oi,zi].forEach(T=>T(r,l)),r.isCompiled=!0;let _=null;return typeof r.keywords=="object"&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),_=r.keywords.$pattern,delete r.keywords.$pattern),_=_||/\w+/,r.keywords&&(r.keywords=eo(r.keywords,t.case_insensitive)),p.keywordPatternRe=n(_,!0),l&&(r.begin||(r.begin=/\B|\b/),p.beginRe=n(p.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(p.endRe=n(p.end)),p.terminatorEnd=je(p.end)||"",r.endsWithParent&&l.terminatorEnd&&(p.terminatorEnd+=(r.end?"|":"")+l.terminatorEnd)),r.illegal&&(p.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(T){return Zi(T==="self"?r:T)})),r.contains.forEach(function(T){a(T,p)}),r.starts&&a(r.starts,l),p.matcher=i(p),p}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=ie(t.classNameAliases||{}),a(t)}function no(t){return t?t.endsWithParent||no(t.starts):!1}function Zi(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(n){return ie(t,{variants:null},n)})),t.cachedVariants?t.cachedVariants:no(t)?ie(t,{starts:t.starts?ie(t.starts):null}):Object.isFrozen(t)?ie(t):t}var Yi="11.10.0";class Ji extends Error{constructor(n,e){super(n),this.name="HTMLInjectionError",this.html=e}}const ht=Wn,Jt=ie,Qt=Symbol("nomatch"),Qi=7,oo=function(t){const n=Object.create(null),e=Object.create(null),o=[];let i=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",r={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:fi};function p(c){return l.noHighlightRe.test(c)}function _(c){let f=c.className+" ";f+=c.parentNode?c.parentNode.className:"";const h=l.languageDetectRe.exec(f);if(h){const w=W(h[1]);return w||(Yt(a.replace("{}",h[1])),Yt("Falling back to no-highlight mode for this block.",c)),w?h[1]:"no-highlight"}return f.split(/\s+/).find(w=>p(w)||W(w))}function T(c,f,h){let w="",C="";typeof f=="object"?(w=c,h=f.ignoreIllegals,C=f.language):(ke("10.7.0","highlight(lang, code, ...args) has been deprecated."),ke("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),C=c,w=f),h===void 0&&(h=!0);const O={code:w,language:C};we("before:highlight",O);const G=O.result?O.result:ee(O.language,O.code,h);return G.code=O.code,we("after:highlight",G),G}function ee(c,f,h,w){const C=Object.create(null);function O(m,b){return m.keywords[b]}function G(){if(!u.keywords){$.addText(E);return}let m=0;u.keywordPatternRe.lastIndex=0;let b=u.keywordPatternRe.exec(E),g="";for(;b;){g+=E.substring(m,b.index);const S=X.case_insensitive?b[0].toLowerCase():b[0],N=O(u,S);if(N){const[Y,Ao]=N;if($.addText(g),g="",C[S]=(C[S]||0)+1,C[S]<=Qi&&(Ze+=Ao),Y.startsWith("_"))g+=b[0];else{const Mo=X.classNameAliases[Y]||Y;K(b[0],Mo)}}else g+=b[0];m=u.keywordPatternRe.lastIndex,b=u.keywordPatternRe.exec(E)}g+=E.substring(m),$.addText(g)}function Ke(){if(E==="")return;let m=null;if(typeof u.subLanguage=="string"){if(!n[u.subLanguage]){$.addText(E);return}m=ee(u.subLanguage,E,!0,Gt[u.subLanguage]),Gt[u.subLanguage]=m._top}else m=ye(E,u.subLanguage.length?u.subLanguage:null);u.relevance>0&&(Ze+=m.relevance),$.__addSublanguage(m._emitter,m.language)}function z(){u.subLanguage!=null?Ke():G(),E=""}function K(m,b){m!==""&&($.startScope(b),$.addText(m),$.endScope())}function Bt(m,b){let g=1;const S=b.length-1;for(;g<=S;){if(!m._emit[g]){g++;continue}const N=X.classNameAliases[m[g]]||m[g],Y=b[g];N?K(Y,N):(E=Y,G(),E=""),g++}}function Ht(m,b){return m.scope&&typeof m.scope=="string"&&$.openNode(X.classNameAliases[m.scope]||m.scope),m.beginScope&&(m.beginScope._wrap?(K(E,X.classNameAliases[m.beginScope._wrap]||m.beginScope._wrap),E=""):m.beginScope._multi&&(Bt(m.beginScope,b),E="")),u=Object.create(m,{parent:{value:u}}),u}function qt(m,b,g){let S=ui(m.endRe,g);if(S){if(m["on:end"]){const N=new Wt(m);m["on:end"](b,N),N.isMatchIgnored&&(S=!1)}if(S){for(;m.endsParent&&m.parent;)m=m.parent;return m}}if(m.endsWithParent)return qt(m.parent,b,g)}function Ro(m){return u.matcher.regexIndex===0?(E+=m[0],1):(bt=!0,0)}function Co(m){const b=m[0],g=m.rule,S=new Wt(g),N=[g.__beforeBegin,g["on:begin"]];for(const Y of N)if(Y&&(Y(m,S),S.isMatchIgnored))return Ro(b);return g.skip?E+=b:(g.excludeBegin&&(E+=b),z(),!g.returnBegin&&!g.excludeBegin&&(E=b)),Ht(g,m),g.returnBegin?0:b.length}function _o(m){const b=m[0],g=f.substring(m.index),S=qt(u,m,g);if(!S)return Qt;const N=u;u.endScope&&u.endScope._wrap?(z(),K(b,u.endScope._wrap)):u.endScope&&u.endScope._multi?(z(),Bt(u.endScope,m)):N.skip?E+=b:(N.returnEnd||N.excludeEnd||(E+=b),z(),N.excludeEnd&&(E=b));do u.scope&&$.closeNode(),!u.skip&&!u.subLanguage&&(Ze+=u.relevance),u=u.parent;while(u!==S.parent);return S.starts&&Ht(S.starts,m),N.returnEnd?0:b.length}function To(){const m=[];for(let b=u;b!==X;b=b.parent)b.scope&&m.unshift(b.scope);m.forEach(b=>$.openNode(b))}let Xe={};function Ft(m,b){const g=b&&b[0];if(E+=m,g==null)return z(),0;if(Xe.type==="begin"&&b.type==="end"&&Xe.index===b.index&&g===""){if(E+=f.slice(b.index,b.index+1),!i){const S=new Error(`0 width match regex (${c})`);throw S.languageName=c,S.badRule=Xe.rule,S}return 1}if(Xe=b,b.type==="begin")return Co(b);if(b.type==="illegal"&&!h){const S=new Error('Illegal lexeme "'+g+'" for mode "'+(u.scope||"<unnamed>")+'"');throw S.mode=u,S}else if(b.type==="end"){const S=_o(b);if(S!==Qt)return S}if(b.type==="illegal"&&g==="")return 1;if(ft>1e5&&ft>b.index*3)throw new Error("potential infinite loop, way more iterations than matches");return E+=g,g.length}const X=W(c);if(!X)throw he(a.replace("{}",c)),new Error('Unknown language: "'+c+'"');const Lo=Xi(X);let mt="",u=w||Lo;const Gt={},$=new l.__emitter(l);To();let E="",Ze=0,fe=0,ft=0,bt=!1;try{if(X.__emitTokens)X.__emitTokens(f,$);else{for(u.matcher.considerAll();;){ft++,bt?bt=!1:u.matcher.considerAll(),u.matcher.lastIndex=fe;const m=u.matcher.exec(f);if(!m)break;const b=f.substring(fe,m.index),g=Ft(b,m);fe=m.index+g}Ft(f.substring(fe))}return $.finalize(),mt=$.toHTML(),{language:c,value:mt,relevance:Ze,illegal:!1,_emitter:$,_top:u}}catch(m){if(m.message&&m.message.includes("Illegal"))return{language:c,value:ht(f),illegal:!0,relevance:0,_illegalBy:{message:m.message,index:fe,context:f.slice(fe-100,fe+100),mode:m.mode,resultSoFar:mt},_emitter:$};if(i)return{language:c,value:ht(f),illegal:!1,relevance:0,errorRaised:m,_emitter:$,_top:u};throw m}}function V(c){const f={value:ht(c),illegal:!1,relevance:0,_top:r,_emitter:new l.__emitter(l)};return f._emitter.addText(c),f}function ye(c,f){f=f||l.languages||Object.keys(n);const h=V(c),w=f.filter(W).filter(Ve).map(z=>ee(z,c,!1));w.unshift(h);const C=w.sort((z,K)=>{if(z.relevance!==K.relevance)return K.relevance-z.relevance;if(z.language&&K.language){if(W(z.language).supersetOf===K.language)return 1;if(W(K.language).supersetOf===z.language)return-1}return 0}),[O,G]=C,Ke=O;return Ke.secondBest=G,Ke}function He(c,f,h){const w=f&&e[f]||h;c.classList.add("hljs"),c.classList.add(`language-${w}`)}function ve(c){let f=null;const h=_(c);if(p(h))return;if(we("before:highlightElement",{el:c,language:h}),c.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",c);return}if(c.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(c)),l.throwUnescapedHTML))throw new Ji("One of your code blocks includes unescaped HTML.",c.innerHTML);f=c;const w=f.textContent,C=h?T(w,{language:h,ignoreIllegals:!0}):ye(w);c.innerHTML=C.value,c.dataset.highlighted="yes",He(c,h,C.language),c.result={language:C.language,re:C.relevance,relevance:C.relevance},C.secondBest&&(c.secondBest={language:C.secondBest.language,relevance:C.secondBest.relevance}),we("after:highlightElement",{el:c,result:C,text:w})}function qe(c){l=Jt(l,c)}const Ut=()=>{le(),ke("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Ae(){le(),ke("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Me=!1;function le(){if(document.readyState==="loading"){Me=!0;return}document.querySelectorAll(l.cssSelector).forEach(ve)}function De(){Me&&le()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",De,!1);function me(c,f){let h=null;try{h=f(t)}catch(w){if(he("Language definition for '{}' could not be registered.".replace("{}",c)),i)he(w);else throw w;h=r}h.name||(h.name=c),n[c]=h,h.rawDefinition=f.bind(null,t),h.aliases&&Ge(h.aliases,{languageName:c})}function at(c){delete n[c];for(const f of Object.keys(e))e[f]===c&&delete e[f]}function Fe(){return Object.keys(n)}function W(c){return c=(c||"").toLowerCase(),n[c]||n[e[c]]}function Ge(c,{languageName:f}){typeof c=="string"&&(c=[c]),c.forEach(h=>{e[h.toLowerCase()]=f})}function Ve(c){const f=W(c);return f&&!f.disableAutodetect}function ct(c){c["before:highlightBlock"]&&!c["before:highlightElement"]&&(c["before:highlightElement"]=f=>{c["before:highlightBlock"](Object.assign({block:f.el},f))}),c["after:highlightBlock"]&&!c["after:highlightElement"]&&(c["after:highlightElement"]=f=>{c["after:highlightBlock"](Object.assign({block:f.el},f))})}function st(c){ct(c),o.push(c)}function lt(c){const f=o.indexOf(c);f!==-1&&o.splice(f,1)}function we(c,f){const h=c;o.forEach(function(w){w[h]&&w[h](f)})}function We(c){return ke("10.7.0","highlightBlock will be removed entirely in v12.0"),ke("10.7.0","Please use highlightElement now."),ve(c)}Object.assign(t,{highlight:T,highlightAuto:ye,highlightAll:le,highlightElement:ve,highlightBlock:We,configure:qe,initHighlighting:Ut,initHighlightingOnLoad:Ae,registerLanguage:me,unregisterLanguage:at,listLanguages:Fe,getLanguage:W,registerAliases:Ge,autoDetection:Ve,inherit:Jt,addPlugin:st,removePlugin:lt}),t.debugMode=function(){i=!1},t.safeMode=function(){i=!0},t.versionString=Yi,t.regex={concat:ge,lookahead:Kn,either:Ot,optional:di,anyNumberOfTimes:bi};for(const c in Ye)typeof Ye[c]=="object"&&Vn(Ye[c]);return Object.assign(t,Ye),t},_e=oo({});_e.newInstance=()=>oo({});var er=_e;_e.HighlightJS=_e;_e.default=_e;const io=Po(er),en="[A-Za-z$_][0-9A-Za-z$_]*",tr=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],nr=["true","false","null","undefined","NaN","Infinity"],ro=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ao=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],co=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],or=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],ir=[].concat(co,ro,ao);function rr(t){const n=t.regex,e=(f,{after:h})=>{const w="</"+f[0].slice(1);return f.input.indexOf(w,h)!==-1},o=en,i={begin:"<>",end:"</>"},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(f,h)=>{const w=f[0].length+f.index,C=f.input[w];if(C==="<"||C===","){h.ignoreMatch();return}C===">"&&(e(f,{after:w})||h.ignoreMatch());let O;const G=f.input.substring(w);if(O=G.match(/^\s*=/)){h.ignoreMatch();return}if((O=G.match(/^\s+extends\s+/))&&O.index===0){h.ignoreMatch();return}}},l={$pattern:en,keyword:tr,literal:nr,built_in:ir,"variable.language":or},p="[0-9](_?[0-9])*",_=`\\.(${p})`,T="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",ee={className:"number",variants:[{begin:`(\\b(${T})((${_})|\\.)?|(${_}))[eE][+-]?(${p})\\b`},{begin:`\\b(${T})\\b((${_})\\b|\\.)?|(${_})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},V={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},ye={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,V],subLanguage:"xml"}},He={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,V],subLanguage:"css"}},ve={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,V],subLanguage:"graphql"}},qe={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,V]},Ae={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},Me=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,ye,He,ve,qe,{match:/\$\d+/},ee];V.contains=Me.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(Me)});const le=[].concat(Ae,V.contains),De=le.concat([{begin:/(\s*)\(/,end:/\)/,keywords:l,contains:["self"].concat(le)}]),me={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:De},at={variants:[{match:[/class/,/\s+/,o,/\s+/,/extends/,/\s+/,n.concat(o,"(",n.concat(/\./,o),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,o],scope:{1:"keyword",3:"title.class"}}]},Fe={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ro,...ao]}},W={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ge={variants:[{match:[/function/,/\s+/,o,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[me],illegal:/%/},Ve={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ct(f){return n.concat("(?!",f.join("|"),")")}const st={match:n.concat(/\b/,ct([...co,"super","import"].map(f=>`${f}\\s*\\(`)),o,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},lt={begin:n.concat(/\./,n.lookahead(n.concat(o,/(?![0-9A-Za-z$_(])/))),end:o,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},we={match:[/get|set/,/\s+/,o,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},me]},We="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",c={match:[/const|var|let/,/\s+/,o,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(We)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[me]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:De,CLASS_REFERENCE:Fe},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),W,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,ye,He,ve,qe,Ae,{match:/\$\d+/},ee,Fe,{className:"attr",begin:o+n.lookahead(":"),relevance:0},c,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[Ae,t.REGEXP_MODE,{className:"function",begin:We,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:De}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:a},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},Ge,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[me,t.inherit(t.TITLE_MODE,{begin:o,className:"title.function"})]},{match:/\.\.\./,relevance:0},lt,{match:"\\$"+o,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[me]},st,Ve,at,we,{match:/\$[(.]/}]}}io.registerLanguage("javascript",rr);var it,so;class Mt extends j{constructor(e){super(e);R(this,it);this.language="javascript"}render(){return d`
      <pre part="container"><code>${nn(this.code)}</code></pre>
      <slot @slotchange="${()=>s(this,it,so).call(this)}"></slot>
    `}}it=new WeakSet,so=function(){const o=this.shadowRoot.querySelector("slot").assignedNodes()[0].textContent;this.code=io.highlight(o,{language:this.language}).value},x(Mt,"styles",[B(ci)]),x(Mt,"properties",{language:{type:String},code:{tyoe:String,state:!0}});customElements.define("code-block",Mt);const ar="::slotted([slot=demo]){aspect-ratio:var(--ratio-widescreen)}::slotted([slot=description]){padding-left:var(--size-2);color:var(--color-4);font-weight:var(--font-weight-3);font-size:var(--font-size-1);text-align:justify;border-left:3px solid var(--color-5)}[part=implementation-toggle]{display:flex;align-items:center;cursor:pointer}[part=implementation-toggle] i{margin-right:var(--size-1)}[part=implementation]{display:none;margin-bottom:var(--size-4);background-color:var(--color-10);border:2px solid var(--color-5);border-radius:var(--radius-1);box-shadow:var(--inner-shadow-4)}[part=implementation].active{display:block}[part=implementation-code]{padding-inline:var(--size-3)}[part=implementation-footer]{display:flex;align-items:center;justify-content:end;border-top:1px solid var(--color-6);padding-inline:var(--size-2)}[part=implementation-link]{padding:var(--size-2);font-size:var(--font-size-0)}.hidden{display:none}";var ce,lo,mo,fo;class Dt extends j{constructor(){super(...arguments);R(this,ce)}connectedCallback(){super.connectedCallback(),this.collapsed=!0,this.shadowRoot.addEventListener("slotchange",()=>{this.hasCodeExample=s(this,ce,lo).call(this,"code")})}updated(e){super.updated(e),e.has("collapsed")&&!this.collapsed&&this.shadowRoot.querySelector('[part="implementation"]').classList.add("active")}render(){return d`
      <slot name="title"></slot>
      <slot name="description"></slot>

      <div class="${this.hasCodeExample?"":"hidden"}">
        <h3 part="implementation-toggle" @click="${()=>{this.collapsed=!this.collapsed}}">
          <i class="material-icons-outlined">${this.collapsed?"visibility":"visibility_off"}</i>
          ${this.collapsed?"See the Implementation":"Hide the Implementation"} 
        </h3>
        <div part="implementation"
             class="${tt(s(this,ce,fo).call(this))}"
             @animationend="${e=>s(this,ce,mo).call(this,e)}">
          <div part="implementation-code">
            <slot name="code"></slot>
          </div>
          ${Z(this.href,()=>d`
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
    `}}ce=new WeakSet,lo=function(e){return this.shadowRoot.querySelector(`slot[name="${e}"]`).assignedNodes().length>0},mo=function(e){e.target.classList.toggle("active",!e.target.classList.contains("fade-out-shrink")),e.target.classList.remove("fade-in-grow","fade-out-shrink")},fo=function(){return{"fade-in-grow":this.collapsed===!1,"fade-out-shrink":this.collapsed===!0}},x(Dt,"styles",[q,F,B(ar)]),x(Dt,"properties",{collapsed:{type:Boolean},hasCodeExample:{type:Boolean,state:!0},exampleLanguage:{type:String},href:{type:String}});customElements.define("showcase-component",Dt);const cr="[part=showcase-link]{display:flex;flex-direction:column;gap:var(--size-2);justify-content:center;min-height:var(--size-9);margin:0;color:var(--color-0);font-weight:var(--font-weight-6);font-size:var(--size-3);text-align:center;text-decoration:none;background-color:var(--color-9);border:1px solid var(--color-10);border-radius:var(--radius-2);transition:background-color .4s,border-color .4s;padding-inline:var(--size-3)}[part=showcase-link]:hover{text-decoration:none;background-color:var(--color-8);border-color:var(--color-9)}div{margin-top:var(--size-7)}div:last-child{margin-bottom:var(--size-7)}a{font-size:inherit}",sr=`<!DOCTYPE html>
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
  const player = pillarbox('video-element-id');

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
`,lr=`<!DOCTYPE html>
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
`,mr=`<!DOCTYPE html>
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
      plugins: {
        blockedSegmentNotification: {
          delay: 5000, // Delay in milliseconds before hiding the notification
        }
      }
    }
  );

  // Load the video source for the player
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
`,fr=`<!DOCTYPE html>
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
    { plugins: { currentChapter: true } }
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
`,br=`<!DOCTYPE html>
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
  const player = pillarbox('video-element-id', { SkipButton: true });

  // Load the video source for the player
  player.src({ src: 'urn:rts:video:14683290', type: 'srgssr/urn' });
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
`,dr=`<!DOCTYPE html>
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
`,pr=`<!DOCTYPE html>
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
  const player = pillarbox('video-element-id', { plugins: { qualityMenu: true } });

  // Load the video source
  player.src({ src: 'urn:srf:video:593535b2-87c0-433a-8d2c-baf819233df1', type: 'srgssr/urn' });
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
`,ur=`<!DOCTYPE html>
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

      // Create a pillarbox player instance with the currentChapter plugin
      const player = pillarbox(
        'video-element-id',
        {
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
`;function hr(t){const n=t.replace(/^[\r\n]+|[\r\n]+$/g,""),o=n.split(`
`)[0].match(/^ */)[0].length,i=new RegExp(`^ {${o}}`,"gm");return n.replace(i,"")}const gr=new DOMParser;function se(t,n="[data-implementation]"){return hr(gr.parseFromString(t,"text/html").querySelector(n).textContent)}const yr=se(sr),vr=se(lr),wr=se(mr),kr=se(fr),xr=se(br),Sr=se(dr),Er=se(pr),Rr=se(ur);var I,po,uo,ho,go,yo,vo,wo,ko;class bo extends j{constructor(){super(...arguments);R(this,I)}render(){return d`
      ${s(this,I,po).call(this)}
      ${s(this,I,uo).call(this)}
      ${s(this,I,ho).call(this)}
      ${s(this,I,go).call(this)}
      ${s(this,I,yo).call(this)}
      ${s(this,I,vo).call(this)}
      ${s(this,I,wo).call(this)}
      ${s(this,I,ko).call(this)}
    `}}I=new WeakSet,po=function(){return d`
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
          <code-block slot="code" language="javascript">${yr}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/start-time.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `},uo=function(){return d`
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
          <code-block slot="code" language="javascript">${vr}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/multi-player.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `},ho=function(){return d`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="blocked-segment.html">
          <h2 slot="title">Detect Blocked Segments</h2>
          <p slot="description">
            This tutorial covers how to use pillarbox to create a plugin that
            detects and notifies when a blocked segment is skipped.
          </p>
          <code-block slot="code" language="javascript">${wr}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/blocked-segment.html"
           target="_blank">
          Open this showcase
        </a>
      </div>
    `},go=function(){return d`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="chapters.html">
          <h2 slot="title">Display Current Chapter</h2>
          <p slot="description">
            This showcase explains how to use pillarbox to create a plugin that
            displays the currently playing chapter in a box above the progress
            bar.
          </p>
          <code-block slot="code" language="javascript">${kr}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/chapters.html"
           target="_blank">
          Open this showcase
        </a>
      </div>
    `},yo=function(){return d`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="skip-credits.html">
          <h2 slot="title">Skip Credits</h2>
          <p slot="description">
            This example shows how to use the
            <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/skip-button#readme" target="_blank">Pillarbox Skip Button component</a>
            to add a "Skip" button during detected credit intervals.
          </p>
          <code-block slot="code" language="javascript">${xr}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/skip-credits.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `},vo=function(){return d`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="playlist.html">
          <h2 slot="title">Playlist</h2>
          <p slot="description">
            This example shows how to fetch media data for a set of video sources
            and load them into the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/pillarbox-playlist#readme" target="_blank">Pillarbox Playlist plugin</a>
            with metadata such as title and duration.
          </p>
          <code-block slot="code" language="javascript">${Sr}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/playlist.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `},wo=function(){return d`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="quality-menu.html">
          <h2 slot="title">Quality Menu</h2>
          <p slot="description">
            In this showcase, we'll demonstrate howto display a quality selector
            menu using the <a href="https://github.com/videojs/videojs-contrib-quality-menu">videojs-contrib-quality-menu</a>
            plugin.
          </p>
          <code-block slot="code" language="javascript">${Er}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/quality-menu.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `},ko=function(){return d`
      <div class="fade-in"
           @animationend="${e=>e.target.classList.remove("fade-in")}">
        <showcase-component href="countdown.html">
          <h2 slot="title">Countdown Timer</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to display a countdown timer.
          </p>
          <code-block slot="code" language="javascript">${Rr}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/countdown.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `},x(bo,"styles",[q,F,B(cr)]);customElements.define("showcase-page",bo);v.addRoute("showcase","showcase-page");const Cr="ul,li{margin:0;padding:0;list-style:none}route-link::part(a){padding:var(--size-1) var(--size-2);font-size:var(--size-4);border-radius:var(--radius-3);transition:background-color .4s,color .4s}route-link::part(a active){color:var(--color-8);text-decoration:none;background-color:var(--color-5);cursor:default;transition:background-color .8s,color .4s}core-demo-header{display:flex;align-items:center}core-demo-header route-link{margin-left:var(--size-2)}core-demo-header route-link::part(a){display:flex;align-items:center;text-decoration:none}core-demo-header .material-icons-outlined{font-size:var(--size-7)}nav ul{display:flex;margin-bottom:var(--size-4)}nav ul li{margin:0}";var ue,Le,xo,So;class It extends j{constructor(){super(...arguments);R(this,Le);R(this,ue,({detail:{queryParams:e}})=>{this.debug=e.debug==="true"})}connectedCallback(){super.connectedCallback(),this.debug=v.queryParams.debug==="true",v.addEventListener("routechanged",y(this,ue)),v.addEventListener("queryparams",y(this,ue))}disconnectedCallback(){v.removeEventListener("routechanged",y(this,ue)),v.removeEventListener("queryparams",y(this,ue))}render(){return d`
      ${s(this,Le,xo).call(this)}
      ${s(this,Le,So).call(this)}
    `}}ue=new WeakMap,Le=new WeakSet,xo=function(){return d`
      <core-demo-header>
        <route-link href="settings${this.debug?"?debug=true":""}"
                    title="Settings" slot="actions">
          <i class="material-icons-outlined">settings</i>
        </route-link>
      </core-demo-header>
    `},So=function(){return d`
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
      </nav>`},x(It,"properties",{debug:{type:Boolean,state:!0}}),x(It,"styles",[q,B(Cr)]);customElements.define("demo-header",It);class Eo extends j{constructor(){super(),this.route=v.currentRoute,v.addEventListener("routechanged",({detail:{route:n}})=>{var e;(e=this.route)==null||e.destroy(),this.route=n})}render(){return nn(`<${this.route.component}></${this.route.component}>`)}}x(Eo,"properties",{route:{state:!0}});customElements.define("route-outlet",Eo);const et=Se.loadPreferences();P.host=et.dataProviderHost;v.start({defaultPath:"examples"});v.queryParams.debug?(et.debug=v.queryParams.debug==="true",Se.savePreferences(et)):et.debug&&v.updateState({debug:"true"});
//# sourceMappingURL=index-ClzD4cKW.js.map
