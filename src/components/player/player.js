/**
 * Initialized the demo player.
 *
 * @module
 */
import '../dialog/demo-dialog-component';
import PreferencesProvider
  from '../../layout/content/settings/preferences-provider';
import router from '../../router/router';
import Pillarbox from '@srgssr/pillarbox-web';
import { IL_DEFAULT_HOST } from '../../utils/il-provider.js';

const DEMO_PLAYER_ID = 'demo-player';
const DEFAULT_OPTIONS = {
  restoreEl: true
};

const preferencesToPlayerOptions = (preferences) => {
  return {
    muted: preferences.muted ?? true,
    autoplay: preferences.autoplay ?? false,
    debug: preferences.debug ?? false,
    srgOptions: {
      dataProviderHost: preferences.dataProviderHost ?? IL_DEFAULT_HOST
    }
  };
};
/**
 * Creates and configures a Pillarbox player.
 *
 * @param {Object} options - (Optional) options to customize the player behaviour.
 *
 * @returns {Object} The configured Pillarbox player instance.
 */
const createPlayer = (options = {}) => {
  window.player = new Pillarbox(DEMO_PLAYER_ID, {
    ...DEFAULT_OPTIONS,
    ...preferencesToPlayerOptions(PreferencesProvider.loadPreferences()),
    ...options
  });

  return window.player;
};

/**
 * Disposes of the Pillarbox video player instance.
 */
const destroyPlayer = () => {
  Pillarbox.getPlayer(DEMO_PLAYER_ID).dispose();
  window.player = null;
};

// Expose Pillarbox and player in the window object for debugging
window.pillarbox = Pillarbox;
// Configure the dialog
const playerDialog = document.querySelector('demo-dialog');

const toParams = (keySystems) => {
  const vendor = Object.keys(keySystems ?? {})[0];

  if (!vendor) {
    return {};
  }

  return {
    vendor,
    ...(vendor === 'com.apple.fps.1_0' ? keySystems[vendor] : { licenseUri: keySystems[vendor] })
  };
};

const toKeySystem = (params) => {
  if (!params.vendor) {
    return undefined;
  }

  const { certificateUri, licenseUri } = params;

  if (params.vendor === 'com.apple.fps.1_0') {
    return { [params.vendor]: { certificateUri, licenseUri } };
  }

  return { [params.vendor]: licenseUri };
};

export const asQueryParams = ({ src, type, keySystems }) => {
  return new URLSearchParams({ src, type, ...toParams(keySystems) }).toString();
};

playerDialog.addEventListener('close', () => {
  destroyPlayer();
  router.updateState({}, ['src', 'type', 'vendor', 'certificateUri', 'licenseUri']);
});

const loadPlayerFromRouter = (e) => {
  if (window.player) {
    return;
  }

  const params = e.detail.queryParams;

  if ('src' in params) {
    const { src, type } = params;
    const keySystems = toKeySystem(params);

    openPlayerModal({ src, type, keySystems });
  }
};

router.addEventListener('routechanged', loadPlayerFromRouter);
router.addEventListener('queryparams', loadPlayerFromRouter);

/**
 * Opens a modal containing a video player with specified source and type. Can only
 * load URN if the type 'srgssr/urn`is explicitly provided, otherwise the created
 * Pillarbox player tries to guess the type.
 *
 * @param {object} options - An object containing the source and type of the video to be played.
 * @param {string} options.src - The source URL of the video.
 * @param {string} [options.type] - (Optional) The type/format of the video (e.g., 'video/mp4').
 * @param {object} [options.keySystems] - (Optional) The DRM configuration for DRM protected sources.
 * @param {object} [options.playerOptions] - (Optional) Additional configuration for the player.
 * @param {Boolean} shouldUpdateRouter - Whether the router should be updated or not (Default: true).
 *
 * @returns {Object} The configured Pillarbox player instance.
 */
export const openPlayerModal = (
  { src, type, keySystems, playerOptions },
  shouldUpdateRouter = true
) => {
  const player = createPlayer(playerOptions ?? {});

  playerDialog.open = true;
  player.src({ src, type, keySystems });

  if (shouldUpdateRouter) {
    router.updateState({
      src,
      ...(type ? { type } : {}),
      ...toParams(keySystems)
    });
  }

  return player;
};
