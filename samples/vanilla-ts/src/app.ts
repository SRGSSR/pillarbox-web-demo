import pillarbox, {Player} from "@srgssr/pillarbox-web";

const player = pillarbox('main-player') as Player;
player.src({src: 'urn:rts:video:13774277', type: 'srgssr/urn'});
