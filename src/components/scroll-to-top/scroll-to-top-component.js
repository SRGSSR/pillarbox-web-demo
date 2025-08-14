import { html, LitElement, unsafeCSS } from 'lit';
import componentCss from './scroll-to-top-component.scss?inline';
import { theme } from '../../theme/theme';

/**
 * A custom web component that renders a button to scroll the page to the top.
 *
 * @prop {string} title - The tooltip text shown on hover over the button. Defaults to `"Scroll to top"`.
 *
 * @csspart scroll-to-top-button - The actual `<button>` element. Can be styled from outside using `::part(scroll-to-top-button)`.
 *
 * @slot icon - A named slot to provide a custom icon inside the button. Default is empty.
 *
 * @element scroll-to-top-button
 *
 * @example
 * <!-- Basic usage -->
 * <scroll-to-top-button></scroll-to-top-button>
 *
 * <!-- Using a custom icon -->
 * <scroll-to-top-button title="Go up">
 *   <svg slot="icon" viewBox="0 0 24 24"><path d="..."/></svg>
 * </scroll-to-top-button>
 */
export class ScrollToTopComponent extends LitElement {
  static properties = {
    title: { type: String }
  };
  static styles = [theme, unsafeCSS(componentCss)];

  constructor() {
    super();
    this.title = 'Scroll to top';
  }

  render() {
    return html`
      <button part="scroll-to-top-button" title="${this.title}"
              @click="${() => window.scrollTo({ top: 0, behavior: 'smooth' })}">
        <slot name="icon"></slot>
      </button>
    `;
  }
}

customElements.define('scroll-to-top-button', ScrollToTopComponent);
