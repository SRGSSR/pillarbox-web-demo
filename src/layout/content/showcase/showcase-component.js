import { html, LitElement, unsafeCSS } from 'lit';
import '../../../components/code-block/code-block';
import { theme } from '../../../theme/theme';
import showcaseComponentCss from './showcase-component.scss?inline';

export class ShowcaseComponent extends LitElement {
  static styles = [theme, unsafeCSS(showcaseComponentCss)];

  static properties = {
    hasCodeExample: { type: Boolean, state: true },
    exampleLanguage: { type: String }
  };

  connectedCallback() {
    super.connectedCallback();
    this.shadowRoot.addEventListener('slotchange', () => {
      this.hasCodeExample = this.#hasSlot('code');
    });
  }

  #hasSlot(name) {
    return this.shadowRoot.querySelector(`slot[name="${name}"]`).assignedNodes().length > 0;
  }

  render() {
    return html`
      <slot name="title"></slot>
      <slot name="description"></slot>

      <div class="${!this.hasCodeExample ? 'hidden' : ''}">
        <h3>Implementation</h3>
        <slot name="code"></slot>
      </div>
    `;
  }
}

customElements.define('showcase-component', ShowcaseComponent);
