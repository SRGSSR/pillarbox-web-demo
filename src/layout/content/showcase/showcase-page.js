import router from '../../../router/router';
import { html, LitElement, unsafeCSS } from 'lit';
import { animations, theme } from '../../../theme/theme';
import './showcase-component.js';
import '../../../components/code-block/code-block';
import showcasePageCss from './showcase-page.scss?inline';
import startTimeExampleTxt from './examples/starttime-example.txt?raw';
import multiPlayerExample from './examples/multi-player-example.txt?raw';

export class ShowCasePage extends LitElement {
  static styles = [theme, animations, unsafeCSS(showcasePageCss)];

  render() {
    return html`
        ${this.#renderStartTime()}
        ${this.#renderMultiplePlayers()}
    `;
  }

  #renderStartTime() {
    return html`
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
          <code-block slot="code" language="javascript">${startTimeExampleTxt}</code-block>
        </showcase-component>
        <a href="./static/showcases/start-time.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }

  #renderMultiplePlayers() {
    return html`
      <div class="fade-in" @animationend="${e => e.target.classList.remove('fade-in')}">
      <showcase-component>
        <h2 slot="title">Multiple Players</h2>
        <p slot="description">
          This example demonstrates how to incorporate multiple video players
          on a webpage.In this showcase, two players are initialized, each
          with its own configuration, a button allows to toggle the mute state
          for both players.
        </p>
        <code-block slot="code" language="javascript">${multiPlayerExample}</code-block>
      </showcase-component>
      <a href="./static/showcases/multi-player.html" target="_blank">
        Open this showcase
      </a>
    </div>
    `;
  }
}

customElements.define('showcase-page', ShowCasePage);
router.addRoute('showcase', 'showcase-page');
