import { html, LitElement, unsafeCSS } from 'lit';
import { animations, theme } from '../../../theme/theme';
import componentCSS from './load-media-form-component.scss?inline';
import { classMap } from 'lit/directives/class-map.js';

/**
 * LoadMediaFormComponent is a LitElement that provides a user interface for loading media content.
 *
 * @element load-media-form
 *
 * @fires LoadMediaFormComponent#submit-media - Dispatched when the user submits media with the specified details.
 *
 * @prop {String} src - The URL or URN of the media content to be loaded.
 * @prop {{vendor: String, certificateUri: String, licenseUri: String}} drmSettings - DRM settings for the loaded media.
 */
export class LoadMediaFormComponent extends LitElement {
  static properties = {
    src: { type: String },
    drmSettings: { type: Object },
    drmSettingsShown: { state: true, type: Boolean }
  };

  static styles = [theme, animations, unsafeCSS(componentCSS)];

  constructor() {
    super();

    this.src = '';
    this.#initDrmSettings();
  }

  #initDrmSettings() {
    this.drmSettings = {
      vendor: '',
      certificateUri: '',
      licenseUri: ''
    };
  }

  #getSource() {
    try {
      return new URL(this.src).searchParams.get('urn') ?? this.src;
    } catch {
      return this.src;
    }
  }

  #submitMedia() {
    const src = this.#getSource()?.trim();
    const type = src.startsWith('urn:') ? 'srgssr/urn' : undefined;
    const keySystems = this.#keySystems;

    /**
     * Custom event dispatched by LoadMediaFormComponent when the user submits media.
     *
     * @event LoadMediaFormComponent#submit-media
     * @type {CustomEvent}
     * @property {Object} detail - The event detail object.
     * @property {string} detail.src - The URL or URN of the media content to be loaded.
     * @property {string | undefined} detail.type - The type of media. Undefined if the type cannot be determined.
     * @property {Object | undefined} detail.keySystems - DRM key systems for the loaded media.
     */
    this.dispatchEvent(new CustomEvent('submit-media', {
      detail: { src, type, keySystems }
    }));
  }

  #handleLoadBarKeyUp(event) {
    this.src = event.target.value;

    if (event.key === 'Enter' && this.src) {
      this.#submitMedia();
    }
  }

  get #keySystems() {
    if (!this.drmSettings?.vendor) {
      return undefined;
    }

    return this.#toKeySystem();
  }

  #toKeySystem() {
    const certificateUri = this.drmSettings.certificateUri?.trim();
    const licenseUri = this.drmSettings.licenseUri?.trim();

    if (this.drmSettings.vendor === 'com.apple.fps.1_0') {
      return { [this.drmSettings.vendor]: { certificateUri, licenseUri } };
    }

    return { [this.drmSettings.vendor]: licenseUri };
  }

  render() {
    const btnSettingsClassMap = {
      spin: this.drmSettingsShown === true,
      'spin-back': this.drmSettingsShown === false
    };

    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <div class="load-bar-container">
          <i class="material-icons-outlined">insert_link</i>
          <input type="text"
                 placeholder="Enter a URL or URN to play its content..."
                 @keyup="${this.#handleLoadBarKeyUp}"
                 .value="${this.src ?? ''}">
          <button title="Open DRM Settings"
                  @click="${() => { this.drmSettingsShown = !this.drmSettingsShown; }}">
            <i class="material-icons-outlined ${classMap(btnSettingsClassMap)}"
               @animationend="${e => e.target.classList.remove('spin', 'spin-back')}">
              key
            </i>
          </button>
        </div>
        
        ${this.#drmSettingsTemplate()}

        <button class="icon-btn load-bar-action"
                ?disabled="${!this.src}"
                @click="${this.#submitMedia}">
          <i class="material-icons-outlined">play_circle</i> Play content
        </button>
      </div>
    `;
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);

    if (_changedProperties.has('drmSettingsShown') && this.drmSettingsShown) {
      this.shadowRoot.querySelector('.drm-settings-container').classList.add('active');
    }
  }

  #onFormAnimationEnd(e) {
    e.target.classList.toggle('active', !e.target.classList.contains('fade-out-shrink'));
    e.target.classList.remove('fade-in-grow', 'fade-out-shrink');
  }

  #formAnimationClassMap() {
    return {
      'fade-in-grow': this.drmSettingsShown === true,
      'fade-out-shrink': this.drmSettingsShown === false
    };
  }

  #drmSettingsTemplate() {
    return html`
      <form class="drm-settings-container ${classMap(this.#formAnimationClassMap())}"
            aria-hidden="${!this.drmSettingsShown}"
            @reset="${this.#initDrmSettings}"
            @animationend="${e => this.#onFormAnimationEnd(e)}">
        <h3>DRM Settings</h3>
        <select aria-label="Select a DRM vendor" required
                .value="${this.drmSettings.vendor}"
                @change="${e => { this.drmSettings.vendor = e.target.value; }}">
          <option value="" disabled selected hidden>Select a DRM vendor
          </option>
          <option value="com.widevine.alpha">Widevine</option>
          <option value="com.apple.fps.1_0">Fairplay</option>
          <option value="com.microsoft.playready">PlayReady</option>
        </select>
        <input type="text"
               placeholder="Enter the license uri..."
               .value="${this.drmSettings.licenseUri}"
               @input="${e => { this.drmSettings.licenseUri = e.target.value; }}">
        <input type="text"
               placeholder="Enter the certificate uri..."
               .value="${this.drmSettings.certificateUri}"
               @input="${e => { this.drmSettings.certificateUri = e.target.value; }}">
        <button class="icon-btn warning-text" type="reset">
          <i class="material-icons-outlined">delete</i>Clear Settings
        </button>
        <hr>
      </form>
    `;
  }
}

customElements.define('load-media-form', LoadMediaFormComponent);
