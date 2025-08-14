import { html, LitElement, unsafeCSS } from 'lit';
import componentCSS from './search-bar-component.scss?inline';
import pillarbox from '@srgssr/pillarbox-web';
import { theme } from '../../../theme/theme.js';

const DEFAULT_BU = 'rsi';

/**
 * A search bar component for filtering content based on a query and business unit.
 *
 * @element search-bar
 *
 * @fires SearchBarComponent#change - Dispatched when the value of the search bar changes.
 */
export class SearchBarComponent extends LitElement {
  static properties = {
    bu: { type: String },
    query: { type: String }
  };

  static styles = [theme, unsafeCSS(componentCSS)];

  constructor() {
    super();
    this.bu = DEFAULT_BU;
    this.query = '';
  }

  #handleSearchBarKeyUp() {
    this.query = this.renderRoot.querySelector('input').value;
  }

  #handleSelectChange(e) {
    this.bu = e.target.value;
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);

    if (['bu', 'query'].some(property => _changedProperties.has(property))) {
      const query = this.query ?? '';
      const bu = this.bu ?? DEFAULT_BU;

      /**
       * Custom event dispatched by SearchBarComponent when the value of the bar changes.
       *
       * @event SearchBarComponent#change
       * @type {CustomEvent}
       * @property {Object} detail - The event detail object.
       * @property {string} detail.query - The query on the search bar.a
       * @property {string} detail.bu - The selected bu.
       */
      this.dispatchEvent(new CustomEvent('change', {
        detail: { query, bu }
      }));
    }
  }

  #clearSearchBar() {
    this.query = '';
    this.renderRoot.querySelector('input').value = '';
  }

  render() {
    return html`
      <div part="search-bar-container">
        <select aria-label="Select a business unit"
                .value="${this.bu ?? DEFAULT_BU}"
                @change="${this.#handleSelectChange}">
          <option value="rsi" selected>RSI</option>
          <option value="rtr">RTR</option>
          <option value="rts">RTS</option>
          <option value="srf">SRF</option>
          <option value="swi">SWI</option>
        </select>
        <input type="text"
               placeholder="Search for content..."
               @keyup="${pillarbox.fn.debounce(this.#handleSearchBarKeyUp, 500)}"
               .value="${this.query ?? ''}">
        <button title="Clear search"
                @click="${this.#clearSearchBar}">
          <slot name="clear-icon"></slot>
        </button>
      </div>
    `;
  }
}

customElements.define('search-bar', SearchBarComponent);
