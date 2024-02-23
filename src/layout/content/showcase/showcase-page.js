import router from '../../../router/router';
import { html, LitElement, unsafeCSS } from 'lit';
import { animations, theme } from '../../../theme/theme';
import './showcase-component.js';
import '../../../components/code-block/code-block';
import showcasePageCss from './showcase-page.scss?inline';
import rawStartTimeExample from '../../../../static/showcases/start-time.html?raw';
import rawMultiPlayerExample from '../../../../static/showcases/multi-player.html?raw';
import rawDetectBlockedSegmentsExample from '../../../../static/showcases/blocked-segment.html?raw';
import rawDisplayCurrentChapterExample from '../../../../static/showcases/chapters.html?raw';
import rawSkipCreditsExample from '../../../../static/showcases/skip-credits.html?raw';
import { getTextFromHTML } from './example-parser.js';

const startTimeExampleTxt = getTextFromHTML(rawStartTimeExample);
const multiPlayerExampleTxt = getTextFromHTML(rawMultiPlayerExample);
const detectBlockedSegmentsExampleTxt =
  getTextFromHTML(rawDetectBlockedSegmentsExample);
const displayCurrentChapterExampleTxt =
  getTextFromHTML(rawDisplayCurrentChapterExample);
const skipCreditsExampleTxt = getTextFromHTML(rawSkipCreditsExample);

export class ShowCasePage extends LitElement {
  static styles = [theme, animations, unsafeCSS(showcasePageCss)];

  render() {
    return html`
      ${this.#renderStartTime()}
      ${this.#renderMultiplePlayers()}
      ${this.#renderDetectBlockedSegments()}
      ${this.#renderDisplayCurrentChapter()}
      ${this.#renderSkipCredits()}
    `;
  }

  #renderStartTime() {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="start-time.html">
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
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="multi-player.html">
          <h2 slot="title">Multiple Players</h2>
          <p slot="description">
            This example demonstrates how to incorporate multiple video players
            on a webpage.In this showcase, two players are initialized, each
            with its own configuration, a button allows to toggle the mute state
            for both players.
          </p>
          <code-block slot="code" language="javascript">${multiPlayerExampleTxt}</code-block>
        </showcase-component>
        <a href="./static/showcases/multi-player.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }

  #renderDetectBlockedSegments() {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="blocked-segment.html">
          <h2 slot="title">Detect Blocked Segments</h2>
          <p slot="description">
            This tutorial covers how to use pillarbox to create a plugin that
            detects and notifies when a blocked segment is skipped.
          </p>
          <code-block slot="code" language="javascript">${detectBlockedSegmentsExampleTxt}</code-block>
        </showcase-component>
        <a href="./static/showcases/blocked-segment.html"
           target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }

  #renderDisplayCurrentChapter() {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="chapters.html">
          <h2 slot="title">Display Current Chapter</h2>
          <p slot="description">
            This showcase explains how to use pillarbox to create a plugin that
            displays the currently playing chapter in a box above the progress
            bar.
          </p>
          <code-block slot="code" language="javascript">${displayCurrentChapterExampleTxt}</code-block>
        </showcase-component>
        <a href="./static/showcases/chapters.html"
           target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }

  #renderSkipCredits() {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="skip-credits.html">
          <h2 slot="title">Skip Credits</h2>
          <p slot="description">
            This example shows how to use pillarbox to create a plugin that adds
            a "Skip" button during detected credit intervals.
          </p>
          <code-block slot="code" language="javascript">${skipCreditsExampleTxt}</code-block>
        </showcase-component>
        <a href="./static/showcases/skip-credits.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }
}

customElements.define('showcase-page', ShowCasePage);
router.addRoute('showcase', 'showcase-page');
