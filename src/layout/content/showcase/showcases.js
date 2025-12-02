import rawStartTimeExample from '../../../../static/showcases/start-time.html?raw';
import rawMultiPlayerExample from '../../../../static/showcases/multi-player.html?raw';
import rawDetectBlockedSegmentsExample from '../../../../static/showcases/blocked-segment.html?raw';
import rawDisplayCurrentChapterExample from '../../../../static/showcases/chapters.html?raw';
import rawSkipCreditsExample from '../../../../static/showcases/skip-credits.html?raw';
import rawPlaylistExample from '../../../../static/showcases/playlist.html?raw';
import rawQualityMenuExample from '../../../../static/showcases/quality-menu.html?raw';
import rawCountdown from '../../../../static/showcases/countdown.html?raw';
import rawPlaybackRate from '../../../../static/showcases/playback-rate.html?raw';
import rawChapterSelection from '../../../../static/showcases/chapter-selection.html?raw';
import rawFirefoxPiP from '../../../../static/showcases/firefox-pip.html?raw';
import rawSpatialNavigation from '../../../../static/showcases/spatial-navigation.html?raw';
import rawThumbnailPreview from '../../../../static/showcases/thumbnail-preview.html?raw';
import rawToggleLiveAudioVideo from '../../../../static/showcases/toggle-live-audio-video.html?raw';
import { getTextFromHTML } from './example-parser.js';
import { html } from 'lit';

export const showcases= [
  {
    id: 'start-time',
    href: 'start-time.html',
    title: 'Start the player at a given position',
    description: html`In this showcase, we'll demonstrate how to load a video source and start playback at a specific position using Pillarbox. This can be useful when you want to provide users with the option to begin watching a video from a predefined timestamp. To achieve this functionality, follow the code snippet below:`,
    code: getTextFromHTML(rawStartTimeExample),
  },
  {
    id: 'multi-player',
    href: 'multi-player.html',
    title: 'Multiple Players',
    description: html`This example demonstrates how to incorporate multiple video players on a webpage.In this showcase, two players are initialized, each with its own configuration, a button allows to toggle the mute state for both players.`,
    code: getTextFromHTML(rawMultiPlayerExample),
  },
  {
    id: 'blocked-segments',
    href: 'blocked-segment.html',
    title: 'Detect Blocked Segments',
    description: html`This tutorial covers how to use Pillarbox to create a plugin that detects and notifies when a blocked segment is skipped. <br><br><b>Note:</b> The blocked segment starts at 29:26 for this example.`,
    code: getTextFromHTML(rawDetectBlockedSegmentsExample),
  },
  {
    id: 'chapters',
    href: 'chapters.html',
    title: 'Display Current Chapter',
    description: html`This showcase explains how to use Pillarbox to create a plugin that displays the currently playing chapter in a box above the progress bar.`,
    code: getTextFromHTML(rawDisplayCurrentChapterExample),
  },
  {
    id: 'skip-credits',
    href: 'skip-credits.html',
    title: 'Skip Credits',
    description: html`This example shows how to use the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/skip-button#readme" target="_blank">Pillarbox Skip Button component</a> to add a "Skip" button during detected credit intervals. <br><br><b>Note:</b> Seek to 26:40 to see the button.`,
    code: getTextFromHTML(rawSkipCreditsExample),
  },
  {
    id: 'playlist',
    href: 'playlist.html',
    title: 'Playlist',
    description: html`This example shows how to fetch media data for a set of video sources and load them into the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/pillarbox-playlist#readme" target="_blank">Pillarbox Playlist plugin</a> with metadata such as title and duration.`,
    code: getTextFromHTML(rawPlaylistExample),
  },
  {
    id: 'quality-menu',
    href: 'quality-menu.html',
    title: 'Quality Menu',
    description: html`In this showcase, we'll demonstrate how to display a quality selector menu using the <a href="https://github.com/videojs/videojs-contrib-quality-menu" target="_blank">videojs-contrib-quality-menu</a> plugin.`,
    code: getTextFromHTML(rawQualityMenuExample),
  },
  {
    id: 'countdown',
    href: 'countdown.html',
    title: 'Countdown Timer',
    description: html`In this showcase, we'll demonstrate how to display a countdown timer.`,
    code: getTextFromHTML(rawCountdown),
  },
  {
    id: 'playback-rate',
    href: 'playback-rate.html',
    title: 'Playback Rate',
    description: html`In this showcase, we'll demonstrate how to display the playback rate component.`,
    code: getTextFromHTML(rawPlaybackRate),
  },
  {
    id: 'chapter-selection',
    href: 'chapter-selection.html',
    title: 'Chapter Selection',
    description: html`In this showcase, we'll demonstrate how to display a chapter selector.`,
    code: getTextFromHTML(rawChapterSelection),
  },
  {
    id: 'firefox-pip',
    href: 'firefox-pip.html',
    title: 'Hide Firefox PiP Button',
    description: html`In this showcase, we'll demonstrate how to hide Firefox PiP Button. Activating or deactivating PiP in Firefox applies at the next player resize, such as when entering full screen mode. This appears to be due to an implementation bug in Firefox. Refer to the <a href="https://github.com/SRGSSR/pillarbox-web-demo/pull/57" target="_blank">PR</a> for more details.`,
    code: getTextFromHTML(rawFirefoxPiP),
  },
  {
    id: 'spatial-navigation',
    href: 'spatial-navigation.html',
    title: 'Enable Spatial Navigation',
    description: html`In this showcase, we will demonstrate how to enable <a href="https://videojs.com/guides/spatial-navigation/" target="_blank" rel="noopener noreferrer">spatial navigation</a>, allowing users to control the player with a remote on smart TVs like Tizen and webOS.<br><br>            <i>Note: If you're targeting TV devices with spatial navigation, consider removing the volume button and setting muted: false, as volume is typically handled by the device itself.</i>`,
    code: getTextFromHTML(rawSpatialNavigation),
  },
  {
    id: 'thumbnail-preview',
    href: 'thumbnail-preview.html',
    title: 'Thumbnail Preview',
    description: html`This example shows how to use the thumbnail preview metadata from the current SRGSSR source and inject it into the <a href="https://github.com/SRGSSR/pillarbox-web-suite/tree/main/packages/thumbnail-preview#readme" target="_blank">Thumbnail Preview plugin</a>.`,
    code: getTextFromHTML(rawThumbnailPreview),
  },
  {
    id: 'toggle-live-audio-video',
    href: 'toggle-live-audio-video.html',
    title: 'Toggle between an audio and a video live stream',
    description: html`This example shows how to switch between the audio and video streams of the same channel.`,
    code: getTextFromHTML(rawToggleLiveAudioVideo),
  }
];
