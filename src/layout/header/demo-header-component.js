import { html, LitElement } from 'lit';
import '../../router/route-link-component';
import router from '../../router/router';
import './core-demo-header-component.js';

/**
 * A web component that represents the header of the demo page. This header contains
 * the {@link CoreDemoHeaderComponent} as well as the navigation menu of the
 * different demo app sections.
 *
 * @element demo-header
 *
 * @prop {Boolean} debug - Indicates whether the debug mode is enabled.
 *
 * @example
 * <demo-header></demo-header>
 */
export class DemoHeaderElement extends LitElement {
  static properties = {
    debug: { type: Boolean, state: true }
  };

  createRenderRoot() {
    return this;
  }

  #onRouteUpdated = ({ detail: { queryParams } }) => {
    this.debug = queryParams.debug === 'true';
  };

  connectedCallback() {
    super.connectedCallback();

    this.debug = router.queryParams.debug === 'true';
    router.addEventListener('routechanged', this.#onRouteUpdated);
    router.addEventListener('queryparams', this.#onRouteUpdated);
  }

  disconnectedCallback() {
    router.removeEventListener('routechanged', this.#onRouteUpdated);
    router.removeEventListener('queryparams', this.#onRouteUpdated);
  }

  render() {
    return html`
      ${this.#renderHeaderElement()}
      ${this.#renderNavElement()}
    `;
  }

  #renderHeaderElement() {
    return html`
      <core-demo-header>
        <route-link href="settings${this.debug ? '?debug=true' : ''}"
                    title="Settings" slot="actions">
          <i class="material-symbols-outlined">settings</i>
        </route-link>
      </core-demo-header>
    `;
  }

  #renderNavElement() {
    return html`
      <nav>
        <ul>
          <li>
            <route-link href="examples${this.debug ? '?debug=true' : ''}">
              Examples
            </route-link>
          </li>
          <li>
            <route-link href="search${this.debug ? '?debug=true' : ''}">Search
            </route-link>
          </li>
          <li>
            <route-link href="lists${this.debug ? '?debug=true' : ''}">Lists
            </route-link>
          </li>
          <li>
            <route-link href="showcase${this.debug ? '?debug=true' : ''}">
              Showcase
            </route-link>
          </li>
        </ul>
      </nav>`;
  }
}

customElements.define('demo-header', DemoHeaderElement);
