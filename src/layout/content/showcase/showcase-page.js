import router from '../../../router/router';
import { html, LitElement } from 'lit';
import './showcase-component.js';
import '../../../components/code-block/code-block';
import { showcases } from './showcases.js';
import { map } from 'lit/directives/map.js';

export class ShowCasePage extends LitElement {

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      ${map(showcases ?? [], this.#renderItem.bind(this))}
    `;
  }


  #renderItem({ id, href, title, description, code }) {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="${href}">
          <a id="${id}" href="#${id}" slot="title" part="anchor-title">
            <h2>${title}</h2>
          </a>
          <p slot="description">${description}</p>
          <span slot="toggle-collapsed">
            <i class="material-symbols-outlined">visibility</i> See the Implementation
          </span>
          <span slot="toggle-expanded">
            <i class="material-symbols-outlined">visibility_off</i> Hide the Implementation
          </span>
          <code-block slot="code" language="javascript">${code}</code-block>
        </showcase-component>
        <a part="showcase-link"
           href="./static/showcases/${href}"
           target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }
}

customElements.define('showcase-page', ShowCasePage);
router.addRoute('showcase', 'showcase-page');
