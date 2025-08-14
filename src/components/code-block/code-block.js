import { html, LitElement, unsafeCSS } from 'lit';
import componentCss from './code-block.scss?inline';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

export class CodeBlock extends LitElement {
  static styles = [unsafeCSS(componentCss)];
  static properties = {
    language: { type: String },
    code: { tyoe: String, state: true }
  };

  constructor() {
    super();
    this.language = 'javascript';
  }

  #onCodeChanged() {
    const slottedElements = this.shadowRoot.querySelector('slot').assignedNodes();
    const codeStr = slottedElements[0].textContent;

    this.code = hljs.highlight(codeStr, { language: this.language }).value;
  }

  render() {
    return html`
      <pre part="container"><code>${unsafeHTML(this.code)}</code></pre>
      <slot @slotchange="${() => this.#onCodeChanged()}"></slot>
    `;
  }
}

customElements.define('code-block', CodeBlock);
