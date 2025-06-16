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
import rawPlaylistExample from '../../../../static/showcases/playlist.html?raw';
import rawqualityMenuExample from '../../../../static/showcases/quality-menu.html?raw';
import rawCountdown from '../../../../static/showcases/countdown.html?raw';
import rawPlaybackRate from '../../../../static/showcases/playback-rate.html?raw';
import rawChapterSelection from '../../../../static/showcases/chapter-selection.html?raw';
import rawFirefoxPiP from '../../../../static/showcases/firefox-pip.html?raw';
import rawSpatialNavigation from '../../../../static/showcases/spatial-navigation.html?raw';
import { getTextFromHTML } from './example-parser.js';

const startTimeExampleTxt = getTextFromHTML(rawStartTimeExample);
const multiPlayerExampleTxt = getTextFromHTML(rawMultiPlayerExample);
const detectBlockedSegmentsExampleTxt =
  getTextFromHTML(rawDetectBlockedSegmentsExample);
const displayCurrentChapterExampleTxt =
  getTextFromHTML(rawDisplayCurrentChapterExample);
const skipCreditsExampleTxt = getTextFromHTML(rawSkipCreditsExample);
const playlistExampleTxt = getTextFromHTML(rawPlaylistExample);
const qualityMenuExampleTxt = getTextFromHTML(rawqualityMenuExample);
const countdownExampleTxt = getTextFromHTML(rawCountdown);
const playbackRateExampleTxt = getTextFromHTML(rawPlaybackRate);
const chapterSelectionExampleTxt = getTextFromHTML(rawChapterSelection);
const FirefoxPiPExampleTxt = getTextFromHTML(rawFirefoxPiP);
const spatialNavigationTxt = getTextFromHTML(rawSpatialNavigation);

export class ShowCasePage extends LitElement {
  static styles = [theme, animations, unsafeCSS(showcasePageCss)];

  render() {
    return html`
      ${this.#renderStartTime()}
      ${this.#renderMultiplePlayers()}
      ${this.#renderDetectBlockedSegments()}
      ${this.#renderDisplayCurrentChapter()}
      ${this.#renderSkipCredits()}
      ${this.#renderPlaylist()}
      ${this.#renderQualityMenu()}
      ${this.#renderCountdown()}
      ${this.#renderPlaybackRate()}
      ${this.#renderChapterSelection()}
      ${this.#renderFirefoxPiP()}
      ${this.#renderSpatialNavigation()}
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
        <a part="showcase-link" href="./static/showcases/start-time.html" target="_blank">
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
        <a part="showcase-link" href="./static/showcases/multi-player.html" target="_blank">
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
        <a part="showcase-link" href="./static/showcases/blocked-segment.html"
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
        <a part="showcase-link" href="./static/showcases/chapters.html"
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
            This example shows how to use the
            <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/skip-button#readme" target="_blank">Pillarbox Skip Button component</a>
            to add a "Skip" button during detected credit intervals.
          </p>
          <code-block slot="code" language="javascript">${skipCreditsExampleTxt}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/skip-credits.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }

  #renderPlaylist() {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="playlist.html">
          <h2 slot="title">Playlist</h2>
          <p slot="description">
            This example shows how to fetch media data for a set of video sources
            and load them into the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/pillarbox-playlist#readme" target="_blank">Pillarbox Playlist plugin</a>
            with metadata such as title and duration.
          </p>
          <code-block slot="code" language="javascript">${playlistExampleTxt}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/playlist.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }

  #renderQualityMenu() {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="quality-menu.html">
          <h2 slot="title">Quality Menu</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to display a quality selector
            menu using the <a href="https://github.com/videojs/videojs-contrib-quality-menu">videojs-contrib-quality-menu</a>
            plugin.
          </p>
          <code-block slot="code" language="javascript">${qualityMenuExampleTxt}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/quality-menu.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }

  #renderCountdown() {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="countdown.html">
          <h2 slot="title">Countdown Timer</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to display a countdown timer.
          </p>
          <code-block slot="code" language="javascript">${countdownExampleTxt}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/countdown.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }

  #renderPlaybackRate() {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="playback-rate.html">
          <h2 slot="title">Playback Rate</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to display the playback rate compoment.
          </p>
          <code-block slot="code" language="javascript">${playbackRateExampleTxt}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/playback-rate.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }

  #renderChapterSelection() {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="chapter-selection.html">
          <h2 slot="title">Chapter Selection</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to display a chapter selector.
          </p>
          <code-block slot="code" language="javascript">${chapterSelectionExampleTxt}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/chapter-selection.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }

  #renderFirefoxPiP() {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="firefox-pip.html">
          <h2 slot="title">Hide Firefox PiP Button</h2>
          <p slot="description">
            In this showcase, we'll demonstrate how to hide Firefox PiP Button. Activating or deactivating PiP in Firefox applies at the next player resize, such as when entering full screen mode. This appears to be due to an implementation bug in Firefox. Refer to the <a href="https://github.com/SRGSSR/pillarbox-web-demo/pull/57" target="_blank">PR</a> for more details.
          </p>
          <code-block slot="code" language="javascript">${FirefoxPiPExampleTxt}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/firefox-pip.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }

  #renderSpatialNavigation() {
    return html`
      <div class="fade-in"
           @animationend="${e => e.target.classList.remove('fade-in')}">
        <showcase-component href="spatial-navigation.html">
          <h2 slot="title">Enable Spatial Navigation</h2>
          <p slot="description">
            In this showcase, we will demonstrate how to enable <a href="https://videojs.com/guides/spatial-navigation/" target="_blank" rel="noopener noreferrer">spatial navigation</a>, allowing users to control the player with a remote on smart TVs like Tizen and webOS.
            <br>
            <br>
            <i>Note: If you're targeting TV devices with spatial navigation, consider removing the volume button and setting muted: false, as volume is typically handled by the device itself.</i>
          </p>
          <code-block slot="code" language="javascript">${spatialNavigationTxt}</code-block>
        </showcase-component>
        <a part="showcase-link" href="./static/showcases/spatial-navigation.html" target="_blank">
          Open this showcase
        </a>
      </div>
    `;
  }
}

customElements.define('showcase-page', ShowCasePage);
router.addRoute('showcase', 'showcase-page');
