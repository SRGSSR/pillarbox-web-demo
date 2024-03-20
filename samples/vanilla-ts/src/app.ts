import {default as pillarbox, Player as PillarboxPlayer} from "@srgssr/pillarbox-web";

const player = pillarbox('main-player') as PillarboxPlayer;
player.src({src: 'urn:rts:video:14646794', type: 'srgssr/urn'});
