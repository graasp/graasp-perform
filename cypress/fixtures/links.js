import { ITEM_TYPES } from '../../src/enums';
import { CURRENT_USER } from './members';
import { buildEmbeddedLinkExtra } from '../../src/utils/itemExtra';

export const GRAASP_LINK_ITEM = {
  id: 'ecafbd2a-5688-11eb-ae91-0242ac130002',
  type: ITEM_TYPES.LINK,
  name: 'graasp link',
  description: 'a description for graasp link',
  path: 'ecafbd2a_5688_11eb_ae93_0242ac130002',
  creator: CURRENT_USER.id,
  extra: buildEmbeddedLinkExtra({
    url: 'https://graasp.eu',
    thumbnails: ['https://graasp.eu/img/epfl/logo-tile.png'],
    icons: [
      'https://graasp.eu/cdn/img/epfl/favicons/favicon-32x32.png?v=yyxJ380oWY',
    ],
  }),
  settings: {
    isPinned: false,
    showChatbox: false,
  },
};

export const YOUTUBE_LINK_ITEM = {
  id: 'gcafbd2a-5688-11eb-ae93-0242ac130002',
  type: ITEM_TYPES.LINK,
  name: 'graasp youtube link',
  description: 'a description for graasp youtube link',
  creator: CURRENT_USER.id,
  path: 'gcafbd2a_5688_11eb_ae93_0242ac130002',
  extra: buildEmbeddedLinkExtra({
    url: 'https://www.youtube.com/watch?v=FmiEgBMTPLo',
    html: '<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://www.youtube.com/embed/FmiEgBMTPLo" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div>',
    thumbnails: ['https://i.ytimg.com/vi/FmiEgBMTPLo/maxresdefault.jpg'],
    icons: ['https://www.youtube.com/s/desktop/f0ff6c1d/img/favicon_96.png'],
  }),
  settings: {
    isPinned: false,
    showChatbox: false,
  },
};
