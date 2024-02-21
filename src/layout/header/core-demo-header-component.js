import githubLogoSvg from '../../../img/github-logo.svg?raw';
import srgssrLogo from '../../../img/srgssr-logo.png';
import { html, LitElement, unsafeCSS } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import '../../router/route-link-component';
import { theme } from '../../theme/theme';
import coreHeaderCss from './core-demo-header-component.scss?inline';

/**
 * A web component that represents the header element of the demo page. This element
 * contains only the branding and a link to the GitHub page, it can be extended
 * with a custom action.
 *
 * @element core-demo-header
 *
 * @slot actions - Allows for the insertion of custom content at the end of the header.
 *
 * @example
 * <core-demo-header>
 *   <button slot="actions">Custom Action</button>
 * </core-demo-header>
 */
export class CoreDemoHeaderComponent extends LitElement {
  static styles = [theme, unsafeCSS(coreHeaderCss)];

  render() {
    return html`
      <header>
        <h1>
          <img class="pbw-logo" src="${srgssrLogo}"/>
          <span>Pillarbox</span>
        </h1>
        <div class="header-end">
          <a href="https://github.com/srgssr/pillarbox-web" class="github-link"
             title="Source on Github">
            ${unsafeSVG(githubLogoSvg)}
          </a>
          <slot name="actions"></slot>
        </div>
      </header>`;
  }
}

customElements.define('core-demo-header', CoreDemoHeaderComponent);
