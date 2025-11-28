import Blits from '@lightningjs/blits';
import Pillarbox from './components/Pillarbox.js';

export default Blits.Application({
  components: {
    Pillarbox,
  },
  template: `
    <Element w="1920" h="1080">
      <Pillarbox x="80" y="1000"
        ref='pillarbox'
        :src="'urn:rts:video:15532586'"
        :type="'srgssr/urn'"
      />
    </Element>
  `,
  hooks: {
    ready() {
      this.$select('pillarbox').$focus();
    }
  }
});
