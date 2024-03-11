import {default as pillarbox, Player as PillarboxPlayer} from "@srgssr/pillarbox-web";

const player = pillarbox('main-player', {fill: true}) as PillarboxPlayer;
player.src({src: 'urn:rts:video:14646794', type: 'srgssr/urn'});
