import router from '../../../router/router';
import { html, LitElement, unsafeCSS } from 'lit';
import { animations, theme } from '../../../theme/theme';
import '../../../components/toggle-switch/toggle-switch-component.js';
import PreferencesProvider from './preferences-provider';
import componentCss from './settings-page.scss?inline';
import ilProvider from '../../../utils/il-provider.js';

/**
 * A web component that represents the settings page.
 *
 * @element settings-page
 */
export class SettingsPage extends LitElement {
  static properties = {
    autoplay: { type: Boolean, state: true },
    muted: { type: Boolean, state: true },
    debug: { type: Boolean, state: true },
    dataProviderHost: { type: String, state: true }
  };

  static styles = [theme, animations, unsafeCSS(componentCss)];

  constructor() {
    super();
    const preferences = PreferencesProvider.loadPreferences();

    this.autoplay = preferences.autoplay ?? false;
    this.muted = preferences.muted ?? true;
    this.debug = preferences.debug ?? false;
    this.dataProviderHost = preferences.dataProviderHost;
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);

    const preferences = PreferencesProvider.loadPreferences();

    [..._changedProperties.keys()]
      .filter(property => ['autoplay', 'muted', 'debug', 'dataProviderHost'].includes(property))
      .forEach((property) => {
        preferences[property] = this[property];
      });

    PreferencesProvider.savePreferences(preferences);

    if (_changedProperties.has('debug')) {
      router.replaceState(this.debug ? { debug: 'true' } : {});
    }

    if (_changedProperties.has('dataProviderHost')) {
      ilProvider.host = this.dataProviderHost;
    }
  }

  #renderToggle(property, label) {
    return html`
      <div part="toggle-container">
        <label for="${property}-switch" part="label">${label}</label>
        <toggle-switch id="${property}-switch"
                       part="toggle-switch"
                       exportparts="slider, switch"
                       ?checked="${this[property]}"
                       @change="${(e) => {
                         this[property] = e.detail.checked;
                       }}">
        </toggle-switch>
      </div>
    `;
  }

  #renderInput(property, label) {
    return html`
      <div part="input-container">
        <label for="${property}-input" part="label">${label}</label>
        <input type="text"
               part="input"
               placeholder="il.srgssr.ch"
               id="${property}-input"
               .value="${this[property] ?? ''}"
               @keyup="${(e) => {
                 this[property] = e.target.value === '' ? undefined : e.target.value;
               }}">
      </div>
    `;
  }

  render() {
    return html`
      <section class="fade-in" @animationend="${e => e.target.classList.remove('fade-in')}">
        <h2 part="title">Player Settings</h2>
        ${this.#renderToggle('autoplay', 'Autoplay')}
        ${this.#renderToggle('muted', 'Player starts muted')}
        ${this.#renderToggle('debug', 'Enable debug mode')}
        ${this.#renderInput('dataProviderHost', 'Data provider host')}
      </section>
    `;
  }
}

customElements.define('settings-page', SettingsPage);
router.addRoute('settings', 'settings-page');
