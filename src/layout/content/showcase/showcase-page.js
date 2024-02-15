import router from '../../../router/router';
import { html, LitElement, unsafeCSS } from 'lit';
import { animations, theme } from '../../../theme/theme';
import './showcase-component.js';
import '../../../components/code-block/code-block';
import showcasePageCss from './showcase-page.scss?inline';
import startTimeExampleTxt from './examples/starttime-example.txt?raw';

export class ShowCasePage extends LitElement {
  static styles = [theme, animations, unsafeCSS(showcasePageCss)];

  render() {
    return html`
      <!-- List of showcases -->
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component>
          <h2 slot="title">Start the player at a given position</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to load a video source and
            start playback at a specific position using Pillarbox. This can be
            useful when you want to provide users with the option to begin
            watching a video from a predefined timestamp. To achieve this
            functionality, follow the code snippet below:
          </p>
          <code-block slot="code" language="javascript">${startTimeExampleTxt}
          </code-block>
        </showcase-component>
        <a href="./static/showcases/start-time.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }
}

customElements.define('showcase-page', ShowCasePage);
router.addRoute('showcase', 'showcase-page');
