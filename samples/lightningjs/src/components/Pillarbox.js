import Blits from '@lightningjs/blits';
import pillarbox from '@srgssr/pillarbox-web';

export default Blits.Component('Pillarbox', {
  template: `
    <Element>
      <Element w="120" h="120" mount="0.5" color="#0087CE90" :effects="[{type: 'radius', props: {radius:16}}]">
        <Element w="60%" h="60%" x="50%" y="50%" mount="0.5" :src="$playing ? 'assets/pause.svg' : 'assets/play.svg'"/>
      </Element>   
    </Element>
  `,
  props: ['src', 'type'],
  state() {
    return {
      player: null,
      playing: false,
    };
  },
  hooks: {
    ready() {
      this.load();
    },

    destroy() {
      if (this.player) this.player.dispose();
    }
  },
  input: {
    space() {
      this.togglePlay();
    }
  },
  methods: {
    load() {
      document.querySelector('#app').appendChild(
        pillarbox.dom.createEl('video', {
          id: 'main-player',
          className: 'video-js pillarbox-js',
          controls: false,
          crossOrigin: 'anonymous',
          style: `position: absolute; top: 0; left: 0; z-index: -1`,
        })
      );

      this.player = pillarbox('main-player', {
        children: [
          'mediaLoader',
          'posterImage',
          'textTrackDisplay',
          'loadingSpinner',
          'errorDisplay',
          'resizeManager'
        ],
      });
      this.player.src({ src: this.src, type: this.type || 'srgssr/urn' });

      this.player.on('play', () => this.playing = true);
      this.player.on(['pause', 'ended'], () => this.playing = false);
    },

    togglePlay() {
      if (this.player.paused()) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }
  },
});
