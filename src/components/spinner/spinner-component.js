import { html, LitElement, unsafeCSS } from 'lit';
import componentCss from './spinner-component.scss?inline';

/**
 * A custom web component that renders a loading spinner.
 *
 * @element loading-spinner
 *
 * @part spinner-container - The container `<div>` that wraps the spinner. Can be styled externally using `::part(spinner-container)`.
 * @part spinner - The actual spinner element that animates. Can be styled externally using `::part(spinner)`.
 *
 * @prop {boolean} loading - Controls whether the spinner is visible. Defaults to `false`. Reflected to the attribute `loading`.
 *
 * @example
 * <!-- Show spinner -->
 * <loading-spinner loading></loading-spinner>
 *
 * <!-- Hide spinner -->
 * <loading-spinner></loading-spinner>
 */
export class SpinnerComponent extends LitElement {
  static properties = {
    loading: { type: Boolean, reflect: true }
  };

  static styles = unsafeCSS(componentCss);

  constructor() {
    super();
    this.loading = false;
  }

  render() {
    return html`
      <div part="spinner-container" ?hidden="${!this.loading}">
        <div part="spinner"></div>
      </div>
    `;
  }
}

customElements.define('loading-spinner', SpinnerComponent);
