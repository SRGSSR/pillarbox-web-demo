import { html, LitElement, unsafeCSS } from 'lit';
import '../../../components/code-block/code-block';
import { animations, theme } from '../../../theme/theme';
import showcaseComponentCss from './showcase-component.scss?inline';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';

export class ShowcaseComponent extends LitElement {
  static styles = [theme, animations, unsafeCSS(showcaseComponentCss)];

  static properties = {
    collapsed: { type: Boolean },
    hasCodeExample: { type: Boolean, state: true },
    exampleLanguage: { type: String },
    href: { type: String }
  };

  connectedCallback() {
    super.connectedCallback();
    this.collapsed = true;
    this.shadowRoot.addEventListener('slotchange', () => {
      this.hasCodeExample = this.#hasSlot('code');
    });
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);

    if (_changedProperties.has('collapsed') && !this.collapsed) {
      this.shadowRoot.querySelector('[part="implementation"]').classList.add('active');
    }
  }

  #hasSlot(name) {
    return this.shadowRoot.querySelector(`slot[name="${name}"]`).assignedNodes().length > 0;
  }

  #implementationSectionAnimationEnd(e) {
    e.target.classList.toggle('active', !e.target.classList.contains('fade-out-shrink'));
    e.target.classList.remove('fade-in-grow', 'fade-out-shrink');
  }

  #implementationSectionClassMap() {
    return {
      'fade-in-grow': this.collapsed === false,
      'fade-out-shrink': this.collapsed === true
    };
  }

  render() {
    return html`
      <slot name="title"></slot>
      <slot name="description"></slot>

      <div class="${!this.hasCodeExample ? 'hidden' : ''}">
        <h3 part="implementation-toggle" @click="${() => {
          this.collapsed = !this.collapsed;
        }}">
          <i class="material-symbols-outlined">${this.collapsed ? 'visibility' : 'visibility_off'}</i>
          ${this.collapsed ? 'See the Implementation' : 'Hide the Implementation'} 
        </h3>
        <div part="implementation"
             class="${classMap(this.#implementationSectionClassMap())}"
             @animationend="${e => this.#implementationSectionAnimationEnd(e)}">
          <div part="implementation-code">
            <slot name="code"></slot>
          </div>
          ${when(this.href, () => html`
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
    `;
  }
}

customElements.define('showcase-component', ShowcaseComponent);
